export type TourCategory = 'Trekking' | 'Cultural' | 'Bespoke';

export interface Tour {
    id: number;
    name: string;
    category: TourCategory;
    price: number;
    imageUrl: string;
    shortDescription: string;
}

export interface TeamMember {
    id: number;
    name: string;
    role: string;
    imageUrl: string;
    bio: string;
}

export interface BlogPost {
    id: number;
    title: string;
    category: string;
    excerpt: string;
    imageUrl: string;
}

export interface Region {
    id: string;
    name: string;
    description: string;
    coords: { x: string; y: string }; // Use percentages for SVG positioning
}

export type Page = 'home' | 'tours' | 'about' | 'ticketing' | 'contact' | 'privacy' | 'terms' | 'faq';