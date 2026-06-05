/* Learning Notes — shared behavior. No heavy animation. */
(function () {
  // ---- TOC active-section highlighting ----
  var links = Array.prototype.slice.call(document.querySelectorAll('nav.toc a'));
  if (links.length) {
    var map = {};
    links.forEach(function (a) {
      var id = a.getAttribute('href');
      if (id && id.charAt(0) === '#') map[id.slice(1)] = a;
    });
    var obs = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (e.isIntersecting) {
          links.forEach(function (l) { l.classList.remove('active'); });
          var link = map[e.target.id];
          if (link) {
            link.classList.add('active');
            // keep active item in view within a scrolling TOC
            if (link.scrollIntoView) {
              var nav = link.closest('nav.toc');
              if (nav && nav.scrollHeight > nav.clientHeight) {
                link.scrollIntoView({ block: 'nearest' });
              }
            }
          }
        }
      });
    }, { rootMargin: '-12% 0px -78% 0px', threshold: 0 });
    document.querySelectorAll('section[id]').forEach(function (s) { obs.observe(s); });
  }

  // ---- Tap-to-toggle definition tooltips (touch); hover/focus handled by CSS ----
  var defs = Array.prototype.slice.call(document.querySelectorAll('.def'));
  defs.forEach(function (d) {
    if (!d.hasAttribute('tabindex')) d.setAttribute('tabindex', '0');
    d.addEventListener('click', function (ev) {
      ev.stopPropagation();
      var wasOpen = d.classList.contains('open');
      defs.forEach(function (o) { o.classList.remove('open'); });
      if (!wasOpen) d.classList.add('open');
    });
    d.addEventListener('keydown', function (ev) {
      if (ev.key === 'Enter' || ev.key === ' ') {
        ev.preventDefault();
        d.classList.toggle('open');
      } else if (ev.key === 'Escape') {
        d.classList.remove('open');
      }
    });
  });
  document.addEventListener('click', function () {
    defs.forEach(function (o) { o.classList.remove('open'); });
  });

  // ---- Mobile TOC collapse ----
  var toc = document.getElementById('toc');
  var head = document.getElementById('tocHead');
  if (toc && head) {
    head.addEventListener('click', function () {
      if (window.matchMedia('(max-width:860px)').matches) {
        toc.classList.toggle('open');
        toc.classList.toggle('collapsed');
      }
    });
    links.forEach(function (a) {
      a.addEventListener('click', function () {
        if (window.matchMedia('(max-width:860px)').matches) {
          toc.classList.add('collapsed');
          toc.classList.remove('open');
        }
      });
    });
  }
})();
