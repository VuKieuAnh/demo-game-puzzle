function changeImage(a) {
    let part = a.getAttribute("id");
    let imageNumber = Math.floor(Math.random()*5 +1);
    let srcName ="image"+imageNumber+ "/image"+imageNumber+part+".jpg";
    a.setAttribute("src", srcName);
}
function checkDone() {
    let src1 = document.getElementById("part1").getAttribute("src").slice(0,5);
    let src2 = document.getElementById("part1").getAttribute("src");
    let src3 = document.getElementById("part1").getAttribute("src");
    let src4 = document.getElementById("part1").getAttribute("src");
    let src5 = document.getElementById("part1").getAttribute("src");

}
