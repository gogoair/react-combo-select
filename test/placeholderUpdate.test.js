'use strict';

import React from 'react';
import ComboSelect from '../src/Components/ComboSelect';

import { mount } from 'enzyme';
import sinon from 'sinon';
import {expect} from 'chai';

describe('Placeholder updates', () => {

    beforeEach(()=> {
        sinon.spy(ComboSelect.prototype, 'componentDidMount');
    });

    afterEach(()=> {
        ComboSelect.prototype.componentDidMount.restore();
    });

    let data = [
        {text: 111, win: 'win-JA009D', value: 111},
        {text: 3, win: 'win-JA007D', value: 3},
        {text: 11, win: 'win-JA0008D', value: 11},
        {text: 12, win: 'win-JA107D', value: 12},
        {text: 13, win: 'sin-JA101D', value: 13},
        {text: 14, win: 'win-JA102D', value: 14},
        {text: 15, win: 'win-JA103D', value: 15}
    ];

    it('component updates placeholder when prop defaultText changes', () => {
        const comboPlaceholder = "First Placeholder";
        const wrapper = mount(<ComboSelect data={data} text={comboPlaceholder} map={{text: 'text', value: true}} sort="string"/>);
        expect(wrapper.find('.combo-select-head').text()).to.equal(comboPlaceholder);
        
        const comboPlaceholder2 = "Second Placeholder";
        wrapper.setProps({defaultText: comboPlaceholder2, text: null});
        expect(wrapper.find('.combo-select-head').text()).to.equal(comboPlaceholder2);

        const comboPlaceholder3 = "Third Placeholder";
        wrapper.setProps({text: comboPlaceholder3, defaultText: null});
        expect(wrapper.find('.combo-select-head').text()).to.equal(comboPlaceholder3);
    });
});