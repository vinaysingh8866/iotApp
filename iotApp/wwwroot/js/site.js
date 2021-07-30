// Please see documentation at https://docs.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// Write your JavaScript code.

const deviceId = document.getElementById("deviceId")
const deviceType = document.getElementById("deviceType")
const deviceValue = document.getElementById("deviceValue")
const addBtn = document.getElementById("addBtn")
const removeBtn = document.getElementById("removeBtn")
const updateBtn = document.getElementById("updateBtn")

const database = firebase.database();

addBtn.addEventListener('click', (e) => {
    e.preventDefault();
    database.ref('/devices/' + deviceId.value).set({
        device_type: deviceType.value,
        value: deviceValue.value
    })
})

