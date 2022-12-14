/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createActivityMedia = /* GraphQL */ `
  mutation CreateActivityMedia(
    $input: CreateActivityMediaInput!
    $condition: ModelActivityMediaConditionInput
  ) {
    createActivityMedia(input: $input, condition: $condition) {
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
export const updateActivityMedia = /* GraphQL */ `
  mutation UpdateActivityMedia(
    $input: UpdateActivityMediaInput!
    $condition: ModelActivityMediaConditionInput
  ) {
    updateActivityMedia(input: $input, condition: $condition) {
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
export const deleteActivityMedia = /* GraphQL */ `
  mutation DeleteActivityMedia(
    $input: DeleteActivityMediaInput!
    $condition: ModelActivityMediaConditionInput
  ) {
    deleteActivityMedia(input: $input, condition: $condition) {
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
export const createEventMedia = /* GraphQL */ `
  mutation CreateEventMedia(
    $input: CreateEventMediaInput!
    $condition: ModelEventMediaConditionInput
  ) {
    createEventMedia(input: $input, condition: $condition) {
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
export const updateEventMedia = /* GraphQL */ `
  mutation UpdateEventMedia(
    $input: UpdateEventMediaInput!
    $condition: ModelEventMediaConditionInput
  ) {
    updateEventMedia(input: $input, condition: $condition) {
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
export const deleteEventMedia = /* GraphQL */ `
  mutation DeleteEventMedia(
    $input: DeleteEventMediaInput!
    $condition: ModelEventMediaConditionInput
  ) {
    deleteEventMedia(input: $input, condition: $condition) {
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
export const createEvent = /* GraphQL */ `
  mutation CreateEvent(
    $input: CreateEventInput!
    $condition: ModelEventConditionInput
  ) {
    createEvent(input: $input, condition: $condition) {
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
export const updateEvent = /* GraphQL */ `
  mutation UpdateEvent(
    $input: UpdateEventInput!
    $condition: ModelEventConditionInput
  ) {
    updateEvent(input: $input, condition: $condition) {
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
export const deleteEvent = /* GraphQL */ `
  mutation DeleteEvent(
    $input: DeleteEventInput!
    $condition: ModelEventConditionInput
  ) {
    deleteEvent(input: $input, condition: $condition) {
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
export const createCompany = /* GraphQL */ `
  mutation CreateCompany(
    $input: CreateCompanyInput!
    $condition: ModelCompanyConditionInput
  ) {
    createCompany(input: $input, condition: $condition) {
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
export const updateCompany = /* GraphQL */ `
  mutation UpdateCompany(
    $input: UpdateCompanyInput!
    $condition: ModelCompanyConditionInput
  ) {
    updateCompany(input: $input, condition: $condition) {
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
export const deleteCompany = /* GraphQL */ `
  mutation DeleteCompany(
    $input: DeleteCompanyInput!
    $condition: ModelCompanyConditionInput
  ) {
    deleteCompany(input: $input, condition: $condition) {
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
export const createActivity = /* GraphQL */ `
  mutation CreateActivity(
    $input: CreateActivityInput!
    $condition: ModelActivityConditionInput
  ) {
    createActivity(input: $input, condition: $condition) {
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
export const updateActivity = /* GraphQL */ `
  mutation UpdateActivity(
    $input: UpdateActivityInput!
    $condition: ModelActivityConditionInput
  ) {
    updateActivity(input: $input, condition: $condition) {
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
export const deleteActivity = /* GraphQL */ `
  mutation DeleteActivity(
    $input: DeleteActivityInput!
    $condition: ModelActivityConditionInput
  ) {
    deleteActivity(input: $input, condition: $condition) {
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
