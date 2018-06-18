import React, { Component } from 'react';
import ComboSelect from './src/Components/ComboSelect';

export default class Demo extends Component {
	constructor(props) {
		super(props);

		this.state = {
			text: '-Select me-',
			data: [
				{ text: '1air-JA007D', win: 'win-111', value: 'JA007D', number: 0 },
				{ text: '1air-JA008D', win: 'win-222', value: 'JA008D', number: 0 },
				{ text: '1air-JA009D', win: 'win-333', value: 'JA009D', number: 1 },
				{ text: '111air-JA107D', win: 'win-444', value: 'JA010D', number: 1 },
				{ text: '111air-JA107R', win: 'win-555', value: 'JA107R', number: 1 },
				{ text: '11air-JA008D1', win: 'win-2221', value: 'JA0081D', number: 0 },
				{ text: '11air-JA009D2', win: 'win-3332', value: 'JA009D2', number: 1 },
				{ text: '11air-JA107D3', win: 'win-4443', value: 'JA010D3', number: 1 },
				{ text: '11air-JA107R4', win: 'win-5554', value: 'JA107R4', number: 1 },
				{ text: '11air-JA008D5', win: 'win-2225', value: 'JA008D5', number: 0 },
				{ text: 'air-JA009D8', win: 'win-3336', value: 'JA009D6', number: 1 },
				{ text: 'air-JA107D6', win: 'win-4447', value: 'JA010D7', number: 1 },
				{ text: 'air-JA107R7', win: 'win-5558', value: 'JA107R8', number: 1 },
				{ text: 'air-JA107Y9', win: 'win-6669', value: 'JA107Y9', number: 1 },
			],
			groups: [
				{
					groupName: 'Airlines',
					options: [
						{
							text: 'AAL',
							win: 'AAL',
							value: 'AAL',
							number: 1,
						},
						{
							text: 'ACA',
							win: 'ACA',
							value: 'ACA',
							number: 1,
						},
						{
							text: 'GNR',
							win: 'GNR',
							value: 'GNR',
							number: 1,
						},
						{
							text: 'ZZT',
							win: 'ZZT',
							value: 'ZZT',
							number: 1,
						},
						{
							text: 'JAL',
							win: 'JAL',
							value: 'JAL',
							number: 1,
						},
						{
							text: 'WOR',
							win: 'WOR',
							value: 'WOR',
							number: 1,
						},
					],
				},
				{
					groupName: 'Other',
					options: [
						{
							text: 'T-Mobile',
							win: 'T-Mobile',
							value: 'T-Mobile',
							number: 1,
						},
						{
							text: 'Startek',
							win: 'Startek',
							value: 'Startek',
							number: 1,
						},
						{
							text: 'Airtech',
							win: 'Airtech',
							value: 'Airtech',
							number: 1,
						},
						{
							text: 'SkyPartner',
							win: 'SkyPartner',
							value: 'SkyPartner',
							number: 1,
						},
					],
				},
			],
			selectedValue: { text: 'air-JA007D', win: 'win-111', value: 'JA007D' },
			selectedGroupVals: ['AAL', 'GNR', 'T-Mobile', 'Startek'],
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
		console.log(value, text);
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
			<div>
				<form action="">
					<input type="text" required />
					<br />
					<br />
					<br />
					<br />
					<br />
					<br />
					<br />
					<div style={{ position: 'relative' }}>
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
							/>
						}

						{
							<ComboSelect
								type="multiselect"
								groups="enable"
								data={this.state.groups}
								icon="fa fa-chevron-down"
								iconSelectInactive="fa fa-circle-thin"
								iconSelectActive="fa fa-check"
								scrollHeight={270}
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
					</div>

					<div style={{ position: 'relative', marginTop: '20px' }}>
						{/*<ComboSelect data={this.state.data}
						 icon="fa fa-chevron-circle-down" search="smart" value={this.state.data[1]}
						 sort="off"
						 disabled={false} onChange={this.fakeFunction} map={{text: 'win', value: 'value'}}
						 onToggle={this.fakeToggle} borderActive="red" required/>*/}
					</div>

					<br />
					<br />
					<input type="text" required />
					<br />
					<br />
					<input type="text" required />
					<br />
					<br />
					<input type="submit" />
				</form>
				<br />
				<br />
				<br />
				<br />
				<br />
				<br />
				<br />
				<br />
				<br />
				<br />
				<br />
				<br />
				<br />
				<br />
				<br />
				<br />
				<br />
				<br />
				<br />
				<br />
				<br />
				<br />
				<br />
				<br />
				<br />
				<br />
				<br />
				<br />
				<br />
				<br />
				<br />
				<br />
				<br />
				<br />
			</div>
		);
	}
}
