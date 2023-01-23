import { FlanType } from '@types'
import dayjs from 'dayjs'

export const DUMMY_FLAN_DATASET = {
  id: ['flanId'],
  title: ['Go to the zoo', 'Paris Trip', 'Bar Crawl', 'Road Trip', 'Hiking'],
  description: [
    'The beaches of Thailand are beautiful and serene, perfect for a relaxing vacation.',
    'The bustling streets of New York City offer endless entertainment and cultural opportunities.',
    'The ancient ruins of Rome are a must-see for any history buff.',
  ],
  author: { id: 'author1', username: 'author1', firstName: 'author1', lastName: 'author1' },
  illustration: [
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
  ],
  peopleAttending: [
    { id: 'personId1', username: 'jsmith', firstName: 'John', lastName: 'Smith' },
    { id: 'personId2', username: 'ejohnson', firstName: 'Emma', lastName: 'Johnson' },
    { id: 'personId3', username: 'mwilliams', firstName: 'Michael', lastName: 'Williams' },
    { id: 'personId4', username: 'ejones', firstName: 'Emily', lastName: 'Jones' },
    { id: 'personId5', username: 'jbrown', firstName: 'Joshua', lastName: 'Brown' },
    { id: 'personId6', username: 'ddavis', firstName: 'Madison', lastName: 'Davis' },
  ],
  location: [
    { address: '221B Baker St, London, UK', coordinate: { latitude: 51.522476, longitude: -0.156846 } },
    { address: 'Eiffel Tower, Champ de Mars, 5 Avenue Anatole France, 75007 Paris, France', coordinate: { latitude: 48.85837, longitude: 2.294481 } },
    { address: 'The Great Wall of China, China', coordinate: { latitude: 40.431907, longitude: 116.570374 } },
    { address: 'Taj Mahal, Agra, Uttar Pradesh, India', coordinate: { latitude: 27.175, longitude: 78.0422 } },
    { address: 'Machu Picchu, Cusco Region, Peru', coordinate: { latitude: -13.1633, longitude: -72.5456 } },
    { address: 'The Colosseum, Piazza del Colosseo, 00184 Rome, Italy', coordinate: { latitude: 41.8902, longitude: 12.4923 } },
  ],
  activities: [
    [
      {
        id: '1',
        title: 'Hot Air Balloon Ride',
        description: 'Experience the breathtaking views of the countryside from above with a hot air balloon ride.',
        subActivities: [],
      },
      {
        id: '2',
        title: 'Snorkeling with Sharks',
        description: "Get up close and personal with some of the ocean's most majestic creatures on a snorkeling trip with sharks.",
        subActivities: [],
      },
      {
        id: '3',
        title: 'Canyoneering Adventure',
        description: 'Explore the hidden gems of the wilderness by navigating through canyons and streams on a canyoneering adventure.',
        subActivities: [],
      },
      {
        id: '4',
        title: 'Wine Tasting Tour',
        description: "Sip on some of the world's finest wines and learn about the art of winemaking on a wine tasting tour.",
        subActivities: [],
      },
      {
        id: '5',
        title: 'Helicopter Skiing',
        description: 'Take to the skies and the slopes for an exhilarating experience of helicopter skiing in the mountains.',
        subActivities: [],
      },
      {
        id: '6',
        title: 'Survivalist Camping',
        description: 'Put your survival skills to the test and immerse yourself in the wilderness on a survivalist camping trip.',
        subActivities: [],
      },
    ],
  ],
  polls: [
    {
      id: '1',
      title: 'What is your favorite ice cream flavor?',
      description: 'Help us decide on a new flavor to add to our menu.',
      authorId: 'author1',
      chatId: 'chat1',
      options: [
        { id: '1', title: 'Chocolate', voteAmount: 0 },
        { id: '2', title: 'Vanilla', voteAmount: 0 },
        { id: '3', title: 'Strawberry', voteAmount: 0 },
      ],
      date: dayjs().toString(),
    },
    {
      id: '2',
      title: 'What is your preferred mode of transportation?',
      description: 'Help us decide on a new company transportation policy.',
      authorId: 'author2',
      chatId: 'chat2',
      options: [
        { id: '1', title: 'Car', voteAmount: 0 },
        { id: '2', title: 'Public Transportation', voteAmount: 0 },
        { id: '3', title: 'Bicycle', voteAmount: 0 },
      ],
      date: dayjs().toString(),
    },
    {
      id: '3',
      title: 'Which book genre do you enjoy the most?',
      description: 'Help us decide on which genre to feature in our next company book club.',
      authorId: 'author3',
      chatId: 'chat3',
      options: [
        { id: '1', title: 'Fiction', voteAmount: 0 },
        { id: '2', title: 'Non-Fiction', voteAmount: 0 },
        { id: '3', title: 'Biography', voteAmount: 0 },
      ],
      date: dayjs().toString(),
    },
    {
      id: '4',
      title: 'Which upcoming movie are you most excited to watch?',
      description: 'Help us decide on a movie to watch as a team.',
      authorId: 'author4',
      chatId: 'chat4',
      options: [
        { id: '1', title: 'Avengers: Endgame', voteAmount: 0 },
        { id: '2', title: 'Star Wars: Rise of Skywalker', voteAmount: 0 },
        { id: '3', title: 'Joker', voteAmount: 0 },
      ],
      date: dayjs().toString(),
    },
  ],
  chatId: ['1', '2', '3', '4'],
  date: [dayjs().toString()],
}

export const createFlanList = (numFlans?: number) => {
  const DEFAULT_NUM_FLANS = 3
  const flansToCreate = numFlans ?? DEFAULT_NUM_FLANS
  let flanList = []
  for (let i = 0; i < flansToCreate; i++) {
    flan = {}
    for (let key in DUMMY_FLAN_DATASET) {
      //Typescript... why you do this to me?
      const randomIndex = Math.floor(Math.random() * DUMMY_FLAN_DATASET[key as keyof typeof DUMMY_FLAN_DATASET].length)
      const randomItem = DUMMY_FLAN_DATASET[key][randomIndex]
      flan[key] = randomItem
    }
    flan['id'] = 'flan' + i
    flan['illustration'] = 'illustration-bored'
    console.log(flan['illustration'])
    flanList.push(flan)
  }
  return flanList
}
