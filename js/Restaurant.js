//THE CODE BELOW ALLOWS THE HAMBURGER OPEN THE DROPDOWN WHEN CLICKED
let burgImage = document.getElementById('burger_img');
burgImage.addEventListener('click', function(){
    Dropdown_sec.style.display = 'flex'
})

// THE CODE BELOW CLOSES THE DROPDOWN WHEN THE 'X' SIGN IS CLICKED
let closeIcon = document.getElementById('exit_button');
closeIcon.addEventListener('click',function(){
    Dropdown_sec.style.display = 'none';
})