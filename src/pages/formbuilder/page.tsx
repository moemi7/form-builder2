import React, { FunctionComponent, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import useModalStrip from "../../global-hooks/useModalStrip";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";

interface FormBuilderPageProps {}

const FormBuilderPage: FunctionComponent<FormBuilderPageProps> = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const { showModalStrip } = useModalStrip();
  const { formId } = useParams();
  const template = useAppSelector((state) => state.entities.formBuilder.selectedTemplate);

  useEffect(() => {
    const fetchTemplate = async () => {
      try {
        const { getSingleTemplate, setSelectedTemplateNull } = await import("../../redux/entities/formBuilderEntity");
        const template = await dispatch(getSingleTemplate(formId as string)).unwrap();
        console.log(template);
        if (!template) {
          throw new Error("Not found");
        }
      } catch (ex) {
        showModalStrip("danger", "The form id is not correct", 5000);
        navigate("/");
      }
    };

    fetchTemplate();

    return () => {
      // Setting template to null when unmounting.
      dispatch(setSelectedTemplateNull());
    };
  }, []);

  const defaultForm = {
    id: "0",
    formName: "",
    formID: "0",
    createdAt: 0,
    creator: "",
    formLayoutComponents: [],
    lastPublishedAt: 0,
    publishHistory: [],
    publishStatus: "draft",
    updatedAt: 0,
  };

  const FormBuilder = React.lazy(() => import("../../components/FormBuilder/FormBuilder"));

  return (
    <>
      {template ? (
        <React.Suspense fallback={<div>Loading...</div>}>
          <FormBuilder template={template ? template : defaultForm} />
        </React.Suspense>
      ) : null}
    </>
  );
};

export default FormBuilderPage;
