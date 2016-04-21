import React, { Component } from 'react';
import ComboSelectItem from './ComboSelectItem.jsx';

export default class ComboSelect extends Component {

    constructor(props) {
        super(props);

        this.state = {
            text: props.text ? props.text : '-Select me-',
            open: false,
            type: props.type && (props.type == 'select' || props.type == 'multiselect') ? props.type : 'select',
            icon: props.icon ? props.icon : 'fa fa-chevron-circle-down',
            focus: -1,
            selected: -1,
            originalMargin: document.body.style.margin,
            originalmarginRight: document.body.style.marginRight,
            data: this.props.data,
            selectedData: [],
            search: this.props.search ? this.props.search : 'off',
            map: this.props.map && this.props.map.text && this.props.map.value ? this.props.map : {
                value: 'value',
                text: 'text'
            }
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

    /**
     * Generate head (texts)
     * @returns {XML|*}
     * @private
     */
    _generateHead() {

        let head;
        let text = this.state.text;

        if (typeof text == 'object') {
            text.length > 3 ? text = text.length + ' selected' :
                (text = text.slice(), text = text.join(", "));
        }

        head = (<div onClick={() => this.toggleMenu()}>
            <div className="combo-select-head">{text ? text : '-Select me-'}<i className={this.state.icon}></i>
            </div>
        </div>);

        return head;
    }

    /**
     * Generate body (menu)
     * @returns {XML}
     * @private
     */
    _generateBody(dataType) {
        let style = this.calculateMetric();
        let body = '';

        if (Array.isArray(this.state.data)) {
            body = this.state.data.map(function (item, i) {

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
                                         dataType={dataType}
                                         map={this.state.map}
                                         selectItem={this.selectItem.bind(this)}
                                         focusItem={this.focusItem.bind(this)}
                        />
                    </div>
                );
            }.bind(this));
        }

        let search = this.state.search == 'on' || this.state.search == 'smart' && (!style || style.height != 'auto' || (this.refs.comboSelect.getElementsByClassName('search-input') && this.refs.comboSelect.getElementsByClassName('search-input')[0] && this.refs.comboSelect.getElementsByClassName('search-input')[0].value && this.refs.comboSelect.getElementsByClassName('search-input')[0].value.length > 0)) ?
            (<div className="search-holder">
                <input type="text"
                       className={"search-input " + (this.state.open && this.state.search ? 'active' : '')}
                       onChange={() => this.filterBySearch()}/></div>) : '';

        return (
            <div style={style} className="combo-select-body">
                {search}
                {body && body.length > 0 ? body : (<div className="combo-select-item">There is no eligible items</div>)}
            </div>
        );
    }

    filterBySearch() {
        var filter = this.refs.comboSelect.getElementsByClassName('search-input')[0].value;
        var data = [];

        for (var i in this.props.data) {
            if (this.props.data[i].toLowerCase().indexOf(filter.toLowerCase()) > -1) {
                data.push(this.props.data[i])
            }
        }

        this.setState({data: data});
    }

    /**
     * Open/close menu, with overflow hidden
     * TODO: now it hides scroll and move screen on right to avoid movement, disable it on screens without scroll
     */
    toggleMenu() {
        var comboSelect = this.refs.comboSelect;

        if (!this.state.open) {
            document.body.style.overflow = 'hidden';
            document.body.style.marginRight = '23px';
        } else {
            document.body.style.overflow = '';
            document.body.style.margin = this.state.originalMargin;
            document.body.style.marginRight = this.state.originalmarginRight;
        }

        this.setState({open: !this.state.open}, () => {

            if (this.state.open && comboSelect.getElementsByClassName('search-input') && comboSelect.getElementsByClassName('search-input').length > 0) {
                comboSelect.getElementsByClassName('search-input')[0].focus();
            } else {
                this.setState({
                    data: this.props.data
                });
            }
        });
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
            //TODO: elementHeight is accurate only if height of an element is same as height of header
            let elementHeight = comboSelect.clientHeight;
            let windowHeight = window.innerHeight;
            let bottom = windowHeight - (top + elementHeight);
            let overflow = true;

            let direction, height;

            if (bottom + 100 > top) {
                direction = 'down';
                height = bottom - 15;
            } else {
                direction = 'top';
                height = top - 15;
            }

            if (elementHeight * this.state.data.length < height) {
                height = 'auto';
                overflow = false;
            }

            return this.openMenu(direction, height, overflow);
        }
    }

    /**
     * It creates styles for opening menu
     * @param direction
     * @param height
     * @param overflow
     * @returns {{}}
     */
    openMenu(direction, height, overflow) {

        let style = {};

        style.height = height;
        style.overflowY = overflow ? 'scroll' : 'visible';

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

        let text, value;
        let dataType = this.checkDataType();

        if (dataType == 'object') {

            text = item[this.state.map.text];

            if (typeof this.state.map.value == 'boolean') {
                value = item
            } else {
                value = item[this.state.map.value];
            }

        } else {
            text = item;
            value = item;
        }

        if (this.state.type == 'select') {

            this.setState({text: text, selected: [this.state.focus]}, () => {
                this.toggleMenu();
                this.props.onChange(value);
            });

        } else {

            if (typeof this.state.text == 'string') {

                this.setState({
                    text: [text],
                    selected: [this.state.focus],
                    selectedData: [value]
                }, () => {
                    this.props.onChange(value);
                });

            } else {

                let splice;

                this.state.text.map(function (textItem, i) {
                    if (text == textItem) {
                        splice = i;
                    }
                });

                let texts = this.state.text.slice();
                let selected = this.state.selected.slice();
                let selectedData = this.state.selectedData.slice();

                if (splice || splice == 0) {
                    texts.splice(splice, 1);
                    selected.splice(splice, 1);
                    selectedData.splice(splice, 1);
                } else {
                    texts.push(text);
                    selected.push(this.state.focus);
                    selectedData.push(value);
                }

                this.setState({
                    text: texts,
                    selected: selected,
                    selectedData: selectedData
                }, () => {
                    this.props.onChange(selectedData);
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

    checkDataType() {
        return this.props.data && this.props.data[0] ? typeof this.props.data[0] : 'string';
    }

    render() {
        let dataType = this.checkDataType();

        let head = this._generateHead();
        let body = this._generateBody(dataType);

        var {data, type, text, onChange, search, ...other } = this.props;

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
    text: React.PropTypes.string,
    search: React.PropTypes.string,
    type: React.PropTypes.string,
    icon: React.PropTypes.string,
    data: React.PropTypes.array.isRequired,
    onChange: React.PropTypes.func,
    map: React.PropTypes.object
};