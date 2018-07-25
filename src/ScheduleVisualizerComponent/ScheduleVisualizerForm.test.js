import { configure, shallow, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import {Form, Dropdown} from 'semantic-ui-react';

import React from 'react';

import ScheduleVisualizerForm from './ScheduleVisualizerForm';

configure({ adapter: new Adapter() });

describe('<ScheduleVisualizerForm />', () => {
	let props, wrapper

	beforeEach(() => {
		props = {	
			getSchedule: () => {
			},
		};
		wrapper = mount(<ScheduleVisualizerForm {...props} />);
	});

	it('should have a `<Form>` element', () => {
		expect(wrapper.find('Form').length).toBe(1);
	});

	it('should have a `<Dropdown>` element', () => {
		expect(wrapper.find('Dropdown').length).toBe(1);
	});

	it('should have a `<DatePicker>` element', () => {
		expect(wrapper.find('DatePicker').length).toBe(1);
	});

	it('`<Form>` element should have a onSubmit attribute', () => {
		const ScheduleForm = wrapper.find(Form);
		expect(ScheduleForm.props().onSubmit).toBeDefined();
	});

	it('onSubmit attribute should be of type `function`', () => {
		const ScheduleForm = wrapper.find(Form);
		expect(typeof ScheduleForm.props().onSubmit === 'function').toBe(true);
	});


	it('expects startDate state to be null', () => {
		expect(wrapper.state().startDate).toEqual(null);
	});

	it('expects channel state to be empty string', () => {
		expect(wrapper.state().channel).toEqual('');
	});


});