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
                    { 'ismark': true, 'child_obj_key': '期望职务', 'child_obj_value': '.net开发相关', 'child_obj_more': [] }
                ]
            },
            {
                'object': '个人', 'obj_list': [
                    { 'ismark': false, 'child_obj_key': '联系信息', 'child_obj_value': '张先生', 'child_obj_more': ['手机：18310807769', 'Email：admin@iwenli.org', 'GitHub：https://github.com/iwenli','<a href="address.html?a=石景山区八角路23号楼" target="_black">我的位置</a>'] },
                    { 'ismark': false, 'child_obj_key': '学历信息', 'child_obj_value': '&nbsp;', 'child_obj_more': ['2012-2014|天津商业大学|计算机科学与技术', '2009-2012|天津农学院|计算机信息管理'] },
                    { 'ismark': false, 'child_obj_key': '校内奖励', 'child_obj_value': '&nbsp;', 'child_obj_more': ['2010.03 获 一等奖学金 | 国家级', '2011.03 获 一等奖学金 | 院校级', '2011.10 获 网络技能大赛一等奖 | 院校级', '2012.11 获 天津商业大学自强之星 | 院校级', '2013.05 获 天津商业大学优秀团干部 | 院校级', '2013.05 获 天津商业大学三好学生 | 院校级'] }

                ]
            },
            {
                'object': '工作', 'obj_list': [
                    {
                        'ismark': false, 'child_obj_key': '&nbsp;', 'child_obj_value': '2014.11 － 2016.12', 'child_obj_more': ['公司：杭州首越特贸易有限公司', '职务：技术合伙人', '工作内容：和朋友一起合伙创立电子商务公司，我主要做天猫店铺线上运营和推广。具体工作如下：',
                            '1、负责店铺的推广、提高店铺点击率和浏览量；负责网络营销及推广的方案制订并实施完成店铺销售目标。通过策划各类活动，结合各种互联网资源进行有效的广告宣传和促销推广；',
                            '2、负责电商官方店铺的日常维护、产品更新、能独立操作店铺陈列，以增强店铺吸引力、产品销量；',
                            '3、推动团队业绩增长、完成店铺销售目标，提升公司品牌；',
                            '4、每日监控的数据：营销数据、交易数据、商品管理、顾客管理。']
                    },
                    { 'ismark': false, 'child_obj_key': '&nbsp;', 'child_obj_value': '2014.02 － 2014.11', 'child_obj_more': ['公司：北京衣念科技有限公司', '职务：.net开发工程师', '工作内容：主要从事.net开发，参与项目中的数据库设计、项目开发、对自己负责模块进行需求分析和解决方案的提供等工作。做过电商、信息采集和管理系统等。运用Ado.net、MVC、存储过程、事件等技术后台开发，前端开发运用Bootstorp、Html、CSS、Jquery，版本控制SVN，自动化构建工具gulp。'] }
                ]
            },
            {
                'object': '项目', 'obj_list': [
                    { 'ismark': false, 'child_obj_key': 'Obj1', 'child_obj_value': 'SpringIF(春风物流接口)', 'child_obj_more': ['时间：2014/06–2014/10', '介绍：依恋中国物流接口二次开发以Windows服务的形式定时从春风物流提供的接口中读取数据到本地（SQLite）并按不同维度分析物流数据定时发送到管理者邮箱。'] },
                    { 'ismark': false, 'child_obj_key': 'Obj2', 'child_obj_value': 'TBNK(流行类型库系统)', 'child_obj_more': ['时间：2014/04–2014/06', '介绍：由于在准确预测流行类型，反映到实际方面，信息链出现断裂。要构建可准确预测，将预测准确反映到商品的制作中的体系。由此TBNK应用而生，通过bank系统从商品企划到生产整个流程的改革，预期提高中国BG正销率50%。 通过这次‘流行类型库’提高Designsheet命中率。TBNK系统基于Spring.Net+Nhibernate+Mvc架构，数据库是SqlServer2008，前端采用Bootstrap响应式布局，主要技术有Hogan模板引擎、瀑布流布局、筛选功能、图片拖拽排序、工具栏吸附功能、图片切换功能。系统有畅销类型个人收藏夹管理、畅销类型Pool登记、畅销类型pool详细查看、畅销类型pool查询（Main页面）、畅销类型提案登记、畅销类型提案查询、BPBank 接口开发（用户）8个功能模块，其中后5个由我负责开发。'] },
                    {
                        'ismark': false, 'child_obj_key': 'Obj3', 'child_obj_value': '大学英语四、六级考试报名系统', 'child_obj_more': ['时间：2013/11–2014/02', '介绍：由于传统的CET4\6级考试报名工作费时费力，学院领导提议学校开发网上报名系统。',
                            '传统的报名方式流程为：学校教务接到教育部通知-＞下发通知各学院-＞学院下发通知各系-＞各系再通知班级辅导员-＞班级辅导员再通知班干登记报考学生信息，收取费用并上缴系教务-＞系教务汇总各班级信息以后上交学院-＞学院汇总各系再上缴学校教务-＞学校教务汇总核实信息以后上报教育局内部系统。整个流程下来极容易出错，而且人工花费极高。',
                            '而我们网上报名系统的流程为：学校教务接到教育部通知-＞初始化报名系统并下发通知各学院＞学院下发通知各系-＞各系再通知班级辅导员-＞班级辅导员再通知班级同学在截止报名期限内登录系统报名缴费-＞截止报名期限后学校教务汇总导出信息以后上报教育局内部系统；',
                            '整个系统将最费力容易出错的地方交给系统进行，较低人力成本至少80%，而且出错记录几乎降为0；',
                            '该项目面向整个学校学生四六级报名使用。也是毕业前自我感觉做得最成熟的一个系统，系统采用三层结构：UI(表现层)、BLL(业务逻辑层)、DAL(数据访问层)，通过反射机制实现动态创建对象。数据库是SqlServer2008，表现层采用Ashx + Ajax + NVelocity实现。',
                            '主要模块包括注册、改密、登陆、找回密码、考试报名、报名状态查询、 考场查询、成绩查询。后台包括系统状态维护、数据库维护、管理员维护、学生信息管理、报名信息管理、学院信息管理、班级报表管理、学院报表管理、学校报表管理、考场编排、打印准考证/桌贴/签到表、修改密码等模块。 ']
                    },
                    {
                        'ismark': false, 'child_obj_key': 'Obj4', 'child_obj_value': '学生信息管理系统', 'child_obj_more': ['时间：2013/05–2013/10', '介绍：本项目是本学院为方便学院老师为学生报名、录取、活动考勤、期末综合、信息整合等工作专门设计的学生管理系统。',
                            '系统采用三层结构：UI(表现层)、BLL(业务逻辑层)、DAL(数据访问层)，数据库采用Access(考虑到数据量并不大，而且学校有正版的office，互操作性比较好)。数据访问层通过ado.net实现数据交互，业务逻辑层负责处理业务相关逻辑，而表现成则分为教师端和学生端，教师端采用Winform + C/S模式，学生端采用Asp.net + FineUI + B/S模式。',
                            'C/S部分功能主要有：权限分配、可以导入管理（增删改查）学生信息、班级信息、考试成绩、学生信息导出等。',
                            'B/S部分功能主要有：学生登陆、查询奖励、处分、成绩、考试报名等。']
                    },
                    {
                        'ismark': false, 'child_obj_key': 'Obj5', 'child_obj_value': '考试在线报名', 'child_obj_more': ['时间：2012/03–2012/05', '介绍：专接本考试之后闲来无事，忽想考试报名的时候那个系统好像客户已模仿一下，而且正好还没有毕业设计，于是就把这个东东做了出来。因为考虑到报名采集数据需要离线进行，所以管理端采用了C/S模式，可以离线采集，连线后同步数据。C/S部分负责负责学生现场审核，电子头像采集以及系统其他部分的管理维护。B/S部分只负责面向学生预报名、考试结果查询等使用。 系统采用Asp.net + Ado.net + Winform ， 技术难点Winform(因为当时还没有学习过，所以要从头学起)以及在winform下调用摄像头设备。',
                            '历时2个月顺利完成编码和文档（毕业论文）工作，通过这个系统明白了.Net下的又一条道路（Winform），并明白了.Net下调用系统API的方法。']
                    },
                    {
                        'ismark': false, 'child_obj_key': 'Obj6', 'child_obj_value': '图书馆管理系统', 'child_obj_more': ['时间：2011/09–2011/12', '介绍：学期末老师布置的课程（C#程序开发与设计）作业，因为一个学期老师从C#语法基础、面向对象编程、ASP.NET再到数据库讲了一通，但是也并没有带我们完整的做一个系统，当然更没有思路，只是说让我们做一个系统，然后这个系统就诞生了。一个月的时间里几乎都在图书馆泡着，最后这个通过拖拉控件 + 绑定事件的系统就诞生了，完成以后感觉太棒了，竟然能通过一行行代码来控制数据库里的数据按照我自己的方式来展示。也是通过这个项目，让我明白了C#、.Net、Asp.net、Ado.net、Visual Studio、T-SQL、类、对象、属性、方法、字段、事件、接口、抽象类、虚方法、重载、重写这些概念。']
                    },
                ]
            },
            {

                'object': '附录', 'obj_list': [
                    {
                        'ismark': false, 'child_obj_key': '自我评价', 'child_obj_value': '&nbsp;', 'child_obj_more': ['1．本人热爱软件事业，对IT领域的软件开发和设计工作有浓厚的兴趣，能承受较大的工作压力；',
                            '2．具有很强的团队精神，有良好的组织、协调和沟通能力，有强烈的集体荣誉感；',
                            '3．自学能力强，喜欢钻研新技术，敢于面对和克服困难；',
                            '4．有比较强的动手能力，勇于面对困难和挑战，有很好的分析问题与解决问题的能力；',
                            '5．工作认真负责，积极上进，能够吃苦耐劳，有良好的职业素质；']
                    },
                    {
                        'ismark': false, 'child_obj_key': '擅长技能', 'child_obj_value': '&nbsp;', 'child_obj_more': ['- 开发语言：C#/SQL/C/C++/Java/Python',
                            '- 前端技术：Bootstrap/HTML5/AngularJS/Jquery',
                            '- 后端技术：WebForm/WinForm/Asp.netMVC/NVelocity/EntityFramework/Linq/Spring.Net',
                            '- 数据库相关：T-SQL/SQLite',
                            '- 版本管理、文档和自动化部署工具：Svn/Git、Gulp',
                            '- 云和开放平台：微信公众号开发/百度大脑API接入/图灵机器人API接入/模拟快递100API接入']
                    }

                ]
            }
        ]
    },
    _fistHtml = '<div class="key-wrapper"><h2>键盘键盘会发光<span>Stop</span></h2><ul><li class="drum"data-key="1"data-code="49">1</li><li class="drum"data-key="2"data-code="50">2</li><li class="drum"data-key="3"data-code="51">3</li><li class="drum"data-key="4"data-code="52">4</li><li class="synth"data-key="5"data-code="53">5</li><li class="synth"data-key="6"data-code="54">6</li><li class="synth"data-key="7"data-code="55">7</li><li class="synth"data-key="8"data-code="56">8</li><li class="synth"data-key="9"data-code="57">9</li><li class="synth"data-key="0"data-code="48">0</li><li class="synth"data-key="-"data-code="189">-</li></ul><ul><li class="drum"data-key="q"data-code="81">q</li><li class="drum"data-key="w"data-code="87">w</li><li class="drum"data-key="e"data-code="69">e</li><li class="drum"data-key="r"data-code="82">r</li><li class=""data-key="t"data-code="84">t</li><li class="bass"data-key="y"data-code="89">y</li><li class="bass"data-key="u"data-code="85">u</li><li class="pad"data-key="i"data-code="73">i</li><li class="pad"data-key="o"data-code="79">o</li><li class="pad"data-key="p"data-code="80">p</li></ul><ul><li class="drum"data-key="a"data-code="65">a</li><li class="drum"data-key="s"data-code="83">s</li><li class="drum"data-key="d"data-code="68">d</li><li class="drum"data-key="f"data-code="70">f</li><li class=""data-key="g"data-code="71">g</li><li class="bass"data-key="h"data-code="72">h</li><li class="bass"data-key="j"data-code="74">j</li><li class="loop"data-key="k"data-code="75">k</li><li class="loop"data-key="l"data-code="76">l</li></ul><ul><li class="drum"data-key="z"data-code="90">z</li><li class="drum"data-key="x"data-code="88">x</li><li class="drum"data-key="c"data-code="67">c</li><li class="drum"data-key="v"data-code="86">v</li><li class=""data-key="b"data-code="66">b</li><li class=""data-key="n"data-code="78">n</li><li class="loop"data-key="m"data-code="77">m</li><li class="loop"data-key=","data-code="188">,</li></ul><ul><li class="effect"data-key="SPACE"data-code="32">SPACE</li></ul></div>';