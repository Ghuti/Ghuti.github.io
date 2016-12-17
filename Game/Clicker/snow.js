/*var SNOW_Picture = "snow.png"  
var SNOW_no = 15;  
  
var SNOW_browser_IE_NS = (document.body.clientHeight) ? 1 : 0;  
var SNOW_browser_MOZ = (self.innerWidth) ? 1 : 0;  
var SNOW_browser_IE7 = (document.documentElement.clientHeight) ? 1 : 0;  
  
var SNOW_Time;  
var SNOW_dx, SNOW_xp, SNOW_yp;  
var SNOW_am, SNOW_stx, SNOW_sty;   
var i, SNOW_Browser_Width, SNOW_Browser_Height;  
  
if (SNOW_browser_IE_NS)  
{  
    SNOW_Browser_Width = document.body.clientWidth;  
    SNOW_Browser_Height = document.body.clientHeight;  
}  
else if (SNOW_browser_MOZ)  
{  
    SNOW_Browser_Width = self.innerWidth - 20;  
    SNOW_Browser_Height = self.innerHeight;  
}  
else if (SNOW_browser_IE7)  
{  
    SNOW_Browser_Width = document.documentElement.clientWidth;  
    SNOW_Browser_Height = document.documentElement.clientHeight;  
}  
  
SNOW_dx = new Array();  
SNOW_xp = new Array();  
SNOW_yp = new Array();  
SNOW_am = new Array();  
SNOW_stx = new Array();  
SNOW_sty = new Array();  
  
for (i = 0; i < SNOW_no; ++ i)   
{   
    SNOW_dx[i] = 0;   
    SNOW_xp[i] = Math.random()*(SNOW_Browser_Width-50);  
    SNOW_yp[i] = Math.random()*SNOW_Browser_Height;  
    SNOW_am[i] = Math.random()*20;   
    SNOW_stx[i] = 0.02 + Math.random()/10;  
    SNOW_sty[i] = 0.7 + Math.random();  
    if (i == 0) document.write("<\div id=\"SNOW_flake"+ i +"\" style=\"position: absolute; z-index: "+ i +"; visibility: visible; top: 15px; left: 15px;\"><a href=\"http://www.peters1.dk\" target=\"_blank\"><\img src=\""+SNOW_Picture+"\" border=\"0\"></a><\/div>");  
    else document.write("<\div id=\"SNOW_flake"+ i +"\" style=\"position: absolute; z-index: "+ i +"; visibility: visible; top: 15px; left: 15px;\"><\img src=\""+SNOW_Picture+"\" border=\"0\"><\/div>");  
}  
  
function SNOW_Weather()   
{   
  
for (i = 0; i < SNOW_no; ++ i)   
{   
    SNOW_yp[i] += SNOW_sty[i];  
  
    if (SNOW_yp[i] > SNOW_Browser_Height-50)   
    {  
        SNOW_xp[i] = Math.random()*(SNOW_Browser_Width-SNOW_am[i]-30);  
        SNOW_yp[i] = 0;  
        SNOW_stx[i] = 0.02 + Math.random()/10;  
        SNOW_sty[i] = 0.7 + Math.random();  
    }  
  
    SNOW_dx[i] += SNOW_stx[i];  
  
    document.getElementById("SNOW_flake"+i).style.top=SNOW_yp[i]+"px";  
    document.getElementById("SNOW_flake"+i).style.left=SNOW_xp[i] + SNOW_am[i]*Math.sin(SNOW_dx[i])+"px";  
}  
  
SNOW_Time = setTimeout("SNOW_Weather()", 10);  
  
}  
  
SNOW_Weather();  */

var snow = {

	wind : 0,
	maxXrange : 100,
	minXrange : 10,
	maxSpeed : 2,
	minSpeed : 1,
	color : "#fff",
	char : "*",
	maxSize : 35,
	minSize : 8,

	flakes : [],
	WIDTH : 0,
	HEIGHT : 0,

	init : function(nb){
		var o = this,
			frag = document.createDocumentFragment();
		o.getSize();

		

		for(var i = 0; i < nb; i++){
			var flake = {
				x : o.random(o.WIDTH),
				y : - o.maxSize,
				xrange : o.minXrange + o.random(o.maxXrange - o.minXrange),
				yspeed : o.minSpeed + o.random(o.maxSpeed - o.minSpeed, 100),
				life : 0,
				size : o.minSize + o.random(o.maxSize - o.minSize),
				html : document.createElement("span")
			};

			flake.html.style.position = "absolute";
			flake.html.style.top = flake.y + "px";
			flake.html.style.left = flake.x + "px";
			flake.html.style.fontSize = flake.size + "px";
			flake.html.style.color = o.color;
			flake.html.appendChild(document.createTextNode(o.char));

			frag.appendChild(flake.html);
			o.flakes.push(flake);
		}

		document.body.appendChild(frag);
		o.animate();
	},

	animate : function(){
		var o = this;
		for(var i = 0, c = o.flakes.length; i < c; i++){
			var flake = o.flakes[i],
				top = flake.y + flake.yspeed,
				left = flake.x + Math.sin(flake.life) * flake.xrange + o.wind;
			if(top < o.HEIGHT - flake.size - 10 && left < o.WIDTH - flake.size && left > 0){
				flake.html.style.top = top + "px";
				flake.html.style.left = left + "px";
				flake.y = top;
				flake.x += o.wind;
				flake.life+= .01;
			}
			else {
				flake.html.style.top = -o.maxSize + "px";
				flake.x = o.random(o.WIDTH);
				flake.y = -o.maxSize;
				flake.html.style.left = flake.x + "px";
				flake.life = 0;
			}
		}
		setTimeout(function(){
			o.animate();
		},20);
	},

	random : function(range, num){
		var num = num?num:1;
		return Math.floor(Math.random() * (range + 2) * num) / num;
	},

	getSize : function(){
		this.WIDTH = document.body.clientWidth || window.innerWidth;
		this.HEIGHT = document.body.clientHeight || window.innerHeight;
	}

};