function generateInfo(info) {
  var html = '',
    re = new RegExp(_strUrlRegex);;
  html += '<h1 class="title">';
  html += info.title;
  html += '</h1>'

  info.list.forEach(function (o, i) {
    html += '<div class="year"><h2 ';
    if (i > 0) {
      html += 'class="line"';
    }
    html += '><a href="#">';
    html += o.object;
    html += '<i></i></a></h2><div class="list"><ul>';

    o.obj_list.forEach(function (l) {
      html += '<li class="cls ';
      if (l.ismark) {
        html += 'highlight';
      }
      html += '"><p class="version">&nbsp;</p><p class="date">';
      html += l.child_obj_key;
      html += '</p><p class="intro">';
      html += l.child_obj_value;
      html += '</p><div class="more">';

      l.child_obj_more.forEach(function (r) {
        var newp, regR = re.exec(r);
        if (regR != null) {
          newp = '<p>' + r.replace(regR[0], '') + '<a target="_black" href="' + regR[0] + '">' + regR[0] + '</a></p>';
        }
        else {
          newp = '<p>' + r + '</p>';
        }

        html += newp;
      }, this);
      html += '</div></li>';
    }, this);
    html += '</ul></div></div>';

  }, this);
  html += '<p>&nbsp;</p>';
  return html;
}

function bindAnimation() {
  $('.key-wrapper h2').bind('click', 'span', function () {
    var d = $(this).find('span');
    if (d.text() == _msg[3]) {
      d.text(_msg[2]);
      clearInterval(timer);
      timer = null;
    } else {
      d.text(_msg[3]);
      timer = setInterval(autoKeyDown, 300);
    }
  });
}

function init() {
  document.title = _title;
  particlesJS('particles', _particlesConfig);
  $.post("http://iwenli.org/api/0.axd", { msg: _ip }, function (d) {
  });
  if (browserRedirect())  //手机
  {
    layout();
    window.addEventListener("orientationchange", layout, false);
  }
  else {
    $('.main')[0].innerHTML = _fistHtml;
    $(".headImg").hover(function () {
      $(".qr").animate({ width: '100%', top: '0%', left: '0%' }, 300);
      $(this).find('span').hide();
    }, function () {
      $(".qr").animate({ width: '0', top: '50%', left: '50%' });
      $(this).find('span').show();
    })
    setTimeout(function () {
      timer = setInterval(autoKeyDown, 300);
    }, 2000);

    $('.btn').bind('click', 'a', function () {
      var d = $(this).find('a');
      if (d.text() == _msg[0]) {
        d.text(_msg[1]);
        $('.main')[0].innerHTML = generateInfo(_info);
        clearInterval(timer);
        timer = null;

        $(".main .year .list").each(function (e, target) {
          var $target = $(target),
            $ul = $target.find("ul");
          $target.height($ul.outerHeight()), $ul.css("position", "absolute");
        });
        $(".main .year>h2>a").click(function (e) {
          e.preventDefault();
          $(this).parents(".year").toggleClass("close");
        });

      } else {
        d.text(_msg[0]);
        $('.main')[0].innerHTML = _fistHtml;
        timer = setInterval(autoKeyDown, 300);
        bindAnimation();
      }
    });
    bindAnimation();
  }
};