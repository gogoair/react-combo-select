import React from 'react';
import ReactDOM from 'react-dom';
import ComboSelect from './Components/ComboSelect.jsx'

var standardArray = ["JA007D", "JA008D", "JA009D", "JA010D", "JA219J", "JA302J", "JA306J", "JA308J", "JA309J", "JA311J", "JA313J", "JA314J", "JA316J", "JA318J", "JA319J", "JA322J", "JA324J", "JA325J", "JA326J", "JA328J", "JA329J", "JA330J", "JA331J", "JA332J", "JA333J", "JA334J", "JA336J", "JA337J", "JA338J", "JA339J", "JA343J", "JA344J", "JA601J", "JA602J", "JA603J", "JA612J", "JA622J", "JA623J", "JA655J", "JA656J", "JA657J", "JA658J", "JA659J", "JA751J", "JA752J", "JA771J", "JA772J", "JA773J", "JA8944", "JA8945", "JA8975", "JA8976", "JA8977", "JA8978", "JA8979", "JA8980", "JA8984", "JA8985", "JA8986", "JA8987", "JA8988"];

ReactDOM.render(
    <div>
        <ComboSelect value="-Select me-" type="select" data={standardArray}/>
        {/*<ComboSelect value="-Select me-" type="autocomplete"/>*/}
    </div>,
    document.getElementById('react')
);