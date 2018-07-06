'use strict';

import React from 'react';
import ComboSelect from '../src/Components/ComboSelect';

import { mount } from 'enzyme';
import sinon from 'sinon';
import { expect } from 'chai';

import { data as regularData } from './fixtures';

describe('Placeholder updates', () => {
	let wrapper;
	let data = [...regularData];
	beforeEach(() => {
		wrapper = mount(<ComboSelect data={data} />);
		wrapper.setProps({ text: undefined, defaultText: undefined });
	});

	it('should use text prop when both text and defaultText props are present', () => {
		const comboPlaceholder4 = 'Fourth Placeholder';
		wrapper.setProps({ text: comboPlaceholder4, defaultText: 'Select' });
		wrapper.update();

		expect(wrapper.find('.combo-select-head').text()).to.equal(comboPlaceholder4);
	});

	it('should use text prop when no defaultText prop is present', () => {
		const comboPlaceholder3 = 'Third Placeholder';
		wrapper.setProps({ text: comboPlaceholder3, defaultText: undefined, sort: 'smart' });
		wrapper.update();

		expect(wrapper.find('.combo-select-head').text()).to.equal(comboPlaceholder3);
	});

	it('should use defaultText if no text prop is present', () => {
		const comboPlaceholder2 = 'Second Placeholder';
		wrapper.setProps({ defaultText: comboPlaceholder2, text: undefined, type: 'multiselect' });
		wrapper.update();

		expect(wrapper.find('.combo-select-head').text()).to.equal(comboPlaceholder2);
	});
});
