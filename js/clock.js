



$(function () {

  function getTimeRemaining(endTime) {
    var t = Date.parse(endTime) - Date.parse(new Date());
    var seconds = Math.floor((t / 1000) % 60);
    var minutes = Math.floor((t / 1000 / 60) % 60);
    var hours = Math.floor((t / (1000 * 60 * 60)) % 24);
    var days = Math.floor(t / (1000 * 60 * 60 * 24));

    return {
      'total': t,
      'days': days,
      'hours': hours,
      'minutes': minutes,
      'seconds': seconds
    };

  }

  function initializeClock(id, endTime) {
    var clock = document.querySelector(id);
    if (clock) {
      var daysSpan = clock.querySelector('.promo__days');
      var hoursSpan = clock.querySelector('.promo__hours');
      var minutesSpan = clock.querySelector('.promo__minutes');
      var secondsSpan = clock.querySelector('.promo__seconds');
      const timeInterval = setInterval(updateClock, 1000);

      function updateClock() {
        var t = getTimeRemaining(endTime);

        daysSpan.innerHTML = t.days;
        hoursSpan.innerHTML = ('0' + t?.hours).slice(-2);
        minutesSpan.innerHTML = ('0' + t?.minutes).slice(-2);
        secondsSpan.innerHTML = ('0' + t?.seconds).slice(-2);

        if (t?.total <= 0) {
          clearInterval(timeInterval);
        }
      }
      updateClock();
    }


  }

  const deadline = $('.promo__clock').attr('data-time');

  initializeClock('.promo__clock', deadline);




});