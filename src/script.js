function toggle() {
    var iframe = document.getElementById("interactiveIframe");
    var button = document.getElementById("interactiveButton");
    iframe.classList.remove("hidden");
    button.classList.add("hidden");
}

var accItem = document.getElementsByClassName('accordionItem');
var accHD = document.getElementsByClassName('accordionItemHeading');
for (i = 0; i < accHD.length; i++) {
    accHD[i].addEventListener('click', toggleItem, false);
}
function toggleItem() {
    var itemClass = this.parentNode.parentNode.className;
    for (i = 0; i < accItem.length; i++) {
        accItem[i].className = 'accordionItem close';
    }
    if (itemClass == 'accordionItem close') {
        this.parentNode.parentNode.className = 'accordionItem open';
    }
}