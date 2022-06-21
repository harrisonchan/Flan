import React, { useEffect, useState } from 'react'
import { Provider } from 'react-redux'
import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { CardStyleInterpolators, createStackNavigator } from '@react-navigation/stack'
import { store, useAppSelector } from './redux'
import {
  AddNewFromCommunityScreen,
  AddNewOriginalInputFieldsScreen,
  AddNewOriginalPickIllustrationScreen,
  AddNewSelectLocationScreen,
  AddScreen,
  ExploreScreen,
  HomeScreen,
  PlanScreen,
  ProfilePersonalFlans,
  ProfileSavedFlans,
  ProfileScreen,
  TestScreen,
} from './screens'
// //Put this in '../index.js' as well???
import 'react-native-gesture-handler'
import {
  AddStackParamList,
  AuthenticationStackParamList,
  ExploreStackParamList,
  HomeStackParamList,
  ProfileStackParamList,
  RootTabsParamList,
} from './types'
import { createSharedElementStackNavigator } from 'react-navigation-shared-element'
import { ThemeProvider, useTheme } from '@shopify/restyle'
import { darkTheme, Theme, theme } from './theme'
import Icon from 'react-native-vector-icons/Ionicons'
import { Box } from './components'

export const RootTabs = createBottomTabNavigator<RootTabsParamList>()
export const AuthenticationStack = createStackNavigator<AuthenticationStackParamList>()
// export const HomeStack = createSharedElementStackNavigator<HomeStackParamList>()
export const HomeStack = createStackNavigator<HomeStackParamList>()
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
        options={{
          headerShown: false,
          cardStyleInterpolator: CardStyleInterpolators.forScaleFromCenterAndroid,
          cardShadowEnabled: false,
        }}
        // sharedElements={(route) => {
        //   return [
        //     {
        //       id: route.params.planId,
        //       animation: 'fade',
        //       resize: 'none',
        //     },
        //     // {
        //     //   id: route.params.title,
        //     //   animation: 'fad',
        //     //   resize: 'none',
        //     // },
        //   ]
        // }}
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
      <ProfileStack.Screen
        name="ProfilePersonalFlans"
        component={ProfilePersonalFlans}
        options={{ headerShown: false }}
      />
      <ProfileStack.Screen name="ProfileSavedFlans" component={ProfileSavedFlans} options={{ headerShown: false }} />
      <ProfileStack.Screen
        name="PlanScreen"
        component={PlanScreen}
        options={{ headerShown: false, cardStyleInterpolator: CardStyleInterpolators.forScaleFromCenterAndroid }}
      />
    </ProfileStack.Navigator>
  )
}

const AddStackComponent = () => {
  return (
    <AddStack.Navigator>
      <AddStack.Screen name="AddScreen" component={AddScreen} options={{ headerShown: false }} />
      <AddStack.Screen
        name="AddNewOriginalInputFieldsScreen"
        component={AddNewOriginalInputFieldsScreen}
        options={{ headerShown: false }}
      />
      <AddStack.Screen
        name="AddNewOriginalPickIllustrationScreen"
        component={AddNewOriginalPickIllustrationScreen}
        options={{ headerShown: false }}
      />
      <AddStack.Screen
        name="AddNewFromCommunityScreen"
        component={AddNewFromCommunityScreen}
        options={{ headerShown: false }}
      />
      <AddStack.Screen
        name="AddNewSelectLocationScreen"
        component={AddNewSelectLocationScreen}
        options={{ headerShown: false, cardStyleInterpolator: CardStyleInterpolators.forRevealFromBottomAndroid }}
      />
    </AddStack.Navigator>
  )
}

const App = ({ onChangeColorScheme }: { onChangeColorScheme: (colorScheme: 'light' | 'dark') => void }) => {
  const isLoggedIn = useAppSelector((state) => state.userReducer.isLoggedIn)
  const colorScheme = useAppSelector((state) => state.utilityReducer.colorScheme)
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
      {isLoggedIn ? (
        <RootTabs.Navigator
          screenOptions={{ tabBarStyle: { backgroundColor: colors.lightColor }, tabBarShowLabel: false }}>
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
            options={{
              headerShown: false,
              tabBarIcon: ({ color }) => <Icon name="person" size={themeConstants.iconSize} color={color} />,
            }}
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
            component={TestScreen}
            options={{
              headerShown: false,
              tabBarIcon: ({ color }) => <Icon name="cog" size={themeConstants.iconSize} color={color} />,
            }}
          />
        </RootTabs.Navigator>
      ) : (
        <AuthenticationStack.Navigator>
          <AuthenticationStack.Screen name="Login" component={TestScreen} options={{ headerShown: true }} />
        </AuthenticationStack.Navigator>
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
