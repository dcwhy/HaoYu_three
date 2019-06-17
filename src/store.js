import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
export default new Vuex.Store({
  state: {
    client: [
      {
        imgurl: "http://www.1000zhu.com/images/words.png", four: "搜索引擎", seo: "SEO 优化", cmo: "搜索引擎竞价", class: "c1"
      },
      {
        imgurl: "http://www.1000zhu.com/images/words.png", four: "搜索引擎", seo: "SEO 优化", cmo: "搜索引擎竞价", class: "c2"
      },
      {
        imgurl: "http://www.1000zhu.com/images/words.png", four: "搜索引擎", seo: "SEO 优化", cmo: "搜索引擎竞价", class: "c3"
      },
      {
        imgurl: "http://www.1000zhu.com/images/words.png", four: "搜索引擎", seo: "SEO 优化", cmo: "搜索引擎竞价", class: "c4"
      },
      {
        imgurl: "http://www.1000zhu.com/images/words.png", four: "搜索引擎", seo: "SEO 优化", cmo: "搜索引擎竞价", class: "c5"
      },
      {
        imgurl: "http://www.1000zhu.com/images/words.png", four: "搜索引擎", seo: "SEO 优化", cmo: "搜索引擎竞价", class: "c6"
      }
    ],
    lxlist: [
      { text: "北京网站建设" },
      { text: "高端网站建设" },
      { text: "北京网站设计" },
      { text: "上海网站建设" },
      { text: "北京网站建设公司" },
      { text: "北京网站制作" },
      { text: "广州网站建设" },
      { text: "云南网站建设" },
      { text: "广州建站" },
      { text: "上地网站建设" },
      { text: "网站建设" },
      { text: "西安网站建设" },
      { text: "烟台网站建设" },
      { text: "长沙网站推广" },
      { text: "成都网站建设" },
      { text: "长沙网站建设" },
      { text: "深圳网站建设" },
      { text: "石家庄网站建设" },
      { text: "北京网站建设" },
      { title: "友情链接，携手共进" }
    ],
    lxfirst: [
      { imgurl: "http://www.1000zhu.com/images/wechat_code.jpg", lxtext1: "工作日：4006123011 / 010-80757532", lxtext2: "非工作日：4006123011 / 18511639815", lxtext3: "科技园区：北京 · 中关村 · 昌发展", lxtext4: "办公地址：北京市昌发展万科广场A座6层", lxtextone: "官网：www.1000zhu.com", lxtexttwo: "Email：Service@1000zhu.com", lxtextthree: "千助网建科技（北京）有限公司", lxtextfour: "京ICP备 08102474 号", lxtextfive: "京公网安备 11010802010984 号" }
    ],
    qznew: [
      { imgurl: "http://www.1000zhu.com/images/logo_article.png", wechaturl: "http://www.1000zhu.com/images/wechat_code.jpg", saoma: "扫一扫微信二维码", sy: "千助首页", al: "设计案例", dt: "文章动态", qzbot1: "京ICP备08102474号", qzbot2: "千助科技", qzbot3: "2008 - 2018", qzbot4: "版权所有", qzbot5: "北京网站建设与制作公司" }
    ],
    qzactive: [
      {tx1: "网页特效", imgurl: "http://www.1000zhu.com/upload/image/201708/15/1213248935.jpg", num: "15", aug: "Aug", tit: "给你看八个网页特效，让你的网站建设更加引人入胜！", time: "1年前", o: "•", re: "围观热度", zhi: "1501", hua: "经验之谈", fuck: "网站设计是一个永无止境的创意工作，优秀的网站通常伴有多个具有一定难度的网页特效。当然，一款设计精良、用户体验度高的网站对您的业务推广是至关重要的。　　在这个互联网数字 . . ."},

      { tx1: "网站转化率", tx2: " 网站设计趋势", imgurl: "http://www.1000zhu.com/upload/image/201708/14/1117082256.jpg", num: "14", aug: "Aug", tit: "如何使用以图像为中心的设计来提高网站转化率", time: "1年前", o: "•", re: "围观热度", zhi: "1008", hua: "经验之谈", fuck: "在去年的时候，就有很多文章预测，未来高端网站设计的趋势之一将是使用较大的高清图像。许多业内专家也认为，更大的高质量图像在吸引潜在客户方面很重要，特别是那些主要用来做营 . . ." },

      { tx1: "404错误页面", tx2: " 推荐设计", tx3: " 网站优化", imgurl: "http://www.1000zhu.com/upload/image/201708/12/0525247549.jpg", num: "12", aug: "Aug", tit: "歪果仁的那些404错误页面设计真的有创意吗？", time: "1年前", o: "•", re: "围观热度", zhi: "349", hua: "经验之谈", fuck: "当你在浏览网页时尝试去点击死链接，最终会出现的是一个404错误页面。北京网站建设公司千助科技发现，大多数企业网站的404错误页面都是一个非常普通，且毫无吸引力的页面，甚至有 . . ." },
      
      { tx1: "响应式网站", tx2: " app", imgurl: "http://www.1000zhu.com/upload/image/201708/11/1107476080.jpg", num: "11", aug: "Aug", tit: "如何使用以图像为中心的设计来提高网站转化率", time: "1年前", o: "•", re: "围观热度", zhi: "739", hua: "经验之谈", fuck: "为什么你的客户需要的是响应式网站，而不是APP应用程序？讨论这个问题之前，我们先来做一个有趣的练习：仔细回想一下，你上个月下载了多少个APP应用程序？如果你的答案超过零，那 . . ." },

      {tx1: "原创保护", imgurl: "http://www.1000zhu.com/upload/image/201708/10/1012198446.jpg", num: "10", aug: "Aug", tit: "百度启动原创保护计划，如何申请开通百度原创保护？", time: "1年前", o: "•", re: "围观热度", zhi: "554", hua: "行业动态", fuck: "应该说百度站长平台推出原创保护也有数月之久了，目前还在内测中，这也让很多文人雅士们等待的无比焦急。从百度2013年5月份推出的火星计划，到目前正在启动的原创保护计划，我们都 . . ."},

      { tx1: "学校网站建设", tx2: " 响应式设计", imgurl: "http://www.1000zhu.com/upload/image/201903/06/0521458428.jpg", num: "08", aug: "Aug", tit: "为什么别人家的学校网站建设都采用了优雅的响应式设计", time: "1年前", o: "•", re: "围观热度", zhi: "545", hua: "经验之谈", fuck: "“ 轻轻地我走了，正如我轻轻地来，我会用一生来想念您，母校，我何时才能再来 ...... ”　　当我们踏上社会的时候，母校总是如此相似地成为很多人的牵绊，也许是因为那里寄托着青 . . ." },

      { tx1: "互联网发展报告", imgurl: "http://www.1000zhu.com/upload/image/201708/07/1154467416.jpg", num: "07", aug: "Aug", tit: "CNNIC发布第40次《中国互联网络发展状况统计报告》", time: "1年前", o: "•", re: "围观热度", zhi: "387", hua: "行业动态", fuck: "日前，中国互联网络信息中心（CNNIC）在京发布第40次《中国互联网络发展状况统计报告》（以下简称为《报告》）。《报告》显示，截至2017年6月，中国网民规模达到7.51亿，占全球网 . . . " },
      
      { tx1: "网页配色 ", tx2: " 国外网站设计", imgurl: "http://www.1000zhu.com/upload/image/201708/02/0555392676.jpg", num: "02", aug: "Aug", tit: "来自 Minneapolis 的高端网站设计配色方案，震撼你的视觉观", time: "1年前", o: "•", re: "围观热度", zhi: "1018", hua: "经验之谈", fuck: "Minneapolis（明尼阿波里斯市）位于美国明尼苏达州东南部，是该州最大的一座城市，这里有一家高端的网站设计公司有着非常丰富的网页配色和策划经验，今天给大家带来的，就是出自该 . . ." },
    
      {tx1: "做网站哪家公司好", imgurl: "http://www.1000zhu.com/upload/image/201708/01/0413415606.jpg", num: "01", aug: "Aug", tit: "为什么找上地网站建设公司就选千助？老牌上地网站建设企业", time: "1年前", o: "•", re: "围观热度", zhi: "962", hua: "千助新闻", fuck: "上地，作为中关村高新技术企业的聚集地，随着互联网科技的发展，已从“中关村后花园”成长为“中国硅谷”，是中国科技水平的一张名片。　　很多企业都希望能在上地找一家技术实力 . . ."},

      { tx1: "酷站推荐 ", tx2: " 国外网站设计", imgurl: "http://www.1000zhu.com/upload/image/201707/25/1212261848.jpg", num: "25", aug: "Aug", tit: "来吧！北京网站设计公司又给您找了5个极具创意的网站", time: "1年前", o: "•", re: "围观热度", zhi: "367", hua: "经验之谈", fuck: "作为一家专注高端网站设计的北京建站公司，千助在寻找设计灵感的道路上从未停止，今天我们又为您收集了５个极具创意的网站，一起来欣赏一下吧。　　RICK WAALDERS　　这个网站看起 . . ." },
    
      {tx1: "网站设计趋势", tx2: " 国外网站设计", imgurl: "http://www.1000zhu.com/upload/image/201707/24/0417170758.jpg", num: "24", aug: "Jul", tit: "细数那些在2017年已成为主流的设计手法", time: "1年前", o: "•", re: "围观热度", zhi: "1501", hua: "经验之谈", fuck: "网站设计是一个永无止境的创意工作，优秀的网站通常伴有多个具有一定难度的网页特效。当然，一款设计精良、用户体验度高的网站对您的业务推广是至关重要的。　　在这个互联网数字 . . ."},

      { tx1: "高新技术企业", imgurl: "http://www.1000zhu.com/upload/image/201703/20/1142255525.jpg", num: "20", aug: "Mar", tit: "品牌影响力！祝贺我司荣获“国家高新技术企业”认定", time: "1年前", o: "•", re: "围观热度", zhi: "1008", hua: "经验之谈", fuck: "在去年的时候，就有很多文章预测，未来高端网站设计的趋势之一将是使用较大的高清图像。许多业内专家也认为，更大的高质量图像在吸引潜在客户方面很重要，特别是那些主要用来做营 . . ." },

      { tx1: "拜年", tx2: " 鸡年", tx3: " 网站优化", imgurl: "http://www.1000zhu.com/upload/image/201701/10/1159347313.jpg", num: "10", aug: "Jan", tit: "2016金猴收年，2017闻鸡起舞，千助给您拜早年啦！", time: "1年前", o: "•", re: "围观热度", zhi: "349", hua: "经验之谈", fuck: "当你在浏览网页时尝试去点击死链接，最终会出现的是一个404错误页面。北京网站建设公司千助科技发现，大多数企业网站的404错误页面都是一个非常普通，且毫无吸引力的页面，甚至有 . . ." },
      
      { tx1: "百度算法", tx2: " seo", imgurl: "http://www.1000zhu.com/upload/image/201611/25/1146521176.jpg", num: "25", aug: "Nov", tit: "百度祭出大招“蓝天算法”，一旦触发直接判罚整站", time: "1年前", o: "•", re: "围观热度", zhi: "739", hua: "经验之谈", fuck: "为什么你的客户需要的是响应式网站，而不是APP应用程序？讨论这个问题之前，我们先来做一个有趣的练习：仔细回想一下，你上个月下载了多少个APP应用程序？如果你的答案超过零，那 . . ." },

      {tx1: "网站设计趋势", tx2: " 设计推荐", imgurl: "http://www.1000zhu.com/upload/image/201611/24/0124060158.jpg", num: "24", aug: "Nov", tit: "来自国外的最新流行网站设计，大！你值得收藏", time: "1年前", o: "•", re: "围观热度", zhi: "554", hua: "行业动态", fuck: "应该说百度站长平台推出原创保护也有数月之久了，目前还在内测中，这也让很多文人雅士们等待的无比焦急。从百度2013年5月份推出的火星计划，到目前正在启动的原创保护计划，我们都 . . ."},

      { tx1: "logo", tx2: " 用户体验", imgurl: "http://www.1000zhu.com/upload/image/201611/23/0543022939.jpg", num: "23", aug: "Nov", tit: "网站建设的画龙点睛之笔，非 LOGO 设计莫属，服不服？", time: "1年前", o: "•", re: "围观热度", zhi: "545", hua: "经验之谈", fuck: "“ 轻轻地我走了，正如我轻轻地来，我会用一生来想念您，母校，我何时才能再来 ...... ”　　当我们踏上社会的时候，母校总是如此相似地成为很多人的牵绊，也许是因为那里寄托着青 . . ." },

      { tx1: "数据库", tx2: " mssql", tx3: " mysql", imgurl: "http://www.1000zhu.com/upload/image/201611/21/1106492932.jpg", num: "21", aug: "Nov", tit: "DB-Engines 最新11月数据库排行榜，网站建设常用数据库仍霸榜前三", time: "1年前", o: "•", re: "围观热度", zhi: "387", hua: "行业动态", fuck: "日前，中国互联网络信息中心（CNNIC）在京发布第40次《中国互联网络发展状况统计报告》（以下简称为《报告》）。《报告》显示，截至2017年6月，中国网民规模达到7.51亿，占全球网 . . . " },
      
      { tx1: "服务器 ", tx2: " 虚拟主机", imgurl: "http://www.1000zhu.com/upload/image/201611/18/1027589094.jpg", num: "18", aug: "Nov", tit: "涨知识！运行网站选用虚拟主机和独享服务器的区别详解", time: "1年前", o: "•", re: "围观热度", zhi: "1018", hua: "经验之谈", fuck: "Minneapolis（明尼阿波里斯市）位于美国明尼苏达州东南部，是该州最大的一座城市，这里有一家高端的网站设计公司有着非常丰富的网页配色和策划经验，今天给大家带来的，就是出自该 . . ." },
    
      {tx1: "习近平", tx2: " 互联网大会", imgurl: "http://www.1000zhu.com/upload/image/201611/16/1137382475.jpg", num: "16", aug: "Nov", tit: "第三届互联网大会乌镇开幕，习近平通过视频发表讲话", time: "1年前", o: "•", re: "围观热度", zhi: "962", hua: "千助新闻", fuck: "2016年11月16日，第三届世界互联网大会在浙江乌镇开幕。中国国家主席习近平通过视频发表讲话。各位嘉宾，各位朋友：大家好！值此第三届世界互联网大会开幕之际，我谨代表中国政府和中 . . . . . ."},

      { tx1: "国外网站设计 ", tx2: " 登录页", imgurl: "http://www.1000zhu.com/upload/image/201611/16/1003379222.jpg", num: "16", aug: "Nov", tit: "国外网站的登录页设计，看了是不是很想登录？", time: "2年前", o: "•", re: "围观热度", zhi: "560", hua: "经验之谈", fuck: "作为用户在网站上的登录入口，登录页的设计在网站建设中也是至关重要的。这里的登录页主要分为两部分，一个是用户注册页面，另一个才是用户登录页面，有时两个页也合在一起设计。登录 . . ." },
    
      {tx1: "编程语言", tx2: " java", tx3: " c#", tx4: " php", tx5: " python", imgurl: "http://www.1000zhu.com/upload/image/201611/14/1106262177.jpg", num: "14", aug: "Nov", tit: "11月编程语言排行榜，Java力压群雄，C#位列第四，PHP第七", time: "2年前", o: "•", re: "围观热度", zhi: "368", hua: "行业动态", fuck: "TIOBE 开发语言排行榜每月更新一次，新的开发语言也是层出不穷，不过 Java 和 C 语言的统治地位依然如故。本文我们来看下 11 月份的最新榜单，并重点分析下用于网站建设的编程语言的排 . . ."},

      { tx1: "国外网站设计 ", tx2: " 登录页", imgurl: "http://www.1000zhu.com/upload/image/201611/16/1003379222.jpg", num: "25", aug: "Aug", tit: "国外网站的登录页设计，看了是不是很想登录？", time: "2年前", o: "•", re: "围观热度", zhi: "560", hua: "经验之谈", fuck: "作为用户在网站上的登录入口，登录页的设计在网站建设中也是至关重要的。这里的登录页主要分为两部分，一个是用户注册页面，另一个才是用户登录页面，有时两个页也合在一起设计。登录 . . ." },
    ]
  },
  actions: {

  },
  mutations: {

  }
})