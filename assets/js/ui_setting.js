/*form validation */
// Example starter JavaScript for disabling form submissions if there are invalid fields
(function () {
    'use strict'

    //用於表單驗證
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



    //錨點 平滑滑動
    // Define selector for selecting
    // anchor links with the hash
    let anchorSelector = '.class-nav a[href^="#"]';

    // Collect all such anchor links
    let anchorList =
        document.querySelectorAll(anchorSelector);
    // Iterate through each of the links
    anchorList.forEach(link => {
        link.onclick = function (e) {
            console.log(link)
            // Prevent scrolling if the
            // hash value is blank
            e.preventDefault();

            // Get the destination to scroll to
            // using the hash property
            let destination =
                document.querySelector(this.hash);
            if (destination) {
                // Scroll to the destination using
                // scrollIntoView method
                destination.scrollIntoView({
                    behavior: 'smooth'
                });
            }

        }
    });


    //class info cover open/close
    let switchBtnList = document.querySelectorAll('main .btn-line-more');

    switchBtnList.forEach(switchItem => {
        switchItem.onclick = function (e) {

            let coverPlace = document.querySelector(this.hash);
            // console.log(coverPlace)
            if (!coverPlace.classList.contains('show')) {
                coverPlace.classList.add('show')
                this.classList.add('hide')
            }
            else {
                coverPlace.classList.remove('show')

            }
        }
    })

    let moreInfoList = document.querySelectorAll('main .btn-more');

    moreInfoList.forEach(moreInfo => {
        moreInfo.onclick = function (e) {

            let coverPlace = document.querySelector(this.hash);
            console.log(coverPlace)
            if (!coverPlace.classList.contains('show')) {
                coverPlace.classList.add('show')
                this.classList.add('hide')
            }
            else {
                coverPlace.classList.remove('show')

            }
        }
    })


})()

//mobile
window.onload = function () {
    function resize() {
        console.log('resize')
        let w_width = document.documentElement.clientWidth

        if (w_width <= 767) {
            console.log('<=767')
            //立即購買 開啟時段
            //buy now open time picker box
            let buyNowBtn = document.querySelector('button.buyNowBtn');
            let timePickerBox = document.querySelector('.time-picker-box');
            let thisBody = document.querySelector('body');
            let closeTimePickerBox = document.querySelector('.time-picker-box button.close');

            const ToggleTimePickerBox = () => {
                console.log(timePickerBox)
                if (!timePickerBox.classList.contains('show')) {
                    timePickerBox.classList.add('show')
                    thisBody.classList.add('cover')
                }
                else {
                    timePickerBox.classList.remove('show')
                    thisBody.classList.remove('cover')
                }
            }
            buyNowBtn.onclick = function (e) {


                ToggleTimePickerBox()
            }
            closeTimePickerBox.onclick = function (e) {

                ToggleTimePickerBox()
            }
        }
        if (w_width <= 1024) {
            console.log('<=1024')

        }
        else {
            console.log('>1024')
        }
    }
    resize()
    window.addEventListener('resize', resize, false)	// 偵聽事件 resize
}



//classvideo open\close sidebar
var sidebarSwitchHide = document.getElementById('sidebar-hide')
var sidebarSwitchOpen = document.getElementById('sidebar-open')
var sidebarContent = document.getElementById('sidebar-content')
var mainContent = document.getElementById('main-content')

const ToggleClassSidebar = () => {
    if (!sidebarContent.classList.contains('close') && !mainContent.classList.contains('full')) {
        sidebarContent.classList.add('close');
        mainContent.classList.add('full');
        sidebarSwitchOpen.classList.add('show');
        console.log('1')
    }
    else {
        sidebarContent.classList.remove('close');
        mainContent.classList.remove('full');
        sidebarSwitchOpen.classList.remove('show');
        console.log('2')
    }
}

if (sidebarSwitchHide) {
    sidebarSwitchHide.onclick = function () {
        ToggleClassSidebar()
    };
}
if (sidebarSwitchOpen) {
    sidebarSwitchOpen.onclick = function () {
        ToggleClassSidebar()
    };
}






