/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateEvent = /* GraphQL */ `
  subscription OnCreateEvent($owner: String) {
    onCreateEvent(owner: $owner) {
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
export const onUpdateEvent = /* GraphQL */ `
  subscription OnUpdateEvent($owner: String) {
    onUpdateEvent(owner: $owner) {
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
export const onDeleteEvent = /* GraphQL */ `
  subscription OnDeleteEvent($owner: String) {
    onDeleteEvent(owner: $owner) {
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
export const onCreateActivity = /* GraphQL */ `
  subscription OnCreateActivity($owner: String) {
    onCreateActivity(owner: $owner) {
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
export const onUpdateActivity = /* GraphQL */ `
  subscription OnUpdateActivity($owner: String) {
    onUpdateActivity(owner: $owner) {
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
export const onDeleteActivity = /* GraphQL */ `
  subscription OnDeleteActivity($owner: String) {
    onDeleteActivity(owner: $owner) {
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
