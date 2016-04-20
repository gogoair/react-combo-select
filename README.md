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

props for:
- value -> this is what you have selected
- data -> Actual data you want to show, this is an array
- type -> select or multiselect, self explanatory
- onChange -> callback function, which will return value that you have picked
- search -> on, off (default), smart (search will be shown only if there is more items then can be shown in window)

```javascript    
fakeFunction(value) {
    console.log(value);
}

let standardArray = ["JA007D", "JA008D", "JA009D", "JA010D", "JA219J", "JA302J", "JA306J", "JA308J", "JA309J", "JA311J", "JA313J", "JA314J", "JA316J", "JA318J", "JA319J", "JA322J", "JA324J", "JA325J", "JA326J"]];
```

```javascript  
<ComboSelect value="-Select me-" type="multiselect" data={standardArray} onChange={this.fakeFunction} search="on"/>
```

## TODO: until 7. May 2016
- Make it work with collection of objects, which can be mapped
- Actual input within, so that it can be used as required in html forms
- Sorting, alphabetical and numeric
- MOAR Testing

## TODO: Happy future
- Display images, videos, icons, links
- Custom icons in search instead of just font-awesome (this is currently needed for project)