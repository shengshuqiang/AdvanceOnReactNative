<!--# 进击ReactNative-徐如林-React源码解析-->
采扶桑 望帝乡 兵甲销为日月光

# 目录

1. 序
	2. ReactNative
	3. SCQA剖析React原理，拿到结果
2. 定目标
	3. 传道（攻坚方法论）
	4. 授业（懂算法）
	5. 解惑（考考你）
3. 追过程
	4. 演进（log、debug、绘制内存数据）
	5. 简单可依赖伪代码
	5. 讲清楚、说明白，听得懂、记得住
4. 拿结果
	4. 生命周期调用
	5. 高性能实践
	6. 问题定位利器
	5. 方法钩子

# 序

有的人可能会不理解，为什么这么多人为ReactNative而战？专注于移动互联网大前端是我们最崇高的理想，ReactNative是一扇门。纵观行业风向，有作壁上观者，有磨刀霍霍者，有入门到放弃者，有大刀阔斧者，但是缺乏深潜微操者。哈，是时候该我出手了。祭出“大海航术”，经过一年来不懈钻研，基于React Developer Tools开发插件，自动监控绘制运行时三张图--Fiber双树图、Native View树、React方法调用树，在上帝视角和时间旅行的引领下，冲破波诡云谲的Fiber迷航，日照大海现双龙。

