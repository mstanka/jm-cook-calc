document
  .getElementById("calc-form")
  .addEventListener("submit", calculateResult);

function calculateResult(e) {
  // get elements
  const amount = document.getElementById("amount");
  const result = document.getElementById("result");
  const measure = document.getElementById("input-select");

  if (amount.value < 0) {
    showError("Please check your values");
  }

  // calculate
  switch (measure.value) {
    case "cup":
      result.value = amount.value * 235;
      break;
    case "table-spoon":
      result.value = amount.value * 15;
      break;
    case "tea-spoon":
      result.value = amount.value * 5;
      break;
    default:
      showError("Please check your values");
  }

  e.preventDefault();
}

// show error
function showError(error) {
  // create a div
  const errorDiv = document.createElement("div");

  // get elements
  const card = document.querySelector(".card");
  const heading = document.querySelector("h1");

  // add class
  errorDiv.className = "alert";

  // create text node and append to div
  errorDiv.appendChild(document.createTextNode(error));

  // insert error above heading
  card.insertBefore(errorDiv, heading);

  // clear error after 3 seconds
  setTimeout(clearError, 3000);
}

// clear error
function clearError() {
  document.querySelector(".alert").remove();
}
