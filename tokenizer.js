/** 
 * TOKENIZER
 * Makes a array's value available through a property´s unique value, keeping the index untouched
 * Author: J. Feldmann 
 * More: https://github.com/jspades/tokenizer
 **/

function Tokenizer ( arrayToMesmerize , stringPropertyToIdentify ) {
    
    var arrayToTokenize = arrayToMesmerize;
    
    for ( var count = 0, q = arrayToMesmerize.length ; count < q ; count++ ) {
        arrayToTokenize[arrayToTokenize[count][stringPropertyToIdentify]] = arrayToTokenize[count];
    }
    
    return arrayToTokenize;
}
