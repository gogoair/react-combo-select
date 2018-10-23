/* eslint-disable  */
import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { generateInput } from '../helpers';

export default class ComboSelectGroup extends Component {
	render() {
		const {
			item: { data, groupName },
			selected,
			index,
			focus,
			type,
			selectItem,
			focusItem,
			iconSelectActive,
			iconSelectInactive,
			...restProps
		} = this.props;

		return (
			<div className="combo-select-group">
				<h4 tabIndex="-1">{groupName}</h4>
				<div className="combo-select-group__wrapper" role="list">
					{data &&
						data.map((option, i) => {
							return (
								<span
									key={option.value}
									role="option"
									onClick={() => selectItem(option)}
									onKeyDown={e => console.log(e)}
									className={'combo-select-group__item' + (option.selected || focus === index ? ' selected' : '')}
									onMouseEnter={() => focusItem(i + index)}
								>
									{generateInput({
										selected: option.selected,
										type,
										iconSelectActive,
										iconSelectInactive,
										handleClick: () => selectItem(option),
									})}
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
