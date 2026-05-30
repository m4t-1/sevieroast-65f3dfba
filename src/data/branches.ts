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
      "https://www.google.com/maps/search/?api=1&query=Sevie+Roast+Coffee+Baesa+Quezon+City",
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
      "https://www.google.com/maps/search/?api=1&query=Sevie+Roast+Coffee+Lacson+UST+Piy+Margal+Sampaloc+Manila",
    rating: 4.1,
    reviewCount: 12,
  },
];