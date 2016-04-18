# react-combo-select
React dropdown for select and multiselect 

## Usability
Import react combo select
```javascript
import ComboSelect from 'react-combo-select';
```
and include css files with styles and font awesome (you may include this in different way)
```javascript
require('../node_modules/react-combo-select/style.css');
require('../node_modules/font-awesome/css/font-awesome.min.css');
```

props for:
value -> this is what you have selected
type -> select or multiselect, self explanatory
onChange -> callback function, which will return value that you have picked

```javascript    
fakeFunction(value) {
    console.log(value);
}
```

```javascript  
<ComboSelect value="-Select me-" type="multiselect" data={standardArray} onChange={this.fakeFunction}/>
```

## TODO:

There are still some things that need to be added:
- Autocomplete (with on and off)
- Actual input within, so that it can be used as required in html forms