const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");
const steps = document.querySelectorAll(".step");
const nums = document.querySelectorAll(".pagination .number");
const bars = document.querySelectorAll(".pagination .bar");
let curr = 0;

function update() {
  steps.forEach((step, index) => step.classList.toggle("active", index === curr));
  nums.forEach((num, index) => num.classList.toggle("active", index <= curr));
  bars.forEach((bar, index) => bar.classList.toggle("active", index < curr));
  prevBtn.disabled = curr === 0;
  nextBtn.textContent = curr === steps.length - 1 ? "Submit" : "Next";
}

prevBtn.addEventListener("click", (e) => {
  e.preventDefault();
  if (curr > 0) curr--;
  update();
});

nextBtn.addEventListener("click", (e) => {
  e.preventDefault();
  const fields = steps[curr].querySelectorAll('input, select, textarea');
  let valid = true;
  fields.forEach(fieldValue => {
    const err = fieldValue.closest('.formGroup').querySelector('.error');
    if (!fieldValue.value) {
      err.textContent = 'This field is required';
      valid = false;
    } else {
      err.textContent = '';
    }
  });
  if (!valid) return;
  if (curr < steps.length - 1) {
    curr++;
    update();
  } else {
    showResume();
  }
});

function createNewItem(containerId, addBtnId) {
  const container = document.getElementById(containerId);
  const addBtn = document.getElementById(addBtnId);
  console.log(addBtn);

  addBtn.addEventListener("click", () => {
    const template = container.querySelector(".item");
    const clone = template.cloneNode(true);
    clone.querySelectorAll("input, select").forEach((item) => (item.value = ""));
    const removeBtn = document.createElement("button");
    removeBtn.type = "button";
    removeBtn.textContent = "-";
    removeBtn.className = "removeItem";
    removeBtn.addEventListener("click", () => {
      container.removeChild(clone);
    });
    clone.appendChild(removeBtn);
    container.appendChild(clone);
  });
}

createNewItem("skillsContainer", "addSkill");
createNewItem("educationContainer", "addEdu");

function showResume() {
  const data = {
    personal: {},
    skills: [],
    education: [],
    social: {},
    // summary: '',
    // hobbies: ''
    last: {}
  };

  data.personal.firstName = document.getElementById('firstName').value;
  data.personal.lastName = document.getElementById('lastName').value;
  data.personal.email = document.getElementById('email').value;
  data.personal.phone = document.getElementById('phone').value;
  data.personal.gender = document.getElementById('gender').value;
  data.personal.dob = document.getElementById('dob').value;

  const skills = document.getElementsByName('skills[]');
  const levels = document.getElementsByName('levels[]');
  for (let i = 0; i < skills.length; i++) {
    if (skills[i].value) {
      data.skills.push({
        skill: skills[i].value,
        level: levels[i]?.value || ''
      });
    }
  }

  const institutions = document.getElementsByName('institutions[]');
  const courses = document.getElementsByName('courses[]');
  const eduFroms = document.getElementsByName('eduFrom[]');
  const eduTos = document.getElementsByName('eduTo[]');
  const percentages = document.getElementsByName('percentage[]');

  for (let i = 0; i < institutions.length; i++) {
    if (institutions[i].value) {
      data.education.push({
        institution: institutions[i].value,
        course: courses[i]?.value || '',
        from: eduFroms[i]?.value || '',
        to: eduTos[i]?.value || '',
        percentage: percentages[i]?.value || ''
      });
    }
  }

  data.social.github = document.getElementById('github').value;
  data.social.linkedin = document.getElementById('linkedin').value;
  data.last.summary = document.getElementById('summary').value;
  data.last.hobbies = document.getElementById('hobbies').value;

  const percentageFields = document.querySelectorAll('input[name="percentage[]"]');

const percentagesForAverage = [...percentageFields]
  .map(input => input.value * 1);     

const total = percentagesForAverage.reduce((acc, val) => acc + val, 0);
const average = percentagesForAverage.length ? Math.round(total * 100 / percentages.length) / 100 : "N/A";

console.log(data);
  let resumeHTML = `
    <div class="resumeStyle">
      <h2>${data.personal.firstName} ${data.personal.lastName}</h2>
      <p>Email: ${data.personal.email}</p>
      <p>Phone: ${data.personal.phone}</p>
      <p>Gender: ${data.personal.gender}</p>
      <p>Date of Birth: ${data.personal.dob}</p>
      <hr />
      <h3>Skills</h3>
      <ul>
        ${data.skills.map(s => `<li>${s.skill} - ${s.level}</li>`)}
      </ul>
      <hr />
      <h3>Education</h3>
      <ul>
        ${data.education.map(e => `
          <li>${e.institution}: ${e.course} (${e.from} - ${e.to}), ${e.percentage}%</li>
        `)}
      </ul>
      <p><strong>Average Percentage:</strong> ${average}%</p>
      <hr />
      <h3>Social Links</h3>
      <p>GitHub: ${data.social.github}</p>
      <p>LinkedIn: ${data.social.linkedin}</p>
      <hr />
      <h3>Summary</h3>
      <p>${data.last.summary}</p>
      <h3>Hobbies</h3>
      <p>${data.last.hobbies}</p>
    </div>
    <button type="submit" >New Form</button>
  `;

  
  
  
  document.getElementById('multiStepForm').style.display = 'none';
  const resumeDiv = document.getElementById('resumeSummary');
  resumeDiv.style.display = 'block';
  resumeDiv.innerHTML = resumeHTML;
  document.querySelector('button').addEventListener('click', newForm);
}

function newForm() {
    curr=0;
    update;
    document.getElementById('multiStepForm').style.display = 'block';
    document.getElementById('resumeSummary').style.display = 'none';
  }
update();
