const Userr = document.getElementById("Userr");

Userr.addEventListener("click", () => {
  console.log("helo");
});

const inputs = document.querySelectorAll("input[type='number']");

inputs.forEach((input, index) => {
  input.addEventListener("input", () => {
    const inputValue = input.value;

    if (inputValue.length === 1 && index < inputs.length - 1) {
      inputs[index + 1].focus();
    }

    if (index === inputs.length - 1 && inputValue.length === 1) {
      input.blur(); // Quitar el enfoque del último campo después de ingresar un carácter
    }
  });

  // Controlar el retroceso para cambiar al campo anterior
  input.addEventListener("keydown", (e) => {
    if (e.key === "Backspace" && index > 0) {
      inputs[index - 1].focus();
    }
  });
});
