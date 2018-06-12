import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { generateInput } from '../helpers';

export default class ComboSelectItem extends Component {
	render() {
		let input = generateInput(
			this.props.selected,
			this.props.type,
			this.props.iconSelectActive,
			this.props.iconSelectInactive
		);
		let id = this.props.item && this.props.item.value && this.props.item.value.id ? this.props.item.value.id : null;
		const {
			item,
			selected,
			index,
			focused,
			type,
			selectItem,
			focusItem,
			iconSelectActive,
			iconSelectInactive,
			...restProps
		} = this.props;

		return (
			<div
				{...restProps}
				key={id ? id : this.props.index}
				className={
					'combo-select-item' +
					(this.props.focused ? ' active' : '') +
					(this.props.selected ? ' selected' : '') +
					(input == '' ? ' no-icon' : '')
				}
				onClick={() => this.props.selectItem(this.props.item)}
				onMouseEnter={() => this.props.focusItem(this.props.index)}
			>
				{input}
				{this.props.item.text}
			</div>
		);
	}
}

ComboSelectItem.propTypes = {
	item: PropTypes.any,
	index: PropTypes.number,
	focused: PropTypes.bool,
	selected: PropTypes.bool,
	type: PropTypes.string,
	selectItem: PropTypes.func,
	focusItem: PropTypes.func,
	iconSelectActive: PropTypes.any,
	iconSelectInactive: PropTypes.any,
};
