# Tokenizer
Makes a collection's value available through a property´s unique value, keeping the index untouched. This is just a case, not a API neither a framework. I never seen something like this before, so decided to doc.

## What it must do
Take a collection (a array with objects); a common property of the collection, with a unique string value; and return a new array, with the collection available by it index (the default way) AND it string value, like a property.

It uses the following JavaScript's capabilities:

- Set/Get a object's property in the Array form;
- When a Array got it value from another array, the portion of memory is a link to the another array. So, when that value change, the other array's value change too;
- Bonus: it's keep the integrity of Array's length.

## TODO

- Error throwing;
- Treat double indexes property: by default, duplicate indexes must generate a property with a array (obj.token[0], obj.token[1]) and allow a function parameter for custom solutions;
- Treat a property with a reserved word: by default, properties with reserved words must be converted to use "_"  (underscore) in the first char place and allow a function parameter for custom solutions;
- Convert to module/extension/closure pattern;
- Make it snippet-friendly;
- Laugh about the complexity and the problems about it :D

## Example

```
var
  types = [ // Our array
    {
      id : 0,
      token : 'standard', // It's a common property, with unique values
      label : 'Standard Type',
      data : { dummy : 'whoomy' }
    },
    {
      id : 1,
      token : 'another', // Again
      label : 'Another happy Type'
    }
  ]
;

// At this time, I just can access the array, through the index
console.log ( types[0] ); // Object {...}

// Now, the magic
types = Tokenizer ( types , 'token' );

// Then, the same array is available by it's property
console.log ( types.standard ); // Object {...}

// If some property is changed, the change is reflected in both ways
types.standard.label = 'Label changed';
console.log ( types.standard.label , types[0].label ); // 'Label changed' , 'Label changed';

// The versa is the same
types[0].label = 'Label again';
console.log ( types.standard.label , types[0].label ); // 'Label again' , 'Label again';

// And the object comparison remains
types[0] === types.standard // True

// BONUS: it's keep the length untouched
types.length // 2

```

## Real world application
Like https://github.com/myfingersarebroken told me, a good aplication: in Angular´s JSON to Scope data, that needs to receive some identification on the same scope.
