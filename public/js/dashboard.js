let jobs = []
let verbose = true;

  const getAllJobs = () => {
    fetch('/jobs')
    .then(res => res.json())
    .then(data => jobs = [...data])
  }
  // getAllJobs()

const postOptions = {
  method: 'POST',
  header: {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify()
}

const addJob = (district = district.value, school = school.value, grade = grade.value, subject = subject.value ) => {
  if(!district || !school || !grade || !subject) (
    alert(`All fields must be complete`)
  )
  fetch('/jobs', postOptions)
    .then(res => res.json)
    .then(data => jobs = [...data])
}

const editJobOptions = {
  
}
const editJob = () => {

}
  
// Show that dashboard.js loaded
console.log("Dashboard.js is loaded");

// Get all jobs from database and store in jobs array
getAllJobs();

// declare DOM variables
let tbody = document.getElementById("tbody");

// Convert date
const convertDate = (d) => {
  tempDate = new Date(d);
  return output = tempDate.toString().substring(4,10);
}

// Print jobs to page
const printToPage = (arr, pos) => {
  (verbose) ? console.log("Running printtoPage") : "";

  let html = "";
  tbody.innerHTML = html;

  arr.forEach(e => {
    html += `<tr>`;
    html += `<td scope="row">${convertDate(e.date)}</th>`;
    if (pos == "teacher") {
      html += `<td>Teacher</td>`;
    } else if (pos == "admin") {
      html += `<td>Administrative</td>`;
    }
    html += `<td>${e.district}</td>`;
    html += `<td>${e.school}</td>`;
    html += `<td>${e.subject}</td>`;
    html += `<td>${e.grade}</td>`;
    html += `</tr>`;
  });

  tbody.innerHTML = html;
}

// Delay and print to page
setTimeout(() => printToPage(jobs, "teacher"), 500);



// Get search field to search while you type
// Declare DOM Vars
const search = document.getElementById("search-listings");

// Search Jobs array for given value
const searchJobsArr = (val) => {
  (verbose) ? console.log(val) : "";
  let temp = [];

  jobs.forEach(e => {
    if (e.district.toLowerCase().indexOf(val.toLowerCase()) >= 0 || e.school.toLowerCase().indexOf(val.toLowerCase()) >= 0 || e.subject.toLowerCase().indexOf(val.toLowerCase()) >= 0 || e.grade.value == val ) {
      temp.push(e);
    }
  })

  tbody.innerHTML = "";
  printToPage(temp, "teacher");
};

// EventListener on keyup
search.addEventListener("keyup", () => {
  searchJobsArr(search.value);
  if (search.value == "") printToPage(jobs, "teacher");
});



// Sort Array when dropdown is changed
// Declare DOM Vars
const dropdown = document.getElementById("sorting-dropdown");

// Eventlistener waiting for change of the dropdown menu
dropdown.addEventListener("change", () => {
  (verbose) ? console.log("dropdown changed to " + dropdown.value) : "";

  if (dropdown.value == "district-asc") {
    printToPage(jobs.sort((a, b) => {
      return (a.district > b.district) ? 1 : -1;
    }), "teacher")};

  if (dropdown.value == "district-dsc") {
    printToPage(jobs.sort((a, b) => {
      return (a.district > b.district) ? -1 : 1;
    }), "teacher")};

  if (dropdown.value == "school-asc") {
    printToPage(jobs.sort((a, b) => {
      return (a.school > b.school) ? 1 : -1;
    }), "teacher")};

  if (dropdown.value == "school-dsc") {
    printToPage(jobs.sort((a, b) => {
      return (a.school > b.school) ? -1 : 1;
    }), "teacher")};

  if (dropdown.value == "grade-asc") {
    printToPage(jobs.sort((a, b) => {
      return (a.grade > b.grade) ? 1 : -1;
    }), "teacher")};

  if (dropdown.value == "grade-dsc") {
    printToPage(jobs.sort((a, b) => {
      return (a.grade > b.grade) ? -1 : 1;
    }), "teacher")};

  if (dropdown.value == "subject-asc") {
    printToPage(jobs.sort((a, b) => {
      return (a.subject > b.subject) ? 1 : -1;
    }), "teacher")};

  if (dropdown.value == "subject-dsc") {
    printToPage(jobs.sort((a, b) => {
      return (a.subject > b.subject) ? -1 : 1;
    }), "teacher")};

  if (dropdown.value == "grade-asc") {
    printToPage(jobs.sort((a, b) => {
      return (a.grade > b.grade) ? 1 : -1;
    }), "teacher")};

  if (dropdown.value == "grade-dsc") {
    printToPage(jobs.sort((a, b) => {
      return (a.grade > b.grade) ? -1 : 1;
    }), "teacher")};

  if (dropdown.value == "date-asc") {
    printToPage(jobs.sort((a, b) => {
      return (a.date > b.date) ? 1 : -1;
    }), "teacher")};

  if (dropdown.value == "date-dsc") {
    printToPage(jobs.sort((a, b) => {
      return (a.date > b.date) ? -1 : 1;
    }), "teacher")};
});


// L81 - L139 could be refactored into a single function.