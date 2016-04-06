import React, { Component } from 'react';
import ComboSelectItem from './ComboSelectItem.jsx';

export default class ComboSelect extends Component {

    constructor(props) {
        super(props);

        this.state = {
            value: props.value ? props.value : '-Select me-',
            open: false,
            type: props.type ? props.type : 'select',
            icon: props.icon ? props.icon : 'fa fa-chevron-circle-down'
        }
    }

    _generateHead() {

        let head;

        if (this.state.type == 'select' || this.state.type == 'multiselect' || this.state.type == 'dropdown') {
            head = (<div onClick={() => this.toggleMenu()}>
                <div className="combo-select-head">{this.state.value}<i className={this.state.icon}></i></div>
            </div>)
        } else {
            head = (<input type="text" className="comboSelect" defaultValue={this.state.value}/>)
        }

        return head;
    }

    _generateBody() {

        let body = '';

        if (Array.isArray(this.props.data)) {
            body = this.props.data.map(function (item, i) {
                return (
                    <div key={i}>
                        <ComboSelectItem item={item} selectItem={this.selectItem.bind(this)} />
                    </div>
                );
            }.bind(this));
        }

        return (
            <div className="combo-select-body">
                {body}
            </div>
        );
    }

    toggleMenu() {
        this.setState({open: !this.state.open});
    }

    selectItem(item) {
        this.setState({value: item}, () => {
            this.toggleMenu();
        });
    }

    render() {
        let head = this._generateHead();
        let body = this._generateBody();

        return (
            <div className="combo-select">
                {head}
                {this.state.open ?
                    body
                    : ''}
            </div>
        );
    }
}

ComboSelect.propTypes = {
    value: React.PropTypes.string,
    type: React.PropTypes.string,
    icon: React.PropTypes.string,
    data: React.PropTypes.array
};