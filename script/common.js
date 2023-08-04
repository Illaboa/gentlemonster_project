//header, footer JS
// header 전체메뉴 스크립트 flow
// 변수생성
const nav = document.querySelector('#nav')//햄버거 메뉴
const open_nav = document.querySelector('#open_nav')//nav클릭 시 open 대상
const nav_close = document.querySelector('#nav_close')//x닫기
console.log(nav,open_nav,nav_close)
// 1. open-nav 초기 숨기기 #open_nav {transform:translateX(n)}
//#open_nav {display:none;}을 js 식으로 변경하기
open_nav.style.transform = 'translateX(100%)'; //브라우저 화면 밖으로 내보냄
// 2. 햄버거메뉴 클릭 시 open-nav 출력
//css값 상태에 따라 변경이 일어날 경우 애니메이션 translation
open_nav.style.translation = 'transform 1s ease'
nav.addEventListener('click',function(){
    open_nav.style.transform = 'translateX(0)'; 
    //open_nav.style.display = 'block' 
    //display:none으로 숨긴 대상을 다시 보이게 할 경우 
    //기존 디자인 css에서 flex로 정렬한 대상이라면 display='flex
    //기존 디자인 css에서 flex 설정이 없었다면 display='block'(초기값)
    //style에서 주입한 속성을 따라 쓰면 됨
})
// 3. open-nav 안 X버튼 클릭 시 open-nav 숨기기
nav.addEventListener('click',function(){
    open_nav.style.transform = 'translateX(100%)';
})

//swiper-slide open-nav 광고영역
const nav_adver = new Swiper('#nav_adver',{
    direction:'horizontal',
    autoplay:{delay:1000},
    loop:true,
    navigation: {
        nextEl: '#nav_adver .swiper-button-next',
        prevEl: '#nav_adver .swiper-button-prev',
    },
});