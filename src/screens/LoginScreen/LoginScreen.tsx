import React, { useState } from 'react'
import { View } from 'react-native'
import { useDispatch } from 'react-redux'
import { Button, TextInput } from '../../components'
import { appActions } from '../../redux/features'

const LoginScreen = () => {
  const [username, setUsername] = useState('')
  const dispatch = useDispatch()
  return (
    <View style={[appStyles.styles.container, { backgroundColor: appStyles.colors.primaryLight }]}>
      {/* <TextInput2 label="bolasdf" /> */}
      <TextInput
        placeholder="Username"
        label="Username"
        onChangeText={(input) => setUsername(input)}
        textInputProps={{ autoCapitalize: 'none' }}
      />
      <TextInput placeholder="Password" label="Password" textInputProps={{ secureTextEntry: true }} />
      <Button
        buttonText="Login"
        onPress={() => {
          username != '' &&
            dispatch(
              appActions.userActions.loginUser({ userId: 0, username: username, userFirstName: '', userLastName: '' })
            )
        }}
      />
    </View>
  )
}

export default LoginScreen
