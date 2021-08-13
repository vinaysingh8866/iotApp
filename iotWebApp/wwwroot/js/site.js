// Please see documentation at https://docs.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.


var firebaseConfig = {
    apiKey: "AIzaSyDVN17857pJ67ktDKXKwBYrZbBU1r4lW-c",
    authDomain: "iotapp-8edb8.firebaseapp.com",
    databaseURL: "https://iotapp-8edb8-default-rtdb.firebaseio.com",
    projectId: "iotapp-8edb8",
    storageBucket: "iotapp-8edb8.appspot.com",
    messagingSenderId: "658233283262",
    appId: "1:658233283262:web:4447cc3d242c21f37184ef",
    measurementId: "G-CWS0BX6DTM"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

const deviceId = document.getElementById("deviceId")
const deviceType = document.getElementById("deviceType")
const deviceValue = document.getElementById("deviceValue")
const addBtn = document.getElementById("addBtn")
const removeBtn = document.getElementById("removeBtn")
const updateBtn = document.getElementById("updateBtn")
const rootRef = database.ref('/devices/')
const database = firebase.database();

addBtn.addEventListener('click', (e) => {
    e.preventDefault(); 
    rootRef.child(deviceId.value).set({
        device_type: deviceType.value,
        value: deviceValue.value
    })
})

updateBtn.addEventListener('click', (e) => {
    e.preventDefault();
    const newData = {
        device_type: deviceType.value,
        value: deviceValue.value
    }
    const updates = {};
    updates['/devices/' + deviceId.value]
    database.ref().update(updates);
})

removeBtn.addEventListener('click', e => {
    e.preventDefault();
    rootRef.child(deviceId.value).remove()
})
