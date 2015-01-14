function Tokenizer ( arrayToMesmerize , stringPropertyToIdentify ) {
    
    var arrayToTokenize = arrayToMesmerize;
    
    for ( var count = 0, q = arrayToMesmerize.length ; count < q ; count++ ) {
        arrayToTokenize[arrayToTokenize[count][stringPropertyToIdentify]] = arrayToTokenize[count];
    }
    
    return arrayToTokenize;
}
