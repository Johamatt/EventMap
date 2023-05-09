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
export const onUpdateEvent = /* GraphQL */ `
  subscription OnUpdateEvent(
    $filter: ModelSubscriptionEventFilterInput
    $owner: String
  ) {
    onUpdateEvent(filter: $filter, owner: $owner) {
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
export const onDeleteEvent = /* GraphQL */ `
  subscription OnDeleteEvent(
    $filter: ModelSubscriptionEventFilterInput
    $owner: String
  ) {
    onDeleteEvent(filter: $filter, owner: $owner) {
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
export const onCreateActivity = /* GraphQL */ `
  subscription OnCreateActivity(
    $filter: ModelSubscriptionActivityFilterInput
    $owner: String
  ) {
    onCreateActivity(filter: $filter, owner: $owner) {
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
export const onUpdateActivity = /* GraphQL */ `
  subscription OnUpdateActivity(
    $filter: ModelSubscriptionActivityFilterInput
    $owner: String
  ) {
    onUpdateActivity(filter: $filter, owner: $owner) {
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
export const onDeleteActivity = /* GraphQL */ `
  subscription OnDeleteActivity(
    $filter: ModelSubscriptionActivityFilterInput
    $owner: String
  ) {
    onDeleteActivity(filter: $filter, owner: $owner) {
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
export const onCreateDeal = /* GraphQL */ `
  subscription OnCreateDeal(
    $filter: ModelSubscriptionDealFilterInput
    $owner: String
  ) {
    onCreateDeal(filter: $filter, owner: $owner) {
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
export const onUpdateDeal = /* GraphQL */ `
  subscription OnUpdateDeal(
    $filter: ModelSubscriptionDealFilterInput
    $owner: String
  ) {
    onUpdateDeal(filter: $filter, owner: $owner) {
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
export const onDeleteDeal = /* GraphQL */ `
  subscription OnDeleteDeal(
    $filter: ModelSubscriptionDealFilterInput
    $owner: String
  ) {
    onDeleteDeal(filter: $filter, owner: $owner) {
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
