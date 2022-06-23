import { render, screen, fireEvent } from '@testing-library/react';
import { GifGrid } from '../../src/components';
import { useFetchGifs } from '../../src/hooks/useFetchGifs';

jest.mock('../../src/hooks/useFetchGifs');

describe('Pruebas de GifGrid', () => {

  const category = 'One Punch';

  test('Debe mostrar el loading inicialmente', () => {

    useFetchGifs.mockReturnValue({
      images: [], 
      isLoading: true,
    });

    render( <GifGrid category={ category }/>)
    // screen.debug();
    expect( screen.getByText( 'Cargando...' ) ).toBeTruthy();

  });

  test('Debe mostrar los ítems cuando se cargan las imágenes useFetchGifs', () => {

    const gifs = [
      {
        id: 'abc',
        titulo: 'Goku',
        url: 'http://goku.jpg'
      },
      {
        id: 'def',
        titulo: 'Vegeta',
        url: 'http://vegeta.jpg'
      }
    ]

    useFetchGifs.mockReturnValue({
      images: gifs, 
      isLoading: false,
    });

    render( <GifGrid category={ category }/>)
    expect ( screen.getAllByRole('img').length).toBe(2);
        

  });

});
