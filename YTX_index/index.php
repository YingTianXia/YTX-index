<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8">
<meta http-equiv="X-UA-Compatible" content="IE=EDGE"/>
<title>迎天下首页</title>
<link rel="stylesheet" type="text/css" href="asset/css/index.css"/>
<link rel="stylesheet" type="text/css" href="asset/css/login.css"/>
</head>
<body>
<div class="globalPage">
	<?php include "./index_module/top_banner.php"; ?>
	<div class="site-nav-content">
		<div class="site-nav clearfix">
			<div class="login-info">
				<a href="http://ytx.com/login/index" class="sn-user" id="J_loginBtn">Hi,请登录</a>
				<a href="#" class="sn-user" id="loginStatus" style="display:none;">Hi,<span id="J_user"></span></a>
				<a href="#" class="sn-mes">消息<b class="sn-mes-num">0</b></a>
				<a href="http://www.ytx.com/logout" class="sn-logout" id="J_logout">退出</a>
				<!--<a href="javascript:" class="sn-logout" >登录</a>-->
			</div>
			<div class="quick-menu">
				<a href="#" class="sm-quick-link">我关注的品牌</a>
				<a href="http://my.ytx.com/purchaseOrder/0/1" class="sm-quick-link">我的订单</a>
				<a href="#" class="sm-quick-link">收藏夹</a>
				<a href="http://apply.ytx.com/sellerEnter/agreement" class="sm-quick-link themeColor">品牌入驻</a>
			</div>
		</div>
	</div>
	<div class="logo-content clearfix">
		<div class="logo">
			<img src="asset/images/logo.jpg" class="logoImage"/>
		</div>
		<div class="search-content">
			<div class="clearfix">
				<div class="search-box">
					<input type="text" class="search-main" id="J_search" />
				</div>
				<button class="search-submitBtn" id="J_submitSearch">
					<span class="search-submitBtn-icon"></span>
				</button>
			</div>
			<div class="popular-search">
				<a href="http://s.ytx.com/itemList/2/0/0/1" class="popular-search-link themeColor">女装</a>
				<a href="http://s.ytx.com/itemList/3/0/0/1" class="popular-search-link">男装</a>
				<a href="http://s.ytx.com/itemList/11/0/0/1" class="popular-search-link">风衣</a>
				<a href="http://s.ytx.com/itemList/1078/0/0/1" class="popular-search-link themeColor">牛仔裤</a>
				<a href="http://s.ytx.com/itemList/1010/0/0/1" class="popular-search-link">鞋履</a>
				<a href="http://s.ytx.com/itemList/1013/0/0/1" class="popular-search-link">高跟鞋</a>
			</div>
			<div class="module-nav">
				<a href="#" class="module-nav-link">迎粉团</a>
				<span class="module-nav-desc">|</span>
				<a href="#" class="module-nav-link">迎品汇</a>
			</div>
		</div>
		<div class="app-content">
			<img src="asset/images/code.jpg" class="app-code-image"/>
			<p class="app-desc">手机客户端</p>
			<p class="app-desc themeColor">扫我有惊喜</p>
		</div>
		<div class="cart-content">
			<a href="#" class="cart-logo">
				<span class="cart-value">99</span>
			</a>
			<a href="http://cart.ytx.com" class="cartBtn">我的购物车<i class="cartBtn-desc"></i></a>
		</div>
	</div>
	<div class="banner-content" id="J_carouselOuter">
		<?php include './index_module/promotion_carousel.php'; ?>
		<div class="nav-outer">
			<div class="nav-section"></div>
			<ul class="nav-list">
				<li class="nav-item">
					<p class="nav-title">
						<i class="nav-title-icon women"></i>
						<a href="http://s.ytx.com/itemList/2/0/0/1" class="nav-title-link">女装</a>
					</p>
					<div class="nav-item-content">
						<div>
							<a href="http://s.ytx.com/itemList/1040/0/0/1" class="nav-item-link">蕾丝衫</a>
							<a href="http://s.ytx.com/itemList/1039/0/0/1" class="nav-item-link">连衣裙</a>
							<a href="http://s.ytx.com/itemList/1046/0/0/1" class="nav-item-link">抹胸</a>
						</div>
						<div>
							<a href="http://s.ytx.com/itemList/1059/0/0/1" class="nav-item-link">旗袍</a>
							<a href="http://s.ytx.com/itemList/1047/0/0/1" class="nav-item-link">牛仔裤</a>
							<a href="#" class="nav-item-link">更多&gt;</a>
						</div>
					</div>
				</li>
				<li class="nav-item">
					<p class="nav-title">
						<i class="nav-title-icon man"></i>
						<a href="http://s.ytx.com/itemList/3/0/0/1" class="nav-title-link">男装</a>
					</p>
					<div class="nav-item-content">
						<div>
							<a href="http://s.ytx.com/itemList/1041/0/0/1" class="nav-item-link">马夹</a>
							<a href="http://s.ytx.com/itemList/1054/0/0/1" class="nav-item-link">西装</a>
							<a href="http://s.ytx.com/itemList/1053/0/0/1" class="nav-item-link">卫衣</a>
						</div>
						<div>
							<a href="http://s.ytx.com/itemList/1036/0/0/1" class="nav-item-link">风衣</a>
							<a href="http://s.ytx.com/itemList/1020/0/0/1" class="nav-item-link">衬衫</a>
							<a href="#" class="nav-item-link">更多&gt;</a>
						</div>
					</div>
				</li>
				<li class="nav-item">
					<p class="nav-title">
						<i class="nav-title-icon children"></i>
						<a href="http://s.ytx.com/itemList/1010/0/0/1" class="nav-title-link">鞋履</a>
					</p>
					<div class="nav-item-content">
						<div>
							<a href="http://s.ytx.com/itemList/1011/0/0/1" class="nav-item-link">男鞋</a>
							<a href="http://s.ytx.com/itemList/1012/0/0/1" class="nav-item-link">女鞋</a>
							<a href="http://s.ytx.com/itemList/1014/0/0/1" class="nav-item-link">松糕鞋</a>
						</div>
						<div>
							<a href="http://s.ytx.com/itemList/1010/0/0/1" class="nav-item-link">鞋履</a>
							<a href="http://s.ytx.com/itemList/1013/0/0/1" class="nav-item-link">高跟鞋</a>
							<a href="#" class="nav-item-link">更多&gt;</a>
						</div>
					</div>
				</li>
				<li class="nav-item">
					<p class="nav-title">
						<i class="nav-title-icon clothes"></i>
						<a href="http://s.ytx.com/itemList/1012/0/0/1" class="nav-title-link">包履</a>
					</p>
					<div class="nav-item-content">
						<div>
							<a href="http://s.ytx.com/itemList/1003/0/0/1" class="nav-item-link">旅行包</a>
							<a href="http://s.ytx.com/itemList/1004/0/0/1" class="nav-item-link">女士包</a>
							<a href="http://s.ytx.com/itemList/1006/0/0/1" class="nav-item-link">荷叶包</a>
						</div>
						<div>
							<a href="http://s.ytx.com/itemList/1008/0/0/1" class="nav-item-link">莲蓉包</a>
							<a href="http://s.ytx.com/itemList/1009/0/0/1" class="nav-item-link">小包</a>
							<a href="#" class="nav-item-link">更多&gt;</a>
						</div>
					</div>
				</li>
				<li class="nav-item">
					<p class="nav-title">
						<i class="nav-title-icon shoes"></i>
						<a href="http://s.ytx.com/itemList/1047/0/0/1" class="nav-title-link">牛仔裤</a>
					</p>
					<div class="nav-item-content">
						<div>
							<a href="http://s.ytx.com/itemList/1062/0/0/1" class="nav-item-link">休闲裤</a>
							<a href="http://s.ytx.com/itemList/1061/0/0/1" class="nav-item-link">羽绒裤</a>
							<a href="http://s.ytx.com/itemList/1063/0/0/1" class="nav-item-link">西装裤</a>
						</div>
						<div>
							<a href="http://s.ytx.com/itemList/1080/0/0/1" class="nav-item-link">皮裤</a>
							<a href="http://s.ytx.com/itemList/1063/0/0/1" class="nav-item-link">正装裤</a>
							<a href="http://s.ytx.com/itemList/1009/0/0/1" class="nav-item-link">更多&gt;</a>
						</div>
					</div>
				</li>
				<li class="nav-item last-nav-item">
					<p class="nav-title">
						<i class="nav-title-icon sport"></i>
						<a href="http://s.ytx.com/itemList/1091/0/0/1" class="nav-title-link">西服套装</a>
					</p>
					<div class="nav-item-content">
						<div>
							<a href="http://s.ytx.com/itemList/1089/0/0/1" class="nav-item-link">西服</a>
							<a href="http://s.ytx.com/itemList/1090/0/0/1" class="nav-item-link">西裤</a>
							<a href="http://s.ytx.com/itemList/1083/0/0/1" class="nav-item-link">套装</a>
						</div>
						<div>
							<a href="http://s.ytx.com/itemList/1058/0/0/1" class="nav-item-link">礼服</a>
							<a href="http://s.ytx.com/itemList/1057/0/0/1" class="nav-item-link">婚纱</a>
							<a href="http://s.ytx.com/itemList/1009/0/0/1" class="nav-item-link">更多&gt;</a>
						</div>
					</div>
				</li>
			</ul>
			<?php include './index_module/floating_ad.php'; ?>
		</div>
	</div>
	<?php include './index_module/inedx_yingfentuan_section.php'; ?>
	<div class="brand-module-content" id="J_brandModule">
		<div class="brand-module">
			<div class="timeControler" id="timerBrand">
				<span class="timeControler-text">距离活动<br />结束还有</span>
				<span class="timeControler-time"></span>
				<span class="timeControler-time"></span>
				<span class="timeControler-text">天</span>
				<span class="timeControler-time"></span>
				<span class="timeControler-time"></span>
				<span class="timeControler-text">时</span>
				<span class="timeControler-time"></span>
				<span class="timeControler-time"></span>
				<span class="timeControler-text">分</span>
				<span class="timeControler-time second-time"></span>
				<span class="timeControler-time second-time"></span>
				<span class="timeControler-text">秒</span>
			</div>
		</div>
		<div class="brand-main">
			<ul class="brand-tabNav clearfix" id="J_brandTab">
				<li class="brand-tab active">
					<i class="brand-tab-icon female"></i>
					<span class="brand-tab-name">女装</span>
				</li>
				<li class="brand-tab">
					<i class="brand-tab-icon male"></i>
					<span class="brand-tab-name">男装</span>
				</li>
				<li class="brand-tab">
					<i class="brand-tab-icon child"></i>
					<span class="brand-tab-name">童装</span>
				</li>
				<li class="brand-tab">
					<i class="brand-tab-icon underwear"></i>
					<span class="brand-tab-name">内衣</span>
				</li>
				<li class="brand-tab">
					<i class="brand-tab-icon shoes"></i>
					<span class="brand-tab-name">鞋履</span>
				</li>
				<li class="brand-tab">
					<i class="brand-tab-icon out"></i>
					<span class="brand-tab-name">户外</span>
				</li>
			</ul>
			<div class="brand-list-main" id="J_brandList">
				<?php include './index_module/yingpinhui_women.php'; ?>
				<?php include './index_module/yingpinhui_men.php'; ?>
				<?php include './index_module/yingpinhui_children.php'; ?>
				<?php include './index_module/yingpinhui_underwear.php'; ?>
				<?php include './index_module/yingpinhui_shoes.php'; ?>
				<?php include './index_module/yingpinhui_outdoors.php'; ?>
			</div>
			<div class="brand-wall clearfix" id="J_brandWall">
				<?php include './index_module/brandWall.php'; ?>
				<?php include './index_module/brandWall.php'; ?>
				<?php include './index_module/brandWall.php'; ?>
				<?php include './index_module/brandWall.php'; ?>
				<div class="brand-actions-content">
					<div class="brand-actions">
						<span class="brand-prev" id="J_brandPrev"></span>
						<span class="brand-next" id="J_brandNext"></span>
					</div>
					<a href="#" class="brandMore">
						<span class="brandMore-text">更多品牌</span>
						<span class="brandMore-text-small">500+BRANDS</span>
					</a>
				</div>
			</div>
		</div>
	</div>
	<?php include './index_module/center_banner_1.php'; ?>
	<div class="industry-floor-box">
		<?php include './index_module/women_street_floor.php'; ?>
		<?php include './index_module/women_office_floor.php'; ?>
		<?php include './index_module/women_designer_floor.php'; ?>
		<?php include './index_module/business_man_floor.php'; ?>
		<?php include './index_module/simple_man_floor.php'; ?>
		<?php include './index_module/boy_floor.php'; ?>
		<?php include './index_module/girl_floor.php'; ?>
		<?php include './index_module/underwear_floor.php'; ?>
		<?php include './index_module/shoes_floor.php'; ?>
		<?php include './index_module/sport_floor.php'; ?>
	</div>
	<?php include './index_module/center_banner_2.php'; ?>
	<div class="wonderful-content" id="J_wonderful">
		<?php include './index_module/popular_products_section.php'; ?>
	</div>
	<div class="footer-content">
		<div class="index-footer">
			<div class="footer-promise clearfix">
				<a class="footer-promise-item">
					<i class="footer-promise-icon zheng"></i>
					<span class="footer-promise-text">100%品牌授权正品</span>
					<b class="footer-promise-desc"></b>
				</a>
				<a class="footer-promise-item">
					<i class="footer-promise-icon you"></i>
					<span class="footer-promise-text">汇聚全网底价优品</span>
					<b class="footer-promise-desc"></b>
				</a>
				<a class="footer-promise-item">
					<i class="footer-promise-icon huan"></i>
					<span class="footer-promise-text">7天无理由退换</span>
					<b class="footer-promise-desc"></b>
				</a>
				<a class="footer-promise-item">
					<i class="footer-promise-icon bao"></i>
					<span class="footer-promise-text">全网包邮</span>
				</a>
			</div>
			<div class="footer-desc clearfix">
				<dl class="footer-desc-list">
					<dt class="footer-desc-title">关于我们</dt>
					<dd class="footer-desc-item"><a href="#">关于我们</a></dd>
					<dd class="footer-desc-item"><a href="#">诚聘英才</a></dd>
					<dd class="footer-desc-item"><a href="#">服务条款</a></dd>
				</dl>
				<dl class="footer-desc-list">
					<dt class="footer-desc-title">帮助中心</dt>
					<dd class="footer-desc-item"><a href="#">新手上路</a></dd>
					<dd class="footer-desc-item"><a href="#">服务指南</a></dd>
					<dd class="footer-desc-item"><a href="#">常见问题</a></dd>
					<dd class="footer-desc-item"><a href="#">在线客服</a></dd>
				</dl>
				<dl class="footer-desc-list">
					<dt class="footer-desc-title">支付方式</dt>
					<dd class="footer-desc-item"><a href="#">支付宝</a></dd>
					<dd class="footer-desc-item"><a href="#">微信钱包</a></dd>
				</dl>
				<dl class="footer-desc-list">
					<dt class="footer-desc-title">商家入驻</dt>
					<dd class="footer-desc-item"><a href="#">入驻说明</a></dd>
					<dd class="footer-desc-item"><a href="#">入驻资质</a></dd>
				</dl>
				<dl class="footer-desc-list">
					<dt class="footer-desc-title">会员服务</dt>
					<dd class="footer-desc-item"><a href="#">积分攻略</a></dd>
				</dl>
				<dl class="footer-desc-list">
					<dt class="footer-desc-title">记住我们</dt>
					<dd class="footer-desc-item"><a href="#">记住域名：<span>ytx.com</span></a></dd>
					<dd class="footer-desc-item"><a href="#">百度搜索：<span>迎天下</span></a></dd>
					<dd class="footer-desc-item"><a href="#">收藏本站：<span>加入收藏</span></a></dd>
				</dl>
				<dl class="footer-desc-list">
					<dt class="footer-desc-title">下载手机版</dt>
					<dd class="footer-desc-item">
						<img src="asset/images/code.jpg" class="footer-desc-code"/>
					</dd>
				</dl>
			</div>
		</div>
	</div>
	<?php include './index_module/industry_floor.php'; ?>
	<?php include './common_module/fixBar.php'; ?>
</div>
<script src="http://res.wx.qq.com/connect/zh_CN/htmledition/js/wxLogin.js"></script>
<script src="asset/js/jquery-1.11.3.min.js" type="text/javascript" charset="utf-8"></script>
<script src="asset/js/carousel.js" type="text/javascript" charset="utf-8"></script>
<script src="asset/js/login.js" type="text/javascript" charset="utf-8"></script>
<script src="asset/js/index.js" type="text/javascript" charset="utf-8"></script>
<script src="asset/js/fixBar.js" type="text/javascript" charset="utf-8"></script>
</body>
</html>
