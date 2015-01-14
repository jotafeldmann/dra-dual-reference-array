/** 
 * TOKENIZER
 * Makes a array's value available through a property´s unique value, keeping the index untouched
 * Author: J. Feldmann 
 * More: https://github.com/jspades/tokenizer
 **/

function Tokenizer ( arrayOriginalArray , stringPropertyToIdentify ) {

    var arrayToTokenize = arrayOriginalArray;
    
    for ( var count = 0, q = arrayToTokenize.length ; count < q ; count++ ) {
      arrayToTokenize[arrayToTokenize[count][stringPropertyToIdentify]] = arrayToTokenize[count];
    }
    
    return arrayToTokenize;
    
}
