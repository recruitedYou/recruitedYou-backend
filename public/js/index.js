document.getElementById('login').addEventListener('click', (e)=> {
  console.log(`hello yael`)
  e.preventDefault()
  window.location = '/login.html'
})

document.getElementById('becomeATeacher').addEventListener('click', (e)=> {
  e.preventDefault()
  window.location = '/teacherSignUp.html'
})

document.getElementById('signUp').addEventListener('click', (e) => {
  e.preventDefault()
  window.location = '/adminSignUp.html'
})