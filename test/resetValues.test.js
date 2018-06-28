import React from 'react';
import ComboSelect from '../src/Components/ComboSelect';

import { mount } from 'enzyme';
import { expect } from 'chai';
import { data as regularData, groups } from './fixtures';

describe('Resetting selected values', () => {
	let data = [...regularData];

	it('Will reset selected values for single select', () => {
		const wrapper = mount(
			<ComboSelect data={data} value={data[1].win} map={{ text: 'text', value: 'win' }} sort="string" />
		);
		wrapper.instance().resetValues();
		expect(wrapper.state().text).to.equal('');
		expect(wrapper.state().value).to.equal('');
	});

	it('Will reset selected values for multiple select', () => {
		const wrapper = mount(
			<ComboSelect
				data={data}
				value={[data[1].win, data[0].win, data[5].win]}
				map={{ text: 'text', value: 'win' }}
				sort="string"
				type="multiselect"
			/>
		);
		wrapper.instance().resetValues();

		expect(wrapper.state().text).to.equal('');
		expect(wrapper.state().value).to.equal('');
	});

	it('Will reset selected values for multiselect option groups', () => {
		const wrapper = mount(
			<ComboSelect data={groups} value={['AAL', 'GNR', 'Startek']} groups="enabled" type="multiselect" sort="string" />
		);
		wrapper.instance().resetValues();

		expect(wrapper.state().text).to.equal('');
		expect(wrapper.state().value).to.equal('');
	});

	it('Will reset selected values for single select option groups', () => {
		const wrapper = mount(<ComboSelect data={groups} value={['Startek']} groups="enabled" sort="string" />);
		wrapper.instance().resetValues();

		expect(wrapper.state().text).to.equal('');
		expect(wrapper.state().value).to.equal('');
	});
});
