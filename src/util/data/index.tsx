import { LocationObject } from "expo-location";

export let eventscheduleoptions: Array<string> = [
  "Next Week",
  "All upcoming",
  "This Weekend",
  "This Week",
  "Today",
  "Tomorrow",
  "Starting & on Going",
];

export const Helsinki: LocationObject = {
  coords: {
    latitude: 60.192059,
    longitude: 24.945831,
    altitude: 0,
    accuracy: 600,
    altitudeAccuracy: 0,
    heading: 0,
    speed: 0,
  },
  timestamp: Date.now(),
  mocked: false,
};

export const Vantaa: LocationObject = {
  coords: {
    latitude: 60.293352,
    longitude: 25.037769,
    altitude: 0,
    accuracy: 600,
    altitudeAccuracy: 0,
    heading: 0,
    speed: 0,
  },
  timestamp: Date.now(),
  mocked: false,
};

export const Espoo: LocationObject = {
  coords: {
    latitude: 60.20549,
    longitude: 24.655899,
    altitude: 0,
    accuracy: 600,
    altitudeAccuracy: 0,
    heading: 0,
    speed: 0,
  },
  timestamp: Date.now(),
  mocked: false,
};
