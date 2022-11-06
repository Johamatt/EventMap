// async function parseData() {
//   let companies: Company[] = [];
//   activitiesData.rows.map(async (a) => {
//     let location: LocationModel;
//     let company: Company;

//     if (
//       a.address.location?.lat !== undefined &&
//       a.address.location?.long !== undefined
//     ) {
//       location = {
//         streetAddress: a.address.streetName,
//         lat: a.address.location?.lat,
//         lon: a.address.location?.long,
//         postalCode: a.address.postalCode,
//       };
//     } else {
//       location = {
//         streetAddress: "Unknown",
//         lat: 0,
//         lon: 0,
//         postalCode: "0",
//       };
//     }

//     if (companyExists(a.company.businessId, companies) === undefined) {
//       company = {
//         id: a.company.businessId,
//         email: a.company.email,
//         name: a.company.name,
//         phone: a.company.phone,
//       };
//     } else {
//       company = companyExists(a.company.businessId, companies);
//     }

//     let opendays: (Opendays | null)[] = Object.entries(a.open).map(
//       ([key, value]) => {
//         return {
//           day: key,
//           open: value.open,
//           from: value.from,
//           to: value.to,
//         };
//       }
//     );

//     let availableMonths: Array<string> = a.availableMonths;

//     let fi_name: string;
//     let fi_description: string;

//     if (a.descriptions.fi?.name !== undefined) {
//       fi_name = a.descriptions.fi?.name;
//     } else {
//       fi_name = "<error rendering name>";
//     }

//     if (a.descriptions.fi?.description !== undefined) {
//       fi_description = a.descriptions.fi?.description;
//     } else {
//       fi_description = "<error rendering description>";
//     }

//     let en_name: string | undefined = a.descriptions.en.name;
//     let en_description: string | undefined = a.descriptions.en?.description;
//     let duration: string = a.duration;
//     let durationType: string = a.durationType;
//     let meantfor: Array<string> = a.meantFor;
//     let priceEur_from: number | null = a.priceEUR.from;
//     let priceEur_to: number | null = a.priceEUR.to;
//     let pricingType: string = a.priceEUR.pricingType;
//     let siteUrl: string = a.siteUrl;
//     let updated_at_LinkedEvent: string = a.updated;

//     let categories: CATEGORY[] = parseTags(a.tags);

//     const activity: Activity = {
//       id: a.id,
//       availableMonths: availableMonths,
//       fi_name: fi_name,
//       fi_description: fi_description,
//       en_name: en_name,
//       en_description: en_description,
//       duration: duration,
//       durationType: durationType,
//       meantFor: meantfor,
//       priceEUR_From: priceEur_from,
//       priceEUR_TO: priceEur_to,
//       pricingType: pricingType,
//       siteURL: siteUrl,
//       updated_at_LinkedEvent: updated_at_LinkedEvent,
//       //
//       openDays: opendays,
//       categories: categories,
//       Location: location,
//       companyID: company.id,
//     };

//     // await API.graphql(graphqlOperation(createCompany, { input: company }));
//     // // console.log(company);
//     // await API.graphql(graphqlOperation(createActivity, { input: activity }));

//     companies.push(company);

//     // const locationdata = await API.graphql(graphqlOperation(listLocations));
//   });

//   // const cmp = await API.graphql(graphqlOperation(listCompanies));
//   const evt = await API.graphql(graphqlOperation(listActivities));

//   console.log(evt);
// }

// function companyExists(id: any, companies: any) {
//   return companies.find((o: { id: any }) => o.id === id);
// }

// function parseTags(tags: Array<String>) {
//   let categories: CATEGORY[] = [];

//   if (tags.includes("virtual_reality" && "virtual_arcade")) {
//     categories.push(CATEGORY.TECHNOLOGY);
//   }

//   if (
//     tags.includes(
//       "nature_excursion" ||
//         "day_trip" ||
//         "day_trip" ||
//         "cruises_ferries" ||
//         "camping"
//     )
//   ) {
//     categories.push(CATEGORY.TRIP);

//     if (
//       tags.includes(
//         "cultural_heritage" && "local_lifestyle" && "sauna_experience"
//       )
//     ) {
//       categories.push(CATEGORY.TRIP);
//     }
//   }

//   if (
//     tags.includes(
//       "paddling_rafting" ||
//         "water_activities" ||
//         "sports" ||
//         "cycling_mountain_biking" ||
//         "climbing" ||
//         "minigolf" ||
//         "hiking_walking_trekking" ||
//         "snowshoeing" ||
//         "paddling_rafting" ||
//         "fishing_hunting" ||
//         "motorsports"
//     )
//   ) {
//     categories.push(CATEGORY.SPORT);
//   }

//   if (tags.includes("food_experience" || "local_food" || "restaurant")) {
//     categories.push(CATEGORY.FOOD);
//   }

//   if (tags.includes("handicraft" || "creative_arts")) {
//     categories.push(CATEGORY.FINEARTS);
//     categories.push(CATEGORY.WORKSHOP);
//   }

//   if (tags.includes("history" || "historical_sites" || "cultural_heritage")) {
//     categories.push(CATEGORY.CULTURE);
//   }

//   if (
//     tags.includes(
//       "wellness_treatments" ||
//         "yoga_meditation" ||
//         "rehabilitation" ||
//         "sauna_experience" ||
//         "wellbeing_from_nature"
//     )
//   ) {
//     categories.push(CATEGORY.HEALTH);
//   }

//   if (tags.includes("music")) {
//     categories.push(CATEGORY.MUSIC);
//   }

//   if (tags.includes("bars_nightlife")) {
//     categories.push(CATEGORY.PARTIESNIGHTLIFE);
//   }

//   if (tags.includes("supermarket")) {
//     categories.push(CATEGORY.MARKET);
//   }

//   if (tags.includes("sightseeing_tours")) {
//     categories.push(CATEGORY.SIGHTSEEING);
//   }

//   if (tags.includes("museums_galleries")) {
//     categories.push(CATEGORY.MUSEUM);
//   }

//   if (tags.length === 0) {
//     return [CATEGORY.OTHER];
//   }

//   return categories;
// }
