# react-combo-select
React dropdown for select and multiselect 

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

### text
Text will be displayed as somehintg you have selected or set as a start value, default for this is "-Select me-"

```javascript  
<ComboSelect text="-Select me-" data="['Pick me!', 'NO! Pick me']"/>
```

### data
Actual data you want to show, this is an array of either object, strings or numbers. Array or array won't work

```javascript
let standardArray = ["JA007D", "JA008D", "JA009D", "JA010D"];

<ComboSelect data="standardArray"/>
```

```javascript
let arrayWithObjects = [
            {text: "air-JA007D", win: "win-JA007D", value: "JA007D"},
            {text: "air-JA008D", win: "win-JA008D", value: "JA008D"},
            {text: "air-JA009D", win: "win-JA009D", value: "JA009D"},
            {text: "air-JA107D", win: "win-JA107D", value: "JA010D"}
        ];

<ComboSelect data="arrayWithObjects"/>
```

### type 
Select or multiselect, self explanatory

```javascript
let standardArray = ["JA007D", "JA008D", "JA009D", "JA010D", "JA219J", "JA302J", "JA306J", "JA308J", "JA309J", "JA311J", "JA313J", "JA314J", "JA316J", "JA318J", "JA319J", "JA322J", "JA324J", "JA325J", "JA326J"];

// Pick one
<ComboSelect data="standardArray" type="select"/>

// Or just
<ComboSelect data="standardArray"/>

// Pick multiple
<ComboSelect data="standardArray" type="multiselect"/>
```

### onChange 
Return function, which will return value that you have picked. It can work with returning just values you have selected, or whole objects if can you need to pass them around

```javascript    
fakeFunction(value) {
    console.log(value);
}

let standardArray = ["JA007D", "JA008D", "JA009D", "JA010D"]];

<ComboSelect text="-Select me-" type="multiselect" data={standardArray} onChange={this.fakeFunction}/>
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
fakeFunction(value) {
    console.log(value) // this will display key object win and key object with text will be shown in tn select.
}

<ComboSelect data={arrayWithObjects} map={text: 'text', value: 'win'} onChange={this.fakeFunction}/>

// Whole object
fakeFunctionObject(value) {
    console.log(value) // this will display {text: "air-JA007D", win: "win-JA007D", value: "JA007D"} and key object with text will be shown in tn select.
}

<ComboSelect data={arrayWithObjects} map={text: 'text', value: true} onChange={this.fakeFunctionObject}/>
```

### sort
You can sort data, numbers, or don't sort at all. By the default, it will sort strings, but only if the parameters in value are strings

```javascript

// Proper sorting 
let nummericArray = [3, 1, 11, 111, 21, 32, 14, 32, 442];
<ComboSelect text="-Select me-" type="multiselect" data={nummericArray} sort="number"/>
let standardArray = ["DDD", "CCC", "BBB", "AAA"];
<ComboSelect text="-Select me-" type="multiselect" data={standardArray} sort="string"/>

// Nothing will happen
let standardArray = ["DDD", "CCC", "BBB", "AAA"];
<ComboSelect text="-Select me-" type="multiselect" data={standardArray} sort="off"/>
let standardArray = ["DDD", "CCC", "BBB", "AAA"];
<ComboSelect text="-Select me-" type="multiselect" data={standardArray} sort="number"/>
let nummericArray = [3, 1, 11, 111, 21, 32, 14, 32, 442];
<ComboSelect text="-Select me-" type="multiselect" data={nummericArray} sort="string"/>
```


## DONE
- Create build using babel, webpack, eslint
- Create development environment
- Connect git repo
- Connect with npm, write scripts for prepublish and postpublish
- Create "test" tests lol
- Create UI for head, props ```value``` v0.4 -> CHANGED to ```text```
- Create UI for menu, props ```data```
- If you click somewhere else, close all open select's but one that you click (if you clicked one) - THIS WASN'T EASY, curses for react evens are propagating after javascript ones!!
- Disable scroll outside of select if menu is open - THIS WASNT EASY EITHER, but came to most elegant solution EVAR!! Long live css
- Direction of menu opening - prefers bottom then top, but will open on top if there are a lot more space there
- Control using arrows and some keys like space and enter
- Scrolling while using arrows within menu
- Select single items, props ```type="select"```, default, if you put wrong one, it will still use select
- Select multiple items, props ```type="multiselect"```
- Create return value, props ```onChange="this.functionThatYouUse()"```
- Create support for search, props ```search```
- Optimize "intelligence" on opening menu and scroll, you can now use smart search which will open search only if there are more items that are opened in the screen
- Make it work with collection of objects, which can be mapped, props ```map```
- Actual select within, so that it can be used as required in html forms, you can use tab also :) but there are no styles for "focused" yes
- Got some issue with classes on multiple selector, this should be fixed, but we need to take a look at it
- Sorting, alphabetical and numeric ```sort```

## TODO: until 7. May 2016, warm welcome for version 1.0.0
- Commands clear all and check all
- Custom icons in search instead of just font-awesome (this is currently needed for project), remove icons for single select
- MOAR Testing

## TODO: Happy future
- Display images, videos, icons, links