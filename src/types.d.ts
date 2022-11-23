declare module "aws-amplify-react-native"; // amplify hack :)

declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootStackParamList {}
  }
}
