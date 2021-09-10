function calculate(){
    
    var bmi;
    var result = document.getElementById("result");

    var weight = parseInt(document.getElementById("weight").value);
    document.getElementById("weight-val").textContent = weight + " kg";

    var height = parseInt(document.getElementById("height").value);
    document.getElementById("height-val").textContent = height + " cm";

    bmi = (weight / Math.pow ((height/100), 2 )).toFixed (1);

    result.textContent = bmi;

    if (bmi < 18.5) {
        category = "Abaixo do Peso";
        result.style.color = "#ffc44d";
        result.style.transition = "0.5s ease-in-out"
    }

    else if ( bmi >= 18.5 && bmi <= 24.9 ){
        category = "Peso Nominal"
        result.style.color = "#0be881";
        result.style.transition = "0.5s ease-in-out"
    }

    else if ( bmi >= 25 && bmi <= 29.9 ){
        category = "Sobrepeso"
        result.style.color = "#ff884d";
        result.style.transition = "0.5s ease-in-out"
    }

    else {
        category = "Obesidade";
        result.style.color = "#ff5e57"
        result.style.transition = "0.5s ease-in-out"
    }

    document.getElementById("category").textContent = category;
}
