pgwjs={checkNavbar:function(){ var navbar_width=$('header nav').width(); function calcContentWidth(){ var navbar_content_width=0;$('#mnct').show(); $('.min-mnli').not('.hide').each(function(){ navbar_content_width +=$(this).width(); }); return(navbar_content_width + 50); } function switchMenu(type){if(type==1){ $('#mnli').removeClass('mob hide'); $('#mbmn').addClass('hide');}else{ $('#mnli').addClass('mob hide'); $('#mbmn').removeClass('hide');}$('#mbmn a').removeClass('act');}if(calcContentWidth()>navbar_width){switchMenu(0);}else{switchMenu(1);if(calcContentWidth()>navbar_width){switchMenu(0);}}},displayMobileMenu:function(){if($('#mbmn a').hasClass('act')){pgwjs.disableMobileMenu();return false;}$('#mbmn a').addClass('act');$('#mnli').removeClass('hide');},disableMobileMenu:function(){if($('#mbmn a').hasClass('act')){ $('#mbmn a').removeClass('act'); $('#mnli').addClass('hide');} },goTo:function(div){ $('html,body').animate({scrollTop:($('#'+div).offset().top - 15)},'slow'); return true;}};
/** * PgwMenu - Version 2.0 * * Copyright 2014,Jonathan M. Piat * http://pgwjs.com - http://pagawa.com * * Released under the GNU GPLv3 license - http://opensource.org/licenses/gpl-3.0 */;(function($){ $.fn.pgwMenu=function(options){ var defaults={ mainClassName:'pgwMenu', dropDownLabel:'<span class="icon"></span>', viewMoreEnabled:true, viewMoreLabel:'View more<span class="icon"></span>', viewMoreMaxWidth:480 }; if(this.length==0){ return this; }else if(this.length>1){ this.each(function(){ $(this).pgwMenu(options); }); return this; } var pgwMenu=this; pgwMenu.plugin=this; pgwMenu.config={}; pgwMenu.resizeEvent=null; pgwMenu.window=$(window); var init=function(){ pgwMenu.config=$.extend({},defaults,options); setup(); pgwMenu.checkMenu(); pgwMenu.window.resize(function(){ pgwMenu.plugin.css('overflow','hidden'); clearTimeout(pgwMenu.resizeEvent); pgwMenu.resizeEvent=setTimeout(function(){ pgwMenu.checkMenu(); },100); }); pgwMenu.plugin.find('.pm-dropDown').click(function(e){ pgwMenu.enableMobileDropDown(); e.stopPropagation(); }); pgwMenu.plugin.find('.pm-viewMore').click(function(e){ pgwMenu.enableViewMoreDropDown(); e.stopPropagation(); }); $(document).click(function(){ pgwMenu.disableMobileDropDown(); pgwMenu.disableViewMoreDropDown(); }); }; var setup=function(){ var wrapClass=pgwMenu.config.mainClassName; var defaultClass=pgwMenu.plugin.attr('class'); if(defaultClass && defaultClass.indexOf('light')>-1){ wrapClass +=' light'; } pgwMenu.plugin.removeClass().addClass('pm-links'); pgwMenu.plugin.wrap('<div class="' + wrapClass + '"></div>'); pgwMenu.plugin=pgwMenu.plugin.parent(); pgwMenu.plugin.prepend('<div class="pm-dropDown"><a href="javascript:void(0)">' + pgwMenu.config.dropDownLabel + '</a></div>'); if(pgwMenu.config.viewMoreEnabled){ pgwMenu.plugin.append('<div class="pm-viewMore" style="display:inline-block"><a href="javascript:void(0)">' + pgwMenu.config.viewMoreLabel + '</a><ul></ul></div>'); } }; pgwMenu.checkMenu=function(){ var pluginMaxWidth=pgwMenu.plugin.width(); if(pgwMenu.config.viewMoreEnabled){ var viewMoreLinkWidth=pgwMenu.plugin.find('.pm-viewMore').width(); } function getContentWidth(){ var menuContentWidth=0; pgwMenu.plugin.find('.pm-links').removeClass('mobile').show(); pgwMenu.plugin.find('.pm-links>li').each(function(){ menuContentWidth +=$(this).width(); }); return menuContentWidth; } function switchMenu(type){ if(type=='viewmore'){ var viewMoreMenuWidth=viewMoreLinkWidth; pgwMenu.plugin.find('.pm-links').removeClass('mobile').show(); pgwMenu.plugin.find('.pm-viewMore>ul>li').remove(); pgwMenu.plugin.find('.pm-links>li').show().each(function(){ if(viewMoreMenuWidth + $(this).width()<pluginMaxWidth){ viewMoreMenuWidth +=$(this).width(); }else{ pgwMenu.plugin.find('.pm-viewMore>ul').append($(this).clone().show()); $(this).hide(); } }); pgwMenu.plugin.find('.pm-dropDown,.pm-viewMore>ul').hide(); pgwMenu.plugin.find('.pm-viewMore').show(); }else if(type=='dropdown'){ pgwMenu.plugin.find('.pm-links>li').show(); pgwMenu.plugin.find('.pm-links').addClass('mobile').hide(); pgwMenu.plugin.find('.pm-viewMore,.pm-viewMore>ul').hide(); pgwMenu.plugin.find('.pm-viewMore>ul>li').remove(); pgwMenu.plugin.find('.pm-dropDown').show(); }else{ pgwMenu.plugin.find('.pm-links>li').show(); pgwMenu.plugin.find('.pm-links').removeClass('mobile').show(); pgwMenu.plugin.find('.pm-dropDown,.pm-viewMore,.pm-viewMore>ul').hide(); pgwMenu.plugin.find('.pm-viewMore>ul>li').remove(); } pgwMenu.plugin.find('.pm-dropDown>a,.pm-viewMore>a').removeClass('active'); } if(getContentWidth()>pluginMaxWidth){ if(pgwMenu.config.viewMoreEnabled &&(pluginMaxWidth>pgwMenu.config.viewMoreMaxWidth)){ switchMenu('viewmore'); }else{ switchMenu('dropdown'); } }else{ switchMenu('normal'); } pgwMenu.plugin.css('overflow',''); }; pgwMenu.enableViewMoreDropDown=function(){ if(pgwMenu.plugin.find('.pm-viewMore>a').hasClass('active')){ pgwMenu.disableViewMoreDropDown(); return false; } pgwMenu.plugin.find('.pm-viewMore>a').addClass('active'); pgwMenu.plugin.find('.pm-viewMore>ul').show(); }; pgwMenu.disableViewMoreDropDown=function(){ if(pgwMenu.plugin.find('.pm-viewMore>a').hasClass('active')){ pgwMenu.plugin.find('.pm-viewMore>a').removeClass('active'); pgwMenu.plugin.find('.pm-viewMore>ul').hide(); } }; pgwMenu.enableMobileDropDown=function(){ if(pgwMenu.plugin.find('.pm-dropDown>a').hasClass('active')){ pgwMenu.disableMobileDropDown(); return false; } pgwMenu.plugin.find('.pm-dropDown>a').addClass('active'); pgwMenu.plugin.find('.pm-links').show(); }; pgwMenu.disableMobileDropDown=function(){ if(pgwMenu.plugin.find('.pm-dropDown>a').hasClass('active')){ pgwMenu.plugin.find('.pm-dropDown>a').removeClass('active'); pgwMenu.plugin.find('.pm-links').hide(); } }; init(); return this; }})(window.Zepto || window.jQuery);
window.Rainbow=function(){function A(a){var b=a.getAttribute("data-language")||a.parentNode.getAttribute("data-language");if(!b){var c=/\blang(?:uage)?-(\w+)/;(a=a.className.match(c)||a.parentNode.className.match(c))&&(b=a[1])}return b}function B(a,b){for(var c in f[d]){c=parseInt(c,10);if(a==c&&b==f[d][c]?0:a<=c&&b>=f[d][c])delete f[d][c],delete j[d][c];if(a>=c&&a<f[d][c]||b>c&&b<f[d][c])return!0}return!1}function q(a,b){return'<span class="'+a.replace(/\./g," ")+(l?" "+l:"")+'">'+b+"</span>"}function r(a,b,c,i){if("undefined"===typeof a||null===a)i();else{var e=a.exec(c);if(e){++s;!b.name&&"string"==typeof b.matches[0]&&(b.name=b.matches[0],delete b.matches[0]);var k=e[0],g=e.index,t=e[0].length+g,h=function(){function e(){r(a,b,c,i)}s%100>0?e():setTimeout(e,0)};if(B(g,t))h();else{var m=u(b.matches),l=function(a,c,i){if(a>=c.length)i(k);else{var d=e[c[a]];if(d){var g=b.matches[c[a]],f=g.language,h=g.name&&g.matches?g.matches:g,j=function(b,d,g){var f;f=0;var h;for(h=1;h<c[a];++h)e[h]&&(f=f+e[h].length);d=g?q(g,d):d;k=k.substr(0,f)+k.substr(f).replace(b,d);l(++a,c,i)};f?n(d,f,function(a){j(d,a)}):typeof g==="string"?j(d,d,g):v(d,h.length?h:[h],function(a){j(d,a,g.matches?g.name:0)})}else l(++a,c,i)}};l(0,m,function(a){b.name&&(a=q(b.name,a));if(!j[d]){j[d]={};f[d]={}}j[d][g]={replace:e[0],"with":a};f[d][g]=t;h()})}}else i()}}function u(a){var b=[],c;for(c in a)a.hasOwnProperty(c)&&b.push(c);return b.sort(function(a,c){return c-a})}function v(a,b,c){function i(b,k){k<b.length?r(b[k].pattern,b[k],a,function(){i(b,++k)}):C(a,function(a){delete j[d];delete f[d];--d;c(a)})}++d;i(b,0)}function C(a,b){function c(a,b,i,f){if(i<b.length){++w;var h=b[i],l=j[d][h],a=a.substr(0,h)+a.substr(h).replace(l.replace,l["with"]),h=function(){c(a,b,++i,f)};0<w%250?h():setTimeout(h,0)}else f(a)}var i=u(j[d]);c(a,i,0,b)}function n(a,b,c){var d=m[b]||[],e=m[x]||[],b=y[b]?d:d.concat(e);v(a.replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/&(?![\w\#]+;)/g,"&amp;"),b,c)}function o(a,b,c){if(b<a.length){var d=a[b],e=A(d);return!(-1<(" "+d.className+" ").indexOf(" rainbow "))&&e?(e=e.toLowerCase(),d.className+=d.className?" rainbow":"rainbow",n(d.innerHTML,e,function(k){d.innerHTML=k;j={};f={};p&&p(d,e);setTimeout(function(){o(a,++b,c)},0)})):o(a,++b,c)}c&&c()}function z(a,b){var a=a&&"function"==typeof a.getElementsByTagName?a:document,c=a.getElementsByTagName("pre"),d=a.getElementsByTagName("code"),e,f=[],g=[];for(e=0;e<c.length;++e)c[e].getElementsByTagName("code").length?c[e].innerHTML=c[e].innerHTML.replace(/^\s+/,"").replace(/\s+$/,""):f.push(c[e]);for(e=0;e<d.length;++e)g.push(d[e]);o(g.concat(f),0,b)}var j={},f={},m={},y={},d=0,x=0,s=0,w=0,l,p;return{extend:function(a,b,c){1==arguments.length&&(b=a,a=x);y[a]=c;m[a]=b.concat(m[a]||[])},b:function(a){p=a},a:function(a){l=a},color:function(a,b,c){if("string"==typeof a)return n(a,b,c);if("function"==typeof a)return z(0,a);z(a,b)}}}();document.addEventListener&&document.addEventListener("DOMContentLoaded",Rainbow.color,!1);Rainbow.onHighlight=Rainbow.b;Rainbow.addClass=Rainbow.a;Rainbow.extend([{matches:{1:[{name:"keyword.operator",pattern:/\=|\+/g},{name:"keyword.dot",pattern:/\./g}],2:{name:"string",matches:{name:"constant.character.escape",pattern:/\\('|"){1}/g}}},pattern:/(\(|\s|\[|\=|:|\+|\.)(('|")([^\\\1]|\\.)*?(\3))/gm},{name:"comment",pattern:/\/\*[\s\S]*?\*\/|(\/\/|\#)[\s\S]*?$/gm},{name:"constant.numeric",pattern:/\b(\d+(\.\d+)?(e(\+|\-)?\d+)?(f|d)?|0x[\da-f]+)\b/gi},{matches:{1:"keyword"},pattern:/\b(and|array|as|b(ool(ean)?|reak)|c(ase|atch|har|lass|on(st|tinue))|d(ef|elete|o(uble)?)|e(cho|lse(if)?|xit|xtends|xcept)|f(inally|loat|or(each)?|unction)|global|if|import|int(eger)?|long|new|object|or|pr(int|ivate|otected)|public|return|self|st(ring|ruct|atic)|switch|th(en|is|row)|try|(un)?signed|var|void|while)(?=\(|\b)/gi},{name:"constant.language",pattern:/true|false|null/g},{name:"keyword.operator",pattern:/\+|\!|\-|&(gt|lt|amp);|\||\*|\=/g},{matches:{1:"function.call"},pattern:/(\w+?)(?=\()/g},{matches:{1:"storage.function",2:"entity.name.function"},pattern:/(function)\s(.*?)(?=\()/g}]);Rainbow.extend("javascript",[{name:"selector",pattern:/(\s|^)\$(?=\.|\()/g},{name:"support",pattern:/\b(window|document)\b/g},{matches:{1:"support.property"},pattern:/\.(length|node(Name|Value))\b/g},{matches:{1:"support.function"},pattern:/(setTimeout|setInterval)(?=\()/g},{matches:{1:"support.method"},pattern:/\.(getAttribute|push|getElementById|getElementsByClassName|log|setTimeout|setInterval)(?=\()/g},{name:"string.regexp",matches:{1:"string.regexp.open",2:{name:"constant.regexp.escape",pattern:/\\(.){1}/g},3:"string.regexp.close",4:"string.regexp.modifier"},pattern:/(\/)(?!\*)(.+)(\/)([igm]{0,3})/g},{matches:{1:"storage",3:"entity.function"},pattern:/(var)?(\s|^)(\S*)(?=\s?=\s?function\()/g},{matches:{1:"keyword",2:"entity.function"},pattern:/(new)\s+(.*)(?=\()/g},{name:"entity.function",pattern:/(\w+)(?=:\s{0,}function)/g}]);Rainbow.extend("html",[{name:"source.php.embedded",matches:{2:{language:"php"}},pattern:/&lt;\?=?(?!xml)(php)?([\s\S]*?)(\?&gt;)/gm},{name:"source.css.embedded",matches:{1:{matches:{1:"support.tag.style",2:[{name:"entity.tag.style",pattern:/^style/g},{name:"string",pattern:/('|")(.*?)(\1)/g},{name:"entity.tag.style.attribute",pattern:/(\w+)/g}],3:"support.tag.style"},pattern:/(&lt;\/?)(style.*?)(&gt;)/g},2:{language:"css"},3:"support.tag.style",4:"entity.tag.style",5:"support.tag.style"},pattern:/(&lt;style.*?&gt;)([\s\S]*?)(&lt;\/)(style)(&gt;)/gm},{name:"source.js.embedded",matches:{1:{matches:{1:"support.tag.script",2:[{name:"entity.tag.script",pattern:/^script/g},{name:"string",pattern:/('|")(.*?)(\1)/g},{name:"entity.tag.script.attribute",pattern:/(\w+)/g}],3:"support.tag.script"},pattern:/(&lt;\/?)(script.*?)(&gt;)/g},2:{language:"javascript"},3:"support.tag.script",4:"entity.tag.script",5:"support.tag.script"},pattern:/(&lt;script(?! src).*?&gt;)([\s\S]*?)(&lt;\/)(script)(&gt;)/gm},{name:"comment.html",pattern:/&lt;\!--[\S\s]*?--&gt;/g},{matches:{1:"support.tag.open",2:"support.tag.close"},pattern:/(&lt;)|(\/?\??&gt;)/g},{name:"support.tag",matches:{1:"support.tag",2:"support.tag.special",3:"support.tag-name"},pattern:/(&lt;\??)(\/|\!?)(\w+)/g},{matches:{1:"support.attribute"},pattern:/([a-z-]+)(?=\=)/gi},{matches:{1:"support.operator",2:"string.quote",3:"string.value",4:"string.quote"},pattern:/(=)('|")(.*?)(\2)/g},{matches:{1:"support.operator",2:"support.value"},pattern:/(=)([a-zA-Z\-0-9]*)\b/g},{matches:{1:"support.attribute"},pattern:/\s(\w+)(?=\s|&gt;)(?![\s\S]*&lt;)/g}],!0);