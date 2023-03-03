import React from 'react';
import { FlatList, ListRenderItemInfo, StyleSheet, View } from 'react-native';
import Meal from '../../models/meal';
import MealItem from './MealItem';

interface Props {
  items: Meal[];
}

const MealsList = ({ items }: Props) => {
  const renderMealItem = ({ item }: ListRenderItemInfo<Meal>) => {
    return <MealItem item={item} />;
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={items}
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

export default MealsList;
