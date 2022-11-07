import { BottomTabScreenProps } from '@react-navigation/bottom-tabs'
import { CompositeScreenProps } from '@react-navigation/native'
import { StackScreenProps } from '@react-navigation/stack'
import { FlanType } from '../redux/features/flanSlice'
import { Formik, FormikProps } from 'formik'
// import { ActivityType, FlanType, LocationType } from '../redux/features/userSlice'

export type RootTabsParamList = {
  HomeStack: undefined
  ExploreStack: undefined
  Test: { testProp: any }
  ProfileStack: undefined
  AddStack: undefined
}
export type RootTabsNavigationProps = BottomTabScreenProps<
  RootTabsParamList,
  'HomeStack' | 'ExploreStack' | 'ProfileStack' | 'AddStack' | 'Test'
>

export type PreLoginTabsParamList = {
  ExploreStack: undefined
  SettingsStack: undefined
  Test: { testProp: any }
  AuthenticationStack: undefined
}
export type PreLoginTabsNavigationProps = BottomTabScreenProps<
  PreLoginTabsParamList,
  'ExploreStack' | 'SettingsStack' | 'AuthenticationStack' | 'Test'
>

export type AuthenticationStackParamList = {
  LoginScreen: { showNavigationHeader?: boolean } | undefined
  SignUpScreenInitial: undefined
  SignUpScreenDetails: { formik: {} }
  ForgotPasswordScreen: undefined
}
export type AuthenticationStackNavigationProps = StackScreenProps<
  AuthenticationStackParamList,
  'LoginScreen' | 'SignUpScreenInitial' | 'SignUpScreenDetails' | 'ForgotPasswordScreen'
>

export type FlanScreenParamsType = {
  flanId: string | number
  flanType?: 'created' | 'saved' | 'attended'
}

export type HomeStackParamList = {
  HomeScreen: undefined
  FlanScreen: FlanScreenParamsType
}
export type HomeStackNavigationProps = StackScreenProps<HomeStackParamList, 'HomeScreen' | 'FlanScreen'>

export type SearchStackParamList = {
  SearchScreen: undefined
  SearchResultsScreen: undefined
}
export type SearchStackNavigationProps = StackScreenProps<SearchStackParamList, 'SearchScreen' | 'SearchResultsScreen'>

export type SettingsStackParamList = AuthenticationStackParamList & {
  SettingsScreen: undefined
}
export type SettingsStackNavigationProps = StackScreenProps<
  SettingsStackParamList,
  'SettingsScreen' | 'LoginScreen' | 'ForgotPasswordScreen' | 'SignUpScreenInitial' | 'SignUpScreenDetails'
>

export type ExploreStackParamList = SearchStackParamList & {
  ExploreScreen: undefined
  FlanScreen: FlanScreenParamsType
}
export type ExploreStackNavigationProps = StackScreenProps<
  ExploreStackParamList,
  'ExploreScreen' | 'FlanScreen' | 'SearchScreen' | 'SearchResultsScreen'
>

//or FlanScreenNavigationProp? (without the s?)
export type FlanScreenNavigationProps = CompositeScreenProps<
  CompositeScreenProps<HomeStackNavigationProps, ExploreStackNavigationProps>,
  ProfileStackNavigationProps
>

export type ProfileStackParamList = SettingsStackParamList & {
  ProfileScreen: undefined
  ProfilePersonalFlans: undefined
  ProfileSavedFlans: undefined
  FlanScreen: FlanScreenParamsType
}
export type ProfileStackNavigationProps = StackScreenProps<
  ProfileStackParamList,
  'ProfileScreen',
  'ProfilePersonalFlans' | 'ProfileSavedFlans' | 'FlanScreen' | 'SettingsScreen'
>

export type AddStackParamList = {
  AddScreen: undefined
  AddNewOriginalInputFieldsScreen: Omit<FlanType, 'id'>
  AddNewOriginalPickIllustrationScreen: FlanType
  AddNewFromCommunityScreen: undefined
  AddNewSelectLocationScreen: undefined
}
export type AddStackNavigationProps = StackScreenProps<
  AddStackParamList,
  | 'AddScreen'
  | 'AddNewOriginalInputFieldsScreen'
  | 'AddNewOriginalPickIllustrationScreen'
  | 'AddNewFromCommunityScreen'
  | 'AddNewSelectLocationScreen'
>

// export type FlanStackParamList = {
//   HomeScreen?: undefined
//   ExploreScreen?: undefined
//   FlanScreen: undefined
// }
// export type FlanStackNavigationProps = StackScreenProps<
//   FlanStackParamList,
//   'HomeScreen' | 'ExploreScreen' | 'FlanScreen'
// >
// export type FlanStackNavigationProp = FlanStackNavigationProps['navigation']
// export type FlanStackRouteProp = FlanStackNavigationProps['route']

export type IntrodutionStackParamList = AuthenticationStackParamList & {
  IntroductionScreen: undefined
}
export type IntrodutionStackNavigationProps = StackScreenProps<
  IntrodutionStackParamList,
  'IntroductionScreen' | 'LoginScreen' | 'SignUpScreenInitial' | 'SignUpScreenDetails' | 'ForgotPasswordScreen'
>
