import { Float } from "react-native/Libraries/Types/CodegenTypes";

export type LocationModel = {
  lat: Float | undefined;
  lon: Float | undefined;
  postalCode: String | Number;
  streetAddress: String;
};
