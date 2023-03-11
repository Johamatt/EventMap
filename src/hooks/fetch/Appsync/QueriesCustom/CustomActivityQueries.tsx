export const listActivitiesCustomQuery = /* GraphQL */ `
  query ListActivities(
    $filter: ModelActivityFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listActivities(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name {
          fi
          en
          sv
          jp
          es
        }
        description {
          fi
          en
          sv
          jp
          es
        }
        company {
          id
          logo
          categories
          name
        }
        mainPicture
        OpenDays {
          day
          timeFrom
          timeTo
        }
        ageRestriction
        Ticket {
          nextToken
        }
        isFree
        createdAt
        updatedAt
        companyActivitiesId
      }
      nextToken
    }
  }
`;
