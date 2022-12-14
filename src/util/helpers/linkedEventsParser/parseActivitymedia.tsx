import { ActivityMedia, Company } from "../../../API";

export function parseActivityMedia(media: any, id: any) {
  let activityMedia: any = media.map((m: any) => {
    return {
      kind: m.kind,
      copyright: m.copyright,
      name: m.alt,
      URL: m.originalUrl,
      activityActivityMediaId: id,
    };
  });
  return activityMedia;
}
