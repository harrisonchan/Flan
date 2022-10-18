import React from 'react'
import { ColorValue } from 'react-native'
import { Illustrations } from '../assets'

export type illustrationType =
  | 'illustration-animal'
  | 'illustration-bad-gateway'
  | 'illustration-bored'
  | 'illustration-business-plan'
  | 'illustration-business-travel'
  | 'illustration-car-drifting'
  | 'illustration-come-back-later'
  | 'illustration-connection-lost'
  | 'illustration-cool-guy'
  | 'illustration-couple'
  | 'illustration-delete-confirmation'
  | 'illustration-deleted'
  | 'illustration-delivery'
  | 'illustration-done'
  | 'illustration-downloading'
  | 'illustration-e-commerce'
  | 'illustration-error'
  | 'illustration-explore'
  | 'illustration-failure'
  | 'illustration-family'
  | 'illustration-fashion'
  | 'illustration-finances'
  | 'illustration-food'
  | 'illustration-freedom'
  | 'illustration-friends'
  | 'illustration-globe'
  | 'illustration-growth'
  | 'illustration-hangout'
  | 'illustration-health-research'
  | 'illustration-hello'
  | 'illustration-landscape'
  | 'illustration-list-is-empty'
  | 'illustration-loading'
  | 'illustration-location'
  | 'illustration-medicine'
  | 'illustration-message-sent'
  | 'illustration-mind-blowing'
  | 'illustration-mother-nature'
  | 'illustration-music'
  | 'illustration-navigate'
  | 'illustration-news'
  | 'illustration-no-comments'
  | 'illustration-no-messages'
  | 'illustration-no-results'
  | 'illustration-order-placed'
  | 'illustration-painter'
  | 'illustration-portrait'
  | 'illustration-relationship'
  | 'illustration-relax'
  | 'illustration-run'
  | 'illustration-safe-box'
  | 'illustration-science'
  | 'illustration-searching'
  | 'illustration-security'
  | 'illustration-settings'
  | 'illustration-sign-in'
  | 'illustration-sign-out'
  | 'illustration-sign-up'
  | 'illustration-social-distancing'
  | 'illustration-soulful'
  | 'illustration-sports'
  | 'illustration-tasks'
  | 'illustration-technology'
  | 'illustration-travel'
  | 'illustration-under-construction'
  | 'illustration-unsubscribed'
  | 'illustration-upgrading'
  | 'illustration-victory'
  | 'illustration-video-call'
  | 'illustration-virus'
  | 'illustration-wear-a-mask'
  | 'illustration-welcome'
  | 'illustration-work-from-home'
  | 'illustration-workflow'
  | 'illustration-writing'

export const illustrationTypeArray: illustrationType[] = [
  'illustration-animal',
  'illustration-bad-gateway',
  'illustration-bored',
  'illustration-business-plan',
  'illustration-business-travel',
  'illustration-car-drifting',
  'illustration-come-back-later',
  'illustration-connection-lost',
  'illustration-cool-guy',
  'illustration-couple',
  'illustration-delete-confirmation',
  'illustration-deleted',
  'illustration-delivery',
  'illustration-done',
  'illustration-downloading',
  'illustration-e-commerce',
  'illustration-error',
  'illustration-explore',
  'illustration-failure',
  'illustration-family',
  'illustration-fashion',
  'illustration-finances',
  'illustration-food',
  'illustration-freedom',
  'illustration-friends',
  'illustration-globe',
  'illustration-growth',
  'illustration-hangout',
  'illustration-health-research',
  'illustration-hello',
  'illustration-landscape',
  'illustration-list-is-empty',
  'illustration-loading',
  'illustration-location',
  'illustration-medicine',
  'illustration-message-sent',
  'illustration-mind-blowing',
  'illustration-mother-nature',
  'illustration-music',
  'illustration-navigate',
  'illustration-news',
  'illustration-no-comments',
  'illustration-no-messages',
  'illustration-no-results',
  'illustration-order-placed',
  'illustration-painter',
  'illustration-portrait',
  'illustration-relationship',
  'illustration-relax',
  'illustration-run',
  'illustration-safe-box',
  'illustration-science',
  'illustration-searching',
  'illustration-security',
  'illustration-settings',
  'illustration-sign-in',
  'illustration-sign-out',
  'illustration-sign-up',
  'illustration-social-distancing',
  'illustration-soulful',
  'illustration-sports',
  'illustration-tasks',
  'illustration-technology',
  'illustration-travel',
  'illustration-under-construction',
  'illustration-unsubscribed',
  'illustration-upgrading',
  'illustration-victory',
  'illustration-video-call',
  'illustration-virus',
  'illustration-wear-a-mask',
  'illustration-welcome',
  'illustration-work-from-home',
  'illustration-workflow',
  'illustration-writing',
]
// export type illustrationType = typeof illustrationTypeArray[number]

