export const getCompanyCustomQuery = /* GraphQL */ `
  query GetCompany($id: ID!) {
    getCompany(id: $id) {
      id
      email
      description {
        fi
        en
        sv
        jp
        es
      }
      logo
      phone
      name
      links {
        mainURL
        secondaryURL
        storeURL
        facebookURL
        twitterURL
        instagramURL
        youtubeURL
      }
      events {
        items {
          id
          type
          name {
            fi
            en
            sv
            jp
            es
          }
          startingDateTime
          endingDateTime
          mainPicture
          ageRestriction
          isFree
          createdAt
          updatedAt
          companyEventsId
        }
        nextToken
      }
      activities {
        items {
          id
          name {
            fi
            en
            sv
            jp
            es
          }
          mainPicture
          ageRestriction
          isFree
          createdAt
          updatedAt
          companyActivitiesId
        }
        nextToken
      }

      userFavouriteCompaniesId
    }
  }
`;
