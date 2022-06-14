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
  darkGrey: '#4A5363',
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
    lightColor: colorPalette.light,
    darkColor: colorPalette.dark,
    lightGreyColor: colorPalette.lightGrey,
    greyColor: colorPalette.grey,
    darkGreyColor: colorPalette.darkGrey,
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
    componentWidthXL: SCREEN_WIDTH * 0.9,
    componentWidthL: SCREEN_WIDTH * 0.7,
    componentWidthM: SCREEN_WIDTH * 0.4,
    componentWidthS: SCREEN_WIDTH * 0.2,
    componentWidthXS: SCREEN_WIDTH * 0.1,
    componentHeightL: SCREEN_HEIGHT * 0.3,
    componentHeightM: SCREEN_HEIGHT * 0.2,
    componentHeightS: SCREEN_HEIGHT * 0.1,
    componentHeightXS: SCREEN_HEIGHT * 0.05,
    componentHeightXXS: SCREEN_HEIGHT * 0.025,
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

export const darkTheme: Theme = {
  ...theme,
  colors: {
    ...theme.colors,
    neutralText: colorPalette.light,
    lightPrimaryColor: colorPalette.darkRed,
    primaryColor: colorPalette.red,
    darkPrimaryColor: colorPalette.lightRed,
    lightSecondaryColor: colorPalette.darkSand,
    secondaryColor: colorPalette.sand,
    darkSecondaryColor: colorPalette.lightSand,
    lightTertiaryColor: colorPalette.darkGreen,
    tertiaryColor: colorPalette.green,
    darkTertiaryColor: colorPalette.lightGreen,
    mainBackground: colorPalette.dark,
    lightColor: colorPalette.darkGrey,
    darkColor: colorPalette.light,
    lightGreyColor: colorPalette.darkGrey,
    darkGreyColor: colorPalette.lightGrey,
    buttonText: colorPalette.dark,
  },
}

export default theme
