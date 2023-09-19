const elModal = document.querySelector(".js-modal");
const elModalOpen = document.querySelector(".js-modal-opener");
const elModalClose = document.querySelector(".js-modal-close");

elModalOpen.addEventListener('click', function() {
  elModal.classList.remove('modal-none');
  elModal.classList.add('modal');
});

elModalClose.addEventListener('click', function () {
  elModal.classList.remove('modal');
  elModal.classList.add('modal-none');
});
  

