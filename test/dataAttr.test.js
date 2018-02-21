'use strict';

import { mount } from 'enzyme';
import sinon from 'sinon';
import {expect} from 'chai';

import React from 'react';
import ComboSelect from '../Components/ComboSelect.jsx';

const data = [
	{text: 111, win: 'win-111', value: 111},
	{text: 222, win: 'win-222', value: 222},
	{text: 333, win: 'win-333', value: 333},
];

describe('dataAttr prop of type string rendering to HTML', () => {

	it('component transform dataAttr of type string properly for wrapper', () => {
		const wrapper = mount(
			<ComboSelect
				id="ComboSelectId"
				className="ComboSelectClass"
				data={data}
				dataAttr={{
					wrapper: {
						automation: 'ComboSelect-Wrapper'
					}
				}}
			/>
		);
		const wrapperHTMLelement = wrapper.render();
		// testing wrapper
		expect(wrapperHTMLelement[0].attribs['data-automation']).to.equal('ComboSelect-Wrapper');
	});

	it('component transform dataAttr of type string properly for dropDownHeader', () => {
		const wrapper = mount(
			<ComboSelect
				id="ComboSelectId"
				className="ComboSelectClass"
				data={data}
				dataAttr={{
					dropDownHeader: {
						automation: 'ComboSelect-Header'
					}
				}}
			/>
		);
		const wrapperHTMLelement = wrapper.render();
		// testing head
		expect(wrapperHTMLelement.find('.combo-select-head')[0].attribs['data-automation']).to.equal('ComboSelect-Header');
	});

	it('component transform dataAttr of type string properly for listItem', () => {
		const wrapper = mount(
			<ComboSelect
				id="ComboSelectId"
				className="ComboSelectClass"
				data={data}
				dataAttr={{
					listItem: {
						automation: 'ComboSelect-Item'
					}
				}}
			/>
		);
		const wrapperHTMLelement = wrapper.render();
		// testing items
		expect(wrapperHTMLelement.find('.combo-select-item')[0].attribs['data-automation']).to.equal('ComboSelect-Item');
		expect(wrapperHTMLelement.find('.combo-select-item')[1].attribs['data-automation']).to.equal('ComboSelect-Item');
		expect(wrapperHTMLelement.find('.combo-select-item')[2].attribs['data-automation']).to.equal('ComboSelect-Item');
	});

});



describe('dataAttr prop of type function rendering to HTML', () => {

	it('component transform dataAttr of type string properly for wrapper', () => {
		const wrapper = mount(
			<ComboSelect
				id="ComboSelectId"
				className="ComboSelectClass"
				data={data}
				dataAttr={{
					wrapper: {
						automation: props => props.id
					},
				}}
			/>
		);
		const wrapperHTMLelement = wrapper.render();
		// testing wrapper
		expect(wrapperHTMLelement[0].attribs['data-automation']).to.equal('ComboSelectId');
	});

	it('component transform dataAttr of type string properly for dropDownHeader', () => {
		const wrapper = mount(
			<ComboSelect
				id="ComboSelectId"
				className="ComboSelectClass"
				data={data}
				dataAttr={{
					dropDownHeader: {
						automation: props => props.className
					},
				}}
			/>
		);
		const wrapperHTMLelement = wrapper.render();
		// testing head
		expect(wrapperHTMLelement.find('.combo-select-head')[0].attribs['data-automation']).to.equal('ComboSelectClass');
	});

	it('component transform dataAttr of type string properly for listItem', () => {
		const wrapper = mount(
			<ComboSelect
				id="ComboSelectId"
				className="ComboSelectClass"
				data={data}
				dataAttr={{
					listItem: {
						automation: item => item && 'ComboSelect-Item_' + item.text
					}
				}}
			/>
		);
		const wrapperHTMLelement = wrapper.render();
		// testing items
		expect(wrapperHTMLelement.find('.combo-select-item')[0].attribs['data-automation']).to.equal('ComboSelect-Item_111');
		expect(wrapperHTMLelement.find('.combo-select-item')[1].attribs['data-automation']).to.equal('ComboSelect-Item_222');
		expect(wrapperHTMLelement.find('.combo-select-item')[2].attribs['data-automation']).to.equal('ComboSelect-Item_333');
	});

});