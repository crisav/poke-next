import { useState, useEffect } from 'react';
import { Layout } from "../../components/layout"
import { NoFavotites } from "../../components/UI"
import { localFavorites } from '../../utils';
import { FavoritePokemons } from '../../components/pokemon';

const FavoritesPage = () => {

  const [favoritePokemons, setFavoritePokemons] = useState<number[]>([])

  useEffect(() => {
    setFavoritePokemons(localFavorites.pokemons())
  }, [])

  return (
    <Layout title='Pokemons - Favoritos'>

      {
        favoritePokemons.length === 0
          ? (<NoFavotites />)
          : (<FavoritePokemons pokemons={favoritePokemons} />)
      }

    </Layout>
  )
}

export default FavoritesPage