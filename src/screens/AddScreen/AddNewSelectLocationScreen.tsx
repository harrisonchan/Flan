import { useTheme } from '@shopify/restyle'
import React, { useEffect, useRef, useState } from 'react'
import { View } from 'react-native'
import { GooglePlacesAutocompleteRef } from 'react-native-google-places-autocomplete'
import MapView, { Marker, PROVIDER_GOOGLE, Region, Callout } from 'react-native-maps'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import { Box, Button, GooglePlacesInput, SkeletonScreen, StatusBarPadding, Text } from '../../components'
import NavigationHeader from '../../components/NavigationHeader'
import { Theme } from '../../theme'
import { AddStackNavigationProps } from '../../types'
import { getReverseGeocode } from '../../utilities'

const AddNewSelectLocationScreen = ({ route, navigation }: AddStackNavigationProps) => {
  const CAMERA_DEFAULTS = {
    center: { latitude: 25.0329636, longitude: 121.5654268 },
    altitude: 1000,
    heading: 0,
    pitch: 0,
    zoom: 18,
  }
  const [camera, setCamera] = useState(CAMERA_DEFAULTS)
  const [markerCoordinate, setMarkerCoordinate] = useState<
    | undefined
    | {
        latitude: number
        longitude: number
      }
  >(undefined)
  const [flanLocation, setFlanLocation] = useState<undefined | string | any>(undefined)
  const [showCallOut, setShowCallOut] = useState(false)
  const { colors, spacing, themeConstants } = useTheme<Theme>()
  const insets = useSafeAreaInsets()
  const MapViewRef = useRef<MapView>(null)
  const MarkerRef = useRef<Marker>(null)
  useEffect(() => {
    MapViewRef.current?.animateCamera(camera, { duration: 1000 })
  }, [camera])
  // useEffect(() => {
  //   ;(async () => {
  //     setFlanLocation('Test Location')
  //   })()
  // }, [markerCoordinate])
  // getReverseGeocode({ latitude: 25.0329636, longitude: 121.5654268 })
  const changeLocationBasedOnMarker = async (coordinate: { latitude: number; longitude: number }) => {
    setFlanLocation(await getReverseGeocode(coordinate))
    MarkerRef.current?.hideCallout()
  }
  return (
    <>
      {/* <StatusBarPadding /> */}
      <MapView
        ref={MapViewRef}
        // provider={PROVIDER_GOOGLE}
        // mapType="hybrid"
        loadingEnabled
        loadingIndicatorColor={colors.primaryColor}
        loadingBackgroundColor={colors.mainBackground}
        showsScale
        maxZoomLevel={30}
        toolbarEnabled
        style={{
          width: '100%',
          height: '100%',
        }}
        onPress={() => {
          if (showCallOut) {
            MarkerRef.current?.hideCallout()
            setShowCallOut(false)
          }
        }}
        onDoublePress={(e) => {
          const { latitude, longitude } = e.nativeEvent.coordinate
          setMarkerCoordinate({ latitude, longitude })
          changeLocationBasedOnMarker({ latitude, longitude })
        }}
        onMarkerPress={() => {
          if (!showCallOut) {
            MarkerRef.current?.showCallout()
            setShowCallOut(true)
          }
        }}
        initialCamera={camera}>
        {markerCoordinate && (
          <Marker
            ref={MarkerRef}
            draggable
            coordinate={
              markerCoordinate
                ? markerCoordinate
                : { latitude: CAMERA_DEFAULTS.center.latitude, longitude: CAMERA_DEFAULTS.center.longitude }
            }>
            <Callout style={{ justifyContent: 'center', alignItems: 'center', alignSelf: 'center' }}>
              <Box maxWidth={themeConstants.componentWidthS} justifyContent="center" alignItems="center">
                <Text variant="secondary">{flanLocation}</Text>
              </Box>
            </Callout>
          </Marker>
        )}
      </MapView>
      <Box width={themeConstants.containerWidth} alignSelf="center" position="absolute" top={insets.top}>
        <NavigationHeader
          rightIconProps={{ name: 'close', size: themeConstants.headerIconSize, color: colors.darkColor }}
          rightIconOnPress={() => navigation.goBack()}
        />
        <GooglePlacesInput
          onPress={(data, details) => {
            if (details) {
              const { lat, lng } = details.geometry.location
              const formattedAddress = details.formatted_address
              setCamera({
                ...CAMERA_DEFAULTS,
                center: { latitude: lat, longitude: lng },
              })
              setMarkerCoordinate({ latitude: lat, longitude: lng })
              setFlanLocation(formattedAddress)
            }
          }}
        />
      </Box>
      <Box width={themeConstants.containerWidth} position="absolute" bottom={spacing.xl} alignSelf="center">
        <Box backgroundColor="lightColor" borderRadius={20} padding="m">
          <Box flexDirection="row" alignItems="center" width="100%" justifyContent="space-between">
            <Box width="57%">
              <Text variant="secondary">{flanLocation ? flanLocation : 'No Location Selected'}</Text>
            </Box>
            <Box width="40%" justifyContent="center" alignItems="center">
              {flanLocation && (
                <>
                  <Button
                    mode="small"
                    label="Select Location"
                    style={{ backgroundColor: colors.lightGreen, marginBottom: spacing.s }}
                  />
                  <Button
                    mode="small"
                    label="Clear Location"
                    onPress={() => {
                      setFlanLocation(undefined)
                      setMarkerCoordinate(undefined)
                    }}
                  />
                </>
              )}
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  )
}

export default AddNewSelectLocationScreen
