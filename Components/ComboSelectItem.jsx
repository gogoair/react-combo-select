import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class ComboSelectItem extends Component {

	_generateInput() {
		let input;

		if (this.props.type == 'select') {

			if (this.props.selected) {

				if (this.props.iconSelectActive === true || this.props.iconSelectActive === undefined || this.props.iconSelectActive === null) {
					input = <i className="fa fa-check-circle" />;
				} else if (this.props.iconSelectActive === false || this.props.iconSelectActive === 'off') {
					input = '';
				} else {
					input = <i className={this.props.iconSelectActive} />;
				}

			} else {

				if (this.props.iconSelectInactive === true || this.props.iconSelectActive === undefined || this.props.iconSelectActive === null) {
					input = <i className="fa fa-circle-o" />;
				} else if (this.props.iconSelectInactive === false || this.props.iconSelectInactive === 'off') {
					input = '';
				} else {
					input = <i className={this.props.iconSelectInactive} />;
				}

			}

		} else {

			if (this.props.selected) {

				if (this.props.iconSelectActive === true || this.props.iconSelectActive === undefined || this.props.iconSelectActive === null) {
					input = <i className="fa fa-check-square" />;
				} else if (this.props.iconSelectActive === false || this.props.iconSelectActive === 'off') {
					input = '';
				} else {
					input = <i className={this.props.iconSelectActive} />;
				}

			} else {

				if (this.props.iconSelectInactive === true || this.props.iconSelectActive === undefined || this.props.iconSelectActive === null) {
					input = <i className="fa fa-square-o" />;
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
		let input = this._generateInput();
		let id = (this.props.item && this.props.item.value && this.props.item.value.id) ? this.props.item.value.id : null;
		const { item, selected, index, focused, type, selectItem, focusItem, iconSelectActive, iconSelectInactive, ...restProps } = this.props;

		return (
			<div
				{...restProps}
				key={id ? id : this.props.index}
				className={'combo-select-item' + ((this.props.focused) ? ' active' : '') + ((this.props.selected) ? ' selected' : '') + (input == '' ? ' no-icon' : '')}
				onClick={() => this.props.selectItem(this.props.item)}
				onMouseEnter={() => this.props.focusItem(this.props.index)}>
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
