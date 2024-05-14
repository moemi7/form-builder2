import React from 'react';
import routes from '../utils/routes';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { store } from "../redux/store";
import { Provider } from 'react-redux'
import BackdropCircularProgressComponent from '../components/BackdropCircularProgressComponent';
import ModalStrip from '../components/ModalStrip';
import TemplatesPage from 'src/pages/TemplatesPage/page';


function App() {

  const router = createBrowserRouter(routes)
  
  return (
    <>
      <RouterProvider router={router} />
    </>
  );

 // <Provider store={store}>
 // <BackdropCircularProgressComponent />
 // <ModalStrip />
 // <RouterProvider router={router} />
//</Provider>
}

export default App;
