/*

Quicksand 1.4

Reorder and filter items with a nice shuffling animation.

Copyright (c) 2010 Jacek Galanciak (razorjack.net) and agilope.com
Big thanks for Piotr Petrus (riddle.pl) for deep code review and wonderful docs & demos.

Dual licensed under the MIT and GPL version 2 licenses.
http://github.com/jquery/jquery/blob/master/MIT-LICENSE.txt
http://github.com/jquery/jquery/blob/master/GPL-LICENSE.txt

Project site: http://razorjack.net/quicksand
Github site: http://github.com/razorjack/quicksand

 */
!function(t){function e(t){var e=t.data("_ARS_data");return e||(e={rotateUnits:"deg",scale:1,rotate:0},t.data("_ARS_data",e)),e}function a(t,e){t.css("transform","rotate("+e.rotate+e.rotateUnits+") scale("+e.scale+","+e.scale+")")}t.fn.rotate=function(r){var n,o=t(this),s=e(o);return"undefined"==typeof r?s.rotate+s.rotateUnits:(n=r.toString().match(/^(-?\d+(\.\d+)?)(.+)?$/),n&&(n[3]&&(s.rotateUnits=n[3]),s.rotate=n[1],a(o,s)),this)},t.fn.scale=function(r){var n=t(this),o=e(n);return"undefined"==typeof r?o.scale:(o.scale=r,a(n,o),this)};var r=t.fx.prototype.cur;t.fx.prototype.cur=function(){return"rotate"==this.prop?parseFloat(t(this.elem).rotate()):"scale"==this.prop?parseFloat(t(this.elem).scale()):r.apply(this,arguments)},t.fx.step.rotate=function(a){var r=e(t(a.elem));t(a.elem).rotate(a.now+r.rotateUnits)},t.fx.step.scale=function(e){t(e.elem).scale(e.now)};var n=t.fn.animate;t.fn.animate=function(a){if("undefined"!=typeof a.rotate){var r,o,s=a.rotate.toString().match(/^(([+-]=)?(-?\d+(\.\d+)?))(.+)?$/);s&&s[5]&&(r=t(this),o=e(r),o.rotateUnits=s[5]),a.rotate=s[1]}return n.apply(this,arguments)}}(jQuery);
!function(t){var e=function(t){var e=t.clone(),i=t.find("canvas");if(i.length){var s=e.find("canvas");s.each(function(t){var e=this.getContext("2d");e.drawImage(i.get(t),0,0)})}return e};t.fn.quicksand=function(i,s){var a={duration:750,easing:"swing",attribute:"data-id",adjustHeight:"auto",adjustWidth:"auto",useScaling:!1,enhancement:function(){},selector:"> *",atomic:!1,dx:0,dy:0,maxWidth:0,retainExisting:!0},o=function(){for(var t="transform WebkitTransform MozTransform OTransform msTransform".split(" "),e=document.createElement("div"),i=0;i<t.length;i++)if("undefined"!=typeof e.style[t[i]])return!0;return!1}();t.extend(a,s),o&&"undefined"!=typeof t.fn.scale||(a.useScaling=!1);var n;return n="function"==typeof arguments[1]?arguments[1]:arguments[2],this.each(function(s){var o,r,f=[];r="function"==typeof a.attribute?t(i):e(t(i).filter("["+a.attribute+"]"));var l,h,c=t(this),p=t(this).css("height"),d=t(this).css("width"),u=!1,m=!1,y=t(c).offset(),g=[],v=t(this).find(a.selector),b=t(v).innerWidth();if(navigator.userAgent.match(/msie [6]/i))return void c.html("").append(r);var x=0,w=function(){if(t(this).css("margin","").css("position","").css("top","").css("left","").css("opacity",""),!x){if(x=1,!a.atomic){var e=c.find(a.selector);if(a.retainExisting){var i=t([]);S.find(a.selector).each(function(s){var o=t([]);if("function"==typeof a.attribute){var n=a.attribute(t(this));e.each(function(){return a.attribute(this)==n?(o=t(this),!1):void 0})}else o=e.filter("["+a.attribute+'="'+t(this).attr(a.attribute)+'"]');o.length>0&&(i=i.add(o),0===s?c.prepend(o):o.insertAfter(c.find(a.selector).get(s-1)))}),e.not(i).remove()}else c.prepend(S.find(a.selector)),e.remove();u&&c.css("height",l),m&&c.css("width",d)}a.enhancement(c),"function"==typeof n&&n.call(this)}!1===a.adjustHeight&&c.css("height","auto"),!1===a.adjustWidth&&c.css("width","auto")},W=c.offsetParent(),F=W.offset();"relative"==W.css("position")?"body"!=W.get(0).nodeName.toLowerCase()&&(F.top+=parseFloat(W.css("border-top-width"))||0,F.left+=parseFloat(W.css("border-left-width"))||0):(F.top-=parseFloat(W.css("border-top-width"))||0,F.left-=parseFloat(W.css("border-left-width"))||0,F.top-=parseFloat(W.css("margin-top"))||0,F.left-=parseFloat(W.css("margin-left"))||0),isNaN(F.left)&&(F.left=0),isNaN(F.top)&&(F.top=0),F.left-=a.dx,F.top-=a.dy,c.css("height",t(this).height()),c.css("width",t(this).width()),v.each(function(e){g[e]=t(this).offset()}),t(this).stop();var j=0,T=0;v.each(function(e){t(this).stop();var i=t(this).get(0);"absolute"==i.style.position?(j=-a.dx,T=-a.dy):(j=a.dx,T=a.dy),i.style.position="absolute",i.style.margin="0",a.adjustWidth||(i.style.width=b+"px"),i.style.top=g[e].top-parseFloat(i.style.marginTop)-F.top+T+"px",i.style.left=g[e].left-parseFloat(i.style.marginLeft)-F.left+j+"px",a.maxWidth>0&&g[e].left>a.maxWidth&&(i.style.display="none")});var S=e(t(c)),H=S.get(0);if(H.innerHTML="",H.setAttribute("id",""),H.style.height="auto",H.style.width=c.width()+"px",S.append(r),S.insertBefore(c),S.css("opacity",0),H.style.zIndex=-1,H.style.margin="0",H.style.position="absolute",H.style.top=y.top-F.top+"px",H.style.left=y.left-F.left+"px","dynamic"===a.adjustHeight?c.animate({height:S.height()},a.duration,a.easing):"auto"===a.adjustHeight&&(l=S.height(),parseFloat(p)<parseFloat(l)?c.css("height",l):u=!0),"dynamic"===a.adjustWidth?c.animate({width:S.width()},a.duration,a.easing):"auto"===a.adjustWidth&&(h=S.width(),parseFloat(d)<parseFloat(h)?c.css("width",h):m=!0),v.each(function(){var e=[];"function"==typeof a.attribute?(o=a.attribute(t(this)),r.each(function(){return a.attribute(this)==o?(e=t(this),!1):void 0})):e=r.filter("["+a.attribute+'="'+t(this).attr(a.attribute)+'"]'),f.push(e.length?a.useScaling?{element:t(this),dest:e,style:{top:t(this).offset().top,left:t(this).offset().left,opacity:""},animation:{top:e.offset().top-F.top,left:e.offset().left-F.left,opacity:1,scale:"1.0"}}:{element:t(this),dest:e,style:{top:t(this).offset().top,left:t(this).offset().left,opacity:""},animation:{top:e.offset().top-F.top,left:e.offset().left-F.left,opacity:1}}:a.useScaling?{element:t(this),animation:{opacity:"0.0",style:{top:t(this).offset().top,left:t(this).offset().left,opacity:""},scale:"0.0"}}:{element:t(this),style:{top:t(this).offset().top,left:t(this).offset().left,opacity:""},animation:{opacity:"0.0"}})}),r.each(function(){var i=[],s=[];"function"==typeof a.attribute?(o=a.attribute(t(this)),v.each(function(){return a.attribute(this)==o?(i=t(this),!1):void 0}),r.each(function(){return a.attribute(this)==o?(s=t(this),!1):void 0})):(i=v.filter("["+a.attribute+'="'+t(this).attr(a.attribute)+'"]'),s=r.filter("["+a.attribute+'="'+t(this).attr(a.attribute)+'"]'));var n;if(0===i.length&&s.length>0){n=a.useScaling?{opacity:"1.0",scale:"1.0"}:{opacity:"1.0"};var l=e(s),h=l.get(0);h.style.position="absolute",h.style.margin="0",a.adjustWidth||(h.style.width=b+"px"),h.style.top=s.offset().top-F.top+"px",h.style.left=s.offset().left-F.left+"px",l.css("opacity",0),a.useScaling&&l.scale(0),l.appendTo(c),(0===a.maxWidth||s.offset().left<a.maxWidth)&&f.push({element:t(l),dest:s,animation:n})}}),S.remove(),a.atomic){for($toDelete=c.find(a.selector),c.prepend(S.find(a.selector)),s=0;s<f.length;s++)if(f[s].dest&&f[s].style){var N=f[s].dest,A=N.offset();N.css({position:"relative",top:f[s].style.top-A.top,left:f[s].style.left-A.left}),N.animate({top:"0",left:"0"},a.duration,a.easing,w)}else f[s].element.animate(f[s].animation,a.duration,a.easing,w);$toDelete.remove()}else for(a.enhancement(c),s=0;s<f.length;s++)f[s].element.animate(f[s].animation,a.duration,a.easing,w)})}}(jQuery);

