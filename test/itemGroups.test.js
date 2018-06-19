'use strict';

import React from 'react';
import ComboSelect from '../src/Components/ComboSelect';

import { mount, shallow } from 'enzyme';
import sinon from 'sinon';
import { expect } from 'chai';

describe('Option groups', () => {
	let data;
	beforeEach(() => {
		sinon.spy(ComboSelect.prototype, 'componentDidMount');
		data = {
			groups: [
				{
					groupName: 'Airlines',
					options: [
						{
							text: 'AAL',
							win: 'AAL',
							value: 'AAL',
							number: 1,
						},
						{
							text: 'GNR',
							win: 'GNR',
							value: 'GNR',
							number: 1,
						},
					],
				},
				{
					groupName: 'OEM',
					options: [
						{
							text: 'OEM1',
							win: 'OEM1',
							value: 'OEM1',
							number: 1,
						},
						{
							text: 'OEM Provider',
							win: 'OEM Provider',
							value: 'OEM Provider',
							number: 1,
						},
					],
				},
				{
					groupName: 'IFC Provider',
					options: [
						{
							text: 'IFC Provider 1',
							win: 'IFC Provider 1',
							value: 'IFC Provider 1',
							number: 1,
						},
						{
							text: 'IFC Provider 2',
							win: 'IFC Provider 2',
							value: 'IFC Provider 2',
							number: 1,
						},
						{
							text: 'IFC Provider 76',
							win: 'IFC Provider 76',
							value: 'IFC Provider 76',
							number: 1,
						},
					],
				},
				{
					groupName: 'Other',
					options: [
						{
							text: 'T-Mobile',
							win: 'T-Mobile',
							value: 'T-Mobile',
							number: 1,
						},
						{
							text: 'Startek',
							win: 'Startek',
							value: 'Startek',
							number: 1,
						},
					],
				},
			],
			selectedGroupVals: ['AAL', 'GNR', 'T-Mobile', 'Startek'],
			data: [
				{ text: '1air-JA007D', win: 'win-111', value: 'JA007D', number: 0 },
				{ text: '1air-JA008D', win: 'win-222', value: 'JA008D', number: 0 },
				{ text: '1air-JA009D', win: 'win-333', value: 'JA009D', number: 1 },
				{ text: '111air-JA107D', win: 'win-444', value: 'JA010D', number: 1 },
			],
		};
	});

	afterEach(() => {
		ComboSelect.prototype.componentDidMount.restore();
	});

	it('should render group items', () => {
		const wrapper = mount(<ComboSelect data={data.groups} groups multiselect />);
		expect(wrapper.find('.combo-select-group')).to.have.length(data.groups.length);
	});

	it('should not render group items if groups prop is not provided', () => {
		const wrapper = mount(<ComboSelect data={data.data} multiselect />);
		expect(wrapper.find('.combo-select-group')).to.have.length(0);
	});

	it('should correctly render group item', () => {
		const wrapper = mount(<ComboSelect data={data.groups} groups multiselect />);
		expect(
			wrapper
				.find('.combo-select-group')
				.first()
				.find('.combo-select-group__item')
		).to.have.length(data.groups[0].options.length);
	});

	it('should transform input values to be usable by groups', () => {
		data.groups[0].options[0] = { text: '1air-JA007D', win: 'win-111', value: 'JA007D', number: 0 };
		const wrapper = mount(<ComboSelect data={data.groups} groups multiselect />);

		expect(wrapper.state().data[0].data[0]).to.deep.equal({
			text: '1air-JA007D',
			value: 'JA007D',
			selected: false,
			parent: 'Airlines',
		});
	});

	it('should display items as selected if they are selected in incoming data', () => {
		const wrapper = mount(<ComboSelect data={data.groups} groups multiselect value={data.selectedGroupVals} />);
		const mapAllData = wrapper.instance().mapAllData(data.groups);
		const sortData = wrapper.instance().sortData(mapAllData);
		const findSelectedGroupItems = wrapper.instance().findSelectedGroupItems(sortData);

		expect(findSelectedGroupItems).to.deep.equal({
			text: ['AAL', 'GNR', 'Startek', 'T-Mobile'],
			value: ['AAL', 'GNR', 'Startek', 'T-Mobile'],
		});
	});
});
