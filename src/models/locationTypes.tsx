import { Float } from "react-native/Libraries/Types/CodegenTypes";

export type LocationModel = {
  createdAt?: Date;
  lat: Float | undefined;
  lon: Float | undefined;
  owner?: null | undefined | String;
  postalCode: String | Number;
  streetAddess: String;
  updatedAt?: Date;
  city?: String;
};
