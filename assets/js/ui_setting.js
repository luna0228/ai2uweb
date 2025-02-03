/*form validation */
// Example starter JavaScript for disabling form submissions if there are invalid fields
(function () {
    'use strict'

    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    var forms = document.querySelectorAll('.needs-validation')

    // Loop over them and prevent submission
    Array.prototype.slice.call(forms)
        .forEach(function (form) {
            form.addEventListener('submit', function (event) {
                if (!form.checkValidity()) {
                    event.preventDefault()
                    event.stopPropagation()
                }

                form.classList.add('was-validated')
            }, false)
        })


})()

//open\close sidebar
var sidebarSwitchHide = document.getElementById('sidebar-hide')
var sidebarSwitchOpen = document.getElementById('sidebar-open')
var sidebarContent = document.getElementById('sidebar-content')
var mainContent = document.getElementById('main-content')
// console.log(sidebarSwitch)
// var bsButton = new bootstrap.Button(sidebarSwitchHide)
// var bsButton = new bootstrap.Button(sidebarSwitchOpen)
sidebarSwitchHide.onclick = function () {
    if (!sidebarContent.classList.contains("close") && !mainContent.classList.contains("full")) {
        sidebarContent.classList.add("close");
        mainContent.classList.add("full");
        console.log('1')
    }
    else {
        sidebarContent.classList.remove("close");
        mainContent.classList.remove("full");
        console.log('2')
    }
};
sidebarSwitchOpen.onclick = function () {
    if (!sidebarContent.classList.contains("close") && !mainContent.classList.contains("full")) {
        sidebarContent.classList.add("close");
        mainContent.classList.add("full");
        console.log('1')
    }
    else {
        sidebarContent.classList.remove("close");
        mainContent.classList.remove("full");
        console.log('2')
    }
};


