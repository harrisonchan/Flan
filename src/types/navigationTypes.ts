import { BottomTabScreenProps } from '@react-navigation/bottom-tabs'
import { CompositeScreenProps, NavigatorScreenParams } from '@react-navigation/native'
import { StackScreenProps } from '@react-navigation/stack'
import { UserApiType, FlanType, PollType } from '@types'
// import { ActivityType, FlanType, LocationType } from '../redux/features/userSlice'

// THIS IS ALL WRONG GODDAMNIT

export type RootTabsParamList = {
  HomeStack: HomeStackNavigatorScreenParams
  ExploreStack: ExploreStackNavigatorScreenParams
  ProfileStack: ProfileStackNavigatorScreenParams
  AddStack: AddStackNavigatorScreenParams
  Test: TestStackNavigatorScreenParams
}
export type RootTabsNavigationProps = BottomTabScreenProps<RootTabsParamList>

/* Test */
export type TestStackParamList = {
  TestScreen: undefined
  PollStack: PollStackNavigatorScreenParams
  ProfileStack: ProfileStackNavigatorScreenParams
}
export type TestStackNavigationProps = StackScreenProps<TestStackParamList>
export type TestStackNavigatorScreenParams = NavigatorScreenParams<TestStackParamList>

/* PreLogin */
export type PreLoginTabsParamList = {
  ExploreStack: ExploreStackNavigatorScreenParams
  SettingsStack: SettingsStackNavigatorScreenParams
  AuthenticationStack: AuthenticationStackNavigatorScreenParams
  Test: TestStackNavigatorScreenParams
}
export type PreLoginTabsNavigationProps = BottomTabScreenProps<PreLoginTabsParamList>
export type PreLoginTabsScreenParams = NavigatorScreenParams<PreLoginTabsParamList>

/* Authentication */
export type AuthenticationStackParamList = {
  LoginScreen: { showNavigationHeader?: boolean } | undefined
  SignUpScreenInitial: undefined
  SignUpScreenDetails: { user: Omit<UserApiType, 'firstName' | 'lastName' | 'birthday' | 'accountType' | 'gender'> | string }
  ForgotPasswordScreen: undefined
}
export type AuthenticationStackNavigationProps = StackScreenProps<AuthenticationStackParamList>
export type AuthenticationStackNavigatorScreenParams = NavigatorScreenParams<AuthenticationStackParamList>

/* Home */
export type HomeStackParamList = {
  HomeScreen: undefined
  FlanStack: FlanStackNavigatorScreenParams
}
export type HomeStackNavigationProps = StackScreenProps<HomeStackParamList>
export type HomeStackNavigatorScreenParams = NavigatorScreenParams<HomeStackParamList>

/* Search */
export type SearchStackParamList = {
  SearchScreen: undefined
  SearchResultsScreen: undefined
}
export type SearchStackNavigationProps = StackScreenProps<SearchStackParamList>
export type SearchStackNavigatorScreenParams = NavigatorScreenParams<SearchStackParamList>

/* Settings */
export type SettingsStackParamList = AuthenticationStackParamList & {
  SettingsScreen: undefined
}
export type SettingsStackNavigationProps = StackScreenProps<SettingsStackParamList>
export type SettingsStackNavigatorScreenParams = NavigatorScreenParams<SettingsStackParamList>

/* Explore */
export type ExploreStackParamList = {
  ExploreScreen: undefined
  FlanStack: FlanStackNavigatorScreenParams
  SearchStack: SearchStackNavigatorScreenParams
}
export type ExploreStackNavigationProps = StackScreenProps<ExploreStackParamList>
export type ExploreStackNavigatorScreenParams = NavigatorScreenParams<ExploreStackParamList>

/* Flan */
export type FlanStackParamList = {
  FlanScreen: FlanType
  PollStack: PollStackNavigatorScreenParams
}
export type FlanStackNavigationProps = StackScreenProps<FlanStackParamList>
export type FlanStackNavigatorScreenParams = NavigatorScreenParams<FlanStackParamList>
export type FlanScreenNavigationProps = StackScreenProps<FlanStackParamList, 'FlanScreen'>

/* Poll */
export type PollStackParamList = {
  PollScreen: PollType
  PollCreateScreen: undefined
}
export type PollStackNavigationProps = StackScreenProps<PollStackParamList>
export type PollStackNavigatorScreenParams = NavigatorScreenParams<PollStackParamList>

/* Chat */
export type ChatStackParamList = {
  ChatInboxScreen: undefined
  ChatScreen: { chatId: string }
}
export type ChatStackNavigationProps = StackScreenProps<ChatStackParamList>
export type ChatStackNavigatorScreenParams = NavigatorScreenParams<ChatStackParamList>

/* Profile */
export type ProfileStackParamList = {
  ProfileScreen: undefined
  ProfileFlanListScreen: { title?: string; flanData?: FlanType[] }
  ProfilePersonalFlans: undefined
  ProfileSavedFlans: undefined
  FlanStack: FlanStackNavigatorScreenParams
  SettingsStack: SettingsStackNavigatorScreenParams
}
export type ProfileStackNavigationProps = StackScreenProps<ProfileStackParamList>
export type ProfileStackNavigatorScreenParams = NavigatorScreenParams<ProfileStackParamList>
export type ProfileFlanListScreenNavigationProps = StackScreenProps<ProfileStackParamList, 'ProfileFlanListScreen'>

/* Add */
export type AddStackParamList = {
  AddScreen: undefined
  AddNewOriginalInputFieldsScreen: Omit<FlanType, 'id'>
  AddNewOriginalPickIllustrationScreen: FlanType
  AddNewFromCommunityScreen: undefined
  AddNewSelectLocationScreen: undefined
}
export type AddStackNavigationProps = StackScreenProps<AddStackParamList>
export type AddStackNavigatorScreenParams = NavigatorScreenParams<AddStackParamList>

/* Introduction */
export type IntroductionStackParamList = AuthenticationStackParamList & {
  IntroductionScreen: undefined
}
export type IntroductionStackNavigationProps = StackScreenProps<IntroductionStackParamList>
export type IntroductionNavigatorStackScreenParams = NavigatorScreenParams<IntroductionStackParamList>
