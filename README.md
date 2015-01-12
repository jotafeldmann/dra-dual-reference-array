# Mesmerize
Process a array, binding a property value as identifier, making it accessable through the index AND the identifier

## What it must do
Take a collection (a array with objects); a common property of the collection, with a unique string value; and make the collection accessable by it index (the default way) AND it string value, like a property.

It uses the following JavaScript´s capabilities:

- Set/Get a object´s property in the Array form;
- When a Array got it value from another array, it portion of memory is a link to the another array. So, when its value change, the other array´s value change too;
- Bonus: it´s keep the integrity length of the Array.
 

## TODO

- Error throwing;
- Treat double indexes property (maybe a dev function parameter to solve, with default strategy, like '_' or cardinal);
- Treat reserved name property (again, same as before);
- Convert to module/extension/closure pattern;
- Make it snippet-friendly;
- Laugh about the complexity of it and the problems about.

## Example

```
var
  types = [ // Our array
    {
      id : 0,
      token : 'standard', // It´s a common property, with unique values
      label : 'Standard Type',
      data : { dummy : 'whoomy' }
    },
    {
      id : 1,
      token : 'another', // Again
      label : 'Another Happy Type'
    }
  ]
;

// At this time, I just can access the array, trough the index
console.log ( types[0] ); // Display Object {...}

// Now, the magic
Mesmerize ( types , "token" );

// Then, the same array is accessable by its property
console.log ( types.standard ); //  Display Object {...}

// If some property is changed, its reflects in both ways
types.standard.label = 'Label changed';
console.log ( types.standard.label , types[0].label ); // Display 'Label changed' , 'Label changed';

// The versa is the same
types[0].label = 'Label again';
console.log ( types.standard.label , types[0].label ); // Display 'Label again' , 'Label again';

// and the object comparison
types[0] === types.standard // Display True

// BONUS: it´s keep the length untouched
types.length // Display 2

```

