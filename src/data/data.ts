import type { ActivityType, DurationOption, DifficultyOption, SeasonOption, PackageType, DestinationOption, Package } from './types';

// Destination options for dropdowns
export const destinationOptions: DestinationOption[] = [
  { id: 'kathmandu', name: 'Kathmandu' },
  { id: 'pokhara', name: 'Pokhara' },
  { id: 'chitwan', name: 'Chitwan' },
  { id: 'lukla', name: 'Lukla' },
  { id: 'everest', name: 'Everest Base Camp' },
  { id: 'annapurna', name: 'Annapurna Base Camp' },
  { id: 'langtang', name: 'Langtang Region' },
  { id: 'manali', name: 'Manali' },
  { id: 'leh', name: 'Leh' },
  { id: 'ktm-pkr', name: 'Kathmandu - Pokhara' },
  { id: 'ktm-lukla', name: 'Kathmandu - Lukla' },
  { id: 'ktm-chitwan', name: 'Kathmandu - Chitwan' }
];

// Activity types
export const activityTypes: ActivityType[] = [
  { id: 'trekking', name: 'Trekking' },
  { id: 'climbing', name: 'Climbing' },
  { id: 'safari', name: 'Safari' },
  { id: 'tour', name: 'City Tour' },
  { id: 'adventure', name: 'Adventure' },
  { id: 'cultural', name: 'Cultural Tour' },
  { id: 'wildlife', name: 'Wildlife' },
  { id: 'yoga', name: 'Yoga Retreat' },
  { id: 'meditation', name: 'Meditation' },
  { id: 'photography', name: 'Photography Tour' }
];

// Trip durations
export const durationOptions: DurationOption[] = [
  { id: '1day', name: '1 Day' },
  { id: '2days', name: '2 Days' },
  { id: '3days', name: '3 Days' },
  { id: 'week', name: '1 Week' },
  { id: '10days', name: '10 Days' },
  { id: '2weeks', name: '2 Weeks' },
  { id: '3weeks', name: '3 Weeks' },
  { id: 'month', name: '1 Month' },
  { id: 'long', name: 'Longer' }
];

// Difficulty levels
export const difficultyOptions: DifficultyOption[] = [
  { id: 'beginner', name: 'Beginner' },
  { id: 'intermediate', name: 'Intermediate' },
  { id: 'advanced', name: 'Advanced' },
  { id: 'expert', name: 'Expert' }
];

// Best seasons
export const seasonOptions: SeasonOption[] = [
  { id: 'spring', name: 'Spring (March - May)' },
  { id: 'summer', name: 'Summer (June - August)' },
  { id: 'autumn', name: 'Autumn (September - November)' },
  { id: 'winter', name: 'Winter (December - February)' },
  { id: 'monsoon', name: 'Monsoon (June - September)' }
];

// Package types
export const packageTypes: PackageType[] = [
  { id: 'adventure', name: 'Adventure' },
  { id: 'luxury', name: 'Luxury' },
  { id: 'budget', name: 'Budget' },
  { id: 'family', name: 'Family' },
  { id: 'honeymoon', name: 'Honeymoon' },
  { id: 'solo', name: 'Solo Traveler' },
  { id: 'group', name: 'Group Tour' },
  { id: 'trekking', name: 'Trekking' },
  { id: 'cultural', name: 'Cultural' },
  { id: 'wildlife', name: 'Wildlife Safari' }
];

// Predefined packages
export const packages: Package[] = [
  {
    id: 'ktm-pkr-trek',
    name: 'Kathmandu-Pokhara Adventure',
    type: 'trekking',
    duration: 'week',
    difficulty: 'Moderate',
    destinations: ['kathmandu', 'pokhara'],
    price: '$1200',
    description: 'A week-long adventure through the scenic Annapurna foothills',
    imageUrl: 'https://images.unsplash.com/photo-1544735716-392fe2489ffa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80'
  },
  {
    id: 'everest-base',
    name: 'Everest Base Camp Trek',
    type: 'trekking',
    duration: '2weeks',
    difficulty: 'Hard',
    destinations: ['kathmandu', 'lukla', 'everest'],
    price: '$2500',
    description: 'The ultimate journey to the world\'s highest peak',
    imageUrl: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80'
  },
  {
    id: 'annapurna-circuit',
    name: 'Annapurna Circuit Trek',
    type: 'trekking',
    duration: '2weeks',
    difficulty: 'Hard',
    destinations: ['kathmandu', 'pokhara', 'annapurna'],
    price: '$1800',
    description: 'Circuit trek through the Annapurna region',
    imageUrl: '/src/assets/tours/Annapurna.webp'
  },
  {
    id: 'pokhara-relax',
    name: 'Pokhara Relaxation',
    type: 'tour',
    duration: 'week',
    difficulty: 'Easy',
    destinations: ['pokhara'],
    price: '$800',
    description: 'Relaxing time by the beautiful Phewa Lake',
    imageUrl: 'https://images.unsplash.com/photo-1599112082201-9db31f42f79e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80'
  }
];

// Type import for Tour
import type { Tour, TourCategory } from '../types';

// Convert packages to Tour format for FeaturedJourneys
export const convertPackagesToTours = (packagesList: Package[]): Tour[] => {
  return packagesList.map((pkg, index) => {
    // Convert difficulty to category
    let category: TourCategory = 'Trekking';
    if (pkg.type.includes('safari') || pkg.type.includes('wildlife')) {
      category = 'Cultural';
    } else if (pkg.type.includes('cultural') || pkg.type.includes('tour')) {
      category = 'Cultural';
    } else if (pkg.type.includes('adventure') || pkg.type.includes('luxury')) {
      category = 'Bespoke';
    }
    
    // Extract price number from string (remove $ and convert to number)
    const priceNum = parseInt(pkg.price.replace(/\D/g, ''), 10) || 1000;
    
    return {
      id: index + 1,
      name: pkg.name,
      category,
      price: priceNum,
      imageUrl: pkg.imageUrl,
      shortDescription: pkg.description
    };
  });
};