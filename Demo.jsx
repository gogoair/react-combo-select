import React, {Component} from 'react';
import ComboSelect from './Components/ComboSelect.jsx';

export default class Demo extends Component {

	constructor(props) {
		super(props);

		this.state = {
			text: '-Select me-',
			data: [
				{text: "1air-JA007D", win: "win-111", value: "JA007D", number: 0},
				{text: "1air-JA008D", win: "win-222", value: "JA008D", number: 0},
				{text: "1air-JA009D", win: "win-333", value: "JA009D", number: 1},
				{text: "111air-JA107D", win: "win-444", value: "JA010D", number: 1},
				{text: "111air-JA107R", win: "win-555", value: "JA107R", number: 1},
				{text: "11air-JA008D1", win: "win-2221", value: "JA0081D", number: 0},
				{text: "11air-JA009D2", win: "win-3332", value: "JA009D2", number: 1},
				{text: "11air-JA107D3", win: "win-4443", value: "JA010D3", number: 1},
				{text: "11air-JA107R4", win: "win-5554", value: "JA107R4", number: 1},
				{text: "11air-JA008D5", win: "win-2225", value: "JA008D5", number: 0},
				{text: "air-JA009D8", win: "win-3336", value: "JA009D6", number: 1},
				{text: "air-JA107D6", win: "win-4447", value: "JA010D7", number: 1},
				{text: "air-JA107R7", win: "win-5558", value: "JA107R8", number: 1},
				{text: "air-JA107Y9", win: "win-6669", value: "JA107Y9", number: 1}
			],
			selectedValue: {text: "air-JA007D", win: "win-111", value: "JA007D"}
		}
	}

	fakeFunction(value, text) {
		//console.log(value, text);
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
					<div style={{position: 'relative'}}>
						<p>Default SVG icons:</p>
						<ComboSelect type="select"
							data={this.state.data}
							sort='number'
							search="smart"
							disabled={false}
							onChange={this.fakeFunction}
							map={{text: 'text', value: true}}
							onToggle={this.fakeToggle}
							required />
						
						<p>Custom icons:</p>
						<ComboSelect type="multiselect" data={this.state.data}
							icon="fa fa-chevron-down"
							iconSelectInactive="fa fa-circle-thin"
							iconSelectActive="fa fa-check"
							search="smart"
							value={this.state.data[1]}
							sort="alphanum"
							disabled={false} onChange={this.fakeFunction}
							map={{text: this.getText, value: this.getValue}}
							onToggle={this.fakeToggle}
							defaultText="Select more than one"
							required />
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