/**
 * Monkey patch jQuery 1.3.1+ to add support for setting or animating CSS
 * scale and rotation independently.
 * https://github.com/zachstronaut/jquery-animate-css-rotate-scale
 * Released under dual MIT/GPL license just like jQuery.
 * 2009-2012 Zachary Johnson www.zachstronaut.com
 */
!function(r){function n(r){for(var n,f=["transform","WebkitTransform","msTransform","MozTransform","OTransform"];n=f.shift();)if("undefined"!=typeof r.style[n])return n;return"transform"}var f=null,e=r.fn.css;r.fn.css=function(t,s){if(null===f&&(f="undefined"!=typeof r.cssProps?r.cssProps:"undefined"!=typeof r.props?r.props:{}),"undefined"==typeof f.transform&&("transform"==t||"object"==typeof t&&"undefined"!=typeof t.transform)&&(f.transform=n(this.get(0))),"transform"!=f.transform)if("transform"==t){if(t=f.transform,"undefined"==typeof s&&jQuery.style)return jQuery.style(this.get(0),t)}else"object"==typeof t&&"undefined"!=typeof t.transform&&(t[f.transform]=t.transform,delete t.transform);return e.apply(this,arguments)}}(jQuery);

/*
Easy pie chart is a jquery plugin to display simple animated pie charts for only one value

Dual licensed under the MIT (http://www.opensource.org/licenses/mit-license.php)
and GPL (http://www.opensource.org/licenses/gpl-license.php) licenses.

Built on top of the jQuery library (http://jquery.com)

@source: http://github.com/rendro/easy-pie-chart/
@autor: Robert Fleischmann
@version: 1.2.5

Inspired by: http://dribbble.com/shots/631074-Simple-Pie-Charts-II?list=popular&offset=210
Thanks to Philip Thrasher for the jquery plugin boilerplate for coffee script
*/

