<<<<<<< HEAD
var days = 0;
var hours = 0;
var minutes = 0;
var seconds = 12;

var time = setInterval(() => {
  if (days !== 0) {
    // day != 0 && hours!=0
    if (hours !== 0) {
      // day != 0 && hours!=0 minutes !==0
      if (minutes !== 0) {
        // day != 0 && hours!=0 minutes !==0 seconds !=0
        if (seconds !== 0) {
          seconds--;
        }
        // day != 0 && hours!=0 minutes !==0 seconds =0
        else {
          seconds = 60;
          minutes--;
        }
      }
      // day != 0 && hours!=0 minutes =0
      else {
        // day != 0 && hours!=0 minutes ==0 seconds !=0
        if (seconds !== 0) {
          seconds--;
        }
        // day != 0 && hours!=0 minutes ==0 seconds =0
        else {
          hours--;
          seconds = 60;
          minutes = 60;
        }
      }
    }
    // day != 0 && hours==0
    else {
      // day != 0 && hours==0 minutes !==0
      if (minutes !== 0) {
        if (seconds !== 0) {
          seconds--;
        } else {
          seconds = 60;
          minutes--;
        }
      } else {
        if (seconds === 0) {
          seconds--;
        } else {
          seconds = 60;
          minutes = 60;
          hours = 23;
          days--;
        }
      }
    }
  }
  // days=0
  else {
    if (hours !== 0) {
      if (minutes !== 0) {
        if (seconds !== 0) {
          seconds--;
        } else {
          seconds = 60;
          minutes--;
        }
      } else {
        // days =0 hours !=0 minutes==0
        if (seconds !== 0) {
          seconds--;
        } else {
          seconds = 60;
          minutes = 60;
          hours--;
        }
      }
    }
    // day =0 hour =0
    else {
      if (minutes !== 0) {
        if (seconds !== 0) {
          seconds--;
        } else {
          seconds = 60;
          minutes--;
        }
      } else {
        // days =0 hours ==0 minutes==0
        if (seconds !== 0) {
          seconds--;
        } else {
          clearInterval(time);
          document.querySelector("button").style.backgroundColor = "#fb8f2c";
          document.querySelector("#button").addEventListener("click", () => {
            window.open("index.html");
          });
        }
      }
    }
  }
  if (seconds < 10)
    document.querySelector(".seconds").innerHTML = `0${seconds}`;
  else document.querySelector(".seconds").innerHTML = `${seconds}`;

  if (minutes < 10)
    document.querySelector(".minutes").innerHTML = `0${minutes}`;
  else document.querySelector(".minutes").innerHTML = `${minutes}`;

  if (hours < 10) document.querySelector(".hours").innerHTML = `0${hours}`;
  else document.querySelector(".hours").innerHTML = `${hours}`;

  if (days < 10) document.querySelector(".days").innerHTML = `0${days}`;
  else document.querySelector(".days").innerHTML = `${days}`;
}, 1000);
=======
var days = 0;
var hours = 0;
var minutes = 0;
var seconds = 12;

var time = setInterval(() => {
  if (days !== 0) {
    // day != 0 && hours!=0
    if (hours !== 0) {
      // day != 0 && hours!=0 minutes !==0
      if (minutes !== 0) {
        // day != 0 && hours!=0 minutes !==0 seconds !=0
        if (seconds !== 0) {
          seconds--;
        }
        // day != 0 && hours!=0 minutes !==0 seconds =0
        else {
          seconds = 60;
          minutes--;
        }
      }
      // day != 0 && hours!=0 minutes =0
      else {
        // day != 0 && hours!=0 minutes ==0 seconds !=0
        if (seconds !== 0) {
          seconds--;
        }
        // day != 0 && hours!=0 minutes ==0 seconds =0
        else {
          hours--;
          seconds = 60;
          minutes = 60;
        }
      }
    }
    // day != 0 && hours==0
    else {
      // day != 0 && hours==0 minutes !==0
      if (minutes !== 0) {
        if (seconds !== 0) {
          seconds--;
        } else {
          seconds = 60;
          minutes--;
        }
      } else {
        if (seconds === 0) {
          seconds--;
        } else {
          seconds = 60;
          minutes = 60;
          hours = 23;
          days--;
        }
      }
    }
  }
  // days=0
  else {
    if (hours !== 0) {
      if (minutes !== 0) {
        if (seconds !== 0) {
          seconds--;
        } else {
          seconds = 60;
          minutes--;
        }
      } else {
        // days =0 hours !=0 minutes==0
        if (seconds !== 0) {
          seconds--;
        } else {
          seconds = 60;
          minutes = 60;
          hours--;
        }
      }
    }
    // day =0 hour =0
    else {
      if (minutes !== 0) {
        if (seconds !== 0) {
          seconds--;
        } else {
          seconds = 60;
          minutes--;
        }
      } else {
        // days =0 hours ==0 minutes==0
        if (seconds !== 0) {
          seconds--;
        } else {
          clearInterval(time);
          document.querySelector("button").style.backgroundColor = "#fb8f2c";
          document.querySelector("#button").addEventListener("click", () => {
            window.open("index.html");
          });
        }
      }
    }
  }
  if (seconds < 10)
    document.querySelector(".seconds").innerHTML = `0${seconds}`;
  else document.querySelector(".seconds").innerHTML = `${seconds}`;

  if (minutes < 10)
    document.querySelector(".minutes").innerHTML = `0${minutes}`;
  else document.querySelector(".minutes").innerHTML = `${minutes}`;

  if (hours < 10) document.querySelector(".hours").innerHTML = `0${hours}`;
  else document.querySelector(".hours").innerHTML = `${hours}`;

  if (days < 10) document.querySelector(".days").innerHTML = `0${days}`;
  else document.querySelector(".days").innerHTML = `${days}`;
}, 1000);
>>>>>>> 466304f0f9dac6ac54ef83f3ef6c2852e1c3340b