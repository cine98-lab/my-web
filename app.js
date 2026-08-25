var targets = document.querySelectorAll('.reveal, .stagger');

if ('IntersectionObserver' in window) {
  var io = new IntersectionObserver(function(entries){
    entries.forEach(function(e){
      if (e.isIntersecting) {
        e.target.classList.add('on');
        io.unobserve(e.target);
      }
    });
  }, {
    // 요소가 화면 아래에서 12% 정도 들어왔을 때 시작합니다
    threshold: .12,
    rootMargin: '0px 0px -8% 0px'
  });
  targets.forEach(function(el){ io.observe(el); });
} else {
  // 옛 브라우저에서는 애니메이션 없이 그냥 보이게 합니다
  targets.forEach(function(el){ el.classList.add('on'); });
}


/* ---------- 햄버거 메뉴 ---------- */
var navToggle = document.querySelector('.navtoggle');
var navLinks  = document.getElementById('navlinks');

if (navToggle && navLinks) {
  var setMenu = function (open) {
    navLinks.classList.toggle('open', open);
    navToggle.setAttribute('aria-expanded', open ? 'true' : 'false');
    navToggle.setAttribute('aria-label', open ? '메뉴 닫기' : '메뉴 열기');
  };

  navToggle.addEventListener('click', function () {
    setMenu(!navLinks.classList.contains('open'));
  });

  // 메뉴 항목을 고르면 닫습니다
  navLinks.addEventListener('click', function (e) {
    if (e.target.tagName === 'A') { setMenu(false); }
  });

  // 바깥을 누르면 닫습니다
  document.addEventListener('click', function (e) {
    if (!navLinks.classList.contains('open')) { return; }
    if (navToggle.contains(e.target) || navLinks.contains(e.target)) { return; }
    setMenu(false);
  });

  // ESC 키로 닫습니다
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') { setMenu(false); }
  });

  // 화면이 다시 넓어지면 열린 상태를 정리합니다
  window.addEventListener('resize', function () {
    if (window.innerWidth > 640) { setMenu(false); }
  });
}


/* ---------- 소식받기 신청 폼 ---------- */
var subForm = document.getElementById('subform');
var thanksBox = document.getElementById('thanks');

if (subForm && thanksBox) {
  var nameField  = document.getElementById('field-name');
  var emailField = document.getElementById('field-email');
  var nameInput  = document.getElementById('name');
  var emailInput = document.getElementById('email');

  var looksLikeEmail = function (v) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(v);
  };

  var check = function () {
    var okName = nameInput.value.trim().length > 0;
    var okMail = looksLikeEmail(emailInput.value.trim());
    nameField.classList.toggle('invalid', !okName);
    emailField.classList.toggle('invalid', !okMail);
    return okName && okMail;
  };

  // 한 번 표시된 뒤에는 고치는 대로 바로 지워집니다
  [nameInput, emailInput].forEach(function (el) {
    el.addEventListener('input', function () {
      var field = el.parentNode;
      if (field && field.classList.contains('invalid')) { check(); }
    });
  });

  // 개인정보 수집에 동의해야 신청 버튼이 살아납니다
  var agreeBox  = document.getElementById('agree');
  var submitBtn = subForm.querySelector('button[type="submit"]');

  if (agreeBox && submitBtn) {
    var syncAgree = function () {
      submitBtn.disabled = !agreeBox.checked;
      submitBtn.title = agreeBox.checked ? '' : '개인정보 수집·이용에 동의해 주세요';
    };
    agreeBox.addEventListener('change', syncAgree);
    syncAgree();
  }

  subForm.addEventListener('submit', function (e) {
    e.preventDefault();
    if (agreeBox && !agreeBox.checked) { agreeBox.focus(); return; }
    if (!check()) {
      var first = subForm.querySelector('.field.invalid input');
      if (first) { first.focus(); }
      return;
    }
    // 서버가 없으므로 화면에서만 인사를 건넵니다
    document.getElementById('thanks-name').textContent = nameInput.value.trim();
    subForm.style.display = 'none';
    thanksBox.classList.add('show');
    launchConfetti();
  });

  var againBtn = document.getElementById('again');
  if (againBtn) {
    againBtn.addEventListener('click', function () {
      thanksBox.classList.remove('show');
      subForm.style.display = '';
      nameField.classList.remove('invalid');
      emailField.classList.remove('invalid');
      nameInput.focus();
    });
  }
}


/* ---------- 색종이 ---------- */
function launchConfetti() {
  // 애니메이션을 끄고 쓰는 분들에게는 뿌리지 않습니다
  if (window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    return;
  }

  var colors = ['#006A6A', '#2BB8B8', '#F4A29E', '#FFABA7', '#675D4D', '#B2A592'];
  var layer  = document.createElement('div');
  layer.className = 'confetti-layer';
  layer.setAttribute('aria-hidden', 'true');

  for (var i = 0; i < 80; i++) {
    var piece = document.createElement('span');
    var width = 6 + Math.random() * 8;

    piece.className = 'confetti';
    piece.style.left   = (Math.random() * 100) + 'vw';
    piece.style.width  = width + 'px';
    piece.style.height = (width * (0.5 + Math.random() * 0.9)) + 'px';
    piece.style.background = colors[i % colors.length];
    if (Math.random() < 0.28) { piece.style.borderRadius = '50%'; }

    // 좌우로 흘러가는 거리와 회전량을 하나씩 다르게 줍니다
    piece.style.setProperty('--drift', ((Math.random() * 2 - 1) * 200) + 'px');
    piece.style.setProperty('--spin', (360 + Math.random() * 900) + 'deg');
    piece.style.animationDuration = (2.6 + Math.random() * 2) + 's';
    piece.style.animationDelay = (Math.random() * 0.55) + 's';

    layer.appendChild(piece);
  }

  document.body.appendChild(layer);
  setTimeout(function () {
    if (layer.parentNode) { layer.parentNode.removeChild(layer); }
  }, 5600);
}


/* ---------- 스크롤을 내리면 상단 바가 숨습니다 (시안 규칙) ---------- */
var topbar = document.querySelector('nav.topbar');

if (topbar) {
  var lastY = window.pageYOffset;
  var ticking = false;

  var updateBar = function () {
    var y = window.pageYOffset;
    var menuOpen = navLinks && navLinks.classList.contains('open');

    // 메뉴가 열려 있거나 맨 위 근처면 항상 보여줍니다
    if (menuOpen || y < 120) {
      topbar.classList.remove('tucked');
    } else if (y > lastY + 6) {
      topbar.classList.add('tucked');     // 내리는 중 — 숨김
    } else if (y < lastY - 6) {
      topbar.classList.remove('tucked');  // 올리는 중 — 다시 나타남
    }

    lastY = y;
    ticking = false;
  };

  window.addEventListener('scroll', function () {
    if (!ticking) {
      window.requestAnimationFrame(updateBar);
      ticking = true;
    }
  }, {passive: true});
}
