function Mesmerize ( arrayToMesmerize , stringPropertyToIdentify ) {
    for ( var count = 0, q = arrayToMesmerize.length ; count < q ; count++ ) {
        arrayToMesmerize[arrayToMesmerize[count][stringPropertyToIdentify]] = arrayToMesmerize[count];
    }
}
