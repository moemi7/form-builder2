import { TemplateType } from '@prisma/client';
import client from '../../../utils/prismadb';
import type { NextApiRequest, NextApiResponse } from 'next';

type Data = TemplateType;

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data | { error: string }>
) {
  if (req.method === 'POST') {
    try {
      const { 
        formName,
        formID, 
        createdAt, 
        updatedAt, 
        lastPublishedAt, 
        publishStatus, 
        creator, 
        formLayoutComponents 
      } = req.body as {
        formName, 
        formID,
        createdAt, 
        updatedAt, 
        lastPublishedAt, 
        publishStatus, 
        creator, 
        formLayoutComponents 

      }

      // Create the data in the database using Prisma
// Create the data in the database using Prisma
const createdData: TemplateType = await client.templateType.create({
  data: {
      formName,
      formID,
      createdAt: createdAt ? new Date(createdAt) : new Date(),
      updatedAt: updatedAt ? new Date(updatedAt) : new Date(),
      lastPublishedAt: lastPublishedAt ? new Date(lastPublishedAt) : null,
      publishStatus,
      creator,
      // Map over formLayoutComponents to create individual FormLayoutComponent entities
      formLayoutComponents: {
          create: formLayoutComponents.flatMap(component => component.children)
      },
  },
});

    

      // Respond with the created data
      res.status(200).json(createdData);
    } catch (error) {
      // If an error occurs during data creation, respond with an error message

      res.status(500).json(error);  
      console.log(error);          //({ error: 'Failed to create data' });
    }
  } else {
    // If the request method is not POST, respond with a 405 Method Not Allowed status
    res.setHeader('Allow', ['POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
