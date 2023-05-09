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
      name
      description
      type
      startingDateTime
      endingDateTime
      links {
        mainURL
        storeURL
        facebookURL
        twitterURL
        instagramURL
        youtubeURL
      }
      location {
        lat
        lon
        streetAddress
        postalCode
        city
      }
      priceRange {
        min
        max
      }
      categories
      mainCategory
      mainPicture
      secondaryPictures
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
        deals {
          nextToken
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
      Deal {
        items {
          id
          name
          description
          conditions
          redemptionInstructions
          expiresAt
          availableQuantity
          soldQuantity
          price
          currency
          discount
          owner
          createdAt
          updatedAt
          eventDealId
          companyDealsId
          activityDealId
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
export const updateEvent = /* GraphQL */ `
  mutation UpdateEvent(
    $input: UpdateEventInput!
    $condition: ModelEventConditionInput
  ) {
    updateEvent(input: $input, condition: $condition) {
      id
      name
      description
      type
      startingDateTime
      endingDateTime
      links {
        mainURL
        storeURL
        facebookURL
        twitterURL
        instagramURL
        youtubeURL
      }
      location {
        lat
        lon
        streetAddress
        postalCode
        city
      }
      priceRange {
        min
        max
      }
      categories
      mainCategory
      mainPicture
      secondaryPictures
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
        deals {
          nextToken
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
      Deal {
        items {
          id
          name
          description
          conditions
          redemptionInstructions
          expiresAt
          availableQuantity
          soldQuantity
          price
          currency
          discount
          owner
          createdAt
          updatedAt
          eventDealId
          companyDealsId
          activityDealId
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
export const deleteEvent = /* GraphQL */ `
  mutation DeleteEvent(
    $input: DeleteEventInput!
    $condition: ModelEventConditionInput
  ) {
    deleteEvent(input: $input, condition: $condition) {
      id
      name
      description
      type
      startingDateTime
      endingDateTime
      links {
        mainURL
        storeURL
        facebookURL
        twitterURL
        instagramURL
        youtubeURL
      }
      location {
        lat
        lon
        streetAddress
        postalCode
        city
      }
      priceRange {
        min
        max
      }
      categories
      mainCategory
      mainPicture
      secondaryPictures
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
        deals {
          nextToken
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
      Deal {
        items {
          id
          name
          description
          conditions
          redemptionInstructions
          expiresAt
          availableQuantity
          soldQuantity
          price
          currency
          discount
          owner
          createdAt
          updatedAt
          eventDealId
          companyDealsId
          activityDealId
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
export const createCompany = /* GraphQL */ `
  mutation CreateCompany(
    $input: CreateCompanyInput!
    $condition: ModelCompanyConditionInput
  ) {
    createCompany(input: $input, condition: $condition) {
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
      deals {
        items {
          id
          name
          description
          conditions
          redemptionInstructions
          expiresAt
          availableQuantity
          soldQuantity
          price
          currency
          discount
          owner
          createdAt
          updatedAt
          eventDealId
          companyDealsId
          activityDealId
        }
        nextToken
      }
      events {
        items {
          id
          name
          description
          type
          startingDateTime
          endingDateTime
          categories
          mainCategory
          mainPicture
          secondaryPictures
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
export const updateCompany = /* GraphQL */ `
  mutation UpdateCompany(
    $input: UpdateCompanyInput!
    $condition: ModelCompanyConditionInput
  ) {
    updateCompany(input: $input, condition: $condition) {
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
      deals {
        items {
          id
          name
          description
          conditions
          redemptionInstructions
          expiresAt
          availableQuantity
          soldQuantity
          price
          currency
          discount
          owner
          createdAt
          updatedAt
          eventDealId
          companyDealsId
          activityDealId
        }
        nextToken
      }
      events {
        items {
          id
          name
          description
          type
          startingDateTime
          endingDateTime
          categories
          mainCategory
          mainPicture
          secondaryPictures
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
export const deleteCompany = /* GraphQL */ `
  mutation DeleteCompany(
    $input: DeleteCompanyInput!
    $condition: ModelCompanyConditionInput
  ) {
    deleteCompany(input: $input, condition: $condition) {
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
      deals {
        items {
          id
          name
          description
          conditions
          redemptionInstructions
          expiresAt
          availableQuantity
          soldQuantity
          price
          currency
          discount
          owner
          createdAt
          updatedAt
          eventDealId
          companyDealsId
          activityDealId
        }
        nextToken
      }
      events {
        items {
          id
          name
          description
          type
          startingDateTime
          endingDateTime
          categories
          mainCategory
          mainPicture
          secondaryPictures
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
export const createActivity = /* GraphQL */ `
  mutation CreateActivity(
    $input: CreateActivityInput!
    $condition: ModelActivityConditionInput
  ) {
    createActivity(input: $input, condition: $condition) {
      id
      name
      description
      links {
        mainURL
        storeURL
        facebookURL
        twitterURL
        instagramURL
        youtubeURL
      }
      location {
        lat
        lon
        streetAddress
        postalCode
        city
      }
      priceRange {
        min
        max
      }
      categories
      mainCategory
      mainPicture
      secondaryPictures
      openHours {
        day
        timeFrom
        timeTo
      }
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
        deals {
          nextToken
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
      Deal {
        items {
          id
          name
          description
          conditions
          redemptionInstructions
          expiresAt
          availableQuantity
          soldQuantity
          price
          currency
          discount
          owner
          createdAt
          updatedAt
          eventDealId
          companyDealsId
          activityDealId
        }
        nextToken
      }
      owner
      createdAt
      updatedAt
      companyActivitiesId
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
      name
      description
      links {
        mainURL
        storeURL
        facebookURL
        twitterURL
        instagramURL
        youtubeURL
      }
      location {
        lat
        lon
        streetAddress
        postalCode
        city
      }
      priceRange {
        min
        max
      }
      categories
      mainCategory
      mainPicture
      secondaryPictures
      openHours {
        day
        timeFrom
        timeTo
      }
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
        deals {
          nextToken
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
      Deal {
        items {
          id
          name
          description
          conditions
          redemptionInstructions
          expiresAt
          availableQuantity
          soldQuantity
          price
          currency
          discount
          owner
          createdAt
          updatedAt
          eventDealId
          companyDealsId
          activityDealId
        }
        nextToken
      }
      owner
      createdAt
      updatedAt
      companyActivitiesId
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
      name
      description
      links {
        mainURL
        storeURL
        facebookURL
        twitterURL
        instagramURL
        youtubeURL
      }
      location {
        lat
        lon
        streetAddress
        postalCode
        city
      }
      priceRange {
        min
        max
      }
      categories
      mainCategory
      mainPicture
      secondaryPictures
      openHours {
        day
        timeFrom
        timeTo
      }
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
        deals {
          nextToken
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
      Deal {
        items {
          id
          name
          description
          conditions
          redemptionInstructions
          expiresAt
          availableQuantity
          soldQuantity
          price
          currency
          discount
          owner
          createdAt
          updatedAt
          eventDealId
          companyDealsId
          activityDealId
        }
        nextToken
      }
      owner
      createdAt
      updatedAt
      companyActivitiesId
    }
  }
`;
export const createDeal = /* GraphQL */ `
  mutation CreateDeal(
    $input: CreateDealInput!
    $condition: ModelDealConditionInput
  ) {
    createDeal(input: $input, condition: $condition) {
      id
      name
      description
      conditions
      redemptionInstructions
      expiresAt
      redemptionTimes {
        day
        timeFrom
        timeTo
      }
      availableQuantity
      soldQuantity
      price
      currency
      discount
      Event {
        id
        name
        description
        type
        startingDateTime
        endingDateTime
        links {
          mainURL
          storeURL
          facebookURL
          twitterURL
          instagramURL
          youtubeURL
        }
        location {
          lat
          lon
          streetAddress
          postalCode
          city
        }
        priceRange {
          min
          max
        }
        categories
        mainCategory
        mainPicture
        secondaryPictures
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
        Deal {
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
        links {
          mainURL
          storeURL
          facebookURL
          twitterURL
          instagramURL
          youtubeURL
        }
        location {
          lat
          lon
          streetAddress
          postalCode
          city
        }
        priceRange {
          min
          max
        }
        categories
        mainCategory
        mainPicture
        secondaryPictures
        openHours {
          day
          timeFrom
          timeTo
        }
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
        Deal {
          nextToken
        }
        owner
        createdAt
        updatedAt
        companyActivitiesId
      }
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
        deals {
          nextToken
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
      owner
      createdAt
      updatedAt
      eventDealId
      companyDealsId
      activityDealId
    }
  }
`;
export const updateDeal = /* GraphQL */ `
  mutation UpdateDeal(
    $input: UpdateDealInput!
    $condition: ModelDealConditionInput
  ) {
    updateDeal(input: $input, condition: $condition) {
      id
      name
      description
      conditions
      redemptionInstructions
      expiresAt
      redemptionTimes {
        day
        timeFrom
        timeTo
      }
      availableQuantity
      soldQuantity
      price
      currency
      discount
      Event {
        id
        name
        description
        type
        startingDateTime
        endingDateTime
        links {
          mainURL
          storeURL
          facebookURL
          twitterURL
          instagramURL
          youtubeURL
        }
        location {
          lat
          lon
          streetAddress
          postalCode
          city
        }
        priceRange {
          min
          max
        }
        categories
        mainCategory
        mainPicture
        secondaryPictures
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
        Deal {
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
        links {
          mainURL
          storeURL
          facebookURL
          twitterURL
          instagramURL
          youtubeURL
        }
        location {
          lat
          lon
          streetAddress
          postalCode
          city
        }
        priceRange {
          min
          max
        }
        categories
        mainCategory
        mainPicture
        secondaryPictures
        openHours {
          day
          timeFrom
          timeTo
        }
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
        Deal {
          nextToken
        }
        owner
        createdAt
        updatedAt
        companyActivitiesId
      }
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
        deals {
          nextToken
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
      owner
      createdAt
      updatedAt
      eventDealId
      companyDealsId
      activityDealId
    }
  }
`;
export const deleteDeal = /* GraphQL */ `
  mutation DeleteDeal(
    $input: DeleteDealInput!
    $condition: ModelDealConditionInput
  ) {
    deleteDeal(input: $input, condition: $condition) {
      id
      name
      description
      conditions
      redemptionInstructions
      expiresAt
      redemptionTimes {
        day
        timeFrom
        timeTo
      }
      availableQuantity
      soldQuantity
      price
      currency
      discount
      Event {
        id
        name
        description
        type
        startingDateTime
        endingDateTime
        links {
          mainURL
          storeURL
          facebookURL
          twitterURL
          instagramURL
          youtubeURL
        }
        location {
          lat
          lon
          streetAddress
          postalCode
          city
        }
        priceRange {
          min
          max
        }
        categories
        mainCategory
        mainPicture
        secondaryPictures
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
        Deal {
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
        links {
          mainURL
          storeURL
          facebookURL
          twitterURL
          instagramURL
          youtubeURL
        }
        location {
          lat
          lon
          streetAddress
          postalCode
          city
        }
        priceRange {
          min
          max
        }
        categories
        mainCategory
        mainPicture
        secondaryPictures
        openHours {
          day
          timeFrom
          timeTo
        }
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
        Deal {
          nextToken
        }
        owner
        createdAt
        updatedAt
        companyActivitiesId
      }
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
        deals {
          nextToken
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
      owner
      createdAt
      updatedAt
      eventDealId
      companyDealsId
      activityDealId
    }
  }
`;
