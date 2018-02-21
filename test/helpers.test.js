'use strict';

import {transformDataAttributes} from '../helpers';

import {expect} from 'chai';

describe('Helpers functions', () => {
    const wrapper = {
        automation: '123',
        autoFn: data => '--' + data
    }
    
    it('validates transformDataAttribute function', () => {
        const result = transformDataAttributes(wrapper, 'AAA');
        const expectedResult = {
            'data-automation': '123',
            'data-autoFn': '--AAA'
        }
        expect(result).to.deep.equal(expectedResult);
    });
});