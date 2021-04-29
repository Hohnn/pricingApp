const toggleBilling = document.getElementById("toggleBilling")
let classActive = 'toggleActive'
myToggle(toggleBilling, classActive)



function myToggle(event, className) {
    event.addEventListener('click', () => {
    let class2 = event.classList
    class2.toggle(className)
    })
}

const price = document.getElementById("priceNumber")

document.getElementById("myRange").oninput = function() {
    var value = (this.value-this.min)/(this.max-this.min)*100
    this.style.background = 'linear-gradient(to right, hsl(174, 77%, 80%) 0%, hsl(174, 77%, 80%)' + value + '%, hsl(224, 65%, 95%) ' + value + '%, hsl(224, 65%, 95%) 100%)'
    price.innerHTML = "$" + this.value + ".00"
};


