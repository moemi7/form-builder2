import { Test } from '@prisma/client';
import client from '../../../utils/prismadb';
import type { NextApiRequest, NextApiResponse } from 'next';
const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient({
  log: ['info', 'query', 'warn', 'error'], // Enable all logging levels
});

type Data = Test;

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data | { error: string }>
) {
  if (req.method === 'POST') {
    try {
      const  {formName}  = req.body as {
        formName: string
      };

      console.log('Received formName:', formName);
      console.log(req)

      // Create the data in the database using Prisma
      const createdData: Test = await prisma.Test.create({
        data: {
          formName: formName
        }
      });

      // Respond with the created data
      res.status(200).json(createdData);
    } catch (error) {
      // If an error occurs during data creation, respond with an error message
      console.error('Error creating data:', error);
      res.status(500).json({ error: 'Failed to create data' });
    }
  } else {
    // If the request method is not POST, respond with a 405 Method Not Allowed status
    res.setHeader('Allow', ['POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
