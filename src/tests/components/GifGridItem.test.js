import React from 'react';
const { shallow } = require("enzyme");
import { GifGridItem } from '../../components/GifGridItem';

describe ('Pruebas en <GifGridItem />', () => {
    
    test ('debe mostrar el componente correctamente', () => {

        const wrapper = shallow (<GifGridItem/>    )
        expect ( wrapper).toMatchSnapshot();
    })



});