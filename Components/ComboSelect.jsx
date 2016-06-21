'use strict';

import React, { Component } from 'react';
import ComboSelectItem from './ComboSelectItem.jsx';

// TODO: move to this.specialClass
let specialClass = 'combo-select-body-scroll';

export default class ComboSelect extends Component {

    constructor(props) {
        super(props);

        this.focus = -1;
        this.scroll = 0;
        this.defaultText = props.text ? props.text : 'Select';
        this.open = false;
        this.icon = props.icon ? props.icon : 'fa fa-chevron-circle-down';
        this.map = this.props.map && this.props.map.text && this.props.map.value && this.props.map.text.length > 0 ? this.props.map : {
            value: 'value',
            text: 'text'
        };

        this.iconSelectActive = props.iconSelectActive !== false || props.iconSelectActive !== 'off' ? props.iconSelectActive : true;
        this.iconSelectInactive = props.iconSelectInactive !== false || props.iconSelectInactive !== 'off' ? props.iconSelectInactive : true;

        this.globalKeyDown = this.globalKeyDown.bind(this);
        this.globalMouseClick = this.globalMouseClick.bind(this);
        this.globalWheel = this.globalWheel.bind(this);
        this.requiredSelectKeydown = this.requiredSelectKeydown.bind(this);

        let data = this.sortData(this.mapAllData(props.data));
        let selectedItems = this.findSelectedItems(data, props.text, props.value);

        this.state = {
            data: data,
            text: selectedItems.text,
            value: selectedItems.value,
            type: props.type && (props.type == 'select' || props.type == 'multiselect') ? props.type : 'select',
            selected: -1,
            search: this.props.search && (this.props.search == 'on' || this.props.search == 'smart' || this.props.search == 'off') ? this.props.search : 'off'
        }
    }

    componentDidMount() {

        /**
         * Binding events
         */
        window.addEventListener('keydown', this.globalKeyDown);
        window.addEventListener('click', this.globalMouseClick);
        window.addEventListener('wheel', this.globalWheel);
        // Event for real select within select, this is needed for "required" attribute since it cannot be attached to the non-form elements
        this.refs.comboSelect.getElementsByClassName('combo-select-required-select')[0].addEventListener('keydown', this.requiredSelectKeydown);

        /**
         * Inner scroll, scroll to top
         * @type {number}
         */
        this.refs.comboSelect.getElementsByClassName(specialClass).scrollTop = 0;
    }

    componentWillUnmount() {
        window.removeEventListener('keydown', this.globalKeyDown);
        window.removeEventListener('click', this.globalMouseClick);
        window.removeEventListener('wheel', this.globalWheel);
        this.refs.comboSelect.getElementsByClassName('combo-select-required-select')[0].removeEventListener('keydown', this.requiredSelectKeydown)
    }

    componentWillReceiveProps(newProps) {
        let data = this.sortData(this.mapAllData(newProps.data));
        let selectedItems = this.findSelectedItems(data, newProps.text, newProps.value);

        this.setState({
            data: data,
            text: selectedItems.text,
            value: selectedItems.value
        });
    }

    /**
     * Global wheel event
     * @param event
     */
    globalWheel(event) {

        if (this.open) {

            var target = event.target;
            // Safety fuse
            let i = 0;
            var outside = true;

            let data = this.state.data.length;
            let elementHeight = this.refs.comboSelect.getElementsByClassName('combo-select-item')[0].clientHeight;
            let menuHeight = this.refs.comboSelect.getElementsByClassName('combo-select-body-scroll')[0].clientHeight;

            let potentialScrollBottom = this.refs.comboSelect.getElementsByClassName(specialClass)[0].scrollTop + menuHeight + event.deltaY;
            let maximumScroll = data * elementHeight;

            if (potentialScrollBottom <= maximumScroll && this.refs.comboSelect.getElementsByClassName(specialClass)[0].scrollTop + event.deltaY > 0) {

                while (this.checkParentElement(target) && i < 10) {
                    target = target.parentElement;
                    i++;

                    if (target.innerHTML == this.refs.comboSelect.getElementsByClassName('combo-select-body-scroll')[0].innerHTML) {
                        outside = false;
                    }
                }

                if (outside) {
                    event.stopPropagation();
                    event.preventDefault();
                }

            } else if (this.refs.comboSelect.getElementsByClassName(specialClass)[0].scrollTop + event.deltaY <= 0) {

                this.refs.comboSelect.getElementsByClassName('combo-select-body-scroll')[0].scrollTop = 0;
                event.stopPropagation();
                event.preventDefault();

            } else {

                this.refs.comboSelect.getElementsByClassName('combo-select-body-scroll')[0].scrollTop = 9999999;
                event.stopPropagation();
                event.preventDefault();

            }


        }
    }

