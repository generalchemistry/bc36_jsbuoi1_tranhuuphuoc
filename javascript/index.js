// Báo lỗi dữ liệu trống
function validValue(x) {
  var inputValue = document
    .getElementsByClassName("form-group")
    [x].getElementsByTagName("input");
  for (var i = 0; i < inputValue.length; i++) {
    if (inputValue[i].value == "") {
      return false;
    }
  }
  return true;
}

/*Bài 1. Tính tiền lương nhân viên */
function exercise1() {
  var dayWork = document.getElementById("dayWork").value;
  var salaryPerDay = document.getElementById("salaryPerDay").value;
  var salaryMonth = salaryPerDay * dayWork;
  return (
    "Lương tháng của bạn là: " +
    Intl.NumberFormat({ style: "currency" }).format(salaryMonth)
  );
}

/*Bài 2. Tính tiền lương nhân viên */
function exercise2() {
  var number1 = parseFloat(document.getElementById("number1").value);
  var number2 = parseFloat(document.getElementById("number2").value);
  var number3 = parseFloat(document.getElementById("number3").value);
  var number4 = parseFloat(document.getElementById("number4").value);
  var number5 = parseFloat(document.getElementById("number5").value);
  var average5Number = (number1 + number2 + number3 + number4 + number5) / 5;
  return "Giá trị trung bình của 5 số thực là: " + average5Number;
}

// Bài 3. Quy đổi tỉ giá
function exercise3() {
  var currencyUSD = document.getElementById("currencyUSD").value;
  const exchangeRate = 23500;
  var currencyVND = currencyUSD * exchangeRate;
  return (
    "Mệnh giá quy đổi được là: " +
    Intl.NumberFormat({ style: "currency" }).format(currencyVND) +
    " VND"
  );
}

//Bài 4. Tính diện tích, chu vi hình chữ nhật
function exercise4() {
  var rectgLength = parseFloat(document.getElementById("rectgLength").value);
  var rectgWidth = parseFloat(document.getElementById("rectgWidth").value);
  var unit = document.getElementById("unit").value;
  perimeter = (rectgLength + rectgWidth) * 2;
  area = rectgLength * rectgWidth;

  return (
    "Giá trị chu vi là:  " +
    perimeter +
    " " +
    unit +
    "<br>" +
    "Giá trị diện tích là:  " +
    area +
    " " +
    unit +
    "<sup>2</sup>"
  );
}

//Bài 5. Tính tổng 2 kí số
function exercise5() {
  var number2Digit = document.getElementById("number2Digit").value;
  var unitDigit = number2Digit % 10;
  var tenDigit = Math.floor(number2Digit / 10);
  if (tenDigit > 9 || tenDigit < 1) {
    result[4].style.color = "red";
    return "Số được nhập phải có 2 chữ số";
  }
  var sum2Digit = unitDigit + tenDigit;
  result[4].style.color = "green";
  return "Tổng 2 kí số là: " + sum2Digit;
}

var btnSubmit = document.getElementsByClassName("btn-success");
var result = document.getElementsByClassName("result");
var alert = document.getElementsByClassName("alert");
for (var i = 0; i < btnSubmit.length; i++) {
  btnSubmit[i].addEventListener("click", function (e) {
    e.preventDefault();
    var x = $(btnSubmit).index(this);
    if (validValue(x) == true) {
      result[x].innerHTML = window["exercise" + (x + 1)]();
      result[x].style.display = "block";
      alert[x].style.display = "none";
    } else {
      alert[x].style.display = "block";
      result[x].style.display = "none";
    }
  });
}
