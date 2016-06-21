import React, { Component } from 'react';

export default class ComboSelectItem extends Component {

    _generateInput() {
        let input;

        if (this.props.type == 'select') {

            if (this.props.selected) {

                if (this.props.iconSelectActive === true) {
                    input = <i className="fa fa-check-circle"></i>;
                } else if (this.props.iconSelectActive === false || this.props.iconSelectActive === 'off') {
                    input = '';
                } else {
                    input = <i className={this.props.iconSelectActive}></i>;
                }

            } else {

                if (this.props.iconSelectInactive === true) {
                    input = <i className="fa fa-circle-o"></i>;
                } else if (this.props.iconSelectInactive === false || this.props.iconSelectInactive === 'off') {
                    input = '';
                } else {
                    input = <i className={this.props.iconSelectInactive}></i>;
                }

            }

        } else {

            if (this.props.selected) {

                if (this.props.iconSelectActive === true) {
                    input = <i className="fa fa-check-square"></i>;
                } else if (this.props.iconSelectActive === false || this.props.iconSelectActive === 'off') {
                    input = '';
                } else {
                    input = <i className={this.props.iconSelectActive}></i>;
                }

            } else {

                if (this.props.iconSelectInactive === true) {
                    input = <i className="fa fa-square-o"></i>;
                } else if (this.props.iconSelectInactive === false || this.props.iconSelectInactive === 'off') {
                    input = '';
                } else {
                    input = <i className={this.props.iconSelectInactive}></i>;
                }

            }

        }

        return input;
    }

    render() {
        let input = this._generateInput();

        return (
            <div
                key={Math.floor(Math.random() * 1000001111)}
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
    item: React.PropTypes.any,
    index: React.PropTypes.number,
    focused: React.PropTypes.bool,
    selected: React.PropTypes.bool,
    type: React.PropTypes.string,
    selectItem: React.PropTypes.func,
    focusItem: React.PropTypes.func,
    iconSelectActive: React.PropTypes.any,
    iconSelectInactive: React.PropTypes.any
};