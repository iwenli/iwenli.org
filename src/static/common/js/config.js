var _ip = returnCitySN['cip'] + ',' + returnCitySN['cname'] + 'local-host' + navigator.userAgent,
    _strUrlRegex = "((https|http|ftp|rtsp|mms)://)"
        + "(([0-9a-z_!~*'().&=+$%-]+: )?[0-9a-z_!~*'().&=+$%-]+@)?" //ftp的user@ 
        + "(([0-9]{1,3}\.){3}[0-9]{1,3}" // IP形式的URL- 199.194.52.184 
        + "|" // 允许IP和DOMAIN（域名）
        + "([0-9a-z_!~*'()-]+\.)*" // 域名- www. 
        + "([0-9a-z][0-9a-z-]{0,61})?[0-9a-z]\." // 二级域名 
        + "[a-z]{2,6})" // first level domain- .com or .museum 
        + "(:[0-9]{1,4})?" // 端口- :80 
        + "((/?)|" // a slash isn't required if there is no file name 
        + "(/[0-9a-z_!~*'().;?:@&=+$,%#-]+)+/?)$",
    _msg = ['了解我', '返回', 'Start', 'Stop'],
    _title = 'Mr. Zhang\'s 个人网站',
    _particlesConfig = {
        'particles': {
            'number': {
                'value': 80,
                'density': {
                    'enable': true,
                    'value_area': 800
                }
            },
            'color': {
                'value': '#38112E'
            },
            'shape': {
                'type': 'circle',
                'stroke': {
                    'width': 0,
                    'color': '#38112E'
                },
                'polygon': {
                    'nb_sides': 5
                },
                'image': {
                    'src': 'img/github.svg',
                    'width': 100,
                    'height': 100
                }
            },
            'opacity': {
                'value': 0.5,
                'random': false,
                'anim': {
                    'enable': false,
                    'speed': 1,
                    'opacity_min': 0.1,
                    'sync': false
                }
            },
            'size': {
                'value': 5,
                'random': true,
                'anim': {
                    'enable': false,
                    'speed': 40,
                    'size_min': 0.1,
                    'sync': false
                }
            },
            'line_linked': {
                'enable': true,
                'distance': 150,
                'color': '#38112E',
                'opacity': 0.4,
                'width': 1
            },
            'move': {
                'enable': true,
                'speed': 6,
                'direction': 'none',
                'random': false,
                'straight': false,
                'out_mode': 'out',
                'attract': {
                    'enable': false,
                    'rotateX': 600,
                    'rotateY': 1200
                }
            }
        },
        'interactivity': {
            'detect_on': 'canvas',
            'events': {
                'onhover': {
                    'enable': true,
                    'mode': 'repulse'
                },
                'onclick': {
                    'enable': true,
                    'mode': 'push'
                },
                'resize': true
            },
            'modes': {
                'grab': {
                    'distance': 400,
                    'line_linked': {
                        'opacity': 1
                    }
                },
                'bubble': {
                    'distance': 400,
                    'size': 40,
                    'duration': 2,
                    'opacity': 8,
                    'speed': 3
                },
                'repulse': {
                    'distance': 200
                },
                'push': {
                    'particles_nb': 4
                },
                'remove': {
                    'particles_nb': 2
                }
            }
        },
        'retina_detect': true
    },
    _info = {
        'title': '个人履历',
        'list': [
            {
                'object': '', 'obj_list': [

                ]
            },
            {
                'object': '2013年', 'obj_list': [
                    { 'ismark': true, 'child_obj_key': '3月26日', 'child_obj_value': 'js代码大事件记录', 'child_obj_more': ['手机号：123456', 'qq:23486158', 'GitHub:https://github.com/iwenli'] },
                    { 'ismark': false, 'child_obj_key': '3月19日', 'child_obj_value': '全新会员卡3.0、微官网3.0、微商城2.0上线，渠道统计模块上线！', 'child_obj_more': ['手机号：123456', 'qq:23486158', 'GitHub:https://github.com/iwenli'] }
                ]
            },
            {
                'object': '2012年', 'obj_list': [
                    { 'ismark': true, 'child_obj_key': '3月26日', 'child_obj_value': 'js代码大事件记录', 'child_obj_more': ['手机号：123456', 'qq:23486158', 'GitHub:https://github.com/iwenli'] },
                    { 'ismark': false, 'child_obj_key': '3月19日', 'child_obj_value': '全新会员卡3.0、微官网3.0、微商城2.0上线，渠道统计模块上线！', 'child_obj_more': ['手机号：123456', 'qq:23486158', 'GitHub:https://github.com/iwenli'] }
                ]
            },
            {
                'object': '2011年', 'obj_list': [
                    { 'ismark': true, 'child_obj_key': '3月26日', 'child_obj_value': 'js代码大事件记录', 'child_obj_more': ['手机号：123456', 'qq:23486158', 'GitHub:https://github.com/iwenli'] },
                    { 'ismark': false, 'child_obj_key': '3月19日', 'child_obj_value': '全新会员卡3.0、微官网3.0、微商城2.0上线，渠道统计模块上线！', 'child_obj_more': ['手机号：123456', 'qq:23486158', 'GitHub:https://github.com/iwenli'] }
                ]
            }
        ]
    },
    _fistHtml = '<div class="key-wrapper"><h2>键盘键盘会发光<span>Stop</span></h2><ul><li class="drum"data-key="1"data-code="49">1</li><li class="drum"data-key="2"data-code="50">2</li><li class="drum"data-key="3"data-code="51">3</li><li class="drum"data-key="4"data-code="52">4</li><li class="synth"data-key="5"data-code="53">5</li><li class="synth"data-key="6"data-code="54">6</li><li class="synth"data-key="7"data-code="55">7</li><li class="synth"data-key="8"data-code="56">8</li><li class="synth"data-key="9"data-code="57">9</li><li class="synth"data-key="0"data-code="48">0</li><li class="synth"data-key="-"data-code="189">-</li></ul><ul><li class="drum"data-key="q"data-code="81">q</li><li class="drum"data-key="w"data-code="87">w</li><li class="drum"data-key="e"data-code="69">e</li><li class="drum"data-key="r"data-code="82">r</li><li class=""data-key="t"data-code="84">t</li><li class="bass"data-key="y"data-code="89">y</li><li class="bass"data-key="u"data-code="85">u</li><li class="pad"data-key="i"data-code="73">i</li><li class="pad"data-key="o"data-code="79">o</li><li class="pad"data-key="p"data-code="80">p</li></ul><ul><li class="drum"data-key="a"data-code="65">a</li><li class="drum"data-key="s"data-code="83">s</li><li class="drum"data-key="d"data-code="68">d</li><li class="drum"data-key="f"data-code="70">f</li><li class=""data-key="g"data-code="71">g</li><li class="bass"data-key="h"data-code="72">h</li><li class="bass"data-key="j"data-code="74">j</li><li class="loop"data-key="k"data-code="75">k</li><li class="loop"data-key="l"data-code="76">l</li></ul><ul><li class="drum"data-key="z"data-code="90">z</li><li class="drum"data-key="x"data-code="88">x</li><li class="drum"data-key="c"data-code="67">c</li><li class="drum"data-key="v"data-code="86">v</li><li class=""data-key="b"data-code="66">b</li><li class=""data-key="n"data-code="78">n</li><li class="loop"data-key="m"data-code="77">m</li><li class="loop"data-key=","data-code="188">,</li></ul><ul><li class="effect"data-key="SPACE"data-code="32">SPACE</li></ul></div>';