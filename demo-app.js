"format register";System.register("carousel/carousel",["angular2/angular2"],!0,function(require,e,t){function i(){var e=document.createElement("angular2-bootstrap"),t={WebkitTransition:"webkitTransitionEnd",MozTransition:"transitionend",OTransition:"oTransitionEnd otransitionend",transition:"transitionend"};for(var i in t)if(void 0!==e.style[i])return t[i];return!1}var n=System.global,s=n.define;n.define=void 0;var a=this&&this.__decorate||function(e,t,i,n){if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)return Reflect.decorate(e,t,i,n);switch(arguments.length){case 2:return e.reduceRight(function(e,t){return t&&t(e)||e},t);case 3:return e.reduceRight(function(e,n){return void(n&&n(t,i))},void 0);case 4:return e.reduceRight(function(e,n){return n&&n(t,i,e)||e},n)}},r=this&&this.__metadata||function(e,t){return"object"==typeof Reflect&&"function"==typeof Reflect.metadata?Reflect.metadata(e,t):void 0},o=this&&this.__param||function(e,t){return function(i,n){t(i,n,e)}},l=require("angular2/angular2"),c=function(){function e(e){var t=this;this.el=e.nativeElement,this.activate=function(){t.activeClass=!0},this.deactivate=function(){t.activeClass=!1},this.prepareAnimation=function(e){e?t.nextClass=!0:t.prevClass=!0},this.animate=function(e){e?t.leftClass=!0:t.rightClass=!0},this.cleanAfterAnimation=function(){t.leftClass=!1,t.rightClass=!1,t.nextClass=!1,t.prevClass=!1},this.itemClass=!0}return e.prototype.getElement=function(){return this.el},e=a([l.Directive({selector:"carousel-slide",host:{"[class.item]":"itemClass","[class.active]":"activeClass","[class.left]":"leftClass","[class.right]":"rightClass","[class.prev]":"prevClass","[class.next]":"nextClass",role:"listbox"}}),r("design:paramtypes",[l.ElementRef])],e)}();e.CarouselSlide=c;var d=function(){function e(){this.carouselCaptionClass=!0}return e=a([l.Directive({selector:"carousel-caption",host:{"[class.carousel-caption]":"carouselCaptionClass"}}),r("design:paramtypes",[])],e)}();e.CarouselCaption=d;var h=function(){function e(e){var t=this;this.indexchange=new l.EventEmitter,this.slidestart=new l.EventEmitter,this.slideend=new l.EventEmitter,this.activeIndex=-1,this.slides=[],this.wrap=!0,this._interval=5e3,this.pause="hover",this.timerId=null,this.noTransition=!1,this.transitionEnd=i(),this._isToRight=!0,this._isChangingSlide=!1,this._startCycling(),e.onChange(function(){t.registerSlides(e)})}return Object.defineProperty(e.prototype,"index",{set:function(e){var t=this;if(!this._isChangingSlide&&e!=this.activeIndex&&e>=0&&e<=this.slides.length-1){this._isChangingSlide=!0,null==this._isToRight&&(this._isToRight=e>this.activeIndex),this.slidestart.next();var i=this.slides[this.activeIndex],n=this.slides[e];!this.noTransition&&this.transitionEnd&&i?(n.prepareAnimation(this._isToRight),setTimeout(function(){i.animate(t._isToRight),n.animate(t._isToRight);var s=function(a){i.getElement().removeEventListener(t.transitionEnd,s,!1),t._finalizeTransition(i,n,e)};i.getElement().addEventListener(t.transitionEnd,s,!1)},30)):this._finalizeTransition(i,n,e)}else-1==this.activeIndex&&this._finalizeTransition(null,null,e)},enumerable:!0,configurable:!0}),e.prototype._finalizeTransition=function(e,t,i){e&&(e.deactivate(),e.cleanAfterAnimation()),t&&(t.activate(),t.cleanAfterAnimation()),this.activeIndex=parseInt(i),this._isChangingSlide=!1,this._isToRight=null,this.slideend.next(),this.indexchange.next(this.activeIndex)},Object.defineProperty(e.prototype,"interval",{set:function(e){this._interval=e,this._stopCycling(),this._startCycling()},enumerable:!0,configurable:!0}),e.prototype.registerSlides=function(e){var t=this.slides[this.activeIndex];this.slides=[];for(var i=!1,n=0;n<e.length;n++){var s=e._results[n];s.deactivate(),s.cleanAfterAnimation(),(s===t||"undefined"==typeof t&&this.activeIndex==this.slides.length)&&(s.activate(),this.activeIndex!==this.slides.length&&(this.activeIndex=this.slides.length,this.indexchange.next(this.activeIndex)),i=!0),this.slides.push(s)}i||(this.slides[0].activate(),this.activeIndex=0,this.indexchange.next(this.activeIndex)),this._isChangingSlide=!1,this._isToRight=null},e.prototype.navigateTo=function(e){this.index=e},e.prototype.prev=function(){if(this.hasPrev()){var e=this.activeIndex-1<0?this.slides.length-1:this.activeIndex-1;this._isToRight=!1,this.index=e}},e.prototype.next=function(){if(this.hasNext()){var e=(this.activeIndex+1)%this.slides.length;this._isToRight=!0,this.index=e}},e.prototype.hasPrev=function(){return this.slides.length>1&&!(!this.wrap&&0===this.activeIndex)},e.prototype.hasNext=function(){return this.slides.length>1&&!(!this.wrap&&this.activeIndex===this.slides.length-1)},e.prototype._startCycling=function(){var e=this;this._interval>=0&&(this.timerId=setInterval(function(){e.next()},this._interval>600?this._interval:600))},e.prototype._stopCycling=function(){this.timerId&&clearInterval(this.timerId),this.timerId=null},e.prototype.toggleOnHover=function(){"hover"===this.pause&&(this.timerId?this._stopCycling():this._startCycling())},e=a([l.Component({selector:"carousel",properties:["index","wrap","interval","pause","noTransition: no-transition"],host:{"(mouseenter)":"toggleOnHover()","(mouseleave)":"toggleOnHover()"},events:["indexchange","slidestart","slideend"]}),l.View({template:'<div class="carousel slide"><ol class=carousel-indicators><li *ng-for="#slide of slides; #i=index" [class.active]="i == activeIndex" (click)=navigateTo(i)></li></ol><div class=carousel-inner role=listbox><ng-content></ng-content></div><a class="left carousel-control" role=button (^click)=prev() [hidden]=!hasPrev()><span class="glyphicon glyphicon-chevron-left" aria-hidden=true></span> <span class=sr-only>Previous</span></a> <a class="right carousel-control" role=button (^click)=next() [hidden]=!hasNext()><span class="glyphicon glyphicon-chevron-right" aria-hidden=true></span> <span class=sr-only>Next</span></a></div>',directives:[l.NgFor]}),o(0,l.Query(c)),r("design:paramtypes",[l.QueryList])],e)}();return e.Carousel=h,n.define=s,t.exports}),System.register("samples/carousel/doc-carousel",["angular2/angular2"],!0,function(require,e,t){var i=System.global,n=i.define;i.define=void 0;var s=this&&this.__decorate||function(e,t,i,n){if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)return Reflect.decorate(e,t,i,n);switch(arguments.length){case 2:return e.reduceRight(function(e,t){return t&&t(e)||e},t);case 3:return e.reduceRight(function(e,n){return void(n&&n(t,i))},void 0);case 4:return e.reduceRight(function(e,n){return n&&n(t,i,e)||e},n)}},a=this&&this.__metadata||function(e,t){return"object"==typeof Reflect&&"function"==typeof Reflect.metadata?Reflect.metadata(e,t):void 0},r=require("angular2/angular2"),o=function(){function e(){}return e=s([r.Component({selector:"doc-carousel"}),r.View({template:'<p>A carousel component similar to <a href=http://getbootstrap.com/javascript/#carousel>Bootstrap javascript carousel</a></p><h4 id=properties>Properties</h4><table class="table table-bordered"><thead><tr><th>Name</th><th>Type</th><th>Default</th><th>Description</th></tr></thead><tbody><tr><td><strong>index</strong></td><td>int</td><td>0</td><td>Index (0-based) of the active slide.</td></tr><tr><td><strong>interval</strong></td><td>int</td><td>5000</td><td>The amount of time to delay between automatically cycling an item. If false or negative, carousel will not automatically cycle.</td></tr><tr><td><strong>pause</strong></td><td>string</td><td>&quot;hover&quot;</td><td>Pauses the cycling of the carousel on mouseover and resumes the cycling of the carousel on mouseout.</td></tr><tr><td><strong>wrap</strong></td><td>boolean</td><td>true</td><td>Whether the carousel should cycle continuously or have hard stops.</td></tr><tr><td><strong>no-transition</strong></td><td>boolean</td><td>false</td><td>Whether transitions are activated.</td></tr></tbody></table><h4 id=elements>Elements</h4><table class="table table-bordered"><thead><tr><th>Name</th><th>Description</th><th></th></tr></thead><tbody><tr><td><strong>carousel-slide</strong></td><td>A slide of the carousel. The content is the body of the slide, any HTML element.</td><td></td></tr><tr><td><strong>carousel-slide &gt; carousel-caption</strong></td><td>The caption of the slide, a block of HTML displayed at the bottom center.</td><td>Optionnal</td></tr></tbody></table><h4 id=events>Events</h4><table class="table table-bordered"><thead><tr><th>Name</th><th>Description</th></tr></thead><tbody><tr><td><strong>indexchange</strong></td><td>This event fires when the index changes.</td></tr><tr><td><strong>slidestart</strong></td><td>This event fires immediately when the transition starts.</td></tr><tr><td><strong>slideend</strong></td><td>This event is fired when the carousel has completed its slide transition.</td></tr></tbody></table>'}),a("design:paramtypes",[])],e)}();return e.DocCarousel=o,i.define=n,t.exports}),System.register("samples/carousel/demo-carousel",["angular2/angular2","carousel/carousel"],!0,function(require,e,t){var i=System.global,n=i.define;i.define=void 0;var s=this&&this.__decorate||function(e,t,i,n){if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)return Reflect.decorate(e,t,i,n);switch(arguments.length){case 2:return e.reduceRight(function(e,t){return t&&t(e)||e},t);case 3:return e.reduceRight(function(e,n){return void(n&&n(t,i))},void 0);case 4:return e.reduceRight(function(e,n){return n&&n(t,i,e)||e},n)}},a=this&&this.__metadata||function(e,t){return"object"==typeof Reflect&&"function"==typeof Reflect.metadata?Reflect.metadata(e,t):void 0},r=require("angular2/angular2"),o=require("carousel/carousel"),l=function(){function e(){this.slideIndex=1,this.slideWrap=!0,this.slideInterval=5e3,this.slidePause="hover",this.slideNoTransition=!1,this.extraSlides=!1}return e.prototype.onIndexFieldChange=function(e){this.slideIndex=e.target.value},e.prototype.onIndexChange=function(e){this.slideIndex=e},e.prototype.onIntervalFieldChange=function(e){this.slideInterval=e.target.value},e.prototype.onWrapCheckboxChange=function(e){this.slideWrap=e.target.checked},e.prototype.onPauseCheckboxChange=function(e){this.slidePause=e.target.checked?"hover":""},e.prototype.onAnimationCheckboxChange=function(e){this.slideNoTransition=!e.target.checked},e.prototype.onExtraCheckboxChange=function(e){this.extraSlides=e.target.checked},e.prototype.onSlideStart=function(){},e.prototype.onSlideEnd=function(){},e=s([r.Component({selector:"demo-carousel"}),r.View({template:'<carousel [interval]=slideInterval [index]=slideIndex [wrap]=slideWrap [pause]=slidePause [no-transition]=slideNoTransition (indexchange)=onIndexChange($event) (slidestart)=onSlideStart() (slideend)=onSlideEnd()><carousel-slide><img style="width: 800px; height: 400px;" src=http://placekitten.com/800/400><carousel-caption><h3>First slide label</h3><p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p></carousel-caption></carousel-slide><carousel-slide *ng-if=extraSlides><img style="width: 800px; height: 400px;" src=http://placekitten.com/800/399></carousel-slide><carousel-slide><img style="width: 800px; height: 400px;" src=http://placekitten.com/801/400></carousel-slide><carousel-slide><img style="width: 800px; height: 400px;" src=http://placekitten.com/800/401></carousel-slide><carousel-slide *ng-if=extraSlides><img style="width: 800px; height: 400px;" src=http://placekitten.com/800/402></carousel-slide></carousel><form role=form><div class=form-group><label>Index (0-based)</label> <input type=number class=form-control [value]=slideIndex (change)=onIndexFieldChange($event)></div><div class=form-group><label>Interval (negative number to stop the cycle)</label> <input type=number class=form-control [value]=slideInterval (change)=onIntervalFieldChange($event)></div><div class=form-group><div class=checkbox><label><input type=checkbox [checked]=slideWrap (change)=onWrapCheckboxChange($event)> Wrap active</label></div></div><div class=form-group><div class=checkbox><label><input type=checkbox [checked]=slidePause (change)=onPauseCheckboxChange($event)> Pause on hover</label></div></div><div class=form-group><div class=checkbox><label><input type=checkbox [checked]=!slideNoTransition (change)=onAnimationCheckboxChange($event)> With animations</label></div></div><div class=form-group><div class=checkbox><label><input type=checkbox [checked]=extraSlides (change)=onExtraCheckboxChange($event)> Add/Remove extra slides (2nd and last positions)</label></div></div></form>',directives:[r.NgIf,o.Carousel,o.CarouselSlide,o.CarouselCaption]}),a("design:paramtypes",[])],e)}();return e.DemoCarousel=l,i.define=n,t.exports}),System.register("demo-app",["angular2/angular2","samples/carousel/demo-carousel","samples/carousel/doc-carousel"],!0,function(require,e,t){var i=System.global,n=i.define;i.define=void 0;var s=this&&this.__decorate||function(e,t,i,n){if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)return Reflect.decorate(e,t,i,n);switch(arguments.length){case 2:return e.reduceRight(function(e,t){return t&&t(e)||e},t);case 3:return e.reduceRight(function(e,n){return void(n&&n(t,i))},void 0);case 4:return e.reduceRight(function(e,n){return n&&n(t,i,e)||e},n)}},a=this&&this.__metadata||function(e,t){return"object"==typeof Reflect&&"function"==typeof Reflect.metadata?Reflect.metadata(e,t):void 0},r=require("angular2/angular2"),o=require("samples/carousel/demo-carousel"),l=require("samples/carousel/doc-carousel"),c=function(){function e(){}return e=s([r.Component({selector:"demo-app"}),r.View({template:'<div class="navbar navbar-inverse navbar-fixed-top" role=navigation><div class=container-fluid><div class=navbar-header><a class=navbar-brand href=#>Angular2-Bootstrap</a> <a class=navbar-brand href=#carousel>Carousel</a></div><div class="collapse navbar-collapse"><ul class="nav navbar-nav navbar-right"><li><a href=https://github.com/mlaval/angular2-bootstrap>Github</a></li></ul></div></div></div><div class=container-fluid><div class=content><p class=lead>Angular2 directives for Bootstrap.</p><section><hr><h1 id=carousel>Carousel</h1><div class=row><div class=col-md-6><demo-carousel></demo-carousel></div><div class=col-md-6><doc-carousel></doc-carousel></div></div></section></div></div>',directives:[o.DemoCarousel,l.DocCarousel]}),a("design:paramtypes",[])],e)}();return e.DemoApp=c,r.bootstrap(c),i.define=n,t.exports});