import React from 'react';
import ReactDOM from 'react-dom';
import ComboSelect from './Components/ComboSelect.jsx'

var standardArray = ["JA007D", "JA008D", "JA009D", "JA010D", "JA219J", "JA302J", "JA306J", "JA308J", "JA309J", "JA311J", "JA313J", "JA314J", "JA316J", "JA318J", "JA319J", "JA322J", "JA324J", "JA325J", "JA326J"];

ReactDOM.render(
    <div>
        <br/>
        <br/>
        <div style={{position: 'relative'}}>
            <ComboSelect value="-Select me-" type="multiselect" data={standardArray}/>
            {<ComboSelect value="-Select me-" type="multiselect" data={standardArray}/>}
        </div>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
    </div>,
    document.getElementById('react')
);