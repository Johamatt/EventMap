import { Float } from "react-native/Libraries/Types/CodegenTypes";

export type eventLinkedeventMODEL = {
  id: string;
  name: {
    fi: string;
    en?: null;
    sv?: null;
    zh?: null;
  };
  source_type: {
    id: 1;
    name: string;
  };
  info_url: null | string;
  modified_at: string;
  location: {
    lat: Float;
    lon: Float;
    address: {
      street_address: string;
      postal_code: string;
      locality: string;
      neighbourhood: any;
    };
  };
  description: {
    intro: string;
    body: string;
    images: [
      {
        url: string;
        copyright_holder: string;
        license_type: {
          id: number;
          name: string;
        };
        media_id: null;
      }
    ];
  };
  tags: [
    {
      id: string;
      name: string;
    }
  ];
  event_dates: {
    starting_day: string;
    ending_day: string;
    additional_description: null | string;
  };
};
