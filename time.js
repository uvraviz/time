    setInterval(displayHello, 1000);

    function displayHello() {
        let date = new Date();
        let x = document.getElementById("hours");
        x.textContent = date.getHours();
        let y = document.getElementById("min");

        if (y.textContent < 10 || y.textContent == 0) {
            y.textContent = "0" + date.getMinutes();
        } else {
            y.textContent = date.getMinutes();
        }
        let z = document.getElementById("sec");
        if (z.textContent < 10 || z.textContent == '0') {
            z.textContent = "0" + date.getSeconds();
        } else {
            z.textContent = date.getSeconds();
        }
        let a = document.getElementById("ampm");
        if (x.textContent > 12) {
            a.textContent = "pm";
        } else {
            a.textContent = "am";
        }

    }