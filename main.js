// Created by Chris Tomaskovic
// JavaScript for the main page and form interaction

function submitForm(){
    // Changes the style to display the user info
    document.getElementById("userInfo").style.display = "";
    // Updates the user info based on the values inputted
    document.getElementById("usersName").innerText = document.getElementById("username").value;
    document.getElementById("usersWeapon").innerText = document.getElementById("weapon").value;
    document.getElementById("usersHealth").innerText = document.getElementById("health").value;
    document.getElementById("usersDamage").innerText = document.getElementById("damage").value;
    document.getElementById("usersPoints").innerText = document.getElementById("points").value;
}