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
  },
  {
    id: "sampaloc",
    name: "Sevie Roast — Sampaloc",
    address: "456 España Boulevard, Sampaloc, Manila",
    hours: "Mon–Sun · 7:00 AM – 11:00 PM",
    phone: "(02) 8234 5678",
    grabFoodUrl:
      "https://food.grab.com/ph/en/restaurants?search=sevie+roast+sampaloc",
    pin: { x: 62, y: 58 },
    area: "Manila",
  },
];