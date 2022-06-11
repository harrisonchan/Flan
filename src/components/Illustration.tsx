import React from 'react'
import { ColorValue } from 'react-native'
import { IllustrationSports, IllustrationHangout, IllustrationWearAMask } from '../assets'

export type illustrationType = 'illustration-sports' | 'illustration-hangout' | 'illustration-wear-a-mask'

export interface IllustrationProps {
  illustration: illustrationType
  width: string | number
  height: string | number
  fill?: ColorValue
  stroke?: ColorValue
  strokeWidth?: number
}

const defaultProps: IllustrationProps = {
  illustration: 'illustration-hangout',
  width: 40,
  height: 40,
  fill: 'black',
}

const Illustration: React.FC<IllustrationProps> = (props) => {
  return (
    <>
      {props.illustration == 'illustration-sports' && (
        <IllustrationSports
          width={props.width}
          height={props.height}
          fill={props.fill}
          stroke={props.stroke}
          strokeWidth={props.strokeWidth}
        />
      )}
      {props.illustration == 'illustration-hangout' && (
        <IllustrationHangout
          width={props.width}
          height={props.height}
          fill={props.fill}
          stroke={props.stroke}
          strokeWidth={props.strokeWidth}
        />
      )}
      {props.illustration == 'illustration-wear-a-mask' && (
        <IllustrationWearAMask
          width={props.width}
          height={props.height}
          fill={props.fill}
          stroke={props.stroke}
          strokeWidth={props.strokeWidth}
        />
      )}
    </>
  )
}

Illustration.defaultProps = defaultProps

export default Illustration
