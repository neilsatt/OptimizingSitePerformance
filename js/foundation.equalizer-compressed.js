!function(t,e,i,n){"use strict";Foundation.libs.equalizer={name:"equalizer",version:"5.5.3",settings:{use_tallest:!0,before_height_change:t.noop,after_height_change:t.noop,equalize_on_stack:!1,act_on_hidden_el:!1},init:function(t,e,i){Foundation.inherit(this,"image_loaded"),this.bindings(e,i),this.reflow()},events:function(){this.S(e).off(".equalizer").on("resize.fndtn.equalizer",function(t){this.reflow()}.bind(this))},equalize:function(e){var i,n,a=!1,h=e.data("equalizer"),s=e.data(this.attr_name(!0)+"-init")||this.settings;if(0!==(i=s.act_on_hidden_el?h?e.find("["+this.attr_name()+'-watch="'+h+'"]'):e.find("["+this.attr_name()+"-watch]"):h?e.find("["+this.attr_name()+'-watch="'+h+'"]:visible'):e.find("["+this.attr_name()+"-watch]:visible")).length&&(s.before_height_change(),e.trigger("before-height-change.fndth.equalizer"),i.height("inherit"),!1!==s.equalize_on_stack||(n=i.first().offset().top,i.each(function(){if(t(this).offset().top!==n)return a=!0,!1}),!a))){var r=i.map(function(){return t(this).outerHeight(!1)}).get();if(s.use_tallest){var o=Math.max.apply(null,r);i.css("height",o)}else{var u=Math.min.apply(null,r);i.css("height",u)}s.after_height_change(),e.trigger("after-height-change.fndtn.equalizer")}},reflow:function(){var e=this;this.S("["+this.attr_name()+"]",this.scope).each(function(){var i=t(this),n=i.data("equalizer-mq"),a=!0;n&&(n="is_"+n.replace(/-/g,"_"),Foundation.utils.hasOwnProperty(n)&&(a=!1)),e.image_loaded(e.S("img",this),function(){a||Foundation.utils[n]()?e.equalize(i):i.find("["+e.attr_name()+"-watch]:visible").css("height","auto")})})}}}(jQuery,window,window.document);