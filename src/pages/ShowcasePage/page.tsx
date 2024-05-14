import React, { FunctionComponent, useEffect, useState } from "react";
import FormBuilder from "../../components/FormBuilder/FormBuilder";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { useNavigate, useParams, useSearchParams } from "react-router-dom";
import {
  getSingleTemplate,
  setSelectedTemplateNull,
} from "../../redux/entities/formBuilderEntity";
import useModalStrip from "../../global-hooks/useModalStrip";
import Previewdesktop from "../../components/FormBuilder/subcomponents/form-preview/Previewdesktop";
import StepperFormPreview from "../../components/FormBuilder/subcomponents/form-preview/StepperFormPreview";
import ConfiguratorPreview from "../../components/FormBuilder/subcomponents/form-preview/ConfiguratorPreview";
import FormLayoutComponent from "../../components/FormTemplates/FormLayoutComponent";
import { TemplateType, FormLayoutComponentsType } from "../../types/FormTemplateTypes";
import { template } from "lodash";
import { type } from "@testing-library/user-event/dist/type";
import FormPreview from "../../components/FormBuilder/subcomponents/FormPreview";
import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

interface ShowcaseProps {
  //screenType: string;
}

const Showcase: FunctionComponent<ShowcaseProps> = () => {
  const dispatch = useAppDispatch();
  const { showModalStrip } = useModalStrip();
  const [searchparameters] = useSearchParams();
  const  formId  = searchparameters.get('formid');
  const [formLayoutComponents, setFormLayoutComponents] = useState<FormLayoutComponentsType[]>([]);
  const [template1, settemplate1] = useState<TemplateType>();
  const [loading, setLoading] = useState<boolean>(true);
  

  useEffect(() => {
    const fetchData = async () => {
      //formid ---> redux functie~!!!!!!!!!!!!!!!!!!!!!
        const template1 = await dispatch(getSingleTemplate(formId as string)).unwrap();
        if (!template1) {
          throw new Error('Not found');
        }
        settemplate1(template1);
        setFormLayoutComponents(template1.formLayoutComponents);
        setLoading(false);
      
    };

    fetchData();

    return () => {
      // Setting template to null when unmounting.
      dispatch(setSelectedTemplateNull());
    };
  }, [dispatch, formId]);

  //if (loading) {
  //  return <div>Loading...</div>;
  //}

  return (
    <>
      <div className="d-flex mt-5 flex-column align-items-center justify-content-center">
        <h3>Eerste template</h3>
        <div className="form-templates row mt-3">
          <ConfiguratorPreview formLayoutComponents={formLayoutComponents} screenType={'mobile'} />
        </div>
      </div>
    </>
  );
};

export default Showcase;
