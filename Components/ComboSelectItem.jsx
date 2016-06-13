import React, { Component } from 'react';

export default class ComboSelectItem extends Component {

    _generateInput() {
        var input;
        if (this.props.type == 'select') {
            (this.props.selected) ? input = (<i className="fa fa-check-circle"></i>) : input = (
                <i className="fa fa-circle-o"></i>);
        } else {
            (this.props.selected) ? input = (<i className="fa fa-check-square"></i>) : input = (
                <i className="fa fa-square-o"></i>);
        }

        return input;
    }

    render() {
        let input = this._generateInput();

        return (
            <div
                key={Math.floor(Math.random() * 1000001111)}
                className={'combo-select-item' + ((this.props.focused) ? ' active' : '') + ((this.props.selected) ? ' selected' : '')}
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
    focusItem: React.PropTypes.func
};