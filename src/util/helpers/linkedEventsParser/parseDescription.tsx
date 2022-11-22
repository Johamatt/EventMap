import { Company, Description } from "../../../API";

export function parseDescription(data: any) {

    //@ts-ignore
  let descriptions: Description = {
    fi: data.fi?.description,
    en: data.en?.description,
    sv: data.sv?.description,
    ru: data.ru?.description,
    de: data.de?.description,
    jp: data.ja?.description,
    zh: data.zh?.description,
  };

  return descriptions;
}
