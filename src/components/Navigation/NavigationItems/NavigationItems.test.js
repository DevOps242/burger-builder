// Using JEST Methods to test

import React from 'react';

//import enzyme so that we dont need to render complete react app
//confiure is to connect the adapter to react
//shallow is to render component but not deeply rendered
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';



import NavigationItems from './NavigationItems';
import NavigationItem from './NavigationItem/NavigationItem';


// Setting up the adapter for enzyme 
configure({adapter: new Adapter()})

// takes two arguements 
// 1. Show a description of what you are testing
// 2. Is the function you are using to test.
describe('<NavigationItems />', () => {

    let wrapper;
    // will run before each test
    beforeEach(() => {
        wrapper = shallow(<NavigationItems />);
    });

    // it allows you to write one indiviual test, takes two arguments
    // 1. Show a description of what you are testing
    it('should render two <NavigationItem /> elements if not authenticated', () => {    
        // Define what u want to check
        // Find lookings into the wrapper to see if it can find a certain item
        // toHaveLenght say how many time u expect to see the commponent
        expect(wrapper.find(NavigationItem)).toHaveLength(2);
    });


    it('should render three <NavigationItem /> elements if authenticated', () => {
       
        // wrapper = shallow(<NavigationItems isAuthenticated />);
        wrapper.setProps({isAuthenticated: true});
        expect(wrapper.find(NavigationItem)).toHaveLength(3);
    });

    it('should an exact logout button', () => {
        wrapper.setProps({isAuthenticated: true});
        expect(wrapper.contains(<NavigationItem link='/logout'>Logout</NavigationItem>)).toEqual(true);
    });
});