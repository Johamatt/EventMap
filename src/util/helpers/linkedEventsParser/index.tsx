import { API, graphqlOperation } from "aws-amplify";
import {
  Activity,
  ActivityMedia,
  CATEGORY,
  Company,
  Description,
  Links,
  Location,
  Name,
  OpenDays,
  Price,
} from "../../../API";
import { createActivity } from "../../../graphql/mutations";
import activitiesData from "../../data/Acvitivities3.json";
import { parseActivityMedia } from "./parseActivitymedia";
import { parseCompany } from "./parseCompany";
import { parseDescription } from "./parseDescription";
import { parseLinks } from "./parseLinks";
import { parseLocation } from "./parseLocation";
import { parseMonths } from "./parseMonths";
import { parseName } from "./parseName";
import { parseOpendays } from "./parseOpendays";
import { parsePrice } from "./parsePrice";
import { parseTags } from "./parseTags";

export function parseData() {
  const t1: Array<any> = activitiesData.rows.slice(0, 30);

  console.log();

  const activityArr: Array<Activity> = [];

  // t1.push(activitiesData.rows[1]);
  // t1.push(activitiesData.rows[2]);

  // const abc: any[] = activitiesData.rows.map(async (activity: any) => {

  t1.map((activity: any) => {
    let ActivityMedia: ActivityMedia[] = parseActivityMedia(activity.media);
    let Location: Location = parseLocation(activity.address);
    // let Company: Company = parseCompany(activity.company);
    let Company: string = parseCompany(activity.company);
    let Opendays: { opendays: Array<OpenDays>; days: any } = parseOpendays(
      activity.open
    );
    let months: number[] = parseMonths(activity.availableMonths);
    let names: Name = parseName(activity.descriptions);
    let descriptions: Description = parseDescription(activity.descriptions);
    let categories: CATEGORY[] = parseTags(activity.tags);
    let price: Price = parsePrice(activity.priceEUR);
    let links: Links = parseLinks(activity);
    let duration: string = activity.duration;
    let durationType: string = activity.durationType;
    let meantfor: Array<string> = activity.meantFor;
    let updated_at_LinkedEvent: string = activity.updated;
    let id = activity.id;
    let source = "linkedEvents";

    //@ts-ignore
    const activities: Activity = {
      id: id,
      duration: duration,
      durationType: durationType,
      meantFor: meantfor,
      categories: categories,
      price: price,
      Location: Location,
      Descriptions: descriptions,
      Names: names,
      Links: links,
      source: source,
      updated_at_Source: updated_at_LinkedEvent,
      OpenDays: Opendays.opendays,
      availableDays: Opendays.days,
      availableMonths: months,
      // activityMedia: ActivityMedia,

      companyActivitiesId: Company,
    };

    activityArr.push(activities);

    // sendData(activities);

    // const locationdata = await API.graphql(graphqlOperation(listLocations));
    // await API.graphql(graphqlOperation(createActivity, { input: activity }));

    // return activity;
  });

  return activityArr;
  // const cmp = await API.graphql(graphqlOperation(listCompanies));
  //   const act = await API.graphql(graphqlOperation(listActivities));

  //   console.log(act);
  // await API.graphql(graphqlOperation(createActivity, { input: abc[0] }));
}

async function sendData(activities: any) {
  await API.graphql(graphqlOperation(createActivity, { input: activities }));
}
