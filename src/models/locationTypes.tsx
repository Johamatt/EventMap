import { Float } from "react-native/Libraries/Types/CodegenTypes";

export type LocationModel = {
  createdAt: Date;
  id: String;
  lat: Float;
  lon: Float;
  owner: null | undefined | String;
  postalCode: String | Number;
  streetAddess: String;
  updatedAt: Date;
};
