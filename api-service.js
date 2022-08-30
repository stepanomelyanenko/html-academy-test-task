const url = "https://jsonplaceholder.typicode.com/users/";
const personalForm = document.getElementById('personal');

function createFormData() {
    const nameInput = document.getElementById('form-name');
    const emailInput = document.getElementById('form-email');

    let formData = new FormData();

    formData.append("name", nameInput.value);
    formData.append("email", emailInput.value);

    return formData;
}

personalForm.onsubmit = function (e) {
    e.preventDefault();
    disableSubmitButton();
    destroyNotification();

    const formData = createFormData();
    let xhr = new XMLHttpRequest();

    xhr.open("POST", url);
    xhr.send(formData);

    xhr.onerror = () => {
        createNotification(xhr.status);
        enableSubmitButton();
    };

    xhr.onload = () => {
        createNotification(xhr.status);
        enableSubmitButton();
    }
}

