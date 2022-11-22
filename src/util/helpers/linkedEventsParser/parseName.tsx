import { Name } from "../../../API";

export function parseName(data: any) {
      //@ts-ignore
  let names: Name = {
    fi: data?.fi?.name,
    en: data?.en?.name,
    sv: data?.sv?.name,
    ru: data?.ru?.name,
    de: data?.de?.name,
    jp: data?.ja?.name,
    zh: data?.zh?.name,
  };

  return names;
}
