//'use strict';
//
//import React from 'react';
//import ComboSelect from '../Components/ComboSelect.jsx';
//
//import { mount } from 'enzyme';
//import sinon from 'sinon';
//import {expect} from 'chai';
//
//describe('Disabled', () => {
//
//    beforeEach(()=>{
//        sinon.spy(ComboSelect.prototype, 'componentDidMount');
//    });
//
//    afterEach(()=>{
//        ComboSelect.prototype.componentDidMount.restore();
//    });
//
//    let data = [
//        {text: 111, value: 111}
//    ];
//
//    it('should not be able to open if component is disabled', () => {
//        let wrapper = mount(<ComboSelect data={data} disabled />);
//
//        let comboSelectHead = wrapper.find('.combo-select-head');
//        //expect(wrapper.find('.combo-select-head')).
//        console.log(wrapper.find('.combo-select-body'));
//        console.log('----------------------');
//        comboSelectHead.trigger('click');
//        console.log(wrapper.find('.combo-select-body'));
//
//        expect(ComboSelect.prototype.componentDidMount.calledOnce).to.equal(true);
//    });
//});