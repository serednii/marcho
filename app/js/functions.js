function formDataToObject(formData) {
    let jsonObject = {};
    for (const [key, value] of formData.entries()) {
        jsonObject[key] = value;
    }
    return jsonObject;
}

function clearForm(formElement) {
    formElement.target.querySelectorAll('input:not([type="hidden"]) ,textarea').forEach(e => {
        e.checked = e.defaultChecked;
        e.value = "";
    })
}


