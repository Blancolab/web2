// Guardamos las referencias del DOM en una sola variable
const dom = {
    form: document.getElementById("formulario"),
    num1: document.getElementById("num1"),
    num2: document.getElementById("num2"),
    resultado: document.getElementById("resultado")
};

dom.form.addEventListener("submit", function(event) {
    event.preventDefault(); // Evita recargar la página

    let n1 = parseFloat(dom.num1.value);
    let n2 = parseFloat(dom.num2.value);

    // Validar que ambos sean números
    if (isNaN(n1) || isNaN(n2)) {
        dom.resultado.textContent = "Por favor, ingresa dos números válidos.";
        return;
    }

    // Primera parte: verificar si son iguales o diferentes
    if (n1 === n2) {
        dom.resultado.textContent = `Los números son iguales: ${n1} = ${n2}`;
    } else {
        // Si son diferentes, primero lo decimos...
        let mensaje = `Los números son diferentes. `;

        // ...y después decimos quién es mayor
        if (n1 > n2) {
            mensaje += `${n1} es mayor que ${n2}.`;
        } else {
            mensaje += `${n2} es mayor que ${n1}.`;
        }

        dom.resultado.textContent = mensaje;
    }
});
