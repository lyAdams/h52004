function photo(t){this.father=t,this.sec=document.getElementsByClassName("main_con")[0],this.p=this.sec.children,this.divf=document.getElementsByClassName("photo_con")[0],this.div=this.divf.children,this.pf=document.getElementsByClassName("photo_pfather")[0],this.pi=this.pf.getElementsByTagName("p"),this.i_con=this.pf.getElementsByTagName("i"),this.u=this.pf.getElementsByTagName("u")}photo.prototype.way=function(){this.bind()},photo.prototype.bind=function(){var e=this;this.pf.onclick=function(t){t=(t=t||window.event).target||t.srcElemment;"P"==t.nodeName&&e.dh(t)}},photo.prototype.dh=function(t){for(var e=0;e<this.pi.length;e++)this.p[e].className="",this.div[e].className="",this.i_con[e].className="iconfont",this.u[e].className="",this.u[e].innerHTML="+";t=parseInt(t.getAttribute("dy"));this.p[t].className="active",this.div[t].className="active",this.i_con[t].className="iconfont active",this.u[t].className="active",this.u[t].innerHTML="-"},sec=document.getElementsByClassName("main_con")[0];var photo_one=new photo(sec);photo_one.way();