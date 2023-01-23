import { useTheme } from '@shopify/restyle'
import React from 'react'
import { ScrollView, FlatList } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { Box, Illustration, FlanCard, StatusBarPadding, Text, Button } from '@components'
import { useAppSelector } from '../../reduxComponents'
import { Theme } from '../../theme'
import Icon from 'react-native-vector-icons/Ionicons'
import { ProfileStackNavigationProps } from '../../types'
import NavigationHeader from '../../components/NavigationHeader'
import { illustrationTypeArray } from '../../components/Illustration'
import { createFlanList } from 'utilities/DummyData'

const ProfileScreen = ({ route, navigation }: ProfileStackNavigationProps) => {
  const { colors, spacing, themeConstants } = useTheme<Theme>()
  const user = useAppSelector((state) => state.userReducer.user)
  const { createdFlans, savedFlans, attendedFlans } = user
  return (
    <>
      <StatusBarPadding />
      <ScrollView showsVerticalScrollIndicator={false} style={{ backgroundColor: colors.mainBackground }}>
        <Button label="asdf" onPress={() => navigation.navigate('ProfileFlanListScreen', { title: 'hello', flanData: createFlanList(5) })} />
        <Box width={themeConstants.containerWidth} alignSelf="center" marginTop="xl" marginBottom="xl">
          <NavigationHeader
            leftIconProps={{ name: 'settings-outline', size: themeConstants.iconSize, color: colors.primaryColor }}
            leftIconOnPress={() => navigation.navigate('SettingsScreen')}
            rightComponent={
              <>
                <TouchableOpacity onPress={() => navigation.navigate('ChatInboxScreen')}>
                  <Icon name="mail-outline" size={themeConstants.iconSize} color={colors.primaryColor} />
                </TouchableOpacity>
              </>
            }
          />
          <Box flexDirection="row" alignItems="center" marginTop="m">
            <Box borderRadius={100} backgroundColor="primaryColor" overflow="hidden" marginRight="m">
              <Illustration
                illustration="illustration-wear-a-mask"
                height={themeConstants.smallIllustrationSize}
                width={themeConstants.smallIllustrationSize}
              />
            </Box>
            <Text variant="header3">
              {user.userFirstName} {user.userLastName}
            </Text>
          </Box>
          <TouchableOpacity>
            <Box>
              <Box flexDirection="row" justifyContent="space-between" marginTop="l" marginBottom="s">
                <Text color="primaryColor">Friends</Text>
                <Text variant="secondary">See All</Text>
              </Box>
              <FlatList
                horizontal
                showsHorizontalScrollIndicator={false}
                data={['Harrison', 'Joey', 'Mark', 'Jason', 'Kathy', 'Kevin', 'Caroline', 'Janice']}
                renderItem={({ item }) => (
                  <Box flexDirection="row" marginRight="s">
                    <Box marginRight="xs">
                      <Illustration
                        illustration="illustration-wear-a-mask"
                        height={themeConstants.iconSize}
                        width={themeConstants.iconSize}
                        fill={colors.primaryColor}
                      />
                    </Box>
                    <Text variant="secondary" color="neutralText">
                      {item}
                    </Text>
                  </Box>
                )}
              />
            </Box>
          </TouchableOpacity>
          <TouchableOpacity>
            <Box>
              <Box flexDirection="row" justifyContent="space-between" marginTop="l" marginBottom="s">
                <Text color="primaryColor">Achievements</Text>
                <Text variant="secondary">See All</Text>
              </Box>
              <FlatList
                horizontal
                showsHorizontalScrollIndicator={false}
                data={['Harrison', 'Joey', 'Mark', 'Jason', 'Kathy', 'Kevin', 'Caroline', 'Janice']}
                renderItem={({ item }) => (
                  <Box flexDirection="row" marginRight="s">
                    <Box marginRight="xs">
                      <Icon name="trophy-outline" size={themeConstants.iconSize} color={colors.primaryColor} />
                    </Box>
                    <Text variant="secondary" color="neutralText">
                      {item}
                    </Text>
                  </Box>
                )}
              />
            </Box>
          </TouchableOpacity>
          <TouchableOpacity>
            <Box>
              <Box flexDirection="row" justifyContent="space-between" marginTop="l" marginBottom="s">
                <Text color="primaryColor">Flan Tokens</Text>
                <Text variant="secondary">See All</Text>
              </Box>
              <Box flexDirection="row">
                <Icon name="logo-bitcoin" size={themeConstants.iconSize} color={colors.gold} />
                <Text>1002</Text>
              </Box>
              <FlatList
                horizontal
                showsHorizontalScrollIndicator={false}
                data={['Harrison', 'Joey', 'Mark', 'Jason', 'Kathy', 'Kevin', 'Caroline', 'Janice']}
                renderItem={({ item }) => (
                  <Box flexDirection="row" marginRight="s">
                    <Box marginRight="xs">{/* <Icon name="trophy-outline" size={themeConstants.iconSize} color={colors.primaryColor} /> */}</Box>
                    <Text variant="secondary" color="neutralText">
                      {item}
                    </Text>
                  </Box>
                )}
              />
            </Box>
          </TouchableOpacity>
          <Box flexDirection="row" justifyContent="space-between" marginTop="l" marginBottom="s">
            <Text color="primaryColor">My Flans</Text>
            {createdFlans.length > 1 && (
              <TouchableOpacity onPress={() => navigation.navigate('ProfilePersonalFlans')}>
                <Text variant="secondary">See All</Text>
              </TouchableOpacity>
            )}
          </Box>
          {createdFlans.length > 0 ? (
            <></>
          ) : (
            // <FlanCard
            //   title={createdFlans[0].title}
            //   author="Joey Lo"
            //   location={createdFlans[0].location?.address}
            //   numPeople={{ attending: 10 }}
            //   onPress={() => navigation.navigate('FlanScreen', { flanId: createdFlans[0].id, flanType: 'created' })}
            //   illustration={illustrationTypeArray[createdFlans[0].illustration]}
            // />
            <Text variant="secondary">Looks Like There Are No Flans Here Yet :(</Text>
          )}
          <Box flexDirection="row" justifyContent="space-between" marginTop="l" marginBottom="s">
            <Text color="primaryColor">Saved Flans</Text>
            <TouchableOpacity onPress={() => navigation.navigate('ProfileSavedFlans')}>
              <Text variant="secondary">See All</Text>
            </TouchableOpacity>
          </Box>
          {/* <FlanCard title="Go to the zoo" author="Joey Lo" location="Harrison's House, Taipei, Taiwan" numPeople={{ attending: 10 }} /> */}
          <Box flexDirection="row" justifyContent="space-between" marginTop="l" marginBottom="s">
            <Text color="primaryColor">Previous Flans</Text>
            <TouchableOpacity onPress={() => navigation.navigate('ProfileSavedFlans')}>
              <Text variant="secondary">See All</Text>
            </TouchableOpacity>
          </Box>
          {/* <FlanCard title="Go to the zoo" author="Joey Lo" location="Harrison's House, Taipei, Taiwan" numPeople={{ attending: 10 }} /> */}
        </Box>
      </ScrollView>
    </>
  )
}

export default ProfileScreen
