function toggle2020() {
    var iframe = document.getElementById("interactiveIframe2020");
    var button = document.getElementById("interactiveButton2020");
    iframe.classList.remove("hidden");
    button.classList.add("hidden");
}

function toggle2021() {
    var iframe = document.getElementById("interactiveIframe2021");
    var button = document.getElementById("interactiveButton2021");
    iframe.classList.remove("hidden");
    button.classList.add("hidden");
}

function toggle2022() {
    var iframe = document.getElementById("interactiveIframe2022");
    var button = document.getElementById("interactiveButton2022");
    iframe.classList.remove("hidden");
    button.classList.add("hidden");
}

var accItem = document.getElementsByClassName('accordionItem');
var accHD = Array.prototype.slice.call(document.getElementsByClassName('accordionItemHeading'));
for (i = 0; i < accHD.length; i++) {
    accHD[i].addEventListener('click', toggleItem, false);
}
function toggleItem() {
    var index = Array.prototype.indexOf.call(accHD, this)
    var itemClass = accItem[index].className;
    if (itemClass == 'accordionItem open') {
        return;
    }
    for (i = 0; i < accItem.length; i++) {
        accItem[i].className = 'accordionItem close';
        accHD[i].className = 'accordionItemHeading close';
    }
    if (itemClass == 'accordionItem close') {
        accItem[index].className = 'accordionItem open';
        accHD[index].className = 'accordionItemHeading open';
    }
}
