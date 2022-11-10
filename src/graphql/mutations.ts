/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createEvent = /* GraphQL */ `
  mutation CreateEvent(
    $input: CreateEventInput!
    $condition: ModelEventConditionInput
  ) {
    createEvent(input: $input, condition: $condition) {
      id
      infoURL
      startingDateTime
      endingDateTime
      source
      location {
        lat
        lon
        streetAddress
        postalCode
      }
      category
      format
      tags
      company {
        businessId
        email
        phone
        name
      }
      eventMedia {
        URL
        lisenceType
        lisenceName
      }
      Descriptions {
        fi
        en
        sv
        ru
        jp
        de
        zh
        es
      }
      name {
        fi
        en
        sv
        ru
        jp
        de
        zh
        es
      }
      external_URL
      createdAt
      updatedAt
      owner
    }
  }
`;
export const updateEvent = /* GraphQL */ `
  mutation UpdateEvent(
    $input: UpdateEventInput!
    $condition: ModelEventConditionInput
  ) {
    updateEvent(input: $input, condition: $condition) {
      id
      infoURL
      startingDateTime
      endingDateTime
      source
      location {
        lat
        lon
        streetAddress
        postalCode
      }
      category
      format
      tags
      company {
        businessId
        email
        phone
        name
      }
      eventMedia {
        URL
        lisenceType
        lisenceName
      }
      Descriptions {
        fi
        en
        sv
        ru
        jp
        de
        zh
        es
      }
      name {
        fi
        en
        sv
        ru
        jp
        de
        zh
        es
      }
      external_URL
      createdAt
      updatedAt
      owner
    }
  }
`;
export const deleteEvent = /* GraphQL */ `
  mutation DeleteEvent(
    $input: DeleteEventInput!
    $condition: ModelEventConditionInput
  ) {
    deleteEvent(input: $input, condition: $condition) {
      id
      infoURL
      startingDateTime
      endingDateTime
      source
      location {
        lat
        lon
        streetAddress
        postalCode
      }
      category
      format
      tags
      company {
        businessId
        email
        phone
        name
      }
      eventMedia {
        URL
        lisenceType
        lisenceName
      }
      Descriptions {
        fi
        en
        sv
        ru
        jp
        de
        zh
        es
      }
      name {
        fi
        en
        sv
        ru
        jp
        de
        zh
        es
      }
      external_URL
      createdAt
      updatedAt
      owner
    }
  }
`;
export const createActivity = /* GraphQL */ `
  mutation CreateActivity(
    $input: CreateActivityInput!
    $condition: ModelActivityConditionInput
  ) {
    createActivity(input: $input, condition: $condition) {
      id
      availableMonths
      openDays {
        day
        open
        from
        to
      }
      categories
      company {
        businessId
        email
        phone
        name
      }
      duration
      durationType
      meantFor
      priceEUR_From
      priceEUR_TO
      pricingType
      siteURL
      updated_at_LinkedEvent
      Location {
        lat
        lon
        streetAddress
        postalCode
      }
      activityMedia {
        kind
        copyright
        name
        URL
      }
      descriptions {
        fi
        en
        sv
        ru
        jp
        de
        zh
        es
      }
      names {
        fi
        en
        sv
        ru
        jp
        de
        zh
        es
      }
      external_URL
      createdAt
      updatedAt
      owner
    }
  }
`;
export const updateActivity = /* GraphQL */ `
  mutation UpdateActivity(
    $input: UpdateActivityInput!
    $condition: ModelActivityConditionInput
  ) {
    updateActivity(input: $input, condition: $condition) {
      id
      availableMonths
      openDays {
        day
        open
        from
        to
      }
      categories
      company {
        businessId
        email
        phone
        name
      }
      duration
      durationType
      meantFor
      priceEUR_From
      priceEUR_TO
      pricingType
      siteURL
      updated_at_LinkedEvent
      Location {
        lat
        lon
        streetAddress
        postalCode
      }
      activityMedia {
        kind
        copyright
        name
        URL
      }
      descriptions {
        fi
        en
        sv
        ru
        jp
        de
        zh
        es
      }
      names {
        fi
        en
        sv
        ru
        jp
        de
        zh
        es
      }
      external_URL
      createdAt
      updatedAt
      owner
    }
  }
`;
export const deleteActivity = /* GraphQL */ `
  mutation DeleteActivity(
    $input: DeleteActivityInput!
    $condition: ModelActivityConditionInput
  ) {
    deleteActivity(input: $input, condition: $condition) {
      id
      availableMonths
      openDays {
        day
        open
        from
        to
      }
      categories
      company {
        businessId
        email
        phone
        name
      }
      duration
      durationType
      meantFor
      priceEUR_From
      priceEUR_TO
      pricingType
      siteURL
      updated_at_LinkedEvent
      Location {
        lat
        lon
        streetAddress
        postalCode
      }
      activityMedia {
        kind
        copyright
        name
        URL
      }
      descriptions {
        fi
        en
        sv
        ru
        jp
        de
        zh
        es
      }
      names {
        fi
        en
        sv
        ru
        jp
        de
        zh
        es
      }
      external_URL
      createdAt
      updatedAt
      owner
    }
  }
`;
