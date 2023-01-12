import React from 'react'
import Box from './Box/Box'
import Illustration, { illustrationTypeArray } from './Illustration'

// TODO: Implement image source

interface AvatarProps {
  height?: number
  width?: number
  source: string | number
}

const Avatar: React.FC<AvatarProps> = (props) => {
  return (
    <>
      <Box borderRadius={100} height={props.height ?? 40} width={props.width ?? 40} overflow="hidden">
        {typeof props.source == 'string' ? <></> : <Illustration height="100%" width="100%" illustration={illustrationTypeArray[props.source]} />}
      </Box>
    </>
  )
}

export default Avatar
