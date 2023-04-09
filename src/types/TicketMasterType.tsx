export interface TicketMasterEvent {
  name: string;
  typee: string;
  id: string;
  test: boolean;
  url: string;
  locale: string;
  __typename: string;
  images: {
    ratio: string;
    url: string;
    width: number;
    height: number;
    fallback: boolean;
  }[];
  sales: {
    public: {
      startDateTime: string;
      startTBD: boolean;
      startTBA: boolean;
      endDateTime: string;
    };
  };
  dates: {
    start: {
      localDate: string;
      localTime: string;
      dateTime: string;
      dateTBD: boolean;
      dateTBA: boolean;
      timeTBA: boolean;
      noSpecificTime: boolean;
    };
    timezone: string;
    status: {
      code: string;
    };
    spanMultipleDays: boolean;
  };
  classifications: {
    primary: boolean;
    segment: {
      id: string;
      name: string;
    };
    genre: {
      id: string;
      name: string;
    };
    subGenre: {
      id: string;
      name: string;
    };
    family: boolean;
  }[];
  promoter: {
    id: string;
    name: string;
  };
  promoters: {
    id: string;
    name: string;
  }[];
  priceRanges: {
    type: string;
    currency: string;
    min: number;
    max: number;
  }[];
  seatmap: {
    staticUrl: string;
  };
  _links: {
    self: {
      href: string;
    };
    attractions: {
      href: string;
    }[];
    venues: {
      href: string;
    }[];
  };
  _embedded: {
    venues: {
      type: string;
      id: string;
      test: boolean;
      url: string;
      locale: string;
      postalCode: string;
      timezone: string;
      city: {
        name: string;
      };
      country: {
        name: string;
        countryCode: string;
      };
      address: {
        line1: string;
      };
      location: {
        longitude: string;
        latitude: string;
      };
      upcomingEvents: {
        _total: number;
        _filtered: number;
        [key: string]: any;
      };
      _links: {
        self: {
          href: string;
        };
      };
    }[];
    attractions: {
      name: string;
      type: string;
      id: string;
      test: boolean;
      url: string;
      locale: string;
      images: {
        ratio: string;
        url: string;
        fallback: boolean;
      }[];
      _links: {
        self: {
          href: string;
        };
      };
      externalLinks: {
        [key: string]: {
          url: string;
        }[];
      };
    }[];
  };
}
