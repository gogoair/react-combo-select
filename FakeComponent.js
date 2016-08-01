import React, {Component} from 'react';
import ComboSelect from './Components/ComboSelect.jsx';

export default class FakeComponent extends Component {

    constructor(props) {
        super(props);

        this.state = {
            text: '-Select me-',
            data: [
                {
                    text: 111,
                    win: {
                        here: 'win'
                    },
                    value: 111
                },
                {
                    text: 3,
                    win: {
                        here: 'win-win'
                    },
                    value: 3
                }
            ]
        }
    }

    componentDidMount() {
        //setTimeout(function () {
        //    this.setState({data: [
        //        {text: "air-JA007D", win: "win-111", value: "JA007D"},
        //        {text: "air-JA008D", win: "win-222", value: "JA008D"},
        //        {text: "air-JA009D", win: "win-333", value: "JA009D"},
        //        {text: "air-JA107D", win: "win-444", value: "JA010D"}
        //    ]})
        //}.bind(this), 2000);

    }

    fakeFunction(value) {
        //console.log(value);
    }

    fakeToggle(open, value) {
        //console.log(open, value);
    }

    getText(item) {
        return item.win.here;
    }

    getValue(item){
        return item.win;
    }

    render() {
        //var standardArray = ["DDD", "CCC", "BBB", "AAA"];
        //var standardArray = [3, 1, 11, 111, 21, 33, 14, 32, 442];
        //var standardArray = ["JA007D", "JA008D", "JA009D", "JA010D", "JA219J", "JA302J", "JA306J", "JA308J", "JA309J", "JA311J", "JA313J", "JA314J", "JA316J", "JA318J", "JA319J", "JA322J", "JA324J", "JA325J", "JA326J"];
        //var standardArray = ["737-800", "767-300", "777-200", "777-300", "ERJ 170-100"];
        //var standardArray = [];
        // var standardArray = [
        //     {text: "air-JA007D", win: "win-JA007D", value: "JA007D"},
        //     {text: "air-JA008D", win: "win-JA008D", value: "JA008D"},
        //     {text: "air-JA009D", win: "win-JA009D", value: "JA009D"},
        //     {text: "air-JA107D", win: "win-JA107D", value: "JA010D"}
        // ];
        // var standardArray = [
        //     {text: 111, win: "win-JA009D", value: 111},
        //     {text: 3, win: "win-JA007D", value: 3},
        //     {text: 11, win: "win-JA0008D", value: 11},
        //     {text: 12, win: "win-JA107D", value: 12},
        //     {text: 13, win: "sin-JA101D", value: 13},
        //     {text: 14, win: "win-JA102D", value: 14},
        //     {text: 15, win: "win-JA103D", value: 15}
        // ];

        //var standardArray = [
        //    {value: 'EFFECTIVE_DATE', text: 'Day'},
        //    {value: 'EFFECTIVE_YEAR_WEEK', text: 'Week'},
        //    {value: 'EFFECTIVE_YEAR_MONTH', text: 'Month'},
        //    {value: 'EFFECTIVE_YEAR_QUARTER', text: 'Quarter'},
        //    {value: 'EFFECTIVE_YEAR', text: 'Year'}
        //];

        return (
            <div>
                <form action="">
                    <input type="text" required/>
                    <br/>
                    <br/>
                    <div style={{position: 'relative'}}>
                        {/*<ComboSelect type="select" data={this.state.data} sort='number'
                         icon="fa fa-chevron-circle-down" search="smart" value={this.state.data[0]}
                         disabled={false} onChange={this.fakeFunction} map={{text: 'text', value: true}} onToggle={this.fakeToggle} required />*/}
                        {<ComboSelect type="multiselect" data={this.state.data}
                                      icon="fa fa-chevron-circle-down" search="smart" value={this.state.data[1]}
                                      sort="alphanum"
                                      disabled={false} onChange={this.fakeFunction}
                                      map={{text: this.getText, value: this.getValue}}
                                      onToggle={this.fakeToggle} required/>}
                    </div>

                    <div style={{position: 'relative', marginTop: '20px'}}>
                        {/*<ComboSelect data={this.state.data}
                         icon="fa fa-chevron-circle-down" search="smart" value={this.state.data[1]}
                         sort="off"
                         disabled={false} onChange={this.fakeFunction} map={{text: 'win.here', value: true}}
                         onToggle={this.fakeToggle} borderActive="red" required/>*/}
                    </div>

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