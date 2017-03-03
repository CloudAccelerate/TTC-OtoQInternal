$('.accordion').on('show', function (e) {
	$(e.target).prev('.collapse-title').addClass('active');
});

$('.accordion').on('hide', function (e) {
	$(this).find('.collapse-title').not($(e.target)).removeClass('active');
});

if ($('.popup').length) {
	$('.popup').magnificPopup({
		type: 'inline',
		midClick: true,
		mainClass: 'mfp-fade',
		alignTop: true,
		fixedContentPos: true,
	});
}


$('.scrollto').click(function (e) {
	e.preventDefault();
	e.stopPropagation();

	$('html, body').animate({
		scrollTop: $($(this).attr('href')).offset().top - 30
	}, 1000);
});

(function ($) {
	$(function () {
		$(document).on("click", "#nav-hero-hamburger-container", function () {
			$('#topmenu').collapse('toggle');
		});

		$(document).on("click", ".listings-prev", function (e) {
			listings_nav($(this), 'prev_page');

			var $container = $(this).closest('.listings-nav');
			var $li_active = $container.find('.listings-dot.active');

			if ($li_active.prev('.listings-dot').length) {
				$container.find('.listings-dot.active').removeClass('active');
				$li_active.prev('.listings-dot').addClass('active');
			}

		});

		$(document).on("click", ".listings-next", function (e) {
			listings_nav($(this), 'next_page');

			var $container = $(this).closest('.listings-nav');
			var $li_active = $container.find('.listings-dot.active');

			if ($li_active.next('.listings-dot').length) {
				$container.find('.listings-dot.active').removeClass('active');
				$li_active.next('.listings-dot').addClass('active');
			}

		});

		$(document).on("click", ".listings-dot-1", function (e) {
			var $container = $(this).closest('.listings-nav');
			var $li_active = $container.find('.listings-dot.active');
			
			listings_nav($(this), 'page_1');
			$li_active.removeClass('active');
			$(this).addClass('active');
		});

		$(document).on("click", ".listings-dot-2", function (e) {
			var $container = $(this).closest('.listings-nav');
			var $li_active = $container.find('.listings-dot.active');
			listings_nav($(this), 'page_2');
			$li_active.removeClass('active');
			$(this).addClass('active');
		});

		$(document).on("click", ".listings-dot-3", function (e) {
			var $container = $(this).closest('.listings-nav');
			var $li_active = $container.find('.listings-dot.active');
			listings_nav($(this), 'page_3');
			$li_active.removeClass('active');
			$(this).addClass('active');
		});

		$(document).on("click", ".listings-dot-4", function (e) {
			var $container = $(this).closest('.listings-nav');
			var $li_active = $container.find('.listings-dot.active');
			listings_nav($(this), 'page_4');
			$li_active.removeClass('active');
			$(this).addClass('active');
		});

		$(document).on("click", ".listings-dot-5", function (e) {
			var $container = $(this).closest('.listings-nav');
			var $li_active = $container.find('.listings-dot.active');
			listings_nav($(this), 'page_5');
			$li_active.removeClass('active');
			$(this).addClass('active');
		});
	});
})(jQuery);


