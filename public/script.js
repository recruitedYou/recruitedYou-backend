let jobs = []

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
  