    /**
     * Global mouse event, here is also serves to control opening/closing menu and picking item on select/multiselect
     * @param event
     */
    globalMouseClick(event) {

        if (event) {

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

            //if (hideMenu && target.className != 'combo-select-item' && target.className != 'combo-select-item selected' && target.className != 'combo-select-item active' && target.className != 'combo-select-item active selected' && target.className != 'combo-select-item selected no-icon' && target.className != 'combo-select-item active selected no-icon' && this.open) {
            //console.log(target.className.indexOf('combo-select-item'));
            if (hideMenu && target.className.indexOf('combo-select-item') < 0 && this.open) {
                event.preventDefault();
                this.toggleMenu();
            }
        }
    }

    /**
     * Check if there is an parent element
     * @param target
     * @returns {boolean}
     */
    checkParentElement(target) {
        if (target.parentElement != null) {
            return true;
        } else {
            return false;
        }
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

        let options = this.state.data.map(function (item, i) {
            return <option key={i} value={item.text}>{item.text}</option>
        });

        var {data, type, onChange, search, value, onToggle, ...other } = this.props;

        if (this.state.value) {

            head = (<div onClick={() => this.toggleMenu()}>
                <div className="combo-select-head">
                    {text ? text : this.defaultText}<i className={this.icon}></i>
                </div>
                <select disabled readOnly {...other} className="combo-select-required-select">
                    {options}
                </select>
            </div>);

        } else {

            head = (<div onClick={() => this.toggleMenu()}>
                <div className="combo-select-head">
                    {text ? text : this.defaultText}<i className={this.icon}></i>
                </div>
                <select disabled readOnly {...other} className="combo-select-required-select">
                    <option value=""></option>
                    {options}
                </select>
            </div>);

        }

        return head;
    }

    /**
     * Generate body (menu)
     * @returns {XML}
     * @private
     */
    _generateBody() {
        let style = this.calculateMetric();
        let body = '';

        if (Array.isArray(this.state.data)) {

            body = this.state.data.map(function (item, i) {

                let focused = false;
                (this.focus == i) ? focused = true : '';

                return (
                    <div key={i}>
                        <ComboSelectItem item={item} selected={this.findSelectedByKey(item, this.state.text, 'text')}
                                         index={i}
                                         focused={focused}
                                         type={this.state.type}
                                         selectItem={this.selectItem.bind(this)}
                                         focusItem={this.focusItem.bind(this)}
                                         iconSelectActive={this.iconSelectActive}
                                         iconSelectInactive={this.iconSelectInactive}
                        />
                    </div>
                );
            }.bind(this));
        }

        let search = this.ifSearch(style) ?
            (<input type="text" style={style ? style.search : {}}
                    className="search-input"
                    onChange={() => this.filterBySearch()}/>)
            : '';

        return (
            <div>
                {search}
                <div className="combo-select-body" style={style ? style.body : {}}>
                    <div style={style ? style.scroll : {}} className="combo-select-body-scroll">
                        {body && body.length > 0 ? body : (
                            <div className="combo-select-item">There is no eligible items</div>)}
                    </div>
                </div>
            </div>
        );
    }

    /**
     * Connect text and value if component received only one of them
     * @param data
     * @param text
     * @param value
     */
    findSelectedItems(data, text, value) {

        let selectedItems = {
            text: [],
            value: []
        };

        data.map(function (item) {
            if (this.findSelectedItem(item, text, value)) {
                selectedItems.text.push(item.text);
                selectedItems.value.push(item.value);
            }
        }.bind(this));

        return selectedItems;
    }

    /**
     * Find selected item comparing text or value with item
     * @param item
     * @param text
     * @param value
     * @returns {boolean}
     */
    findSelectedItem(item, text, value) {

        let match = false;

        if (text) {
            if (this.findSelectedByKey(item, text, 'text')) {
                match = true;
            }
        } else if (value) {
            if (this.findSelectedByKey(item, value, 'value')) {
                match = true;
            }
        }

        return match;
    }

    /**
     * Check if item is selected
     * @param item
     * @param keyData
     * @param key
     * @returns {boolean}
     */
    findSelectedByKey(item, keyData, key) {

        let selected;
        if (Array.isArray(keyData)) {
            for (let i in keyData) {
                if (item[key] == keyData[i]) {
                    selected = true;
                }
            }
        } else {
            if (item[key] == keyData) {
                selected = true;
            }
        }

        return selected;
    }

