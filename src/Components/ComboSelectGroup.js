import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { generateInput } from '../helpers';

export default class ComboSelectGroup extends Component {
	render() {
		let id = this.props.item && this.props.item.value && this.props.item.value.id ? this.props.item.value.id : null;
		const { item, selected, type, selectItem, iconSelectActive, iconSelectInactive, ...restProps } = this.props;

		console.log('OPT', item);

		return (
			<div className="combo-select-group">
				<div style={{ display: 'flex', flexDirection: 'column' }}>
					<h4>{item.groupName}</h4>
					{item.data &&
						item.data.map((option, i) => {
							return (
								<span
									key={option.text}
									onClick={() => this.props.selectItem(option)}
									className={'combo-select-group__item' + (option.selected ? ' selected' : '')}
								>
									{generateInput(
										option.selected,
										this.props.type,
										this.props.iconSelectActive,
										this.props.iconSelectInactive
									)}
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
	item: PropTypes.any,
	type: PropTypes.string,
	selectItem: PropTypes.func,
	iconSelectActive: PropTypes.any,
	iconSelectInactive: PropTypes.any,
};
