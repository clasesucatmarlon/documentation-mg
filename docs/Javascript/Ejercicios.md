# Ejercicios varios

### Función que tome dos números (a y b) como argumento. Suma a y b. Devuelve el resultado

    ```js
    function myFunction (a, b) {
        return a + b;
    }

    // Test Cases:
    myFunction(1,2) -->     Expected 3
    myFunction(1,10) -->    Expected 11
    myFunction(99,1) -->    Expected 100
    ```

### Función que tome un número (a) como argumento. Divide a en sus dígitos individuales y los devuelve en un array. Sugerencia: es posible que desee cambiar el tipo del número para la división

    ```js
   function myFunction (a) {
        let array = [];
        let numberAsString = a.toString();
        let digitArray = numberAsString.split('');
        array = digitArray.map( (char) => {
        return parseInt(char);
    });
    return array;
    }

    function myFunction( a ) {
        const string = a + '';
        const strings = string.split('');
        return strings.map(digit => Number(digit))
    }

    //Test Cases:
    myFunction(10) -->     Expected [1,0]
    myFunction(931) -->    Expected [9,3,1]
    myFunction(193278) -->    Expected [1,9,3,2,7,8]
    ```


function myFunction( a ) {
  const string = a + '';
  const strings = string.split('');
  return strings.map(digit => Number(digit))
}