!function(e,t,i,a){"use strict";function s(t,i){this.element=t,this.settings=e.extend(!0,{},l,i),this._defaults=l,this._name=n,this.init()}var o,n="ShopLocator",l={pluginStyle:"lollipop",paginationStyle:1,json:null,map:{center:[52.229676,21.012229],MapType:google.maps.MapTypeId.ROADMAP,disableDefaultUI:!1,mapStyle:[],draggable:!0,disableDoubleClickZoom:!1,maxZoom:"",minZoom:"",scrollwheel:!0,zoom:10,allMarkersInViewport:!0},infoBubble:{visible:!1,padding:0,borderRadius:4,borderWidth:0,borderColor:"#fff",backgroundColor:"#fff",shadowStyle:0,minHeight:null,maxHeight:100,minWidth:200,maxWidth:null,arrowStyle:0,arrowSize:10,arrowPosition:50,hideCloseButton:!1,closeSrc:"src/style/closeButton.svg",offsetTop:2,offsetRight:2,disableAutoPan:!1},markersIcon:"src/style/lollipop/images/marker.png",marker:{latlng:[52.229676,21.012229],animation:!1,title:"CreateIT",street:"",zip:"",city:""},cluster:{enable:!1,clusterClass:"cluster",gridSize:50,maxZoom:11,style:{anchorIcon:[0,0],anchorText:[0,0],backgroundPosition:"0 0",fontFamily:"Arial,sans-serif",fontStyle:"normal",textColor:"white",fontWeight:"bold",textSize:18,heightSM:60,widthSM:54,heightMD:60,widthMD:54,heightBIG:60,widthBIG:54,iconSmall:"src/style/lollipop/images/clusterSmall.png",iconMedium:"src/style/lollipop/images/clusterMedium.png",iconBig:"src/style/lollipop/images/clusterBig.png"}},sidebar:{visible:!1,selectSection:{visible:!1,difFiles:[["First Region","markers"],["Second Region","diffmarkers"]]},searchBox:{visible:!1,search:!1,searchRadius:20},results:{visibleInFirstPage:!0,pageSize:10,currentPage:1,paginationItems:5}}};e.extend(s.prototype,{init:function(){this.loadDependences(this,this.element,this.settings),this.setUpScriptBody(this.element,this.settings),this.setUpMap(this.element,this.settings)},loadDependences:function(t,i,a){if(0===e("#markerclusterer").length){var s="assets/js/plugins/shop-locator/src/dependences/markerclusterer.js",o=e('<script id="markerclusterer" type="text/javascript"></script>');o.attr("src",s),o.appendTo(e("head"))}if(0===e("#infobubble").length){var n="assets/js/plugins/shop-locator/src/dependences/infobubble.js",l=e('<script id="infobubble" type="text/javascript"></script>');l.attr("src",n),l.appendTo(e("head"))}},setUpScriptBody:function(t,i){var a;e(t).addClass(i.pluginStyle),1==i.sidebar.visible?(t.innerHTML="<div class='row'><div class='ct-googleMap--SidebarCol'><div class='ct-googleMap--sidebar'></div></div><div class='ct-googleMap--MapCol'><div class='ct-googleMap ct-js-googleMap' id='map_canvas'></div></div></div>",a=e(t).find(".ct-googleMap--sidebar"),1==i.sidebar.selectSection.visible&&(a.append("<div class='ct-googleMap--selectContainer'><select class='ct-googleMap--select'></select></div>"),this.createSelectSection(t,i)),(1==i.sidebar.searchBox.visible||1==i.sidebar.searchBox.search)&&(a.append("<div class='ct-googleMap--searchContainer'><input type='text' class='ct-googleMap--search' id='searchGmaps' placeholder='Code or city'></div>"),1==i.sidebar.searchBox.search?a.append("<div class='ct-googleMap--resultsCounter'></div><div class='ct-googleMap--results'></div>"):1==i.sidebar.results.visibleInFirstPage&&a.append("<div class='ct-googleMap--results'></div>"))):t.innerHTML="<div class='ct-googleMap ct-js-googleMap' id='map_canvas'></div>"},setUpMap:function(i,a){var s,o,n,l,r=e(i).find(".ct-js-googleMap");l=t.screen.width<998?!1:a.map.draggable,o=new google.maps.Map(r[0],{center:new google.maps.LatLng(a.map.center[0],a.map.center[1]),mapTypeId:a.map.MapType,styles:a.map.mapStyle,disableDefaultUI:a.map.disableDefaultUI,draggable:l,disableDoubleClickZoom:a.map.disableDoubleClickZoom,maxZoom:a.map.maxZoom,minZoom:a.map.minZoom,scrollwheel:a.map.scrollwheel,zoom:a.map.zoom}),1==a.infoBubble.visible&&(s=new google.maps.InfoWindow),n=new google.maps.LatLngBounds,this.displayMarkers(this,i,o,n,a)},JSonMainFunction:function(t,i,a,s,o,n,l){var r,c,d,g,p,h;p=[{anchorIcon:l.cluster.style.anchorIcon,anchorText:l.cluster.style.anchorText,backgroundPosition:l.cluster.style.backgroundPosition,fontFamily:l.cluster.style.fontFamily,fontStyle:l.cluster.style.fontStyle,textColor:l.cluster.style.textColor,fontWeight:l.cluster.style.fontWeight,textSize:l.cluster.style.textSize,url:l.cluster.style.iconSmall,height:l.cluster.style.heightSM,width:l.cluster.style.widthSM},{anchorIcon:l.cluster.style.anchorIcon,anchorText:l.cluster.style.anchorText,backgroundPosition:l.cluster.style.backgroundPosition,fontFamily:l.cluster.style.fontFamily,fontStyle:l.cluster.style.fontStyle,textColor:l.cluster.style.textColor,fontWeight:l.cluster.style.fontWeight,textSize:l.cluster.style.textSize,url:l.cluster.style.iconMedium,height:l.cluster.style.heightMD,width:l.cluster.style.widthMD},{anchorIcon:l.cluster.style.anchorIcon,anchorText:l.cluster.style.anchorText,backgroundPosition:l.cluster.style.backgroundPosition,fontFamily:l.cluster.style.fontFamily,fontStyle:l.cluster.style.fontStyle,textColor:l.cluster.style.textColor,fontWeight:l.cluster.style.fontWeight,textSize:l.cluster.style.textSize,url:l.cluster.style.iconBig,height:l.cluster.style.heightBIG,width:l.cluster.style.widthBIG}],h={clusterClass:l.cluster.clusterClass,gridSize:l.cluster.gridSize,maxZoom:l.cluster.maxZoom,styles:p},e(s).find(".ct-googleMap--search").val(""),a=[],c=i,c.sort(function(e,t){var i=e.title,a=t.title;return i==a?0:i>a?1:-1}),n=new google.maps.LatLngBounds(null);for(var u=0;c.length>u;u++)d=t.createMarkers(o,c[u].lat,c[u].lng,c[u].title,c[u].street,c[u].zip,c[u].city,l),n.extend(d.position),a.push(d),1==l.sidebar.visible&&1==l.sidebar.results.visibleInFirstPage&&t.createSidebarButtons(o,d,s,l);return t.resultsInPage(t,s,l),1==l.cluster.enable&&(r=!0,g=new MarkerClusterer(o,a,h)),1==l.map.allMarkersInViewport&&o.fitBounds(n),(1==l.sidebar.searchBox.visible||1==l.sidebar.searchBox.search)&&t.searchPlace(t,o,a,s,l),g},displayMarkers:function(t,i,a,s,o){var n,l,r,c,d,g,p=[];n=e(i).find(".ct-googleMap--select"),1==o.sidebar.selectSection.visible&&1==o.sidebar.visible?e(n).change(function(){e(this).find("option:selected").each(function(){l=e(i).find(".ct-googleMap--sidebarItem"),l.remove(),r=n.val(),e(i).find(".ct-googleMap--resultsCounter").html(""),e.ajax({url:"src/json/"+r+".json",dataType:"json",success:function(e){1==g&&(d.clearMarkers(),g=!1),d=t.JSonMainFunction(t,e,p,i,a,s,o),g=!0},error:function(e,t,i){console.log("ERROR",t,i)}})})}).trigger("change"):null==o.json?(c=t.createMarkers(a,o.marker.latlng[0],o.marker.latlng[1],o.marker.title,o.marker.street,o.marker.zip,o.marker.city,o),p.push(c),1==o.map.allMarkersInViewport&&(s.extend(c.position),a.fitBounds(s)),(1==o.sidebar.visible&&1==o.sidebar.searchBox.visible||1==o.sidebar.searchBox.search)&&t.searchPlace(t,a,p,i,o)):e.ajax({url:o.json,dataType:"json",success:function(e){1==g&&(d.clearMarkers(),g=!1),d=t.JSonMainFunction(t,e,p,i,a,s,o),g=!0},error:function(e,t,i){console.log("ERROR",t,i)}})},createMarkers:function(e,t,i,a,s,n,l,r){var c=new google.maps.Marker({position:new google.maps.LatLng(t,i),animation:r.marker.animation,map:e,title:a,icon:new google.maps.MarkerImage(r.markersIcon)});if(1==r.infoBubble.visible){var d=new InfoBubble({visible:r.infoBubble.visible,content:"<div class = 'ct-googleMap--InfoWindowBody' style='text-align: center;'><span>"+a+"</span><span>"+s+"</span><span>"+n+" - "+l+"</span></div>",backgroundClassName:"ct-googleMap--customInfoWindow",padding:r.infoBubble.padding,borderRadius:r.infoBubble.borderRadius,borderWidth:r.infoBubble.borderWidth,borderColor:r.infoBubble.borderColor,backgroundColor:r.infoBubble.backgroundColor,shadowStyle:r.infoBubble.shadowStyle,minHeight:r.infoBubble.minHeight,maxHeight:r.infoBubble.maxHeight,minWidth:r.infoBubble.minWidth,maxWidth:r.infoBubble.maxWidth,arrowStyle:r.infoBubble.arrowStyle,arrowSize:r.infoBubble.arrowSize,arrowPosition:r.infoBubble.arrowPosition,hideCloseButton:r.infoBubble.hideCloseButton,closeSrc:r.infoBubble.closeSrc,offsetTop:r.infoBubble.offsetTop,offsetRight:r.infoBubble.offsetRight,disableAutoPan:r.infoBubble.disableAutoPan});google.maps.event.addListener(c,"click",function(){o&&o.close(),d.open(e,c),o=d})}return google.maps.event.addDomListener(c,"click",function(){var t=c.getPosition();e.setCenter(t)}),c},createSidebarButtons:function(t,a,s,o){var n=e(s).find(".ct-googleMap--results"),l=i.createElement("div");l.className="ct-googleMap--sidebarItem",google.maps.event.clearListeners(l,"click"),l.innerHTML="<span class='ct-googleMap--sidebarItemTitle'>"+a.getTitle()+"</span>",n.append(l),google.maps.event.addDomListener(l,"click",function(){google.maps.event.trigger(a,"click"),t.setZoom(12),t.setCenter(a.getPosition())})},searchPlace:function(t,i,a,s,o){var n=e(s).find(".ct-googleMap--search"),l=new google.maps.places.SearchBox(n[0]);google.maps.event.addListener(l,"places_changed",function(){var e=l.getPlaces(),n=new google.maps.LatLng(e[0].geometry.location.lat(),e[0].geometry.location.lng());1==o.sidebar.searchBox.search&&t.displaySearchResults(t,i,a,n,s,o),i.setCenter(e[0].geometry.location),0!=e.length&&i.setZoom(11)})},displaySearchResults:function(t,i,a,s,o,n){var l,r=[],c=e(o).find(".ct-googleMap--resultsCounter");l=e(o).find(".ct-googleMap--sidebarItem"),l.remove();for(var d=0;a.length>d;d++){var g=a[d].getPosition().lat(),p=a[d].getPosition().lng(),h=new google.maps.LatLng(g,p),u=google.maps.geometry.spherical.computeDistanceBetween(s,h)/1e3;u<n.sidebar.searchBox.searchRadius&&(a[d].distance=u.toFixed(2),r.push(a[d]))}r.sort(function(e,t){var i=parseFloat(e.distance,10),a=parseFloat(t.distance,10);return i-a});for(var b=0;r.length>b;b++)t.createSidebarButtons(i,r[b],o,n),e(o).find(".ct-googleMap--sidebarItem:nth-child("+(b+1)+")").append("<span class='ct-googleMap--sidebarItemDistance'>"+r[b].distance+" km</span>");c.html(""),c.append("Items<span class='ct-googleMap--itemCounter'>"+r.length+"</span>"),t.resultsInPage(t,o,n)},resultsInPage:function(t,i,a){var s=a.sidebar.results.pageSize,o=a.sidebar.results.currentPage,n=1,l=e(i).find(".ct-googleMap--results"),r="<ul class='Navigation'>",c="<li class='paginationCounter'>";if(t.sidebarClear(n,i),c+=1!=a.paginationStyle?"</li>":"<a rel='1' class='NavPage'>1</a>",l.children().each(function(t){n*s>t&&t>=(n-1)*s?e(this).addClass("page"+n):(e(this).addClass("page"+(n+1)),1==a.paginationStyle&&(c+="<a rel='"+(n+1)+"' class='NavPage'>"+(n+1)+"</a>"),n++)}),1==a.paginationStyle&&(c+="</li>"),l.children().hide(),l.children(".page"+o).show(),!(1>=n)){var d=1;r+="<li class='NavigationPrev NavigationDisable Navigation"+d+"'><a rel='"+d+"'></a></li>",r+=c,r+="<li class='NavigationNext Navigation"+(d+1)+"'><a rel='"+(d+1)+"' ></a></li>",r+="</ul>",e(i).find(".ct-googleMap--sidebar").append(r),t.pagination(t,l,n,s,o,i,a)}},pagination:function(t,i,a,s,o,n,l){var r,c=1,d=1,g=1,p=e(n).find(".paginationCounter"),h=e(n).find(".NavigationPrev"),u=e(n).find(".NavigationNext");2==l.paginationStyle&&t.counterElements(i,p,a,s,o,n),1==l.paginationStyle&&(p.children().each(function(t){t<g*l.sidebar.results.paginationItems&&t>=(g-1)*l.sidebar.results.paginationItems?e(this).addClass("paginationPage"+g):(e(this).addClass("paginationPage"+(g+1)),g+=1)}),p.children().hide(),p.children(".paginationPage"+o).show(),e(n).find(".NavPage[rel='"+o+"']").addClass("active"),e(n).find(".NavPage").on("click",function(){var t=e(this).attr("rel");e(this).addClass("active").siblings().removeClass("active"),r=!0,c>t?(c=t,h.trigger("click")):(c=t,u.trigger("click"))})),e(n).find(".NavigationPrev").on("click",function(){1==r?(i.children().hide(),i.find(".page"+c).show(),1==c&&e(this).addClass("NavigationDisable"),u.removeClass("NavigationDisable"),r=!1):(1==c?(c=1,i.children().hide(),i.find(".page"+c).show()):(2==c&&e(this).addClass("NavigationDisable"),u.removeClass("NavigationDisable"),c-=1,i.children().hide(),i.find(".page"+c).show()),1!=l.paginationStyle?(p.children().hide(),p.children(".paginationCount"+c).show()):(c<d*l.sidebar.results.paginationItems&&c==(d-1)*l.sidebar.results.paginationItems?(d-=1,p.children().hide(),p.children(".paginationPage"+d).show()):c<d*l.sidebar.results.paginationItems&&c>=(d-1)*l.sidebar.results.paginationItems?(p.children().hide(),p.children(".paginationPage"+d).show()):(d-=1,p.children().hide(),p.children(".paginationPage"+d).show()),e(n).find(".NavPage[rel='"+c+"']").addClass("active").siblings().removeClass("active")))}),e(n).find(".NavigationNext").on("click",function(){1==r?(i.children().hide(),i.find(".page"+c).show(),c==a&&e(this).addClass("NavigationDisable"),h.removeClass("NavigationDisable"),r=!1):(c==a?(c=a,i.children().hide(),i.find(".page"+c).show()):(c==a-1&&e(this).addClass("NavigationDisable"),h.removeClass("NavigationDisable"),c=parseInt(c,10)+1,i.children().hide(),i.find(".page"+c).show()),1!=l.paginationStyle?(p.children().hide(),p.children(".paginationCount"+c).show()):(c<d*l.sidebar.results.paginationItems&&c>=(d-1)*l.sidebar.results.paginationItems||c==d*l.sidebar.results.paginationItems?(p.children().hide(),p.children(".paginationPage"+d).show()):(d++,p.children().hide(),p.children(".paginationPage"+d).show()),e(n).find(".NavPage[rel='"+c+"']").addClass("active").siblings().removeClass("active")))})},counterElements:function(t,i,a,s,o,n){for(var l=[],r=0;a>r;r++)l.push(e(n).find(".page"+(1+r)).length),l[r]>1?i.append("<span class='paginationCount"+(r+1)+"'>"+(1+r*s)+" - "+(l[r]+r*s)+" of "+t.children().length+"</span>"):i.append("<span class='paginationCount"+(r+1)+"'>"+(l[r]+r*s)+" of "+t.children().length+"</span>");i.children().hide(),e(n).find(".paginationCount"+o).show()},createSelectSection:function(t,i){for(var a=i.sidebar.selectSection.difFiles,s=e(t).find(".ct-googleMap--select"),o=0;a.length>o;o++)s.append("<option value='"+a[o][1]+"'>"+a[o][0]+"</option>")},sidebarClear:function(t,i){e(i).find(".Navigation").remove(),t=1}}),e.fn[n]=function(t){return this.each(function(){e.data(this,"plugin_"+n)||e.data(this,"plugin_"+n,new s(this,t))})}}(jQuery,window,document);