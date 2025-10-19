// Modal Functionality
const modal = document.getElementById("modal");
const openModalBtn = document.getElementById("openModalBtn");
const closeModalBtn = document.getElementById("closeModalBtn");

// Open modal
openModalBtn.onclick = function() {
  modal.style.display = "block";
};

// Close modal
closeModalBtn.onclick = function() {
  modal.style.display = "none";
};

// Close when clicking outside the modal box
window.onclick = function(event) {
  if (event.target === modal) {
    modal.style.display = "none";
  }
};
