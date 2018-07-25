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
			focus,
			type,
			selectItem,
			iconSelectActive,
			iconSelectInactive,
			...restProps
		} = this.props;

		return (
			<div className="combo-select-group">
				<h4 tabIndex="-1">{groupName}</h4>
				<div className="combo-select-group__wrapper">
					{data &&
						data.map((option, i) => {
							return (
								<span
									key={option.value}
									onClick={() => this.props.selectItem(option)}
									onKeyDown={e => console.log(e)}
									className={'combo-select-group__item' + (option.selected || focus === index ? ' selected' : '')}
									onMouseEnter={() => this.props.focusItem(i + index)}
								>
									{generateInput(option.selected, type, iconSelectActive, iconSelectInactive)}
									<span style={{ margin: '0 3px' }} />
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
