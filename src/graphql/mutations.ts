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
        businessId
        email
        industry
        phone
        name
        website
        activities {
          nextToken
        }
        events {
          nextToken
        }
        createdAt
        updatedAt
        userFavouriteCompaniesId
        owner
      }
      eventPictures
      Descriptions {
        fi
        en
        sv
        jp
        es
        de
      }
      name {
        fi
        en
        sv
        jp
        es
        de
      }
      Links {
        eventURL
        otherURL
        storeURL
        facebookURL
        twitterURL
        instagramURL
        youtubeURL
      }
      source
      website
      updated_at_Source
      attendees
      ageRestriction
      isFree
      Ticket {
        items {
          name
          price
          currency
          description
          available
          startSaleDate
          endSaleDate
          type
          id
          createdAt
          updatedAt
          eventTicketId
          activityTicketId
          owner
        }
        nextToken
      }
      createdAt
      updatedAt
      companyEventsId
      userFavouriteEventsId
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
        city
        country
      }
      category
      company {
        businessId
        email
        industry
        phone
        name
        website
        activities {
          nextToken
        }
        events {
          nextToken
        }
        createdAt
        updatedAt
        userFavouriteCompaniesId
        owner
      }
      eventPictures
      Descriptions {
        fi
        en
        sv
        jp
        es
        de
      }
      name {
        fi
        en
        sv
        jp
        es
        de
      }
      Links {
        eventURL
        otherURL
        storeURL
        facebookURL
        twitterURL
        instagramURL
        youtubeURL
      }
      source
      website
      updated_at_Source
      attendees
      ageRestriction
      isFree
      Ticket {
        items {
          name
          price
          currency
          description
          available
          startSaleDate
          endSaleDate
          type
          id
          createdAt
          updatedAt
          eventTicketId
          activityTicketId
          owner
        }
        nextToken
      }
      createdAt
      updatedAt
      companyEventsId
      userFavouriteEventsId
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
        city
        country
      }
      category
      company {
        businessId
        email
        industry
        phone
        name
        website
        activities {
          nextToken
        }
        events {
          nextToken
        }
        createdAt
        updatedAt
        userFavouriteCompaniesId
        owner
      }
      eventPictures
      Descriptions {
        fi
        en
        sv
        jp
        es
        de
      }
      name {
        fi
        en
        sv
        jp
        es
        de
      }
      Links {
        eventURL
        otherURL
        storeURL
        facebookURL
        twitterURL
        instagramURL
        youtubeURL
      }
      source
      website
      updated_at_Source
      attendees
      ageRestriction
      isFree
      Ticket {
        items {
          name
          price
          currency
          description
          available
          startSaleDate
          endSaleDate
          type
          id
          createdAt
          updatedAt
          eventTicketId
          activityTicketId
          owner
        }
        nextToken
      }
      createdAt
      updatedAt
      companyEventsId
      userFavouriteEventsId
      owner
    }
  }
`;
export const createTicket = /* GraphQL */ `
  mutation CreateTicket(
    $input: CreateTicketInput!
    $condition: ModelTicketConditionInput
  ) {
    createTicket(input: $input, condition: $condition) {
      name
      price
      currency
      description
      available
      startSaleDate
      endSaleDate
      type
      id
      createdAt
      updatedAt
      eventTicketId
      activityTicketId
      owner
    }
  }
`;
export const updateTicket = /* GraphQL */ `
  mutation UpdateTicket(
    $input: UpdateTicketInput!
    $condition: ModelTicketConditionInput
  ) {
    updateTicket(input: $input, condition: $condition) {
      name
      price
      currency
      description
      available
      startSaleDate
      endSaleDate
      type
      id
      createdAt
      updatedAt
      eventTicketId
      activityTicketId
      owner
    }
  }
