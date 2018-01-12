(function($){

	"use strict";

	var pluginName = 'slider',
		PluginClass;


	/* Enter PluginOptions */
	$[pluginName+'Default'] = {
			image: 'img',
			sliderToggler: false,
			autoSlide: {
				state: false,
				secs: 2000,
			},
	};
	

	PluginClass = function() {

		var selfObj = this;
		this.item = false;
		this.initOptions = new Object($[pluginName+'Default']);

		this.autoSlideTimeout = false;
		
		this.init = function(elem) {
			selfObj = this;
			selfObj.item = $(elem);
			selfObj.image = selfObj.item.find(selfObj.image);

			//console.log('Hallo', selfObj.start);
			//console.log('Images: ', selfObj.image.length);
			selfObj.wrap();
			selfObj.active();
			if(selfObj.sliderToggler == true) {
				selfObj.setupSlideToggler();
				selfObj.next();
			}

			if(selfObj.autoSlide.state) {
				selfObj.setupAutoSlide();
			}


		};

		this.wrap = function(image) {
			selfObj.image.wrap('<div class="slider-content"></div>');
		};

		this.active = function() {
			if(selfObj.image.length >= 1 && selfObj.image.length != 0) {
				$('.slider-content').first().addClass('active');
			}
		};

		//Generate Slide toggler
		this.setupSlideToggler = function(sliderToggler) {
			if (selfObj.sliderToggler == true) {
				$('<div class="next"></div>').prependTo('.slider');
				$('<div class="prev"></div>').appendTo('.slider');
				$('.prev').click(selfObj.prev);
				$('.next').click(selfObj.next);
			}else {
				return selfObj.sliderToggler;
			}
		};

		//Sets Next slide to false
		this.next = function() {
			//console.log(selfObj.item);
			//console.log('Halt Stop');
			clearTimeout(selfObj.autoSlideTimeout);

			var $el = $('.slider-content.active');

			$el.removeClass('active');
			if($el.next('.slider-content').length == 0){
				$el.siblings('.slider-content').first().addClass('active');
			}else {
				$el.next('.slider-content').addClass('active');
			}

			if(selfObj.autoSlide.state) {
				selfObj.autoSlideTimeout = setTimeout(selfObj.setupAutoSlide, selfObj.autoSlide.secs);
			};
		};

		//Sets Previous slide to false
		this.prev = function() {

			clearTimeout(selfObj.autoSlideTimeout);

			var $el = $('.slider-content.active');

			$el.removeClass('active');
			if($el.prev('.slider-content').length == 0){
				$el.siblings('.slider-content').last().addClass('active');
			}else {
				$el.prev('.slider-content').addClass('active');
			}
			if(selfObj.autoSlide.state) {
				selfObj.autoSlideTimeout = setTimeout(selfObj.setupAutoSlide, selfObj.autoSlide.secs);
			};
		};

		//Autoslide
		this.setupAutoSlide = function() {
			selfObj.next();
			selfObj.autoSlideTimeout = setTimeout(selfObj.setupAutoSlide, selfObj.autoSlide.secs);
		};

	};

	$[pluginName] = $.fn[pluginName] = function(settings) {
		var element = typeof this === 'function'?$('html'):this,
			newData = arguments[1]||{},
			returnElement = [];
				
		returnElement[0] = element.each(function(k,i) {
			var pluginClass = $.data(this, pluginName);

			if(!settings || typeof settings === 'object' || settings === 'init') {

				if(!pluginClass) {
					if(settings === 'init') {
						settings = arguments[1] || {};
					}
					pluginClass = new PluginClass();

					var newOptions = new Object(pluginClass.initOptions);

					/* Space to reset some standart options */

					/***/
					if(settings) {
						newOptions = $.extend(true,{},newOptions,settings);
					}
					pluginClass = $.extend(newOptions,pluginClass);
					/** Initialisieren. */
					this[pluginName] = pluginClass;
					pluginClass.init(this);
					if(element.prop('tagName').toLowerCase() !== 'html') {
						$.data(this, pluginName, pluginClass);
					}
				} else {
					pluginClass.init(this,1);
					if(element.prop('tagName').toLowerCase() !== 'html') {
						$.data(this, pluginName, pluginClass);
					}
				}
			} else if(!pluginClass) {
				return;
			} else if(pluginClass[settings]) {
				var method = settings;
				returnElement[1] = pluginClass[method](newData);
			} else {
				return;
			}
		});

		if(returnElement[1] !== undefined) {
			return returnElement[1];
		}
		
		return returnElement[0];
	};
})(jQuery);
