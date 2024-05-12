import React from 'react'
import { RouteObject } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import FormBuilderPage from "../appPages/formbuilder/page";
import TemplatesPage from "../appPages/TemplatesPage/page";
import Error404 from '../appPages/Error404';
import ShowcasePage from '../appPages/ShowcasePage/page';


const routes: RouteObject[] = [
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <Error404 />,
    children: [
      {
        path: "formbuilder/:formId",
        element: <FormBuilderPage />,
      },
      {
        path: "/",
        element: <TemplatesPage />,
      },
      {
        path: "/showcase",
        element: <ShowcasePage />,
      },
    ],
  },
];

export default routes;