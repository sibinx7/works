import React, {Component} from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import sinon from 'sinon';
import Home from '../Home';
import $ from 'jquery';

Enzyme.configure({ adapter: new Adapter() });





const skills = [
	'PHP', 'WordPress', 'Ruby on Rails', 'HTML5',' Angular 1', 'Angular 4', 'Angular 5',
	'React JS', 'Ember JS', 'CSS', 'ES6', 'Spike JS', 'Middleman', 'Laravel', 'Divi Visual Builder',
	'TypeScript', 'MEAN Stack', 'Hapi JS', 'Express JS', 'Node JS', 'Bootstrap', 'Foundation',
	'Material Design', 'Foundation Email Framework'
];

/**
 * Test Skills 
 */



describe('Home Component', () => {
	it('should show skills section if skill are given', ()=>{
		const HomeComponent = shallow(<Home/>);
		HomeComponent.setState({skills: skills});
		const skillsLength = skills.length;		
		expect(HomeComponent.find('.wave__box').length).toEqual(skillsLength);
	})
});