function bmi(){
    var h = document.getElementById('Height').value;
    var w = document.getElementById('Weight').value;
    var bmi = w/(h/100 *h/100);
    var result = bmi.toFixed(2); // to fixed decimal l baad 2 hi numbers ko dikhayega
    document.getElementById('result').innerHTML = "Your BMI is " + result;

}