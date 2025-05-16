const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");
const steps = document.querySelectorAll(".step");
const progressNumbers = document.querySelectorAll(".pagination .number");
const progressLine = document.querySelectorAll(".pagination .bar");

let currPage = 0;
let data = {};

function updateForm() {
  steps.forEach((step, index) => {
    step.classList.toggle("active", index === currPage);
  });
  progressNumbers.forEach((num, index) => {
    if (index < currPage + 1) {
      num.classList.add("active");
    } else {
      num.classList.remove("active");
    }
  });
  progressLine.forEach((bar, index) => {
    if (index < currPage) {
      bar.classList.add("active");
    } else {
      bar.classList.remove("active");
    }
  });
  prevBtn.disabled = currPage === 0;
  currPage == steps.length - 1
    ? (nextBtn.innerText = "submit")
    : (nextBtn.innerText = "Next");
}

prevBtn.addEventListener("click", (e) => {
  e.preventDefault();
  if (currPage > 0) {
    currPage--;
    updateForm();
  }
});

nextBtn.addEventListener("click", (e) => {
  e.preventDefault();
  const inputFields = steps[currPage].querySelectorAll("input");
  // console.log(inputFields);
  // const errorInput = document.querySelectorAll(".error");
  // if (inputFields[0].value != ) {
  //     console.log(true);
  //   }
  // inputFields.forEach((input) => {
  //   if (input.value != null) {
  //     console.log(true);
  //   }
  // })
  // console.log(inputFields);
  let errorFlag = false;
  inputFields.forEach((input, index) => {
    // console.log(inputs);
    if (input.value == "" || input.value == null) {
      input.nextElementSibling.innerText = `Enter the ${input.previousElementSibling.innerText}`;
      errorFlag = true;
    } else {
      input.nextElementSibling.innerText = "";
    }
  });

  if (!errorFlag) {
    if (currPage < steps.length - 1) {
      currPage++;
      updateForm();
    } else {
      alert("Form submitted!");
    }
  }
});

// updateForm();



//                   All good until this
//                   All good until this
//                   All good until this
//                   All good until this
//.............................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................


const addItem = document.querySelectorAll(".addItem");
const removeItem = document.querySelectorAll(".removeItem");


addItem.forEach(btn => {
  btn.addEventListener("click", () => {
    console.log(addItem);
    const section = btn.closest(".step").querySelector(".formInputs");
    // console.log(section);
    const clone = section.querySelector(".inputs").cloneNode(true);
    clone.querySelectorAll(".input").forEach(input => input.value = "");
    // console.log(clone);
    section.appendChild(clone);
  });
});

removeItem.forEach(btn => {
  btn.addEventListener("click", () => {
    console.log(removeItem);
    const section = btn.closest(".step").querySelector(".formInputs");
    if (section.children.length > 1) {
      section.removeChild(section.lastChild);
    }
  });
});
