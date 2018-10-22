/* eslint-disable  */

import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { generateInput } from '../helpers';

export default class ComboSelectItem extends Component {
	render() {
		// TODO: Refactor this
		const input = generateInput({
			selected: this.props.selected,
			type: this.props.type,
			iconSelectActive: this.props.iconSelectActive,
			iconSelectInactive: this.props.iconSelectInactive,
			handleClick: () => {},
		});
		const id = this.props.item && this.props.item.value && this.props.item.value.id ? this.props.item.value.id : null;
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
				key={id ? id : index}
				className={'combo-select-item' + (selected || focused ? ' selected' : '') + (input == '' ? ' no-icon' : '')}
				onClick={() => selectItem(item)}
				onMouseEnter={() => focusItem(index)}
				role="option"
			>
				{generateInput({
					selected: this.props.selected,
					type: this.props.type,
					iconSelectActive: this.props.iconSelectActive,
					iconSelectInactive: this.props.iconSelectInactive,
					handleClick: () => selectItem(item),
				})}
				{item.text}
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
