/*! gruntyplate - v0.1.0 - 2017-03-01
* Copyright (c) 2017 Gruntyplate;*/

app.fib=function(a){"use strict";function b(){c()}function c(){function a(b,c,d,f,g,j,k,l,m,n){if(n>3&&(n=0),1==j)var l=d;if(!(g>6008)){if(e.arc(b+k*h[n][0],c+l*h[n][1],g*d,i[n][0]*Math.PI,i[n][1]*Math.PI,!0),n++,j%2==0){var o=l;a(b,c,d,g,f+g,j+1,k,Math.pow(Math.sqrt(m)+Math.sqrt(l),2),o,n)}j%2!=0&&a(b,c,d,g,f+g,j+1,k+l,l,m,n)}}function b(a,c,d,f,g,h,i,k){i>6008||(e.fillStyle=j[k],e.fillRect(a+n[k][0]*f*d,c+n[k][1]*g*d,i*d,i*d),e.rect(a+n[k][0]*f*d,c+n[k][1]*g*d,i*d,i*d),3==k?b(a,c,d,f+g,h+i+g,i,h+i,0):0==k?b(a,c,d,h+i+f,g,i,h+i,k+1):1==k?b(a,c,d,f,i-g,i,h+i,k+1):b(a,c,d,i-f,h-g,i,h+i,k+1))}function c(a,b){function c(f){d!==!1&&(requestAnimationFrame(c,b),d=a(f-e),e=f)}var d=!0,e=+new Date;document.body.onkeyup=function(a){32==a.keyCode&&(d=!d,d&&c(e))},c(e)}var d=document.getElementById("fibonacci"),e=d.getContext("2d"),f=window.innerWidth,g=window.innerHeight;d.height=g,d.width=f;var h=[[-1,-1],[-1,1],[1,1],[1,-1]],i=[[0,1.5],[1.5,1],[1,.5],[.5,0]],j=[["#ffc100"],["#ff9a00"],["#ff7400"],["#ff4d00"]],k=5,l=(f-k)/2,m=(g-5)/2,n=[[-1,-1],[-1,-1],[-1,1],[1,-1]],k=1,o=function(c){k>6.8&&(k=1),e.beginPath(),e.clearRect(0,0,d.width,d.height),a(l,m,k,1,1,0,0,0,0,0),b(l,m,k,0,1,1,1,0),e.strokeStyle="#1C110A",e.stroke();var f=1+c/1e3;f>1&&(k*=f)};c(o,d)}a(document).on("ready",b)}(jQuery),app.overlay=function(a){"use strict";function b(){a(".js-overlay").click("on",function(){a(this).attr("data-overlay-type")}),a(".overlay").click("on",function(b){b.target===b.currentTarget&&(a("body").removeClass("is-overlay-open is-overlay-transparent"),a(".overlay").empty())})}a(window).on("load",b)}(jQuery);
//# sourceMappingURL=application.js.map