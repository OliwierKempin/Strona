function obliczBMI() {
    let masaInput = document.getElementById("masa");
    let wzrostInput = document.getElementById("wzrost");

    let masa = parseFloat(masaInput.value);
    let wzrost = parseFloat(wzrostInput.value) / 100;

    if (isNaN(masa) || isNaN(wzrost) || masa <= 0 || wzrost <= 0) {
        alert("Wprowadź poprawne wartości dla masy ciała i wzrostu.");
        return;
    }

    let bmi = masa / (wzrost * wzrost);

    let wynik = document.getElementById("wynik");
    wynik.textContent = "Twoje BMI wynosi: " + bmi.toFixed(2);

    if (bmi < 18.5) {
        wynik.textContent += " - Niedowaga";
    } else if (bmi >= 18.5 && bmi < 25) {
        wynik.textContent += " - Prawidłowa masa ciała";
    } else if (bmi >= 25 && bmi < 30) {
        wynik.textContent += " - Nadwaga";
    } else {
        wynik.textContent += " - Otyłość";
    }
}