/* eslint-disable  */
import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { generateInput } from '../helpers';

export default class ComboSelectGroup extends Component {
	render() {
		let id = this.props.item && this.props.item.value && this.props.item.value.id ? this.props.item.value.id : null;
		const {
			item: { data, groupName },
			selected,
			index,
			type,
			selectItem,
			iconSelectActive,
			iconSelectInactive,
			...restProps
		} = this.props;

		return (
			<div className="combo-select-group">
				<h4>{groupName}</h4>
				<div className="combo-select-group__wrapper">
					{data &&
						data.map((option, i) => {
							return (
								<span
									key={option.text}
									onClick={() => this.props.selectItem(option)}
									className={'combo-select-group__item' + (option.selected ? ' selected' : '')}
									onMouseEnter={() => this.props.focusItem(i + index)}
								>
									{generateInput(option.selected, type, iconSelectActive, iconSelectInactive)}
									{option.text}
								</span>
							);
						})}
				</div>
			</div>
		);
	}
}

ComboSelectGroup.propTypes = {
	item: PropTypes.shape({
		text: PropTypes.string,
		selected: PropTypes.bool,
	}),
	type: PropTypes.string,
	selectItem: PropTypes.func,
	iconSelectActive: PropTypes.any,
	iconSelectInactive: PropTypes.any,
};
