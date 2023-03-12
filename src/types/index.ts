export type Spot = {
  id: string;
  name: string;
  type: string;
  description: string;
  address: string;
  coord: {
    lat: string;
    long: string;
  };
  difficulty: number;
  accessibility: number;
  entrance: number;
  landing: number;
};

export type SpotForm = {
  id: string;
  name: string;
  type: string;
  description: string;
  address: string;
  latitude: string;
  longitude: string;
  difficulty: number;
  accessibility: number;
  entrance: number;
  landing: number;
};
