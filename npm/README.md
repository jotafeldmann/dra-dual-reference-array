# DRA - Dual Reference Array

Makes an array's object available through the same array's namespace, through a property, keeping the index untouched.
This is just a pattern, not a API neither a framework. I never saw something like this before, so decided to study it.

## Long history version
[Read my detailed article at Medium](https://medium.com/@jotafeldmann/the-javascript-dual-reference-array-dra-or-how-to-use-a-array-like-a-object-fd681c7cd20a#.6q5lrmgel)

## What it must do

- **The Array:** Mind a array, with a collection (a array with objects and, at least, one common property);
- **The Property:** Select a common property of the collection, with a unique string value;
- **The DRA:** In the same array, create a property with the string value, which makes the collection available by it index (the default way) AND it string value, like a property.
 

## Play with it

[https://tonicdev.com/jotafeldmann/dra-dual-reference-array](https://tonicdev.com/jotafeldmann/dra-dual-reference-array)

## Example

    npm install dra-dual-reference-array

```

var DRA = require ('dra-dual-reference-array');

var
  fields = [ // Our array
    {
      id : 0,
      fieldName : 'email', // It's a common property, with unique values
      label : 'Email',
      data : { dummy : 'whoomy' }
    },
    {
      id : 1,
      fieldName : 'another', // Again
      label : 'Another field'
    }
  ]
;

// At this time, I just can access the array, through the index
console.log ( fields[0] ); // Object {...}

// Now, the magic
fields = DRA ( fields , 'fieldName' );

// Then, the same array's value is available by it's common property unique name
console.log ( fields._email ); // Object {...}

// If some property is changed, the change is reflected in both ways
fields._email.label = 'Devs are disciples of Thomas the Apostle';
console.log ( fields._email.label , fields[0].label );
// 'Devs are disciples of Thomas the Apostle' , 'Devs are disciples of Thomas the Apostle'

// The versa is the same, the ARRAY's REFERENCE can be accessed in DUAL ways
fields[0].label = 'We need to see to believe, show me the code';
console.log ( fields._email.label , fields[0].label );
// 'We need to see to believe, show me the code' , 'We need to see to believe, show me the code'

// And the object comparison remains
fields[0] === fields._email // True

// BONUS: it keeps the array's length untouched
fields.length // 2

// BONUS: You can use the explicit method to achieve the same result and improve readability
// Suggestion by Raul Oliver
DRA.convertPropsToObject ( fields , 'fieldName' );

```

## More

Read the [original file for more information](https://github.com/jotafeldmann/dra-dual-reference-array/blob/master/README.md#it-uses-the-following-javascripts-capabilities)

## License

[MIT License](https://github.com/jotafeldmann/license/blob/master/LICENSE.md) © Jorge Feldmann (jotafeldmann)
