type Room = {
  id: string;
  bedConfiguration: "Both" | "Double" | "Twin";
  disabledAccess: boolean;
  facilities: {
    code: string;
    name: string;
  }[];
  images: {
    alt?: string;
    url: string;
  }[];
  longDescription: string;
  name: string;
  occupancy: {
    maxAdults: number;
    maxChildren: number;
    maxOverall?: number;
  };
  shortDescription: string;
};

type RatePlan = {
  id: string;
  cancellationPolicy?: {
    amount?: number;
    applicable: "Full Stay";
    days?: number;
    hour?: string;
    name: string;
    penalty: "Non cancelable" | "Standard Cancellation";
    text: string;
  };
  longDescription?: string;
  prePayment: "Deposit" | "First night" | "Reserve";
  prePaymentIsPercentage?: boolean;
  prePaymentValue?: number;
  shortDescription: string;
};

export type ApiRoomRate = {
  ratePlans: RatePlan[];
  rooms: Room[];
};

export type ApiHotel = {
  id: string;
  name: string;
  description: string;
  address1: string;
  address2?: string;
  postcode: string;
  town: string;
  countryCode: string;
  country: string;
  facilities: {
    code: string;
  }[];
  telephone: string;
  email: string;
  images: {
    url: string;
  };
  checkInHours: string;
  checkInMinutes: string;
  checkOutHours: string;
  checkOutMinutes: string;
  position: {
    latitude?: number;
    longitude?: number;
    timezone: string;
  };
  starRating: string;
};
