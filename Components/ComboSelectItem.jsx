import React, { Component } from 'react';

export default class ComboSelectItem extends Component {

    render() {

        return (
            <div className="combo-select-item" onClick={() => this.props.selectItem(this.props.item)}>
                {this.props.item}
            </div>
        );
    }
}

ComboSelectItem.propTypes = {
    item: React.PropTypes.string,
    selectItem: React.PropTypes.func
};
//<div className="combo-select-item" onClick={() => selectItem(this.props.item)}>