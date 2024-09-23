// active button start
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
// active button end

// show section start
document.getElementById("show-donation").addEventListener("click", function () {
  showSectionById("donate-section");
});

document.getElementById("show-history").addEventListener("click", function () {
  showSectionById("history-section");
});
// show section end

// noakhali start
document
  .getElementById("noakhali-donate-btn")
  .addEventListener("click", function (event) {
    event.preventDefault();

    const noakhaliDonate = getInputFieldValue("noakhali-input");

    if (noakhaliDonate <= 0 || isNaN(noakhaliDonate)) {
      alert("Invalid Donation Amount!!");
      return;
    } else {
      const noakhaliBalance = getTextFieldValue("noakhali-balance");
      const mainBalance = getTextFieldValue("main-balance");
      if (noakhaliDonate > mainBalance) {
        alert(
          "Failed to donate!!\nEntered amount exceeds your available balance."
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
        <p class = "history-text">${noakhaliDonate} Taka is Donated for Flood at Noakhali, Bangladesh.</p>
        <p>${currentDate}</p>
      `;
      document.getElementById("history-container").appendChild(div);
      document.getElementById("modal-section").classList.remove("hidden");
    }
  });

document.getElementById("btn-close").addEventListener("click", function () {
  document.getElementById("modal-section").classList.add("hidden");
});
// noakhali end

// feni start
document
  .getElementById("feni-donate-btn")
  .addEventListener("click", function (event) {
    event.preventDefault();

    const feniDonate = getInputFieldValue("feni-input");

    if (feniDonate <= 0 || isNaN(feniDonate)) {
      alert("Invalid Donation Amount!!");
      return;
    } else {
      const feniBalance = getTextFieldValue("feni-balance");
      const mainBalance = getTextFieldValue("main-balance");
      if (feniDonate > mainBalance) {
        alert(
          "Failed to donate!!\nEntered amount exceeds your available balance."
        );
        return;
      }
      const newFeniBalance = feniBalance + feniDonate;
      const newMainBalance = mainBalance - feniDonate;

      document.getElementById("feni-balance").innerText = newFeniBalance;
      document.getElementById("main-balance").innerText = newMainBalance;
      const currentDate = new Date();
      const div = document.createElement("div");
      div.classList.add("history-msg");
      div.innerHTML = `
      <p class = "history-text">${feniDonate} Taka is Donated for Flood Relief in Feni,Bangladesh.</p>
      <p>${currentDate}</p>
    `;
      document.getElementById("history-container").appendChild(div);
      document.getElementById("modal-section").classList.remove("hidden");
    }
  });

document.getElementById("btn-close").addEventListener("click", function () {
  document.getElementById("modal-section").classList.add("hidden");
});
// feni end

// quota start
document
  .getElementById("quota-donate-btn")
  .addEventListener("click", function (event) {
    event.preventDefault();

    const quotaDonate = getInputFieldValue("quota-input");

    if (quotaDonate <= 0 || isNaN(quotaDonate)) {
      alert("Invalid Donation Amount!!");
      return;
    } else {
      const quotaBalance = getTextFieldValue("quota-balance");
      const mainBalance = getTextFieldValue("main-balance");
      if (quotaDonate > mainBalance) {
        alert(
          "Failed to donate!!\nEntered amount exceeds your available balance."
        );
        return;
      }
      const newQuotaBalance = quotaBalance + quotaDonate;
      const newMainBalance = mainBalance - quotaDonate;

      document.getElementById("quota-balance").innerText = newQuotaBalance;
      document.getElementById("main-balance").innerText = newMainBalance;
      const currentDate = new Date();
      const div = document.createElement("div");
      div.classList.add("history-msg");
      div.innerHTML = `
      <p class = "history-text">${quotaDonate} Taka is Donated for Aid for Injured in the Quota Movement.</p>
      <p>${currentDate}</p>
    `;
      document.getElementById("history-container").appendChild(div);
      document.getElementById("modal-section").classList.remove("hidden");
    }
  });

document.getElementById("btn-close").addEventListener("click", function () {
  document.getElementById("modal-section").classList.add("hidden");
});
// quota end
