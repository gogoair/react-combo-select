import React, { Component } from 'react';
import ComboSelectItem from './ComboSelectItem.jsx';

let specialClass = 'combo-select-body-scroll';

export default class ComboSelect extends Component {

    constructor(props) {
        super(props);

        this.focus = -1;

        this.state = {
            text: props.text ? props.text : '-Select me-',
            open: false,
            type: props.type && (props.type == 'select' || props.type == 'multiselect') ? props.type : 'select',
            icon: props.icon ? props.icon : 'fa fa-chevron-circle-down',
            selected: -1,
            originalPosition: document.body.style.position,
            originalOverflowY: document.body.style.overflowY,
            originalWidth: document.body.style.width,
            data: this.sortData(this.props.data),
            selectedData: [],
            search: this.props.search && (this.props.search == 'on' || this.props.search == 'smart' || this.props.search == 'off') ? this.props.search : 'off',
            map: this.props.map && this.props.map.text && this.props.map.value && this.props.map.value.length > 0 ? this.props.map : {
                value: 'value',
                text: 'text'
            }
        }
    }

    componentDidMount() {

        window.addEventListener('keydown', (event) => {
            this.globalKeyDown(event);
        });

        // Event for real select within select, this is needed for "required" attribute since it cannot be attached to the non-form elements
        this.refs.comboSelect.getElementsByClassName('combo-select-required-select')[0].addEventListener('keydown', (event) => {
            this.requiredSelectKeydown(event);
        });

        window.addEventListener('click', (event) => {
            this.globalMouseClick(event);
        });

        this.refs.comboSelect.getElementsByClassName(specialClass).scrollTop = 0;
    }

    componentWillUnmount() {
        window.removeEventListener('keydown', this.globalKeyDown);
        window.removeEventListener('click', this.globalMouseClick);
    }

