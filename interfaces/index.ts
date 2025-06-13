//milestone: 0
export interface CardProps {
  title: string;
  image: string;
  description: string;
}

export interface ButtonProps {
  label: string;
  onClick: () => void;
}

//milestone: 1 + 2
export interface Address {
  state: string;
  city: string;
  country: string;
}

export interface Review {
  name: string;
  rating: number;
  comment: string;
  avatar: string;
}

export interface PropertyProps {
  id: string;
  name: string;
  address: Address;
  rating: number;
  category: string[];
  price: number;
  offers: {
    bed: string;
    shower: string;
    occupants: string;
  };
  image: string;
  discount?: string;
  description: string;
  images: string[];
  reviews: Review[];
}
