function myFunction1() {
    var t1 = document.getElementById("toggle-1");
    if (t1.innerHTML === "") {
      t1.innerHTML = "project description 1";
    } else {
      t1.innerHTML = "";
    }
  }

  function myFunction2() {
    var t2 = document.getElementById("toggle-2");
    if (t2.innerHTML === "") {
      t2.innerHTML = "project description 2";
    } else {
      t2.innerHTML = "";
    }
  }

  function myFunction3() {
    var t3 = document.getElementById("toggle-3");
    if (t3.innerHTML === "") {
      t3.innerHTML = "project description 3";
    } else {
      t3.innerHTML = "";
    }
  }

  function myFunction4() {
    var t4 = document.getElementById("toggle-4");
    if (t4.innerHTML === "") {
      t4.innerHTML = "project description 4";
    } else {
      t4.innerHTML = "";
    }
  }

  function myFunction5() {
    var t5 = document.getElementById("toggle-5");
    if (t5.innerHTML === "") {
      t5.innerHTML = "project description 5";
    } else {
      t5.innerHTML = "";
    }
  }


  function myFunction6() {
    var t6 = document.getElementById("toggle-6");
    if (t6.innerHTML === "") {
      t6.innerHTML = "project description 6";
    } else {
      t6.innerHTML = "";
    }
  }

// // START W THIS ONE FROM 'VARYING' https://getbootstrap.com/docs/4.0/components/modal/

// const openModalButtons = document.querySelectorAll('[data-modal-target]')
// const closeModalButtons = document.querySelectorAll('[data-modal-close]')
// const overlay = document.getElementById('overlay')
// const button = document.querySelector('.button')

// // listening to buttons
// openModalButtons.forEach(button => {
//     button.addEventListener('click',()=> {
//         const modal1 = document.querySelector(button.dataset.modalTarget)
//         openModal("modal1")
//     })
// })

// closeModalButtons.forEach(button => {
//     button.addEventListener('click',()=> {
//         const modalClose1 = button.closest('.modal')
//         closeModal(modalClose1)
//     })
// })

// // toggling modal and overlay
// function openModal(modal1) {
//     if (modal1 == null) return
//     modal1.classList.add('active')
//     overlay.classList.add('active')
// }

// function closeModal(modal1) {
//     if (modal1 == null) return
//     modal1.classList.remove('active')
//     overlay.classList.remove('active')
// }


// // button.addEventListener('click',e => {
// //     window.alert("description text here");
// // })