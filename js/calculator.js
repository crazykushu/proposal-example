function computeSaving() {
  var coffee = document.getElementById('coffee').value * 3;
  var burger = document.getElementById('burger').value * 8;
  var pizza = document.getElementById('pizza').value * 20;
  var movie = document.getElementById('movie').value * 14;
  var totalMonth = coffee + burger + pizza + movie;
  var totalYear = totalMonth * 12;
  var result = 0;
  for (i = 0; i < 30; i++) {
    result = result + totalYear;
    result = (result * 1.07);
  }
  result = result.toFixed(2).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  document.getElementById('result').innerHTML = "Your total saving after 30 years could be: $" + result;
}