// Phần 1 em không làm được ạ

//  import { initializeApp } from "https://www.gstatic.com/firebasejs/9.22.0/firebase-app.js";
//  import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.22.0/firebase-analytics.js";
//  import { getDatabase, ref, onValue, child, push, update, set } from "https://www.gstatic.com/firebasejs/9.22.0/firebase-database.js";


//  const firebaseConfig = {
//     apiKey: "AIzaSyDXCdG4xxrQ7jZArXYWFOH6iUcxbNtFS-A",
//     authDomain: "nextgen-fbcde.firebaseapp.com",
//     databaseURL: "https://nextgen-fbcde-default-rtdb.asia-southeast1.firebasedatabase.app",
//     projectId: "nextgen-fbcde",
//     storageBucket: "nextgen-fbcde.appspot.com",
//     messagingSenderId: "938976840354",
//     appId: "1:938976840354:web:2c3aeaaaaf79c79d94a5fb",
//     measurementId: "G-3P5ECNGTFY"
//   };

//   // Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);


document.querySelector('#push').onclick = function(){
    if(document.querySelector('#newtask input').value.length == 0){
        alert("Vui lòng nhập nhiệm vụ bạn cần làm")
    }

    else{
        document.querySelector('#tasks').innerHTML += `
            <div class="task">
                <input type="radio" id="taskname">
                    ${document.querySelector('#newtask input').value}
                </input>
                <button class="delete">Delete</button>
            </div>
        `;

        var current_tasks = document.querySelectorAll(".delete");
        for(var i=0; i<current_tasks.length; i++){
            current_tasks[i].onclick = function(){
                this.parentNode.remove();
            }
        }
    }
}