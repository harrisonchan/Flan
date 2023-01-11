import { BottomTabScreenProps } from '@react-navigation/bottom-tabs'
import { CompositeScreenProps, NavigatorScreenParams } from '@react-navigation/native'
import { StackScreenProps } from '@react-navigation/stack'
import { FlanType } from '../redux/features/flanSlice'
import { Formik, FormikProps } from 'formik'
import { userType } from './apiTypes'
// import { ActivityType, FlanType, LocationType } from '../redux/features/userSlice'

export type RootTabsParamList = {
  HomeStack: undefined
  ExploreStack: undefined
  Test: { testProp: any }
  ProfileStack: undefined
  AddStack: undefined
}
export type RootTabsNavigationProps = BottomTabScreenProps<RootTabsParamList, 'HomeStack' | 'ExploreStack' | 'ProfileStack' | 'AddStack' | 'Test'>

export type TestStackParamList = {
  TestScreen: undefined
  PollStack: NavigatorScreenParams<PollStackParamList>
}

export type TestStackNavigationProps = StackScreenProps<TestStackParamList, 'TestScreen', 'PollStack'>

export type PreLoginTabsParamList = {
  ExploreStack: undefined
  SettingsStack: undefined
  Test: { testProp: any }
  AuthenticationStack: undefined
}
export type PreLoginTabsNavigationProps = BottomTabScreenProps<PreLoginTabsParamList, 'ExploreStack' | 'SettingsStack' | 'AuthenticationStack' | 'Test'>

export type AuthenticationStackParamList = {
  LoginScreen: { showNavigationHeader?: boolean } | undefined
  SignUpScreenInitial: undefined
  SignUpScreenDetails: { user: Omit<userType, 'firstName' | 'lastName' | 'birthday' | 'accountType' | 'gender'> | string }
  ForgotPasswordScreen: undefined
}
export type AuthenticationStackNavigationProps = StackScreenProps<
  AuthenticationStackParamList,
  'LoginScreen' | 'SignUpScreenInitial' | 'SignUpScreenDetails' | 'ForgotPasswordScreen'
>

export type HomeStackParamList = {
  HomeScreen: undefined
  FlanStack: NavigatorScreenParams<FlanStackParamList>
}
export type HomeStackNavigationProps = StackScreenProps<HomeStackParamList, 'HomeScreen' | 'FlanStack'>

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

export type ExploreStackParamList = {
  ExploreScreen: undefined
  FlanStack: NavigatorScreenParams<FlanStackParamList>
  SearchStack: NavigatorScreenParams<SearchStackParamList>
}
export type ExploreStackNavigationProps = StackScreenProps<ExploreStackParamList, 'ExploreScreen' | 'FlanStack' | 'SearchStack'>

export type FlanStackParamList = {
  FlanScreen: {
    flanId: string | number
    flanType?: 'created' | 'saved' | 'attended'
  }
  PollStack: PollStackParamList
}

//or FlanScreenNavigationProp? (without the s?)
export type FlanStackNavigationProps = StackScreenProps<FlanStackParamList, 'FlanScreen' | 'PollStack'>

export type PollStackParamList = {
  PollScreen: undefined
  PollCreateScreen: undefined
}

export type PollStackNavigationProps = StackScreenProps<PollStackParamList, 'PollScreen' | 'PollCreateScreen'>

export type ChatStackParamList = {
  ChatInboxScreen: undefined
  ChatScreen: { chatId: string }
}
export type ChatStackNavigationProps = StackScreenProps<ChatStackParamList, 'ChatInboxScreen' | 'ChatScreen'>

export type ProfileStackParamList = SettingsStackParamList &
  ChatStackParamList & {
    ProfileScreen: undefined
    ProfilePersonalFlans: undefined
    ProfileSavedFlans: undefined
    FlanStack: NavigatorScreenParams<FlanStackParamList>
  }
export type ProfileStackNavigationProps = CompositeScreenProps<
  StackScreenProps<ProfileStackParamList, 'ProfileScreen' | 'ProfilePersonalFlans' | 'ProfileSavedFlans' | 'FlanStack' | 'SettingsScreen'>,
  ChatStackNavigationProps
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
  'AddScreen' | 'AddNewOriginalInputFieldsScreen' | 'AddNewOriginalPickIllustrationScreen' | 'AddNewFromCommunityScreen' | 'AddNewSelectLocationScreen'
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
