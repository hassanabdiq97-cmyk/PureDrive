export enum CarCategory {
  ALL = 'Alle',
  ELECTRIC = 'Elektro',
  SUV = 'SUV',
  BUSINESS = 'Business',
  SPORT = 'Sport',
}

export interface Car {
  id: string;
  name: string;
  category: CarCategory;
  pricePerDay: number;
  image: string;
  specs: {
    seats: number;
    transmission: 'Automatik' | 'Manuell';
    fuel: 'Elektro' | 'Benzin' | 'Hybrid' | 'Diesel';
    range?: number; // km
    power: number; // HP
  };
  features: string[];
  isAvailable: boolean;
}

export type PickupLocation = 'lengnau' | 'lszg';

export interface BookingDetails {
  startDate: string;
  endDate: string;
  pickupLocation: PickupLocation;
  totalPrice: number;
  paymentMethod: 'twint' | 'creditcard' | 'applepay' | null;
}

export interface ComparisonPoint {
  feature: string;
  us: string | boolean;
  others: string | boolean;
}