import React from 'react';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { store } from "../../redux/store";
import { Provider } from 'react-redux'
import BackdropCircularProgressComponent from '../../components/BackdropCircularProgressComponent';
import ModalStrip from '../../components/ModalStrip';





 
export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex h-screen flex-col md:flex-row md:overflow-hidden">
      <div className="w-full flex-none md:w-64">
      </div>
      <div className="flex-grow p-6 md:overflow-y-auto md:p-12"><Provider store={store}><BackdropCircularProgressComponent /><ModalStrip />{children}</Provider></div>
    </div>
  );
}