    componentWillReceiveProps(newProps) {
        this.setState({
            text: newProps.text ? newProps.text : this.state.text,
            data: this.sortData(newProps.data)
        });
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


        let map = this.state.map && this.state.map.text ? this.state.map.text : false;

        let options = this.state.data.map(function (item, i) {
            return typeof item == 'object' ? <option key={i} value={item[map]}>{item[map]}</option> :
                <option key={i} value={item}>{item}</option>
        });


        var {data, type, onChange, search, value, ...other } = this.props;

        head = (<div onClick={() => this.toggleMenu()}>
            <div className="combo-select-head">{text ? text : '-Select me-'}<i className={this.state.icon}></i>
            </div>
            <select className="combo-select-required-select">
                <option value=""></option>
                {options}
            </select>
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
                (this.focus == i) ? focused = true : '';

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

        let search = this.ifSearch(style) ?
            (<input type="text" style={style ? style.search : {}}
                    className="search-input"
                    onChange={() => this.filterBySearch()}/>)
            : '';

        let controls = this.props && this.state.type == 'multiselect' ? (
            <div style={style ? style.controls : {}} className="combo-select-controls">
                <a href="#" onClick={(event) => this.selectAll(event)}>yay</a>
                <a href="#" onClick={(event) => this.selectAll(event)}>nay</a>
            </div>
        ) : '';

        return (
            <div>
                {search}
                <div className="combo-select-body" style={style ? style.body : {}}>
                    <div style={style ? style.scroll : {}} className="combo-select-body-scroll">
                        {body && body.length > 0 ? body : (
                            <div className="combo-select-item">There is no eligible items</div>)}
                    </div>
                </div>
                {controls}
            </div>
        );
    }

    /**
     * Select all items
     * @param event
     */
    selectAll(event) {
        event.preventDefault();
        let data = this.state.data.slice();
        let workingData = [];


        let dataType = this.checkDataType();

        for (let i in data) {
            let isIn = false;
            for (let j in this.state.selectedData) {

                if ((dataType == 'object' ? this.state.data[i][this.state.map.value] : this.state.data[i]) == this.state.selectedData[j]) {
                    isIn = true;
                }

            }

            !isIn ? workingData.push(data[i]) : '';
        }

        this.selectItem(workingData)
    }

    /**
     * Should search be shown or not?
     * @param style
     * @returns {boolean|*|NodeList}
     */
    ifSearch(style) {
        return this.state.search == 'on' || (this.state.search == 'smart' && (!style || style.scroll.height != 'auto' || (this.refs.comboSelect.getElementsByClassName('search-input') && this.refs.comboSelect.getElementsByClassName('search-input')[0] && this.refs.comboSelect.getElementsByClassName('search-input')[0].value && this.refs.comboSelect.getElementsByClassName('search-input')[0].value.length > 0)));
    }

    /**
     * Sort data alphabetically or numerically
     * @param data
     * @returns {*}
     */
    sortData(data) {

        let sortedData = data;
        let sort = this.props.sort ? this.props.sort : 'string';

        if (sort == this.checkDataType()) {

            if (sort == 'string') {

                sortedData = data.sort();

            } else if (sort == 'number') {

                sortedData = data.sort(function (a, b) {
                    return a - b;
                })

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
        let selected = [];

        for (let i in this.props.data) {

            if (this.props.data[i].toString().toLowerCase().indexOf(filter.toLowerCase()) > -1) {
                data.push(this.props.data[i]);
            }

        }

        for (let j in data) {
            if (this.state.type == 'multiselect') {

                for (let k in this.state.selectedData) {
                    if (data[j] == this.state.selectedData[k]) {
                        selected.push(j);
                    }
                }

            } else {

                if (data[j] == this.state.selectedData) {
                    selected.push(j);
                }

            }
        }


        this.setState({
            data: data,
            selected: selected
        });
    }

    /**
     * On any keydown, but tab, that is pressed on inner required select disable it and open custom select
     * @param event
     */
    requiredSelectKeydown(event) {

        if (event.keyCode == 38 || event.keyCode == 40 || event.keyCode == 32) {
            event.preventDefault();

            this.setState({
                open: true
            });

            this.refs.comboSelect.getElementsByClassName('combo-select-required-select')[0].blur();
        }
    }

    /**
     * Open/close menu, with overflow hidden
     * TODO: now it hides scroll and move screen on right to avoid movement, disable it on screens without scroll
     */
    toggleMenu() {
        var comboSelect = this.refs.comboSelect;

        if (!this.state.open) {
            document.body.style.overflowY = 'scroll';
            document.body.style.position = 'fixed';
            document.body.style.width = '100%';
        } else {
            document.body.style.overflowY = this.state.originalOverflowY;
            document.body.style.position = this.state.originalPosition;
            document.body.style.width = this.state.originalWidth;
        }

        this.setState({open: !this.state.open}, () => {

            if (this.state.open && comboSelect.getElementsByClassName('search-input') && comboSelect.getElementsByClassName('search-input').length > 0) {
                comboSelect.getElementsByClassName('search-input')[0].focus();
            } else {
                comboSelect.getElementsByClassName('combo-select-required-select')[0].focus();
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
        let text, value;
        let dataType = this.checkDataType();
        let selectAll = false;

        //console.log(this.state.selectedData);
        //console.log(this.state.selected);
        //console.log(this.state.text);

        if (item) {

            if (dataType == 'object') {

                if (item.length > 0) {
                    text = [];
                    value = [];
                    for (let i in item) {
                        text.push(item[i][this.state.map.text]);
                        value.push(item[i][this.state.map.value]);
                    }
                    selectAll = true;
                } else {
                    text = item[this.state.map.text];
                    value = item[this.state.map.value];
                }

            } else {
                text = item;
                value = item;
            }

            if (selectAll) {
                let texts = [];
                let value = [];
                let countArray = [];

                for (let i in this.state.data) {
                    texts.push(this.state.data[i][this.state.map.text]);
                    value.push(this.state.data[i][this.state.map.value]);
                    countArray.push(i);
                }

                this.setState({
                    text: texts,
                    selected: countArray,
                    selectedData: value
                }, () => {
                    this.props.onChange ? this.props.onChange(value) : '';
                });

            } else if (this.state.type == 'select') {

                this.setState({text: text, selected: [this.focus], selectedData: value}, () => {
                    this.toggleMenu();
                    this.props.onChange ? this.props.onChange(value) : '';
                });

            } else {

                if (typeof this.state.text == 'string') {

                    this.setState({
                        text: [text],
                        selected: [this.focus],
                        selectedData: [value]
                    }, () => {
                        this.props.onChange ? this.props.onChange(value) : '';
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
                        selected.push(this.focus);
                        selectedData.push(value);
                    }

                    this.setState({
                        text: texts,
                        selected: selected,
                        selectedData: selectedData
                    }, () => {
                        this.props.onChange ? this.props.onChange(selectedData) : '';
                    });

                }
            }

            this.refs.comboSelect.getElementsByClassName('combo-select-required-select')[0].value = text;
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

        if (hideMenu && target.className != 'combo-select-item' && target.className != 'combo-select-item selected') {
            this.setState({open: false});
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
        ;
        this.refs.comboSelect.getElementsByClassName('combo-select-item')[this.focus].style.backgroundColor = '#f7f7f7';
        if (this.state.data && this.focus + 1 < this.state.data.length) {
            this.refs.comboSelect.getElementsByClassName('combo-select-item')[this.focus + 1].style.backgroundColor = ''
        }
        ;
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
                    this.focus = this.focus < 1 ? this.state.data.length - 1 : this.focus - 1;
                    this.controlScrolling();
                    break;
                case 40:
                    // Down
                    event.preventDefault();
                    this.focus = this.focus == this.props.data.length - 1 ? this.focus = 0 : this.focus + 1;
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
                    this.selectItem(this.props.data[this.focus]);
                    break;
                case 13:
                    // Enter
                    event.preventDefault();
                    this.selectItem(this.props.data[this.focus]);
                    break;
                case 9:
                    // Tab
                    event.preventDefault();
                    break;
                case 27:
                    // Escape
                    event.preventDefault();
                    this.setState({open: false});
                    this.refs.comboSelect.getElementsByClassName('combo-select-required-select')[0].focus();
                    break;
            }
        }
    }

    /**
     * Check data type
     * @returns {string}
     */
    checkDataType() {
        return this.props.data && this.props.data[0] ? typeof this.props.data[0] : 'string';
    }

    render() {
        let dataType = this.checkDataType();

        let head = this._generateHead();
        let body = this._generateBody(dataType);

        return (
            <div ref="comboSelect" className="combo-select">
                {head}
                <div style={this.state.open && !this.props.disabled ? {} : {display: 'none'}}>{body}</div>
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
    data: React.PropTypes.array.isRequired,
    onChange: React.PropTypes.func,
    map: React.PropTypes.object,
    sort: React.PropTypes.string,
    controls: React.PropTypes.bool,
    value: React.PropTypes.any,
    disabled: React.PropTypes.bool
};