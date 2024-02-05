const mailPath = 'http://smm.zzz.com.ua/simple.php'
function formDataToObject(formData) {
  let jsonObject = {};
  for (const [key, value] of formData.entries()) {
    jsonObject[key] = value;
  }
  return jsonObject;
}
document.querySelectorAll('.uniForm').forEach((el) => {

  el.addEventListener('submit', function (e) {
    e.preventDefault()
    const data = formDataToObject(new FormData(this))
    console.log(data)
    // const data = {
    //   name: 'joh',
    //   age: 78
    // };

    // var data = {
    //   project_name: 'usernamedsfsfdfert',
    //   admin_email: 'passwordscsdd',
    //   form_subject: "jhfssjfhsfd",
    // };

    fetch(mailPath, {
      method: 'POST',
      mode: 'cors', // no-cors, *cors, same-origin
      cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
      credentials: 'same-origin', // include, *same-origin, omit
      headers: {
        'Content-Type': 'application/json' //application/json  multipart/form-data
        // 'Content-Type': 'application/x-www-form-urlencoded',
      },
      redirect: 'follow', // manual, *follow, error
      referrerPolicy: 'no-referrer', // no-referrer, *client
      body: JSON.stringify(data),
      // body: params,
    })
      .then(response => response.json())
      .then(result => {
        // Обробка відповіді від сервера
        if (result.success) {
          alert("Письмо отправлено");
        } else {
          alert("Письмо не отправлено произошла ошибка:  " + result.message);
        }
      })
      .catch(error => {
        console.error('Помилка:', error);
      });








  })

})
