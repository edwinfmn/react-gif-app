import { render, screen } from '@testing-library/react';
import { GifExpertApp } from '../src/GifExpertApp';

describe('Pruebas en el componente GifExpertApp', () => {

    test('Debe tener el input vacio', () => {

        render( <GifExpertApp /> );
        console.log(screen.getByText( 'Cargando...' ))
    });

});