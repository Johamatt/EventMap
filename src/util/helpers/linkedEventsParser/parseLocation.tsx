import { Company, Location } from "../../../API";

export function parseLocation(data: any) {
      //@ts-ignore
  let Location: Location = {
    streetAddress: data.streetName,
    lat: data.location.lat,
    lon: data.location.long,
    postalCode: data.postalCode,
  };

  return Location;
}
