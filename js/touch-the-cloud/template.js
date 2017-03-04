$('<div id="fetcher"></div>').prependTo('body');

$('.template-here').each(function () {
	var $this = $(this);
	var $id = $this.attr('id');
	var $template_file = 'templates/touch-the-cloud/template-' + $id + '.html';
	
	$('<div></div>').appendTo('#fetcher').load($template_file, function (response, status, xhr) {
		if (!$this.hasClass('template-delegate')) {

			var $value = $this.attr('data-value');
			$value = window[$value];
			var template = Handlebars.compile($( '#' + $id + '-template' ).html());
			
			$this.html(template($value));
		}
	});

});


Handlebars.registerHelper('ifSecond', function (index, options) {
   if(index == 2){
      return options.fn(this);
   } else {
      return options.inverse(this);
   }
});