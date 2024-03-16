var arr = [
    { dp: "human.jpg", img: "story1.png" },
    { dp: "pp.jpg", img: "story2.jpg" },
    { dp: "pt.jpg", img: "story3.jpg" },
    { dp: "shon.jpg", img: "story4.jpg" }
];
var flag=0;
var card=document.querySelector("#card")
var red=document.querySelector("#like-btns")
var love=document.querySelector("#like-big")
var clutter = "";
arr.forEach(function (elem, idx) {
    clutter += `<div class="story">
    <img id="${idx}" src="${elem.dp}" alt="">
</div>`;
});

document.querySelector("#storiyan").innerHTML = clutter;

document.querySelector("#storiyan").addEventListener("click", function (dets) {
    var index = parseInt(dets.target.id);
    document.querySelector("#full-scr").style.display = "block";
    document.querySelector("#full-scr").style.backgroundImage = `url(${arr[index].img})`;
    document.querySelector(".insta-profile").style.opacity=0;
    document.querySelector(".like-elem").style.opacity=0;
    

    setTimeout(function () {
        document.querySelector("#full-scr").style.display = "none";
        document.querySelector(".insta-profile").style.opacity=1;
        document.querySelector(".like-elem").style.opacity=1;
    
    }, 3000);

    var grow = 0;
    var intervalId = setInterval(function () {
        if (grow < 100) {
            document.querySelector("#growth").style.width = `${grow++}%`;
        } else {
            grow = 0;
            clearInterval(intervalId);
        }
    }, 30);
});

    card.addEventListener("dblclick",function(){
        love.style.transform='translate(-50%,-50%) scale(1)'
        love.style.opacity=0.8;
        setTimeout(function () {
            love.style.opacity=0
        },1000)
        
        setTimeout(function () {
            love.style.transform='translate(-50%,-50%) scale(0)'
        },2000)
        if(flag==0){
            red.style.fill="red";
            flag=1;
            }
            else{
                red.style.fill="rgb(49, 44, 44)";
                flag=0;
            }
    })


document.querySelector("#like-btns").addEventListener("click",function(){
    love.style.transform='translate(-50%,-50%) scale(1)'
    love.style.opacity=0.8;
    setTimeout(function () {
        love.style.opacity=0
    },1000)
    
    setTimeout(function () {
        love.style.transform='translate(-50%,-50%) scale(0)'
    },2000)
    
    if(flag==0){
        red.style.fill="red";
        flag=1;
        }
        else{
            red.style.fill="rgb(49, 44, 44)";
            flag=0;
        }
        
})

