import { CATEGORY } from "../../API";

export function parseCategoryString(
  categories: Array<CATEGORY> | undefined
): string | undefined {
  let categoriesString: string = "";

  if (categories === undefined) {
    return undefined;
  }

  if (categories.includes(CATEGORY.CONCERT)) {
    categoriesString = categoriesString + "yso:p11185,";
  }

  if (categories.includes(CATEGORY.FESTIVAL || CATEGORY.EXPO)) {
    categoriesString = categoriesString + "yso:p1304,yso:p4892,";
  }

  if (categories.includes(CATEGORY.GAMES)) {
    categoriesString = categoriesString + "yso:p6062,";
  }

  if (categories.includes(CATEGORY.SPORT)) {
    categoriesString = categoriesString + "yso:p916,yso:p965,";
  }

  if (categories.includes(CATEGORY.MUSEUM)) {
    categoriesString = categoriesString + "yso:p5121,";
  }

  if (categories.includes(CATEGORY.PARTY)) {
    categoriesString = categoriesString + "yso:p13872,yso:p11756,yso:p29932,";
  }

  if (categories.includes(CATEGORY.TRIP)) {
    categoriesString = categoriesString + "yso:p1917,";
  }

  if (categories.includes(CATEGORY.STANDUP)) {
    categoriesString = categoriesString + "yso:p9244,";
  }

  return categoriesString.slice(0, -1); // remove last comma
}
