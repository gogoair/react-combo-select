import React from 'react';
import ReactDOM from 'react-dom';
import {
    renderIntoDocument,
    scryRenderedDOMComponentsWithTag,
    Simulate
} from 'react-addons-test-utils';

import {expect} from 'chai';

import ComboSelect from '../dist/ComboSelect.jsx';

describe('Combo select tests', ()=> {

    it('will get the text from component', ()=> {
        const component = renderIntoDocument(
            <ComboSelect />
        );
        var comboSelect = ReactDOM.findDOMNode(component.refs.comboSelect);
        expect(comboSelect.textContent).to.equal('C-c-c-combooo');
    })

});