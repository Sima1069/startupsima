let title = document.title;
// let linkIcon = document.querySelector(".linkIcon");
let alttitle = "Are you still there?";
window.onblur = function () { 
    document.title = alttitle;
    // linkIcon.href = "/img/g+.webp"
};
window.onfocus = function () { document.title = title; };





if (typeof Storage !== "undefined") {
  if (localStorage.visitcount) {
    document.getElementById("result").innerHTML =
      "Welcome back, you've been here " +
      localStorage.visitcount +
      " times before.";
    localStorage.visitcount = Number(localStorage.visitcount) + 1;
  } else {
    localStorage.visitcount = 1;
    document.getElementById("result").innerHTML =
      "This is your first time here! Welcome.";
  }
  // document.getElementById("result").innerHTML = "You have clicked the button " + localStorage.clickcount + " time(s).";
} else {
   alert("Sorry, your browser does not support web storage.  Changes will not be saved");
  document.getElementById("result").innerHTML =
    "Sorry, your browser does not support web storage...";
}

console.log("localstorage visit count now: " + localStorage.visitcount);


let hackbtn = document.querySelector('#hacktext')
let hackText = document.querySelectorAll('#hackp')
hackbtn.addEventListener('click', function (evt) {
    if (evt.detail === 3) {
        for(let i = 0;i < hackText.length; i++){
            hackText[i].innerHTML = "Hack this site"
            hackText[i].style.color = "red"
            hackText[i].style.fontWeight = "bolt"
        }
        setTimeout(function () {
            alert("Hack this site")
        },5)
        
        
    }
});


const parentContainer =  document.querySelector('.blog')
parentContainer.addEventListener('click', event=>{
    const current = event.target
    const isReadMoreBtn = current.className.includes('read-more-btn')
    if(!isReadMoreBtn) return
    const currentText = event.target.parentNode.querySelector('.read-more-text')
    currentText.classList.toggle('read-more-text--show')
    current.textContent = current.textContent.includes('Read more') ? "Read less" : "Read more"
})




$('.menu').on('click', function(){
    $('.burger').toggleClass('burger-active');
    $('.burger-top').toggleClass('burger-top-active');
    $('.burger-bottom').toggleClass('burger-bottom-active');
    $('.header__list').toggleClass('mobile');
    $('body').toggleClass('lock');
    // $('.header').style.backgroundColor = "red"
});


let list = document.querySelectorAll('.list');
    let itemBox = document.querySelectorAll('.itemBox');

    for(let i = 0; i<list.length; i++){
        list[i].addEventListener('click',function(){
            for(let j = 0; j<list.length; j++){
                list[j].classList.remove('active');
            };
            this.classList.add('active');

            let dataFilter = this.getAttribute('data-filter');

            for(let k = 0; k<itemBox.length; k++){
                itemBox[k].classList.remove('active');
                itemBox[k].classList.add('hide');

                if(itemBox[k].getAttribute('data-item') == dataFilter || dataFilter == "All"){
                    itemBox[k].classList.remove('hide');
                    itemBox[k].classList.add('active');
                };
            };
        });
    }; 


window.addEventListener("scroll",function(){
    $("header").toggleClass("sticky",window.scrollY > 0)
})



$(document).ready(function(){
    $('.intro').mousemove(function(e){
      let pageX;
      let pageY;
      let amountMovedX = (e.pageX * -1 / 1000);
      let amountMovedY = (e.pageY * -1 / 30);
      $(this).css('background-position',amountMovedX+'px '+amountMovedY+'px');
  });
});





$(".header__list").on("click", "a", function() {
    var href = $(this).attr("href");
    if (href.indexOf("#") === 0) {
      $("html, body").animate({
        scrollTop: ($(href).offset().top - 90)
      });
      return false;
    }

});
$(".paralax__inner").on("click", "a", function() {
    var href = $(this).attr("href");
    if (href.indexOf("#") === 0) {
      $("html, body").animate({
        scrollTop: ($(href).offset().top - 90)
      });
      return false;
    }

});

let logo = $('#logo')
function TopscrollTo () {
    if(window.scrollY!=0) {
      setTimeout(function() {
        window.scrollTo(0,window.scrollY-30);
        TopscrollTo();
      }, 5);
    }
}
logo = addEventListener('click', TopscrollTo())


