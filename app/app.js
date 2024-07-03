function calculate() {
    let lastMeal = parseInt(document.getElementById("last-meal-time").value); // Hora da última refeição
    let firstMeal = parseInt(document.getElementById("first-meal-time").value); // Hora da primeira refeição

    let fastingPeriod;
    if (lastMeal >= firstMeal) {
        // Caso normal, sem atravessar a meia-noite
        fastingPeriod = lastMeal - firstMeal;
    } else {
        // Caso atravessando a meia-noite
        fastingPeriod = (24 - firstMeal) + lastMeal;
    }

    document.getElementById("result-text").textContent = "Tempo de jejum: " + fastingPeriod + " horas.";
}
