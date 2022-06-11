import React from 'react'
import { Provider } from 'react-redux'
import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { CardStyleInterpolators, createStackNavigator } from '@react-navigation/stack'
import { store, useAppSelector } from './redux'
import { AddScreen, ExploreScreen, HomeScreen, PlanScreen, ProfileScreen, TestScreen } from './screens'
// //Put this in '../index.js' as well???
import 'react-native-gesture-handler'
import {
  AddStackParamList,
  AuthenticationStackParamList,
  ExploreStackParamList,
  HomeStackParamList,
  ProfileStackParamList,
  RootTabsParamList,
} from './navigationTypes'
import { createSharedElementStackNavigator } from 'react-navigation-shared-element'
import { ThemeProvider } from '@shopify/restyle'
import { theme } from './theme'

export const RootTabs = createBottomTabNavigator<RootTabsParamList>()
export const AuthenticationStack = createStackNavigator<AuthenticationStackParamList>()
export const HomeStack = createSharedElementStackNavigator<HomeStackParamList>()
export const ExploreStack = createSharedElementStackNavigator<ExploreStackParamList>()
export const ProfileStack = createStackNavigator<ProfileStackParamList>()
export const AddStack = createStackNavigator<AddStackParamList>()

const HomeStackComponent = () => {
  return (
    <HomeStack.Navigator
      screenOptions={{
        presentation: 'card',
        cardStyleInterpolator: CardStyleInterpolators.forScaleFromCenterAndroid,
      }}>
      <HomeStack.Screen name="HomeScreen" component={HomeScreen} options={{ headerShown: false }} />
      <HomeStack.Screen
        name="PlanScreen"
        component={PlanScreen}
        options={{ headerShown: false, cardStyleInterpolator: CardStyleInterpolators.forScaleFromCenterAndroid }}
        sharedElements={(route) => {
          return [
            {
              id: route.params.planId,
              animation: 'fade',
              resize: 'none',
            },
            // {
            //   id: route.params.title,
            //   animation: 'fad',
            //   resize: 'none',
            // },
          ]
        }}
      />
    </HomeStack.Navigator>
  )
}

const ExploreStackComponent = () => {
  return (
    <ExploreStack.Navigator>
      <ExploreStack.Screen name="ExploreScreen" component={ExploreScreen} options={{ headerShown: false }} />
      <ExploreStack.Screen
        name="PlanScreen"
        component={PlanScreen}
        options={{ headerShown: false, cardStyleInterpolator: CardStyleInterpolators.forScaleFromCenterAndroid }}
      />
    </ExploreStack.Navigator>
  )
}

const ProfileStackComponent = () => {
  return (
    <ProfileStack.Navigator>
      <ProfileStack.Screen name="ProfileScreen" component={ProfileScreen} options={{ headerShown: false }} />
    </ProfileStack.Navigator>
  )
}

const AddStackComponent = () => {
  return (
    <AddStack.Navigator>
      <AddStack.Screen name="AddScreen" component={AddScreen} options={{ headerShown: false }} />
    </AddStack.Navigator>
  )
}

const App = () => {
  const isLoggedIn = useAppSelector((state) => state.userReducer.isLoggedIn)
  return (
    <ThemeProvider theme={theme}>
      <NavigationContainer>
        {isLoggedIn ? (
          <RootTabs.Navigator>
            <RootTabs.Screen name="HomeStack" component={HomeStackComponent} options={{ headerShown: false }} />
            <RootTabs.Screen name="ExploreStack" component={ExploreStackComponent} options={{ headerShown: false }} />
            <RootTabs.Screen name="ProfileStack" component={ProfileStackComponent} options={{ headerShown: false }} />
            <RootTabs.Screen name="AddStack" component={AddStackComponent} options={{ headerShown: false }} />
            <RootTabs.Screen name="Test" component={TestScreen} />
          </RootTabs.Navigator>
        ) : (
          <AuthenticationStack.Navigator>
            <AuthenticationStack.Screen name="Login" component={TestScreen} options={{ headerShown: true }} />
          </AuthenticationStack.Navigator>
        )}
      </NavigationContainer>
    </ThemeProvider>
  )
}

// Use this so we can wrap provider around app -> We want to use useAppSelector() in <App/> to get login status
const AppWrapper = () => {
  return (
    <Provider store={store}>
      <App />
    </Provider>
  )
}

export default AppWrapper
