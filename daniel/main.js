let params = new URLSearchParams(window.location.search.substr(1))
let show = params.get("a")
head = document.getElementsByTagName('head')[0]

if(show =="1"){
  head.removeChild(head.children[4])

  const link = document.createElement('link')
  link.rel ="stylesheet"
  link.href ="./style.css"
  head.appendChild(link)
}

const video = document.getElementById('video')
const observer = new IntersectionObserver(
  ([e]) => e.target.classList.toggle('isSticky', e.intersectionRatio<1),
  {threshold:[1]}
)

observer.observe(video)