import crypto from 'crypto';

export async function getRandomNumber(): Promise<number> {
  return Math.floor(Math.random() * 10000 + 1);
}

export async function getRandomString(length = 20): Promise<string> {
  return crypto.randomBytes(length).toString('hex');
}

// Helpers for random data
const firstNames = ['John', 'Anna', 'Mike', 'Sara', 'Tom', 'Julia', 'Chris', 'Kate', 'Robert', 'Emma'];
const lastNames = ['Smith', 'Johnson', 'Williams', 'Brown', 'Jones', 'Miller', 'Davis', 'Wilson', 'Moore', 'Taylor'];
const companies = ['Acme Corp', 'Globex', 'Initech', 'Umbrella', 'Wayne Enterprises', 'Stark Industries'];
const countries = ['Poland', 'USA', 'Germany', 'France', 'UK', 'Spain', 'Italy', 'Canada', 'Australia', 'Japan'];
const cities = ['Warsaw', 'New York', 'Berlin', 'Paris', 'London', 'Madrid', 'Rome', 'Toronto', 'Sydney', 'Tokyo'];

function pickRandom<T>(arr: T[]): T {
  return arr[Math.floor(Math.random() * arr.length)];
}

export async function getRandomFirstName(): Promise<string> {
  return pickRandom(firstNames);
}

export async function getRandomLastName(): Promise<string> {
  return pickRandom(lastNames);
}

export async function getRandomEmail(): Promise<string> {
  const firstName = await getRandomFirstName();
  const lastName = await getRandomLastName();
  const num = await getRandomNumber();
  return `${firstName.toLowerCase()}.${lastName.toLowerCase()}${num}@example.com`;
}

export async function getRandomPassword(length = 12): Promise<string> {
  return crypto.randomBytes(length).toString('base64').slice(0, length);
}

export async function getRandomCompany(): Promise<string> {
  return pickRandom(companies);
}

export async function getRandomAddress(): Promise<string> {
  const num = await getRandomNumber();
  return `${num} ${pickRandom(['Main St', 'High St', 'Park Ave', 'Broadway', 'Maple Rd'])}`;
}

export async function getRandomCountry(): Promise<string> {
  return pickRandom(countries);
}

export async function getRandomCity(): Promise<string> {
  return pickRandom(cities);
}

export async function getRandomZipcode(): Promise<string> {
  return `${Math.floor(10000 + Math.random() * 90000)}`;
}

export async function getRandomMobileNumber(): Promise<string> {
  return `+48${Math.floor(500000000 + Math.random() * 499999999)}`;
}