import fs from 'node:fs/promises';

import bodyParser from 'body-parser';
import express from 'express';

const app = express();

app.use(bodyParser.json());
app.use(express.static('public'));

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  next();
});

app.get('/meals', async (req, res) => {
  const meals = await fs.readFile('./data/available-meals.json', 'utf8');
  res.json(JSON.parse(meals));
});

app.post('/orders', async (req, res) => {
  const orderData = req.body.order;

  if (orderData === null || orderData.items === null || orderData.items.length === 0) {
    return res
      .status(400)
      .json({ message: 'Missing data.' });
  }

  if (
    orderData.customer.email === null ||
    !orderData.customer.email.includes('@') ||
    orderData.customer.name === null ||
    orderData.customer.name.trim() === '' ||
    orderData.customer.street === null ||
    orderData.customer.street.trim() === '' ||
    orderData.customer['postal-code'] === null ||
    orderData.customer['postal-code'].trim() === '' ||
    orderData.customer.city === null ||
    orderData.customer.city.trim() === ''
  ) {
    return res.status(400).json({
      message:
        'Missing data: Email, name, street, postal code or city is missing.',
    });
  }

  const newOrder = {
    ...orderData,
    id: (Math.random() * 1000).toString(),
  };
  const orders = await fs.readFile('./data/orders.json', 'utf8');
  const allOrders = JSON.parse(orders);
  allOrders.push(newOrder);
  await fs.writeFile('./data/orders.json', JSON.stringify(allOrders));
  res.status(201).json({ message: 'Order created!' });
});

app.post('/contact', async (req, res) => {
  const contactData = req.body;

  if (
    !contactData.name ||
    contactData.name.trim() === '' ||
    !contactData.email ||
    !contactData.email.includes('@') ||
    !contactData.subject ||
    contactData.subject.trim() === '' ||
    !contactData.message ||
    contactData.message.trim() === ''
  ) {
    return res.status(400).json({
      message: 'Missing data: Name, email, subject, or message is missing.',
    });
  }

  const newContact = {
    ...contactData,
    id: (Math.random() * 1000).toString(),
    timestamp: new Date().toISOString(),
  };

  // Save contact to contact.json file
  try {
    const contacts = await fs.readFile('./data/contact.json', 'utf8');
    const allContacts = JSON.parse(contacts);
    allContacts.push(newContact);
    await fs.writeFile('./data/contact.json', JSON.stringify(allContacts, null, 2));
  } catch (error) {
    // If file doesn't exist, create it with the new contact
    await fs.writeFile('./data/contact.json', JSON.stringify([newContact], null, 2));
  }

  res.status(200).json({ message: 'Message received successfully!' });
});

app.use((req, res) => {
  if (req.method === 'OPTIONS') {
    return res.sendStatus(200);
  }

  res.status(404).json({ message: 'Not found' });
});

app.listen(3000);
