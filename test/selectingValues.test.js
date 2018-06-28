'use strict';

import React from 'react';
import ComboSelect from '../src/Components/ComboSelect';

import { mount } from 'enzyme';
import sinon from 'sinon';
import { expect } from 'chai';
import { data as regularData } from './fixtures';

describe('Selecting values', () => {
	beforeEach(() => {
		sinon.spy(ComboSelect.prototype, 'componentDidMount');
	});

	afterEach(() => {
		ComboSelect.prototype.componentDidMount.restore();
	});

	let data = [...regularData];

	it('will pick proper text compared to the value string', () => {
		const wrapper = mount(
			<ComboSelect data={data} value={data[1].win} map={{ text: 'text', value: 'win' }} sort="string" />
		);
		expect(wrapper.state().text[0]).to.equal(3);
	});

	it('will pick proper text compared to the value object', () => {
		const wrapper = mount(
			<ComboSelect data={data} value={data[0]} map={{ text: 'text', value: true }} sort="string" />
		);
		expect(wrapper.state().text[0]).to.equal(111);
	});

	it('will pick proper value string compared to the text', () => {
		const wrapper = mount(
			<ComboSelect data={data} text={data[1].text} map={{ text: 'text', value: 'win' }} sort="string" />
		);
		expect(wrapper.state().value[0]).to.equal('win-JA007D');
	});

	it('will pick proper value object compared to the text', () => {
		const wrapper = mount(
			<ComboSelect data={data} text={data[0].text} map={{ text: 'text', value: true }} sort="string" />
		);
		expect(JSON.stringify(wrapper.state().value[0])).to.equal(
			JSON.stringify({ text: 111, win: 'win-JA009D', value: 111 })
		);
	});

	it('will pick right data for multiselect', () => {
		const wrapper = mount(
			<ComboSelect
				data={data}
				text={[data[0].text, data[1].text, data[2].text]}
				map={{ text: 'text', value: true }}
				sort="alphanum"
			/>
		);
		expect(JSON.stringify(wrapper.state().value[0])).to.equal(JSON.stringify({ text: 3, win: 'win-JA007D', value: 3 }));
		expect(JSON.stringify(wrapper.state().value[1])).to.equal(
			JSON.stringify({ text: 11, win: 'win-JA0008D', value: 11 })
		);
		expect(JSON.stringify(wrapper.state().value[2])).to.equal(
			JSON.stringify({ text: 111, win: 'win-JA009D', value: 111 })
		);
	});

	it('will pick proper value after re-render', () => {
		const wrapper = mount(
			<ComboSelect data={data} value={data[1].win} map={{ text: 'text', value: 'win' }} sort="alphanum" />
		);
		expect(wrapper.state().text[0]).to.equal('3');
		wrapper.setProps({
			data: data,
			value: data[2].win,
			map: { text: 'text', value: 'win' },
			sort: 'alphanum',
		});
		expect(wrapper.state().text[0]).to.equal('11');
	});
});
