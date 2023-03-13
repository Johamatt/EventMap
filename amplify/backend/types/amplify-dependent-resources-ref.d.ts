export type AmplifyDependentResourcesAttributes = {
  "analytics": {
    "eventmap": {
      "Id": "string",
      "Region": "string",
      "appName": "string"
    }
  },
  "api": {
    "eventmap": {
      "GraphQLAPIEndpointOutput": "string",
      "GraphQLAPIIdOutput": "string"
    }
  },
  "auth": {
    "eventmap4d4b89934d4b8993": {
      "AppClientID": "string",
      "AppClientIDWeb": "string",
      "IdentityPoolId": "string",
      "IdentityPoolName": "string",
      "UserPoolArn": "string",
      "UserPoolId": "string",
      "UserPoolName": "string"
    },
    "userPoolGroups": {
      "AdminGroupRole": "string",
      "DefaultUserGroupRole": "string",
      "OrganizerGroupRole": "string"
    }
  },
  "function": {
    "eventmap4d4b89934d4b8993PostConfirmation": {
      "Arn": "string",
      "LambdaExecutionRole": "string",
      "LambdaExecutionRoleArn": "string",
      "Name": "string",
      "Region": "string"
    }
  }
}