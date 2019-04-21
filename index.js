/* Given Code, don't edit */

function handleClick(e) {
  const timeString = document.getElementById("time").value;
  displayMessage(greet(timeString));
}

/* End Given Code, don't edit above here...*/

/* Write your implementation of greet() */
function greet(time) {
  const timeArr = time.split(":");
  const hour = parseInt(timeArr[0]);
  if (hour < 12) {
    return "Good Morning";
  } else if (hour < 17 && hour >= 13) {
    return "Good Afternoon";
  } else {
    return "Good Evening";
  }
}
/* Write your implementation of displayMessage() */
function displayMessage(text) {
  document.querySelector("#greeting").innerHTML = text;
}
