export const EventsbyStartingDateTimeCustomQuery = /* GraphQL */ `
  query ByStartingDateTime(
    $type: String!
    $startingDateTime: ModelStringKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelEventFilterInput
    $limit: Int
    $nextToken: String
  ) {
    byStartingDateTime(
      type: $type
      startingDateTime: $startingDateTime
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        startingDateTime
        endingDateTime
        mainPicture
        name
        description
        company {
          logo
          name
        }
        location {
          lat
          lon
          streetAddress
          postalCode
          city
        }
      }
      nextToken
    }
  }
`;

export const getEventCustomQuery = /* GraphQL */ `
  query GetEvent($id: ID!) {
    getEvent(id: $id) {
      id
      type
      startingDateTime
      endingDateTime
      location {
        lat
        lon
        streetAddress
        postalCode
        city
        country
      }
      category
      company {
        id
        email
        logo
        name
      }
      mainPicture
      secondaryPictures
      description 
      name
      Links {
        mainURL
        secondaryURL
        storeURL
        facebookURL
        twitterURL
        instagramURL
        youtubeURL
      }
      ageRestriction
      Ticket {
        items {
          price
          currency
          available
          startSaleDate
          endSaleDate
          id
          createdAt
          updatedAt
          eventTicketId
          activityTicketId
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
