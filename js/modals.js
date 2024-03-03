const btns = document.querySelectorAll('.btn-modal');
const modalOverlay = document.querySelector('.modal-overlay ');
const modals = document.querySelectorAll('.modal');
const modalCloseBtn = document.querySelectorAll('.modal-close-btn');


const showInformationSendMail = (message, path) => {
    const modals = document.querySelectorAll('.modal');
    const modalOverlay = document.querySelector('.modal-overlay ');
    modalOverlay?.classList.add('modal-overlay--visible');

    modals.forEach((el) => {
        el.classList.remove('modal--visible');
    });

    const modalVisible = document.querySelector(`[data-target="${path}"]`);

    if (modalVisible) {
        const modalMessageContent = modalVisible.querySelector('.modal-message__content')
        modalMessageContent && (modalMessageContent.innerText = message)
        modalVisible.classList.add('modal--visible');
        // modalOverlay?.classList.add('modal-overlay--visible');
        $(`[data-target="${path}"]`).animate({ maxWidth: '500px' })
    }
}

btns.forEach((btn) => {
    btn.addEventListener('click', (e) => {
        document.body.style.overflowY = 'hidden';
        let path = e.currentTarget.getAttribute('data-path');
        console.log(path)
        showInformationSendMail("", path);
        // modals.forEach((modal) => {
        //     if (modal.classList.contains('modal--visible')) {
        //         modal.classList.add('modal--out-visible');
        //         setTimeout(() => {
        //             modal.classList.remove('modal--out-visible');
        //             modal.classList.remove('modal--visible');
        //         }, 500);
        //     }
        // });
        // document.querySelector(`[data-target="${path}"]`).classList.add('modal--visible');
        // modalOverlay.classList.add('modal-overlay--visible');
    });
});

modalOverlay && modalOverlay.addEventListener('click', (e) => {
    if (e.target == modalOverlay) {
        document.body.style.overflowY = 'auto';
        // modalOverlay.classList.remove('modal-overlay--visible');
        modals.forEach((el) => {
            if (el.classList.contains('modal--visible')) {
                // CollapsingTheElementByWidth(el, () => {
                //     el.classList.remove('modal--visible');
                //     modalOverlay.classList.remove('modal-overlay--visible');
                // })
                $(el).animate({ maxWidth: '0' }, function () {
                    el.classList.remove('modal--visible');
                    modalOverlay.classList.remove('modal-overlay--visible');
                })
            }
        });
    }
});

modalCloseBtn.forEach(e => {
    e.addEventListener('click', (e) => {
        document.body.style.overflowY = 'auto';
        // modalOverlay.classList.remove('modal-overlay--visible');
        modals.forEach((el) => {
            if (el.classList.contains('modal--visible')) {
                // CollapsingTheElementByWidth(el, () => {
                //     el.classList.remove('modal--visible');
                //     modalOverlay.classList.remove('modal-overlay--visible');
                // })
                $(el).animate({ maxWidth: '0' }, function () {
                    el.classList.remove('modal--visible');
                    modalOverlay.classList.remove('modal-overlay--visible');
                })
            }
        });
    })
})



