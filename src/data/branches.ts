export type Branch = {
  id: "baesa" | "sampaloc";
  name: string;
  address: string;
  hours: string;
  phone: string;
  grabFoodUrl: string;
  /** approximate coords for the simulated map pin (0–100% of map) */
  pin: { x: number; y: number };
  /** label shown on map */
  area: string;
  /** Google Maps URL for the branch */
  mapsUrl: string;
  rating?: number;
  reviewCount?: number;
};

export const branches: Branch[] = [
  {
    id: "baesa",
    name: "Sevie Roast — Baesa",
    address: "123 Quirino Highway, Baesa, Quezon City",
    hours: "Mon–Sun · 7:00 AM – 10:00 PM",
    phone: "(02) 8123 4567",
    grabFoodUrl:
      "https://food.grab.com/ph/en/restaurants?search=sevie+roast+baesa",
    pin: { x: 38, y: 42 },
    area: "Quezon City",
    mapsUrl:
      "https://www.google.com/maps/place/Sevie+Roast+Coffee/@14.6778719,121.0120279,17z/data=!4m10!1m2!2m1!1ssevie+roast!3m6!1s0x3397b7fad80959e1:0x7c0256f9e8c15616!8m2!3d14.6778719!4d121.0167915",
  },
  {
    id: "sampaloc",
    name: "Sevie Roast — Lacson UST",
    address:
      "Piy Margal St, cor. Dos Castillas St, Sampaloc, Manila, 1008 Metro Manila",
    hours: "Daily · 10:00 AM – 10:00 PM",
    phone: "(02) 8234 5678",
    grabFoodUrl:
      "https://food.grab.com/ph/en/restaurants?search=sevie+roast+sampaloc",
    pin: { x: 62, y: 58 },
    area: "Manila",
    mapsUrl:
      "https://www.google.com/maps/place/Sevie+Roast+Coffee+-+Lacson+UST/@14.6125055,120.9863611,17z/data=!4m10!1m2!2m1!1ssevie+roast!3m6!1s0x3397b778a9f9f4a7:0x3dec71442aad9e05!8m2!3d14.6125055!4d120.9911247",
    rating: 4.1,
    reviewCount: 12,
  },
];