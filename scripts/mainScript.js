// show section
document.getElementById("show-donation").addEventListener("click", function () {
  showSectionById("donate-section");
});

document.getElementById("show-history").addEventListener("click", function () {
  showSectionById("history-section");
});

// noakhali start

document
  .getElementById("noakhali-donate-btn")
  .addEventListener("click", function (event) {
    event.preventDefault();

    const noakhaliDonate = getInputFieldValue("noakhali-input");

    if (noakhaliDonate <= 0 || isNaN(noakhaliDonate)) {
      alert("Invalid input!!");
      return;
    } else {
      const noakhaliBalance = getTextFieldValue("noakhali-balance");
      const mainBalance = getTextFieldValue("main-balance");
      if (noakhaliDonate > mainBalance) {
        alert(
          "Failed to donate!!\nEntered amount exceeds your current balance."
        );
        return;
      }
      const newNoakhaliBalance = noakhaliBalance + noakhaliDonate;
      const newMainBalance = mainBalance - noakhaliDonate;

      document.getElementById("noakhali-balance").innerText =
        newNoakhaliBalance;
      document.getElementById("main-balance").innerText = newMainBalance;
    }
  });

// noakhali end
