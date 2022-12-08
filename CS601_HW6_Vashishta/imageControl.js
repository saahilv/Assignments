const sourceImg = {
    0:  "Media/Flower1.png",
    1:  "Media/Flower2.png",
    2:  "Media/Flower3.png",
    3:  "Media/Flower4.png",
}

var currSource = 0;

function changeImage() {
    var src = document.getElementById("flowerImage").src;
    currSource = (currSource + 1) % 4;
    var i = sourceImg[currSource];
    document.getElementById("flowerImage").src = i;
}