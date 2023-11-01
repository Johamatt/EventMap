# EventMap Mobile App

EventMap is a mobile app that allows users to discover and interact with events in their area (Helsinki). It's built using React Native, Expo, and AWS Amplify for backend services.

**Note:** This repository has been deprecated and is no longer actively maintained. It has been forked into a private repository for ongoing development.

## Getting Started

To get started with the project, follow the instructions below. 

### Prerequisites

Before you begin, make sure you have the following:

- Node.js and npm: Make sure you have Node.js and npm installed on your machine.

- AWS account (Initializing Amplify backend)
- Google Cloud Account (OAuth 2.0 client)
- MapBox Account (MapBox token)

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/your-username/eventmap.git
   cd eventmap

2. install dependencies:

   ```bash
   npm install

3. Initialize amplify project:

   ```bash
   npm install -g @aws-amplify/cli
   amplify configure
   amplify init

4. Add amplify GraphQL api

  ```bash
  amplify add api



 Replace schema.graphql file in EventMap/amplify/backend/api/ with following file: [schema.graphql](https://github.com/Johamatt/EventMap/blob/main/schema2.graphql)

   
