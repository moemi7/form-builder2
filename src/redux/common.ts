const axios = require('axios');
import { createAsyncThunk } from '@reduxjs/toolkit';
import client from '../utils/prismadb';


export const saveToLocalStorage = (key: string, value:string)=>{
  window.localStorage.setItem(key,value);
}

export const getFromLocalStorage = (key: string)=>{
  return window.localStorage.getItem(key) as string;
}
export async function test(){

    let lijst = {
      'formName' : 'bloemen'
    }

  const response = await fetch('/api/savetest/route', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify( lijst ) // Assuming you want to include the key along with the template data
  });




}

export const saveToDatabase = async (key: string, templateData:string)=>{
  try {
    // Parse the templateData string into an object
    //console.log(templateData);
    const templateObject = JSON.parse(templateData);
    const formID = 'placeholder';
    //const formName = JSON.parse(templateData)['formName'];
    console.log(templateObject.formID);
    console.log(templateObject.formLayoutComponents[0]);
    console.log(templateObject.formLayoutComponents.flatMap(component => component.children));
   // console.log(key + formName)
   
    console.log(JSON.stringify({formID, key, ...templateObject} ));

    // Make a POST request to your API endpoint
    const response = await fetch('/api/savetemplate/route', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({formID,  key, ...templateObject} ), // Assuming you want to include the key along with the template data
    });
   // console.log(response.body);
   //console.log(JSON.stringify({  templateObject }));
   //const response = await axios.post('/api/savetemplate/route', JSON.stringify({ templateObject }));
  // const response2 = await axios.post('/api/savetest/route', JSON.stringify({ formName }) );


    // Check if the request was successful
   // if (!response.ok) {
      // Handle the error if the request was not successful
   //   throw new Error('Failed to save data to the database');
  //  }
    if (!response.ok) {
      // Handle the error if the request was not successful
      throw new Error('Failed to save data to the database nr2');
    }

    // If the request was successful, parse the response JSON
    const data = await response.json();
    console.log(data);
  } catch (error) {
    // Handle any errors that occur during the process
    console.error('Error saving data to the database:', error);
  }


  //window.localStorage.setItem(key,value);
  //Prisma.InvoiceScalarFieldEnum         Hier de api call aync
   // console.log(key + templateData);
   // const templateObject = JSON.parse(templateData);
   // async function getdata() {
   //   try{
   //   const leads =  await client.templateType.create({key,templateData);
   //   console.log(leads);     } 
      //return ({ name: leads });}
     // catch(error){
    //    console.log(error)
    //  }}
    
    
    //getdata();

  
}
/*
formLayoutComponents: {
  create: formLayoutComponents.flatMap(component => {
      // Check if component.components is defined before mapping
      if (component.components) {
          return component.components.map(subComponent => ({
              controlName: subComponent.controlName,
              displayText: subComponent.displayText,
              itemType: subComponent.itemType,
              icon: subComponent.icon,
              heading: subComponent.heading,
              subHeading: subComponent.subHeading,
              desktopWidth: subComponent.desktopWidth || null,
          }));
      } else {
          return []; // Return an empty array if component.components is undefined
      }
  })
},
*/