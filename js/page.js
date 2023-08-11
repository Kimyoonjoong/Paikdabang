$(document).ready(function () {
  $("#fullpage").fullpage({
    //options here
    autoScrolling: true,
    scrollHorizontally: true,

  });
 
  
});

let head = document.getElementsByTagName("header");
let navBar = document.querySelector(".nav-bar");
let MnavBar = document.querySelector(".m-nav-bar");
let navList = document.querySelectorAll(".nav-bar>li");
let MnavList = document.querySelectorAll(".m-nav-bar>li");
let subList = document.querySelectorAll(".sub-bar");
let MsubList = document.querySelectorAll(".m-sub-bar");
let navBtn = document.querySelector(".nav-btn");
let close = document.querySelector(".m-navbar-btn");
let set = document.querySelectorAll(".section");

//herader hover 동작

for (let i = 0; i < navList.length; i++) {
  navList[i].addEventListener("mouseover", function () {
    // head[0].style.height = "380px";
    // head[0].style.backgroundColor = "#fff";
    head[0].classList.add("white-header");
    head[0].classList.remove("transparent-header");

    for (let j = 0; j < subList.length; j++) {
      subList[j].style.height = "250px";
    }
  });

  navList[i].addEventListener("mouseout", function () {
    //head[0].style.height = "100px";
    // head[0].style.backgroundColor = "transparent";
    // head[0].style.boxShadow = "none";
    head[0].classList.add("transparent-header");
    head[0].classList.remove("white-header");
    for (let j = 0; j < subList.length; j++) {
      subList[j].style.height = "0px";
    }
  });
}

// for (let i = 0; i < set.length; i++) {
//   if ((set[i] = set[0])) {
//     head[0].style.backgroundColor = "transparent";
//     head[0].style.boxShadow = "none";
//     navList[i].addEventListener("mouseout", function () {
//       head[0].style.backgroundColor = "transparent";
//       head[0].style.boxShadow = "none";
//     });
//   } else if (set[i] != set[0]) {
//     head[0].style.backgroundColor = "#fff";
//     head[0].style.boxShadow = "0px 0px 5px 0px rgba(0,0,0,0.1)";
//   }
// }

// submenu 동작
navBtn.addEventListener("click", function () {
  MnavBar.style.right = 0;
  // head[0].style.backgroundColor = "#fff";
  // head[0].style.borderBottom = "1px solid #606060";
});
close.addEventListener("click", function () {
  MnavBar.style.right = "-100%";
  for (let i = 0; i < MsubList.length; i++) {
    MsubList[i].style.height = 0;
  }
});

// mobile submenu 동작
MnavList.forEach((Element, index) => {
  Element.addEventListener("click", function () {
    for (let i = 0; i < MsubList.length; i++) {
      MsubList[i].style.height = 0;
    }

    if (MsubList[index].offsetHeight == 0) {
      MsubList[index].style.height = MsubList[index].scrollHeight + "px";
    } else {
      MsubList[index].style.height = 0;
    }
  });
});

// header ------------------------------------------





let menuList = document.querySelectorAll('.menu-slide > li >a');
let information = document.querySelectorAll('.menu-information');
let informationClose = document.querySelectorAll('.information-close');
console.log(information)
console.log(informationClose)
console.log(menuList)
for(let i=0; i<menuList.length; i++){
  menuList[i].addEventListener('click',function(){
    information[i].style.display = 'block';
  })
   informationClose[i].addEventListener('click',function(){
     information[i].style.display = 'none';
   console.log(information[i]);
  
   })
}
// if(information[i].style.display == 'none'){
  //   information[i].style.display ='block';
  // } else{
  //   information[i].style.display ='none';
  // }





// 스크롤 이벤트 감지
// window.addEventListener("scroll", function () {
//   var currentPage = Math.floor(window.pageYOffset / window.innerHeight);
//   setActivePage(currentPage);
// });

// 현재 활성화된 페이지 설정
function setActivePage(pageIndex) {
  var pages = document.getElementsByClassName("page");
  for (var i = 0; i < pages.length; i++) {
    if (i === pageIndex) {
      pages[i].classList.add("active");
    } else {
      pages[i].classList.remove("active");
    }
  }
}
/*
window.addEventListener("wheel", function (event) {
  // 마우스 휠 이벤트가 발생했을 때 실행할 코드를 여기에 작성합니다.
  if (event.deltaY > 0) {
    head[0].style.backgroundColor = "#fff";
    head[0].style.boxShadow = "0px 0px 5px 0px rgba(0,0,0,0.1)";
  } else {
    // head[0].style.backgroundColor = "transparent";
    // head[0].style.boxShadow = "none";
  }
console.log(event.deltaY)
  // else if (event.deltaY < 0) {
  //   head[0].style.backgroundColor = '#ffe800';
  //   head[0].style.border = 'none';
  // }
});
*/
let wrapper = document.querySelector(".menu-wrapper");

wrapper.addEventListener("mousedown", function (e) {
  console.log("mousedown", e.pageX);
});
