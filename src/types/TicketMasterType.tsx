export interface Image {
  ratio: string;
  url: string;
  width: number;
  height: number;
  fallback: boolean;
}

export interface PublicSale {
  startDateTime: string;
  startTBD: boolean;
  startTBA: boolean;
  endDateTime: string;
}

export interface StartDate {
  localDate: string;
  localTime: string;
  dateTime: string;
  dateTBD: boolean;
  dateTBA: boolean;
  timeTBA: boolean;
  noSpecificTime: boolean;
}

export interface Code {
  code: string;
}

export interface Segment {
  id: string;
  name: string;
}

export interface Genre {
  id: string;
  name: string;
}

export interface SubGenre {
  id: string;
  name: string;
}

export interface Type {
  id: string;
  name: string;
}

export interface SubType {
  id: string;
  name: string;
}

export interface Classification {
  primary: boolean;
  segment: Segment;
  genre: Genre;
  subGenre: SubGenre;
  type: Type;
  subType: SubType;
  family: boolean;
}

export interface Promoter {
  id: string;
  name: string;
  description: string;
}

export interface PriceRange {
  type: string;
  currency: string;
  min: number;
  max: number;
}

export interface StaticUrl {
  staticUrl: string;
}

export interface Info {
  info: string;
}

export interface TicketLimit {
  info: string;
}

export interface AgeRestrictions {
  legalAgeEnforced: boolean;
}

export interface SafeTix {
  enabled: boolean;
}

export interface Link {
  href: string;
}

export interface Venue {
  name: string;
  type: string;
  id: string;
  test: boolean;
  url: string;
  locale: string;
  images: Image[];
}

export interface Embedded {
  venues: Venue[];
}

export interface TicketMasterEvent {
  end_time: string | number | Date;
  name: string;
  eventType: string;
  id: string;
  test: boolean;
  url: string;
  locale: string;
  images: Image[];
  sales: {
    public: PublicSale;
  };
  dates: {
    start: StartDate;
    timezone: string;
    status: Code;
    spanMultipleDays: boolean;
  };
  classifications: Classification[];
  promoter: Promoter;
  promoters: Promoter[];
  info: string;
  pleaseNote: string;
  priceRanges: PriceRange[];
  seatmap: StaticUrl;
  accessibility: Record<string, never>;
  ticketLimit: TicketLimit;
  ageRestrictions: AgeRestrictions;
  ticketing: {
    safeTix: SafeTix;
  };
  _links: {
    self: Link;
    attractions: Link[];
    venues: Link[];
  };
  _embedded: Embedded;
}
