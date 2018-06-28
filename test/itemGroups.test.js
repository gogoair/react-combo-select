'use strict';

import React from 'react';
import ComboSelect from '../src/Components/ComboSelect';

import { mount, shallow } from 'enzyme';
import sinon from 'sinon';
import { expect } from 'chai';
import { data as regularData, groups as groupsData } from './fixtures';

describe('Option groups', () => {
	let data;
	beforeEach(() => {
		sinon.spy(ComboSelect.prototype, 'componentDidMount');
		data = {
			groups: [...groupsData],
			data: [...regularData],
			selectedGroupVals: ['AAL', 'GNR', 'T-Mobile', 'Startek'],
		};
	});

	afterEach(() => {
		ComboSelect.prototype.componentDidMount.restore();
	});

	it('should render group items', () => {
		const wrapper = mount(<ComboSelect data={data.groups} groups="enabled" type="multiselect" />);
		expect(wrapper.find('.combo-select-group')).to.have.length(data.groups.length);
	});

	it('should not render group items if groups prop is not provided', () => {
		const wrapper = mount(<ComboSelect data={data.data} type="multiselect" />);
		expect(wrapper.find('.combo-select-group')).to.have.length(0);
	});

	it('should correctly render group item', () => {
		const wrapper = mount(<ComboSelect data={data.groups} groups="enabled" type="multiselect" />);
		expect(
			wrapper
				.find('.combo-select-group')
				.first()
				.find('.combo-select-group__item')
		).to.have.length(data.groups[0].options.length);
	});

	it('should display items as selected if they are selected in incoming data', () => {
		const wrapper = mount(
			<ComboSelect data={data.groups} groups="enabled" type="multiselect" value={data.selectedGroupVals} />
		);
		const mapAllData = wrapper.instance().mapAllData(data.groups);
		const sortData = wrapper.instance().sortData(mapAllData);
		const findSelectedGroupItems = wrapper.instance().findSelectedGroupItems(sortData);

		expect(findSelectedGroupItems).to.deep.equal({
			text: ['AAL', 'GNR', 'Startek', 'T-Mobile'],
			value: ['AAL', 'GNR', 'Startek', 'T-Mobile'],
		});
	});

	it('should transform input values to be usable by groups', () => {
		data.groups[0].options[0] = { text: '1air-JA007D', win: 'win-111', value: 'JA007D', number: 0 };
		const wrapper = mount(<ComboSelect data={data.groups} groups="enabled" type="multiselect" />);

		expect(wrapper.state().data[0].data[0]).to.deep.equal({
			text: '1air-JA007D',
			value: 'JA007D',
			selected: false,
			parent: 'Airlines',
		});
	});
});
