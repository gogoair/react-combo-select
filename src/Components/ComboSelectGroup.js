import React, { Component } from 'react';
import PropTypes from 'prop-types';
import CircleIcon from './svg/CircleIcon';
import CircleIconChecked from './svg/CircleIconChecked';
import SquareIcon from './svg/SquareIcon';
import SquareIconChecked from './svg/SquareIconChecked';

export default class ComboSelectGroup extends Component {
	_generateInput(selected) {
		let input;

		if (this.props.type == 'select') {
			if (selected) {
				if (
					this.props.iconSelectActive === true ||
					this.props.iconSelectActive === undefined ||
					this.props.iconSelectActive === null
				) {
					input = <CircleIconChecked />;
				} else if (this.props.iconSelectActive === false || this.props.iconSelectActive === 'off') {
					input = '';
				} else {
					input = <i className={this.props.iconSelectActive} />;
				}
			} else {
				if (
					this.props.iconSelectInactive === true ||
					this.props.iconSelectActive === undefined ||
					this.props.iconSelectActive === null
				) {
					input = <CircleIcon />;
				} else if (this.props.iconSelectInactive === false || this.props.iconSelectInactive === 'off') {
					input = '';
				} else {
					input = <i className={this.props.iconSelectInactive} />;
				}
			}
		} else {
			// multiselect
			if (selected) {
				if (
					this.props.iconSelectActive === true ||
					this.props.iconSelectActive === undefined ||
					this.props.iconSelectActive === null
				) {
					input = <SquareIconChecked />;
				} else if (this.props.iconSelectActive === false || this.props.iconSelectActive === 'off') {
					input = '';
				} else {
					input = <i className={this.props.iconSelectActive} />;
				}
			} else {
				if (
					this.props.iconSelectInactive === true ||
					this.props.iconSelectActive === undefined ||
					this.props.iconSelectActive === null
				) {
					input = <SquareIcon />;
				} else if (this.props.iconSelectInactive === false || this.props.iconSelectInactive === 'off') {
					input = '';
				} else {
					input = <i className={this.props.iconSelectInactive} />;
				}
			}
		}
		return input;
	}

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
									{this._generateInput(option.selected)}
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
