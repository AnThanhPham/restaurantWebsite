let button = document.getElementsByTagName('button')[0]
button.addEventListener('click',()=>{
    alert(`Your review has been submitted`)
    document.getElementById("name").value=``
    document.getElementById("email").value=``
    document.getElementById("review").value=``
})
