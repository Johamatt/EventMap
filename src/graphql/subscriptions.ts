/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateEvent = /* GraphQL */ `
  subscription OnCreateEvent($owner: String) {
    onCreateEvent(owner: $owner) {
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
export const onUpdateEvent = /* GraphQL */ `
  subscription OnUpdateEvent($owner: String) {
    onUpdateEvent(owner: $owner) {
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
export const onDeleteEvent = /* GraphQL */ `
  subscription OnDeleteEvent($owner: String) {
    onDeleteEvent(owner: $owner) {
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
export const onCreateCompany = /* GraphQL */ `
  subscription OnCreateCompany($owner: String) {
    onCreateCompany(owner: $owner) {
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
export const onUpdateCompany = /* GraphQL */ `
  subscription OnUpdateCompany($owner: String) {
    onUpdateCompany(owner: $owner) {
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
export const onDeleteCompany = /* GraphQL */ `
  subscription OnDeleteCompany($owner: String) {
    onDeleteCompany(owner: $owner) {
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
export const onCreateActivity = /* GraphQL */ `
  subscription OnCreateActivity($owner: String) {
    onCreateActivity(owner: $owner) {
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
export const onUpdateActivity = /* GraphQL */ `
  subscription OnUpdateActivity($owner: String) {
    onUpdateActivity(owner: $owner) {
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
export const onDeleteActivity = /* GraphQL */ `
  subscription OnDeleteActivity($owner: String) {
    onDeleteActivity(owner: $owner) {
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