    /**
     * Should search be shown or not?
     * @param style
     * @returns {boolean|*|NodeList}
     */
    ifSearch(style) {
        return this.state.search == 'on' ||
            (this.state.search == 'smart' &&
                (!style || style.scroll.height != 'auto' ||
                    (this.refs.comboSelect.getElementsByClassName('search-input') && this.refs.comboSelect.getElementsByClassName('search-input')[0] && this.refs.comboSelect.getElementsByClassName('search-input')[0].value && this.refs.comboSelect.getElementsByClassName('search-input')[0].value.length > 0)
                )
            );
    }

    /**
     * Alphanumerical sorting logic
     * @param ar
     * @returns {*}
     */
    alphanumSort(ar) {
        for (var z = 0, t; t = ar[z]; z++) {
            ar[z] = [];
            var x = 0, y = -1, n = 0, i, j;

            while (i = (j = t.text.toString().charAt(x++)).charCodeAt(0)) {
                var m = (i == 46 || (i >= 48 && i <= 57));
                if (m !== n) {
                    ar[z][++y] = "";
                    n = m;
                }
                ar[z][y] += j;
            }

            let text = ar[z];
            ar[z] = {
                text: text,
                value: t.value
            };
        }

        ar.sort(function (a, b) {
            a = a.text;
            b = b.text;
            for (var x = 0, aa, bb; (aa = a[x]) && (bb = b[x]); x++) {
                if (aa !== bb) {
                    var c = Number(aa), d = Number(bb);
                    if (c == aa && d == bb) {
                        return c - d;
                    } else return (aa > bb) ? 1 : -1;
                }
            }
            return a.length - b.length;
        });

        for (let y = 0; y < ar.length; y++)
            ar[y].text = ar[y].text.join("");

        return ar;
    }

    /**
     * Sort data alphabetically or numerically
     * @param data
     * @returns {*}
     */
    sortData(data) {
        let sortedData = [];

        if (data && data[0]) {

            let sort = this.props.sort ? this.props.sort : 'alphanum';

            if (sort == 'string') {

                sortedData = data.sort(function (a, b) {
                    return (a.text.toString() > b.text.toString()) ? 1 : ((b.text.toString() > a.text.toString()) ? -1 : 0);
                });

            } else if (sort == 'number') {

                sortedData = data.sort(function (a, b) {
                    return a.text - b.text;
                });

            } else {

                sortedData = this.alphanumSort(data);

            }
        }

        return sortedData;
    }

    /**
     * Filter data to match searched term
     */
    filterBySearch() {
        let filter = this.refs.comboSelect.getElementsByClassName('search-input')[0].value;
        let data = [];
        let unsortedData = this.sortData(this.mapAllData(this.props.data));

        for (let i in unsortedData) {

            if (unsortedData[i].text.toString().toLowerCase().indexOf(filter.toLowerCase()) > -1) {
                data.push(unsortedData[i]);
            }

        }

        this.setState({
            data: data
        });
    }

    /**
     * On any keydown, but tab, that is pressed on inner required select disable it and open custom select
     * @param event
     */
    requiredSelectKeydown(event) {

        // space, up, down
        if (!this.open && (event.keyCode == 13 || event.keyCode == 38 || event.keyCode == 40 || event.keyCode == 32)) {

            event.preventDefault();
            this.toggleMenu();

        }
    }

