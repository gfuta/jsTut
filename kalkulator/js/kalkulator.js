var operatorEntered = false;
var numberEntered = false;
var liczba1;
var liczba2;
var operator;

var ekran = document.getElementById("ekran");

function kliknijNumer(number) {
	ekran.innerHTML += number;
	numberEntered = true;
	liczba1 = number;
	
	if (operator) {
		liczba2 = number;
	}

}

function kliknijOperator(operator) {
	ekran.innerHTML += operator;
	operatorEntered = true;
	numberEntered = false;
}

function result(wynik){
	ekran.innerHTML = wynik;
	if(operator == '+') {
		wynik = liczba1 + liczba2;
	} else if(operator == '-') {
		wynik = liczba1 - liczba2;
	}
}