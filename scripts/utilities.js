// function for showing specific section!!
function showSectionById(id) {
  document.getElementById("donate-section").classList.add("hidden");
  document.getElementById("history-section").classList.add("hidden");

  document.getElementById(id).classList.remove("hidden");
}

// function for getting the value from an input field!!
function getInputFieldValue(id) {
  const inputValue = document.getElementById(id).value;
  const inputNumber = parseFloat(inputValue);
  return inputNumber;
}

// function for getting the value from a text field!!
function getTextFieldValue(id) {
  const textValue = document.getElementById(id).innerText;
  const textNumber = parseFloat(textValue);
  return textNumber;
}

// function for getting answers
function getAnswerById(id) {
  document.getElementById("answer1").classList.add("hidden");
  document.getElementById("answer2").classList.add("hidden");
  document.getElementById("answer3").classList.add("hidden");
  document.getElementById("answer4").classList.add("hidden");

  document.getElementById(id).classList.remove("hidden");
}
