
function logName(firstName,lastName) {
  alert(`Welcome, ${firstName} ${lastName}`)
}

let firstName = prompt (" input your first name")
let secondName = prompt (" input your last name")

logName(nameA, nameB)
improve function


// 
const checkAge = function(age){

  if (age>= 18) {
    alert('you are old enough')
  } else if (age<18 && age >= 0){
    alert('you are still young')
  } else {
    alert('you are not born yet')
  }
}

let userAge = prompt (" input your age")
checkAge(userAge)



const addMarks = (text, name, mark, times) => {
    let newText = text + name
    
    for (let i = 1; i <= times; i++) {
      newText += mark
  
    }
    console.log(newText)

  }
  let userName = prompt ("input your name")
  addMarks('Hello ', userName, '!', 2) // Hello!
  addMarks('Hello bro ', userName, 0) // Hello!!!
  addMarks('Good day ', userName, '?', 1) // How are you?
  addMarks('How is it going ',userName,'?', 2) // How are you??
  



  const showNameWithAge = (name = 'Unknown', age = 0) =>{
  console.log (`${name} is ${age} year(s)old`)
    
  }

  const lian = showNameWithAge ('lian',22)
  const caca = showNameWithAge ('caca',16)
  const sabin = showNameWithAge ('sabin',21)

  console.log(lian)
  console.log(caca)
  console.log(sabin)
