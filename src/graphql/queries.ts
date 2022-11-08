/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getEvent = /* GraphQL */ `
  query GetEvent($id: ID!) {
    getEvent(id: $id) {
      id
      title_FI
      infoURL
      intro
      description
      title_EN
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
      imageEvent {
        URL
        lisenceType
        lisenceName
      }
      createdAt
      updatedAt
      owner
    }
  }
`;
export const listEvents = /* GraphQL */ `
  query ListEvents(
    $filter: ModelEventFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listEvents(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        title_FI
        infoURL
        intro
        description
        title_EN
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
        imageEvent {
          URL
          lisenceType
          lisenceName
        }
        createdAt
        updatedAt
        owner
      }
      nextToken
    }
  }
`;
export const getActivity = /* GraphQL */ `
  query GetActivity($id: ID!) {
    getActivity(id: $id) {
      id
      availableMonths
      fi_description
      fi_name
      en_description
      en_name
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
      imageActivity {
        kind
        copyright
        name
        URL
      }
      createdAt
      updatedAt
      owner
    }
  }
`;
export const listActivities = /* GraphQL */ `
  query ListActivities(
    $filter: ModelActivityFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listActivities(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        availableMonths
        fi_description
        fi_name
        en_description
        en_name
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
        imageActivity {
          kind
          copyright
          name
          URL
        }
        createdAt
        updatedAt
        owner
      }
      nextToken
    }
  }
`;
