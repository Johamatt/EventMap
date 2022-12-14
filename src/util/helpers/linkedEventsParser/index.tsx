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
import {
  createActivity,
  createActivityMedia,
} from "../../../graphql/mutations";
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
  const activityArr: any = [];

  activitiesData.rows.forEach(async (activity: any) => {
    let ActivityMedia: any = parseActivityMedia(activity.media, activity.id);
    let Location: Location = parseLocation(activity.address);
    let Company: Company = await parseCompany(activity.company);
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

      raiting: undefined,
      user_raitings_total: undefined,

      companyActivitiesId: Company.businessId,
    };
    // await sendActivity(activities);
    // await sendActivityMedia(ActivityMedia);

    // activityArr.push(activities);
  });
  return activityArr;
}

async function sendActivity(activities: any) {
  await API.graphql(graphqlOperation(createActivity, { input: activities }));
}

async function sendActivityMedia(activitymedia: any) {
  activitymedia.forEach(async (a: any) => {
    await API.graphql(graphqlOperation(createActivityMedia, { input: a }));
  });
}
