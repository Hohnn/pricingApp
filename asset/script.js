const toggleBilling = document.getElementById("toggleBilling")
let classActive = 'toggleActive'
myToggle(toggleBilling, classActive)



function myToggle(event, className) {
    event.addEventListener('click', () => {
    let class2 = event.classList
    class2.toggle(className)
    })
}

