import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import { FlatList, ListRenderItemInfo } from 'react-native';
import CategoryGridTile from '../components/CategoryGridTile';
import { CATEGORIES } from '../data/dummy-data';
import Category from '../models/category';
import { RootStackParamList } from '../types';

type Props = NativeStackScreenProps<RootStackParamList, 'MealsCategories'>;

const CategoriesScreen = ({ navigation }: Props) => {
  const renderCategoryItem = ({ item }: ListRenderItemInfo<Category>) => {
    const pressHandler = () => {
      navigation.navigate('MealsOverview', { categoryId: item.id });
    };
    return (
      <CategoryGridTile
        title={item.title}
        color={item.color}
        onPress={pressHandler}
      />
    );
  };
  return (
    <FlatList
      data={CATEGORIES}
      keyExtractor={(item) => item.id}
      renderItem={renderCategoryItem}
      numColumns={2}
    />
  );
};

export default CategoriesScreen;
