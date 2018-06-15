'use strict';

import React from 'react';
import ComboSelect from '../src/Components/ComboSelect';

import { mount } from 'enzyme';
import sinon from 'sinon';
import { expect } from 'chai';

describe('Placeholder updates', () => {
	beforeEach(() => {
		sinon.spy(ComboSelect.prototype, 'componentDidMount');
	});

	afterEach(() => {
		ComboSelect.prototype.componentDidMount.restore();
	});

	let data = {
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
						text: 'ACA',
						win: 'ACA',
						value: 'ACA',
						number: 1,
					},
					{
						text: 'GNR',
						win: 'GNR',
						value: 'GNR',
						number: 1,
					},
					{
						text: 'ZZT',
						win: 'ZZT',
						value: 'ZZT',
						number: 1,
					},
					{
						text: 'JAL',
						win: 'JAL',
						value: 'JAL',
						number: 1,
					},
					{
						text: 'WOR',
						win: 'WOR',
						value: 'WOR',
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
					{
						text: 'Airtech',
						win: 'Airtech',
						value: 'Airtech',
						number: 1,
					},
					{
						text: 'SkyPartner',
						win: 'SkyPartner',
						value: 'SkyPartner',
						number: 1,
					},
				],
			},
		],
		selectedValue: { text: 'air-JA007D', win: 'win-111', value: 'JA007D' },
		selectedGroupVals: ['AAL', 'GNR', 'T-Mobile', 'Startek'],
	};

	it('should render group items', () => {
		const wrapper = mount(<ComboSelect data={data.groups} groups multiselect sort="string" />);

		expect(wrapper.find('.combo-select-head').text()).to.equal(comboPlaceholder);
	});

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
