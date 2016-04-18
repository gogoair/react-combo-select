import React, { Component } from 'react';
import ComboSelectItem from './ComboSelectItem.jsx';

export default class ComboSelect extends Component {

    constructor(props) {
        super(props);

        this.state = {
            value: props.value ? props.value : '-Select me-',
            open: false,
            type: props.type ? props.type : 'select',
            icon: props.icon ? props.icon : 'fa fa-chevron-circle-down',
            focus: -1,
            selected: -1,
            originalMargin: document.body.style.margin,
            originalmarginRight: document.body.style.marginRight
        }
    }

    componentDidMount() {

        window.addEventListener('keydown', (event) => {
            this.globalKeyDown(event);
        });

        window.addEventListener('click', (event) => {
            this.globalMouseClick(event);
        });

        this.refs.comboSelect.getElementsByClassName('combo-select-body').scrollTop = 0;
    }

    componentWillUnmount() {
        window.removeEventListener('keydown', this.globalKeyDown);
        window.removeEventListener('click', this.globalMouseClick);
    }

    _generateHead() {

        let head;
        let value = this.state.value;

        if (typeof value == 'object') {
            value.length > 3 ? value = value.length + ' selected' :
                (value = value.slice(), value = value.join(", "));
        }

        if (this.state.type == 'select' || this.state.type == 'multiselect' || this.state.type == 'dropdown') {
            head = (<div onClick={() => this.toggleMenu()}>
                <div className="combo-select-head">{value ? value : '-Select me-'}<i className={this.state.icon}></i>
                </div>
            </div>)
        } else {
            head = (<input type="text" className="combo-select-head" defaultValue={value ? value : '-Select me-'}/>)
        }

        return head;
    }

    _generateBody() {
        let body = '';
        let style = this.calculateMetric();

        if (Array.isArray(this.props.data)) {
            body = this.props.data.map(function (item, i) {

                let focused = false;
                (this.state.focus == i) ? focused = true : '';

                let selected = false;
                typeof this.state.selected == 'object' ?
                    this.state.selected.map(function (item) {
                        (item == i) ? selected = true : '';
                    }) : '';

                return (
                    <div key={i}>
                        <ComboSelectItem item={item} selected={selected} index={i} focused={focused}
                                         type={this.state.type}
                                         selectItem={this.selectItem.bind(this)}
                                         focusItem={this.focusItem.bind(this)}
                        />
                    </div>
                );
            }.bind(this));
        }

        return (
            <div style={style} className="combo-select-body">
                {body}
            </div>
        );
    }

    /**
     * Open/close menu, with overflow hidden
     * TODO: now it hides scroll and move screen on right to avoid movement, disable it on screens without scroll
     */
    toggleMenu() {

        if (!this.state.open) {
            document.body.style.overflow = 'hidden';
            document.body.style.marginRight = '23px';
        } else {
            document.body.style.overflow = '';
            document.body.style.margin = this.state.originalMargin;
            document.body.style.marginRight = this.state.originalmarginRight;
        }

        this.setState({open: !this.state.open});
    }

    /**
     * Push state for focus on mouseover/keyboard control
     * @param focus
     */
    focusItem(focus) {
        this.setState({focus: focus});
    }

    /**
     * Calculates metric for opening menu
     * @returns {{}}
     * TODO: currently opens menu "maximum as possible", make this open so that you cannot see next element
     */
    calculateMetric() {

        if (this.refs.comboSelect) {

            let comboSelect = this.refs.comboSelect;
            let viewportOffset = comboSelect.getBoundingClientRect();
            let top = viewportOffset.top;
            let elementHeight = comboSelect.clientHeight;
            let windowHeight = window.innerHeight;
            let bottom = windowHeight - (top + elementHeight);

            let direction, height;

            if (bottom + 100 > top) {
                direction = 'down';
                height = bottom - 15;
            } else {
                direction = 'top';
                height = top - 15;
            }

            return this.openMenu(direction, height);
        }
    }

    /**
     * It creates styles for opening menu
     * @param direction
     * @param height
     * @returns {{}}
     */
    openMenu(direction, height) {

        let style = {};

        style.height = height;
        style.overflow = 'scroll';

        if (direction == 'top') {
            style.top = -(height + 10);
        }

        return style;

    }

