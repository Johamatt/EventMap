// async function parseData() {
//     const abc: any[] = activitiesData.rows.map(async (a: any) => {
//       let location: Location;

//       let activityMedia: ActivityMedia[] = a.media.map((m: any) => {
//         return {
//           kind: m.kind,
//           copyright: m.copyright,
//           name: m.alt,
//           URL: m.originalUrl,
//         };
//       });

//       if (
//         a.address.location?.lat !== undefined &&
//         a.address.location?.long !== undefined
//       ) {
//         location = {
//           streetAddress: a.address.streetName,
//           lat: a.address.location.lat,
//           lon: a.address.location.long,
//           postalCode: a.address.postalCode,
//         };
//       } else {
//         location = {
//           streetAddress: "Unknown",
//           lat: 0,
//           lon: 0,
//           postalCode: "Unknown",
//         };
//       }

//       let company: Company = {
//         businessId: a.company?.businessId,
//         email: a.company?.email,
//         name: a.company?.name,
//         phone: a.company?.phone,
//       };
//       let opendays: (OpenDays | null)[];

//       if (typeof a.open !== undefined || null) {
//         opendays = Object.entries(a.open).map(([key, value]) => {
//           let fromvalue =
//             value?.from !== null
//               ? value?.from.split("+")[0].split(":").slice(0, -1).join(":")
//               : null;
//           let tovalue =
//             value?.to !== null
//               ? value?.to.split("+")[0].split(":").slice(0, -1).join(":")
//               : null;

//           return {
//             day: key,
//             open: value?.open,
//             from: fromvalue,
//             to: tovalue,
//           };
//         });

//         [opendays[1], opendays[3]] = [opendays[3], opendays[1]];
//         [opendays[2], opendays[3]] = [opendays[3], opendays[2]];
//         [opendays[4], opendays[5]] = [opendays[5], opendays[4]];
//       } else {
//         opendays = [null];
//       }

//       let availableMonths: (string | null)[] | null | undefined =
//         a.availableMonths;

//       let fi_name: string;
//       let fi_description: string;

//       if (a.descriptions?.fi?.name !== undefined) {
//         fi_name = a.descriptions.fi.name;
//       } else {
//         fi_name = "Unknown";
//       }

//       if (a.descriptions.fi?.description !== undefined) {
//         fi_description = a.descriptions.fi.description;
//       } else {
//         fi_description = "Unknown";
//       }

//       let names: Name = {
//         fi: fi_name,
//         en: a.descriptions?.en?.name,
//         sv: a.descriptions.sv?.name,
//         ru: a.descriptions.ru?.name,
//         de: a.descriptions.de?.name,
//         jp: a.descriptions.ja?.name,
//         zh: a.descriptions.zh?.name,
//       };

//       let descriptions: Description = {
//         fi: fi_description,
//         en: a.descriptions.en?.description,
//         sv: a.descriptions.sv?.description,
//         ru: a.descriptions.ru?.description,
//         de: a.descriptions.de?.description,
//         jp: a.descriptions.ja?.description,
//         zh: a.descriptions.zh?.description,
//       };

//       let duration: string = a.duration;
//       let durationType: string = a.durationType;
//       let meantfor: Array<string> = a.meantFor;
//       let priceEur_from: number | null = a.priceEUR.from;
//       let priceEur_to: number | null = a.priceEUR.to;
//       let pricingType: string = a.priceEUR.pricingType;
//       let siteUrl: string = a.siteUrl;
//       let updated_at_LinkedEvent: string = a.updated;

//       let categories: CATEGORY[] = parseTags(a.tags);

//       const activity: Activity = {
//         id: a.id,
//         availableMonths: availableMonths,
//         names: names,
//         descriptions: descriptions,
//         duration: duration,
//         durationType: durationType,
//         meantFor: meantfor,
//         priceEUR_From: priceEur_from,
//         priceEUR_TO: priceEur_to,
//         pricingType: pricingType,
//         siteURL: siteUrl,
//         updated_at_LinkedEvent: updated_at_LinkedEvent,
//         //
//         activityMedia: activityMedia,
//         openDays: opendays,
//         categories: categories,
//         Location: location,
//         company: company,
//       };

//       // const locationdata = await API.graphql(graphqlOperation(listLocations));
//       //  await API.graphql(graphqlOperation(createActivity, { input: activity }));

//       return activity;
//     });

//     // const cmp = await API.graphql(graphqlOperation(listCompanies));
//     //   const act = await API.graphql(graphqlOperation(listActivities));

//     //   console.log(act);

//     console.log(abc[0]);
//   }

//   function parseTags(tags: Array<String>) {
//     let categories: CATEGORY[] = [];

