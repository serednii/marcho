
//При фокусі на кнопки в вспливаючому меню карточки, показуємо вспливаюче меню 
document.querySelectorAll('.button-focus').forEach(el => {

    el.addEventListener('focus', function(e) {//показуєм меню при фокусі 
        this.closest('.product-item__link-box').style.transform = "translateY(0)"
    })

    el.addEventListener('blur', function(e) {//ховаєм меню при втраті фокуса
        this.closest('.product-item__link-box').style.transform = "translateY(500%)"
    })

})