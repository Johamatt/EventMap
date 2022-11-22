import { Price, PRICINGTYPE } from "../../../API";

export function parsePrice(data: any) {
  let pricingtype: PRICINGTYPE[] = [];

  if (data.pricingType === "chargeable") {
    pricingtype.push(PRICINGTYPE.CHARGEABLE);
  }
  if (data.pricingType === "free") {
    pricingtype.push(PRICINGTYPE.FREE);
  }
  //@ts-ignore
  let price: Price = {
    EurFrom: data.priceEur_from,
    EurTo: data.priceEur_to,
    pricingtype: pricingtype,
  };

  return price;
}
