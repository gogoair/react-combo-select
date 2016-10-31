# react-combo-select
React dropdown for select and multiselect 

## LATEST
- Text is also returned with value for onToggle() and onChange() callbacks. 

```javascript
let standardArray = ["win-JA007D", "win-JA0008D", "win-JA009D"];
<ComboSelect text="-Select me-" type="multiselect" data={standardArray} sort="alphanum"/>
```


## Usability
This plugin require for you to have react and font-awesome, after that import react combo select
```javascript
import ComboSelect from 'react-combo-select';
```
and include css files with styles and font awesome (you may include this in different way)
```javascript
require('../node_modules/react-combo-select/style.css');
require('../node_modules/font-awesome/css/font-awesome.min.css');
```

## props/options

### data
Actual data you want to show, this is an array of either object, strings or numbers. Array or array won't work

```javascript
let standardArray = ["JA007D", "JA008D", "JA009D", "JA010D"];

<ComboSelect data={standardArray}/>
```

### text
Text will be displayed as somehintg you have selected or set as a start value, default for this is "-Select me-"

```javascript
let standardArray = ["JA007D", "JA008D", "JA009D", "JA010D"];

<ComboSelect text="-Select me-" data={standardArray}/>
```

```javascript
let arrayWithObjects = [
            {text: "air-JA007D", win: "win-JA007D", value: "JA007D"},
            {text: "air-JA008D", win: "win-JA008D", value: "JA008D"},
            {text: "air-JA009D", win: "win-JA009D", value: "JA009D"},
            {text: "air-JA107D", win: "win-JA107D", value: "JA010D"}
        ];

<ComboSelect data={arrayWithObjects}/>
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
Returns function, which will return value that you have picked. It can work with returning just values you have selected, or whole objects if can you need to pass them around

```javascript    
fakeFunction(value, text) {
    console.log(value, text);
}

let standardArray = ["JA007D", "JA008D", "JA009D", "JA010D"];

<ComboSelect text="-Select me-" type="multiselect" data={standardArray} onChange={this.fakeFunction}/>
```

### onToggle 
Function that emit event for opening and closing menu. Returns boolean, true for open, false for close and value which is all selected values

```javascript    
fakeToggle(open, value, text) {
    console.log(open, value, text);
}

let standardArray = ["JA007D", "JA008D", "JA009D", "JA010D"];

<ComboSelect text="-Select me-" type="multiselect" data={standardArray} onToggle={this.fakeFunction}/>
```

### search 
Search through data, will show only data that contain string from search bar. On, off (default), smart (search will be shown only if there is more items then can be shown in window)

```javascript

let standardArray = ["JA007D", "JA008D", "JA009D", "JA010D", "JA219J", "JA302J", "JA306J", "JA308J", "JA309J", "JA311J", "JA313J", "JA314J", "JA316J", "JA318J", "JA319J", "JA322J", "JA324J", "JA325J", "JA326J"];

<ComboSelect type="select" data={standardArray} search="smart"}/>
```

### map
If you want to display data from objects, use map! You need to define object with key objects text and value. Text will be the one you display as a text, and value is returning in a onChange function as a paramater. If you want to return whole object, put value=true (boolean). Default is ```map={text: 'text', value: 'value'}```, which means you will have collection of objects, and on select value will be returned and text will be shown in select.

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
You can sort data, numbers, alphanumercial (alphanum) or don't sort at all. By the default, it will sort strings, but only if the parameters in value are strings

```javascript

// Proper sorting 
let nummericArray = [3, 1, 11, 111, 21, 32, 14, 32, 442];
<ComboSelect text="-Select me-" type="multiselect" data={nummericArray} sort="number"/>
let standardArray = ["DDD", "CCC", "BBB", "AAA"];
<ComboSelect text="-Select me-" type="multiselect" data={standardArray} sort="string"/>
let standardArray = ["win-JA007D", "win-JA0008D", "win-JA009D"];
<ComboSelect text="-Select me-" type="multiselect" data={standardArray} sort="alphanum"/>

```

### Active and inactive icons
Can be default, custom or off. For custom just put class that you want, and it would be assigned to icon class. For default, just leave as is. And for off use false or 'off'

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