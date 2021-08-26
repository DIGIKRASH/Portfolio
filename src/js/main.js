//--- OnePage-Scroll
$(".main").onepage_scroll({
  sectionContainer: "section",
  responsiveFallback: false,
  loop: true
});
$('.logo').on('click', function () {
  $(".main").moveTo(1);
})



//--- Actions on About-Page-Btn
$('.about-page__btn').on('click', function () {
  $('.portfolio').toggleClass('portfolio--about');
  $('#cursor').toggleClass('cursor--white');
  $('#follower').toggleClass('cursor--white');
})



//--- Parallax
if (window.innerWidth >= 800) {
  document.addEventListener("mousemove", parallax);
  function parallax(e) {
    this.querySelectorAll('.layer').forEach(layer => {
      const speed = layer.getAttribute('data-speed')

      const x = (window.innerWidth - e.pageX * speed) / 100
      const y = (window.innerHeight - e.pageY * speed) / 100

      layer.style.transform = `translateX(${x}px) translateY(${y}px)`
    })
  }
}



//--- Animation on Slide-Btn
$('.slide__explore').hover(function () {
  $('.slide__img-wrap').toggleClass('slide__img-wrap--active');
})
