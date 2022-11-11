export const listActivitiesList = /* GraphQL */ `
  query listActivitiesList(
    $filter: ModelActivityFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listActivities(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        availableMonths
        openDays {
          day
          open
          from
          to
        }
        categories
        priceEUR_From
        priceEUR_TO
        pricingType
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
        owner
      }
      nextToken
    }
  }
`;

export const listActivitiesMap = /* GraphQL */ `
  query listActivitiesMap(
    $filter: ModelActivityFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listActivities(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        availableMonths
        openDays {
          day
          open
          from
          to
        }
        categories
        Location {
          lat
          lon
          streetAddress
          postalCode
        }
        owner
      }
      nextToken
    }
  }
`;
