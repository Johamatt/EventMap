import { Company, Description, Links } from "../../../API";

export function parseLinks(data: any) {
      //@ts-ignore
  let links: Links = {
    siteURL: data.siteUrl,
    otherURL: data.storeUrl,
  };

  return links;
}
