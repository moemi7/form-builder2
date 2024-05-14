import React, { FunctionComponent, useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { getAllTemplates } from "../../redux/entities/formBuilderEntity";
import { useNavigate } from "react-router-dom";
import NewFormDialogComponent from "../../components/FormTemplates/NewFormDialogComponent";
import FormLayoutComponent from "../../components/FormTemplates/FormLayoutComponent";
import Button from "@mui/material/Button";
import {Link} from "react-router-dom";


interface TemplatesPageProps {}

const TemplatesPage: FunctionComponent<TemplatesPageProps> = () => {
  
  const templates = useAppSelector(
    (state) => state.entities.formBuilder.allTemplates
  );
  const dispatch = useAppDispatch();

  const [openDialog, setOpenDialog] = useState<boolean>(false);

  const [formId, setFormId] = useState<any>('');

  const handleInputChange = (event : React.ChangeEvent<HTMLInputElement>) => {
    setFormId(event.target.value);
  }

  useEffect(() => {
    if (templates.length === 0) {         //
      dispatch(getAllTemplates());
    }
  }, []);

  const newFormLayout = {
    border: "1px dashed",
    width: "150px",
    height: "150px",
    fontSize: "2.7rem",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    cursor: "pointer",
    borderRadius: "9px",
  };

  return (
    <>
      <div className="d-flex mt-5 flex-column align-items-center justify-content-center">
        <h3>Alle Templates</h3>
        <div className="form-templates row mt-3">
          <FormLayoutComponent
            createdFormLayout={false}
            setOpenDialog={setOpenDialog}
          />
          {templates.map((template) => (
            <FormLayoutComponent
              key={template.id}
              template={template}
              createdFormLayout={true}
            />
          ))}
        </div>
        <Button component={Link} to={`/showcase?formid=${formId}`} variant="contained">
          Bekijk je configurator
        </Button>
        <p style={{'color':'black'}}>Vul je formId in</p>
        <input value={formId} onChange={handleInputChange}></input>
   

      </div>

      <NewFormDialogComponent
        openDialog={openDialog}
        setOpenDialog={setOpenDialog}
      />
    </>
  );
};

export default TemplatesPage;