如果有对ReactNative不太熟悉的朋友，可以看一下我上篇文章[《进击ReactNative-疾如风》](https://shengshuqiang.github.io/2019/01/07/%E8%BF%9B%E5%87%BBReactNative-%E7%96%BE%E5%A6%82%E9%A3%8E.html)润润嗓子，该文从“原理+实践，现学现做”的角度手写石器时代ReactNative，了解整体跨平台套路，目的是先学会怎么用，再去想为什么！本文则回答为什么。

做大事，就要用大斧头。先用[阿里“三板斧”](https://baijiahao.baidu.com/s?id=1609462546639223406&wfr=spider&for=pc)撼一下。

# 定目标

![](https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1571484976400&di=eb0ed193ef6ce2624c353b0fd25d1c78&imgtype=0&src=http%3A%2F%2Fwww.t-chs.com%2FtuhsJDEwLmFsaWNkbi5jb20vaTQvMzA2NDA1MDM5Mi9UQjJyUVlfa3JvckJLTmpTWkZqWFhjX1NwWGFfISEzMDY0MDUwMzkyJDk.jpg)

## 传道（攻坚方法论）

近几年移动互联网北漂，让我明白一个道：所谓经验，就是不断践行强化自己的方法论，“复盘总结”是茁壮成长的牛人居家旅行必备利器。我攻坚ReactNative的最大动力，就是借假修真，跨平台技术最终王者也许花落Flutter或者小程序（还有很多人在纠结到底哪家强，耽误了学习，其实这好比考清华还是考北大，Top2高校有那么难选么，真正难选的是Top3高校），这都都不重要，我能举一，必能反三。这就是道，我旨在强化出一套跨界喜剧王的方法论，如何从0将ReactNative技能练到Android熟练度，并且同样适用于Flutter和小程序。
![授之以鱼不如授之以渔](https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=715008485,843781424&fm=26&gp=0.jpg)

## 授业（懂算法）

阅读源码的好处不言而喻，源码是唯一的真相和注释，无意间你发现了还有其他骚操作，关键还不花钱。记得我刚入行时，我问导师乔璞学习Android要看哪些书，导师乔璞说，看Google官方文档和源码就足够了，其他的那些书都是抄官方文档的。从那时起，我掌握了省钱的窍门。
现在市面上高水准深度解析ReactNative文章比较少，而且大多停留在理论层面，只给出源代码片段，根本无法深入实操，只能作者说啥就是啥，反正我也不懂。
![Talk is cheap. Show me the code.](http://5b0988e595225.cdn.sohucs.com/images/20180102/9648fc14eb1146b8839470cbe852be56.jpeg)
本文必须带你看到源码但不是做英语阅读，尽量做到：

1. 承上（你的api怎么用的）
	* 生命周期调用时机
	* render干了什么
	* setState发生了什么
	* PureComponent比Component高在哪里，我们怎么能做到更高
1. 启下（底层怎么处理的）
	* 深入浅出Fiber双树算法
	* diff算法
	* Native操作指令从哪来的

## 解惑（考考你）

爱思考的童靴会发现各种各样的问题，我也是？下面是我遇到的问题，我需要一个满意的答复。

1. 明明只写了几个组件，通过React DevTools看到的是一堆布局，而且还有Context.Consumer，这些都是干啥的，React组件和Native View映射策略是什么？
2. Element、Instance、DOM之间关系？
2. 都说React有个diffing算法，这个在代码哪里，怎么比较的，文案变了会涉及diff算法吗？
3. 浅比较shouldComponentUpdate说的是什么，到底应该怎么用？
4. React有棵DOM树，树在哪，怎么看，怎么操作Native的DOM树？
5. setState到底干啥了？
6. React高效在哪？
7. React工作流程？
8. 如何关联Native自定义组件？
9. 每个Fiber节点存了什么信息，输入和输出是什么？

![](https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1571497262025&di=4ae4817071de66ff8d666ece3b484ece&imgtype=jpg&src=http%3A%2F%2Fimg0.imgtn.bdimg.com%2Fit%2Fu%3D3424028830%2C393276537%26fm%3D214%26gp%3D0.jpg)

# 追过程

## 三步曲

### 第一步（查资料）

网上一顿关键字搜索，站在前人的肩膀上，知道个大概，不要急，妥妥的数十篇深度文章以上，你的感觉才能来。这里给大家安利三篇文章（ReactNative优秀文章导读）和一个微信朋友圈（前面三篇文章只是我盆友圈的汇集，这么说吧，发盆友圈是停不下来了，上一天班我就发一篇），没错，就是我，不一样的烟火。发盆友圈，我是认真的。

1. [进击ReactNative-纳百川](https://shengshuqiang.github.io/2018/12/15/%E8%BF%9B%E5%87%BBReactNative-%E7%BA%B3%E7%99%BE%E5%B7%9D.html)
2. [进击ReactNative-积土（React）山](https://shengshuqiang.github.io/2019/01/20/%E8%BF%9B%E5%87%BBReactNative-%E7%A7%AF%E5%9C%9F-React-%E5%B1%B1.html)
3. [进击ReactNative-积水（JavaScript）渊](https://shengshuqiang.github.io/2019/02/24/%E8%BF%9B%E5%87%BBReactNative-%E7%A7%AF%E6%B0%B4-JavaScript-%E6%B8%8A.html)
4. 点右上角“关于”加我微信，欢迎切磋技艺

给大家分享一下，18年我主要是在早上地铁通勤时手机看的，然后到公司10分钟总结发一下，顺带练习一下抓重点。19年初工作鸭梨大，中断了一段时间，现在已经满血回蓝，接着干。发现，回不去了，地铁上看不下去，索性换个时间，早上6：30左右（早睡早起）起来用电脑看，半小时就发盆友圈。我观察过，7点左右发点赞数最多，《朝闻天下》7：00播出就是这个道理。

《中庸》上说，“人一能之己百之，人十能之己千之。果能此道矣，虽愚必明，虽柔必强。”书看多了，感觉也就有了，优势和自信也就来了，于是，你看到了希望，眼里有光。不间断的阅读输出，能不断获得启发，有助于修正强化方法论。

当然了，干打鸡血只能一时鸡血一时爽，一直鸡血的话，会迷失自己，诱发精神分裂，鸡血一停，妥妥滴至暗时刻，走不出来，就是自闭症。其实，这是我瞎说的，我又不是医生【^_^】。当然，里面也有科学理论支持，毕竟我混迹移动互联网大厂也有些年头了。
![](https://graph.baidu.com/resource/1114b4dcfedef4b0cfe0501571490007.jpg)
![](https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1571500178952&di=e99cf073f3ed19b9115c2f3b38d1976e&imgtype=0&src=http%3A%2F%2F5b0988e595225.cdn.sohucs.com%2Fimages%2F20181124%2Ffe3f0a9701d546fd83a3adfb312cbf7d.jpeg)

### 第二步（搭台子）

搭一个实验室--本地可运行环境（我的开发平台macOS，目标平台Android）。

1. 安装软件：Webstorm（前端开发环境）、AndroidStudio（Android开发环境，送Android模拟器）
2. 安装依赖：安装XCode（iOS开发环境，送iPhone模拟器）就顺带解决了
2. 使用 React Native 命令行工具来创建一个名为"AwesomeProject"的新项目：react-native init AwesomeProject
3. 欧了，简单demo测试一下。
4. ![](./简单demo.png)
5. 配置详见[React Native 中文网-搭建开发环境](https://reactnative.cn/docs/getting-started.html)

### 第三步（上阔乐）

程序猿不抽烟，不饮酒，但是阔乐可以有。就着阔乐，我们来读源码吧。


读源码，需要有一定的内力，记得刚实习的时候读SIP协议栈实现源码，咪着眼睛摸着石头过河，磕得一脸狗血，想死的心都有。凡事都有个过程，随着日月如梭，读码，我已然也是一把好手。论定力，我佩服乔璞导师和杨光乐同学，根本耗不过他们，一动不动都不带上厕所的，就问你憋不憋得住。

我给自己的撸码方法论起了个响亮又洋气的名字--“大海航术”，简单说就是运行时日志辅助断点调试，再加上自己野兽般的想象力，达到能自圆其说，唬住不懂的人（包括我自己），假装懂了的套路。用龙四的话讲，“其实千术讲究领悟力，即一点就明”。

对付简单的算法，这招基本够用，否则我也混不下去了。但是，Fiber算法，可不是这么想的。第一个回合硬着头皮看下来，只知道一堆乱七八糟的调用，混杂着Fiber数据结构中的各种光怪陆离的属性，而且用到了负责的双树形结构，这些，小本子根本记不过来。来张我的笔记感受一下，一波操作下来，差不多要2天专注的投入。
![](./ReactNativeRenderer.render.png)

4. 演进（log、debug、绘制内存数据）
5. 简单可依赖伪代码
5. 讲清楚、说明白，听得懂、记得住
6. 
头脑活一点的童靴可能再想，能不能不还？

但是却总是好奇react的底层实现原理，多次尝试阅读react源代码都无法读下去，确实太难了。

简约伪代码示意

逐级拆解细化图，展开收起脑图

参考![React源码分析](https://juejin.im/post/5abe05ea5188255c61631d6c)实现自由缩放知识地图点线面事源码突围

演示diff算法区别，[React 源码剖析系列 － 不可思议的 react diff](https://zhuanlan.zhihu.com/p/20346379)


# 拿结果

4. 生命周期调用
5. 高性能实践
6. 问题定位利器
5. 方法钩子

# 炼心志

国庆阅兵，走正步有啥用？

# 长歌

1. 永远不要只满足于世界的表象，要敢于探寻未知的可能。--《守望先锋》
2. 天不生我李淳罡，剑道万古长如夜。剑来！--《雪中悍刀行》
3. 如果迎着风，就飞。--《远走高飞》
4. 在本帅眼里没有圣女，也无所谓蛊王。--《画江湖之不良人》
5. 世间万事，风云变幻，苍黄翻覆，纵使波谲云诡，但制心一处，便无事不办，天定胜人，人定兮胜天！李淳风，霸道如何，天道又如何？我，不在乎。--《画江湖之不良人》
6. 当其他人盲目追随真理的时候，记住，万物皆虚；当其他人被道德和法律束缚的时候，记住，万事皆允。我们躬耕于黑暗，服侍着光明，我们是刺客。--《刺客信条》
7. 天生万物以养人，世人犹怨天不仁。 不知蝗蠹遍天下，苦尽苍生尽王臣。 人之生矣有贵贱，贵人长为天恩眷。 人生富贵总由天，草民之穷由天谴。 忽有狂徒夜磨刀，帝星飘摇荧惑高。 翻天覆地从今始，杀人何须惜手劳。 不忠之人曰可杀！不孝之人曰可杀！ 不仁之人曰可杀！不义之人曰可杀！ 不礼不智不信人，大西王曰杀杀杀！ 我生不为逐鹿来，都门懒筑黄金台， 状元百官都如狗，总是刀下觳觫材。 传令麾下四王子，破城不须封刀匕。 山头代天树此碑，逆天之人立死跪亦死! --《七杀碑》
8. 风从龙，云从虎， 功名利禄尘与土。望神州，百姓苦， 千里沃土皆荒芜。看天下，尽胡虏， 天道残缺匹夫补。好男儿，别父母， 只为苍生不为主。手持钢刀九十九， 杀尽胡儿才罢手。我本堂堂男子汉， 何为鞑虏作马牛。壮士饮尽碗中酒， 千里征途不回头。金鼓齐鸣万众吼， 不破黄龙誓不休。 -- 《红巾军军歌》
2. 青锋剑在手，总感觉缺了点什么？钱，太俗了，不过我喜欢，准确的说是价值（O(∩_∩)O哈哈~）。

# 结语

感谢岳母大人和媳妇大人的默默付出，
感谢士兴大佬、朝旭大神、车昊大哥、张杰大哥、思文大拿、陈卓大牛的技术支持和指导。

曾经在知乎看到一个问题，“[能魔改react-native源码的是什么水平的前端？](https://www.zhihu.com/question/269731127)”我挑战了这个水平。

谨以此文，献给(那些)曾经热爱互联网技术，并和并肩作战的伙伴们一同度过时光的人们，呈现这重逢的此刻。

# 参考

1. [React16源码之React Fiber架构](https://github.com/HuJiaoHJ/blog/issues/7#)
2. [React Fiber架构](https://zhuanlan.zhihu.com/p/37095662)
2. [「译」React Fiber 那些事: 深入解析新的协调算法](https://juejin.im/post/5c052f95e51d4523d51c8300)
3. [浅析React Diff 与 Fiber](https://zhuanlan.zhihu.com/p/58863799)
3. [200行代码实现简版react](https://juejin.im/post/5c0c7304f265da613e22106c)
2. [React 源码剖析系列 － 不可思议的 react diff](https://zhuanlan.zhihu.com/p/20346379)
3. [React源码分析](https://juejin.im/post/5abe05ea5188255c61631d6c)
4. [[react] React Fiber 初探](https://www.cnblogs.com/qingmingsang/articles/9131512.html)
5. [Virtual DOM 的实现和 React Fiber 简介](https://www.jianshu.com/p/b189b2949b33)
6. [React中一个没人能解释清楚的问题——为什么要使用Virtual DOM](https://www.zcfy.cc/article/the-one-thing-that-no-one-properly-explains-about-react-why-virtual-dom-hashnode-1211.html)
6. [深度剖析：如何实现一个 Virtual DOM 算法 #13](https://github.com/livoras/blog/issues/13)
6. [React Fiber 架构【译】](https://blog.yongyuan.us/articles/2017-04-10-react-fiber/)
7. [React Fiber是什么](https://zhuanlan.zhihu.com/p/26027085)
5. [浅谈React16框架 - Fiber](https://blog.csdn.net/P6P7qsW6ua47A2Sb/article/details/82322033)
6. [如何理解 React Fiber 架构？](https://www.zhihu.com/question/49496872)
7. [React 16 架构研究记录（文末有彩蛋）](https://zhuanlan.zhihu.com/p/36926155)
8. [对React生命周期的理解](https://blog.csdn.net/WonderGlans/article/details/83479577)