/**!
 * easyPieChart
 * Lightweight plugin to render simple, animated and retina optimized pie charts
 *
 * @license Dual licensed under the MIT (http://www.opensource.org/licenses/mit-license.php) and GPL (http://www.opensource.org/licenses/gpl-license.php) licenses.
 * @author Robert Fleischmann <rendro87@gmail.com> (http://robert-fleischmann.de)
 * @version 2.1.1
 **/

(function(root, factory) {
    if(typeof exports === 'object') {
        module.exports = factory(require('jquery'));
    }
    else if(typeof define === 'function' && define.amd) {
        define('EasyPieChart', ['jquery'], factory);
    }
    else {
        factory(root.jQuery);
    }
}(this, function($) {
/**
 * Renderer to render the chart on a canvas object
 * @param {DOMElement} el      DOM element to host the canvas (root of the plugin)
 * @param {object}     options options object of the plugin
 */
var CanvasRenderer = function(el, options) {
	var cachedBackground;
	var canvas = document.createElement('canvas');

	if (typeof(G_vmlCanvasManager) !== 'undefined') {
		G_vmlCanvasManager.initElement(canvas);
	}

	var ctx = canvas.getContext('2d');

	canvas.width = canvas.height = options.size;

	el.appendChild(canvas);

	// canvas on retina devices
	var scaleBy = 1;
	if (window.devicePixelRatio > 1) {
		scaleBy = window.devicePixelRatio;
		canvas.style.width = canvas.style.height = [options.size, 'px'].join('');
		canvas.width = canvas.height = options.size * scaleBy;
		ctx.scale(scaleBy, scaleBy);
	}

	// move 0,0 coordinates to the center
	ctx.translate(options.size / 2, options.size / 2);

	// rotate canvas -90deg
	ctx.rotate((-1 / 2 + options.rotate / 180) * Math.PI);

	var radius = (options.size - options.lineWidth) / 2;
	if (options.scaleColor && options.scaleLength) {
		radius -= options.scaleLength + 2; // 2 is the distance between scale and bar
	}

	// IE polyfill for Date
	Date.now = Date.now || function() {
		return +(new Date());
	};

	/**
	 * Draw a circle around the center of the canvas
	 * @param  {strong} color     Valid CSS color string
	 * @param  {number} lineWidth Width of the line in px
	 * @param  {number} percent   Percentage to draw (float between 0 and 1)
	 */
	var drawCircle = function(color, lineWidth, percent) {
		percent = Math.min(Math.max(0, percent || 1), 1);

		ctx.beginPath();
		ctx.arc(0, 0, radius, 0, Math.PI * 2 * percent, false);

		ctx.strokeStyle = color;
		ctx.lineWidth = lineWidth;

		ctx.stroke();
	};

	/**
	 * Draw the scale of the chart
	 */
	var drawScale = function() {
		var offset;
		var length;
		var i = 24;

		ctx.lineWidth = 1
		ctx.fillStyle = options.scaleColor;

		ctx.save();
		for (var i = 24; i > 0; --i) {
			if (i%6 === 0) {
				length = options.scaleLength;
				offset = 0;
			} else {
				length = options.scaleLength * .6;
				offset = options.scaleLength - length;
			}
			ctx.fillRect(-options.size/2 + offset, 0, length, 1);
			ctx.rotate(Math.PI / 12);
		}
		ctx.restore();
	};

	/**
	 * Request animation frame wrapper with polyfill
	 * @return {function} Request animation frame method or timeout fallback
	 */
	var reqAnimationFrame = (function() {
		return  window.requestAnimationFrame ||
				window.webkitRequestAnimationFrame ||
				window.mozRequestAnimationFrame ||
				function(callback) {
					window.setTimeout(callback, 1000 / 60);
				};
	}());

	/**
	 * Draw the background of the plugin including the scale and the track
	 */
	var drawBackground = function() {
		options.scaleColor && drawScale();
		options.trackColor && drawCircle(options.trackColor, options.lineWidth);
	};

	/**
	 * Clear the complete canvas
	 */
	this.clear = function() {
		ctx.clearRect(options.size / -2, options.size / -2, options.size, options.size);
	};

	/**
	 * Draw the complete chart
	 * @param  {number} percent Percent shown by the chart between 0 and 100
	 */
	this.draw = function(percent) {
		// do we need to render a background
		if (!!options.scaleColor || !!options.trackColor) {
			// getImageData and putImageData are supported
			if (ctx.getImageData && ctx.putImageData) {
				if (!cachedBackground) {
					drawBackground();
					cachedBackground = ctx.getImageData(0, 0, options.size * scaleBy, options.size * scaleBy);
				} else {
					ctx.putImageData(cachedBackground, 0, 0);
				}
			} else {
				this.clear();
				drawBackground();
			}
		} else {
			this.clear();
		}

		ctx.lineCap = options.lineCap;

		// if barcolor is a function execute it and pass the percent as a value
		var color;
		if (typeof(options.barColor) === 'function') {
			color = options.barColor(percent);
		} else {
			color = options.barColor;
		}

		// draw bar
		if (percent > 0) {
			drawCircle(color, options.lineWidth, percent / 100);
		}
	}.bind(this);

	/**
	 * Animate from some percent to some other percentage
	 * @param  {number} from Starting percentage
	 * @param  {number} to   Final percentage
	 */
	this.animate = function(from, to) {
		var startTime = Date.now();
		options.onStart(from, to);
		var animation = function() {
			var process = Math.min(Date.now() - startTime, options.animate);
			var currentValue = options.easing(this, process, from, to - from, options.animate);
			this.draw(currentValue);
			options.onStep(from, to, currentValue);
			if (process >= options.animate) {
				options.onStop(from, to);
			} else {
				reqAnimationFrame(animation);
			}
		}.bind(this);

		reqAnimationFrame(animation);
	}.bind(this);
};

var EasyPieChart = function(el, opts) {
	var defaultOptions = {
		barColor: '#ff675f',
		trackColor: '#e1e1e3',
		scaleColor: '#e1e1e3',
		scaleLength: 0,
		lineCap: 'round',
		lineWidth: 15,
		size: 152,
		rotate: 0,
		animate: 1000,
		easing: function (x, t, b, c, d) { // more can be found here: http://gsgd.co.uk/sandbox/jquery/easing/
			t = t / (d/2);
			if (t < 1) {
				return c / 2 * t * t + b;
			}
			return -c/2 * ((--t)*(t-2) - 1) + b;
		},
		onStart: function(from, to) {
			return;
		},
		onStep: function(from, to, currentValue) {
			return;
		},
		onStop: function(from, to) {
			return;
		}
	};

	// detect present renderer
	if (typeof(CanvasRenderer) !== 'undefined') {
		defaultOptions.renderer = CanvasRenderer;
	} else if (typeof(SVGRenderer) !== 'undefined') {
		defaultOptions.renderer = SVGRenderer;
	} else {
		throw new Error('Please load either the SVG- or the CanvasRenderer');
	}

	var options = {};
	var currentValue = 0;

	/**
	 * Initialize the plugin by creating the options object and initialize rendering
	 */
	var init = function() {
		this.el = el;
		this.options = options;

		// merge user options into default options
		for (var i in defaultOptions) {
			if (defaultOptions.hasOwnProperty(i)) {
				options[i] = opts && typeof(opts[i]) !== 'undefined' ? opts[i] : defaultOptions[i];
				if (typeof(options[i]) === 'function') {
					options[i] = options[i].bind(this);
				}
			}
		}

		// check for jQuery easing
		if (typeof(options.easing) === 'string' && typeof(jQuery) !== 'undefined' && jQuery.isFunction(jQuery.easing[options.easing])) {
			options.easing = jQuery.easing[options.easing];
		} else {
			options.easing = defaultOptions.easing;
		}

		// create renderer
		this.renderer = new options.renderer(el, options);

		// initial draw
		this.renderer.draw(currentValue);

		// initial update
		if (el.dataset && el.dataset.percent) {
			this.update(parseFloat(el.dataset.percent));
		} else if (el.getAttribute && el.getAttribute('data-percent')) {
			this.update(parseFloat(el.getAttribute('data-percent')));
		}
	}.bind(this);

	/**
	 * Update the value of the chart
	 * @param  {number} newValue Number between 0 and 100
	 * @return {object}          Instance of the plugin for method chaining
	 */
	this.update = function(newValue) {
		newValue = parseFloat(newValue);
		if (options.animate) {
			this.renderer.animate(currentValue, newValue);
		} else {
			this.renderer.draw(newValue);
		}
		currentValue = newValue;
		return this;
	}.bind(this);

	init();
};

$.fn.easyPieChart = function(options) {
	return this.each(function() {
		if (!$.data(this, 'easyPieChart')) {
			$.data(this, 'easyPieChart', new EasyPieChart(this, options));
		}
	});
};

}));

