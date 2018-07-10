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
						text="Select Items"
						defaultText="Select Item"
						value={this.state.selectedGroupVals}
						disabled={false}
						onChange={this.fakeFunction}
						map={{ text: this.getText, value: this.getValue }}
						onToggle={this.fakeToggle}
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
						defaultText="Select Item"
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