//     let natureTags = [
//       "nature_excursion",
//       "national_park",
//       "forests",
//       "wellbeing_from_nature",
//     ];

//     let tripTags = [
//       "nature_excursion",
//       "day_trip",
//       "cruises_ferries",
//       "camping",
//     ];

//     let sportTags = [
//       "paddling_rafting",
//       "water_activities",
//       "sports",
//       "cycling_mountain_biking",
//       "climbing",
//       "minigolf",
//       "hiking_walking_trekking",
//       "snowshoeing",
//       "paddling_rafting",
//       "fishing_hunting",
//       "motorsports",
//       "swimming",
//       "skiing_snowboarding",
//       "running_trailrunning",
//     ];

//     let foodtags = [
//       "food_experience",
//       "local_food",
//       "restaurant",
//       "culinary_experience",
//       "fine_dining",
//     ];

//     let cultureTags = [
//       "history",
//       "historical_sites",
//       "cultural_heritage",
//       "ice_swimming",
//       "sauna_experience",
//     ];

//     let healthTags = [
//       "wellness_treatments",
//       "yoga_meditation",
//       "rehabilitation",
//       "spa_recreational_spa",
//     ];

//     let marketTags = ["supermarket", "shopping_center"];
//     let familyKidsTags = ["childrens_attraction" || "family_activity"];
//     let motorsportsTags = ["snowmobiling", "motorsports"];
//     let technologyTags = ["virtual_reality", "virtual_arcade"];

//     if (tags.some((el: any) => technologyTags.includes(el))) {
//       categories.push(CATEGORY.TECHNOLOGY);
//     }

//     if (tags.some((el: any) => tripTags.includes(el))) {
//       categories.push(CATEGORY.TRIP);
//     }

//     if (
//       tags.includes(
//         "cultural_heritage" && "local_lifestyle" && "sauna_experience"
//       )
//     ) {
//       categories.push(CATEGORY.TRIP);
//     }

//     if (tags.some((el: any) => sportTags.includes(el))) {
//       categories.push(CATEGORY.SPORT);
//     }

//     if (tags.some((el: any) => foodtags.includes(el))) {
//       categories.push(CATEGORY.FOOD);
//     }

//     if (tags.some((el: any) => motorsportsTags.includes(el))) {
//       categories.push(CATEGORY.MOTORSPORTS);
//     }

//     if (tags.includes("handicraft" && "creative_arts")) {
//       categories.push(CATEGORY.FINEARTS);
//       categories.push(CATEGORY.WORKSHOP);
//     }

//     if (tags.includes("sauna_experience")) {
//       categories.push(CATEGORY.SAUNA);
//     }

//     if (tags.some((el: any) => cultureTags.includes(el))) {
//       categories.push(CATEGORY.CULTURE);
//     }

//     if (tags.some((el: any) => healthTags.includes(el))) {
//       categories.push(CATEGORY.HEALTH);
//     }

//     if (tags.includes("music")) {
//       categories.push(CATEGORY.MUSIC);
//     }

//     if (tags.includes("bars_nightlife")) {
//       categories.push(CATEGORY.PARTIESNIGHTLIFE);
//     }

//     if (tags.some((el: any) => marketTags.includes(el))) {
//       categories.push(CATEGORY.MARKET);
//     }

//     if (tags.includes("sightseeing_tours")) {
//       categories.push(CATEGORY.SIGHTSEEING);
//     }

//     if (tags.includes("museums_galleries")) {
//       categories.push(CATEGORY.MUSEUM);
//     }

//     if (tags.some((el: any) => familyKidsTags.includes(el))) {
//       categories.push(CATEGORY.KIDS);
//     }

//     if (tags.includes("other_activity")) {
//       categories.push(CATEGORY.OTHER);
//     }

//     if (tags.includes("education")) {
//       categories.push(CATEGORY.EDUCATION);
//     }

//     if (tags.some((el: any) => natureTags.includes(el))) {
//       categories.push(CATEGORY.NATURE);
//     }

//     if (tags.includes("animal_parks_farms")) {
//       categories.push(CATEGORY.ANIMALS);
//     }

//     if (tags.includes("hotels_hostels")) {
//       categories.push(CATEGORY.ACCOMMODATION);
//     }

//     if (tags.includes("luxury")) {
//       categories.push(CATEGORY.LUXURY);
//     }

//     if (tags.includes("guided_service")) {
//       categories.push(CATEGORY.GUIDEDSERVICE);
//     }

//     if (categories.length === 0 || tags.length === 0) {
//       return [CATEGORY.OTHER];
//     }

//     return categories;
//   }
