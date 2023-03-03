import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import { useLayoutEffect } from 'react';
import MealsList from '../components/MealsList/MealsList';
import { CATEGORIES, MEALS } from '../data/dummy-data';
import { RootStackParamList } from '../types';

type Props = NativeStackScreenProps<RootStackParamList, 'MealsOverview'>;

const MealsOverviewScreen = ({ route, navigation }: Props) => {
  const { categoryId } = route.params;

  const catMeals = MEALS.filter((meal) =>
    meal.categoryIds.some((id) => id === categoryId)
  );

  useLayoutEffect(() => {
    const catTitle = CATEGORIES.find((cat) => cat.id === categoryId).title;
    navigation.setOptions({ title: catTitle });
  }, [categoryId, navigation]);

  return <MealsList items={catMeals} />;
};

export default MealsOverviewScreen;
