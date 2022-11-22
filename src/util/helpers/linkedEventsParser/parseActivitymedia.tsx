import { ActivityMedia, Company } from "../../../API";

export function parseActivityMedia(data: any) {
  let activityMedia: ActivityMedia[] = data.map((m: any) => {
    return {
      kind: m.kind,
      copyright: m.copyright,
      name: m.alt,
      URL: m.originalUrl,
    };
  });
  return activityMedia;
}
