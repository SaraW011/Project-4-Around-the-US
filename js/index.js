const openButton = document.querySelector('.profile__edit-button')

const modal = document.querySelector('.modal')
const closeButton = document.querySelector('.modal__close-button')

const form = document.querySelector('.form')
const inputName = document.querySelector('.form__input_type_name')
const inputJob = document.querySelector('.form__input_type_job')

const userNameElement = document.querySelector('.profile__name')
const userJobElement = document.querySelector('.profile__title')

// js to hide model after open:
function closeModal() {
    modal.classList.remove('modal_open')
}

// fill content of popup model with initial values:
function openModal() {
    const userName = userNameElement.textContent
    const userJob = userJobElement.textContent

// allow filling popup with new input values:
    inputName.value = userName
    inputJob.value = userJob

    modal.classList.add('modal_open')
}
// combine function when clicking on button:
// function toggleModal(){
//    modal.classList.add('modal_open')
// }


// prevent browser refresh after form submition:
// add "function handleSubmit(e) for future reuse of prevent default: 


function handleSubmit(e) {
    e.preventDefault();
    
    const nameValue = inputName.value
    const jobValue = inputJob.value

    userNameElement.textContent = nameValue
    userJobElement.textContent = jobValue

    closeModal()
  }

  form.addEventListener('submit', handleSubmit);
    
//   org code with no reusable function to handle default browser: 
// form.addEventListener('submit', function(e) {
//     e.preventDefault()   

//     const nameValue = inputName.value
//     const jobValue = inputJob.value
    
//     userNameElement.textContent = nameValue
//     userJobElement.textContent = jobValue

//    closeModal()
// })

openButton.addEventListener('click', openModal)
closeButton.addEventListener('click', closeModal)