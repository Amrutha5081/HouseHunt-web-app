// import house images
import House1 from './assets/img/houses/house1.png';
import House2 from './assets/img/houses/house2.png';
import House3 from './assets/img/houses/house3.png';
import House4 from './assets/img/houses/house4.png';
import House5 from './assets/img/houses/house5.png';
import House6 from './assets/img/houses/house6.png';
import House7 from './assets/img/houses/house7.png';
import House8 from './assets/img/houses/house8.png';
import House9 from './assets/img/houses/house9.png';
import House10 from './assets/img/houses/house10.png';
import House11 from './assets/img/houses/house11.png';
import House12 from './assets/img/houses/house12.png';
// import house large images
import House1Lg from './assets/img/houses/house1lg.png';
import House2Lg from './assets/img/houses/house2lg.png';
import House3Lg from './assets/img/houses/house3lg.png';
import House4Lg from './assets/img/houses/house4lg.png';
import House5Lg from './assets/img/houses/house5lg.png';
import House6Lg from './assets/img/houses/house6lg.png';
import House7Lg from './assets/img/houses/house7lg.png';
import House8Lg from './assets/img/houses/house8lg.png';
import House9Lg from './assets/img/houses/house9lg.png';
import House10Lg from './assets/img/houses/house10lg.png';
import House11Lg from './assets/img/houses/house11lg.png';
import House12Lg from './assets/img/houses/house12lg.png';

// import apartments images
import Apartment1 from './assets/img/apartments/a1.png';
import Apartment2 from './assets/img/apartments/a2.png';
import Apartment3 from './assets/img/apartments/a3.png';
import Apartment4 from './assets/img/apartments/a4.png';
import Apartment5 from './assets/img/apartments/a5.png';
import Apartment6 from './assets/img/apartments/a6.png';
// import apartments large images
import Apartment1Lg from './assets/img/apartments/a1lg.png';
import Apartment2Lg from './assets/img/apartments/a2lg.png';
import Apartment3Lg from './assets/img/apartments/a3lg.png';
import Apartment4Lg from './assets/img/apartments/a4lg.png';
import Apartment5Lg from './assets/img/apartments/a5lg.png';
import Apartment6Lg from './assets/img/apartments/a6lg.png';

// import agents images
import Agent1 from './assets/img/agents/agent1.jpg';
import Agent2 from './assets/img/agents/agent2.jpeg';
import Agent3 from './assets/img/agents/agent3.png';
import Agent4 from './assets/img/agents/agent4.png';
import Agent5 from './assets/img/agents/agent5.png';
import Agent6 from './assets/img/agents/agent6.png';
import Agent7 from './assets/img/agents/agent7.png';
import Agent8 from './assets/img/agents/agent8.jpg';
import Agent9 from './assets/img/agents/agent9.png';
import Agent10 from './assets/img/agents/agent10.png';
import Agent11 from './assets/img/agents/agent11.jpg';
import Agent12 from './assets/img/agents/agent12.jpg';

