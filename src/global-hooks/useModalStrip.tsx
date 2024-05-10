import { useState, useEffect } from "react";
import { useAppDispatch } from "../redux/hooks";
import { closeModal, openModal } from "../redux/uireducers/modalstrip";

function useModalStrip() {
  const [timeInterval, setTimeInterval] = useState<NodeJS.Timeout | null>(
    null
  );
  const dispatch = useAppDispatch();

  const showModalStrip = async (modalType: string, message: string, time: number) => {
    if (typeof window !== "undefined") {
      if (timeInterval) {
        clearTimeout(timeInterval);
      }
      dispatch(openModal({ modalType, message }));

      setTimeInterval(
        setTimeout(() => {
          dispatch(closeModal());
        }, time)
      );
    }
  };

  return { showModalStrip };
}

export default useModalStrip;