`;
export const deleteTicket = /* GraphQL */ `
  mutation DeleteTicket(
    $input: DeleteTicketInput!
    $condition: ModelTicketConditionInput
  ) {
    deleteTicket(input: $input, condition: $condition) {
      name
      price
      currency
      description
      available
      startSaleDate
      endSaleDate
      type
      id
      createdAt
      updatedAt
      eventTicketId
      activityTicketId
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
      industry
      phone
      name
      website
      activities {
        items {
          id
          duration
          durationType
          categories
          activityPictures
          source
          updated_at_Source
          availableDays
          availableMonths
          raiting
          user_raitings_total
          ageRestriction
          isFree
          priceRange
          createdAt
          updatedAt
          companyActivitiesId
          userFavouriteActivitiesId
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
          eventPictures
          source
          website
          updated_at_Source
          attendees
          ageRestriction
          isFree
          createdAt
          updatedAt
          companyEventsId
          userFavouriteEventsId
          owner
        }
        nextToken
      }
      createdAt
      updatedAt
      userFavouriteCompaniesId
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
      industry
      phone
      name
      website
      activities {
        items {
          id
          duration
          durationType
          categories
          activityPictures
          source
          updated_at_Source
          availableDays
          availableMonths
          raiting
          user_raitings_total
          ageRestriction
          isFree
          priceRange
          createdAt
          updatedAt
          companyActivitiesId
          userFavouriteActivitiesId
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
          eventPictures
          source
          website
          updated_at_Source
          attendees
          ageRestriction
          isFree
          createdAt
          updatedAt
          companyEventsId
          userFavouriteEventsId
          owner
        }
        nextToken
      }
      createdAt
      updatedAt
      userFavouriteCompaniesId
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
      industry
      phone
      name
      website
      activities {
        items {
          id
          duration
          durationType
          categories
          activityPictures
          source
          updated_at_Source
          availableDays
          availableMonths
          raiting
          user_raitings_total
          ageRestriction
          isFree
          priceRange
          createdAt
          updatedAt
          companyActivitiesId
          userFavouriteActivitiesId
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
          eventPictures
          source
          website
          updated_at_Source
          attendees
          ageRestriction
          isFree
          createdAt
          updatedAt
          companyEventsId
          userFavouriteEventsId
          owner
        }
        nextToken
      }
      createdAt
      updatedAt
      userFavouriteCompaniesId
      owner
    }
  }
`;
export const createUser = /* GraphQL */ `
  mutation CreateUser(
    $input: CreateUserInput!
    $condition: ModelUserConditionInput
  ) {
    createUser(input: $input, condition: $condition) {
      id
      name
      email
      profilePicture
      birthday
      friends {
        items {
          id
          name
          email
          profilePicture
          birthday
          createdAt
          updatedAt
          userFriendsId
          owner
        }
        nextToken
      }
      favouriteEvents {
        items {
          id
          startingDateTime
          endingDateTime
          category
          eventPictures
          source
          website
          updated_at_Source
          attendees
          ageRestriction
          isFree
          createdAt
          updatedAt
          companyEventsId
          userFavouriteEventsId
          owner
        }
        nextToken
      }
      favouriteActivities {
        items {
          id
          duration
          durationType
          categories
          activityPictures
          source
          updated_at_Source
          availableDays
          availableMonths
          raiting
          user_raitings_total
          ageRestriction
          isFree
          priceRange
          createdAt
          updatedAt
          companyActivitiesId
          userFavouriteActivitiesId
          owner
        }
        nextToken
      }
      favouriteCompanies {
        items {
          businessId
          email
          industry
          phone
          name
          website
          createdAt
          updatedAt
          userFavouriteCompaniesId
          owner
        }
        nextToken
      }
      createdAt
      updatedAt
      userFriendsId
      owner
    }
  }
`;
export const updateUser = /* GraphQL */ `
  mutation UpdateUser(
    $input: UpdateUserInput!
    $condition: ModelUserConditionInput
  ) {
    updateUser(input: $input, condition: $condition) {
      id
      name
      email
      profilePicture
      birthday
      friends {
        items {
          id
          name
          email
          profilePicture
          birthday
          createdAt
          updatedAt
          userFriendsId
          owner
        }
        nextToken
      }
      favouriteEvents {
        items {
          id
          startingDateTime
          endingDateTime
          category
          eventPictures
          source
          website
          updated_at_Source
          attendees
          ageRestriction
          isFree
          createdAt
          updatedAt
          companyEventsId
          userFavouriteEventsId
          owner
        }
        nextToken
      }
      favouriteActivities {
        items {
          id
          duration
          durationType
          categories
          activityPictures
          source
          updated_at_Source
          availableDays
          availableMonths
          raiting
          user_raitings_total
          ageRestriction
          isFree
          priceRange
          createdAt
          updatedAt
          companyActivitiesId
          userFavouriteActivitiesId
          owner
        }
        nextToken
      }
      favouriteCompanies {
        items {
          businessId
          email
          industry
          phone
          name
          website
          createdAt
          updatedAt
          userFavouriteCompaniesId
          owner
        }
        nextToken
      }
      createdAt
      updatedAt
      userFriendsId
      owner
    }
  }
