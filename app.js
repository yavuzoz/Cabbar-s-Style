
function cabbars() {
    let autoModel = document.getElementById("model").value;
    let autoColor = document.getElementById("color").value;
    let autoYear = document.getElementById("year").value;
    let customYear = document.getElementById("custom_year").value;

    // 5 yillik musteri
    if (customYear > 4) {
        console.log("arabanizi tamir ediyoruz")
        document.getElementById("sonuc").innerHTML = "arabanizi tamir ediyoruz";
    }

    // bmw
    else if (autoModel == "bmw" && ((autoColor == "red" && (autoYear >= 2010 && autoYear <= 2019)) || (autoColor == "black" && autoYear == 2020))) {
        console.log("arabanizi tamir ediyoruz")
        document.getElementById("sonuc").innerHTML = "arabanizi tamir ediyoruz";
    }

    //audi
    else if (autoModel == "audi" && (autoColor == "red" || "black") && ((autoYear >= 2005 && autoYear <= 2010) || (autoYear <= 2020))) {
        console.log("arabanizi tamir ediyoruz")
        document.getElementById("sonuc").innerHTML = "arabanizi tamir ediyoruz";
    }

    // vw
    else if (autoModel == "vw" && (autoColor == "black") && (autoYear >= 2001 && autoYear <= 2018)) {
        console.log("arabanizi tamir ediyoruz")
        document.getElementById("sonuc").innerHTML = "arabanizi tamir ediyoruz";
    }
    // geriye kalan kosullar
    else {
        console.log("uzgunum arabanizi tamir edemeyiz")
        document.getElementById("sonuc").innerHTML = "baska sefere insaallah";
    }
}

