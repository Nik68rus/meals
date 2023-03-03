import { createContext, useState } from 'react';

interface IFavoritesContext {
  ids: string[];
  addFavorite: (id: string) => void;
  removeFavorite: (id: string) => void;
}

export const FavoritesContext = createContext<IFavoritesContext>({
  ids: [],
  addFavorite: (id: string) => {},
  removeFavorite: (id: string) => {},
});

interface Props {
  children: React.ReactNode;
}

const FavoritesContextProvider = ({ children }: Props) => {
  const [favoriteIds, setFavoriteIds] = useState<string[]>([]);

  const addFavorite = (id: string) => {
    setFavoriteIds((prev) => [id, ...prev]);
  };

  const removeFavorite = (id: string) => {
    setFavoriteIds(favoriteIds.filter((mealId) => mealId !== id));
  };

  return (
    <FavoritesContext.Provider
      value={{
        ids: favoriteIds,
        addFavorite,
        removeFavorite,
      }}
    >
      {children}
    </FavoritesContext.Provider>
  );
};

export default FavoritesContextProvider;
