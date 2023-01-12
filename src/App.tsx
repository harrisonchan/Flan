import React, { useEffect, useMemo, useState } from 'react'
import { Provider } from 'react-redux'
import { getFocusedRouteNameFromRoute, NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { CardStyleInterpolators, createStackNavigator } from '@react-navigation/stack'
import { store, useAppSelector } from '@redux'
import {
  AddNewFromCommunityScreen,
  AddNewOriginalInputFieldsScreen,
  AddNewOriginalPickIllustrationScreen,
  AddNewSelectLocationScreen,
  AddScreen,
  ExploreScreen,
  ForgotPasswordScreen,
  HomeScreen,
  LoginScreen,
  FlanScreen,
  ProfilePersonalFlans,
  ProfileSavedFlans,
  ProfileScreen,
  SignUpScreenInitial,
  SignUpScreenDetails,
  TestScreen,
  SearchScreen,
  SearchResultsScreen,
  ChatInboxScreen,
  ChatScreen,
  PollScreen,
  PollCreateScreen,
  SettingsScreen,
  IntroductionScreen,
  ProfileFlanListScreen,
} from '@screens'
// //Put this in '../index.js' as well???
import 'react-native-gesture-handler'
import {
  AddStackParamList,
  AuthenticationStackParamList,
  ChatStackParamList,
  ExploreStackParamList,
  HomeStackParamList,
  IntroductionStackParamList,
  PreLoginTabsParamList,
  ProfileStackParamList,
  RootTabsParamList,
  SettingsStackParamList,
  FlanStackParamList,
  PollStackParamList,
  SearchStackParamList,
  TestStackParamList,
} from '@types'
import { createSharedElementStackNavigator } from 'react-navigation-shared-element'
import { ThemeProvider, useTheme } from '@shopify/restyle'
import { darkTheme, Theme, theme } from './theme'
import Icon from 'react-native-vector-icons/Ionicons'
import { Alert, Box } from '@components'

export const RootTabs = createBottomTabNavigator<RootTabsParamList>()
export const TestStack = createStackNavigator<TestStackParamList>()
export const PreLoginTabs = createBottomTabNavigator<PreLoginTabsParamList>()

export const AuthenticationStack = createStackNavigator<AuthenticationStackParamList>()
// export const HomeStack = createSharedElementStackNavigator<HomeStackParamList>()
export const HomeStack = createStackNavigator<HomeStackParamList>()
export const FlanStack = createStackNavigator<FlanStackParamList>()
export const PollStack = createStackNavigator<PollStackParamList>()
export const ExploreStack = createSharedElementStackNavigator<ExploreStackParamList>()
export const SearchStack = createStackNavigator<SearchStackParamList>()
export const ChatStack = createStackNavigator<ChatStackParamList>()
export const ProfileStack = createStackNavigator<ProfileStackParamList>()
export const AddStack = createStackNavigator<AddStackParamList>()
export const IntroductionStack = createStackNavigator<IntroductionStackParamList>()
export const SettingsStack = createStackNavigator<SettingsStackParamList>()

const TestStackComponent = () => {
  return (
    <TestStack.Navigator>
      <TestStack.Screen name="TestScreen" component={TestScreen} options={{ headerShown: false }} />
      <TestStack.Screen
        name="PollStack"
        component={PollStackComponent}
        options={{ headerShown: false, cardStyleInterpolator: CardStyleInterpolators.forScaleFromCenterAndroid }}
      />
    </TestStack.Navigator>
  )
}

const SettingsStackComponent = () => {
  return (
    <SettingsStack.Navigator>
      <SettingsStack.Screen name="SettingsScreen" component={SettingsScreen} options={{ headerShown: false }} />
    </SettingsStack.Navigator>
  )
}

const HomeStackComponent = () => {
  return (
    <HomeStack.Navigator
      screenOptions={{
        presentation: 'card',
        cardStyleInterpolator: CardStyleInterpolators.forScaleFromCenterAndroid,
      }}>
      <HomeStack.Screen name="HomeScreen" component={HomeScreen} options={{ headerShown: false }} />
      <HomeStack.Screen
        name="FlanStack"
        component={FlanStackComponent}
        options={{
          headerShown: false,
          cardStyleInterpolator: CardStyleInterpolators.forScaleFromCenterAndroid,
          cardShadowEnabled: false,
        }}
        // sharedElements={(route) => {
        //   return [
        //     {
        //       id: route.params.flanId,
        //       animation: 'fade',
        //       resize: 'none',
        //     },
        //     // {
        //     //   id: route.params.title,
        //     //   animation: 'fade',
        //     //   resize: 'none',
        //     // },
        //   ]
        // }}
      />
    </HomeStack.Navigator>
  )
}

const FlanStackComponent = () => {
  return (
    <FlanStack.Navigator>
      <FlanStack.Screen name="FlanScreen" component={FlanScreen} options={{ headerShown: false }} />
      <FlanStack.Screen name="PollStack" component={PollStackComponent} options={{ headerShown: false }} />
    </FlanStack.Navigator>
  )
}

const PollStackComponent = () => {
  return (
    <PollStack.Navigator>
      <PollStack.Screen name="PollScreen" component={PollScreen} options={{ headerShown: false }} />
      <PollStack.Screen name="PollCreateScreen" component={PollCreateScreen} options={{ headerShown: false }} />
    </PollStack.Navigator>
  )
}

const SettingsStackComponent1 = () => {
  return (
    <SettingsStack.Navigator>
      <SettingsStack.Screen
        name="SettingsScreen"
        component={SettingsScreen}
        options={{ headerShown: false, cardStyleInterpolator: CardStyleInterpolators.forScaleFromCenterAndroid }}
      />
      <SettingsStack.Screen name="LoginScreen" component={LoginScreen} options={{ headerShown: false }} />
      <SettingsStack.Screen name="ForgotPasswordScreen" component={ForgotPasswordScreen} options={{ headerShown: false }} />
      <SettingsStack.Screen name="SignUpScreenInitial" component={SignUpScreenInitial} options={{ headerShown: false }} />
      <SettingsStack.Screen name="SignUpScreenDetails" component={SignUpScreenDetails} options={{ headerShown: false }} />
    </SettingsStack.Navigator>
  )
}

const ExploreStackComponent = () => {
  return (
    <ExploreStack.Navigator>
      <ExploreStack.Screen name="ExploreScreen" component={ExploreScreen} options={{ headerShown: false }} />
      <ExploreStack.Screen
        name="SearchStack"
        component={SearchStackComponent}
        options={{ headerShown: false, cardStyleInterpolator: CardStyleInterpolators.forScaleFromCenterAndroid }}
      />
      <ExploreStack.Screen
        name="FlanStack"
        component={FlanStackComponent}
        options={{ headerShown: false, cardStyleInterpolator: CardStyleInterpolators.forScaleFromCenterAndroid }}
      />
    </ExploreStack.Navigator>
  )
}

const SearchStackComponent = () => {
  return (
    <SearchStack.Navigator>
      <SearchStack.Screen name="SearchScreen" component={SearchScreen} options={{ headerShown: false }} />
      <SearchStack.Screen name="SearchResultsScreen" component={SearchResultsScreen} options={{ headerShown: false }} />
    </SearchStack.Navigator>
  )
}

const ChatStackComponent = () => {
  return (
    <ChatStack.Navigator>
      <ChatStack.Screen
        name="ChatInboxScreen"
        component={ChatInboxScreen}
        options={{ headerShown: false, cardStyleInterpolator: CardStyleInterpolators.forScaleFromCenterAndroid }}
      />
      <ChatStack.Screen
        name="ChatScreen"
        component={ChatScreen}
        options={{ headerShown: false, cardStyleInterpolator: CardStyleInterpolators.forScaleFromCenterAndroid }}
      />
    </ChatStack.Navigator>
  )
}

const ProfileStackComponent = () => {
  return (
    <ProfileStack.Navigator>
      <ProfileStack.Screen name="ProfileScreen" component={ProfileScreen} options={{ headerShown: false }} />
      <ProfileStack.Screen
        name="ProfilePersonalFlans"
        component={ProfilePersonalFlans}
        options={{ headerShown: false, cardStyleInterpolator: CardStyleInterpolators.forScaleFromCenterAndroid }}
      />
      <ProfileStack.Screen name="ProfileSavedFlans" component={ProfileSavedFlans} options={{ headerShown: false }} />
      <ProfileStack.Screen
        name="FlanStack"
        component={FlanStackComponent}
        options={{ headerShown: false, cardStyleInterpolator: CardStyleInterpolators.forScaleFromCenterAndroid }}
      />
      <ProfileStack.Screen
        name="SettingsScreen"
        component={SettingsScreen}
        options={{ headerShown: false, cardStyleInterpolator: CardStyleInterpolators.forScaleFromCenterAndroid }}
      />
      <ProfileStack.Screen
        name="ChatInboxScreen"
        component={ChatStackComponent}
        options={{ headerShown: false, cardStyleInterpolator: CardStyleInterpolators.forScaleFromCenterAndroid }}
      />
    </ProfileStack.Navigator>
  )
}

const AddStackComponent = () => {
  return (
    <AddStack.Navigator>
      <AddStack.Screen name="AddScreen" component={AddScreen} options={{ headerShown: false }} />
      <AddStack.Screen name="AddNewOriginalInputFieldsScreen" component={AddNewOriginalInputFieldsScreen} options={{ headerShown: false }} />
      <AddStack.Screen name="AddNewOriginalPickIllustrationScreen" component={AddNewOriginalPickIllustrationScreen} options={{ headerShown: false }} />
      <AddStack.Screen name="AddNewFromCommunityScreen" component={AddNewFromCommunityScreen} options={{ headerShown: false }} />
      <AddStack.Screen
        name="AddNewSelectLocationScreen"
        component={AddNewSelectLocationScreen}
        options={{ headerShown: false, cardStyleInterpolator: CardStyleInterpolators.forRevealFromBottomAndroid }}
      />
    </AddStack.Navigator>
  )
}

const AuthenticationStackComponent = () => {
  return (
    <AuthenticationStack.Navigator>
      <AuthenticationStack.Screen name="LoginScreen" component={LoginScreen} options={{ headerShown: false }} />
      <AuthenticationStack.Screen name="ForgotPasswordScreen" component={ForgotPasswordScreen} options={{ headerShown: false }} />
      <AuthenticationStack.Screen name="SignUpScreenInitial" component={SignUpScreenInitial} options={{ headerShown: false }} />
      <AuthenticationStack.Screen name="SignUpScreenDetails" component={SignUpScreenDetails} options={{ headerShown: false }} />
    </AuthenticationStack.Navigator>
  )
}

const IntrouctionStackComponent = () => {
  return (
    <IntroductionStack.Navigator>
      <IntroductionStack.Screen name="IntroductionScreen" component={IntroductionScreen} options={{ headerShown: false }} />
      <AuthenticationStack.Screen name="LoginScreen" component={LoginScreen} options={{ headerShown: false }} />
      <AuthenticationStack.Screen name="ForgotPasswordScreen" component={ForgotPasswordScreen} options={{ headerShown: false }} />
      <AuthenticationStack.Screen name="SignUpScreenInitial" component={SignUpScreenInitial} options={{ headerShown: false }} />
    </IntroductionStack.Navigator>
  )
}

const App = ({ onChangeColorScheme }: { onChangeColorScheme: (colorScheme: 'light' | 'dark') => void }) => {
  const isLoggedIn = useAppSelector((state) => state.userReducer.isLoggedIn)
  const colorScheme = useAppSelector((state) => state.utilityReducer.colorScheme)
  const hasPassedIntroduction = useAppSelector((state) => state.userReducer.hasPassedIntroduction)
  const alert = useAppSelector((state) => state.utilityReducer.alert)
  useEffect(() => {
    onChangeColorScheme && onChangeColorScheme(colorScheme)
  }, [colorScheme])
  const { colors, themeConstants } = useTheme<Theme>()
  return (
    <NavigationContainer
      theme={{
        dark: colorScheme == 'dark' ? true : false,
        colors: {
          primary: colors.primaryColor,
          background: colors.mainBackground,
          card: colors.mainBackground,
          text: colors.neutralText,
          border: colors.lightGreyColor,
          notification: colors.secondaryColor,
        },
      }}>
      {!isLoggedIn && !hasPassedIntroduction ? (
        <IntrouctionStackComponent />
      ) : isLoggedIn ? (
        <RootTabs.Navigator screenOptions={{ tabBarStyle: { backgroundColor: colors.lightColor }, tabBarShowLabel: false }}>
          <RootTabs.Screen
            name="HomeStack"
            component={HomeStackComponent}
            options={{
              headerShown: false,
              tabBarIcon: ({ color }) => <Icon name="home" size={themeConstants.iconSize} color={color} />,
            }}
          />
          <RootTabs.Screen
            name="ExploreStack"
            component={ExploreStackComponent}
            options={{
              headerShown: false,
              tabBarIcon: ({ color }) => <Icon name="search" size={themeConstants.iconSize} color={color} />,
            }}
          />
          <RootTabs.Screen
            name="ProfileStack"
            component={ProfileStackComponent}
            options={({ route }) => ({
              headerShown: false,
              tabBarIcon: ({ color }) => <Icon name="person" size={themeConstants.iconSize} color={color} />,
              tabBarStyle: ((route) => {
                const routeName = getFocusedRouteNameFromRoute(route) ?? ''
                if (routeName === 'ChatInboxScreen') {
                  return { display: 'none' }
                }
                return
              })(route),
            })}
          />
          <RootTabs.Screen
            name="AddStack"
            component={AddStackComponent}
            options={{
              headerShown: false,
              tabBarIcon: ({ focused, color }) => (
                <Box
                  borderRadius={100}
                  padding="xs"
                  backgroundColor={focused ? 'primaryColor' : 'lightPrimaryColor'}
                  position="absolute"
                  height={themeConstants.iconSize * 1.5}
                  width={themeConstants.iconSize * 1.5}
                  flexDirection="column"
                  justifyContent="center"
                  alignItems="center">
                  <Icon
                    name="add-circle"
                    size={themeConstants.iconSize * 0.85}
                    color={
                      focused
                        ? colorScheme == 'dark'
                          ? colors.darkSecondaryColor
                          : colors.lightSecondaryColor
                        : colorScheme == 'dark'
                        ? colors.darkTertiaryColor
                        : colors.tertiaryColor
                    }
                    style={{}}
                  />
                </Box>
              ),
            }}
          />
          <RootTabs.Screen
            name="Test"
            component={TestStackComponent}
            options={{
              headerShown: false,
              tabBarIcon: ({ color }) => <Icon name="cog" size={themeConstants.iconSize} color={color} />,
            }}
          />
          <RootTabs.Screen
            name="Chat"
            component={ProfileFlanListScreen}
            options={{
              headerShown: false,
              tabBarIcon: ({ color }) => <Icon name="chatbox-outline" size={themeConstants.iconSize} color={color} />,
            }}
            initialParams={{ screen: 'ProfileFlanListScreen', params: { title: 'hello world' } }}
          />
        </RootTabs.Navigator>
      ) : (
        <PreLoginTabs.Navigator
          screenOptions={{
            tabBarStyle: { backgroundColor: colors.lightColor },
            tabBarShowLabel: false,
          }}>
          <PreLoginTabs.Screen
            name="ExploreStack"
            component={ExploreStackComponent}
            options={{
              headerShown: false,
              tabBarIcon: ({ color }) => <Icon name="home" size={themeConstants.iconSize} color={color} />,
            }}
          />
          <PreLoginTabs.Screen
            name="SettingsStack"
            component={SettingsStackComponent}
            options={{
              headerShown: false,
              tabBarIcon: ({ color }) => <Icon name="cog" size={themeConstants.iconSize} color={color} />,
            }}
          />
          <PreLoginTabs.Screen
            name="Test"
            component={TestScreen}
            options={{
              headerShown: false,
              tabBarIcon: ({ color }) => <Icon name="cog" size={themeConstants.iconSize} color={color} />,
            }}
          />
        </PreLoginTabs.Navigator>
      )}
      {alert.isShowing && (
        <Alert
          title={alert.alertProps.title}
          message={alert.alertProps.message}
          positiveActionProps={alert.alertProps.positiveActionProps}
          negativeActionProps={alert.alertProps.negativeActionProps}
          customAlert={alert.alertProps.customAlert}
          backgroundPressHidesAlert={alert.alertProps.backgroundPressHidesAlert}
        />
      )}
    </NavigationContainer>
  )
}

// Use this so we can wrap provider around app -> We want to use useAppSelector() in <App/> to get login status
const AppWrapper = () => {
  const [colorScheme, setColorScheme] = useState('light')
  return (
    <Provider store={store}>
      <ThemeProvider theme={colorScheme == 'dark' ? darkTheme : theme}>
        <App onChangeColorScheme={(scheme) => setColorScheme(scheme)} />
      </ThemeProvider>
    </Provider>
  )
}

export default AppWrapper