const animItems = document.querySelectorAll('._anim-items');

    if(animItems.length > 0){
        window.addEventListener('scroll', animOnScroll);
        function animOnScroll(){
            for (let index = 0; index < animItems.length; index++) {
                const animItem = animItems[index];
                const animItemHeight = animItem.offsetHeight;
                const animIteamOffset = offset(animItem).top;
                const animStart = 4;
                let animItemPoint = window.innerHeight - animItemHeight / animStart;
                if (animItemHeight > window.innerHeight){
                    animItemPoint = window.innerHeight - window.innerHeight / animStart;
                }
    
                if ((pageYOffset > animIteamOffset - animItemPoint) && pageYOffset < (animIteamOffset + animItemHeight)) {
                    animItem.classList.add('_active');
                } else{
                    if(!animItem.classList.contains('_anim-no-hide')){
                       animItem.classList.remove('_active');
                    }
                }
                
            }
        }
        function offset(el){
            const rect = el.getBoundingClientRect(),
               scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
               scrollTop = window.pageYOffset || document.documentElement.scrollTop;
            return { top: rect.top + scrollTop, left: rect.left + scrollLeft}
        }
    
        setTimeout(() =>{
            animOnScroll();
        }, 300);
    }

/////////////////////////////////////////// form
let usernama        = document.forms["vform"]["nama"];
let email           = document.forms["vform"]["email"];
let subj            = document.forms["vform"]["subj"];
let comp            = document.forms["vform"]["comp"];
let text            = document.forms["vform"]["text"];

usernama.addEventListener("blur", verifikasiNama, true);
email.addEventListener("blur", verifikasiEmail, true);
subj.addEventListener("blur", verifikasiSubj, true);
comp.addEventListener("blur", verifikasiComp, true);
text.addEventListener("blur", verifikasiText, true);


function Validate(){
  if(usernama.value == ""){
    usernama.style.border = '1px solid red';
    usernama.focus();
  }
  if(email.value == ""){
    email.style.border = '1px solid red';
    email.focus();
  }
  if(subj.value == ""){
    subj.style.border = '1px solid red';
    subj.focus();
  }
  if(comp.value == ""){
    comp.style.border = '1px solid red';
    comp.focus();
  }
  if(text.value == ""){
    text.style.border = '1px solid red';
    text.focus();
  }
  return false;
}
function verifikasiText(){
    if(text.value !=""){
    text.style.border = '1px solid silver';
    return true;
  }
}
function verifikasiSubj(){
    if(subj.value !=""){
    subj.style.border = '1px solid silver';
    return true;
  }
}
function verifikasiComp(){
    if(comp.value !=""){
    comp.style.border = '1px solid silver';
    return true;
  }
}
function verifikasiNama(){
    if(usernama.value !=""){
    usernama.style.border = '1px solid silver';
    return true;
  }
}
function verifikasiEmail(){
  if(email.value !=""){
    email.style.border = '1px solid silver';
    return true;
  }
}



/////////////////////////////// slider
let position = 0
const slidesToScroll = 1
const container = document.querySelector('.slider-container')
const track = document.querySelector('.slider-track')
const btnPrev = document.querySelector('.btn-prev')
const btnNext = document.querySelector('.btn-next')
const items = document.querySelectorAll('.about__slide')
const itemsCount = items.length
const slidesToShow = 9
const itemWidth = container.clientWidth / slidesToShow
const movePosition =  slidesToScroll * itemWidth

items.forEach((item) => {
  item.style.minWidth = `${itemWidth}px`
})

btnNext.addEventListener('click', () => {
  const itemLeft = itemsCount - (Math.abs(position) + slidesToShow * itemWidth) / itemWidth

  position -= itemLeft >= slidesToScroll ? movePosition : itemLeft * itemWidth

  setPostion()
  checkBtns()
})

btnPrev.addEventListener('click', () => {
  const itemLeft = Math.abs(position) / itemWidth

  position += itemLeft >= slidesToScroll ? movePosition : itemLeft * itemWidth

  setPostion()
  checkBtns()
})

const setPostion = () =>{
  track.style.transform = `translateX(${position}px)`
}

const checkBtns = () =>{
  btnPrev.disabled = position === 0
  btnNext.disabled = position <= -(itemsCount - slidesToShow) * itemWidth
}

