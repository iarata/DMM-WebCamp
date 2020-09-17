// var name;
// var result;

// name = prompt("お名前を教えて下さい。");
// document.getElementById("name").innerHTML = name;

// var rand = Math.floor( Math.random() * 5);
// if (rand == 0) {
//   userresult = "大吉";
// }
// if (rand == 1) {
//   userresult = "中吉";
// }
// if (rand == 2) {
//   userresult = "小吉";
// }
// if (rand == 3) {
//   userresult = "吉";
// }
// if (rand == 4) {
//   userresult = "凶";
// }
// document.getElementById("result").innerHTML = userresult;

(function() {
    // Selecting the input element
    const form = document.querySelector('.nameForm')
    //Set up Submit Button
    form.addEventListener('submit', function(e){
        // prevent the form's default submission action
        e.preventDefault()
        //Get user's input from from
        const userName = document.querySelector('.nameField')
        const feedback = document.querySelector('.feedback')
        const welcomeName = document.querySelector('.nameContent')
        const displayName = document.querySelector('#name')
    
        if (userName.value === ''){
            feedback.classList.add('show')
            setTimeout(function(){
            feedback.classList.remove('show')
            }, 2000)
            if (displayName.value != '') {
                welcomeName.classList.remove('show')
            }
        } else {
            //Change message content and clear the message input
            welcomeName.classList.add('show')
            displayName.textContent = userName.value
            userName.value = ''
        }
    })
    })()