export interface IllustrationProps {
  illustration: illustrationType
  width: string | number
  height: string | number
  fill?: ColorValue
  stroke?: ColorValue
  strokeWidth?: number
}

const defaultProps: IllustrationProps = {
  illustration: 'illustration-animal',
  width: 40,
  height: 40,
  fill: 'black',
}

const Illustration: React.FC<IllustrationProps> = (props) => {
  const illustrationProps = {
    width: props.width,
    height: props.height,
    fill: props.fill,
    stroke: props.stroke,
    strokeWidth: props.strokeWidth,
  }
  const renderIllustration = () => {
    switch (props.illustration) {
      case 'illustration-animal':
        return <Illustrations.IllustrationAnimal {...illustrationProps} />
      case 'illustration-bad-gateway':
        return <Illustrations.IllustrationBadGateway {...illustrationProps} />
      case 'illustration-bored':
        return <Illustrations.IllustrationBored {...illustrationProps} />
      case 'illustration-business-plan':
        return <Illustrations.IllustrationBusinessFlan {...illustrationProps} />
      case 'illustration-business-travel':
        return <Illustrations.IllustrationBusinessTravel {...illustrationProps} />
      case 'illustration-car-drifting':
        return <Illustrations.IllustrationCarDrifting {...illustrationProps} />
      case 'illustration-come-back-later':
        return <Illustrations.IllustrationComeBackLater {...illustrationProps} />
      case 'illustration-connection-lost':
        return <Illustrations.IllustrationConnectionLost {...illustrationProps} />
      case 'illustration-cool-guy':
        return <Illustrations.IllustrationCoolGuy {...illustrationProps} />
      case 'illustration-couple':
        return <Illustrations.IllustrationCouple {...illustrationProps} />
      case 'illustration-delete-confirmation':
        return <Illustrations.IllustrationDeleteConfirmation {...illustrationProps} />
      case 'illustration-deleted':
        return <Illustrations.IllustrationDeleted {...illustrationProps} />
      case 'illustration-delivery':
        return <Illustrations.IllustrationDelivery {...illustrationProps} />
      case 'illustration-done':
        return <Illustrations.IllustrationDone {...illustrationProps} />
      case 'illustration-downloading':
        return <Illustrations.IllustrationDownloading {...illustrationProps} />
      case 'illustration-e-commerce':
        return <Illustrations.IllustrationECommerce {...illustrationProps} />
      case 'illustration-error':
        return <Illustrations.IllustrationError {...illustrationProps} />
      case 'illustration-explore':
        return <Illustrations.IllustrationExplore {...illustrationProps} />
      case 'illustration-failure':
        return <Illustrations.IllustrationFailure {...illustrationProps} />
      case 'illustration-family':
        return <Illustrations.IllustrationFamily {...illustrationProps} />
      case 'illustration-fashion':
        return <Illustrations.IllustrationFashion {...illustrationProps} />
      case 'illustration-finances':
        return <Illustrations.IllustrationFinances {...illustrationProps} />
      case 'illustration-food':
        return <Illustrations.IllustrationFood {...illustrationProps} />
      case 'illustration-freedom':
        return <Illustrations.IllustrationFreedom {...illustrationProps} />
      case 'illustration-friends':
        return <Illustrations.IllustrationFriends {...illustrationProps} />
      case 'illustration-globe':
        return <Illustrations.IllustrationGlobe {...illustrationProps} />
      case 'illustration-growth':
        return <Illustrations.IllustrationGrowth {...illustrationProps} />
      case 'illustration-hangout':
        return <Illustrations.IllustrationHangout {...illustrationProps} />
      case 'illustration-health-research':
        return <Illustrations.IllustrationHealthResearch {...illustrationProps} />
      case 'illustration-hello':
        return <Illustrations.IllustrationHello {...illustrationProps} />
      case 'illustration-landscape':
        return <Illustrations.IllustrationLandscape {...illustrationProps} />
      case 'illustration-list-is-empty':
        return <Illustrations.IllustrationListIsEmpty {...illustrationProps} />
      case 'illustration-loading':
        return <Illustrations.IllustrationLoading {...illustrationProps} />
      case 'illustration-location':
        return <Illustrations.IllustrationLocation {...illustrationProps} />
      case 'illustration-medicine':
        return <Illustrations.IllustrationMedicine {...illustrationProps} />
      case 'illustration-message-sent':
        return <Illustrations.IllustrationMessageSent {...illustrationProps} />
      case 'illustration-mind-blowing':
        return <Illustrations.IllustrationMindBlowing {...illustrationProps} />
      case 'illustration-mother-nature':
        return <Illustrations.IllustrationMotherNature {...illustrationProps} />
      case 'illustration-music':
        return <Illustrations.IllustrationMusic {...illustrationProps} />
      case 'illustration-navigate':
        return <Illustrations.IllustrationNavigate {...illustrationProps} />
      case 'illustration-news':
        return <Illustrations.IllustrationNews {...illustrationProps} />
      case 'illustration-no-comments':
        return <Illustrations.IllustrationNoComments {...illustrationProps} />
      case 'illustration-no-messages':
        return <Illustrations.IllustrationNoMessages {...illustrationProps} />
      case 'illustration-no-results':
        return <Illustrations.IllustrationNoResults {...illustrationProps} />
      case 'illustration-order-placed':
        return <Illustrations.IllustrationOrderPlaced {...illustrationProps} />
      case 'illustration-painter':
        return <Illustrations.IllustrationPainter {...illustrationProps} />
      case 'illustration-portrait':
        return <Illustrations.IllustrationPortrait {...illustrationProps} />
      case 'illustration-relationship':
        return <Illustrations.IllustrationRelationship {...illustrationProps} />
      case 'illustration-relax':
        return <Illustrations.IllustrationRelax {...illustrationProps} />
      case 'illustration-run':
        return <Illustrations.IllustrationRun {...illustrationProps} />
      case 'illustration-safe-box':
        return <Illustrations.IllustrationSafeBox {...illustrationProps} />
      case 'illustration-science':
        return <Illustrations.IllustrationScience {...illustrationProps} />
      case 'illustration-searching':
        return <Illustrations.IllustrationSearching {...illustrationProps} />
      case 'illustration-security':
        return <Illustrations.IllustrationSecurity {...illustrationProps} />
      case 'illustration-settings':
        return <Illustrations.IllustrationSettings {...illustrationProps} />
      case 'illustration-sign-in':
        return <Illustrations.IllustrationSignIn {...illustrationProps} />
      case 'illustration-sign-out':
        return <Illustrations.IllustrationSignOut {...illustrationProps} />
      case 'illustration-sign-up':
        return <Illustrations.IllustrationSignUp {...illustrationProps} />
      case 'illustration-social-distancing':
        return <Illustrations.IllustrationSocialDistancing {...illustrationProps} />
      case 'illustration-soulful':
        return <Illustrations.IllustrationSoulful {...illustrationProps} />
      case 'illustration-sports':
        return <Illustrations.IllustrationSports {...illustrationProps} />
      case 'illustration-tasks':
        return <Illustrations.IllustrationTasks {...illustrationProps} />
      case 'illustration-technology':
        return <Illustrations.IllustrationTechnology {...illustrationProps} />
      case 'illustration-travel':
        return <Illustrations.IllustrationTravel {...illustrationProps} />
      case 'illustration-under-construction':
        return <Illustrations.IllustrationUnderConstruction {...illustrationProps} />
      case 'illustration-unsubscribed':
        return <Illustrations.IllustrationUnsubscribed {...illustrationProps} />
      case 'illustration-upgrading':
        return <Illustrations.IllustrationUpgrading {...illustrationProps} />
      case 'illustration-victory':
        return <Illustrations.IllustrationVictory {...illustrationProps} />
      case 'illustration-video-call':
        return <Illustrations.IllustrationVideoCall {...illustrationProps} />
      case 'illustration-virus':
        return <Illustrations.IllustrationVirus {...illustrationProps} />
      case 'illustration-wear-a-mask':
        return <Illustrations.IllustrationWearAMask {...illustrationProps} />
      case 'illustration-welcome':
        return <Illustrations.IllustrationWelcome {...illustrationProps} />
      case 'illustration-work-from-home':
        return <Illustrations.IllustrationWorkFromHome {...illustrationProps} />
      case 'illustration-workflow':
        return <Illustrations.IllustrationWorkflow {...illustrationProps} />
      case 'illustration-writing':
        return <Illustrations.IllustrationWriting {...illustrationProps} />
    }
  }
  return <>{renderIllustration()}</>
}

Illustration.defaultProps = defaultProps

export default Illustration