    /**
     * Logic for selecting item(s) in select vs multiselect
     * @param item
     */
    selectItem(item) {

        if (this.state.type == 'select') {

            this.setState({value: item, selected: [this.state.focus]}, () => {
                this.toggleMenu();
                this.props.onChange(this.state.value);
            });

        } else {

            if (typeof this.state.value == 'string') {

                this.setState({
                    value: [item], selected: [this.state.focus]
                }, () => {
                    this.props.onChange(this.state.value);
                });

            } else {

                let splice;

                this.state.value.map(function (value, i) {
                    if (value == item) {
                        splice = i;
                    }
                });

                let values = this.state.value.slice();
                let selected = this.state.selected.slice();

                if (splice || splice == 0) {
                    values.splice(splice, 1);
                    selected.splice(splice, 1);
                } else {
                    values.push(item);
                    selected.push(this.state.focus);
                }

                this.setState({
                    value: values,
                    selected: selected
                }, () => {
                    this.props.onChange(this.state.value);
                });
            }
        }
    }

    /**
     * Global mouse event, here is also serves to control opening/closing menu and picking item on select/multiselect
     * @param event
     */
    globalMouseClick(event) {

        var target = event.target;

        // Safety fuse
        let i = 0;
        let hideMenu = true;

        while (this.checkParentElement(target) && i < 10) {
            target = target.parentElement;
            i++;
            if (target.innerHTML == this.refs.comboSelect.innerHTML) {
                hideMenu = false;
            }
        }

        if (hideMenu) {
            this.setState({open: false});
        }
    }

    checkParentElement(target) {
        if (target.parentElement != null) {
            return true;
        } else {
            return false;
        }
    }

    /**
     * Control scrolling within open menu with arrowZ
     */
    controlScrolling() {
        let windowHeight = this.refs.comboSelect.childNodes[1].clientHeight;
        let focus = this.state.focus;
        let elementHeight = this.refs.comboSelect.getElementsByClassName('combo-select-item')[this.state.focus].clientHeight;
        let elementOffsetTop = this.refs.comboSelect.getElementsByClassName('combo-select-item')[this.state.focus].offsetTop;
        let elementCountPerWindow = Math.floor(windowHeight / elementHeight);
        let scrollTop = this.refs.comboSelect.getElementsByClassName('combo-select-body')[0].scrollTop;

        if (elementOffsetTop > windowHeight + scrollTop - elementHeight) {
            this.refs.comboSelect.getElementsByClassName('combo-select-body')[0].scrollTop = elementOffsetTop - (elementCountPerWindow - 1) * elementHeight;
        } else if (elementOffsetTop < scrollTop) {
            this.refs.comboSelect.getElementsByClassName('combo-select-body')[0].scrollTop = elementOffsetTop;
        } else if (focus == 0) {
            this.refs.comboSelect.getElementsByClassName('combo-select-body')[0].scrollTop = 0;
        }
    }

    /**
     * Event for eny keypress once menu is open
     * @param event
     */
    globalKeyDown(event) {
        if (this.state.open) {

            switch (event.keyCode) {
                case 38:
                    // Up
                    event.preventDefault();
                    this.setState({
                        focus: this.state.focus == 0 ? this.props.data.length - 1 : this.state.focus - 1
                    }, () => {
                        this.controlScrolling();
                    });
                    break;
                case 40:
                    // Down
                    event.preventDefault();
                    this.setState({
                        focus: this.state.focus == this.props.data.length - 1 ? this.state.focus = 0 : this.state.focus + 1
                    }, () => {
                        this.controlScrolling();
                    });
                    break;
                case 37:
                    // Left
                    event.preventDefault();
                    break;
                case 39:
                    // Right
                    event.preventDefault();
                    break;
                case 32:
                    // Space
                    event.preventDefault();
                    this.selectItem(this.props.data[this.state.focus]);
                    break;
                case 13:
                    // Enter
                    event.preventDefault();
                    this.selectItem(this.props.data[this.state.focus]);
                    break;
                case 9:
                    // Tab
                    event.preventDefault();
                    break;
            }
        }
    }

    render() {
        let head = this._generateHead();
        let body = this._generateBody();

        var { data, type, value, onChange, ...other } = this.props;

        return (
            <div {...other} ref="comboSelect" className="combo-select">
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
    data: React.PropTypes.array,
    onChange: React.PropTypes.func
};