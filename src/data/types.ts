export interface Destination {
  id: string;
  name: string;
  country: string;
  region: string;
}

export interface Package {
  id: string;
  name: string;
  type: string;
  duration: string;
  difficulty: 'Easy' | 'Moderate' | 'Hard';
  price: string;
  destinations: string[];
  description: string;
  imageUrl: string;
}

export interface DestinationsData {
  destinations: Destination[];
}

export interface PackagesData {
  packages: Package[];
}

// Additional interfaces for dropdown options
export interface ActivityType {
  id: string;
  name: string;
}

export interface DurationOption {
  id: string;
  name: string;
}

export interface DifficultyOption {
  id: string;
  name: string;
}

export interface SeasonOption {
  id: string;
  name: string;
}

export interface PackageType {
  id: string;
  name: string;
}

export interface DestinationOption {
  id: string;
  name: string;
}