import { JSONReader } from './json-reader';
import { DataProcessor } from './data-processor';
import * as path from 'path';
import * as fs from 'fs';

async function main() {
  const jsonReader = new JSONReader();
  const dataProcessor = new DataProcessor();

  console.log('Зчитування даних з датасетів...');

  //---------------------------------------------------------------------------

  const orderDetailFilePath =
    './db-data-sets/data-sets-json/order_details.json';
  const orderFilePath = './db-data-sets/data-sets-json/orders.json';
  const pizzaFilePath = './db-data-sets/data-sets-json/pizzas.json';
  const pizzaTypesFilePath = './db-data-sets/data-sets-json/pizza_types.json';
  const locationFilePath = './db-data-sets/data-sets-json/locations.json';
  const partnerLocationFilePath =
    './db-data-sets/db-data/partner_locations.json';

  const orderDetailData = await jsonReader.readJSON(orderDetailFilePath);
  const orderData = await jsonReader.readJSON(orderFilePath);
  const pizzaData = await jsonReader.readJSON(pizzaFilePath);
  const pizzaTypesData = await jsonReader.readJSON(pizzaTypesFilePath);
  const locationData = await jsonReader.readJSON(locationFilePath);
  const partnerLocationData = await jsonReader.readJSON(
    partnerLocationFilePath,
  );

  //---------------------------------------------------------------------------

  console.log('Дані успішно зчитані.');

  console.log('Генерація даних...');

  //---------------------------------------------------------------------------

  const assortmentSegments =
    await dataProcessor.generateAssortmentSegments(pizzaTypesData);
  const orderDetails = await dataProcessor.generateOrderDetails(
    orderDetailData,
    pizzaData,
    pizzaTypesData,
  );
  const orderRecords = await dataProcessor.generateOrderRecords(orderData);
  const partner = await dataProcessor.generatePartners();
  const partnerLocations =
    await dataProcessor.generatePartnerLocations(locationData);
  const employee = await dataProcessor.generateEmployees();
  const loyaltyUsers = await dataProcessor.generateLoyaltyUsers();
  const loyaltyCards = await dataProcessor.generateLoyaltyCards();
  const feedbacks = await dataProcessor.generateFeedbacks(orderRecords);
  const pointTransactions = await dataProcessor.generatePointTransactions(
    orderRecords,
    orderDetails,
    assortmentSegments,
  );
  const loyaltyPoints =
    await dataProcessor.generateLoyaltyPoints(pointTransactions);

  //---------------------------------------------------------------------------

  console.log('Дані згенеровані.');

  console.log('Збереження даних у JSON файлі...');

  //---------------------------------------------------------------------------

  const assortmentSegmentOutputPath = path.join(
    __dirname,
    'db-data',
    'assortment_segments.json',
  );
  const orderDetailOutputPath = path.join(
    __dirname,
    'db-data',
    'order_details.json',
  );
  const orderOutputPath = path.join(__dirname, 'db-data', 'order_records.json');
  const partnerOutputPath = path.join(__dirname, 'db-data', 'partners.json');
  const partnerLocationOutputPath = path.join(
    __dirname,
    'db-data',
    'partner_locations.json',
  );
  const employeeOutputPath = path.join(__dirname, 'db-data', 'employees.json');
  const loyaltyUserOutputPath = path.join(
    __dirname,
    'db-data',
    'loyalty_users.json',
  );
  const loyaltyCardOutputPath = path.join(
    __dirname,
    'db-data',
    'loyalty_cards.json',
  );
  const feedbackOutputPath = path.join(__dirname, 'db-data', 'feedbacks.json');
  const pointTransactionOutputPath = path.join(
    __dirname,
    'db-data',
    'point_transactions.json',
  );
  const loyaltyPointsOutputPath = path.join(
    __dirname,
    'db-data',
    'loyalty_points.json',
  );

  //---------------------------------------------------------------------------

  fs.writeFileSync(
    assortmentSegmentOutputPath,
    JSON.stringify(assortmentSegments, null, 2),
  );
  fs.writeFileSync(
    orderDetailOutputPath,
    JSON.stringify(orderDetails, null, 2),
  );
  fs.writeFileSync(orderOutputPath, JSON.stringify(orderRecords, null, 2));
  fs.writeFileSync(partnerOutputPath, JSON.stringify(partner, null, 2));
  fs.writeFileSync(
    partnerLocationOutputPath,
    JSON.stringify(partnerLocations, null, 2),
  );
  fs.writeFileSync(employeeOutputPath, JSON.stringify(employee, null, 2));
  fs.writeFileSync(
    loyaltyUserOutputPath,
    JSON.stringify(loyaltyUsers, null, 2),
  );
  fs.writeFileSync(
    loyaltyCardOutputPath,
    JSON.stringify(loyaltyCards, null, 2),
  );
  fs.writeFileSync(feedbackOutputPath, JSON.stringify(feedbacks, null, 2));
  fs.writeFileSync(
    pointTransactionOutputPath,
    JSON.stringify(pointTransactions, null, 2),
  );
  fs.writeFileSync(
    loyaltyPointsOutputPath,
    JSON.stringify(loyaltyPoints, null, 2),
  );

  console.log('Дані збережено у JSON файлі.');
}

main().catch((error) => {
  console.error('Помилка під час генерації даних:', error);
});
