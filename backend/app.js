import crypto from 'node:crypto';
import fs from 'node:fs/promises';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

import cors from 'cors';
import express from 'express';
import rateLimit from 'express-rate-limit';
import helmet from 'helmet';

const __dirname = dirname(fileURLToPath(import.meta.url));
const dataFile = (name) => join(__dirname, 'data', name);

/** Serialize writes to JSON data files to avoid corruption under concurrent requests. */
let writeQueue = Promise.resolve();

function enqueueWrite(fn) {
  const run = writeQueue.then(fn);
  writeQueue = run.catch(() => {});
  return run;
}

const app = express();

const clientOrigin = process.env.CLIENT_ORIGIN;

app.use(
  helmet({
    crossOriginResourcePolicy: { policy: 'cross-origin' },
  })
);

app.use(
  cors({
    origin: clientOrigin || '*',
    methods: ['GET', 'POST', 'OPTIONS'],
    allowedHeaders: ['Content-Type'],
  })
);

app.use(express.json({ limit: '256kb' }));
app.use(express.static(join(__dirname, 'public')));

const postLimiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 100,
  standardHeaders: true,
  legacyHeaders: false,
});

app.get('/meals', async (req, res) => {
  try {
    const meals = await fs.readFile(dataFile('available-meals.json'), 'utf8');
    res.json(JSON.parse(meals));
  } catch {
    res.status(500).json({ message: 'Could not load meals.' });
  }
});

app.post('/orders', postLimiter, async (req, res) => {
  const orderData = req.body?.order;

  if (orderData == null || orderData.items == null || orderData.items.length === 0) {
    return res.status(400).json({ message: 'Missing data.' });
  }

  const { customer } = orderData;
  if (
    customer == null ||
    customer.email == null ||
    !String(customer.email).includes('@') ||
    customer.name == null ||
    String(customer.name).trim() === '' ||
    customer.street == null ||
    String(customer.street).trim() === '' ||
    customer['postal-code'] == null ||
    String(customer['postal-code']).trim() === '' ||
    customer.city == null ||
    String(customer.city).trim() === ''
  ) {
    return res.status(400).json({
      message: 'Missing data: Email, name, street, postal code or city is missing.',
    });
  }

  const newOrder = {
    ...orderData,
    id: crypto.randomUUID(),
  };

  try {
    await enqueueWrite(async () => {
      const raw = await fs.readFile(dataFile('orders.json'), 'utf8');
      const allOrders = JSON.parse(raw);
      allOrders.push(newOrder);
      await fs.writeFile(dataFile('orders.json'), JSON.stringify(allOrders, null, 2));
    });
    res.status(201).json({ message: 'Order created!' });
  } catch {
    res.status(500).json({ message: 'Could not save order.' });
  }
});

app.post('/contact', postLimiter, async (req, res) => {
  const contactData = req.body;

  if (
    !contactData?.name ||
    String(contactData.name).trim() === '' ||
    !contactData?.email ||
    !String(contactData.email).includes('@') ||
    !contactData?.subject ||
    String(contactData.subject).trim() === '' ||
    !contactData?.message ||
    String(contactData.message).trim() === ''
  ) {
    return res.status(400).json({
      message: 'Missing data: Name, email, subject, or message is missing.',
    });
  }

  const newContact = {
    ...contactData,
    id: crypto.randomUUID(),
    timestamp: new Date().toISOString(),
  };

  try {
    await enqueueWrite(async () => {
      try {
        const contacts = await fs.readFile(dataFile('contact.json'), 'utf8');
        const allContacts = JSON.parse(contacts);
        allContacts.push(newContact);
        await fs.writeFile(dataFile('contact.json'), JSON.stringify(allContacts, null, 2));
      } catch {
        await fs.writeFile(dataFile('contact.json'), JSON.stringify([newContact], null, 2));
      }
    });
    res.status(200).json({ message: 'Message received successfully!' });
  } catch {
    res.status(500).json({ message: 'Could not save message.' });
  }
});

app.use((req, res) => {
  res.status(404).json({ message: 'Not found' });
});

export { app };
