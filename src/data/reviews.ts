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
    text: "Definitely worth a visit. The food is yummy and freshly prepared, and the drinks are refreshing and well-balanced. A great pair for any time of day.",
  },
];

export const aggregate = {
  rating: 4.1,
  count: 12,
};