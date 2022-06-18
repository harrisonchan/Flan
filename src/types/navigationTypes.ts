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

export type AuthenticationStackParamList = {
  Login: undefined
  ForgotPassword: undefined
}
export type AuthenticationStackNavigationProps = StackScreenProps<
  AuthenticationStackParamList,
  'Login' | 'ForgotPassword'
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
  AddNewOriginalStep1Screen: FlanType
  AddNewOriginalStep2Screen: FlanType
  AddNewFromCommunityScreen: undefined
  AddNewSelectLocationScreen: undefined
}
export type AddStackNavigationProps = StackScreenProps<
  AddStackParamList,
  | 'AddScreen'
  | 'AddNewOriginalStep1Screen'
  | 'AddNewOriginalStep2Screen'
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
