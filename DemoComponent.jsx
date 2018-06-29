import React, { Component } from 'react';
import ComboSelect from './src/Components/ComboSelect';
import { demoData } from './test/fixtures';

export default class Demo extends Component {
	constructor(props) {
		super(props);
		this.ComboRef1 = null;
		this.ComboRef2 = null;
		this.ComboRef3 = null;
		this.ComboRef4 = null;
		this.ComboRef5 = null;

		this.state = {
			text: '-Select me-',
			data: demoData.data,
			groups: demoData.groups,
			selectedValue: { text: 'air-JA007D', win: 'win-111', value: 'JA007D' },
			selectedGroupVals: ['AAL', 'GNR', 'T-Mobile', 'Startek'],
			selectedSingleGroupVal: ['WOR'],
		};
	}

	componentDidMount() {
		// console.log('mounted');
		//const self = this;
		//setTimeout(function () {
		//    const newState = {
		//        data: [
		//            {text: "air-JA007D", win: "win-111", value: "JA007D"},
		//            {text: "air-JA008D", win: "win-222", value: "JA008D"},
		//            {text: "air-JA009D", win: "win-333", value: "JA009D"},
		//            {text: "air-JA107D", win: "win-444", value: "JA010D"},
		//            {text: "air-JA107R", win: "win-555", value: "JA107R"},
		//            {text: "air-JA107Y", win: "win-666", value: "JA107Y"}
		//        ]
		//    };
		//
		//    newState.selectedValue = newState.data[5];
		//
		//    this.setState(newState, function() {
		//        setTimeout(function() {
		//            this.setState({selectedValue: newState.data[8]});
		//        }.bind(self), 2000);
		//    });
		//}.bind(this), 2000);
	}

	fakeFunction(value, text) {
		console.log('val:', value, 'txt:', text);
	}

	fakeToggle(open, value, text) {
		//console.log(open, value, text);
	}

	getText(item) {
		return item.win;
	}

	getValue(item) {
		return item.win;
	}

	onReset = () => {
		return this.ComboRef1.resetValues();
	};

	render() {
		// var standardArray = ["DDD", "CCC", "BBB", "AAA"];
		// var standardArray = [3, 1, 11, 111, 21, 33, 14, 32, 442];
		// var standardArray = ["JA007D", "JA008D", "JA009D", "JA010D", "JA219J", "JA302J", "JA306J", "JA308J", "JA309J", "JA311J", "JA313J", "JA314J", "JA316J", "JA318J", "JA319J", "JA322J", "JA324J", "JA325J", "JA326J"];
		// var standardArray = ["737-800", "767-300", "777-200", "777-300", "ERJ 170-100"];
		// var standardArray = [];
		// var standardArray = [
		// 	{text: "air-JA007D", win: "win-JA007D", value: "JA007D"},
		// 	{text: "air-JA008D", win: "win-JA008D", value: "JA008D"},
		// 	{text: "air-JA009D", win: "win-JA009D", value: "JA009D"},
		// 	{text: "air-JA107D", win: "win-JA107D", value: "JA010D"}
		// ];
		// var standardArray = [
		// 	{text: 111, win: "win-JA009D", value: 111},
		// 	{text: 3, win: "win-JA007D", value: 3},
		// 	{text: 11, win: "win-JA0008D", value: 11},
		// 	{text: 12, win: "win-JA107D", value: 12},
		// 	{text: 13, win: "sin-JA101D", value: 13},
		// 	{text: 14, win: "win-JA102D", value: 14},
		// 	{text: 15, win: "win-JA103D", value: 15}
		// ];

		// var standardArray = [
		//    {value: 'EFFECTIVE_DATE', text: 'Day'},
		//    {value: 'EFFECTIVE_YEAR_WEEK', text: 'Week'},
		//    {value: 'EFFECTIVE_YEAR_MONTH', text: 'Month'},
		//    {value: 'EFFECTIVE_YEAR_QUARTER', text: 'Quarter'},
		//    {value: 'EFFECTIVE_YEAR', text: 'Year'}
		// ];

		return (
			<form action="">
				<input type="text" required />

				{
					<ComboSelect
						type="select"
						data={this.state.data}
						sort="number"
						search="smart"
						disabled={false}
						onChange={this.fakeFunction}
						map={{ text: 'text', value: true }}
						onToggle={this.fakeToggle}
						required
						ref={el => {
							this.ComboRef1 = el;
						}}
					/>
				}

				{
					<ComboSelect
						type="multiselect"
						groups="enabled"
						data={this.state.groups}
						icon="fa fa-chevron-down"
						iconSelectInactive="fa fa-circle-thin"
						iconSelectActive="fa fa-check"
						preferredDirection="down"
						sort="string"
						search="smart"
						value={this.state.selectedGroupVals}
						disabled={false}
						onChange={this.fakeFunction}
						map={{ text: this.getText, value: this.getValue }}
						onToggle={this.fakeToggle}
						defaultText="Select Partner"
					/>
				}

				{
					<ComboSelect
						type="multiselect"
						data={this.state.data}
						sort="number"
						search="smart"
						disabled={false}
						onChange={this.fakeFunction}
						map={{ text: 'text', value: true }}
						onToggle={this.fakeToggle}
						dataAttr={{
							wrapper: {
								automation: 'ComboSelect',
							},
							dropDownHeader: {
								automation: 'ComboSelectHeader',
							},
							listItem: {
								automation: item => item && 'ComboSelectItem_' + item.text,
							},
						}}
						required
						ref={el => {
							this.ComboRef3 = el;
						}}
					/>
				}

				{
					<ComboSelect
						type="multiselect"
						data={this.state.data}
						icon="fa fa-chevron-down"
						iconSelectInactive="fa fa-circle-thin"
						iconSelectActive="fa fa-check"
						search="smart"
						value={this.state.data[1]}
						sort="alphanum"
						disabled={false}
						onChange={this.fakeFunction}
						map={{ text: this.getText, value: this.getValue }}
						onToggle={this.fakeToggle}
						defaultText="Select more than one"
						required
						ref={el => {
							this.ComboRef4 = el;
						}}
					/>
				}

				{
					<ComboSelect
						groups="enabled"
						data={this.state.groups}
						iconSelectInactive={false}
						iconSelectActive={false}
						value={this.state.selectedSingleGroupVal}
						onChange={this.fakeFunction}
						map={{ text: this.getText, value: this.getValue }}
						onToggle={this.fakeToggle}
						defaultText="Select Partner"
						ref={el => {
							this.ComboRef5 = el;
						}}
					/>
				}

				<button type="reset" style={{ width: '50%', margin: '0 auto' }} onClick={this.onReset}>
					Reset Values
				</button>

				<input type="text" required />

				<input type="text" required />

				<input type="submit" />
			</form>
		);
	}
}
