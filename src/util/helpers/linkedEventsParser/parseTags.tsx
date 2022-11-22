import { CATEGORY } from "../../../API";

export function parseTags(tags: Array<String>) {
  let categories: CATEGORY[] = [];

  let natureTags = [
    "nature_excursion",
    "national_park",
    "forests",
    "wellbeing_from_nature",
  ];

  let tripTags = ["nature_excursion", "day_trip", "cruises_ferries", "camping"];

  let sportTags = [
    "paddling_rafting",
    "water_activities",
    "sports",
    "cycling_mountain_biking",
    "climbing",
    "minigolf",
    "hiking_walking_trekking",
    "snowshoeing",
    "paddling_rafting",
    "fishing_hunting",
    "motorsports",
    "swimming",
    "skiing_snowboarding",
    "running_trailrunning",
  ];

  let foodtags = [
    "food_experience",
    "local_food",
    "restaurant",
    "culinary_experience",
    "fine_dining",
  ];

  let cultureTags = [
    "history",
    "historical_sites",
    "cultural_heritage",
    "ice_swimming",
    "sauna_experience",
  ];

  let healthTags = [
    "wellness_treatments",
    "yoga_meditation",
    "rehabilitation",
    "spa_recreational_spa",
  ];

  let marketTags = ["supermarket", "shopping_center"];
  let familyKidsTags = ["childrens_attraction" || "family_activity"];
  let motorsportsTags = ["snowmobiling", "motorsports"];
  let technologyTags = ["virtual_reality", "virtual_arcade"];

  if (tags.some((el: any) => technologyTags.includes(el))) {
    categories.push(CATEGORY.TECHNOLOGY);
  }

  if (tags.some((el: any) => tripTags.includes(el))) {
    categories.push(CATEGORY.TRIP);
  }

  if (
    tags.includes(
      "cultural_heritage" && "local_lifestyle" && "sauna_experience"
    )
  ) {
    categories.push(CATEGORY.TRIP);
  }

  if (tags.some((el: any) => sportTags.includes(el))) {
    categories.push(CATEGORY.SPORT);
  }

  if (tags.some((el: any) => foodtags.includes(el))) {
    categories.push(CATEGORY.FOOD);
  }

  if (tags.some((el: any) => motorsportsTags.includes(el))) {
    categories.push(CATEGORY.MOTORSPORTS);
  }

  if (tags.includes("handicraft" && "creative_arts")) {
    categories.push(CATEGORY.FINEARTS);
    categories.push(CATEGORY.WORKSHOP);
  }

  if (tags.includes("sauna_experience")) {
    categories.push(CATEGORY.SAUNA);
  }

  if (tags.some((el: any) => cultureTags.includes(el))) {
    categories.push(CATEGORY.CULTURE);
  }

  if (tags.some((el: any) => healthTags.includes(el))) {
    categories.push(CATEGORY.HEALTH);
  }

  if (tags.includes("music")) {
    categories.push(CATEGORY.MUSIC);
  }

  if (tags.includes("bars_nightlife")) {
    categories.push(CATEGORY.PARTIESNIGHTLIFE);
  }

  if (tags.some((el: any) => marketTags.includes(el))) {
    categories.push(CATEGORY.MARKET);
  }

  if (tags.includes("sightseeing_tours")) {
    categories.push(CATEGORY.SIGHTSEEING);
  }

  if (tags.includes("museums_galleries")) {
    categories.push(CATEGORY.MUSEUM);
  }

  if (tags.some((el: any) => familyKidsTags.includes(el))) {
    categories.push(CATEGORY.KIDS);
  }

  if (tags.includes("other_activity")) {
    categories.push(CATEGORY.OTHER);
  }

  if (tags.includes("education")) {
    categories.push(CATEGORY.EDUCATION);
  }

  if (tags.some((el: any) => natureTags.includes(el))) {
    categories.push(CATEGORY.NATURE);
  }

  if (tags.includes("animal_parks_farms")) {
    categories.push(CATEGORY.ANIMALS);
  }

  if (tags.includes("hotels_hostels")) {
    categories.push(CATEGORY.ACCOMMODATION);
  }

  if (tags.includes("luxury")) {
    categories.push(CATEGORY.LUXURY);
  }

  if (tags.includes("guided_service")) {
    categories.push(CATEGORY.GUIDEDSERVICE);
  }

  if (categories.length === 0 || tags.length === 0) {
    return [CATEGORY.OTHER];
  }

  return categories;
}