    /**
     * Open/close menu, with overflow hidden
     */
    toggleMenu() {
        let comboSelect = this.refs.comboSelect;

        this.open = !this.open;

        comboSelect.getElementsByClassName('combo-select-body-holder')[0].style.display = this.open ? 'block' : 'none';

        if (this.open) {

            let style = this.calculateMetric();

            // Search
            if (this.ifSearch(style) && comboSelect && this.refs.comboSelect.getElementsByClassName('search-input') && this.refs.comboSelect.getElementsByClassName('search-input')[0]) {
                this.refs.comboSelect.getElementsByClassName('search-input')[0].style.display = 'block';
                this.refs.comboSelect.getElementsByClassName('search-input')[0].style.top = style.search.top ? style.search.top + 'px' : '';
                this.refs.comboSelect.getElementsByClassName('search-input')[0].style.bottom = style.search.bottom ? style.search.bottom + 'px' : '';
            } else if (comboSelect && this.refs.comboSelect.getElementsByClassName('search-input') && this.refs.comboSelect.getElementsByClassName('search-input')[0]) {
                this.refs.comboSelect.getElementsByClassName('search-input')[0].style.display = 'none';
            }

            // Body
            if (comboSelect && this.refs.comboSelect.getElementsByClassName('combo-select-body')[0]) {
                this.refs.comboSelect.getElementsByClassName('combo-select-body')[0].style.top = style.body.top ? style.body.top + 'px' : '';
                this.refs.comboSelect.getElementsByClassName('combo-select-body')[0].style.bottom = style.body.bottom ? style.body.bottom + 'px' : '';
                this.refs.comboSelect.getElementsByClassName('combo-select-body')[0].style.paddingTop = style.body.paddingTop ? style.body.paddingTop + 'px' : '';
                this.refs.comboSelect.getElementsByClassName('combo-select-body')[0].style.paddingBottom = style.body.paddingBottom ? style.body.paddingBottom + 'px' : '';
            }

            // Search focus
            if (comboSelect.getElementsByClassName('search-input') && comboSelect.getElementsByClassName('search-input').length > 0) {
                comboSelect.getElementsByClassName('search-input')[0].focus();
            }

            // Scroll
            if (comboSelect.getElementsByClassName('combo-select-body-scroll') && comboSelect.getElementsByClassName('combo-select-body-scroll')[0]) {
                this.refs.comboSelect.getElementsByClassName('combo-select-body-scroll')[0].style.height = style.scroll.height + 'px';
                this.refs.comboSelect.getElementsByClassName('combo-select-body-scroll')[0].style.overflowY = style.scroll.overflowY;
            }

        } else {

            comboSelect.getElementsByClassName('combo-select-required-select')[0].focus();

        }

        // Propagate toggle event with data with to outside event
        if (this.props.onToggle) {
            this.props.onToggle(this.open, this.state.value);
        }
    }

    /**
     * Push state for focus on mouseover/keyboard control
     * @param focus
     */
    focusItem(focus) {
        this.focus = focus;
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
                height = bottom - 15 - 77;
            } else {
                direction = 'top';
                height = top - 15 - 77;
            }

            if (elementHeight * this.state.data.length < height) {
                height = 'auto';
                overflow = false;
            }

