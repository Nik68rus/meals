import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { useLayoutEffect } from 'react';
import { StyleSheet, Text, View, Image, ScrollView } from 'react-native';
import IconButton from '../components/IconButton';
import List from '../components/MealDetail/List';
import Subtitle from '../components/MealDetail/Subtitle';
import MealDetails from '../components/MealDetails';
import { MEALS } from '../data/dummy-data';
import { useAppDispatch, useAppSelector } from '../hooks/store';
import { addFavorite, removeFavorite } from '../store/redux/favorites';
import { RootStackParamList } from '../types';

type Props = NativeStackScreenProps<RootStackParamList, 'MealDetails'>;

const MealDetailsScreen = ({ route, navigation }: Props) => {
  const { mealId } = route.params;
  const meal = MEALS.find((m) => m.id === mealId);
  const dispatch = useAppDispatch();
  const favoriteIds = useAppSelector((store) => store.favorites.ids);

  const isFavorite = favoriteIds.some((id) => id === mealId);

  const favBtnClickHandler = () => {
    isFavorite
      ? dispatch(removeFavorite(mealId))
      : dispatch(addFavorite(mealId));
  };

  useLayoutEffect(() => {
    navigation.setOptions({
      title: 'Details',
      headerRight: () => {
        return (
          <IconButton
            icon="star"
            color={isFavorite ? 'yellow' : 'white'}
            onPress={favBtnClickHandler}
          />
        );
      },
    });
  }, [favBtnClickHandler, navigation]);

  return (
    <ScrollView style={styles.rootContainer}>
      <Image style={styles.image} source={{ uri: meal.imageUrl }} />
      <Text style={styles.title}>{meal.title}</Text>
      <MealDetails
        affordability={meal.affordability}
        complexity={meal.complexity}
        duration={meal.duration}
        textStyle={styles.detailsItem}
      />

      <View style={styles.listContainer}>
        <Subtitle>Ingredients</Subtitle>
        <List data={meal.ingredients} />
        <Subtitle>Steps</Subtitle>
        <List data={meal.steps} />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  rootContainer: { marginBottom: 42 },
  image: {
    width: '100%',
    height: 350,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 24,
    margin: 8,
    textAlign: 'center',
    color: 'white',
  },
  detailsItem: {
    color: 'white',
  },
  listContainer: {
    width: '80%',
    alignSelf: 'center',
  },
});

export default MealDetailsScreen;
