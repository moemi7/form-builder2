import client from '../../../utils/prismadb';
import type { NextApiRequest, NextApiResponse } from 'next'


// Define your Data type
type Data = {
  name: any;
}






export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
  ) {

      try {
        // Assuming req.body contains the data you want to save
        
  
        // Create the data in the database using Prisma
        const templates = await client.templateType.findMany();
  
        // Respond with the created data
        res.status(200).json(templates);
      } catch (error) {
        // If an error occurs during data creation, respond with an error message
        res.status(500).json({ error: 'Failed to create data' });
      }
  }