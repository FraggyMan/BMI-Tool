function calculate() {
    const height = document.getElementById("height").value;
    const weight = document.getElementById("weight").value;
    const unit = document.getElementById("standard").checked;
    const outputText = document.getElementById("calculator-output");
    const outputCategory = document.getElementById("category-output");
    let bmi = 0
    let category = "Underweight"

    if (unit) {
        bmi = 703 * (weight / height ** 2);
    } else {
        bmi = weight / (height / 100) ** 2;
    }

    if (bmi < 18.5) {
        outputText.style.color = "#2ddfff";
        category = "(Underweight)";
    } else if (bmi < 25) {
        outputText.style.color = "#00ff00";
        category = "(Healthy)";
    } else if (bmi < 30) {
        outputText.style.color = "#ffe600";
        category = "(Overweight)";
    } else if (bmi < 35) {
        outputText.style.color = "#ff5e00";
        category = "(Obese (Class 1))";
    } else if (bmi < 40) {
        outputText.style.color = "#ff0000";
        category = "(Obese (Class 2))";
    } else {
        outputText.style.color = "#410303";
        category = "(Obese (Class 3))";
    }

    if (!bmi || bmi == Infinity) {
        outputText.innerText = "";
        outputCategory.innerHTML = "";
    } else {
        outputText.innerText = Math.round(bmi * 10) / 10;
        outputCategory.innerText = category;
    }

}
document.addEventListener("input", (event) => {
    if (event.target.type == "number") {
        calculate();
    }
});
document.addEventListener("click", (event) => {
    if (event.target.type == "radio") {
        const heightLabel = document.querySelector("label[for=\"height\"]");
        const weightLabel = document.querySelector("label[for=\"weight\"]");
        const unit = document.getElementById("standard").checked;

        if (unit) {
            heightLabel.innerText = "Height(in):";
            weightLabel.innerText = "Weight(lb):";
        } else {
            heightLabel.innerText = "Height(cm):";
            weightLabel.innerText = "Weight(kg):"
        }

        calculate();
    }
});