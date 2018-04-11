'use strict';

import React from 'react';
import ComboSelect from '../src/Components/ComboSelect';

import { mount } from 'enzyme';
import sinon from 'sinon';
import {expect} from 'chai';

describe('Initialization of component', () => {

    beforeEach(()=>{
        sinon.spy(ComboSelect.prototype, 'componentDidMount');
    });

    afterEach(()=>{
        ComboSelect.prototype.componentDidMount.restore();
    });

    let data = [
        {text: 111, value: 111}
    ];

    it('calls componentDidMount', () => {
        mount(<ComboSelect data={data} />);
        expect(ComboSelect.prototype.componentDidMount.calledOnce).to.equal(true);
    });
});