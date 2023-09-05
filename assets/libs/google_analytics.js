var _gaq = _gaq || [];
_gaq.push(['_setAccount', 'UA-105430141-1']);
_gaq.push(['_trackPageview']);
(function() {
var ga = document.createElement('script'); ga.type = 'text/javascript'; ga.async = true;
ga.src = ('https:' == document.location.protocol ? 'https://ssl' : 'http://www') + '.google-analytics.com/ga.js';
var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(ga, s);
})();

$(".clickGa").click(function(event){
	var category = $(this).attr('category');
	var action = $(this).attr('action');
	var label = $(this).attr('label');
	var goalname = $(this).attr('goalname');
	var useraction = $(this).attr('useraction');
	// GA ['_trackEvent' , Event Category , Event Action , Event Label]
	event.preventDefault();
	_gaq.push(['_trackEvent', category, action, label]);
	if(goalname){
		_gaq.push(['_trackEvent', goalname, goalname, useraction]);
	}

	if($(this).attr('href')){
		var url = $(this).attr('href');
		if($(this).attr('target')){
			setTimeout(function(){ 
				window.open(url, '_blank');
			}, 1000);
		}else {
			setTimeout(function(){ 
				window.location = url;
			}, 1000);
		}
	}
})