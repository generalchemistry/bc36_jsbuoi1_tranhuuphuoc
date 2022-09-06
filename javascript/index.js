//Ngăn Reload value khi submit
function preventReload() {
    event.preventDefault();
}

// Báo lỗi dữ liệu trống
function validValue(form_th, result_th, alert_th) {
    var inputValue = document.getElementById(form_th).getElementsByTagName("input");
    var result = document.getElementById(result_th);
    var alert = document.getElementById(alert_th);
    result.style.display = "block";
    alert.style.display = "none";
    for (var i = 0; i < inputValue.length; i++) {
        if (inputValue[i].value == "") {
            result.style.display = "none";
            alert.style.display = "block";
            break;
        }
    };

}

//Lấy dữ liệu radio
function radioButton(target) {
    var valueRadio = "";
    var checkbox = document.getElementsByName(target);
    for (var i = 0; i < checkbox.length; i++) {
        if(checkbox[i].checked==true){
            valueRadio = checkbox[i].value;
            break;
        }
    }
    return valueRadio;
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
    var range5Number = document.getElementById("form2").getElementsByTagName("input");
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



function TinhToan(i){
    var exercise="exercise"+i;
    var form="form"+i;
    var result="result"+i;
    var btnSubmit="btnSubmit"+i;
    var alertNoti="alert"+i;
    document.getElementById(btnSubmit).addEventListener("click",function(){
        window[exercise]();
        validValue(form,result,alertNoti);
        preventReload();
    })
}


TinhToan(1);
TinhToan(2);
TinhToan(3);
TinhToan(4);
TinhToan(5);
