const searchEl = document.querySelector('.search');
const searchInputEl = searchEl.querySelector('input');

const searchMaterialIcons = document.querySelector('.material-icons');

searchEl.addEventListener('click', function () {
  searchInputEl.focus()
})

searchInputEl.addEventListener('focus', function () {
  gsap.to(searchMaterialIcons, .5, {
    opacity: 0,
    display: 'none'
  })
  searchInputEl.setAttribute('placeholder','통합검색')
})

searchInputEl.addEventListener('blur', function () {
  gsap.to(searchMaterialIcons, .5, {
    opacity: 1,
    display: 'block'
  })
  searchInputEl.setAttribute('placeholder','')
})
// searchEl.addEventListener('click', function () {
//   searchInputEl.focus()
// })
// searchInputEl.addEventListener('focus', function () {
//   searchEl.classList.add('focused')
//   searchInputEl.setAttribute('placeholder','통합검색')
// })
// searchInputEl.addEventListener('blur', function () {
//   searchEl.classList.remove('focused')
//   searchInputEl.setAttribute('placeholder','')
// })

const badgeEl = document.querySelector('header .badges');

window.addEventListener('scroll', _.throttle(function () {
  if (window.scrollY > 500) {
    //배지 숨기기
    //gsap.to(요소, 지속시간, 옵션)
    gsap.to(badgeEl, .6, {
      opacity: 0,
      display: 'none'
    })
  } else {
    //배지 보이기
    gsap.to(badgeEl, .6, {
      opacity: 1,
      display: 'block'
    })
  }
}, 300))
// _.throttle(함수, 시간(밀리세컨드 단위))


const fadeEls = document.querySelectorAll('.visual .fade-in');
fadeEls.forEach(function (fadeEl, index) {
  gsap.to(fadeEl, 1, {
    delay: (index + 1) * .7,
    opacity:1
  });
});


new Swiper('.notice-line .swiper-container', {
  direction: 'vertical',
  autoplay: true,
  loop: true
});