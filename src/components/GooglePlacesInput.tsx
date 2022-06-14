import React, { useRef } from 'react'
import { useEffect } from 'react'
import {
  GooglePlaceData,
  GooglePlaceDetail,
  GooglePlacesAutocomplete,
  GooglePlacesAutocompleteRef,
} from 'react-native-google-places-autocomplete'

interface GooglePlacesInputProps {
  onPress?: (data: GooglePlaceData, details?: GooglePlaceDetail | undefined | null) => void
  setAddressText?: string
}

const GooglePlacesInput: React.FC<GooglePlacesInputProps> = (props) => {
  const ref = useRef<GooglePlacesAutocompleteRef>(null)
  useEffect(() => {
    if (props.setAddressText) {
      ref.current?.setAddressText(props.setAddressText)
    }
  }, [props])
  return (
    <GooglePlacesAutocomplete
      fetchDetails
      ref={ref}
      placeholder="Search"
      onPress={(data, details = null) => {
        // 'details' is provided when fetchDetails = true
        props.onPress && props.onPress(data, details)
        // console.log('Data: ', data)
        // console.log('Details: ', details)
        console.log('Latitude: ', details?.geometry.location.lat, ', Longitude: ', details?.geometry.location.lng)
        console.log('Address: ', details?.address_components)
        console.log('Address2: ', details?.adr_address)
        console.log('Address formatted: ', details?.formatted_address)
      }}
      query={{
        key: 'AIzaSyBjaM6Gy44QKIyYVgxJznJbvPtqbf1Z1Zc',
        language: 'en',
      }}
    />
  )
}

export default GooglePlacesInput
