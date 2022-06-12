// window.onload = function(){
//   test()
// }
// function test(){
// } 

const video = document.getElementById('video')
const observer = new IntersectionObserver(
  ([e]) => e.target.classList.toggle('isSticky', e.intersectionRatio<1),
  {threshold:[1]}
)

observer.observe(video)