import dayjs from 'dayjs'
import localeData from 'dayjs/plugin/localeData'
import React from 'react'
import { Text, View } from 'react-native'
import { SharedElement } from 'react-navigation-shared-element'
import { Icon, ParallaxScrollView, FlanCard, FlanList, StatusBarPadding } from '../../components'
import { HomeStackNavigationProps } from '../../navigationTypes'
import { useAppSelector } from '../../redux'
import appStyles from '../../theme'

dayjs.extend(localeData)

const HomeScreen = (props: HomeStackNavigationProps) => {
  const currentTime = dayjs()
  const user = useAppSelector((state) => state.userReducer.user)
  return (
    <>
      <StatusBarPadding />
      <ParallaxScrollView
        backgroundStyle={{ backgroundColor: appStyles.colors.primary }}
        background={
          <View style={{ top: appStyles.spacing.L, alignSelf: 'flex-end' }}>
            <Icon
              icon="illustration-hangout"
              height={appStyles.styleUtilities.WIDTH_S}
              width={appStyles.styleUtilities.WIDTH_S}
              fill={appStyles.colors.tertiary}
            />
          </View>
        }
        foregroundStyle={{ height: 400 }}
        foreground={
          <>
            <View style={[appStyles.styles.flexRow, { alignItems: 'center' }]}>
              <Icon
                icon={
                  currentTime.isAfter(currentTime.set('hour', 5)) && currentTime.isBefore(currentTime.set('hour', 17))
                    ? 'sun'
                    : 'moon'
                }
                height={appStyles.styleUtilities.ICON_XS}
                width={appStyles.styleUtilities.ICON_XS}
                fill={appStyles.colors.primaryLight}
              />
              <Text
                style={[
                  appStyles.typography.secondary,
                  appStyles.spacingStyles.marginLeftXS,
                  { color: appStyles.colors.primaryLight, textTransform: 'uppercase' },
                ]}>
                {currentTime.format('ddd DD MMM')}
              </Text>
            </View>
            <Text style={appStyles.typography.title}>Hi {user.username}</Text>
          </>
        }
        mainContentStyle={[{ backgroundColor: appStyles.colors.primaryLight }, appStyles.spacingStyles.paddingS]}
        mainContent={
          <>
            <Text style={[appStyles.typography.body, appStyles.spacingStyles.marginBottomXXS]}>Today's Flans</Text>
            <SharedElement id={'0'}>
              <FlanCard
                title="Champaign Bar Crawl"
                author="Joey Lo"
                numPeople={{ attending: 20 }}
                categories={['Alcohol', 'Music', 'Sexy Time', 'Test1', 'Test2']}
                // randomColoredCategories
                onPress={() => props.navigation.navigate('FlanScreen', { flanId: '0' })}
              />
            </SharedElement>
            <Text
              style={[
                appStyles.typography.body,
                appStyles.spacingStyles.marginTopXS,
                appStyles.spacingStyles.marginBottomXXS,
              ]}>
              Upcoming
            </Text>
            <FlanList
              flans={[
                { title: 'Date with Joey', date: currentTime, numPeople: { attending: 2 } },
                { title: 'Flan 2', date: currentTime.add(2, 'day'), numPeople: { attending: 2 } },
                { title: 'Flan 3', date: currentTime.add(3, 'day'), numPeople: { attending: 2 } },
                { title: 'Flan 4', date: currentTime.add(4, 'day'), numPeople: { attending: 2 } },
                { title: 'Flan 5', date: currentTime.add(5, 'day'), numPeople: { attending: 2 } },
                { title: 'Flan 6', date: currentTime.add(6, 'day'), numPeople: { attending: 2 } },
              ]}
            />
          </>
        }
      />
    </>
  )
}

export default HomeScreen
