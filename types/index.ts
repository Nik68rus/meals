export enum Affordability {
  AFFORDABLE = 'Affordable',
  PRICEY = 'Pricey',
  LUXURIOUS = 'Luxurious',
}

export enum Complexity {
  SIMPLE = 'Simple',
  CHALLENGING = 'Challenging',
  HARD = 'Hard',
}

export type RootStackParamList = {
  MealsCategories: undefined;
  MealsOverview: { categoryId: string };
  MealDetails: { mealId: string };
};
