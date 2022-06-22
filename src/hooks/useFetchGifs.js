import { useEffect, useState } from 'react';
import { getGifs } from '../helpers/getGifs';

export const useFetchGifs = ( category ) => {

  const [images, setImages] = useState([]);
  const [isLoading, setIsLoading] = useState( true );

  const obtenerImagenes = async() => {
    const newGifs = await getGifs( category );
    setImages(newGifs);
    setIsLoading(false);
  }

  useEffect( () => {
      obtenerImagenes();
  }, [])

  return {
    images: images,
    isLoading: isLoading
  }
}
