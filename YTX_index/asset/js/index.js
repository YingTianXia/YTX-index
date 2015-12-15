;(function(){
$(document).ready(function(){
	/*
	 * init
	 * init
	 */
	var J_carouselEA = document.getElementById('J_carouselEA'),
		J_carouselJK = document.getElementById('J_carouselJK'),
		J_carouselOringinal = document.getElementById('J_carouselOringinal'),
		J_carouselBM = document.getElementById('J_carouselBM'),
		J_carouselSimple = document.getElementById('J_carouselSimple'),
		J_carouselBoy = document.getElementById('J_carouselBoy'),
		J_carouselGirl = document.getElementById('J_carouselGirl'),
		J_carouselUnderwear = document.getElementById('J_carouselUnderwear'),
		J_carouselShoes = document.getElementById('J_carouselShoes'),
		J_carouselSport = document.getElementById('J_carouselSport');
		
		
	var allCookies = document.cookie,
		J_user = document.getElementById("J_user");
	if(allCookies.indexOf('token') > 0){
		try{
			cookies = allCookies.split(';');
			for (var i = 0, j = cookies.length; i < j; i++){
				if(cookies[i].indexOf('nickName=')>0){
					var nickName = cookies[i].substring(cookies[i].indexOf('=')+1);
					break;
				};
			};
			J_user.innerHTML = decodeURIComponent(nickName);
			$("#loginStatus").show();
			$("#J_loginBtn").hide();
		}catch(e){
			
		}
	}else{
		$("#J_logout").hide();
	}
	
		
	var carouselEA = new Carousel({
		"dom": J_carouselEA,
		"viewW": "400",
		"autoTimer": "5000"
	});
	var carouselJK = new Carousel({
		"dom": J_carouselJK,
		"viewW": "400",
		"autoTimer": "5000"
	});
	var carouselOringinal = new Carousel({
		"dom": J_carouselOringinal,
		"viewW": "400",
		"autoTimer": "5000"
	});
	var carouselBM = new Carousel({
		"dom": J_carouselBM,
		"viewW": "400",
		"autoTimer": "5000"
	});
	var carouselSimple = new Carousel({
		"dom": J_carouselSimple,
		"viewW": "400",
		"autoTimer": "5000"
	});
	var carouselBoy = new Carousel({
		"dom": J_carouselBoy,
		"viewW": "400",
		"autoTimer": "5000"
	});
	var carouselGirl = new Carousel({
		"dom": J_carouselGirl,
		"viewW": "400",
		"autoTimer": "5000"
	});
	var carouselUnderwear = new Carousel({
		"dom": J_carouselUnderwear,
		"viewW": "400",
		"autoTimer": "5000"
	});
	var carouselShoes = new Carousel({
		"dom": J_carouselShoes,
		"viewW": "400",
		"autoTimer": "5000"
	});
	var carouselSport = new Carousel({
		"dom": J_carouselSport,
		"viewW": "400",
		"autoTimer": "5000"
	});
	
	
	var $J_fixedPanel = $("#J_fixedPanel"),
		$J_wonderful =$("#J_wonderful"),
		$J_brandModule = $("#J_brandModule"),
		$J_shopModule = $("#J_shopModule"),
		windouHeight = $(window).height(),
		shopModuleOffsetTop = $J_shopModule.offset().top,
		sportOffsetTopReal = $(J_carouselSport).offset().top;
		
	setTimeout(function(){
		var shopModuleOffsetTop = $J_shopModule.offset().top,
			brandModuleOffsetTop = $J_brandModule.offset().top,
			EAOffsetTop = $(J_carouselEA).offset().top - (windouHeight - $(J_carouselEA).height())/2,
			JKOffsetTop = $(J_carouselJK).offset().top - (windouHeight - $(J_carouselJK).height())/2,
			oringinalOffsetTop = $(J_carouselOringinal).offset().top - (windouHeight - $(J_carouselOringinal).height())/2,
			BMOffsetTop = $(J_carouselBM).offset().top - (windouHeight - $(J_carouselBM).height())/2,
			simpleOffsetTop = $(J_carouselSimple).offset().top - (windouHeight - $(J_carouselSimple).height())/2,
			boyOffsetTop = $(J_carouselBoy).offset().top - (windouHeight - $(J_carouselBoy).height())/2,
			girlOffsetTop = $(J_carouselGirl).offset().top - (windouHeight - $(J_carouselGirl).height())/2,
			underwearOffsetTop = $(J_carouselUnderwear).offset().top - (windouHeight - $(J_carouselUnderwear).height())/2,
			shoesOffsetTop = $(J_carouselShoes).offset().top - (windouHeight - $(J_carouselShoes).height())/2,
			sportOffsetTop = $(J_carouselSport).offset().top - (windouHeight - $(J_carouselSport).height())/2,
			sportOffsetTopReal = $(J_carouselSport).offset().top;
		
		//panel floor
		$(window).bind('scroll', scrollPanel);
		scrollPanel();
		
		function scrollPanel() {
			var scrollTop = $(document).scrollTop() + 1*1;
			$J_fixedPanel.find('.floor-nav-icon').removeClass('current');
			if(scrollTop >= sportOffsetTop){
				$J_fixedPanel.find('#J_sport').addClass('current');
				return;
			}else if(scrollTop >= shoesOffsetTop){
				$J_fixedPanel.find('#J_shoes').addClass('current');
				return;
			}else if(scrollTop >= underwearOffsetTop){
				$J_fixedPanel.find('#J_underwear').addClass('current');
				return;
			}else if(scrollTop >= girlOffsetTop){
				$J_fixedPanel.find('#J_girl').addClass('current');
				return;
			}else if(scrollTop >= boyOffsetTop){
				$J_fixedPanel.find('#J_boy').addClass('current');
				return;
			}else if(scrollTop >= simpleOffsetTop){
				$J_fixedPanel.find('#J_simple').addClass('current');
				return;
			}else if(scrollTop >= BMOffsetTop){
				$J_fixedPanel.find('#J_BM').addClass('current');
				return;
			}else if(scrollTop >= oringinalOffsetTop){
				$J_fixedPanel.find('#J_original').addClass('current');
				return;
			}else if(scrollTop >= JKOffsetTop){
				$J_fixedPanel.find('#J_JK').addClass('current');
				return;
			}else if(scrollTop >= EAOffsetTop){
				$J_fixedPanel.find('#J_EA').addClass('current');
				return;
			}else if(scrollTop >= brandModuleOffsetTop){
				$J_fixedPanel.find('#J_hui').addClass('current');
				return;
			}else if(scrollTop >= shopModuleOffsetTop){
				$J_fixedPanel.find('#J_fen').addClass('current');
				return;
			};
		};
	}, 2000);
		
		var $J_loginBtn = $("#J_loginBtn");
		$J_loginBtn.bind('click', function(){
			login.popShow();
		})
		
		scrollHandler();
		
		//banner
		var $J_bannerCarousel = $("#J_bannerCarousel"),
			banners = $J_bannerCarousel.find('.banner-link'),
			$J_bannerTabs = $("#J_bannerTabs"),
			$J_carouselOuter = $("#J_carouselOuter"),
			bannertabs;
			
		var banner = {
			index: 0,
			init: function() {
				var _this = this;
				banners.each(function(i, e){
					if(i == 0){
						$(e).show();
						$J_bannerTabs.append('<span class="banner-tab banner-tab-on"></span>');
					}else{
						$(e).hide();
						$J_bannerTabs.append('<span class="banner-tab"></span>');
					};
				});
				$J_bannerTabs.delegate('.banner-tab', 'mouseover', _this.tabControler);
				bannertabs = $J_bannerTabs.find('.banner-tab');
				this.autoplay();
				$J_carouselOuter.bind('mouseover', function(){
					clearInterval(banner.autoTimer);
				});
				$J_carouselOuter.bind('mouseout', function(){
					_this.autoplay();
				})
			},
			autoplay: function() {
				var _this = this;
				banner.autoTimer = setInterval(function(){
					_this.index++;
					if(_this.index >= banners.length){
						_this.index = 0;
					}
					_this.carousel(_this.index);
				},4000);
			},
			tabControler: function() {
				var _this = $(this);
				banner.timer = setTimeout(function(){
					banner.index = _this.index();
					banner.carousel(banner.index);
				},100);
				$(this).bind('mouseout', function(){
					clearTimeout(banner.timer);
				});
			},
			carousel: function(idx) {
				bannertabs.removeClass('banner-tab-on');
				bannertabs.eq(idx).addClass('banner-tab-on');
				banners.stop().fadeOut();
				banners.eq(idx).stop().fadeIn();
			}
		};
		
		banner.init();
		
		//Timer
		var Timer = {
			init: function(endTime, dom, showDom){
				var _this = this;
				timerHandler();
				this.timer = setInterval(timerHandler, 1000);
				function timerHandler(){
					var period = endTime * 1 - new Date() * 1
					if(period < 0){
						return false;
					};
					_this.timeformat = {
						"day": Math.floor(period/1000/60/60/24)<10? '0' + Math.floor(period/1000/60/60/24):Math.floor(period/1000/60/60/24),
						"hour": Math.floor(period/1000/60/60)%24<10? '0' + Math.floor(period/1000/60/60)%24:Math.floor(period/1000/60/60)%24,
						"minutes": Math.floor(period/1000/60)%60<10? '0' + Math.floor(period/1000/60)%60:Math.floor(period/1000/60)%60,
						"seconds": Math.floor(period/1000)%60<10? '0' + Math.floor(period/1000)%60:Math.floor(period/1000)%60
					}
					var timeString = _this.timeformat.day.toString() + _this.timeformat.hour + _this.timeformat.minutes + _this.timeformat.seconds;
					showDom.each(function(i, e){
						e.innerHTML = timeString.slice(i,i+1);
					});
				}
			}
		};
		var $timerShop = $("#timerShop"),
			$timerShopContent = $timerShop.find('.timeControler-time'),
			$timerBrand = $("#timerBrand"),
			$timerBrandContent = $timerBrand.find('.timeControler-time');
			
		var endTime = new Date(2015, 10, 30);
		
		Timer.init(endTime, $timerShop, $timerShopContent);
		Timer.init(endTime, $timerBrand, $timerBrandContent);
		
		login.init();
		
		var $J_brandTab = $("#J_brandTab"),
			$J_brandTabs = $J_brandTab.find('.brand-tab'),
			$J_brandList = $("#J_brandList"),
			$J_brandItems = $J_brandList.find('.brand-list-content'),
			$J_brandWall = $("#J_brandWall").find('.brand-wall-list'),
			$J_brandPrev = $("#J_brandPrev"),
			$J_brandNext = $("#J_brandNext"),
			brandIndex = 0,
			brandWallTotal = $J_brandWall.size();
			$J_brandWall.hide();
			$J_brandWall.eq(0).show();
			
		var $J_search = $("#J_search"),
			$J_submitSearch = $("#J_submitSearch");
	/**
	 * listener
	 * listener
	 **/
	$J_submitSearch.bind('click', submitSearch);
	$J_brandNext.bind('click', brandNext);
	$J_brandPrev.bind('click', brandPrev);
	//brandsTab
	$J_brandTab.delegate('.brand-tab', 'click', brandTab);
	//panel position
	$(window).bind('resize', scrollHandler);
	//panel display
	$(window).bind('scroll', scrollHandler);
	//floor skipTo
	$J_fixedPanel.delegate('.floor-nav-item', 'click', floorHandler);
	
	/**
	 * function
	 * function
	 **/
	
	function submitSearch() {
		var searchName = $J_search.val();
		if(searchName == ''|| searchName == null){
			window.location.href = 'http://s.ytx.com';
		}else{
			window.location.href = 'http://s.ytx.com/itemList/0/0/' + searchName + '/0/1';
		}
	}
	
	function brandNext() {
		brandIndex++;
		if(brandIndex >= brandWallTotal){
			brandIndex = 0;
		};
		if(brandWallTotal<=1){
			return;
		};
		brandWallSkipTp(brandIndex);
	};
	
	function brandPrev() {
		brandIndex--;
		if(brandIndex < 0){
			brandIndex = brandWallTotal-1
		};
		if(brandWallTotal<=1){
			return;
		};
		brandWallSkipTp(brandIndex);
	};
	
	function brandWallSkipTp(num) {
		num *= 1;
		$J_brandWall.hide();
		$J_brandWall.eq(num).fadeIn(200);
	}
	
	function brandTab() {
		$J_brandTabs.removeClass('active');
		$(this).addClass('active');
		var tabIndex = $J_brandTabs.index($(this));
		if($J_brandItems.eq(tabIndex).css('display') == 'block'){
			return;
		}
		$J_brandItems.hide();
		$J_brandItems.eq(tabIndex).fadeIn(200);
	};
	
	function scrollHandler() {
		var scrollTop = $(document).scrollTop(),
			windowWidth =  $(window).width(),
			mainWidth = $J_wonderful.width();
		$J_fixedPanel.css({left: (windowWidth - mainWidth)/2 - 40});
		if(scrollTop < shopModuleOffsetTop || scrollTop > sportOffsetTopReal || (windowWidth < 1280)){
			$J_fixedPanel.hide();
		}else{
			$J_fixedPanel.show();
		};
	};
	
	function floorHandler() {
		var targetId = $(this).attr("data-anchor"),
			target = $("#" + targetId);
			targetOffsetTop = $("#" + targetId).offset().top,
			targetHeight = target.height(),
			addHeight = windouHeight - targetHeight<0? 0: (windouHeight - targetHeight)/2;
		$("body,html").stop().animate({scrollTop: targetOffsetTop-addHeight}, 300);
	};
	
});
}());