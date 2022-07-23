import { BottomTabScreenProps } from '@react-navigation/bottom-tabs'
import { CompositeScreenProps } from '@react-navigation/native'
import { StackScreenProps } from '@react-navigation/stack'
import { ActivityType, FlanType, LocationType } from '../redux/features/userSlice'

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
  LoginScreen: undefined
  SignUpScreen: undefined
  ForgotPasswordScreen: undefined
}
export type AuthenticationStackNavigationProps = StackScreenProps<
  AuthenticationStackParamList,
  'LoginScreen' | 'SignUpScreen' | 'ForgotPasswordScreen'
>

export type PlanScreenParamsType = {
  planId: string | number
  planType: 'created' | 'saved' | 'attended'
}

export type HomeStackParamList = {
  HomeScreen: undefined
  PlanScreen: PlanScreenParamsType
}
export type HomeStackNavigationProps = StackScreenProps<HomeStackParamList, 'HomeScreen' | 'PlanScreen'>

export type ExploreStackParamList = {
  ExploreScreen: undefined
  PlanScreen: PlanScreenParamsType
}
export type ExploreStackNavigationProps = StackScreenProps<ExploreStackParamList, 'ExploreScreen' | 'PlanScreen'>

//or PlanScreenNavigationProp? (without the s?)
export type PlanScreenNavigationProps = CompositeScreenProps<
  CompositeScreenProps<HomeStackNavigationProps, ExploreStackNavigationProps>,
  ProfileStackNavigationProps
>

export type ProfileStackParamList = {
  ProfileScreen: undefined
  ProfilePersonalFlans: undefined
  ProfileSavedFlans: undefined
  PlanScreen: PlanScreenParamsType
}
export type ProfileStackNavigationProps = StackScreenProps<
  ProfileStackParamList,
  'ProfileScreen',
  'ProfilePersonalFlans' | 'ProfileSavedFlans' | 'PlanScreen'
>

export type AddStackParamList = {
  AddScreen: undefined
  AddNewOriginalInputFieldsScreen: FlanType
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

// export type PlanStackParamList = {
//   HomeScreen?: undefined
//   ExploreScreen?: undefined
//   PlanScreen: undefined
// }
// export type PlanStackNavigationProps = StackScreenProps<
//   PlanStackParamList,
//   'HomeScreen' | 'ExploreScreen' | 'PlanScreen'
// >
// export type PlanStackNavigationProp = PlanStackNavigationProps['navigation']
// export type PlanStackRouteProp = PlanStackNavigationProps['route']

export type IntrodutionStackParamList = AuthenticationStackParamList & {
  IntroductionScreen: undefined
}
export type IntrodutionStackNavigationProps = StackScreenProps<
  IntrodutionStackParamList,
  'IntroductionScreen' | 'LoginScreen' | 'SignUpScreen' | 'ForgotPasswordScreen'
>
