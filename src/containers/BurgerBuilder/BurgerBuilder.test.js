// Using JEST Methods to test

import React from 'react';

//import enzyme so that we dont need to render complete react app
//confiure is to connect the adapter to react
//shallow is to render component but not deeply rendered
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import { BurgerBuilder } from './BurgerBuilder';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';

// Setting up the adapter for enzyme 
configure({adapter: new Adapter()})


describe('<BurgerBuilder />', () => {
    let wrapper;

    beforeEach(() => {
        wrapper = shallow(<BurgerBuilder onInitIngredients={() => {} }/>);
    });

    it('should render <BuildControls /> when receivign ingredients', () => {
        wrapper.setProps({ings: {salad: 0}});
        expect(wrapper.find(BuildControls)).toHaveLength(1);
    });
})