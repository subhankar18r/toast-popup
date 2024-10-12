console.log("start");
const toastContainer = document.querySelector(".toast-container");

function showToast(msg) {
  console.log("click");
  let toast = document.createElement("div");
  toast.classList.add("toast");
  let icon = "";

  switch (msg) {
    case "Success":
      icon = `<i class="fa-solid fa-circle-check"></i>`;
      toast.classList.add("success");
      break;
    case "Error":
      icon = `<i class="fa-solid fa-xmark"></i>`;
      toast.classList.add("error");
      break;
    case "Invalid":
      icon = `<i class="fa-solid fa-exclamation"></i>`;
      toast.classList.add("invalid");
      break;
  }

  toast.innerHTML = icon + msg;
  toastContainer.appendChild(toast);
  setTimeout(() => {
    toast.remove();
  }, 5000);
}
