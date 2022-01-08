const billAmount = document.querySelector("#bill-amount");
const cashGiven = document.querySelector("#cash-given");
const checkButton = document.querySelector("#btn");
const message = document.querySelector("#error-message");
const noOfNotes = document.querySelectorAll(".notes");
const nextbutton = document.querySelector("#nextbtn");
const cashGivenSection = document.querySelector("#cash-given-section");
const notesSection = document.querySelector(".notes-section");
const refreshBtn = document.querySelector("#refresh");


cashGivenSection.style.display = "none";
notesSection.style.display = "none";
const availableNotes = [2000, 500, 100,50, 20, 10, 5, 1];

checkButton.addEventListener(
  "click",
  function validateBillAmountandCashamount() {
    hideMessage();
    if (Number(billAmount.value) > 0) {
      if (Number(cashGiven.value) >= Number(billAmount.value)) {
        const amountToBeReturned = cashGiven.value - billAmount.value;
        notesSection.style.display = "block";
        calculateChange(amountToBeReturned);
      } else {
        showMessage("Invalid");
      }
    } else {
      showMessage("Invalid Bill amount");
    }
  }
);

nextbutton.addEventListener("click", function nextbuttonevent() {
  if (billAmount.value > 0) {
    cashGivenSection.style.display = "block";
    message.innerText = "";
  } else {
    showMessage("invalid value");
    cashGivenSection.style.display = "none";
    notesSection.style.display = "none";
  }
});

refreshBtn.addEventListener("click", function refreshpage(){
    reload = location.reload();
})

function calculateChange(amountToBeReturned) {
  for (let i = 0; i < availableNotes.length; i++) {
    const numberOfNotes = Math.trunc(amountToBeReturned / availableNotes[i]);
    amountToBeReturned = amountToBeReturned % availableNotes[i];
    noOfNotes[i].innerText = numberOfNotes;
  }
}

function hideMessage() {
  message.style.display = "none";
}

function showMessage(msg) {
  message.style.display = "block";
  message.innerText = msg;
}
