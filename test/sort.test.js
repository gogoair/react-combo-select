'use strict';

import React from 'react';
import ComboSelect from '../Components/ComboSelect.jsx';

import { mount } from 'enzyme';
import sinon from 'sinon';
import {expect} from 'chai';

describe('Sorting of component', () => {

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

    it('component sorted numbers as strings properly', () => {
        const wrapper = mount(<ComboSelect data={data} map={{text: 'text', value: true}} sort='string'/>);
        expect(wrapper.state().data[0].text).to.equal(11);
        expect(wrapper.state().data[1].text).to.equal(111);
        expect(wrapper.state().data[2].text).to.equal(12);
        expect(wrapper.state().data[3].text).to.equal(13);
        expect(wrapper.state().data[4].text).to.equal(14);
        expect(wrapper.state().data[5].text).to.equal(15);
        expect(wrapper.state().data[6].text).to.equal(3);
    });

    it('component sorted numbers properly', () => {
        const wrapper = mount(<ComboSelect data={data} map={{text: 'text', value: true}} sort='number'/>);
        expect(wrapper.state().data[0].text).to.equal(3);
        expect(wrapper.state().data[1].text).to.equal(11);
        expect(wrapper.state().data[2].text).to.equal(12);
        expect(wrapper.state().data[3].text).to.equal(13);
        expect(wrapper.state().data[4].text).to.equal(14);
        expect(wrapper.state().data[5].text).to.equal(15);
        expect(wrapper.state().data[6].text).to.equal(111);
    });

    it('component sorted strings properly', () => {
        const wrapper = mount(<ComboSelect data={data} map={{text: 'win', value: true}} sort='string'/>);
        expect(wrapper.state().data[0].text).to.equal('sin-JA101D');
        expect(wrapper.state().data[1].text).to.equal('win-JA0008D');
        expect(wrapper.state().data[2].text).to.equal('win-JA007D');
        expect(wrapper.state().data[3].text).to.equal('win-JA009D');
        expect(wrapper.state().data[4].text).to.equal('win-JA102D');
        expect(wrapper.state().data[5].text).to.equal('win-JA103D');
        expect(wrapper.state().data[6].text).to.equal('win-JA107D');
    });

    it('component sorted strings alphanumerically properly', () => {
        const wrapper = mount(<ComboSelect data={data} map={{text: 'win', value: true}} sort='alphanum'/>);
        expect(wrapper.state().data[0].text).to.equal('sin-JA101D');
        expect(wrapper.state().data[1].text).to.equal('win-JA007D');
        expect(wrapper.state().data[2].text).to.equal('win-JA0008D');
        expect(wrapper.state().data[3].text).to.equal('win-JA009D');
        expect(wrapper.state().data[4].text).to.equal('win-JA102D');
        expect(wrapper.state().data[5].text).to.equal('win-JA103D');
        expect(wrapper.state().data[6].text).to.equal('win-JA107D');
    });

    let complexAlphanumData = [
        {text: '20X Radonius'},
        {text: 'Alpha 2'},
        {text: 'Xiph Xlater 300'},
        {text: 'Xiph Xlater 40'},
        {text: 'Callisto Morphamax 5000'},
        {text: '40X Radonius'},
        {text: 'Allegia 50 Clasteron'},
        {text: 'Xiph Xlater 50'},
        {text: '10X Radonius'},
        {text: '200X Radonius'},
        {text: '30X Radonius'},
        {text: 'Xiph Xlater 500'},
        {text: 'Xiph Xlater 10000'},
        {text: 'Allegia 50B Clasteron'},
        {text: 'Alpha 2A-900'},
        {text: 'Callisto Morphamax'},
        {text: 'Callisto Morphamax 6000 SE'},
        {text: 'Alpha 2A'},
        {text: 'Xiph Xlater 5'},
        {text: 'Callisto Morphamax 500'},
        {text: 'Alpha 2A-8000'},
        {text: '1000X Radonius Maximus'},
        {text: 'Callisto Morphamax 6000 SE2'},
        {text: 'Callisto Morphamax 700'},
        {text: 'Callisto Morphamax 7000'},
        {text: '20X Radonius Prime'},
        {text: 'Allegia 51 Clasteron'},
        {text: 'Allegia 500 Clasteron'},
        {text: 'Alpha 200'},
        {text: 'Xiph Xlater 2000'},
        {text: 'Callisto Morphamax 600'},
        {text: 'Allegia 6R Clasteron'},
        {text: 'Alpha 100'},
        {text: 'Xiph Xlater 5000'},
        {text: 'Xiph Xlater 58'}
    ];

    it('component sorted complex strings alphanumerically properly', () => {
        const wrapper = mount(<ComboSelect data={complexAlphanumData} map={{text: 'text', value: true}} sort='alphanum'/>);
        expect(wrapper.state().data[0].text).to.equal('10X Radonius');
        expect(wrapper.state().data[1].text).to.equal('20X Radonius');
        expect(wrapper.state().data[2].text).to.equal('20X Radonius Prime');
        expect(wrapper.state().data[3].text).to.equal('30X Radonius');
        expect(wrapper.state().data[4].text).to.equal('40X Radonius');
        expect(wrapper.state().data[5].text).to.equal('200X Radonius');
        expect(wrapper.state().data[6].text).to.equal('1000X Radonius Maximus');
        expect(wrapper.state().data[7].text).to.equal('Allegia 6R Clasteron');
        expect(wrapper.state().data[8].text).to.equal('Allegia 50 Clasteron');
        expect(wrapper.state().data[9].text).to.equal('Allegia 50B Clasteron');
        expect(wrapper.state().data[10].text).to.equal('Allegia 51 Clasteron');
        expect(wrapper.state().data[11].text).to.equal('Allegia 500 Clasteron');
        expect(wrapper.state().data[12].text).to.equal('Alpha 2');
        expect(wrapper.state().data[13].text).to.equal('Alpha 2A');
        expect(wrapper.state().data[14].text).to.equal('Alpha 2A-900');
        expect(wrapper.state().data[15].text).to.equal('Alpha 2A-8000');
        expect(wrapper.state().data[16].text).to.equal('Alpha 100');
        expect(wrapper.state().data[17].text).to.equal('Alpha 200');
        expect(wrapper.state().data[18].text).to.equal('Callisto Morphamax');
        expect(wrapper.state().data[19].text).to.equal('Callisto Morphamax 500');
        expect(wrapper.state().data[20].text).to.equal('Callisto Morphamax 600');
        expect(wrapper.state().data[21].text).to.equal('Callisto Morphamax 700');
        expect(wrapper.state().data[22].text).to.equal('Callisto Morphamax 5000');
        expect(wrapper.state().data[23].text).to.equal('Callisto Morphamax 6000 SE');
        expect(wrapper.state().data[24].text).to.equal('Callisto Morphamax 6000 SE2');
        expect(wrapper.state().data[25].text).to.equal('Callisto Morphamax 7000');
        expect(wrapper.state().data[26].text).to.equal('Xiph Xlater 5');
        expect(wrapper.state().data[27].text).to.equal('Xiph Xlater 40');
        expect(wrapper.state().data[28].text).to.equal('Xiph Xlater 50');
        expect(wrapper.state().data[29].text).to.equal('Xiph Xlater 58');
        expect(wrapper.state().data[30].text).to.equal('Xiph Xlater 300');
        expect(wrapper.state().data[31].text).to.equal('Xiph Xlater 500');
        expect(wrapper.state().data[32].text).to.equal('Xiph Xlater 2000');
        expect(wrapper.state().data[33].text).to.equal('Xiph Xlater 5000');
        expect(wrapper.state().data[34].text).to.equal('Xiph Xlater 10000');
    });
});