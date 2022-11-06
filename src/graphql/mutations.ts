/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createEvent = /* GraphQL */ `
  mutation CreateEvent(
    $input: CreateEventInput!
    $condition: ModelEventConditionInput
  ) {
    createEvent(input: $input, condition: $condition) {
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
export const updateEvent = /* GraphQL */ `
  mutation UpdateEvent(
    $input: UpdateEventInput!
    $condition: ModelEventConditionInput
  ) {
    updateEvent(input: $input, condition: $condition) {
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
export const deleteEvent = /* GraphQL */ `
  mutation DeleteEvent(
    $input: DeleteEventInput!
    $condition: ModelEventConditionInput
  ) {
    deleteEvent(input: $input, condition: $condition) {
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
export const createCompany = /* GraphQL */ `
  mutation CreateCompany(
    $input: CreateCompanyInput!
    $condition: ModelCompanyConditionInput
  ) {
    createCompany(input: $input, condition: $condition) {
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
export const updateCompany = /* GraphQL */ `
  mutation UpdateCompany(
    $input: UpdateCompanyInput!
    $condition: ModelCompanyConditionInput
  ) {
    updateCompany(input: $input, condition: $condition) {
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
export const deleteCompany = /* GraphQL */ `
  mutation DeleteCompany(
    $input: DeleteCompanyInput!
    $condition: ModelCompanyConditionInput
  ) {
    deleteCompany(input: $input, condition: $condition) {
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
export const createActivity = /* GraphQL */ `
  mutation CreateActivity(
    $input: CreateActivityInput!
    $condition: ModelActivityConditionInput
  ) {
    createActivity(input: $input, condition: $condition) {
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
export const updateActivity = /* GraphQL */ `
  mutation UpdateActivity(
    $input: UpdateActivityInput!
    $condition: ModelActivityConditionInput
  ) {
    updateActivity(input: $input, condition: $condition) {
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
export const deleteActivity = /* GraphQL */ `
  mutation DeleteActivity(
    $input: DeleteActivityInput!
    $condition: ModelActivityConditionInput
  ) {
    deleteActivity(input: $input, condition: $condition) {
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
