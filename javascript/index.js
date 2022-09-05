function preventReload() {
    event.preventDefault();
}
// KIỂM TRA DỮ LIỆU TRỐNG
function validationValue(exercise_th, result_th, alert_th) {
    var inputValue = document.getElementById(exercise_th).getElementsByTagName("input");
    var result = document.getElementById(result_th);
    var alert = document.getElementById(alert_th);
    var countBlank = 0;
    for (var i = 0; i < inputValue.length; i++) {
        if (inputValue[i].value == "") {
            countBlank += 1;
            result.style.display = "none";
            alert.style.display = "block";
        }
    };
    if (countBlank == 0) {
        result.style.display = "block";
        alert.style.display = "none";
    }
}
function radioButton(target) {
    var x = "";
    var checkbox = document.getElementsByName(target);
    for (var i = 0; i < checkbox.length; i++) {
        switch (checkbox[i].checked) {
            case true:
                x = checkbox[i].value;
                break;
            case false:
                break;
        };
    }
    return x;
}

/*Bài 1. Tính tiền lương nhân viên */
function exercise1() {
    var dayWork = document.getElementById("dayWork").value;
    var salaryDay = 100000;
    // Biến Output
    var salaryMonth = document.getElementById("salaryMonth");
    // Process
    salaryMonth.innerHTML = parseInt(dayWork) * salaryDay + " VNĐ";
}

/*Bài 2. Tính tiền lương nhân viên */
function exercise2() {
    //Biến Input
    var range5Number = document.getElementById("exercise2").getElementsByTagName("input");
    //Biến Output
    var average5Number = document.getElementById("average5Number");


    //Process
    // B1. Tính tổng của 5 số
    var sum = 0;
    for (var i = 0; i < range5Number.length; i++) {
        sum += parseFloat(range5Number[i].value);
    }
    //B2. Tính trung bình - làm tròn 2 chữ số thập phân
    average5Number.innerHTML = Math.round(sum / 5 * 100.0) / 100.0;
}

// Bài 3. Quy đổi tỉ giá
function exercise3() {
    //Biến Input
    var currencyUSD = parseInt(document.getElementById("currencyUSD").value);
    var exchangefr = 23500;
    //Biến Output
    var currencyVND = document.getElementById("currencyVND");

    //Process
    currencyVND.value = currencyUSD * exchangefr;
}

//Bài 4. Tính diện tích, chu vi hình chữ nhật
function exercise4() {
    //Biến Input
    var rectgLength = parseInt(document.getElementById("rectgLength").value);
    var rectgWidth = parseInt(document.getElementById("rectgWidth").value);
    var unit = radioButton("unit");

    //Biến Output
    var dienTich = document.getElementById("dienTich");
    var chuVi = document.getElementById("chuVi");

    //Process
    chuVi.innerHTML = (rectgLength + rectgWidth) * 2 + " " + unit;
    dienTich.innerHTML = rectgLength * rectgWidth + " " + unit + "2";
}

//Bài 5. Tính tổng 2 kí số
function exercise5() {
    //Biến Input
    var number2Digit = parseInt(document.getElementById("number2Digit").value);
    //Biến Output
    var sum2Digit = document.getElementById("sum2Digit");

    //Process
    var unitDigit = number2Digit % 10;
    var tenDigit = Math.floor(number2Digit / 10);
    if (tenDigit < 10 && tenDigit > 0) {
        sum2Digit.style.color = "#3D8361";
        sum2Digit.innerHTML = unitDigit + tenDigit;
        sum2Digit.innerHTML= "Tổng 2 kí số là  "+ sum2Digit.innerHTML;
    }
    else {
        sum2Digit.style.color = "red";
        sum2Digit.innerHTML = "Số được nhập phải có 2 chữ số";
    }
}


document.getElementById("btnSubmit1").addEventListener("click", function () {
    preventReload();
    exercise1();
    validationValue("exercise1", "result1", "alert1");
});
document.getElementById("btnSubmit2").addEventListener("click", function () {
    preventReload();
    exercise2();
    validationValue("exercise2", "result2", "alert2");
});
document.getElementById("btnSubmit3").addEventListener("click", function () {
    preventReload();
    exercise3();

    validationValue("exercise3", "result3", "alert3");
});
document.getElementById("btnSubmit4").addEventListener("click", function () {
    preventReload();
    exercise4();
    validationValue("exercise4", "result4", "alert4");
});
document.getElementById("btnSubmit5").addEventListener("click", function () {
    preventReload();
    exercise5();
    validationValue("exercise5", "result5", "alert5");
});




