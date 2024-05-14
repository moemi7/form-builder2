'use client'
import type { Metadata } from 'next'
import '../assets/css/plugins.css';
import '../assets/css/style.css';
import '../index.css';

import React from 'react';
import routes from '../utils/routes';
import { BrowserRouter, RouterProvider, createBrowserRouter } from 'react-router-dom';
import { store } from "../redux/store";
import { Provider } from 'react-redux'
import BackdropCircularProgressComponent from '../components/BackdropCircularProgressComponent';
import ModalStrip from '../components/ModalStrip';

 
//export const metadata: Metadata = {
 // title: 'React App',
 // description: 'Web site created with Next.js.',
//}

 
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <Provider store={store}>
     <BackdropCircularProgressComponent />
     <ModalStrip />{children}</Provider>
  )
}

//         <div id="root">{<Provider store={store}><BackdropCircularProgressComponent /><ModalStrip />{children}</Provider>}</div>
// <Provider store={store}>
 // <BackdropCircularProgressComponent />
 // <ModalStrip />
 // <RouterProvider router={router} />
//</Provider>