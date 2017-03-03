var observer = new MutationObserver(function (mutations) {
	// For the sake of...observation...let's output the mutation to console to see how this all works
	mutations.forEach(function (mutation) {

		$('.count:not(.done)').each(function () {
			var $this = $(this);
			$this.addClass('done');
			$this.prop('Counter', 0).animate({
				Counter: $this.text()
			}, {
				duration: 2000,
				easing: 'swing',
				step: function (now) {
					$this.text(Math.ceil(now));
				}
			});
		});

		$('.metric-gauge:not(.done)').each(function () {
			var $this = $(this);
			$this.addClass('done');
			var $value = $this.data('value');
			var $series = [];

			$.each($this.data('value'), function (key, v) {
				if (v !== '') {
					var value = parseInt(v);

					var quantifier = v.replace(value, '');

					if (key == 1) {
						$series.unshift({
							data: [{
								'y': value,
								'color': '#F6911F'
							}],
							dataLabels: '',
						});
					} else {
						$series.push({
							data: [{
								'y': value,
								'color': '#fff'
							}],
							dataLabels: '',
						});
					}
				}
			});

			if (!is_percent($value[1])) {
				gaugeOptions.yAxis.max = parseInt($value[1]);
			}
			$this.highcharts(Highcharts.merge(gaugeOptions, {
				series: $series
			}));
		});

		$('.metric-pie:not(.done)').each(function () {
			var $this = $(this);
			var $value = $this.data('value');
			var $title = $this.data('title');
			
			$this.addClass('done');
			$this.highcharts({
				chart: {
					backgroundColor: "transparent",
					plotBackgroundColor: null,
					plotBorderWidth: null,
					plotShadow: false,
					type: 'pie',
				},
				colors: ['#fff', '#F6911F'],
				title: null,
				tooltip: false,
				plotOptions: {
					pie: {
						center: ['30%', '30%'],
						allowPointSelect: true,
						cursor: 'pointer',
						dataLabels: {
							enabled: true,
							style: {
								color: '#fff'
							},
        align: 'center',
							inside: true,
							distance: -1,
							crop: false,
							overflow: 'none'
						}
					}
				},
				series: [{
					colorByPoint: true,
					data: [
						{
							name: $title[0] + '<br>' + $value[0],
							y: parseInt($value[0]),
							style: {
								fill: '#fff'
							},
							dataLabels: {
								color: '#fff',
								inside: true,
							}
						},
						{
							name: $title[1],
							y: parseInt($value[1]) - parseInt($value[0]),
							dataLabels: {
								style: {
									color: '#fff'
								},
							distance: -2,
							}
						}
					]
				}],
				credits: {
					enabled: false
				},
				exporting: {
					enabled: false
				},
			});
		});

		$('td.score .score-left:not(.done)').each(function () {
			var $this = $(this);
			$this.addClass('done');

			var $width = parseInt($this.width());
			$this.width(0);
			$this.animate({
				width: $width + 'px',
			}, 1500, "linear");
		});

		$('td.score .score-right:not(.done)').each(function () {
			var $this = $(this);
			$this.addClass('done');

			var $width = parseInt($this.width());
			$this.width(0);
			$this.animate({
				width: $width + 'px',
			}, 1500, "linear");
		});
	});
});

function shuffle(sourceArray) {
	for (var i = 0; i < sourceArray.length - 1; i++) {
		var j = i + Math.floor(Math.random() * (sourceArray.length - i));

		var temp = sourceArray[j];
		sourceArray[j] = sourceArray[i];
		sourceArray[i] = temp;
	}
	return sourceArray;
}

// Notify me of everything!
var observerConfig = {
	attributes: true,
	childList: true,
	characterData: true
};

// Node, config
// In this case we'll listen to all changes to body and child nodes
var targetNode = document.body;
observer.observe(targetNode, observerConfig);



var gaugeOptions = {

	chart: {
		type: 'solidgauge',
		backgroundColor: "transparent"
	},

	title: null,

	pane: {
		center: ['40%', '75%'],
		size: '140%',
		startAngle: -90,
		endAngle: 90,
		background: {
			backgroundColor: 'transparent',
			innerRadius: '60%',
			outerRadius: '100%',
			shape: 'arc'
		}
	},
	tooltip: {
		enabled: false
	},
	credits: {
		enabled: false
	},
	exporting: {
		enabled: false
	},

	// the value axis
	yAxis: {
		lineWidth: 0,
		minorTickInterval: null,
		tickPixelInterval: 400,
		tickWidth: 0,
		min: 0,
		max: 100,
		title: {
			text: ''
		}
	},

	plotOptions: {
		solidgauge: {
			dataLabels: {
				y: 5,
				borderWidth: 0,
				useHTML: true
			}
		}
	},

	dataLabels: {
		inside: true,
	}
};


// Helper Function
function fetch_script(script_url) {
	$('<script src="' + script_url + '"><\/script>').appendTo('#fetcher');
}

function is_percent(string) {
	if (string.indexOf('%') >= 0) {
		return true;
	} else {
		return false;
	}
}