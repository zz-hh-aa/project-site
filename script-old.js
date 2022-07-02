const openModalButtons = document.querySelectorAll('[data-modal-target]')
const closeModalButtons = document.querySelectorAll('[data-close-button]')
const overlay = document.getElementById('overlay')

('.modal-button').on('click', function(e) {
    e.preventDefault();
    
    var elementID = $(this).attr("modal1");
    ('.modal' +elementID ).toggleClass('is-visible');
  });
  
  (".close-button").on("click", function(e) {
    e.preventDefault();
    (".modal").removeClass("is-visible");
  });



// // listening to buttons
// openModalButtons.forEach(button => {
//     button.addEventListener('click',()=> {
//         const modal = document.querySelector(button.dataset.modalTarget)
//         openModal(modal1)
//     })
// })

// closeModalButtons.forEach(button => {
//     button.addEventListener('click',()=> {
//         const modal = button.closest('.modal')
//         closeModal(modal1)
//     })
// })

// // toggling modal and overlay
// function openModal(modal1) {
//     if (modal == null) return
//     modal1.classList.add('active')
//     overlay.classList.add('active')
// }

// function closeModal(modal1) {
//     if (modal == null) return
//     modal1.classList.remove('active')
//     overlay.classList.remove('active')
// }

// const button = document.querySelector(".button")

// button.addEventListener('click',e => {
//     window.alert("description text here");
// })