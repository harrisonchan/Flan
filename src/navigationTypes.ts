import { BottomTabScreenProps } from '@react-navigation/bottom-tabs'
import { CompositeScreenProps } from '@react-navigation/native'
import { StackScreenProps } from '@react-navigation/stack'

export type RootTabsParamList = {
  HomeStack: undefined
  ExploreStack: undefined
  Test: undefined
  NewTask: undefined
  ProfileStack: undefined
  AddStack: undefined
}
export type RootTabsNavigationProps = BottomTabScreenProps<RootTabsParamList, 'HomeStack'>

export type AuthenticationStackParamList = {
  Login: undefined
  ForgotPassword: undefined
}
export type AuthenticationStackNavigationProps = StackScreenProps<
  AuthenticationStackParamList,
  'Login' | 'ForgotPassword'
>

export type HomeStackParamList = {
  HomeScreen: undefined
  PlanScreen: { planId: string }
}
export type HomeStackNavigationProps = StackScreenProps<HomeStackParamList, 'HomeScreen' | 'PlanScreen'>

export type ExploreStackParamList = {
  ExploreScreen: undefined
  PlanScreen: undefined
}
export type ExploreStackNavigationProps = StackScreenProps<ExploreStackParamList, 'ExploreScreen' | 'PlanScreen'>

//or PlanScreenNavigationProp? (without the s?)
export type PlanScreenNavigationProps = CompositeScreenProps<HomeStackNavigationProps, ExploreStackNavigationProps>

export type ProfileStackParamList = {
  ProfileScreen: undefined
}
export type ProfileStackNavigationProps = StackScreenProps<ProfileStackParamList, 'ProfileScreen'>

export type AddStackParamList = {
  AddScreen: undefined
}
export type AddStackNavigationProps = StackScreenProps<AddStackParamList, 'AddScreen'>

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
