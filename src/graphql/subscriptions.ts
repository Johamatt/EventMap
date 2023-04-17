/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateEvent = /* GraphQL */ `
  subscription OnCreateEvent(
    $filter: ModelSubscriptionEventFilterInput
    $owner: String
  ) {
    onCreateEvent(filter: $filter, owner: $owner) {
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
      }
      categories
      mainCategory
      company {
        id
        email
        name
        description
        phone
        logo
        categories
        mainCategory
        links {
          mainURL
          storeURL
          facebookURL
          twitterURL
          instagramURL
          youtubeURL
        }
        events {
          nextToken
        }
        activities {
          nextToken
        }
        owner
        createdAt
        updatedAt
      }
      mainPicture
      secondaryPictures
      description
      name
      Links {
        mainURL
        storeURL
        facebookURL
        twitterURL
        instagramURL
        youtubeURL
      }
      ageRestriction
      isFree
      Ticket {
        items {
          id
          TicketName
          description
          Ticket
          currency
          available
          startSaleDate
          endSaleDate
          owner
          createdAt
          updatedAt
          eventTicketId
          activityTicketId
        }
        nextToken
      }
      owner
      createdAt
      updatedAt
      companyEventsId
    }
  }
`;
export const onUpdateEvent = /* GraphQL */ `
  subscription OnUpdateEvent(
    $filter: ModelSubscriptionEventFilterInput
    $owner: String
  ) {
    onUpdateEvent(filter: $filter, owner: $owner) {
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
      }
      categories
      mainCategory
      company {
        id
        email
        name
        description
        phone
        logo
        categories
        mainCategory
        links {
          mainURL
          storeURL
          facebookURL
          twitterURL
          instagramURL
          youtubeURL
        }
        events {
          nextToken
        }
        activities {
          nextToken
        }
        owner
        createdAt
        updatedAt
      }
      mainPicture
      secondaryPictures
      description
      name
      Links {
        mainURL
        storeURL
        facebookURL
        twitterURL
        instagramURL
        youtubeURL
      }
      ageRestriction
      isFree
      Ticket {
        items {
          id
          TicketName
          description
          Ticket
          currency
          available
          startSaleDate
          endSaleDate
          owner
          createdAt
          updatedAt
          eventTicketId
          activityTicketId
        }
        nextToken
      }
      owner
      createdAt
      updatedAt
      companyEventsId
    }
  }
`;
export const onDeleteEvent = /* GraphQL */ `
  subscription OnDeleteEvent(
    $filter: ModelSubscriptionEventFilterInput
    $owner: String
  ) {
    onDeleteEvent(filter: $filter, owner: $owner) {
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
      }
      categories
      mainCategory
      company {
        id
        email
        name
        description
        phone
        logo
        categories
        mainCategory
        links {
          mainURL
          storeURL
          facebookURL
          twitterURL
          instagramURL
          youtubeURL
        }
        events {
          nextToken
        }
        activities {
          nextToken
        }
        owner
        createdAt
        updatedAt
      }
      mainPicture
      secondaryPictures
      description
      name
      Links {
        mainURL
        storeURL
        facebookURL
        twitterURL
        instagramURL
        youtubeURL
      }
      ageRestriction
      isFree
      Ticket {
        items {
          id
          TicketName
          description
          Ticket
          currency
          available
          startSaleDate
          endSaleDate
          owner
          createdAt
          updatedAt
          eventTicketId
          activityTicketId
        }
        nextToken
      }
      owner
      createdAt
      updatedAt
      companyEventsId
    }
  }
`;
export const onCreateActivity = /* GraphQL */ `
  subscription OnCreateActivity(
    $filter: ModelSubscriptionActivityFilterInput
    $owner: String
  ) {
    onCreateActivity(filter: $filter, owner: $owner) {
      id
      name
      description
      company {
        id
        email
        name
        description
        phone
        logo
        categories
        mainCategory
        links {
          mainURL
          storeURL
          facebookURL
          twitterURL
          instagramURL
          youtubeURL
        }
        events {
          nextToken
        }
        activities {
          nextToken
        }
        owner
        createdAt
        updatedAt
      }
      categories
      mainCategory
      Location {
        lat
        lon
        streetAddress
        postalCode
        city
      }
      mainPicture
      secondaryPictures
      Links {
        mainURL
        storeURL
        facebookURL
        twitterURL
        instagramURL
        youtubeURL
      }
      OpenDays {
        day
        timeFrom
        timeTo
      }
      ageRestriction
      Ticket {
        items {
          id
          TicketName
          description
          Ticket
          currency
          available
          startSaleDate
          endSaleDate
          owner
          createdAt
          updatedAt
          eventTicketId
          activityTicketId
        }
        nextToken
      }
      isFree
      owner
      createdAt
      updatedAt
      companyActivitiesId
    }
  }
`;
export const onUpdateActivity = /* GraphQL */ `
  subscription OnUpdateActivity(
    $filter: ModelSubscriptionActivityFilterInput
    $owner: String
  ) {
    onUpdateActivity(filter: $filter, owner: $owner) {
      id
      name
      description
      company {
        id
        email
        name
        description
        phone
        logo
        categories
        mainCategory
        links {
          mainURL
          storeURL
          facebookURL
          twitterURL
          instagramURL
          youtubeURL
        }
        events {
          nextToken
        }
        activities {
          nextToken
        }
        owner
        createdAt
        updatedAt
      }
      categories
      mainCategory
      Location {
        lat
        lon
        streetAddress
        postalCode
        city
      }
      mainPicture
      secondaryPictures
      Links {
        mainURL
        storeURL
        facebookURL
        twitterURL
        instagramURL
        youtubeURL
      }
      OpenDays {
        day
        timeFrom
        timeTo
      }
      ageRestriction
      Ticket {
        items {
          id
          TicketName
          description
          Ticket
          currency
          available
          startSaleDate
          endSaleDate
          owner
          createdAt
          updatedAt
          eventTicketId
          activityTicketId
        }
        nextToken
      }
      isFree
      owner
      createdAt
      updatedAt
      companyActivitiesId
    }
  }
`;
export const onDeleteActivity = /* GraphQL */ `
  subscription OnDeleteActivity(
    $filter: ModelSubscriptionActivityFilterInput
    $owner: String
  ) {
    onDeleteActivity(filter: $filter, owner: $owner) {
      id
      name
      description
      company {
        id
        email
        name
        description
        phone
        logo
        categories
        mainCategory
        links {
          mainURL
          storeURL
          facebookURL
          twitterURL
          instagramURL
          youtubeURL
        }
        events {
          nextToken
        }
        activities {
          nextToken
        }
        owner
        createdAt
        updatedAt
      }
      categories
      mainCategory
      Location {
        lat
        lon
        streetAddress
        postalCode
        city
      }
      mainPicture
      secondaryPictures
      Links {
        mainURL
        storeURL
        facebookURL
        twitterURL
        instagramURL
        youtubeURL
      }
      OpenDays {
        day
        timeFrom
        timeTo
      }
      ageRestriction
      Ticket {
        items {
          id
          TicketName
          description
          Ticket
          currency
          available
          startSaleDate
          endSaleDate
          owner
          createdAt
          updatedAt
          eventTicketId
          activityTicketId
        }
        nextToken
      }
      isFree
      owner
      createdAt
      updatedAt
      companyActivitiesId
    }
  }
`;
export const onCreateCompany = /* GraphQL */ `
  subscription OnCreateCompany(
    $filter: ModelSubscriptionCompanyFilterInput
    $owner: String
  ) {
    onCreateCompany(filter: $filter, owner: $owner) {
      id
      email
      name
      description
      phone
      logo
      categories
      mainCategory
      links {
        mainURL
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
          startingDateTime
          endingDateTime
          categories
          mainCategory
          mainPicture
          secondaryPictures
          description
          name
          ageRestriction
          isFree
          owner
          createdAt
          updatedAt
          companyEventsId
        }
        nextToken
      }
      activities {
        items {
          id
          name
          description
          categories
          mainCategory
          mainPicture
          secondaryPictures
          ageRestriction
          isFree
          owner
          createdAt
          updatedAt
          companyActivitiesId
        }
        nextToken
      }
      owner
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateCompany = /* GraphQL */ `
  subscription OnUpdateCompany(
    $filter: ModelSubscriptionCompanyFilterInput
    $owner: String
  ) {
    onUpdateCompany(filter: $filter, owner: $owner) {
      id
      email
      name
      description
      phone
      logo
      categories
      mainCategory
      links {
        mainURL
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
          startingDateTime
          endingDateTime
          categories
          mainCategory
          mainPicture
          secondaryPictures
          description
          name
          ageRestriction
          isFree
          owner
          createdAt
          updatedAt
          companyEventsId
        }
        nextToken
      }
      activities {
        items {
          id
          name
          description
          categories
          mainCategory
          mainPicture
          secondaryPictures
          ageRestriction
          isFree
          owner
          createdAt
          updatedAt
          companyActivitiesId
        }
        nextToken
      }
      owner
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteCompany = /* GraphQL */ `
  subscription OnDeleteCompany(
    $filter: ModelSubscriptionCompanyFilterInput
    $owner: String
  ) {
    onDeleteCompany(filter: $filter, owner: $owner) {
      id
      email
      name
      description
      phone
      logo
      categories
      mainCategory
      links {
        mainURL
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
          startingDateTime
          endingDateTime
          categories
          mainCategory
          mainPicture
          secondaryPictures
          description
          name
          ageRestriction
          isFree
          owner
          createdAt
          updatedAt
          companyEventsId
        }
        nextToken
      }
      activities {
        items {
          id
          name
          description
          categories
          mainCategory
          mainPicture
          secondaryPictures
          ageRestriction
          isFree
          owner
          createdAt
          updatedAt
          companyActivitiesId
        }
        nextToken
      }
      owner
      createdAt
      updatedAt
    }
  }
`;
export const onCreateTicket = /* GraphQL */ `
  subscription OnCreateTicket(
    $filter: ModelSubscriptionTicketFilterInput
    $owner: String
  ) {
    onCreateTicket(filter: $filter, owner: $owner) {
      id
      TicketName
      description
      Ticket
      currency
      available
      startSaleDate
      endSaleDate
      owner
      createdAt
      updatedAt
      eventTicketId
      activityTicketId
    }
  }
`;
export const onUpdateTicket = /* GraphQL */ `
  subscription OnUpdateTicket(
    $filter: ModelSubscriptionTicketFilterInput
    $owner: String
  ) {
    onUpdateTicket(filter: $filter, owner: $owner) {
      id
      TicketName
      description
      Ticket
      currency
      available
      startSaleDate
      endSaleDate
      owner
      createdAt
      updatedAt
      eventTicketId
      activityTicketId
    }
  }
`;
export const onDeleteTicket = /* GraphQL */ `
  subscription OnDeleteTicket(
    $filter: ModelSubscriptionTicketFilterInput
    $owner: String
  ) {
    onDeleteTicket(filter: $filter, owner: $owner) {
      id
      TicketName
      description
      Ticket
      currency
      available
      startSaleDate
      endSaleDate
      owner
      createdAt
      updatedAt
      eventTicketId
      activityTicketId
    }
  }
`;
export const onCreateOffer = /* GraphQL */ `
  subscription OnCreateOffer(
    $filter: ModelSubscriptionOfferFilterInput
    $owner: String
  ) {
    onCreateOffer(filter: $filter, owner: $owner) {
      id
      name
      description
      type
      creditCost
      company {
        id
        email
        name
        description
        phone
        logo
        categories
        mainCategory
        links {
          mainURL
          storeURL
          facebookURL
          twitterURL
          instagramURL
          youtubeURL
        }
        events {
          nextToken
        }
        activities {
          nextToken
        }
        owner
        createdAt
        updatedAt
      }
      Event {
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
        }
        categories
        mainCategory
        company {
          id
          email
          name
          description
          phone
          logo
          categories
          mainCategory
          owner
          createdAt
          updatedAt
        }
        mainPicture
        secondaryPictures
        description
        name
        Links {
          mainURL
          storeURL
          facebookURL
          twitterURL
          instagramURL
          youtubeURL
        }
        ageRestriction
        isFree
        Ticket {
          nextToken
        }
        owner
        createdAt
        updatedAt
        companyEventsId
      }
      Activity {
        id
        name
        description
        company {
          id
          email
          name
          description
          phone
          logo
          categories
          mainCategory
          owner
          createdAt
          updatedAt
        }
        categories
        mainCategory
        Location {
          lat
          lon
          streetAddress
          postalCode
          city
        }
        mainPicture
        secondaryPictures
        Links {
          mainURL
          storeURL
          facebookURL
          twitterURL
          instagramURL
          youtubeURL
        }
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
        owner
        createdAt
        updatedAt
        companyActivitiesId
      }
      price
      currency
      discount
      bundleSize
      owner
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateOffer = /* GraphQL */ `
  subscription OnUpdateOffer(
    $filter: ModelSubscriptionOfferFilterInput
    $owner: String
  ) {
    onUpdateOffer(filter: $filter, owner: $owner) {
      id
      name
      description
      type
      creditCost
      company {
        id
        email
        name
        description
        phone
        logo
        categories
        mainCategory
        links {
          mainURL
          storeURL
          facebookURL
          twitterURL
          instagramURL
          youtubeURL
        }
        events {
          nextToken
        }
        activities {
          nextToken
        }
        owner
        createdAt
        updatedAt
      }
      Event {
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
        }
        categories
        mainCategory
        company {
          id
          email
          name
          description
          phone
          logo
          categories
          mainCategory
          owner
          createdAt
          updatedAt
        }
        mainPicture
        secondaryPictures
        description
        name
        Links {
          mainURL
          storeURL
          facebookURL
          twitterURL
          instagramURL
          youtubeURL
        }
        ageRestriction
        isFree
        Ticket {
          nextToken
        }
        owner
        createdAt
        updatedAt
        companyEventsId
      }
      Activity {
        id
        name
        description
        company {
          id
          email
          name
          description
          phone
          logo
          categories
          mainCategory
          owner
          createdAt
          updatedAt
        }
        categories
        mainCategory
        Location {
          lat
          lon
          streetAddress
          postalCode
          city
        }
        mainPicture
        secondaryPictures
        Links {
          mainURL
          storeURL
          facebookURL
          twitterURL
          instagramURL
          youtubeURL
        }
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
        owner
        createdAt
        updatedAt
        companyActivitiesId
      }
      price
      currency
      discount
      bundleSize
      owner
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteOffer = /* GraphQL */ `
  subscription OnDeleteOffer(
    $filter: ModelSubscriptionOfferFilterInput
    $owner: String
  ) {
    onDeleteOffer(filter: $filter, owner: $owner) {
      id
      name
      description
      type
      creditCost
      company {
        id
        email
        name
        description
        phone
        logo
        categories
        mainCategory
        links {
          mainURL
          storeURL
          facebookURL
          twitterURL
          instagramURL
          youtubeURL
        }
        events {
          nextToken
        }
        activities {
          nextToken
        }
        owner
        createdAt
        updatedAt
      }
      Event {
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
        }
        categories
        mainCategory
        company {
          id
          email
          name
          description
          phone
          logo
          categories
          mainCategory
          owner
          createdAt
          updatedAt
        }
        mainPicture
        secondaryPictures
        description
        name
        Links {
          mainURL
          storeURL
          facebookURL
          twitterURL
          instagramURL
          youtubeURL
        }
        ageRestriction
        isFree
        Ticket {
          nextToken
        }
        owner
        createdAt
        updatedAt
        companyEventsId
      }
      Activity {
        id
        name
        description
        company {
          id
          email
          name
          description
          phone
          logo
          categories
          mainCategory
          owner
          createdAt
          updatedAt
        }
        categories
        mainCategory
        Location {
          lat
          lon
          streetAddress
          postalCode
          city
        }
        mainPicture
        secondaryPictures
        Links {
          mainURL
          storeURL
          facebookURL
          twitterURL
          instagramURL
          youtubeURL
        }
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
        owner
        createdAt
        updatedAt
        companyActivitiesId
      }
      price
      currency
      discount
      bundleSize
      owner
      createdAt
      updatedAt
    }
  }
`;
export const onCreateUser = /* GraphQL */ `
  subscription OnCreateUser(
    $filter: ModelSubscriptionUserFilterInput
    $owner: String
  ) {
    onCreateUser(filter: $filter, owner: $owner) {
      id
      name
      email
      birthday
      credits
      owner
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateUser = /* GraphQL */ `
  subscription OnUpdateUser(
    $filter: ModelSubscriptionUserFilterInput
    $owner: String
  ) {
    onUpdateUser(filter: $filter, owner: $owner) {
      id
      name
      email
      birthday
      credits
      owner
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteUser = /* GraphQL */ `
  subscription OnDeleteUser(
    $filter: ModelSubscriptionUserFilterInput
    $owner: String
  ) {
    onDeleteUser(filter: $filter, owner: $owner) {
      id
      name
      email
      birthday
      credits
      owner
      createdAt
      updatedAt
    }
  }
`;