            return this.openMenu(direction, height, overflow, elementHeight);
        }
    }

    /**
     * It creates styles for opening menu
     * @param direction
     * @param height
     * @param overflow
     * @param elementHeight
     * @returns {{}}
     */
    openMenu(direction, height, overflow, elementHeight) {

        let style = {
            body: {},
            scroll: {},
            search: {},
            controls: {}
        };

        style.scroll.height = height;
        style.scroll.overflowY = overflow ? 'scroll' : 'visible';

        if (direction == 'top') {

            style.body.bottom = 41;
            style.body.paddingBottom = this.ifSearch(style) ? 45 : 0;
            style.body.paddingTop = this.props.controls && this.state.type == 'multiselect' ? 45 : 0;

            style.search.bottom = 46;

            style.controls.top = -(height + style.body.paddingTop + style.body.paddingBottom);

        } else {

            let elasticHeight = height && height != 'auto' ? height : elementHeight * (this.state.data.length > 0 ? this.state.data.length : 1);

            style.body.top = 41;
            style.body.paddingTop = this.ifSearch(style) ? 45 : 0;
            style.body.paddingBottom = this.props.controls && this.state.type == 'multiselect' ? 45 : 0;

            style.search.top = 48;

            style.controls.top = elasticHeight + style.body.paddingTop + style.body.paddingBottom;

        }

        return style;

    }

    /**
     * Logic for selecting item(s) in select vs multiselect
     * @param item
     */
    selectItem(item) {

        let text = item.text;
        let value = item.value;

        if (this.state.type == 'select') {

            this.setState({text: text, value: value}, () => {
                this.toggleMenu();
                this.props.onChange ? this.props.onChange(value) : '';
            });

        } else {

            if (typeof this.state.text == 'string') {

                this.setState({
                    text: [text],
                    value: [value]
                }, () => {
                    this.props.onChange ? this.props.onChange([value]) : '';
                });

            } else {

                let splice;

                this.state.text.map(function (textItem, i) {
                    if (text == textItem) {
                        splice = i;
                    }
                });

                let texts = this.state.text.slice();
                let values = this.state.value.slice();

                if (splice || splice == 0) {
                    texts.splice(splice, 1);
                    values.splice(splice, 1);
                } else {
                    texts.push(text);
                    values.push(value);
                }

                this.setState({
                    text: texts,
                    value: values
                }, () => {
                    this.props.onChange ? this.props.onChange(values) : '';
                });

            }
        }

        this.refs.comboSelect.getElementsByClassName('combo-select-required-select')[0].value = text;
    }

    /**
     * Control scrolling within open menu with arrowZ
     */
    controlScrolling() {

        let paddingTop = parseInt(this.refs.comboSelect.getElementsByClassName('combo-select-body')[0].style.paddingTop.replace('px', ''));
        let paddingBottom = parseInt(this.refs.comboSelect.getElementsByClassName('combo-select-body')[0].style.paddingBottom.replace('px', ''));

        paddingTop = paddingTop > -1 ? paddingTop : 0;
        paddingBottom = paddingBottom > -1 ? paddingBottom : 0;

        let windowHeight = this.refs.comboSelect.getElementsByClassName('combo-select-body')[0].clientHeight - paddingTop - paddingBottom;
        let focus = this.focus;
        let elementHeight = this.refs.comboSelect.getElementsByClassName('combo-select-item')[this.focus].clientHeight;
        let elementOffsetTop = this.refs.comboSelect.getElementsByClassName('combo-select-item')[this.focus].offsetTop - paddingTop;
        let elementCountPerWindow = Math.floor(windowHeight / elementHeight);
        let scrollTop = this.refs.comboSelect.getElementsByClassName(specialClass)[0].scrollTop;

        if (elementOffsetTop > windowHeight + scrollTop - elementHeight) {
            this.refs.comboSelect.getElementsByClassName(specialClass)[0].scrollTop = elementOffsetTop - (elementCountPerWindow - 1) * elementHeight;
        } else if (elementOffsetTop < scrollTop) {
            this.refs.comboSelect.getElementsByClassName(specialClass)[0].scrollTop = elementOffsetTop;
        } else if (focus == 0) {
            this.refs.comboSelect.getElementsByClassName(specialClass)[0].scrollTop = 0;
        }

        if (this.focus - 1 > -1) {
            this.refs.comboSelect.getElementsByClassName('combo-select-item')[this.focus - 1].style.backgroundColor = ''
        }

        this.refs.comboSelect.getElementsByClassName('combo-select-item')[this.focus].style.backgroundColor = '#f7f7f7';

        if (this.state.data && this.focus + 1 < this.state.data.length) {
            this.refs.comboSelect.getElementsByClassName('combo-select-item')[this.focus + 1].style.backgroundColor = ''
        }
    }

    /**
     * Event for eny keypress once menu is open
     * @param event
     */
    globalKeyDown(event) {
        if (this.open) {

            switch (event.keyCode) {
                case 38:
                    // Up
                    event.preventDefault();
                    this.focus = this.focus < 1 ? this.state.data.length - 1 : this.focus - 1;
                    this.controlScrolling();
                    break;
                case 40:
                    // Down
                    event.preventDefault();
                    this.focus = this.focus == this.state.data.length - 1 ? this.focus = 0 : this.focus + 1;
                    this.controlScrolling();
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
                    this.selectItem(this.state.data[this.focus]);
                    break;
                case 13:
                    // Enter
                    event.preventDefault();
                    this.selectItem(this.state.data[this.focus]);
                    break;
                case 9:
                    // Tab
                    event.preventDefault();
                    break;
                case 27:
                    // Escape
                    event.preventDefault();
                    this.toggleMenu();
                    break;
            }
        }
    }

    mapAllData(data) {

        let mappedData = [];

        if (data) {
            data.map(function (item) {
                mappedData.push(this.mapSingleData(item));
            }.bind(this));
        }

        return mappedData;
    }

    mapSingleData(item) {

        let text = '';
        let value = '';

        if (typeof item == 'object') {

            if (this.map.value === true) {
                text = item[this.map.text];
                value = item;
            } else {
                text = item[this.map.text];
                value = item[this.map.value];
            }

        } else {

            text = item;
            value = item;

        }

        return {text: text, value: value}
    }

    render() {
        let head = this._generateHead();
        let body = this._generateBody();

        return (
            <div ref="comboSelect" className="combo-select">
                {head}
                <div style={{display: 'none'}} className="combo-select-body-holder">{body}</div>
            </div>
        );
    }
}

ComboSelect
    .propTypes = {
    text: React.PropTypes.any,
    search: React.PropTypes.string,
    type: React.PropTypes.string,
    icon: React.PropTypes.string,
    iconSelectInactive: React.PropTypes.any,
    iconSelectActive: React.PropTypes.any,
    data: React.PropTypes.array.isRequired,
    onChange: React.PropTypes.func,
    map: React.PropTypes.object,
    sort: React.PropTypes.string,
    controls: React.PropTypes.bool,
    value: React.PropTypes.any,
    disabled: React.PropTypes.bool,
    onToggle: React.PropTypes.func
};