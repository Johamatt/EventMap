// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';

const Category = {
  "MUSIC": "MUSIC",
  "FESTIVAL": "FESTIVAL",
  "NIGHTLIFE": "NIGHTLIFE",
  "SPORTFITNESS": "SPORTFITNESS",
  "KIDS": "KIDS",
  "HEALTH": "HEALTH",
  "TRIP": "TRIP",
  "WORKSHOPDIY": "WORKSHOPDIY",
  "FOODDRINK": "FOODDRINK",
  "BUSINESS": "BUSINESS",
  "ACTIVITY": "ACTIVITY",
  "CULTURE": "CULTURE",
  "OTHER": "OTHER"
};

const { Category, Images, Location, Event } = initSchema(schema);

export {
  Category,
  Images,
  Location,
  Event,
  Category
};