import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import { useLayoutEffect } from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  ListRenderItemInfo,
} from 'react-native';
import MealItem from '../components/MealItem';
import { CATEGORIES, MEALS } from '../data/dummy-data';
import Meal from '../models/meal';
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

  const renderMealItem = ({ item }: ListRenderItemInfo<Meal>) => {
    return <MealItem item={item} />;
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={catMeals}
        keyExtractor={(item) => item.id}
        renderItem={renderMealItem}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
});
export default MealsOverviewScreen;