checkBtns()



////////////////////////////slider point
function sliderFunc() {
  document.querySelectorAll('.slider__dot').forEach(element => {
    element.addEventListener('click', (e) => {
      let num = parseInt(element.dataset.dot - 1)
      document.querySelector('.slider__dot.active').classList.remove('active')
      document.querySelector('.slider__item.active').classList.remove('active')
      element.classList.add('active')
      document.querySelector('.slider__item[data-slide="' + (num + 1) + '"]').classList.add('active')
      let margin = 36
      let offset
      if (num == 0) {
        offset = 0
      } else {
        offset = (document.querySelector('.slider__item').clientWidth + margin) * num
      }
      document.querySelector('.slider__list').style.transform = 'translateX(-' + offset + 'px)'
    })
  })
}

document.querySelector('.slider__list').style.setProperty("--heightItem", (document.documentElement.clientHeight/2)+'px')

window.addEventListener('load', () => {
  sliderFunc()
})



//////////////////////////drag
let keys = document.querySelectorAll('.admin__key'),
    introBoxes = document.querySelectorAll('.admin__box');
introBoxes.forEach((elem) => {
    elem.ondragover = function(e){
        if((e.target.children.length == 0) && !e.target.classList.contains('admin__key')){
            e.target.style.backgroundColor = 'blue';
        } else if((e.target.children.length > 0) && !e.target.classList.contains('admin__key')){
            let keys = e.target.children;
        }
        e.preventDefault();
        if(e.target.classList.contains('admin__key')){
            elem.ondrop = function(e){
                e.preventDefault();
                document.querySelector('#' + e.dataTransfer.getData('element')).style.display = 'block';
            }
        } else{
            elem.ondrop = function(e){
                let item = document.querySelector('#' + e.dataTransfer.getData('element'));
                e.target.append(item);
                item.style.display = 'block';
                e.target.style.backgroundColor = '#ffffff';
                let succesful = false;
                introBoxes.forEach(elem =>{
                    let code = '';
                    for( let i = 0; i < elem.children.length; i++){
                        code += elem.children[i].getAttribute('data-code');
                    }
                    if(elem.getAttribute('data-code') == code){
                        succesful = true;
                        
                        
                    }
                    else{
                        succesful = false;
                    }
                });
                if(succesful){
                    let h2 = document.createElement('h2');
                    h2.classList.add('admin__title');
                    h2.innerHTML = 'Ви підібрали вірний пароль';
                    h2.style.color = '#000000';
                    document.querySelector('.admin__popup').appendChild(h2)
                    setTimeout(() => {document.querySelector('.admin__popup').style.left = '-100%'; document.body.style.overflow = 'auto';}, 1000)
                }
            }
        }
    }
});
keys.forEach((elem)=>{
    elem.ondragstart = function(e){
        setTimeout(() => {
            elem.style.display = 'none';
        }, 0);
        e.dataTransfer.setData('element', elem.id);
    }
})
keys.forEach(elem => {
    elem.addEventListener('click', function(e){
        if(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)){
            localStorage.setItem('element', JSON.stringify(elem.id));
            setTimeout(() => {
                elem.style.display = 'none';
            }, 0);
        }
    });
});
introBoxes.forEach(elem => {
    elem.onclick = function(e){
        if(JSON.parse(localStorage.getItem('element'))){
            let item = document.querySelector('#' + JSON.parse(localStorage.getItem('element')));
            elem.append(item);
                item.style.display = 'block';
                introBoxes.forEach(elem => {
                });
                let succesful = false;
                introBoxes.forEach(elem =>{
                    let code = '';
                    for( let i = 0; i < elem.children.length; i++){
                        code += elem.children[i].getAttribute('data-code');
                    }
                    if(elem.getAttribute('data-code') == code){
                        succesful = true;
                    }
                    else{
                        succesful = false;
                    }
                });
                if(succesful){
                    let h2 = document.createElement('h2');
                    h2.classList.add('admin__title');
                    h2.innerHTML = 'Ви підібрали вірний пароль';
                    h2.style.color = '#000000';
                    document.querySelector('.admin__alert').appendChild(h2)
                    setTimeout(() => {document.querySelector('.admin__popup').style.left = '-100%'; document.body.style.overflow = 'auto';}, 1000)
                }
        }
    }
});