function listings_nav($this, $action) {

	var $list = $this.closest('.listings-container').find('ul.listings');
	var $list_height = $list.outerHeight() - 20;

	var $height_bum = $list_height / 3;
	var $height_bum_1 = $height_bum;
	var $height_bum_2 = $height_bum * 2;
	var $height_bum_3 = $height_bum * 3;
	var $current_top = $list.scrollTop();

	var $destination_top = $list.find('li:nth-child(3)').position().top;

	var $bum_1 = false;
	var $bum_2 = false;
	var $bum_3 = false;
	var $bum_4 = false;
	
	if($list.find('li:nth-child(3)').length > 0){
		$bum_1 = $current_top + $list.find('li:nth-child(3)').position().top;
	}
	
	if($list.find('li:nth-child(5)').length > 0){
		$bum_2 = $current_top + $list.find('li:nth-child(5)').position().top;
	}
	
	
	if($list.find('li:nth-child(7)').length > 0){
		$bum_3 = $current_top + $list.find('li:nth-child(7)').position().top;
	}
	
	
	if($list.find('li:nth-child(9)').length > 0){
		$bum_4 = $current_top + $list.find('li:nth-child(9)').position().top;
	}

	if ($action === 'next_page') {
		if ($bum_1 && $current_top < $bum_1) {
			$destination_top = $bum_1;
		} else if ($bum_2 && $current_top < $bum_2) {
			$destination_top = $bum_2;
		} else if ($bum_3 && $current_top < $bum_3) {
			$destination_top = $bum_3;
		} else if ($bum_4 && $current_top < $bum_4) {
			$destination_top = $bum_4;
		} else {
			return false;
		}
	}
	if ($action === 'prev_page') {
		if ($bum_4 && $current_top > $bum_4) {
			$destination_top = $bum_4;
		} else
		if ($bum_3 && $current_top > $bum_3) {
			$destination_top = $bum_3;
		} else
		if ($bum_2 && $current_top > $bum_2) {
			$destination_top = $bum_2;
		} else
		if ($bum_1 && $current_top > $bum_1) {
			$destination_top = $bum_1;
		} else {
			$destination_top = 0;
		}
	}

	if ($action === 'page_1') {
		$destination_top = 0;
	}

	if ($action === 'page_2') {
		$destination_top = $bum_1;
	}

	if ($action === 'page_3') {
		$destination_top = $bum_2;
	}

	if ($action === 'page_4') {
		$destination_top = $bum_3;
	}

	if ($action === 'page_5') {
		$destination_top = $bum_4;
	}
	$list.animate({
		scrollTop: $destination_top
	}, 'slow');

}


function word_count(v) {
	var wom = v.match(/\S+/g);
	return wom ? wom.length : 0;
	/*
    return {
        charactersNoSpaces : val.replace(/\s+/g, '').length,
        characters         : val.length,
        words              : wom ? wom.length : 0,
        lines              : val.split(/\r*\n/).length
    };
	*/
}

function css_safe(v) {
	return v.replace(/[^a-z0-9]/g, function (s) {
		var c = s.charCodeAt(0);
		if (c == 32) return '-';
		if (c >= 65 && c <= 90) return s.toLowerCase();
		return '__' + ('000' + c.toString(16)).slice(-4);
	});
}

function is_scrolled_into_view(elem) {
	var $elem = $(elem);
	var $window = $(window);

	var docViewTop = $window.scrollTop();
	var docViewBottom = docViewTop + $window.height();

	var elemTop = $elem.offset().top;
	var elemBottom = elemTop + $elem.height();

	//return ((elemBottom <= docViewBottom) && (elemTop >= docViewTop));
	return ((elemTop <= docViewBottom));
}

var substringMatcher = function (strs) {
	return function findMatches(q, cb) {
		var matches, substringRegex;

		// an array that will be populated with substring matches
		matches = [];

		// regex used to determine if a string contains the substring `q`
		substrRegex = new RegExp(q, 'i');

		// iterate through the pool of strings and for any string that
		// contains the substring `q`, add it to the `matches` array
		$.each(strs, function (i, str) {
			if (substrRegex.test(str)) {
				matches.push(str);
			}
		});

		cb(matches);
	};
};


function formatDate(date, format) {
	if (!date) return;
	if (!format) format = "yyyy-MM-dd";
	switch (typeof date) {
		case "string":
			date = new Date(date.replace(/-/, "/"));
			break;
		case "number":
			date = new Date(date);
			break;
	}
	if (!date instanceof Date) return;
	var dict = {
		"yyyy": date.getFullYear(),
		"M": date.getMonth() + 1,
		"d": date.getDate(),
		"H": date.getHours(),
		"m": date.getMinutes(),
		"s": date.getSeconds(),
		"MM": ("" + (date.getMonth() + 101)).substr(1),
		"dd": ("" + (date.getDate() + 100)).substr(1),
		"HH": ("" + (date.getHours() + 100)).substr(1),
		"mm": ("" + (date.getMinutes() + 100)).substr(1),
		"ss": ("" + (date.getSeconds() + 100)).substr(1)
	};
	return format.replace(/(yyyy|MM?|dd?|HH?|ss?|mm?)/g, function () {
		return dict[arguments[0]];
	});
}

function get_anchor(){
	var url = window.location.href;
	var hash = url.substring(url.indexOf("#")+1);
	return hash;
}