`;
export const deleteUser = /* GraphQL */ `
  mutation DeleteUser(
    $input: DeleteUserInput!
    $condition: ModelUserConditionInput
  ) {
    deleteUser(input: $input, condition: $condition) {
      id
      name
      email
      profilePicture
      birthday
      friends {
        items {
          id
          name
          email
          profilePicture
          birthday
          createdAt
          updatedAt
          userFriendsId
          owner
        }
        nextToken
      }
      favouriteEvents {
        items {
          id
          startingDateTime
          endingDateTime
          category
          eventPictures
          source
          website
          updated_at_Source
          attendees
          ageRestriction
          isFree
          createdAt
          updatedAt
          companyEventsId
          userFavouriteEventsId
          owner
        }
        nextToken
      }
      favouriteActivities {
        items {
          id
          duration
          durationType
          categories
          activityPictures
          source
          updated_at_Source
          availableDays
          availableMonths
          raiting
          user_raitings_total
          ageRestriction
          isFree
          priceRange
          createdAt
          updatedAt
          companyActivitiesId
          userFavouriteActivitiesId
          owner
        }
        nextToken
      }
      favouriteCompanies {
        items {
          businessId
          email
          industry
          phone
          name
          website
          createdAt
          updatedAt
          userFavouriteCompaniesId
          owner
        }
        nextToken
      }
      createdAt
      updatedAt
      userFriendsId
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
        industry
        phone
        name
        website
        activities {
          nextToken
        }
        events {
          nextToken
        }
        createdAt
        updatedAt
        userFavouriteCompaniesId
        owner
      }
      duration
      durationType
      categories
      Location {
        lat
        lon
        streetAddress
        postalCode
        city
        country
      }
      activityPictures
      Descriptions {
        fi
        en
        sv
        jp
        es
        de
      }
      Names {
        fi
        en
        sv
        jp
        es
        de
      }
      Links {
        eventURL
        otherURL
        storeURL
        facebookURL
        twitterURL
        instagramURL
        youtubeURL
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
      ageRestriction
      Ticket {
        items {
          name
          price
          currency
          description
          available
          startSaleDate
          endSaleDate
          type
          id
          createdAt
          updatedAt
          eventTicketId
          activityTicketId
          owner
        }
        nextToken
      }
      isFree
      priceRange
      createdAt
      updatedAt
      companyActivitiesId
      userFavouriteActivitiesId
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
        industry
        phone
        name
        website
        activities {
          nextToken
        }
        events {
          nextToken
        }
        createdAt
        updatedAt
        userFavouriteCompaniesId
        owner
      }
      duration
      durationType
      categories
      Location {
        lat
        lon
        streetAddress
        postalCode
        city
        country
      }
      activityPictures
      Descriptions {
        fi
        en
        sv
        jp
        es
        de
      }
      Names {
        fi
        en
        sv
        jp
        es
        de
      }
      Links {
        eventURL
        otherURL
        storeURL
        facebookURL
        twitterURL
        instagramURL
        youtubeURL
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
      ageRestriction
      Ticket {
        items {
          name
          price
          currency
          description
          available
          startSaleDate
          endSaleDate
          type
          id
          createdAt
          updatedAt
          eventTicketId
          activityTicketId
          owner
        }
        nextToken
      }
      isFree
      priceRange
      createdAt
      updatedAt
      companyActivitiesId
      userFavouriteActivitiesId
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
        industry
        phone
        name
        website
        activities {
          nextToken
        }
        events {
          nextToken
        }
        createdAt
        updatedAt
        userFavouriteCompaniesId
        owner
      }
      duration
      durationType
      categories
      Location {
        lat
        lon
        streetAddress
        postalCode
        city
        country
      }
      activityPictures
      Descriptions {
        fi
        en
        sv
        jp
        es
        de
      }
      Names {
        fi
        en
        sv
        jp
        es
        de
      }
      Links {
        eventURL
        otherURL
        storeURL
        facebookURL
        twitterURL
        instagramURL
        youtubeURL
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
      ageRestriction
      Ticket {
        items {
          name
          price
          currency
          description
          available
          startSaleDate
          endSaleDate
          type
          id
          createdAt
          updatedAt
          eventTicketId
          activityTicketId
          owner
        }
        nextToken
      }
      isFree
      priceRange
      createdAt
      updatedAt
      companyActivitiesId
      userFavouriteActivitiesId
      owner
    }
  }
`;
