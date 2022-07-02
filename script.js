// START W THIS ONE FROM 'VARYING' https://getbootstrap.com/docs/4.0/components/modal/

const openModalButtons = document.querySelectorAll('[data-modal-target]')
const closeModalButtons = document.querySelectorAll('[data-modal-close]')
const overlay = document.getElementById('overlay')
const button = document.querySelector('.button')

// listening to buttons
openModalButtons.forEach(button => {
    button.addEventListener('click',()=> {
        const modal1 = document.querySelector(button.dataset.modalTarget)
        openModal("modal1")
    })
})

closeModalButtons.forEach(button => {
    button.addEventListener('click',()=> {
        const modalClose1 = button.closest('.modal')
        closeModal(modalClose1)
    })
})

// toggling modal and overlay
function openModal(modal1) {
    if (modal1 == null) return
    modal1.classList.add('active')
    overlay.classList.add('active')
}

function closeModal(modal1) {
    if (modal1 == null) return
    modal1.classList.remove('active')
    overlay.classList.remove('active')
}


// button.addEventListener('click',e => {
//     window.alert("description text here");
// })