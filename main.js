const modal = document.getElementById('overlay');
const modalButton = document.getElementById('form-btn');
const submitButton = document.getElementById('submit-btn');

function showModal() {
    modal.style.visibility = 'visible';
    modal.style.opacity = '1';
    modal.style.transition = 'all 0.8s ease-out 0s';
}

function hideModal() {
    modal.style.visibility = 'hidden';
    modal.style.opacity = '0';
}

function cleanInputs() {
    document.querySelectorAll('.input-field')
        .forEach(function (item) {
            item.value = '';
        })
}

function createNotification (status) {
    let div = document.createElement('div');
    div.className = 'notification';
    if (status >= 200 && status < 300) {
        div.innerHTML = "<h2>Запрос успешно отправлен</h2>";
    } else {
        div.innerHTML = "<h2>Что-то пошло не так. <strong>Попробуйте позже</strong></h2>";
    }

    document.getElementById('overlay').append(div);
}

function destroyNotification () {
    const div = document.querySelector('.notification');
    if (div) {
        div.remove();
    }
}

function disableSubmitButton () {
    submitButton.setAttribute('disabled', 'true');
}

function enableSubmitButton () {
    submitButton.removeAttribute('disabled');
}

modalButton.addEventListener('click', showModal);

document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape' && modal.style.visibility === 'visible') {
        hideModal();
        destroyNotification();
        cleanInputs();
    }
});

