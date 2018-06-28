'use strict';

import React from 'react';
import ComboSelect from '../src/Components/ComboSelect';

import { mount } from 'enzyme';
import sinon from 'sinon';
import { expect } from 'chai';

import { data as regularData } from './fixtures';

describe('Placeholder updates', () => {
	beforeEach(() => {
		sinon.spy(ComboSelect.prototype, 'componentDidMount');
	});

	afterEach(() => {
		ComboSelect.prototype.componentDidMount.restore();
	});

	let data = [...regularData];

	it('component updates placeholder when prop defaultText changes', () => {
		const comboPlaceholder = 'First Placeholder';
		const wrapper = mount(
			<ComboSelect data={data} text={comboPlaceholder} map={{ text: 'text', value: true }} sort="string" />
		);
		expect(wrapper.find('.combo-select-head').text()).to.equal(comboPlaceholder);

		const comboPlaceholder2 = 'Second Placeholder';
		wrapper.setProps({ defaultText: comboPlaceholder2, text: null });
		expect(wrapper.find('.combo-select-head').text()).to.equal(comboPlaceholder2);

		const comboPlaceholder3 = 'Third Placeholder';
		wrapper.setProps({ text: comboPlaceholder3, defaultText: null });
		expect(wrapper.find('.combo-select-head').text()).to.equal(comboPlaceholder3);

		const comboPlaceholder4 = 'Fourth Placeholder';
		wrapper.setProps({ text: comboPlaceholder4, defaultText: 'Select' });
		expect(wrapper.find('.combo-select-head').text()).to.equal(comboPlaceholder4);
	});
});
