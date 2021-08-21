
// $(document).ready(function () {
$(".main").onepage_scroll({
  sectionContainer: "section",
  responsiveFallback: false,
  loop: true
});


$('.about-page__btn').on('click', function () {
  $('.portfolio').toggleClass('portfolio--about');
  $('#cursor').toggleClass('cursor--white');
  $('#follower').toggleClass('cursor--white');
})

$('.logo').on('click', function () {
  $(".main").moveTo(1);
})

$('.slide__explore').hover(function () {
  $('.slide__img-wrap').toggleClass('slide__img-wrap--active');
})

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




// Custom Cursor
var cursor = {
  delay: 8,
  _x: 0,
  _y: 0,
  endX: (window.innerWidth / 2),
  endY: (window.innerHeight / 2),
  cursorVisible: true,
  cursorEnlarged: false,
  $dot: document.querySelector('#cursor'),
  $outline: document.querySelector('#follower'),


  init: function () {
    // Set up element sizes
    this.dotSize = this.$dot.offsetWidth;
    this.outlineSize = this.$outline.offsetWidth;

    this.setupEventListeners();
    this.animateDotOutline();
  },

  setupEventListeners: function () {
    var self = this;

    // Anchor hovering
    document.querySelectorAll('a').forEach(function (el) {
      el.addEventListener('mouseover', function () {
        self.cursorEnlarged = true;
        self.toggleCursorSize();
      });
      el.addEventListener('mouseout', function () {
        self.cursorEnlarged = false;
        self.toggleCursorSize();
      });
    });

    // Click events
    document.addEventListener('mousedown', function () {
      self.cursorEnlarged = true;
      self.toggleCursorSize();
    });
    document.addEventListener('mouseup', function () {
      self.cursorEnlarged = false;
      self.toggleCursorSize();
    });

    document.addEventListener('mousemove', function (e) {
      // Show the cursor
      self.cursorVisible = true;
      self.toggleCursorVisibility();

      // Position the dot
      self.endX = e.pageX;
      self.endY = e.pageY;
      self.$dot.style.top = self.endY + 'px';
      self.$dot.style.left = self.endX + 'px';
    });

    // Hide/show cursor
    document.addEventListener('mouseenter', function (e) {
      self.cursorVisible = true;
      self.toggleCursorVisibility();
      self.$dot.style.opacity = 1;
      self.$outline.style.opacity = 1;
    });

    document.addEventListener('mouseleave', function (e) {
      self.cursorVisible = true;
      self.toggleCursorVisibility();
      self.$dot.style.opacity = 0;
      self.$outline.style.opacity = 0;
    });
  },

  animateDotOutline: function () {
    var self = this;

    self._x += (self.endX - self._x) / self.delay;
    self._y += (self.endY - self._y) / self.delay;
    self.$outline.style.top = self._y + 'px';
    self.$outline.style.left = self._x + 'px';

    requestAnimationFrame(this.animateDotOutline.bind(self));
  },

  toggleCursorSize: function () {
    var self = this;

    if (self.cursorEnlarged) {
      // self.$dot.style.transform = 'translate(-50%, -50%) scale(0.75)';
      // self.$outline.style.transform = 'translate(-50%, -50%) scale(1.5)';
      self.$dot.classList.add('cursor--active');
      self.$outline.classList.add('cursor--active');
    } else {
      // self.$dot.style.transform = 'translate(-50%, -50%) scale(1)';
      // self.$outline.style.transform = 'translate(-50%, -50%) scale(1)';
      self.$dot.classList.remove('cursor--active');
      self.$outline.classList.remove('cursor--active');
    }
  },

  toggleCursorVisibility: function () {
    var self = this;

    if (self.cursorVisible) {
      self.$dot.style.opacity = 1;
      self.$outline.style.opacity = 1;
    } else {
      self.$dot.style.opacity = 0;
      self.$outline.style.opacity = 0;
    }
  },
}

cursor.init();