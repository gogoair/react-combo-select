# react-combo-select

React dropdown for select and multiselect

[![npm version](https://badge.fury.io/js/react-combo-select.svg)](http://badge.fury.io/js/react-combo-select)

## Usability

react-combo-select requires react and react-dom as peer dependency. All versions should be supported, but make sure you are using matching versions of the two packages.

```javascript
import ComboSelect from 'react-combo-select';
```

and include css files with styles (you may include this in different way)

```javascript
require('../node_modules/react-combo-select/style.css');
```

As of version 1.2, font-awesome is no longer required, but may be optionally used instead of built-in SVG icons. Check the "custom icons" section below for more details.

## props/options

### data

Actual data you want to show, this is an array of either object, strings or numbers. Array or array won't work

```javascript
let standardArray = ['JA007D', 'JA008D', 'JA009D', 'JA010D'];

<ComboSelect data={standardArray} />;
```

### text, defaultText

Text will be displayed as something you have selected or set as a start value, for this example it's "-Select me-".
If you dont provide `defaultText` or `text` prop, value by default is 'Select'. `text` have greater specificity than `defaultText`

```javascript
let standardArray = ['JA007D', 'JA008D', 'JA009D', 'JA010D'];

<ComboSelect text="-Select me-" data={standardArray} />;
```

```javascript
let arrayWithObjects = [
	{ text: 'air-JA007D', win: 'win-JA007D', value: 'JA007D' },
	{ text: 'air-JA008D', win: 'win-JA008D', value: 'JA008D' },
	{ text: 'air-JA009D', win: 'win-JA009D', value: 'JA009D' },
	{ text: 'air-JA107D', win: 'win-JA107D', value: 'JA010D' },
];

<ComboSelect data={arrayWithObjects} />;
```

### type

Select or multiselect, self explanatory

```javascript
let standardArray = ["JA007D", "JA008D", "JA009D", "JA010D", "JA219J", "JA302J", "JA306J", "JA308J", "JA309J", "JA311J", "JA313J", "JA314J", "JA316J", "JA318J", "JA319J", "JA322J", "JA324J", "JA325J", "JA326J"];

// Pick one
<ComboSelect data={standardArray} type="select"/>

// Or just
<ComboSelect data={standardArray}/>

// Pick multiple
<ComboSelect data={standardArray} type="multiselect"/>
```

### onChange

Function to be called when an option is selected. It will receive value and display text of the selected item, in that order, as arguments.

```javascript
fakeFunction(value, text) {
    console.log(value, text);
}

let standardArray = ["JA007D", "JA008D", "JA009D", "JA010D"];

<ComboSelect text="-Select me-" type="multiselect" data={standardArray} onChange={this.fakeFunction}/>
```

### onToggle

Function to be called when the dropdown menu is opened or closed. It will receive open/closed state as boolean, value and display text of the selected item, in that order, as arguments.

```javascript
fakeToggle(open, value, text) {
    console.log(open, value, text);
}

let standardArray = ["JA007D", "JA008D", "JA009D", "JA010D"];

<ComboSelect text="-Select me-" type="multiselect" data={standardArray} onToggle={this.fakeFunction}/>
```

### search

Whether to render a filter field at the top of the dropdown. Allowed values: On, off (default), smart (search will be shown only if there is more items then can be shown in window)

```javascript
let standardArray = ["JA007D", "JA008D", "JA009D", "JA010D", "JA219J", "JA302J", "JA306J", "JA308J", "JA309J", "JA311J", "JA313J", "JA314J", "JA316J", "JA318J", "JA319J", "JA322J", "JA324J", "JA325J", "JA326J"];

<ComboSelect type="select" data={standardArray} search="smart"}/>
```

### map

If you want to display data from objects, use map! You need to define object with properties text and value. Text will be the one you display as a text, and value is returning in a onChange function as the first argument. If you want to return the whole object, put value=true (boolean). Default is `map={text: 'text', value: 'value'}`, which means you will have collection of objects, and on select value will be returned and text will be shown in select.

```javascript
let arrayWithObjects = [
            {text: "air-JA007D", win: "win-JA007D", value: "JA007D"},
            {text: "air-JA008D", win: "win-JA008D", value: "JA008D"},
            {text: "air-JA009D", win: "win-JA009D", value: "JA009D"},
            {text: "air-JA107D", win: "win-JA107D", value: "JA010D"}
        ];

// Key object
fakeFunction(value, text) {
    console.log(value, text) // this will display key object win and key object with text will be shown in tn select.
}

<ComboSelect data={arrayWithObjects} map={text: 'text', value: 'win'} onChange={this.fakeFunction}/>

// Whole object
fakeFunctionObject(value, text) {
    console.log(value, text) // this will display {text: "air-JA007D", win: "win-JA007D", value: "JA007D"} and key object with text will be shown in tn select.
}

<ComboSelect data={arrayWithObjects} map={text: 'text', value: true} onChange={this.fakeFunctionObject}/>


// Map through function, you allways get item, and have to return value
selectText: function(item){
    return item.hereIs.objectFor.text
}

// function
fakeFunctionObject(value, text) {
    console.log(value, text) // this will display {text: "air-JA007D", win: "win-JA007D", value: "JA007D"} and key object with text will be shown in tn select.
}

<ComboSelect data={arrayWithObjects} map={text: this.selectText, value: true} onChange={this.fakeFunctionObject}/>
```

### sort

You can sort as data, numbers, alphanumercial (alphanum) or not sort at all. By default, it will sort as strings, but only if the parameters in value are strings.

```javascript
// Proper sorting
let nummericArray = [3, 1, 11, 111, 21, 32, 14, 32, 442];
<ComboSelect text="-Select me-" type="multiselect" data={nummericArray} sort="number" />;
let standardArray = ['DDD', 'CCC', 'BBB', 'AAA'];
<ComboSelect text="-Select me-" type="multiselect" data={standardArray} sort="string" />;
let standardArray = ['win-JA007D', 'win-JA0008D', 'win-JA009D'];
<ComboSelect text="-Select me-" type="multiselect" data={standardArray} sort="alphanum" />;
```

### Active and inactive icons

Can be default, custom or off. For custom just put class that you want, and it would be assigned to the i DOM element. For default, just leave as is. false or off will render no icons.

```javascript
let standardArray = ["JA007D", "JA008D", "JA009D", "JA010D"];

<ComboSelect type="multiselect" data={this.state.data} value={this.state.data[1]} iconSelectInactive={false} iconSelectActive={false}/>
<ComboSelect type="multiselect" data={this.state.data} value={this.state.data[1]} iconSelectInactive={'fa fa-check-circle'} iconSelectActive={'fa fa-check-circle'}/>
<ComboSelect type="multiselect" data={this.state.data} value={this.state.data[1]}/>
```

### disabled

Self explanatory

```javascript
let standardArray = ["JA007D", "JA008D", "JA009D", "JA010D"];

<ComboSelect type="multiselect" data={this.state.data} value={this.state.data[1]} disabled}/>
```

### scrollHeight, scrollMaxHeight and prefferedDirection

scrollHeight lets you choose height of the scrollable options area. Similarily, scrollMaxHeight will set max-height.
Both of those props require preferredDirection prop, which allows you to choose the direction in which the dropdown opens.

```javascript
const heightProps = {
    scrollHeight: 200, // number
    preferredDirection: 'down' // 'top' | 'down'
};

const maxHeightProps = {
    scrollMaxHeight: 100, // number
    preferredDirection: 'top' // 'top' | 'down'
};

<ComboSelect type="multiselect" data={this.state.data} value={this.state.data[1]} {...heightProps} />

<ComboSelect type="select" data={this.state.data} value={this.state.data[1]} {...maxHeightProps} />
```

### data attributes

Added dataAttr prop used to pass html5 data attributes to DOM elements. The value of the prop should be an object mapping some or all of the 3 supported elements to data attributes that should be added to them. Each data attribute is specified as string which will be appended to 'data-' to form the attribute name.

Each property can be a string or a transform function.

For each dataAttr property of type function only one argument is forwarded to that function:

- wrapper: `Component.props`
- dropDownHeader: `Component.props`
- listItem: `Component.props.data[index]`

```javascript
<ComboSelect type="multiselect" data={this.state.data}
    dataAttr={{
        wrapper: {
            automation: 'ComboSelect'
        },
        dropDownHeader: {
            automation: 'ComboSelectHeader'
        },
        listItem: {
            automation: item => item && 'ComboSelectItem_' + item.text
        }
    }}
```

### custom icons

Out of the box ComboSelect is using custom SVG icons that can be overriden by specifing new classes for i elements using props: `icon`, `iconSelectActive`, `iconSelectInactive`.

```javascript
<ComboSelect icon="fa fa-chevron-down" iconSelectInactive="fa fa-circle-thin" iconSelectActive="fa fa-check" />
```

### `resetValues` method

Resets values in currently selected ComboSelect instance. You have an example og how to set it up in `DemoComponent.jsx`.

### Option groups

Groups can be enabled by adding `groups` prop to the ComboSelect. They will work both in single select and in multiselect mode.

> NOTE: For now, groups are only working with 'string' and 'number' sorting.

```javascript
<ComboSelect type="multiselect" groups data={this.state.groups} />
```

Groups have to be passed down to component in specific format so that it can render properly. Initial data should look like this:

```js
{ 
	// Mandatory group name
	groupName: 'Other',
	// and array of options
	options: [
		{
			text: 'Option 1 Text',
			value: 'Option 1 Value',
		},
		{
			text: 'Option 2 Text',
			value: 'Option 2 Value',
		},
	],
},
```

Data will be further transformed so that it can be rendered once passed down to ComboSelect. Groups support numeric and string sorts and search/filter functionality.
