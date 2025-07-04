let btn = document.querySelector(".btn");
function bought() {
    btn.innerHTML = `<p class="thanks">Order confirmed! Keep shopping</p>`;
}
function sent() {
    let send =   document.querySelector(".sent")
    send.innerHTML = `<p class="thanks">Registered successfully!</p>
    `;
}
let main = document.querySelector("main");
function Register() {
    main.innerHTML = `<div class="form">
            <p class="drop">Sign up</p>
            <div class="fields">
                <input class="in" type="text" placeholder="Full Name" >
                <input class="in" type="email" placeholder="email address">
                <input  class="in" type="text" placeholder="Create a password" spellcheck="true">
                <div class="sent">
                <button class="send" onclick="sent()">Send</button>
            </div>
             </div>    
        </div>`;
}