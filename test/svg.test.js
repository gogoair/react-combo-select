'use strict';

import { mount } from 'enzyme';
import sinon from 'sinon';
import { expect } from 'chai';

import React from 'react';
import ComboSelect from '../src/Components/ComboSelect';

const data = [
	{ text: 111, win: 'win-111', value: 111 },
	{ text: 222, win: 'win-222', value: 222 },
	{ text: 333, win: 'win-333', value: 333 },
];

describe('comonent uses svg icons', () => {
	it('has SVG icons count equal to (items + 1)', () => {
		const wrapper = mount(<ComboSelect data={data} />);
		const wrapperHTMLelement = wrapper.render();
		expect(wrapperHTMLelement.find('svg').length).to.equal(4);
	});

	it('non-multiselect uses correct dropdown icon', () => {
		const wrapper = mount(<ComboSelect data={data} />);
		// for unknown reasons components rendered using enzyme are doubled. HTML DOM in browser has only one
		expect(wrapper.find('.SvgIconDropDownIcon').length).to.equal(2);
	});

	it('non-multiselect uses correct list item icon', () => {
		const wrapper = mount(<ComboSelect data={data} />);
		// for unknown reasons components rendered using enzyme are doubled. HTML DOM in browser has only one
		expect(wrapper.find('.SvgIconCircleIcon').length).to.equal(6);
	});

	it('multiselect uses correct list item icon', () => {
		const wrapper = mount(<ComboSelect type="multiselect" data={data} />);
		// for unknown reasons components rendered using enzyme are doubled. HTML DOM in browser has only one
		expect(wrapper.find('.SvgIconSquareIcon').length).to.equal(6);
	});
});
