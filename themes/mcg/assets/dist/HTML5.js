(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{168:function(e,t,i){"use strict";var s=i(8),a=i(2),n=i(54);t.a=class{constructor(e){Object(s.a)(this,"element",void 0),Object(s.a)(this,"container",void 0),Object(s.a)(this,"id",void 0),Object(s.a)(this,"isPlaying",void 0),Object(s.a)(this,"isReady",void 0),Object(s.a)(this,"queue",void 0),Object(s.a)(this,"player",void 0),Object(s.a)(this,"playPromise",void 0),this.element=e,this.container=Object(a.d)(".js-video-container",e),this.id=e.getAttribute("data-id")||"",this.isPlaying=!1,this.isReady=!1,this.queue=new Set,this.createPlayer(),this._observeElement(),e.dispatchEvent(new CustomEvent("videoloaded"))}play(){if(!this.isPlaying)return this.isReady?void(this.playPromise=Promise.resolve(this.playVideo())):(this.createPlayer(),void this._queueTask("play"))}async pause(){this.isPlaying&&(this.isReady&&void 0!==this.playPromise?(await this.playPromise,this.pauseVideo(),this.onStop()):this._queueTask("pause"))}onEnded(){this.onStop()}onPlay(){this.element.setAttribute("data-status","loaded playing"),this.isPlaying=!0}onStop(){this.element.setAttribute("data-status","loaded paused"),this.isPlaying=!1}watchResize(e,t){const i=t/e,s=()=>{const e=this.element.clientWidth;this.container.style.width=e+"px",this.container.style.height=e*i+"px"};s(),this.element.dispatchEvent(new CustomEvent("videosize")),window.dispatchEvent(new CustomEvent("resize")),window.addEventListener("resize",()=>s()),this.player.element.setAttribute("tabindex","-1")}flushQueue(){this.queue.forEach(e=>this[e]()),this.queue.clear()}_queueTask(e){this.queue.add(e)}_observeElement(){Object(n.a)(this.container,e=>{e?this.play():this.isReady&&this.pause()},{threshold:.25,rootMargin:"-50px"})}}},81:function(e,t,i){"use strict";i.r(t);var s=i(8),a=i(168);class n extends a.a{constructor(...e){super(...e),Object(s.a)(this,"player",void 0)}createPlayer(){if(this.player)return;const{sources:e}=JSON.parse(this.container.getAttribute("data-sources"));this.container.innerHTML=`\n            <video muted playsinline autoplay loop>\n                ${e.reduce((e,t)=>e+=`<source src="${t.url}" type="${t.mime_type}" width="${t.width}" height="${t.height}">`,"")}\n            </video>\n        `,this.player=this.container.firstElementChild,this.player.element=this.container.firstElementChild,this.player.addEventListener("canplay",()=>this._onReady()),this.player.addEventListener("ended",()=>this.onEnded()),this.player.addEventListener("play",()=>this.onPlay()),this.player.addEventListener("pause",()=>this.pause())}playVideo(){this.player.play()}pauseVideo(){this.player.pause()}_onReady(){this.isReady=!0;const{videoWidth:e,videoHeight:t}=this.player;this.watchResize(e,t),"requestIdleCallback"in window?requestIdleCallback(()=>this.flushQueue()):this.flushQueue()}}t.default=n}}]);