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
      companyID
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
        companyID
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
export const getCompany = /* GraphQL */ `
  query GetCompany($id: ID!) {
    getCompany(id: $id) {
      id
      email
      phone
      name
      Activities {
        items {
          id
          availableMonths
          fi_description
          fi_name
          en_description
          en_name
          categories
          companyID
          duration
          durationType
          meantFor
          priceEUR_From
          priceEUR_TO
          pricingType
          siteURL
          updated_at_LinkedEvent
          createdAt
          updatedAt
          owner
        }
        nextToken
      }
      Events {
        items {
          id
          availableMonths
          fi_description
          fi_name
          en_description
          en_name
          categories
          companyID
          duration
          durationType
          meantFor
          priceEUR_From
          priceEUR_TO
          pricingType
          siteURL
          updated_at_LinkedEvent
          createdAt
          updatedAt
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
export const listCompanies = /* GraphQL */ `
  query ListCompanies(
    $filter: ModelCompanyFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listCompanies(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        email
        phone
        name
        Activities {
          nextToken
        }
        Events {
          nextToken
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
      companyID
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
        companyID
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
