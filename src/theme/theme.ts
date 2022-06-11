import { createTheme } from '@shopify/restyle'
import { Dimensions } from 'react-native'
import { moderateScale } from 'react-native-size-matters'

export const colorPalette = {
  lightRed: '#F1DEDF',
  red: '#E26E62',
  darkRed: '#A4666B',
  lightGreen: '#A4AE9E',
  green: '#6E9D57',
  darkGreen: '#40493B',
  lightViolet: '#AFA4DA',
  violet: '#4543A5',
  darkViolet: '#00085C',
  lightSand: '#FFEECA',
  sand: '#DCBD7B',
  darkSand: '#A38849',
  lightAqua: '#BFFAFF',
  aqua: '#89BDCA',
  darkAqua: '#548894',
  gold: '#F8AC45',
  dark: '#333944',
  lightGrey: '#F1F4F9',
  grey: '#BEBFBF',
  light: '#FFFFFF',
}

const SCREEN_WIDTH = Dimensions.get('screen').width
const SCREEN_HEIGHT = Dimensions.get('screen').height

const theme = createTheme({
  colors: {
    neutralText: colorPalette.dark,
    subduedText: colorPalette.grey,
    lightPrimaryColor: colorPalette.lightRed,
    primaryColor: colorPalette.red,
    darkPrimaryColor: colorPalette.darkRed,
    lightSecondaryColor: colorPalette.lightSand,
    secondaryColor: colorPalette.sand,
    darkSecondaryColor: colorPalette.darkSand,
    lightTertiaryColor: colorPalette.lightGreen,
    tertiaryColor: colorPalette.green,
    darkTertiaryColor: colorPalette.darkGreen,
    mainBackground: colorPalette.lightGrey,
    cardPrimaryBackground: colorPalette.red,
    buttonBackground: colorPalette.red,
    buttonText: colorPalette.lightGrey,
    ...colorPalette,
  },
  spacing: {
    xs: moderateScale(3),
    s: moderateScale(6),
    m: moderateScale(12),
    l: moderateScale(18),
    xl: moderateScale(30),
    xxl: moderateScale(42),
    xxxl: moderateScale(58),
    xxxxl: moderateScale(78),
    containerInset: SCREEN_WIDTH * 0.05,
    none: 0,
  },
  breakpoints: {
    phone: 0,
    tablet: 768,
  },
  themeConstants: {
    screenWidth: SCREEN_WIDTH,
    screenHeight: SCREEN_HEIGHT,
    containerWidth: SCREEN_WIDTH * 0.9,
    largeComponentWidth: SCREEN_WIDTH * 0.9,
    smallComponentWidth: SCREEN_WIDTH * 0.4,
    largeComponentHeight: SCREEN_HEIGHT * 0.35,
    smallComponentHeight: SCREEN_HEIGHT * 0.2,
    iconSize: moderateScale(25),
    smallIconSize: moderateScale(20),
    headerIconSize: moderateScale(35),
    smallIllustrationSize: moderateScale(100),
    illustrationSize: moderateScale(200),
  },
  shadows: {
    primary: {
      elevation: 5,
      shadowColor: '#000000',
      shadowRadius: 3.84,
      shadowOpacity: 0.2,
      shadowOffset: {
        width: 0,
        height: 2,
      },
    },
    secondary: {
      elevation: 5,
      shadowColor: '#000000',
      shadowRadius: 3.84,
      shadowOpacity: 0.15,
      shadowOffset: {
        width: 0,
        height: 2,
      },
    },
    top: {
      elevation: 5,
      shadowColor: '#000000',
      shadowRadius: 3.84,
      shadowOpacity: 0.25,
      shadowOffset: {
        width: 0,
        height: -2,
      },
    },
  },
  textVariants: {
    header1: {
      fontFamily: 'Poppins-SemiBold',
      fontSize: moderateScale(48),
      lineHeight: moderateScale(72),
      color: 'neutralText',
    },
    header2: {
      fontFamily: 'Poppins-SemiBold',
      fontSize: moderateScale(36),
      lineHeight: moderateScale(54),
      color: 'neutralText',
    },
    header3: {
      fontFamily: 'Poppins-SemiBold',
      fontSize: moderateScale(24),
      lineHeight: moderateScale(36),
      color: 'neutralText',
    },
    body: {
      fontFamily: 'Poppins-SemiBold',
      fontSize: moderateScale(18),
      lineHeight: moderateScale(27),
      color: 'neutralText',
    },
    secondary: {
      fontFamily: 'Poppins-SemiBold',
      fontSize: moderateScale(14),
      lineHeight: moderateScale(21),
      color: 'subduedText',
    },
    tertiary: {
      fontFamily: 'Poppins-Medium',
      fontSize: moderateScale(13),
      lineHeight: moderateScale(19.5),
      color: 'neutralText',
    },
    form: {
      fontFamily: 'Poppins-SemiBold',
      fontSize: moderateScale(18),
      lineHeight: moderateScale(27),
      color: 'neutralText',
    },
    action: {
      fontFamily: 'Poppins-Medium',
      fontSize: moderateScale(16),
      lineHeight: moderateScale(24),
      color: 'neutralText',
    },
  },
})

export type Theme = typeof theme
export default theme
