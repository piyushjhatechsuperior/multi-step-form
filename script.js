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
  // let errorFlag = false;
  // inputFields.forEach((input, index) => {
  //   // console.log(inputs);
  //   if (input.value == "" || input.value == null) {
  //     input.nextElementSibling.innerText = `Enter the ${input.previousElementSibling.innerText}`;
  //     errorFlag = true;
  //   } else {
  //     input.nextElementSibling.innerText = "";
  //   }
  // });

  // if (!errorFlag) {
    if (currPage < steps.length - 1) {
      currPage++;
      updateForm();
    } else {
      alert("Form submitted!");
    }
  // }
});

// updateForm();



//                   All good until this
//                   All good until this
//                   All good until this
//                   All good until this
//.............................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................

// const addItemSkills = document.querySelector(".addItemSkills");
// const addItems = document.querySelector(".addItem");
// const removeItem = document.querySelectorAll(".removeItem");
// const inputData = document.querySelectorAll(".formInputs");
// console.log('>>>>>>>>' ,inputData);
//  addItem.addEventListener("click", (e) => {
//     // console.log(item.parentElement.parentElement);
//     const clone = item.parentElement.parentElement;
//     // const div = document.createElement("div");
//     // div.innerHTML = item.parentElement.parentElement;
//     // steps[currPage].appendChild(clone);
//     // var input = document.createElement("input");
//     inputData.appendChild(inputData);
//     // clone.innerHTML += clone.innerHTML;
//     // console.log(clone.innerHTML + clone.innerHTML);
//     console.log(inputData);
//   })
// addItemSkills.addEventListener("click", (e) => {
//   console.log(addItemSkills);
//   const clone = addItemSkills.parentElement.parentElement;
//   console.log(clone.innerHTML);
//   clone.innerHTML += clone.innerHTML;

  // console.log(item.parentElement.parentElement);
  // const clone = document.getElementsByClassName('formInputsTest')[0];
  // const divTest = document.getElementsByClassName('formInputsTest')[0];
  // div.innerHTML = item.parentElement.parentElement;
  // steps[currPage].appendChild(clone);
  // 9---------
  // divTest.innerHTML = document.getElementsByClassName('formInputsTest')[0]
  // divTest.appendChild(document.getElementsByClassName('formInputsTest')[0])
  // clone.cloneNode(divTest.innerHTML)
  // clone.innerHTML += divTest.innerHTML;
  // console.log('>>>>', divTest);
  // // console.log(addItem);
  // clone.appendChild(divTest);
  // inputData['NodeList'].push(clone)
  // item.NodeList.cloneNode();
  // console.log(clone.innerHTML + clone.innerHTML);
//   console.log(inputData);
// });

// const container = document.querySelector(".formInputsTest");
// addItem.addEventListener("click", () => {
//   const divTest = document.createElement('div');
//   divTest.className='formInputsTest'
//   divTest.appendChild(container)
//    console.log('>>>>...',divTest);
//   //  divTest.appendChild(container)
//   const clone = container;
//   container.appendChild(divTest)
// });

// const container = document.querySelector(".formInputsTest");
// const addBtn = document.querySelector(".addItem");
// const removeBtn = document.querySelector(".removeItem");

// addBtn.addEventListener("click", () => {
//   const inputGroup = document.createElement("div");
//   inputGroup.className = "inputs";

//   const label = document.createElement("label");
//   label.textContent = "Skill";
//   label.setAttribute("for", "skillName");

//   const input = document.createElement("input");
//   input.type = "text";
//   input.name = "skillName";
//   input.className = "skillInput";

//   inputGroup.appendChild(label);
//   inputGroup.appendChild(input);

//   container.appendChild(inputGroup);
// });

// removeBtn.addEventListener("click", () => {
//   const inputs = container.querySelectorAll(".inputs");
//   if (inputs.length > 1) {
//     container.removeChild(inputs[inputs.length - 1]);
//   }
// });

// // removeItem.forEach((item, index) => {
// //   item.addEventListener("click", (e) => {
// //     e.preventDefault();
// //     const clone = item.parentElement.parentElement;
// //     console.log(clone);
// //   })
// // })



// const addItem = document.querySelectorAll(".addItem");
// const removeItem = document.querySelectorAll(".removeItem");

// // console.log(addItem);
// // console.log(removeItem);


// addItem.forEach((btn) => {
//   btn.addEventListener("click", () => {
//     const currStep = btn.closest(".step").querySelector(".formInputs");
//     // const clone = currStep.firstChild.cloneNode(true);
//     const clone = currStep.firstElementChild.cloneNode(true);
//     clone.querySelectorAll("input").forEach(input => input.value = "");
//     currStep.append(clone);
//   })
// })

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
