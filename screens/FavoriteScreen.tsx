import { useContext } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import MealsList from '../components/MealsList/MealsList';
import { MEALS } from '../data/dummy-data';
import { FavoritesContext } from '../store/context/favorites-context';

const getMealById = (id: string) => MEALS.find((meal) => meal.id === id);

const FavoriteScreen = () => {
  const favCtx = useContext(FavoritesContext);

  const meals = favCtx.ids.map(getMealById);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Favorite meals</Text>
      {favCtx.ids.length ? (
        <MealsList items={meals} />
      ) : (
        <Text style={styles.info}>Nothing here yet</Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 10,
    color: 'white',
  },
  info: {
    color: 'white',
    padding: 10,
    textAlign: 'center',
    fontSize: 16,
  },
});

export default FavoriteScreen;
