# DRA - Dual Reference Array

Use the same JS object like an array or a map.

This is just a pattern, not an API neither a framework. I never saw something like this before, so decided to study it.

You got this `const fields = [{ name: 'email', value: 'bla@bla.com' }]`, then you can use this `fields.email.value` and `fields[0].value`, accessing the same memory reference.

I've just created the atribute `fields.email` over your selected property `name`.

## Example

```javascript
var
  // Our array
  fields = [
    {
      id : 0,
      // fieldName is a common property with unique values
      name : 'email',
      label : 'Email',
      data : { dummy : 'whoomy' }
    },
    {
      id : 1,
      name : 'another',
      label : 'Another field'
    }
  ]
;

// At this time I just can access the array through the index
console.log ( fields[0] ); // Object {...}

// Now the magic
fields = DRA ( fields , 'name' );

// Then the same array's value is available by it's common property unique name
console.log ( fields._email ); // Object {...}

// If some property is changed, the change is reflected in both ways
fields._email.label = 'Devs are disciples of Thomas the Apostle';

// 'Devs are disciples of Thomas the Apostle' , 'Devs are disciples of Thomas the Apostle'
console.log ( fields._email.label , fields[0].label );

// The versa is the same, the ARRAY's REFERENCE can be accessed in DUAL ways
fields[0].label = 'We need to see to believe, show me the code';

// 'We need to see to believe, show me the code' , 'We need to see to believe, show me the code'
console.log ( fields._email.label , fields[0].label );

// And the object comparison remains
fields[0] === fields._email // True

// BONUS: it keeps the array's length untouched
fields.length // 2

// BONUS: You can use the explicit method to achieve the same result and improve readability
// Suggestion by Raul Oliver
DRA.convertPropsToObject ( fields , 'name' );

```

## Long history version
[Read my detailed article at Medium](https://medium.com/@jotafeldmann/the-javascript-dual-reference-array-dra-or-how-to-use-a-array-like-a-object-fd681c7cd20a#.6q5lrmgel)

## What it must do

- **The Array:** Mind an array, with a collection (a array with objects and, at least, one common property);
- **The Property:** Select a common property of the collection, with an unique string value;
- **The DRA:** In the same array, create a property with the string value, which makes the collection available by it index (the default way) AND it string value, like a property.

## NPM/Node.js version

You can use the project over the [NPM/Node.js version](https://github.com/jotafeldmann/dra-dual-reference-array/tree/master/npm)

## Play with it

You can test it at [https://tonicdev.com/jotafeldmann/dra-dual-reference-array](https://tonicdev.com/jotafeldmann/dra-dual-reference-array)

## Hot to use

- Clone
```bash
git clone https://github.com/jotafeldmann/dra-dual-reference-array
```
- Import dra-dual-reference-array.js in your code
- Create a code/paste the example code in the browser's console

## It uses the following JavaScript's capabilities:

- Set/Get object's property in the Array form;
- When the Array got it value from another array, the portion of memory is a link to the another array. So, when value change, the other array's value change too;
- Bonus: keeps the integrity of Array's length.

## TODO

- Examples
- Tests
- Error throwing;
- Treat same name properties: duplicate indexes must generate a error or a property with the array (obj.fieldName[0], obj.fieldName[1]) and allow a function parameter for custom solutions;
- A option to change/remove the _ (underscore) of the names: by default, all properties contain _ (underscore) at first char position, to avoid collision with reserved words;

## Real world application

- The DRA behavior looks like the  [Java LinkedMap from Apache's Commons Collections Behavior](https://commons.apache.org/proper/commons-collections/apidocs/org/apache/commons/collections4/map/LinkedMap.html) (thanks to @gilmargr for the insight)
- My last case: In Angular, convert the JSON array to $scope data;
- When developing a API's fields list validation, I can use the same namespace to iterate (array) or call the direct property's name;
- The first case: iterate through array of templates like objects, and access the properties directly, calling the name of the template.
- Lodash `keyBy` solves that question. Please check [https://lodash.com/docs/4.17.10#keyBy](https://lodash.com/docs/4.17.10#keyBy);
