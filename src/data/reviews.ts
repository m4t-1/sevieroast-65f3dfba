export type Review = {
  name: string;
  badge?: string;
  date: string;
  rating: number;
  text: string;
};

export const reviews: Review[] = [
  {
    name: "Stella Jones",
    badge: "Local Guide",
    date: "9 months ago",
    rating: 5,
    text: "Lowkey obsessed with this spot. One of the few coffee shops that actually delivers on both vibes and flavor — plus the ambiance is super chill. 100/10 coffee!",
  },
  {
    name: "Elvira Reyes",
    date: "9 months ago",
    rating: 5,
    text: "Finally found a chill spot where I can actually get work done. Fourth time back and the quality is still top-tier — super consistent and budget-friendly.",
  },
  {
    name: "Jul Martin Cruz",
    date: "2 weeks ago",
    rating: 5,
    text: "Sevie Roast Coffee – Lacson UST is definitely worth a visit! The food is very yummy, freshly prepared, and full of flavor that makes every bite satisfying. Their drinks are equally delightful — refreshing, well-balanced, and perfect to pair with anything on the menu.",
  },
  {
    name: "Serena",
    date: "8 months ago",
    rating: 5,
    text: "Great service! Nice food and the place is very cozy. Will come back again 😊",
  },
  {
    name: "lari",
    badge: "Local Guide",
    date: "7 months ago",
    rating: 5,
    text: "Tried 2 coffees, so far both are good. Lovely little spot to settle into.",
  },
  {
    name: "Jhed Allen Revilla",
    date: "2 weeks ago",
    rating: 5,
    text: "Great service.",
  },
  {
    name: "Bens",
    date: "2 months ago",
    rating: 5,
    text: "Service 5/5, atmosphere 4/5. Moderate noise — easy place to hang out and sip slowly.",
  },
];

export const aggregate = {
  rating: 4.1,
  count: 12,
};