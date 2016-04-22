import React, { Component } from 'react';
import ComboSelect from './Components/ComboSelect.jsx';

export default class FakeComponent extends Component {

    fakeFunction(value) {
        console.log(value);
    }

    render() {
        //var standardArray = ["JA007D", "JA008D", "JA009D", "JA010D", "JA219J", "JA302J", "JA306J", "JA308J", "JA309J", "JA311J", "JA313J", "JA314J", "JA316J", "JA318J", "JA319J", "JA322J", "JA324J", "JA325J", "JA326J"];
        //var standardArray = ["JA007D", "JA008D", "JA009D", "JA010D"];
        //var standardArray = [];
        var standardArray = [
            {text: "air-JA007D", win: "win-JA007D", value: "JA007D"},
            {text: "air-JA008D", win: "win-JA008D", value: "JA008D"},
            {text: "air-JA009D", win: "win-JA009D", value: "JA009D"},
            {text: "air-JA107D", win: "win-JA107D", value: "JA010D"}
        ];

        return (
            <div>
                <br/>
                <br/>
                <br/>
                <form action="">
                    <input type="text" required/>
                    <br/>
                    <br/>
                    <div style={{position: 'relative'}}>
                        {/*<ComboSelect text="-Select me-" type="select" data={standardArray}
                                      onChange={this.fakeFunction} icon="fa fa-chevron-circle-down" search="smart"
                                      map={{text: 'win', value: true}}/>*/}
                        {<ComboSelect text="-Select me-" type="multiselect" data={standardArray}
                         onChange={this.fakeFunction} icon="fa fa-chevron-circle-down" search="smart"
                         map={{text: 'win', value: true}}/>}
                    </div>
                    <br/>
                    <input type="text" required/>
                    <br/>
                    <br/>
                    <input type="text" required/>
                    <br/>
                    <br/>
                    <input type="text" required/>
                    <br/>
                    <br/>
                    <input type="submit"/>
                </form>
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
            </div>
        );
    }
}