// ==UserScript==
// @name 			首页信息初始化
// @description	
// @version 		0.0.1
// @author		admin@iwenli.org <admin@iwenli.org> http://iwenli.org/
// @developer		iwenli
// @createTime		
// @editTime		
// @run-at		Visual Studio Code
// @homepage		http://iwenli.org
// ==/UserScript==

//=======START======= 

function generate(info) {
    var html = '';
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
                var newp = '<p>' + r + '</p>';
                html += newp;
            }, this);
            html += '</div></li>';
        }, this);
        html += '</ul></div></div>';

    }, this);
    html += '<p>&nbsp;</p>';
    return html;
}

function init()
{
    return '<div class="key-wrapper"><h2>键盘键盘会发光</h2><ul><li class="drum"data-key="1"data-code="49">1</li><li class="drum"data-key="2"data-code="50">2</li><li class="drum"data-key="3"data-code="51">3</li><li class="drum"data-key="4"data-code="52">4</li><li class="synth"data-key="5"data-code="53">5</li><li class="synth"data-key="6"data-code="54">6</li><li class="synth"data-key="7"data-code="55">7</li><li class="synth"data-key="8"data-code="56">8</li><li class="synth"data-key="9"data-code="57">9</li><li class="synth"data-key="0"data-code="48">0</li><li class="synth"data-key="-"data-code="189">-</li></ul><ul><li class="drum"data-key="q"data-code="81">q</li><li class="drum"data-key="w"data-code="87">w</li><li class="drum"data-key="e"data-code="69">e</li><li class="drum"data-key="r"data-code="82">r</li><li class=""data-key="t"data-code="84">t</li><li class="bass"data-key="y"data-code="89">y</li><li class="bass"data-key="u"data-code="85">u</li><li class="pad"data-key="i"data-code="73">i</li><li class="pad"data-key="o"data-code="79">o</li><li class="pad"data-key="p"data-code="80">p</li></ul><ul><li class="drum"data-key="a"data-code="65">a</li><li class="drum"data-key="s"data-code="83">s</li><li class="drum"data-key="d"data-code="68">d</li><li class="drum"data-key="f"data-code="70">f</li><li class=""data-key="g"data-code="71">g</li><li class="bass"data-key="h"data-code="72">h</li><li class="bass"data-key="j"data-code="74">j</li><li class="loop"data-key="k"data-code="75">k</li><li class="loop"data-key="l"data-code="76">l</li></ul><ul><li class="drum"data-key="z"data-code="90">z</li><li class="drum"data-key="x"data-code="88">x</li><li class="drum"data-key="c"data-code="67">c</li><li class="drum"data-key="v"data-code="86">v</li><li class=""data-key="b"data-code="66">b</li><li class=""data-key="n"data-code="78">n</li><li class="loop"data-key="m"data-code="77">m</li><li class="loop"data-key=","data-code="188">,</li></ul><ul><li class="effect"data-key="SPACE"data-code="32">SPACE</li></ul></div>';
}
function browserRedirect() {
    var sUserAgent = navigator.userAgent.toLowerCase();
    var bIsIpad = sUserAgent.match(/ipad/i) == "ipad";
    var bIsIphoneOs = sUserAgent.match(/iphone os/i) == "iphone os";
    var bIsMidp = sUserAgent.match(/midp/i) == "midp";
    var bIsUc7 = sUserAgent.match(/rv:1.2.3.4/i) == "rv:1.2.3.4";
    var bIsUc = sUserAgent.match(/ucweb/i) == "ucweb";
    var bIsAndroid = sUserAgent.match(/android/i) == "android";
    var bIsCE = sUserAgent.match(/windows ce/i) == "windows ce";
    var bIsWM = sUserAgent.match(/windows mobile/i) == "windows mobile";
    return bIsIphoneOs || bIsMidp || bIsUc7 || bIsUc || bIsAndroid || bIsCE || bIsWM;
}
