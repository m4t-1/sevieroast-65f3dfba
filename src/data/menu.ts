export type MenuItem = { name: string; description: string; price: number };
export type MenuCategory = { id: string; label: string; items: MenuItem[] };

export const menu: MenuCategory[] = [
  {
    id: "espresso",
    label: "Espresso",
    items: [
      { name: "Espresso", description: "Double shot of our house blend.", price: 95 },
      { name: "Americano", description: "Espresso lengthened with hot water.", price: 110 },
      { name: "Cortado", description: "Equal parts espresso and steamed milk.", price: 135 },
      { name: "Cappuccino", description: "Velvety microfoam over a double shot.", price: 150 },
      { name: "Flat White", description: "Silky milk, strong espresso base.", price: 155 },
    ],
  },
  {
    id: "brewed",
    label: "Brewed",
    items: [
      { name: "Pour Over", description: "Single-origin, hand-brewed V60.", price: 180 },
      { name: "Cold Brew", description: "Slow-steeped 18 hours, smooth finish.", price: 165 },
      { name: "House Drip", description: "Daily rotating roast.", price: 120 },
    ],
  },
  {
    id: "specialty",
    label: "Specialty",
    items: [
      { name: "Sevie Latte", description: "Brown butter syrup, oat milk, double shot.", price: 180 },
      { name: "Spanish Latte", description: "Condensed milk and espresso, layered.", price: 170 },
      { name: "Salted Caramel Mocha", description: "Dark chocolate, salted caramel, espresso.", price: 185 },
      { name: "Tablea Mocha", description: "Local cacao tablea with espresso.", price: 175 },
    ],
  },
  {
    id: "non-coffee",
    label: "Non-Coffee",
    items: [
      { name: "Matcha Latte", description: "Ceremonial-grade matcha, your milk.", price: 170 },
      { name: "Strawberry Milk", description: "Fresh strawberries, cold milk.", price: 160 },
      { name: "Hot Chocolate", description: "Dark cacao, steamed milk.", price: 150 },
      { name: "Calamansi Cooler", description: "Local calamansi, sparkling.", price: 130 },
    ],
  },
  {
    id: "pastries",
    label: "Pastries",
    items: [
      { name: "Almond Croissant", description: "Buttery, baked in-house daily.", price: 140 },
      { name: "Banana Bread", description: "Warm, with brown butter glaze.", price: 110 },
      { name: "Ube Cheese Pandesal", description: "Soft pandesal, ube and queso.", price: 95 },
      { name: "Chocolate Chip Cookie", description: "Brown butter, sea salt.", price: 90 },
    ],
  },
];