/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateActivityMedia = /* GraphQL */ `
  subscription OnCreateActivityMedia(
    $filter: ModelSubscriptionActivityMediaFilterInput
    $owner: String
  ) {
    onCreateActivityMedia(filter: $filter, owner: $owner) {
      id
      kind
      copyright
      name
      URL
      createdAt
      updatedAt
      activityActivityMediaId
      owner
    }
  }
`;
export const onUpdateActivityMedia = /* GraphQL */ `
  subscription OnUpdateActivityMedia(
    $filter: ModelSubscriptionActivityMediaFilterInput
    $owner: String
  ) {
    onUpdateActivityMedia(filter: $filter, owner: $owner) {
      id
      kind
      copyright
      name
      URL
      createdAt
      updatedAt
      activityActivityMediaId
      owner
    }
  }
`;
export const onDeleteActivityMedia = /* GraphQL */ `
  subscription OnDeleteActivityMedia(
    $filter: ModelSubscriptionActivityMediaFilterInput
    $owner: String
  ) {
    onDeleteActivityMedia(filter: $filter, owner: $owner) {
      id
      kind
      copyright
      name
      URL
      createdAt
      updatedAt
      activityActivityMediaId
      owner
    }
  }
`;
export const onCreateEventMedia = /* GraphQL */ `
  subscription OnCreateEventMedia(
    $filter: ModelSubscriptionEventMediaFilterInput
    $owner: String
  ) {
    onCreateEventMedia(filter: $filter, owner: $owner) {
      id
      URL
      kind
      copyright
      name
      createdAt
      updatedAt
      eventEventMediaId
      owner
    }
  }
`;
export const onUpdateEventMedia = /* GraphQL */ `
  subscription OnUpdateEventMedia(
    $filter: ModelSubscriptionEventMediaFilterInput
    $owner: String
  ) {
    onUpdateEventMedia(filter: $filter, owner: $owner) {
      id
      URL
      kind
      copyright
      name
      createdAt
      updatedAt
      eventEventMediaId
      owner
    }
  }
`;
export const onDeleteEventMedia = /* GraphQL */ `
  subscription OnDeleteEventMedia(
    $filter: ModelSubscriptionEventMediaFilterInput
    $owner: String
  ) {
    onDeleteEventMedia(filter: $filter, owner: $owner) {
      id
      URL
      kind
      copyright
      name
      createdAt
      updatedAt
      eventEventMediaId
      owner
    }
  }
`;
export const onCreateEvent = /* GraphQL */ `
  subscription OnCreateEvent(
    $filter: ModelSubscriptionEventFilterInput
    $owner: String
  ) {
    onCreateEvent(filter: $filter, owner: $owner) {
      id
      startingDateTime
      endingDateTime
      location {
        lat
        lon
        streetAddress
        postalCode
      }
      category
      company {
        businessId
        email
        phone
        name
        activities {
          nextToken
        }
        events {
          nextToken
        }
        createdAt
        updatedAt
        owner
      }
      eventMedia {
        items {
          id
          URL
          kind
          copyright
          name
          createdAt
          updatedAt
          eventEventMediaId
          owner
        }
        nextToken
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
      Links {
        siteURL
        otherURL
      }
      source
      updated_at_Source
      createdAt
      updatedAt
      companyEventsId
      owner
    }
  }
`;
export const onUpdateEvent = /* GraphQL */ `
  subscription OnUpdateEvent(
    $filter: ModelSubscriptionEventFilterInput
    $owner: String
  ) {
    onUpdateEvent(filter: $filter, owner: $owner) {
      id
      startingDateTime
      endingDateTime
      location {
        lat
        lon
        streetAddress
        postalCode
      }
      category
      company {
        businessId
        email
        phone
        name
        activities {
          nextToken
        }
        events {
          nextToken
        }
        createdAt
        updatedAt
        owner
      }
      eventMedia {
        items {
          id
          URL
          kind
          copyright
          name
          createdAt
          updatedAt
          eventEventMediaId
          owner
        }
        nextToken
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
      Links {
        siteURL
        otherURL
      }
      source
      updated_at_Source
      createdAt
      updatedAt
      companyEventsId
      owner
    }
  }
`;
export const onDeleteEvent = /* GraphQL */ `
  subscription OnDeleteEvent(
    $filter: ModelSubscriptionEventFilterInput
    $owner: String
  ) {
    onDeleteEvent(filter: $filter, owner: $owner) {
      id
      startingDateTime
      endingDateTime
      location {
        lat
        lon
        streetAddress
        postalCode
      }
      category
      company {
        businessId
        email
        phone
        name
        activities {
          nextToken
        }
        events {
          nextToken
        }
        createdAt
        updatedAt
        owner
      }
      eventMedia {
        items {
          id
          URL
          kind
          copyright
          name
          createdAt
          updatedAt
          eventEventMediaId
          owner
        }
        nextToken
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
      Links {
        siteURL
        otherURL
      }
      source
      updated_at_Source
      createdAt
      updatedAt
      companyEventsId
      owner
    }
  }
`;
export const onCreateCompany = /* GraphQL */ `
  subscription OnCreateCompany(
    $filter: ModelSubscriptionCompanyFilterInput
    $owner: String
  ) {
    onCreateCompany(filter: $filter, owner: $owner) {
      businessId
      email
      phone
      name
      activities {
        items {
          id
          duration
          durationType
          meantFor
          categories
          source
          updated_at_Source
          availableDays
          availableMonths
          raiting
          user_raitings_total
          createdAt
          updatedAt
          companyActivitiesId
          owner
        }
        nextToken
      }
      events {
        items {
          id
          startingDateTime
          endingDateTime
          category
          source
          updated_at_Source
          createdAt
          updatedAt
          companyEventsId
          owner
        }
        nextToken
      }
      createdAt
      updatedAt
      owner
    }
  }
`;
export const onUpdateCompany = /* GraphQL */ `
  subscription OnUpdateCompany(
    $filter: ModelSubscriptionCompanyFilterInput
    $owner: String
  ) {
    onUpdateCompany(filter: $filter, owner: $owner) {
      businessId
      email
      phone
      name
      activities {
        items {
          id
          duration
          durationType
          meantFor
          categories
          source
          updated_at_Source
          availableDays
          availableMonths
          raiting
          user_raitings_total
          createdAt
          updatedAt
          companyActivitiesId
          owner
        }
        nextToken
      }
      events {
        items {
          id
          startingDateTime
          endingDateTime
          category
          source
          updated_at_Source
          createdAt
          updatedAt
          companyEventsId
          owner
        }
        nextToken
      }
      createdAt
      updatedAt
      owner
    }
  }
`;
export const onDeleteCompany = /* GraphQL */ `
  subscription OnDeleteCompany(
    $filter: ModelSubscriptionCompanyFilterInput
    $owner: String
  ) {
    onDeleteCompany(filter: $filter, owner: $owner) {
      businessId
      email
      phone
      name
      activities {
        items {
          id
          duration
          durationType
          meantFor
          categories
          source
          updated_at_Source
          availableDays
          availableMonths
          raiting
          user_raitings_total
          createdAt
          updatedAt
          companyActivitiesId
          owner
        }
        nextToken
      }
      events {
        items {
          id
          startingDateTime
          endingDateTime
          category
          source
          updated_at_Source
          createdAt
          updatedAt
          companyEventsId
          owner
        }
        nextToken
      }
      createdAt
      updatedAt
      owner
    }
  }
`;
export const onCreateActivity = /* GraphQL */ `
  subscription OnCreateActivity(
    $filter: ModelSubscriptionActivityFilterInput
    $owner: String
  ) {
    onCreateActivity(filter: $filter, owner: $owner) {
      id
      company {
        businessId
        email
        phone
        name
        activities {
          nextToken
        }
        events {
          nextToken
        }
        createdAt
        updatedAt
        owner
      }
      duration
      durationType
      meantFor
      categories
      price {
        EurFrom
        EurTo
        pricingtype
      }
      Location {
        lat
        lon
        streetAddress
        postalCode
      }
      activityMedia {
        items {
          id
          kind
          copyright
          name
          URL
          createdAt
          updatedAt
          activityActivityMediaId
          owner
        }
        nextToken
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
      Names {
        fi
        en
        sv
        ru
        jp
        de
        zh
        es
      }
      Links {
        siteURL
        otherURL
      }
      source
      updated_at_Source
      OpenDays {
        day
        timeFrom
        timeTo
      }
      availableDays
      availableMonths
      raiting
      user_raitings_total
      createdAt
      updatedAt
      companyActivitiesId
      owner
    }
  }
`;
export const onUpdateActivity = /* GraphQL */ `
  subscription OnUpdateActivity(
    $filter: ModelSubscriptionActivityFilterInput
    $owner: String
  ) {
    onUpdateActivity(filter: $filter, owner: $owner) {
      id
      company {
        businessId
        email
        phone
        name
        activities {
          nextToken
        }
        events {
          nextToken
        }
        createdAt
        updatedAt
        owner
      }
      duration
      durationType
      meantFor
      categories
      price {
        EurFrom
        EurTo
        pricingtype
      }
      Location {
        lat
        lon
        streetAddress
        postalCode
      }
      activityMedia {
        items {
          id
          kind
          copyright
          name
          URL
          createdAt
          updatedAt
          activityActivityMediaId
          owner
        }
        nextToken
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
      Names {
        fi
        en
        sv
        ru
        jp
        de
        zh
        es
      }
      Links {
        siteURL
        otherURL
      }
      source
      updated_at_Source
      OpenDays {
        day
        timeFrom
        timeTo
      }
      availableDays
      availableMonths
      raiting
      user_raitings_total
      createdAt
      updatedAt
      companyActivitiesId
      owner
    }
  }
`;
export const onDeleteActivity = /* GraphQL */ `
  subscription OnDeleteActivity(
    $filter: ModelSubscriptionActivityFilterInput
    $owner: String
  ) {
    onDeleteActivity(filter: $filter, owner: $owner) {
      id
      company {
        businessId
        email
        phone
        name
        activities {
          nextToken
        }
        events {
          nextToken
        }
        createdAt
        updatedAt
        owner
      }
      duration
      durationType
      meantFor
      categories
      price {
        EurFrom
        EurTo
        pricingtype
      }
      Location {
        lat
        lon
        streetAddress
        postalCode
      }
      activityMedia {
        items {
          id
          kind
          copyright
          name
          URL
          createdAt
          updatedAt
          activityActivityMediaId
          owner
        }
        nextToken
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
      Names {
        fi
        en
        sv
        ru
        jp
        de
        zh
        es
      }
      Links {
        siteURL
        otherURL
      }
      source
      updated_at_Source
      OpenDays {
        day
        timeFrom
        timeTo
      }
      availableDays
      availableMonths
      raiting
      user_raitings_total
      createdAt
      updatedAt
      companyActivitiesId
      owner
    }
  }
`;
