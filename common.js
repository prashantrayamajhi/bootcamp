const userInfo = localStorage.getItem("userInfo");

console.log(window.location.href);

function goTo(fileName) {
  let link = window.location.href;
  link = link.split("/");
  let x = link.pop();
  if (x === fileName) {
    return;
  }
  let newLink = link.join("/");
  newLink = newLink + "/" + fileName;
  window.location.href = newLink;
}

if (!userInfo) {
  goTo("registration.html");
}

if (userInfo) {
  const logout = document.getElementById("logout");
  logout.innerHTML = '<p class="nav-link">Logout</p>';
  logout.onclick = function () {
    localStorage.removeItem("userInfo");
    goTo("registration.html");
  };
}
