function suma() {
    var suma = parseInt(num1) + parseInt(num2);
    resultado = resultado + "A. La suma de los números es : " + suma + "\n\n";
  }

  function prime(n) {

      if (n <= 1) return false;
      if (n <= 3) return true;
      if (n % 2 == 0 || n % 3 == 0) return false;

      for (let i = 5; i * i <= n; i = i + 6) {
        if (n % i == 0 || n % (i + 2) == 0) {
          return false;
        }
      } 
      return true;
    
  }

  function parImpar() {
    if (sonIguales == true) {
      if (num1 % 2 == 0) {
        resultado = resultado + "C. El número : (" + num1 + ") es par " + "\n\n";
      } else {
        resultado = resultado + "C. El número : (" + num1 + ") es impar " + "\n\n";
      }
    } else {

      if (num1 % 2 == 0) {
        resultado = resultado + "C. El primer número : (" + num1 + ") es par, ";
      } else {
        resultado = resultado + "C. El primer número : (" + num1 + ") es impar, ";
      }
      if (num2 % 2 == 0) {
        resultado = resultado + "el segundo número : (" + num2 + ") es par " + "\n\n";
      } else {
        resultado = resultado + "el segundo número : (" + num2 + ") es impar " + "\n\n";
      }
    }
  }

  function rango() {
    var resultado2 = "";
    if (sonIguales == true) {
      resultado = resultado + "El rango es : " + num1 + "\n\n";
    } else {
      if (+num1 < +num2) {
        for (var i = +num1; i <= +num2; i++) {
          if (i % 2 == 0) {
            resultado2 = resultado2 + " " + i;
          }
        }

        resultado = resultado + "D. Los números pares entre " + num1 + " y " + num2 + " de forma ascendente son: " + resultado2 + "\n\n";

      }
    }
    if (+num1 > +num2) {
      for (var i = +num1; i >= +num2; i--) {
        if (i % 2 != 0) {

          resultado2 = resultado2 + " " + i;
        }
      }

      resultado = resultado + "E. Los números impares entre " + num1 + " y " + num2 + " de forma descendente son: " + resultado2 + "\n\n";
    }

  }


  let resultado = "";
  let sonIguales = false;
  let num1 = parseInt(prompt("Introduzca un número entero entre 1 y 50"), 10);
  let num2 = parseInt(prompt("Introduzca otro número entero entre 1 y 50"), 10);

  if (num1 === num2) {
    sonIguales = true;
  }

  if (num1 >= 1 && num1 <= 50 && num2 >= 1 && num2 <= 50) {

    //Llamada a las funciones
    suma();

    const esPrime = prime(num1);
    const esPrime2 = prime(num2);

    if (sonIguales)
    {
      if (esPrime){
        resultado = resultado + "B. El número : (" + num1 + ") es primo " + "\n\n";
      } else {
        resultado = resultado + "B. El número : (" + num1 + ") no es primo " + "\n\n";
      }
    } else {

    if (esPrime){
      resultado = resultado + "B. El primer número : (" + num1 + ") es primo, ";
    } else {
      resultado = resultado + "B. El primer número : (" + num1 + ") no es primo, ";
    }
    if (esPrime2){
      resultado = resultado + "el segundo número : (" + num2 + ") es primo " + "\n\n";
    } else {
      resultado = resultado + "el segundo número : (" + num2 + ") no es primo " + "\n\n";
    }
  }
    parImpar();
    rango();



    alert(resultado);


  } else if (num1 >= 1 && num1 <= 50 || num2 >= 1 && num2 <= 50) {

    if (num1 >= 1 && num1 <= 50) {
      alert("El primer número: (" + num1 + ") cumple los requisitos pero el segundo número : (" + num2 + ") no.");
    } else {
      alert("El segundo número: (" + num2 + ") cumple los requisitos pero el primer número : (" + num1 + ") no.");
    }
  } else {
    alert("Ninguno de los números cumple los requisitos");
  }
