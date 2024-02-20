// // Side-menu

function toggleSideMenu() {
    var sideMenu = document.getElementById('side-menu');
    if (sideMenu.style.left === "-250px") {
      sideMenu.style.left = "0";
    } else {
      sideMenu.style.left = "-250px";
    }
  }

  const userName = sessionStorage.getItem('userName');
  const p_name = document.querySelector(".p_name");
  p_name.innerHTML = userName;
  p_name.innerHTML = userName.toUpperCase();

  // const coursename = document.querySelector("h2"); // This is the data you want to pass to the home page
  // sessionStorage.setItem('coursename', coursename); // Store the username in session storage
  // window.location.href = "course1.html"; 