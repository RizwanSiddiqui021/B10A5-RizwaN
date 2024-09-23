// active button
document.getElementById("show-history").addEventListener("click", function () {
  document.getElementById("show-donation").classList.add("main-button");
  document.getElementById("show-donation").classList.remove("active-btn");
  document.getElementById("show-history").classList.add("active-btn");
});

document.getElementById("show-donation").addEventListener("click", function () {
  document.getElementById("show-history").classList.add("main-button");
  document.getElementById("show-history").classList.remove("active-btn");
  document.getElementById("show-donation").classList.add("active-btn");
});

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
      const currentDate = new Date();
      const div = document.createElement("div");
      div.classList.add("history-msg");
      div.innerHTML = `
        <p class = "history-text">${noakhaliDonate} Taka is Donated for flood at Noakhali, Bangladesh.</p>
        <p>${currentDate}</p>
      `;
      document.getElementById("history-container").appendChild(div);
      document.getElementById("no-donation").classList.add("hidden");
      document.getElementById("modal-section").classList.remove("hidden");
    }
  });

document.getElementById("btn-close").addEventListener("click", function () {
  document.getElementById("modal-section").classList.add("hidden");
});
// noakhali end