export const housesData = [
  {
    id: 1,
    type: 'House',
    name: 'House 1',
    description:
    'Welcome to our latest residential project, Green Acres, located in the heart of the city. This premium gated community is spread over 10 acres of lush green land and boasts of world-class amenities that cater to your every need.',
    image: House1,
    imageLg: House1Lg,
    country: 'India',
    address: '7240C Argyle St. Lanavala, Maharashtra',
    bedrooms: '6',
    bathrooms: '3',
    surface: '4200 sq ft',
    year: '2016',
    price: '115000',
    agent: {
      image: Agent1,
      name: 'Shastry Verma',
      phone: '0123 456 78910',
    },
  },
  {
    id: 2,
    type: 'House',
    name: 'House 2',
    description:
    'Welcome to our latest residential project, Green Acres, located in the heart of the city. This premium gated community is spread over 10 acres of lush green land and boasts of world-class amenities that cater to your every need.',
    image: House2,
    imageLg: House2Lg,
    country: 'Singapore',
    address: '798 Talbot St. Bridgewater, Singapore 08807',
    bedrooms: '6',
    bathrooms: '3',
    surface: '4250 sq ft',
    year: '2017',
    price: '140000',
    agent: {
      image: Agent2,
      name: 'Daryl Hawker',
      phone: '0123 456 78910',
    },
  },
  {
    id: 3,
    type: 'House',
    name: 'House 3',
    description:
    'Welcome to our latest residential project, Green Acres, located in the heart of the city. This premium gated community is spread over 10 acres of lush green land and boasts of world-class amenities that cater to your every need.',
    image: House3,
    imageLg: House3Lg,
    country: 'India',
    address: '2 Glen Creek St. Church street, Bangalore',
    bedrooms: '6',
    bathrooms: '3',
    surface: '4200 sq ft',
    year: '2016',
    price: '170000',
    agent: {
      image: Agent3,
      name: 'Amrutha Smith',
      phone: '0123 456 78910',
    },
  },
  {
    id: 4,
    type: 'House',
    name: 'House 4',
    description:
    'Welcome to our latest residential project, Green Acres, located in the heart of the city. This premium gated community is spread over 10 acres of lush green land and boasts of world-class amenities that cater to your every need.',
    image: House4,
    imageLg: House4Lg,
    country: 'Singapore',
    address: '84 Woodland St. Cocoa, Singapore 32927',
    bedrooms: '6',
    bathrooms: '3',
    surface: '4200 sq ft',
    year: '2020',
    price: '209999',
    agent: {
      image: Agent4,
      name: 'Kaitlyn Gonzalez',
      phone: '0123 456 78910',
    },
  },
  {
    id: 5,
    type: 'House',
    name: 'House 5',
    description:
    'Welcome to our latest residential project, Green Acres, located in the heart of the city. This premium gated community is spread over 10 acres of lush green land and boasts of world-class amenities that cater to your every need.',
    image: House5,
    imageLg: House5Lg,
    country: 'India',
    address: '28 bridge street, 12th cross, UP',
    bedrooms: '5',
    bathrooms: '3',
    surface: '4200 sq ft',
    year: '2015',
    price: '210000',
    agent: {
      image: Agent5,
      name: 'Devansh Rao',
      phone: '0123 456 78910',
    },
  },
  {
    id: 6,
    type: 'House',
    name: 'House 6',
    description:
    'Welcome to our latest residential project, Green Acres, located in the heart of the city. This premium gated community is spread over 10 acres of lush green land and boasts of world-class amenities that cater to your every need.',
    image: House6,
    imageLg: House6Lg,
    country: 'Singapore',
    address: '32 Pawnee Street main rd, Singapore 59701',
    bedrooms: '6',
    bathrooms: '3',
    surface: '6200 sq ft',
    year: '2019',
    price: '220000',
    agent: {
      image: Agent6,
      name: 'Karen Sorensen jjhg',
      phone: '0123 456 78910',
    },
  },
  {
    id: 7,
    type: 'Apartment',
    name: 'Apartment 1',
    description:
    'Welcome to our latest residential project, Green Acres, located in the heart of the city. This premium gated community is spread over 10 acres of lush green land and boasts of world-class amenities that cater to your every need.',
    image: Apartment1,
    imageLg: Apartment1Lg,
    country: 'India',
    address: '32 Pawnee Street Butte, Kolkata',
    bedrooms: '2',
    bathrooms: '1',
    surface: '1200 sq ft',
    year: '2016',
    price: '20000',
    agent: {
      image: Agent7,
      name: 'Jawhar Shamil Naser',
      phone: '0123 456 78910',
    },
  },
  {
    id: 8,
    type: 'Apartment',
    name: 'Apartment 2',
    description:
    'Welcome to our latest residential project, Green Acres, located in the heart of the city. This premium gated community is spread over 10 acres of lush green land and boasts of world-class amenities that cater to your every need.',
    image: Apartment2,
    imageLg: Apartment2Lg,
    country: 'India',
    address: '28 Westport 42 street, Bangalore',
    bedrooms: '3',
    bathrooms: '1',
    surface: '1100 sq ft',
    year: '2011',
    price: '30000',
    agent: {
      image: Agent8,
      name: 'Juana Dsouza',
      phone: '0123 456 78910',
    },
  },
  {
    id: 9,
    type: 'Apartment',
    name: 'Apartment 3',
    description:
    'Welcome to our latest residential project, Green Acres, located in the heart of the city. This premium gated community is spread over 10 acres of lush green land and boasts of world-class amenities that cater to your every need.',
    image: Apartment3,
    imageLg: Apartment3Lg,
    country: 'India',
    address: 'Sriventeshwar street 54 main road, Chennai',
    bedrooms: '2',
    bathrooms: '1',
    surface: '1100 sq ft',
    year: '2011',
    price: '40000',
    agent: {
      image: Agent9,
      name: 'Subramanya Swaminathan',
      phone: '0123 456 78910',
    },
  },
  {
    id: 10,
    type: 'House',
    name: 'House 7',
    description:
    'Welcome to our latest residential project, Green Acres, located in the heart of the city. This premium gated community is spread over 10 acres of lush green land and boasts of world-class amenities that cater to your every need.',
    image: House7,
    imageLg: House7Lg,
    country: 'Singapore',
    address: '7240C Lions street, Singapore 982372',
    bedrooms: '5',
    bathrooms: '3',
    surface: '3250 sq ft',
    year: '2015',
    price: '117500',
    agent: {
      image: Agent10,
      name: 'Vera Leveshadehe',
      phone: '0123 456 78910',
    },
  },
  {
    id: 11,
    type: 'House',
    name: 'House 8',
    description:
    'Welcome to our latest residential project, Green Acres, located in the heart of the city. This premium gated community is spread over 10 acres of lush green land and boasts of world-class amenities that cater to your every need.',
    image: House8,
    imageLg: House8Lg,
    country: 'Singapore',
    address: '798 Talbot St. Bridgewater, Singapore 08807',
    bedrooms: '7',
    bathrooms: '2',
    surface: '2200 sq ft',
    year: '2019',
    price: '145000',
    agent: {
      image: Agent11,
      name: 'Sofia Gomesh',
      phone: '0123 456 78910',
    },
  },
  {
    id: 12,
    type: 'House',
    name: 'House 9',
    description:
    'Welcome to our latest residential project, Green Acres, located in the heart of the city. This premium gated community is spread over 10 acres of lush green land and boasts of world-class amenities that cater to your every need.',
    image: House9,
    imageLg: House9Lg,
    country: 'India',
    address: '2 Glen Chowk street, Delhi',
    bedrooms: '4',
    bathrooms: '4',
    surface: '4600 sq ft',
    year: '2015',
    price: '139000',
    agent: {
      image: Agent12,
      name: 'Sharmesh Joshi',
      phone: '0123 456 78910',
    },
  },
  {
    id: 13,
    type: 'House',
    name: 'House 10',
    description:
    'Welcome to our latest residential project, Green Acres, located in the heart of the city. This premium gated community is spread over 10 acres of lush green land and boasts of world-class amenities that cater to your every need.',
    image: House10,
    imageLg: House10Lg,
    country: 'Singapore',
    address: '84 Woodland St. Cocoa, Singapore 32927',
    bedrooms: '5',
    bathrooms: '2',
    surface: '5200 sq ft',
    year: '2014',
    price: '180000',
    agent: {
      image: Agent1,
      name: 'Liam Tullert',
      phone: '0123 456 78910',
    },
  },
  {
    id: 14,
    type: 'House',
    name: 'House 11',
    description:
    'Welcome to our latest residential project, Green Acres, located in the heart of the city. This premium gated community is spread over 10 acres of lush green land and boasts of world-class amenities that cater to your every need.',
    image: House11,
    imageLg: House11Lg,
    country: 'India',
    address: 'Brigade Road, 32 main, Bangalore',
    bedrooms: '6',
    bathrooms: '2',
    surface: '3300 sq ft',
    year: '2011',
    price: '213000',
    agent: {
      image: Agent2,
      name: 'DevDutt Sharma',
      phone: '0123 456 78910',
    },
  },
  {
    id: 15,
    type: 'House',
    name: 'House 12',
    description:
    'Welcome to our latest residential project, Green Acres, located in the heart of the city. This premium gated community is spread over 10 acres of lush green land and boasts of world-class amenities that cater to your every need.',
    image: House12,
    imageLg: House12Lg,
    country: 'India',
    address: '32 West Bandra, Maharashtra',
    bedrooms: '4',
    bathrooms: '3',
    surface: '5200 sq ft',
    year: '2013',
    price: '221000',
    agent: {
      image: Agent3,
      name: 'Piyush Patel',
      phone: '0123 456 78910',
    },
  },
  {
    id: 16,
    type: 'Apartment',
    name: 'Apartment 16',
    description:
    'Welcome to our latest residential project, Green Acres, located in the heart of the city. This premium gated community is spread over 10 acres of lush green land and boasts of world-class amenities that cater to your every need.',
    image: Apartment4,
    imageLg: Apartment4Lg,
    country: 'Singapore',
    address: '32 Pawnee Street Butte, Singapore 59701',
    bedrooms: '2',
    bathrooms: '1',
    surface: '1350 sq ft',
    year: '2011',
    price: '21000',
    agent: {
      image: Agent4,
      name: 'Sofia Gonzalez',
      phone: '0123 456 78910',
    },
  },
  {
    id: 17,
    type: 'Apartment',
    name: 'Apartment 17',
    description:
    'Welcome to our latest residential project, Green Acres, located in the heart of the city. This premium gated community is spread over 10 acres of lush green land and boasts of world-class amenities that cater to your every need.',
    image: Apartment5,
    imageLg: Apartment5Lg,
    country: 'Singapore',
    address: '60 Area Street Singapor 060494',
    bedrooms: '3',
    bathrooms: '1',
    surface: '1000 sq ft',
    year: '2013',
    price: '32000',
    agent: {
      image: Agent5,
      name: 'Charlotte Robinson',
      phone: '0123 456 78910',
    },
  },
  {
    id: 18,
    type: 'Apartment',
    name: 'Apartment 18',
    description:
    'Welcome to our latest residential project, Green Acres, located in the heart of the city. This premium gated community is spread over 10 acres of lush green land and boasts of world-class amenities that cater to your every need.',
    image: Apartment6,
    imageLg: Apartment6Lg,
    country: 'Singapore',
    address: '101 Marlow Street 059020',
    bedrooms: '2',
    bathrooms: '1',
    surface: '1250 sq ft',
    year: '2015',
    price: '38000',
    agent: {
      image: Agent6,
      name: 'Sarah Sorensen',
      phone: '0123 456 78910',
    },
  },
];
