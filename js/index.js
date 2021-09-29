const openButton = document.querySelector('.profile__edit-button')
const modal = document.querySelector('.modal')
const closeButton = document.querySelector('.modal__close-button')
const form = document.querySelector('.form')
const inputName = document.querySelector('.form__input_type_name')
const inputJob = document.querySelector('.form__input_type_job')

const userNameElement = document.querySelector('.profile__name')
const userJobElement = document.querySelector('.profile__title')


// making the user info appear in the modal:

function closeModal() {
    modal.classList.remove('modal_open')
}

function openModal() {
    const userName = userNameElement.textContent
    const userJob = userJobElement.textContent

    inputName.value = userName
    inputJob.value = userJob

    modal.classList.add('modal_open')
}

// combined function when clicking on button:
// function toggleModal(){
//    modal.classList.add('modal_open')
// }

openButton.addEventListener('click', openModal)
closeButton.addEventListener('click', closeModal)


// prevents browser from refreshing after form submition:

form.addEventListener('submit', function(e) {
    e.preventDefault()   

    const nameValue = inputName.value
    const jobValue = inputJob.value
    
    userNameElement.textContent = nameValue
    userJobElement.textContent = jobValue

   closeModal()
})