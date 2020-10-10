(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.webFontTxtInst = {}; 
var loadedTypekitCount = 0;
var loadedGoogleCount = 0;
var gFontsUpdateCacheList = [];
var tFontsUpdateCacheList = [];
lib.ssMetadata = [
		{name:"yoga_atlas_1", frames: [[0,0,1776,1534]]},
		{name:"yoga_atlas_2", frames: [[0,0,1776,1534]]},
		{name:"yoga_atlas_3", frames: [[0,0,2000,1125]]},
		{name:"yoga_atlas_4", frames: [[1567,1430,230,182],[1293,1594,230,182],[1293,1110,459,318],[1744,1614,230,172],[1744,1788,230,172],[1026,1110,265,897],[0,0,1643,1108],[0,1110,1024,672],[590,1784,200,183],[792,1784,200,183],[1293,1430,272,162],[1512,1799,210,183],[0,1784,210,183],[1645,368,188,183],[1645,553,188,183],[1645,738,188,183],[1645,923,188,183],[1645,0,196,182],[1645,184,196,182],[1525,1614,217,183],[1293,1778,217,183],[1754,1108,188,182],[1799,1292,188,182],[212,1784,187,203],[401,1784,187,203]]}
];



lib.updateListCache = function (cacheList) {		
	for(var i = 0; i < cacheList.length; i++) {		
		if(cacheList[i].cacheCanvas)		
			cacheList[i].updateCache();		
	}		
};		

lib.addElementsToCache = function (textInst, cacheList) {		
	var cur = textInst;		
	while(cur != null && cur != exportRoot) {		
		if(cacheList.indexOf(cur) != -1)		
			break;		
		cur = cur.parent;		
	}		
	if(cur != exportRoot) {		
		var cur2 = textInst;		
		var index = cacheList.indexOf(cur);		
		while(cur2 != null && cur2 != cur) {		
			cacheList.splice(index, 0, cur2);		
			cur2 = cur2.parent;		
			index++;		
		}		
	}		
	else {		
		cur = textInst;		
		while(cur != null && cur != exportRoot) {		
			cacheList.push(cur);		
			cur = cur.parent;		
		}		
	}		
};		

lib.gfontAvailable = function(family, totalGoogleCount) {		
	lib.properties.webfonts[family] = true;		
	var txtInst = lib.webFontTxtInst && lib.webFontTxtInst[family] || [];		
	for(var f = 0; f < txtInst.length; ++f)		
		lib.addElementsToCache(txtInst[f], gFontsUpdateCacheList);		

	loadedGoogleCount++;		
	if(loadedGoogleCount == totalGoogleCount) {		
		lib.updateListCache(gFontsUpdateCacheList);		
	}		
};		

lib.tfontAvailable = function(family, totalTypekitCount) {		
	lib.properties.webfonts[family] = true;		
	var txtInst = lib.webFontTxtInst && lib.webFontTxtInst[family] || [];		
	for(var f = 0; f < txtInst.length; ++f)		
		lib.addElementsToCache(txtInst[f], tFontsUpdateCacheList);		

	loadedTypekitCount++;		
	if(loadedTypekitCount == totalTypekitCount) {		
		lib.updateListCache(tFontsUpdateCacheList);		
	}		
};
(lib.AnMovieClip = function(){
	this.actionFrames = [];
	this.gotoAndPlay = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndPlay.call(this,positionOrLabel);
	}
	this.play = function(){
		cjs.MovieClip.prototype.play.call(this);
	}
	this.gotoAndStop = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndStop.call(this,positionOrLabel);
	}
	this.stop = function(){
		cjs.MovieClip.prototype.stop.call(this);
	}
}).prototype = p = new cjs.MovieClip();
// symbols:



(lib.back = function() {
	this.initialize(img.back);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,572,3122);


(lib.backBlack = function() {
	this.initialize(img.backBlack);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,572,3122);


(lib.balasana = function() {
	this.initialize(ss["yoga_atlas_4"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.balasanaA = function() {
	this.initialize(img.balasanaA);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,2606,737);


(lib.balasanaBlack = function() {
	this.initialize(ss["yoga_atlas_4"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.belly = function() {
	this.initialize(img.belly);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1716,2053);


(lib.bellyBlack = function() {
	this.initialize(img.bellyBlack);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1716,2053);


(lib.bg = function() {
	this.initialize(ss["yoga_atlas_3"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.bgCards = function() {
	this.initialize(ss["yoga_atlas_4"]);
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.bhujanga = function() {
	this.initialize(ss["yoga_atlas_4"]);
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.bhujangaA = function() {
	this.initialize(img.bhujangaA);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,3082,1640);


(lib.bhujangaBlack = function() {
	this.initialize(ss["yoga_atlas_4"]);
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.body = function() {
	this.initialize(ss["yoga_atlas_4"]);
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.cards = function() {
	this.initialize(ss["yoga_atlas_4"]);
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.head = function() {
	this.initialize(ss["yoga_atlas_1"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.headBlack = function() {
	this.initialize(ss["yoga_atlas_2"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.hitLogo = function() {
	this.initialize(ss["yoga_atlas_4"]);
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.janu = function() {
	this.initialize(ss["yoga_atlas_4"]);
	this.gotoAndStop(8);
}).prototype = p = new cjs.Sprite();



(lib.januA = function() {
	this.initialize(img.januA);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,3364,1301);


(lib.januBlack = function() {
	this.initialize(ss["yoga_atlas_4"]);
	this.gotoAndStop(9);
}).prototype = p = new cjs.Sprite();



(lib.lotusBlack = function() {
	this.initialize(ss["yoga_atlas_4"]);
	this.gotoAndStop(10);
}).prototype = p = new cjs.Sprite();



(lib.marjariasana = function() {
	this.initialize(ss["yoga_atlas_4"]);
	this.gotoAndStop(11);
}).prototype = p = new cjs.Sprite();



(lib.marjariasanaA = function() {
	this.initialize(img.marjariasanaA);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,2470,1788);


(lib.marjariasanaA2 = function() {
	this.initialize(img.marjariasanaA2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,2280,1562);


(lib.marjariasanaBlack = function() {
	this.initialize(ss["yoga_atlas_4"]);
	this.gotoAndStop(12);
}).prototype = p = new cjs.Sprite();



(lib.matsyendra = function() {
	this.initialize(ss["yoga_atlas_4"]);
	this.gotoAndStop(13);
}).prototype = p = new cjs.Sprite();



(lib.matsyendraA = function() {
	this.initialize(img.matsyendraA);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,2280,1762);


(lib.matsyendraBlack = function() {
	this.initialize(ss["yoga_atlas_4"]);
	this.gotoAndStop(14);
}).prototype = p = new cjs.Sprite();



(lib.pavana = function() {
	this.initialize(ss["yoga_atlas_4"]);
	this.gotoAndStop(15);
}).prototype = p = new cjs.Sprite();



(lib.pavanaA = function() {
	this.initialize(img.pavanaA);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,2380,1328);


(lib.pavanaBlack = function() {
	this.initialize(ss["yoga_atlas_4"]);
	this.gotoAndStop(16);
}).prototype = p = new cjs.Sprite();



(lib.prasarita = function() {
	this.initialize(ss["yoga_atlas_4"]);
	this.gotoAndStop(17);
}).prototype = p = new cjs.Sprite();



(lib.prasaritaA = function() {
	this.initialize(img.prasaritaA);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,2768,1574);


(lib.prasaritaBlack = function() {
	this.initialize(ss["yoga_atlas_4"]);
	this.gotoAndStop(18);
}).prototype = p = new cjs.Sprite();



(lib.savasana = function() {
	this.initialize(ss["yoga_atlas_4"]);
	this.gotoAndStop(19);
}).prototype = p = new cjs.Sprite();



(lib.savasanaA = function() {
	this.initialize(img.savasanaA);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,3452,692);


(lib.savasanaBlack = function() {
	this.initialize(ss["yoga_atlas_4"]);
	this.gotoAndStop(20);
}).prototype = p = new cjs.Sprite();



(lib.title = function() {
	this.initialize(img.title);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,2613,734);


(lib.uttanasana = function() {
	this.initialize(ss["yoga_atlas_4"]);
	this.gotoAndStop(21);
}).prototype = p = new cjs.Sprite();



(lib.uttanasanaA = function() {
	this.initialize(img.uttanasanaA);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1234,2096);


(lib.uttanasanaBlack = function() {
	this.initialize(ss["yoga_atlas_4"]);
	this.gotoAndStop(22);
}).prototype = p = new cjs.Sprite();



(lib.viparita = function() {
	this.initialize(ss["yoga_atlas_4"]);
	this.gotoAndStop(23);
}).prototype = p = new cjs.Sprite();



(lib.viparitaA = function() {
	this.initialize(img.viparitaA);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1766,2605);


(lib.viparitaBlack = function() {
	this.initialize(ss["yoga_atlas_4"]);
	this.gotoAndStop(24);
}).prototype = p = new cjs.Sprite();
// helper functions:

function mc_symbol_clone() {
	var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop, this.reversed));
	clone.gotoAndStop(this.currentFrame);
	clone.paused = this.paused;
	clone.framerate = this.framerate;
	return clone;
}

function getMCSymbolPrototype(symbol, nominalBounds, frameBounds) {
	var prototype = cjs.extend(symbol, cjs.MovieClip);
	prototype.clone = mc_symbol_clone;
	prototype.nominalBounds = nominalBounds;
	prototype.frameBounds = frameBounds;
	return prototype;
	}


(lib.viparita_1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_1 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(1));

	// Layer_1
	this.instance = new lib.viparita();

	this.instance_1 = new lib.viparitaBlack();

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,187,203);


(lib.uttanasana_1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_1 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(1));

	// Layer_1
	this.instance = new lib.uttanasana();

	this.instance_1 = new lib.uttanasanaBlack();

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,188,182);


(lib.url = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_1 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(1));

	// Layer_1
	this.text = new cjs.Text("הפקולטה לטכנולוגיות למידה", "normal 700 22px 'Rubik'", "#75322D");
	this.text.textAlign = "center";
	this.text.lineHeight = 29;
	this.text.lineWidth = 270;
	this.text.parent = this;
	this.text.setTransform(128.15,-19.3);
	if(!lib.properties.webfonts['Rubik']) {
		lib.webFontTxtInst['Rubik'] = lib.webFontTxtInst['Rubik'] || [];
		lib.webFontTxtInst['Rubik'].push(this.text);
	}

	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#75322D").ss(3,1,1).p("A1bAAMAq3AAA");
	this.shape.setTransform(128.175,7.15);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(204,102,102,0.008)").s().p("A2iFmIAArLMAtFAAAIAALLgAVIBDMgq4AAAg");
	this.shape_1.setTransform(130.25,0.45);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#75322D").ss(3,1,1).p("A3bAAIAoAAMAtEAAAIBLAA");
	this.shape_2.setTransform(132,7.25);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("rgba(204,102,102,0.008)").s().p("A2iFmIAAkiIAAmpMAtFAAAIAAGpMgtFAAAMAtFAAAIAAEigAWjBEg");
	this.shape_3.setTransform(130.25,0.45);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape},{t:this.text,p:{x:128.15,y:-19.3,font:"normal 700 22px 'Rubik'",lineHeight:28.85,lineWidth:270}}]}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.text,p:{x:132,y:-21.65,font:"normal 700 24px 'Rubik'",lineHeight:31.3,lineWidth:296}}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-19.4,-35.4,302.9,71.69999999999999);


(lib.savasana_1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_1 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(1));

	// Layer_1
	this.instance = new lib.savasana();

	this.instance_1 = new lib.savasanaBlack();

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,217,183);


(lib.prasarita_1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_1 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(1));

	// Layer_1
	this.instance = new lib.prasarita();

	this.instance_1 = new lib.prasaritaBlack();

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,196,182);


(lib.pavana_1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_1 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(1));

	// Layer_1
	this.instance = new lib.pavana();

	this.instance_1 = new lib.pavanaBlack();

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,188,183);


(lib.matsyendra_1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_1 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(1));

	// Layer_1
	this.instance = new lib.matsyendra();

	this.instance_1 = new lib.matsyendraBlack();

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,188,183);


(lib.marjariasana_1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_1 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(1));

	// Layer_1
	this.instance = new lib.marjariasana();

	this.instance_1 = new lib.marjariasanaBlack();

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,210,183);


(lib.levelsText = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_1 = function() {
		this.play();
	}
	this.frame_9 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(8).call(this.frame_9).wait(1));

	// Layer_1
	this.levelsText = new cjs.Text("עברו/לחצו על אחת מרמות הקושי", "normal 500 17px 'Rubik'", "#75322D");
	this.levelsText.name = "levelsText";
	this.levelsText.textAlign = "right";
	this.levelsText.lineHeight = 22;
	this.levelsText.lineWidth = 134;
	this.levelsText.parent = this;
	this.levelsText.setTransform(136.2,2);
	if(!lib.properties.webfonts['Rubik']) {
		lib.webFontTxtInst['Rubik'] = lib.webFontTxtInst['Rubik'] || [];
		lib.webFontTxtInst['Rubik'].push(this.levelsText);
	}

	this.timeline.addTween(cjs.Tween.get(this.levelsText).wait(1).to({rotation:-14.9992,x:128.25,y:-14.6},0).wait(2).to({rotation:14.9994,x:139.65,y:20.25},0).wait(2).to({rotation:-14.9992,x:128.25,y:-14.6},0).wait(2).to({rotation:14.9994,x:139.65,y:20.25},0).wait(2).to({rotation:0,x:136.2,y:2},0).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-3.8,-17,145.9,82.3);


(lib.janu_1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_1 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(1));

	// Layer_1
	this.instance = new lib.janu();

	this.instance_1 = new lib.januBlack();

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,200,183);


(lib.head_1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_1 = function() {
		this.stop();
	}
	this.frame_2 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(1).call(this.frame_2).wait(1));

	// Layer_1
	this.instance = new lib.head();
	this.instance.setTransform(46.2,8.65,0.0277,0.0277,0,14.8642,-165.1358);

	this.instance_1 = new lib.headBlack();
	this.instance_1.setTransform(46.2,8.65,0.0277,0.0277,0,14.9253,-165.0747);

	this.text = new cjs.Text("ראש", "normal 500 20px 'Rubik'", "#F8958F");
	this.text.lineHeight = 26;
	this.text.lineWidth = 39;
	this.text.parent = this;
	this.text.setTransform(-2.45,47.95);
	if(!lib.properties.webfonts['Rubik']) {
		lib.webFontTxtInst['Rubik'] = lib.webFontTxtInst['Rubik'] || [];
		lib.webFontTxtInst['Rubik'].push(this.text);
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance,p:{scaleX:0.0277,scaleY:0.0277,skewX:14.8642,skewY:-165.1358,x:46.2,y:8.65}}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance,p:{scaleX:0.0315,scaleY:0.0315,skewX:14.8367,skewY:-165.1633,x:50.25,y:6.6}},{t:this.text}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-16.2,-7.7,66.5,81.7);


(lib.exitBtn = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_1 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(1));

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(11,1,1).p("AAAAAIBlBmAAAAAIhkBmABlhlIhlBlAhkhlIBkBl");
	this.shape.setTransform(-38.65,1.85);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#000000").ss(11,1,1).p("AAAAAIChChAAAAAIigChAigigICgCgAChigIihCg");
	this.shape_1.setTransform(-38.625,1.825);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-60.2,-19.8,43.2,43.3);


(lib.cards_1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_1 = function() {
		this.stop();
	}
	this.frame_2 = function() {
		this.stop();
	}
	this.frame_3 = function() {
		this.stop();
	}
	this.frame_4 = function() {
		this.stop();
	}
	this.frame_5 = function() {
		this.stop();
	}
	this.frame_6 = function() {
		this.stop();
	}
	this.frame_7 = function() {
		this.stop();
	}
	this.frame_8 = function() {
		this.stop();
	}
	this.frame_9 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(1).call(this.frame_2).wait(1).call(this.frame_3).wait(1).call(this.frame_4).wait(1).call(this.frame_5).wait(1).call(this.frame_6).wait(1).call(this.frame_7).wait(1).call(this.frame_8).wait(1).call(this.frame_9).wait(1));

	// Layer_1
	this.text = new cjs.Text(".שכבו על הבטן עם הדיים\n\nהניחו את כפות הידיים מתחת לכתפיים כך שקצות האצבעות יהיו בקו \n.אחד עם רוב הכתף\n \nהרחיקו כתפיים מהאוזניים, מתחו את הצוואר והצמידו מרפקים אל הצלעות\n.הביטו קדימה או הורידו את ראשכם לאחור כדי לחזק את המתיחה\n\nהרימו באיטיות את הראש ואת בית החזה עד אזור הטבור, כך שיווצר\n .קימור עדין בגב התחתון \n\nשמרו על הגוף במצב זה למשך 5 נשימות עמוקות, ולבסוף הוציאו אוויר\n .בזמן שאתם משטחים את הבטן בחזרה על הרצפה", "normal 400 20px 'Rubik'", "#75322D");
	this.text.textAlign = "right";
	this.text.lineHeight = 24;
	this.text.lineWidth = 648;
	this.text.parent = this;
	this.text.setTransform(916.9,202.25);
	if(!lib.properties.webfonts['Rubik']) {
		lib.webFontTxtInst['Rubik'] = lib.webFontTxtInst['Rubik'] || [];
		lib.webFontTxtInst['Rubik'].push(this.text);
	}

	this.instance = new lib.bhujangaA();
	this.instance.setTransform(10,317,0.1793,0.1793);

	this.instance_1 = new lib.bgCards();
	this.instance_1.setTransform(-48,298,0.8912,0.8912);

	this.text_1 = new cjs.Text(".1\n\n.2\n\n\n.3\n\n\n.4\n\n\n.5", "normal 400 20px 'Rubik'", "#75322D");
	this.text_1.textAlign = "right";
	this.text_1.lineHeight = 24;
	this.text_1.lineWidth = 24;
	this.text_1.parent = this;
	this.text_1.setTransform(944.95,204.1);
	if(!lib.properties.webfonts['Rubik']) {
		lib.webFontTxtInst['Rubik'] = lib.webFontTxtInst['Rubik'] || [];
		lib.webFontTxtInst['Rubik'].push(this.text_1);
	}

	this.text_2 = new cjs.Text("?איך מבצעים את התנוחה", "bold 22px 'Rubik'", "#75322D");
	this.text_2.textAlign = "right";
	this.text_2.lineHeight = 30;
	this.text_2.lineWidth = 294;
	this.text_2.parent = this;
	this.text_2.setTransform(916.9,150.05);

	this.text_3 = new cjs.Text(",תנועה המחזקת מאוד את הגב התחתון, פותחת את בית החזה .מפעילה את הבטן והזרועות", "normal 400 22px 'Rubik'", "#75322D");
	this.text_3.textAlign = "center";
	this.text_3.lineHeight = 28;
	this.text_3.lineWidth = 614;
	this.text_3.parent = this;
	this.text_3.setTransform(451.7,84.6);
	if(!lib.properties.webfonts['Rubik']) {
		lib.webFontTxtInst['Rubik'] = lib.webFontTxtInst['Rubik'] || [];
		lib.webFontTxtInst['Rubik'].push(this.text_3);
	}

	this.text_4 = new cjs.Text("תנוחת הקוברה\n Bhujanga Asana\n", "normal 500 30px 'Rubik'", "#75322D");
	this.text_4.textAlign = "center";
	this.text_4.lineHeight = 38;
	this.text_4.lineWidth = 399;
	this.text_4.parent = this;
	this.text_4.setTransform(446.8,-12.6);
	if(!lib.properties.webfonts['Rubik']) {
		lib.webFontTxtInst['Rubik'] = lib.webFontTxtInst['Rubik'] || [];
		lib.webFontTxtInst['Rubik'].push(this.text_4);
	}

	this.instance_2 = new lib.cards();
	this.instance_2.setTransform(-84,-65,0.691,0.6381);

	this.instance_3 = new lib.pavanaA();
	this.instance_3.setTransform(8,374,0.1566,0.1566);

	this.instance_4 = new lib.matsyendraA();
	this.instance_4.setTransform(-37,299,0.1605,0.1605);

	this.instance_5 = new lib.januA();
	this.instance_5.setTransform(-139,427,0.1483,0.1483);

	this.instance_6 = new lib.marjariasanaA();
	this.instance_6.setTransform(6,180,0.1146,0.1146);

	this.instance_7 = new lib.marjariasanaA2();
	this.instance_7.setTransform(10,390,0.1225,0.1225);

	this.instance_8 = new lib.balasanaA();
	this.instance_8.setTransform(-30,438,0.1935,0.1935);

	this.instance_9 = new lib.uttanasanaA();
	this.instance_9.setTransform(35,248,0.1588,0.1588);

	this.instance_10 = new lib.viparitaA();
	this.instance_10.setTransform(-11,180,0.1563,0.1563);

	this.instance_11 = new lib.savasanaA();
	this.instance_11.setTransform(-31,485,0.1128,0.1128);

	this.instance_12 = new lib.prasaritaA();
	this.instance_12.setTransform(-54,331,0.1475,0.1475);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_2},{t:this.text_4,p:{text:"תנוחת הקוברה\n Bhujanga Asana\n",x:446.8,lineWidth:399}},{t:this.text_3,p:{text:",תנועה המחזקת מאוד את הגב התחתון, פותחת את בית החזה .מפעילה את הבטן והזרועות"}},{t:this.text_2},{t:this.text_1,p:{x:944.95,y:204.1,text:".1\n\n.2\n\n\n.3\n\n\n.4\n\n\n.5",lineWidth:24}},{t:this.instance_1,p:{x:-48,y:298}},{t:this.instance},{t:this.text,p:{x:916.9,y:202.25,text:".שכבו על הבטן עם הדיים\n\nהניחו את כפות הידיים מתחת לכתפיים כך שקצות האצבעות יהיו בקו \n.אחד עם רוב הכתף\n \nהרחיקו כתפיים מהאוזניים, מתחו את הצוואר והצמידו מרפקים אל הצלעות\n.הביטו קדימה או הורידו את ראשכם לאחור כדי לחזק את המתיחה\n\nהרימו באיטיות את הראש ואת בית החזה עד אזור הטבור, כך שיווצר\n .קימור עדין בגב התחתון \n\nשמרו על הגוף במצב זה למשך 5 נשימות עמוקות, ולבסוף הוציאו אוויר\n .בזמן שאתם משטחים את הבטן בחזרה על הרצפה",lineWidth:648}}]}).to({state:[{t:this.instance_2},{t:this.text_4,p:{text:"תנוחת שחרור הרוח\nPavana Muktasana  ",x:446.8,lineWidth:399}},{t:this.text_3,p:{text:"תנוחה זו מאפשרת להאיץ ולווסת את פעולתם של המעיים, ולכן מומלץ .לתרגל אותה בשעות הערב והבוקר"}},{t:this.text_2},{t:this.text_1,p:{x:916.9,y:204.35,text:" .שכבו על הגב, הרפו את השרירים וכופפו את הברכיים כלפיי מעלה\n\n.קחו שאיפה עמוקה של אוויר ואז חבקו עם שתי הידיים את ברכיכם\n\n.שחררו את האוויר, המשיכו לחבק את הברכיים והצמידו אותן לבטן\n\nהמשיכו לבצע את התרגיל מספר פעמים: בכל פעם שאתם לוקחים אוויר ,הרגליים מתרחקות מבית החזה, ובכל פעם שאתם משחררים אוויר .הרגליים מוצמדות חזרה לבית החזה\n\n .הקפידו לקחת נשימות ארוכות והקפידו על עבודה נכונה של הסרעפת",lineWidth:578}},{t:this.text,p:{x:944.95,y:204.1,text:".1\n\n.2\n\n.3\n\n.4\n\n\n\n.5",lineWidth:24}},{t:this.instance_1,p:{x:-48,y:298}},{t:this.instance_3}]},1).to({state:[{t:this.instance_2},{t:this.text_4,p:{text:"תנוחת הפיתול\nMatsyendra Asana",x:446.8,lineWidth:399}},{t:this.text_3,p:{text:"  תנוחה זו מחזקת את מערכת העצבים והרצועות של עמוד השדרה ומשפרת את העיכול, לוחצת קלות על הבטן ומחזירה את הדם שהצטבר .בה למחזור זרימה תקין"}},{t:this.text_2},{t:this.text_1,p:{x:944.95,y:204.1,text:".1\n\n.2\n\n.3\n\n\n\n.4\n\n\n\n.5",lineWidth:24}},{t:this.instance_1,p:{x:-48,y:298}},{t:this.instance_4},{t:this.text,p:{x:916.9,y:202.25,text:".התיישבו על צד ימין, קרבו את עקב רגל ימין לישבן קרוב ככל האפשר\n\n.העמידו את רגל שמאל מהצד החיצוני של ברך ימין\n\nשאפו פנימה, הרימו ידיים לצדדים, נשפו, פתלו את הגוף שמאלה. העבירו את יד ימין אל מעבר לרגל העומדת .כיוון היד הוא לנסות ולאחוז בכף הרגל .השמאלית\n\nהעמידו את יד שמאל על הרצפה או חבקו את הגוף כך שיד שמאל תגיע לירך ימין וסובבו את כל הגוף שמאלה תוך הקפדה על גוף וראש זקופים. שמרו על .הכתפיים באותו הקו\n\n.נסו להתרכז בדבר אחד, במקום הלחץ בעמוד השדרה או בנשימה שלכם",lineWidth:606}}]},1).to({state:[{t:this.instance_2},{t:this.text_4,p:{text:"תנוחת הראש לברך\nJanu sirsasana  ",x:446.8,lineWidth:399}},{t:this.text_3,p:{text:"תנוחה זו דורשת גמישות גבוהה, זוהי תנוחה המסייעת לזרימת דם .באזור הפנים והצוואר ולשחרור מתחים"}},{t:this.text_2},{t:this.text_1,p:{x:944.95,y:204.1,text:".1\n\n.2\n\n\n.3\n\n\n\n.4\n\n\n.5\n\n.6",lineWidth:24}},{t:this.instance_1,p:{x:-49,y:295}},{t:this.instance_5},{t:this.text,p:{x:916.9,y:202.25,text:".שבו על הרצפה עם רגליים ישרות לפנים וידיים לצדי הגוף\n\n.קפלו את רגל ימין כך שכף הרגל תהיה צמודה לשוק השמאלית ולאגן\n.הרימו את הזרועות מהצדדים כלפי מעלה בעודן ישרות, עד שיגיעו לצדי הראש\n\n כופפו את פלג הגוף העליון ובמקביל הורידו את הידיים מלפני הגוף הרי רחוק שתוכלו. נסו להקיף עם הידיים את כף הרגל השמאלית או הניחו אותן על .הנקודה הרחוקה ביותר שאליה אתם מגיעים, על רגל זו\n\nהשעינו את זרועותיכם על הרצפה או איחזו את כף הרגל ואת סנטר על רגל .שמאל, במידה וקשה להגיע לכף הרגל ניתן לאחוז עם בד ולמתוח\n\n.הישארו בתנוחה זו למשך כ-10 שניות, בזמן שאתם שואפים ונושפים אוויר\n\n.שחררו את כל הגוף ובצעו את התרגיל לצד השני",lineWidth:618}}]},1).to({state:[{t:this.instance_2},{t:this.text_4,p:{text:"תנוחת החתול\nMarjariasana",x:453.5,lineWidth:413}},{t:this.text_3,p:{text:"תנוחה העוזרת לשמור על גמישות בעמוד השדרה ומפעילה את .השרירים באזור הגב העליון והשכמות"}},{t:this.text_2},{t:this.text_1,p:{x:944.95,y:204.1,text:".1\n\n.2\n\n.3\n\n.4\n\n\n.5\n\n\n\n.6",lineWidth:24}},{t:this.instance_1,p:{x:-48,y:297}},{t:this.instance_7},{t:this.instance_6},{t:this.text,p:{x:916.9,y:202.25,text:".הניחו את כפות הידיים על הרצפה כך שיהיו בקו ישר עם הכתפיים\n\n.הניחו את הברכיים על הרצפה כך שיהיו בקו ישר עם האגן\n\n.לאורך כל התנוחה כפות הידיים דוחפות מטה, הזרועות ישרות וארוכות\n\nבגב קעור, הרימו את הסנטר מעט מעלה. השכמות מתקרבות אחת אל .השנייה ועצם הזנב מתגלגל בעדינות לכיוון התקרה\n\nבגב קמור, הסנטר לכיוון השקע שבין עצמות הבריח, השכמות נפרשות ומתרחקות אחת מהשנייה ועצם הזנב מתגלגל לכיוון הברכיים כך שהאגן נוטה .לאחור\n\n.מומלץ לשאוף בגב קעור ולנשוף בגב קמור",lineWidth:612}}]},1).to({state:[{t:this.instance_2},{t:this.text_4,p:{text:"תנוחת הילד\nBalasana",x:453.5,lineWidth:413}},{t:this.text_3,p:{text:"תנוחה היוצרת שחרור לכל מרחב הגב, מתחים ולחצים בגב, בצוואר ובכתפיים, כמו גם להשתקת מחשבות ולהזרמת חמצן למוח, ולכן הוא .פתרון מעולה לכאבי ראש "}},{t:this.text_2},{t:this.text_1,p:{x:944.95,y:204.1,text:".1\n\n\n.2\n\n\n.3\n\n\n.4\n\n",lineWidth:24}},{t:this.text,p:{x:916.9,y:202.25,text:"נעמדים על הברכיים כשהן צמודות זו לזו גב כפות הרגליים מונחות על הקרקע .כך שהבהונות תהיינה בסמיכות\n\nהורידו את האגן לעבר העקבים כך שאפשר יהיה להרגיש את עצמות הישיבה .מונחות על העקבים\n\nשלחו את הגוף והידיים לפנים, הבטן מונחת על הירכיים, שחררו את הכתפיים .והזרועות לכיוון הרצפה\n\n.הישארו בתנוחה לפי הצורך",lineWidth:612}},{t:this.instance_1,p:{x:-47,y:297}},{t:this.instance_8}]},1).to({state:[{t:this.instance_2},{t:this.text_4,p:{text:"כיפוף לפנים מעמידה\nUttanasana",x:453.5,lineWidth:413}},{t:this.text_3,p:{text:".תנוחה זו בעלת השפעה מרגיעת סטרס ומעוררת את מערכת העיכול"}},{t:this.text_2},{t:this.text_1,p:{x:944.95,y:204.1,text:".1\n\n.2\n\n.3",lineWidth:24}},{t:this.text,p:{x:916.9,y:202.25,text:".רגליים בפישוק קל\n\n.הרימו את הזרועות דרך צידי הגוף אל השמיים, כך שהן ייפגשו כף אל כף\n\nהאגן נע לאחור ומתוך תנועת האגן לאחור הגוף בא קדימה ויורד כלפי מטה .כשהראש מגיע אחרון לקרקע",lineWidth:612}},{t:this.instance_1,p:{x:-48,y:298}},{t:this.instance_9}]},1).to({state:[{t:this.instance_2},{t:this.text_4,p:{text:"תנוחת הרגליים על הקיר\nViparita Karan",x:453.5,lineWidth:413}},{t:this.text_3,p:{text:"תנוחה המסייעת להורדת תשישות, הרמת הרגליים עוזרת לחמצן לזרום .הישר למוח, מומלץ להרגעת כאבי ראש"}},{t:this.text_2},{t:this.text_1,p:{x:944.95,y:204.1,text:".1\n\n.2\n\n\n.3\n\n.4",lineWidth:24}},{t:this.text,p:{x:916.9,y:202.25,text:".שבו ליד הקיר, כאשר פניכם פונות אליו וישבנכם צמוד אליו\n\nהישכבו על הגב. מומלץ להניח כרית קטנה או מגבת מקופלת מתחת לגב .התחתון, כדי למנוע כאבים באזור זה\n\n.הרימו את הרגליים והשעינו אותן על הקיר בעודן ישרות\n\n.הישארו בתנוחה זו למשך כמה שניות וחזרו על התרגיל כמה פעמים לפי הצורך",lineWidth:620}},{t:this.instance_1,p:{x:-48,y:298}},{t:this.instance_10}]},1).to({state:[{t:this.instance_2},{t:this.text_4,p:{text:"תנוחת הגוויה\nSavasana",x:453.5,lineWidth:413}},{t:this.text_3,p:{text:"תנוחה המסייעת לשחרור מתחים וכאבי ראש, תנוחה זו מקלה גם על .כאבי גב ועוזרת להירדם בקלות"}},{t:this.text_2},{t:this.text_1,p:{x:944.95,y:204.1,text:".1\n\n\n.2\n\n\n.3\n\n.4\n\n.5\n\n\n.6\n\n.7",lineWidth:24}},{t:this.instance_1,p:{x:-49,y:297}},{t:this.instance_11},{t:this.text,p:{x:916.9,y:202.25,text:".שכבו על גבכם, פרשו בעדינות את זרועותיכם כשכפות הידיים מופנות כלפי .מעלה הניחו מגבת מגולגלת או קצה של כרית תחת ראשכם וצווארכם\n\nהרפו את גופכם בהדרגה, מלמטה למעלה: החלו בבהונות רגליכם ועלו מעלה .בשחרור והרפיית הגוף עד קצה הראש\n\n.עצמו את העיניים והתרכזו בהרפיית הגוף\n\n.בצעו 20 מחזורי נשימה: שאפו אוויר פנימה ונשפו אותו החוצה בהדרגה ובאטיות\n\nלאחר 20 מחזורים הפסיקו לספור ונשמו באופן חופשי. תנו למחשבות שלכם .לצוף. והימנעו מלהתרכז במחשבה כזו או אחרת\n\n.הישארו בשכיבה ותסתובבו לצד ימין עוד דקה או שתיים בעיציים עצומות\n\n.פקחו את העיניים וקומו לאט לאט, או צללו לשינה טובה",lineWidth:620}}]},1).to({state:[{t:this.instance_2},{t:this.text_4,p:{text:"כיפוף קדימה בפישוק רגליים\nprasarita padottanasana",x:453.5,lineWidth:413}},{t:this.text_3,p:{text:"תנוחה המחזקת ומותחת את הירכיים, השוקיים, הרגליים, הגב ועמוד .השדרה יכולה אף להקל על כאבי ראש הנובעים ממתח ועייפות"}},{t:this.text_2},{t:this.text_1,p:{x:944.95,y:202.25,text:".1\n\n.2\n\n.3\n\n.4\n\n.5\n\n.6\n\n\n.7\n\n.8",lineWidth:24}},{t:this.instance_1,p:{x:-47,y:298}},{t:this.instance_12},{t:this.text,p:{x:916.9,y:202.25,text:".עמדו עם הרגליים בפישוק כשכפות הרגליים מקבילות\n\n.הניחו את הידיים על האגן\n\n.דאגו שכפות הרגליים הפנימיות מקבילות אחת לשנייה\n\n.נשמו, השענו קדימה ממפרק הירך כשפלג הגוף העליון מקביל לרצפה\n\n.הוציאו אוויר באיטיות והתכופפו קדימה\n\nהרחיבו את הפישוק ברגליים כך שיהיו במרחק של כמטר אחת .מהשנייה בזמן שהעקבים מופנים כלפי חוץ\n\n.כופפו את הברכיים קלות והרגישו את המתיחה בגב התחתון\n\nהחזיקו את התנוחה למשך 5 נשימות עמוקות. הנמיכו את הידיים לכיוון .הרצפה כדי לשפר את המתיחה",lineWidth:548}}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-139,-65,1190.3,716.1);


(lib.bodyText = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_1 = function() {
		this.play();
	}
	this.frame_9 = function() {
		this.stop()
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(8).call(this.frame_9).wait(1));

	// Layer_1
	this.bodyText = new cjs.Text("עברו/לחצו על אחד מאזורי הגוף", "normal 500 17px 'Rubik'", "#74322C");
	this.bodyText.name = "bodyText";
	this.bodyText.textAlign = "right";
	this.bodyText.lineHeight = 22;
	this.bodyText.lineWidth = 122;
	this.bodyText.parent = this;
	this.bodyText.setTransform(124.45,2);
	if(!lib.properties.webfonts['Rubik']) {
		lib.webFontTxtInst['Rubik'] = lib.webFontTxtInst['Rubik'] || [];
		lib.webFontTxtInst['Rubik'].push(this.bodyText);
	}

	this.timeline.addTween(cjs.Tween.get(this.bodyText).wait(1).to({rotation:-14.9992,x:116.4909,y:-13.0741},0).wait(2).to({rotation:14.9994,x:128.4404,y:18.7241},0).wait(2).to({rotation:-14.9992,x:116.4909,y:-13.0741},0).wait(2).to({rotation:14.9994,x:128.4404,y:18.7241},0).wait(2).to({rotation:0,x:124.45,y:2},0).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-4.2,-15.5,135.1,81.2);


(lib.body_1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.body();
	this.instance.setTransform(0,0,0.6264,0.6264);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.body_1, new cjs.Rectangle(0,0,166,561.9), null);


(lib.bhujanga_1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_1 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(1));

	// Layer_1
	this.instance = new lib.bhujanga();

	this.instance_1 = new lib.bhujangaBlack();

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,230,172);


(lib.bg_1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.bg();
	this.instance.setTransform(0,0,0.6391,0.6409);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.bg_1, new cjs.Rectangle(0,0,1278.3,721), null);


(lib.belly_1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_1 = function() {
		this.stop();
	}
	this.frame_2 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(1).call(this.frame_2).wait(1));

	// Layer_1
	this.instance = new lib.belly();
	this.instance.setTransform(0,9.2,0.0207,0.0207,-14.9667);

	this.instance_1 = new lib.bellyBlack();
	this.instance_1.setTransform(0,9.25,0.0207,0.0207,-14.9586);

	this.text = new cjs.Text("בטן", "normal 500 20px 'Rubik'", "#F8958F");
	this.text.lineHeight = 26;
	this.text.parent = this;
	this.text.setTransform(26.5,48.75,0.9999,0.9999,-29.9997);
	if(!lib.properties.webfonts['Rubik']) {
		lib.webFontTxtInst['Rubik'] = lib.webFontTxtInst['Rubik'] || [];
		lib.webFontTxtInst['Rubik'].push(this.text);
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance,p:{scaleX:0.0207,scaleY:0.0207,rotation:-14.9667,x:0,y:9.2}}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance,p:{scaleX:0.0253,scaleY:0.0253,rotation:-14.9002,x:-4.65,y:5.45}},{t:this.text}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-4.6,-5.7,71.5,78.3);


(lib.beginnersBtn = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_1 = function() {
		this.stop();
	}
	this.frame_2 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(1).call(this.frame_2).wait(1));

	// Layer_1
	this.beginnersH = new cjs.Text("מתחילים", "normal 400 20px 'Rubik'", "#75322D");
	this.beginnersH.name = "beginnersH";
	this.beginnersH.textAlign = "right";
	this.beginnersH.lineHeight = 26;
	this.beginnersH.lineWidth = 73;
	this.beginnersH.parent = this;
	this.beginnersH.setTransform(98.35,12.15);
	if(!lib.properties.webfonts['Rubik']) {
		lib.webFontTxtInst['Rubik'] = lib.webFontTxtInst['Rubik'] || [];
		lib.webFontTxtInst['Rubik'].push(this.beginnersH);
	}

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#F5918B").s().p("AmxB3QizgxAAhGQAAhFCzgxQC0gyD9AAQD+AACzAyQC0AxAABFQAABGi0AxQizAyj+AAQj9AAi0gyg");
	this.shape.setTransform(63.25,22.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#929292").s().p("AmxB3QizgxAAhGQAAhFCzgxQC0gyD9AAQD+AACzAyQC0AxAABFQAABGi0AxQizAyj+AAQj9AAi0gyg");
	this.shape_1.setTransform(63.25,22.8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#000000").ss(4,1,1).p("ALmAHQgFAxhGAqQg1AfhaAaQjZBBkzAAQkyAAjZhBQjahAAAhbQAAhaDahBQBPgXBcgPQCfgaDBAAQEzAADZBAQDGA7ASBR");
	this.shape_2.setTransform(63.025,23);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#F5918B").s().p("An8CMQjUg6AAhSQAAhRDUg7QDSg6EqAAQBLAABGAEQDPALCeArQDTA7AABRQAABSjTA6QieAsjPALQhGAEhLAAQkqAAjSg7g");
	this.shape_3.setTransform(63.25,23.025);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape},{t:this.beginnersH,p:{y:12.15,color:"#75322D",x:98.35,font:"normal 400 20px 'Rubik'",lineHeight:25.7,lineWidth:73}}]}).to({state:[{t:this.shape_1},{t:this.beginnersH,p:{y:11.55,color:"#4B4B4B",x:98.35,font:"normal 400 20px 'Rubik'",lineHeight:25.7,lineWidth:73}}]},1).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.beginnersH,p:{y:11.55,color:"#75322D",x:100.95,font:"normal 400 22px 'Rubik'",lineHeight:28.1,lineWidth:79}}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-13.1,-1,152.29999999999998,48);


(lib.balasana_1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_1 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(1));

	// Layer_1
	this.instance = new lib.balasana();

	this.instance_1 = new lib.balasanaBlack();

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,230,182);


(lib.back_1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_1 = function() {
		this.stop();
	}
	this.frame_2 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(1).call(this.frame_2).wait(1));

	// Layer_1
	this.instance = new lib.back();
	this.instance.setTransform(18.05,0,0.0316,0.0316,0,0,180);

	this.instance_1 = new lib.backBlack();
	this.instance_1.setTransform(18.1,0,0.0316,0.0316,0,0,180);

	this.text = new cjs.Text("גב", "normal 500 20px 'Rubik'", "#F8958F");
	this.text.lineHeight = 26;
	this.text.lineWidth = 24;
	this.text.parent = this;
	this.text.setTransform(-19.8682,7.7615,0.9386,1,-59.9984);
	if(!lib.properties.webfonts['Rubik']) {
		lib.webFontTxtInst['Rubik'] = lib.webFontTxtInst['Rubik'] || [];
		lib.webFontTxtInst['Rubik'].push(this.text);
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance,p:{scaleX:0.0316,scaleY:0.0316,x:18.05,y:0}}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance,p:{scaleX:0.0403,scaleY:0.0403,x:20.05,y:-14}},{t:this.text}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-22.5,-14,42.6,125.8);


(lib.arrow2 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(2,1,1).p("AhNAxQAAgpg0gwQABAAABABQABgBAAABQCxAYBPBxAgnhhQgcAng+AS");
	this.shape.setTransform(-3.175,-15.5875);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.arrow2, new cjs.Rectangle(-17.1,-26.3,27.900000000000002,21.5), null);


(lib.arrow = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(2,1,1).p("AhthpQAAgqg0gxQABABABAAQABAAAAAAQFhAxglGQAhHj8QgcAng+AR");
	this.shape.setTransform(16.1695,25.9);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.arrow, new cjs.Rectangle(-1,-0.4,34.4,52.699999999999996), null);


(lib.advancedBtn = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_1 = function() {
		this.stop();
	}
	this.frame_2 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(1).call(this.frame_2).wait(1));

	// Layer_1
	this.advancedH = new cjs.Text("מתקדמים", "normal 400 20px 'Rubik'", "#FFFFFF");
	this.advancedH.name = "advancedH";
	this.advancedH.textAlign = "right";
	this.advancedH.lineHeight = 26;
	this.advancedH.lineWidth = 80;
	this.advancedH.parent = this;
	this.advancedH.setTransform(95.35,12.2);
	if(!lib.properties.webfonts['Rubik']) {
		lib.webFontTxtInst['Rubik'] = lib.webFontTxtInst['Rubik'] || [];
		lib.webFontTxtInst['Rubik'].push(this.advancedH);
	}

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#C35A10").s().p("AmwB4Qi0gyAAhGQAAhFC0gyQCzgxD9AAQD+AAC0AxQCzAyAABFQAABGizAyQi0Axj+AAQj9AAizgxg");
	this.shape.setTransform(57.35,22.25);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#929292").s().p("AmwB4Qi0gyAAhGQAAhFC0gyQCzgxD9AAQD+AAC0AxQCzAyAABFQAABGizAyQi0Axj+AAQj9AAizgxg");
	this.shape_1.setTransform(57.35,22.25);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#000000").ss(2,1,1).p("AAAgKIAAAEQABAFAAAFQAAAAAAABIAAAG");
	this.shape_2.setTransform(129.1125,21.5875);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#000000").ss(4,1,1).p("ALmAHQgFAxhGAqQg1AfhaAbQjZBAkzAAQkyAAjZhAQjahBAAhbQAAhaDahAQBPgYBcgPQCfgaDBAAQEzAADZBBQDGA6ASBR");
	this.shape_3.setTransform(55.0125,22.05);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#C35A10").s().p("AoGCPQjWg7AAhUQAAhFCYg2QAcgJAigKQDXg7EvAAQBMAABHAEQDTALChAsQDDA3ASBJIABAEIABAKIAAABIgBAHQgJBOjNA5Qg1APg5ALQh4AWiOAIQhHADhMAAQkvAAjXg7g");
	this.shape_4.setTransform(55.85,21.975);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape},{t:this.advancedH,p:{color:"#FFFFFF",x:95.35,y:12.2,font:"normal 400 20px 'Rubik'",lineHeight:25.7,lineWidth:80}}]}).to({state:[{t:this.shape_1},{t:this.advancedH,p:{color:"#4B4B4B",x:95.35,y:12.2,font:"normal 400 20px 'Rubik'",lineHeight:25.7,lineWidth:80}}]},1).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.advancedH,p:{color:"#FFFFFF",x:99.45,y:9.95,font:"normal 400 22px 'Rubik'",lineHeight:28.1,lineWidth:88}}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-21.1,-1.9,152.29999999999998,48);


(lib.aboutBtn = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_1 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(1));

	// Layer_1
	this.instance = new lib.lotusBlack();
	this.instance.setTransform(605,-218,0.2892,0.2892);

	this.text = new cjs.Text("אודות", "normal 500 27px 'Rubik'", "#75322D");
	this.text.textAlign = "center";
	this.text.lineHeight = 34;
	this.text.lineWidth = 82;
	this.text.parent = this;
	this.text.setTransform(643,-172.6);
	if(!lib.properties.webfonts['Rubik']) {
		lib.webFontTxtInst['Rubik'] = lib.webFontTxtInst['Rubik'] || [];
		lib.webFontTxtInst['Rubik'].push(this.text);
	}

	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(153,153,51,0.008)").s().p("AkiEWQh3hyAAikQAAiiB3h0QB5hzCpAAQCqAAB4BzQB4B0AACiQAACkh4ByQh4B0iqAAQipAAh5h0g");
	this.shape.setTransform(642.15,-174.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(153,153,51,0.008)").s().p("AlGE5QiGiBAAi4QAAi2CGiCQCIiCC+AAQC/AACHCCQCHCCAAC2QAAC4iHCBQiHCCi/AAQi+AAiIiCg");
	this.shape_1.setTransform(642.05,-174.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape},{t:this.text,p:{scaleX:1,scaleY:1,x:643,y:-172.6}},{t:this.instance,p:{scaleX:0.2892,scaleY:0.2892,x:605,y:-218}}]}).to({state:[{t:this.shape_1},{t:this.text,p:{scaleX:1.1243,scaleY:1.1243,x:643.0098,y:-172.1}},{t:this.instance,p:{scaleX:0.3251,scaleY:0.3251,x:600,y:-223}}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(594.6,-223,96.79999999999995,92.9);


(lib.about = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.text = new cjs.Text("תש\"פ 2020", "normal 700 24px 'Rubik'", "#75322D");
	this.text.textAlign = "center";
	this.text.lineHeight = 31;
	this.text.lineWidth = 212;
	this.text.parent = this;
	this.text.setTransform(663.9,64.75);
	if(!lib.properties.webfonts['Rubik']) {
		lib.webFontTxtInst['Rubik'] = lib.webFontTxtInst['Rubik'] || [];
		lib.webFontTxtInst['Rubik'].push(this.text);
	}

	this.instance = new lib.hitLogo();
	this.instance.setTransform(544,99,0.2439,0.2439);

	this.hitUrl = new lib.url();
	this.hitUrl.name = "hitUrl";
	this.hitUrl.setTransform(659.5,301.4,1,1,0,0,0,119.5,16.5);

	this.instance_1 = new lib.bgCards();
	this.instance_1.setTransform(234,126,0.6362,0.6362);

	this.text_1 = new cjs.Text("אביטל באבו ורז פיגנבלט", "normal 300 22px 'Rubik'", "#75322D");
	this.text_1.textAlign = "right";
	this.text_1.lineHeight = 28;
	this.text_1.lineWidth = 213;
	this.text_1.parent = this;
	this.text_1.setTransform(709.4,23);
	if(!lib.properties.webfonts['Rubik']) {
		lib.webFontTxtInst['Rubik'] = lib.webFontTxtInst['Rubik'] || [];
		lib.webFontTxtInst['Rubik'].push(this.text_1);
	}

	this.text_2 = new cjs.Text(":צוות הפרויקט", "normal 500 22px 'Rubik'", "#75322D");
	this.text_2.textAlign = "right";
	this.text_2.lineHeight = 28;
	this.text_2.lineWidth = 134;
	this.text_2.parent = this;
	this.text_2.setTransform(846.95,23);
	if(!lib.properties.webfonts['Rubik']) {
		lib.webFontTxtInst['Rubik'] = lib.webFontTxtInst['Rubik'] || [];
		lib.webFontTxtInst['Rubik'].push(this.text_2);
	}

	this.text_3 = new cjs.Text("ארגון ויצוג ידע, מבוא לתכנות אינטראקציה ואנימציה", "normal 300 22px 'Rubik'", "#75322D");
	this.text_3.textAlign = "right";
	this.text_3.lineHeight = 28;
	this.text_3.lineWidth = 440;
	this.text_3.parent = this;
	this.text_3.setTransform(817.1,-16.65);
	if(!lib.properties.webfonts['Rubik']) {
		lib.webFontTxtInst['Rubik'] = lib.webFontTxtInst['Rubik'] || [];
		lib.webFontTxtInst['Rubik'].push(this.text_3);
	}

	this.text_4 = new cjs.Text(":שמות הקורסים", "normal 500 22px 'Rubik'", "#75322D");
	this.text_4.textAlign = "right";
	this.text_4.lineHeight = 28;
	this.text_4.lineWidth = 145;
	this.text_4.parent = this;
	this.text_4.setTransform(965.75,-16.65);
	if(!lib.properties.webfonts['Rubik']) {
		lib.webFontTxtInst['Rubik'] = lib.webFontTxtInst['Rubik'] || [];
		lib.webFontTxtInst['Rubik'].push(this.text_4);
	}

	this.instance_2 = new lib.title();
	this.instance_2.setTransform(469,-132,0.141,0.141);

	this.text_5 = new cjs.Text("אודות", "normal 500 30px 'Rubik'", "#75322D");
	this.text_5.textAlign = "center";
	this.text_5.lineHeight = 38;
	this.text_5.lineWidth = 77;
	this.text_5.parent = this;
	this.text_5.setTransform(653.4,-173.8);
	if(!lib.properties.webfonts['Rubik']) {
		lib.webFontTxtInst['Rubik'] = lib.webFontTxtInst['Rubik'] || [];
		lib.webFontTxtInst['Rubik'].push(this.text_5);
	}

	this.instance_3 = new lib.cards();
	this.instance_3.setTransform(201,-256,0.5774,0.5774);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_3},{t:this.text_5},{t:this.instance_2},{t:this.text_4},{t:this.text_3},{t:this.text_2},{t:this.text_1},{t:this.instance_1},{t:this.hitUrl},{t:this.instance},{t:this.text}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.about, new cjs.Rectangle(201,-256,948.7,639.8), null);


// stage content:
(lib.yoga = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	this.actionFrames = [0];
	this.isSingleFrame = false;
	// timeline functions:
	this.frame_0 = function() {
		if(this.isSingleFrame) {
			return;
		}
		if(this.totalFrames == 1) {
			this.isSingleFrame = true;
		}
		var self = this;
		stage.enableMouseOver(24); //הכרחי אחרת לא ניתן לבדוק מעבר עכבר
		
		var counter = 0; //משתנה שסופר את מספר הלחיצות
		
		//הגדרת האובייקטים של התנוחות לכפתורים לחיצים click
		//תנוחת קוברה
		self.bhujanga.addEventListener("click", bhujangaClick);
		//תנוחת שחרור הרוח
		self.pavana.addEventListener("click", pavanaClick);
		//תנוחת הפיתול
		self.matsyendra.addEventListener("click", matsyendraClick);
		//תנוחת ראש לברך
		self.janu.addEventListener("click", januClick);
		//תנוחת חתול
		self.marjariasana.addEventListener("click", marjariasanaClick);
		//תנוחת ילד
		self.balasana.addEventListener("click", balasanaClick);
		//תנוחת כיפוף לפנים מעמידה
		self.uttanasana.addEventListener("click", uttanasanaClick);
		//תנוחת רגליים על הקיר
		self.viparita.addEventListener("click", viparitaClick);
		//תנוחת הגוויה
		self.savasana.addEventListener("click", savasanaClick);
		//תנוחת כיפוף קדימה בפישוק רגליים
		self.prasarita.addEventListener("click", prasaritaClick);
		
		//הגדרת האובייקטים של התנוחות לכפתורי מעבר - over
		//הגדרת האובייקטים של התנוחות לכפתורי מעבר מצב יציאה - out
		//תנוחת קוברה
		self.bhujanga.addEventListener("mouseover", bhujangaOver);
		self.bhujanga.addEventListener("mouseout", bhujangaOut);
		
		//תנוחת שחרור הרוח
		self.pavana.addEventListener("mouseover", pavanaOver);
		self.pavana.addEventListener("mouseout", pavanaOut);
		
		//תנוחת פיתול
		self.matsyendra.addEventListener("mouseover", matsyendraOver);
		self.matsyendra.addEventListener("mouseout", matsyendraOut);
		
		//תנוחת ראש לברך
		self.janu.addEventListener("mouseover", januOver);
		self.janu.addEventListener("mouseout", januOut);
		
		//תנוחת חתול
		self.marjariasana.addEventListener("mouseover", marjariasanaOver);
		self.marjariasana.addEventListener("mouseout", marjariasanaOut);
		
		//תנוחת ילד
		self.balasana.addEventListener("mouseover", balasanaOver);
		self.balasana.addEventListener("mouseout", balasanaOut);
		
		//תנוחת כיפוף לפנים מעמידה
		self.uttanasana.addEventListener("mouseover", uttanasanaOver);
		self.uttanasana.addEventListener("mouseout", uttanasanaOut);
		
		//תנוחת רגליים על הקיר
		self.viparita.addEventListener("mouseover", viparitaOver);
		self.viparita.addEventListener("mouseout", viparitaOut);
		
		//תנוחת הגוויה
		self.savasana.addEventListener("mouseover", savasanaOver);
		self.savasana.addEventListener("mouseout", savasanaOut);
		
		//תנוחת כיפוף קדימה בפישוק רגליים
		self.prasarita.addEventListener("mouseover", prasaritaOver);
		self.prasarita.addEventListener("mouseout", prasaritaOut);
		
		//הגדרת כפתור מעבר אובייקט גוף
		self.body.addEventListener("mouseover", bodyOver);
		self.body.addEventListener("mouseout", bodyOut);
		
		//הגדרת האובייקטים ראש, גב ובטן ככפתורי מעבר - over
		//הגדרת האובייקטים ראש, גב ובטן ככפתורי מעבר מצב יציאה - out
		//ראש
		self.head.addEventListener("mouseover", headOver);
		self.head.addEventListener("mouseout", headOut);
		
		//בטן
		self.belly.addEventListener("mouseover", bellyOver);
		self.belly.addEventListener("mouseout", bellyOut);
		
		//גב
		self.back.addEventListener("mouseover", backOver);
		self.back.addEventListener("mouseout", backOut);
		
		//הגדרת האובייקטים ראש, בטן וגב ככפתורים לחיצים
		//ראש
		self.head.addEventListener("click", headClick);
		
		//בטן
		self.belly.addEventListener("click", bellyClick);
		
		//גב
		self.back.addEventListener("click", backClick);
		
		//הגדרת רמת קושי - מתחילים
		//כפתור לחיץ
		self.beginnersBtn.addEventListener("click", beginnersClick);
		
		//מעבר עכבר - over
		self.beginnersBtn.addEventListener("mouseover", beginnersOver);
		
		//יציאת מעבר עכבר - out
		self.beginnersBtn.addEventListener("mouseout", beginnersOut);
		
		//הגדרת רמת קושי - מתקדמים
		//כפתור לחיץ
		self.advancedBtn.addEventListener("click", advancedClick);
		
		//מעבר עכבר
		self.advancedBtn.addEventListener("mouseover", advancedOver);
		
		//יציאת מעבר עכבר - out
		self.advancedBtn.addEventListener("mouseout", advancedOut);
		
		//הגדרת כפתור יציאה ככפתור לחיץ - X
		self.exitBtn.addEventListener("click", exitBtnClick);
		
		//הגדרת כפתור יציאה - ככפתור מעבר - X
		self.exitBtn.addEventListener("mouseover", exitBtnOver);
		self.exitBtn.addEventListener("mouseout", exitBtnOut);
		
		//הגדרת background ככפתור מעבר
		self.bg.addEventListener("mouseover", bgOver);
		self.bg.addEventListener("mouseout", bgOut);
		
		//הגדרת כרטיסיות ככפתור מעבר
		self.cards.addEventListener("mouseover", cardsOver);
		self.cards.addEventListener("mouseout", cardsOut);
		
		//הגדרת לחיצת עכבר על קישור לפקולטה
		self.about.hitUrl.addEventListener("click", hitUrlClick);
		
		//הגדרת מעבר עכבר על קישור לפקולטה
		self.about.hitUrl.addEventListener("mouseover", hitUrlOver);
		self.about.hitUrl.addEventListener("mouseout", hitUrlOut);
		
		//הגדרת מעבר עכבר על אודות
		self.aboutBtn.addEventListener("mouseover", aboutBtnOver);
		self.aboutBtn.addEventListener("mouseout", aboutBtnOut);
		
		//הגדרת לחיצת עכבר על כפתור אודות
		self.aboutBtn.addEventListener("click", aboutBtnClick);
		
		//הגדרת לחיצת עכבר על כפתור איקס באודות
		self.exitBtn2.addEventListener("click", exitBtn2Click);
		
		//הגדרת מעכבר עכבר לכפתור איקס באודות
		self.exitBtn2.addEventListener("mouseover", exitBtn2Over);
		self.exitBtn2.addEventListener("mouseout", exitBtn2Out);
		
		//פונקציה שהופכת את כל הכפתורים של התנוחות לאפורים
		function grayAll() {
			self.bhujanga.gotoAndStop(1);
			self.pavana.gotoAndStop(1);
			self.matsyendra.gotoAndStop(1);
			self.janu.gotoAndStop(1);
			self.marjariasana.gotoAndStop(1);
			self.balasana.gotoAndStop(1);
			self.uttanasana.gotoAndStop(1);
			self.viparita.gotoAndStop(1);
			self.savasana.gotoAndStop(1);
			self.prasarita.gotoAndStop(1);
		}
		
		//פונקציה שמחזירה את הכפתורים של התנוחות לצבע המקורי
		function unGrayAll() {
			self.bhujanga.gotoAndStop(0);
			self.pavana.gotoAndStop(0);
			self.matsyendra.gotoAndStop(0);
			self.janu.gotoAndStop(0);
			self.marjariasana.gotoAndStop(0);
			self.balasana.gotoAndStop(0);
			self.uttanasana.gotoAndStop(0);
			self.viparita.gotoAndStop(0);
			self.savasana.gotoAndStop(0);
			self.prasarita.gotoAndStop(0);
		}
		
		//פונקציה שמעלימה את כל השמות של התנוחות
		function hideAllText() {
			self.bhujangaText.visible = false;
			self.pavanaText.visible = false;
			self.matsyendraText.visible = false;
			self.januText.visible = false;
			self.marjariasanaText.visible = false;
			self.balasanaText.visible = false;
			self.uttanasanaText.visible = false;
			self.viparitaText.visible = false;
			self.savasanaText.visible = false;
			self.prasaritaText.visible = false;
		}
		
		//פונקציה - מבטלת את כל אירועי עכבר של התנוחות ושל רמות הקושי
		function removeListeners() {
			self.bhujanga.mouseEnabled = false;
			self.pavana.mouseEnabled = false;
			self.matsyendra.mouseEnabled = false;
			self.janu.mouseEnabled = false;
			self.marjariasana.mouseEnabled = false;
			self.balasana.mouseEnabled = false;
			self.uttanasana.mouseEnabled = false;
			self.viparita.mouseEnabled = false;
			self.savasana.mouseEnabled = false;
			self.prasarita.mouseEnabled = false;
			self.beginnersBtn.mouseEnabled = false;
			self.advancedBtn.mouseEnabled = false;
		}
		
		//פונקציה - מבטלת את מעברי עכבר של התנוחות
		function removeOverListeners() {
			self.bhujanga.removeEventListener("mouseover", bhujangaOver);
			self.bhujanga.removeEventListener("mouseout", bhujangaOut);
			self.pavana.removeEventListener("mouseover", pavanaOver);
			self.pavana.removeEventListener("mouseout", pavanaOut);
			self.matsyendra.removeEventListener("mouseover", matsyendraOver);
			self.matsyendra.removeEventListener("mouseout", matsyendraOut);
			self.janu.removeEventListener("mouseover", januOver);
			self.janu.removeEventListener("mouseout", januOut);
			self.marjariasana.removeEventListener("mouseover", marjariasanaOver);
			self.marjariasana.removeEventListener("mouseout", marjariasanaOut);
			self.balasana.removeEventListener("mouseover", balasanaOver);
			self.balasana.removeEventListener("mouseout", balasanaOut);
			self.uttanasana.removeEventListener("mouseover", uttanasanaOver);
			self.uttanasana.removeEventListener("mouseout", uttanasanaOut);
			self.viparita.removeEventListener("mouseover", viparitaOver);
			self.viparita.removeEventListener("mouseout", viparitaOut);
			self.savasana.removeEventListener("mouseover", savasanaOver);
			self.savasana.removeEventListener("mouseout", savasanaOut);
			self.prasarita.removeEventListener("mouseover", prasaritaOver);
			self.prasarita.removeEventListener("mouseout", prasaritaOut);
		}
		
		//פונקציה - מבטלת את המעברי עכבר של ראש, בטן וגב
		function removeBodyListeners() {
			self.head.removeEventListener("mouseover", headOver);
			self.head.removeEventListener("mouseout", headOut);
			self.belly.removeEventListener("mouseover", bellyOver);
			self.belly.removeEventListener("mouseout", bellyOut);
			self.back.removeEventListener("mouseover", backOver);
			self.back.removeEventListener("mouseout", backOut);
		}
		
		////פונקציה - מחזירה את כל אירועי עכבר של תנוחות ושל רמות קושי
		function addListeners() {
			self.bhujanga.mouseEnabled = true;
			self.pavana.mouseEnabled = true;
			self.matsyendra.mouseEnabled = true;
			self.janu.mouseEnabled = true;
			self.marjariasana.mouseEnabled = true;
			self.balasana.mouseEnabled = true;
			self.uttanasana.mouseEnabled = true;
			self.viparita.mouseEnabled = true;
			self.savasana.mouseEnabled = true;
			self.prasarita.mouseEnabled = true;
			self.beginnersBtn.mouseEnabled = true;
			self.advancedBtn.mouseEnabled = true;
		}
		
		//פונקציה - מחזירה מעברי עכבר של התנוחות
		function addOverListeners() {
			self.bhujanga.addEventListener("mouseover", bhujangaOver);
			self.bhujanga.addEventListener("mouseout", bhujangaOut);
			self.pavana.addEventListener("mouseover", pavanaOver);
			self.pavana.addEventListener("mouseout", pavanaOut);
			self.matsyendra.addEventListener("mouseover", matsyendraOver);
			self.matsyendra.addEventListener("mouseout", matsyendraOut);
			self.janu.addEventListener("mouseover", januOver);
			self.janu.addEventListener("mouseout", januOut);
			self.marjariasana.addEventListener("mouseover", marjariasanaOver);
			self.marjariasana.addEventListener("mouseout", marjariasanaOut);
			self.balasana.addEventListener("mouseover", balasanaOver);
			self.balasana.addEventListener("mouseout", balasanaOut);
			self.uttanasana.addEventListener("mouseover", uttanasanaOver);
			self.uttanasana.addEventListener("mouseout", uttanasanaOut);
			self.viparita.addEventListener("mouseover", viparitaOver);
			self.viparita.addEventListener("mouseout", viparitaOut);
			self.savasana.addEventListener("mouseover", savasanaOver);
			self.savasana.addEventListener("mouseout", savasanaOut);
			self.prasarita.addEventListener("mouseover", prasaritaOver);
			self.prasarita.addEventListener("mouseout", prasaritaOut);
		}
		
		//פונקציה - מוסיפה את הליסנרים של ראש, בטן וגב
		function addBodyListeners() {
			self.head.addEventListener("mouseover", headOver);
			self.head.addEventListener("mouseout", headOut);
			self.belly.addEventListener("mouseover", bellyOver);
			self.belly.addEventListener("mouseout", bellyOut);
			self.back.addEventListener("mouseover", backOver);
			self.back.addEventListener("mouseout", backOut);
		}
		
		hideAllText();
		self.cards.visible = false;
		self.exitBtn.visible = false;
		self.about.visible = false;
		self.exitBtn2.visible = false;
		
		//פונקציה - מעבר עכבר על תנוחת הקוברה
		function bhujangaOver() {
			stage.cursor = "pointer";
			grayAll();
			self.bhujanga.gotoAndStop(0);
		
			hideAllText();
			self.bhujangaText.visible = true;
		
			self.back.gotoAndStop(2);
			self.belly.gotoAndStop(2);
			self.head.gotoAndStop(1);
			self.advancedBtn.gotoAndStop(1);
			self.beginnersBtn.gotoAndStop(2);
		}
		
		//פונקציה - יציאת מעבר עכבר מתנוחת הקוברה
		function bhujangaOut() {
			stage.cursor = "auto";
			unGrayAll();
			hideAllText();
		
			self.back.gotoAndStop(0);
			self.belly.gotoAndStop(0);
			self.head.gotoAndStop(0);
			self.advancedBtn.gotoAndStop(0);
			self.beginnersBtn.gotoAndStop(0);
		}
		
		//פונקציה - מעבר עכבר על כפתור איקס
		function exitBtnOver() {
			stage.cursor = "pointer";
			self.exitBtn.gotoAndStop(1);
		}
		
		//פונקציה - יציאת מעבר עכבר מכפתור איקס
		function exitBtnOut() {
			stage.cursor = "auto";
			self.exitBtn.gotoAndStop(0);
		}
		
		//פונקציה - לחיצת עכבר על תנוחת קוברה
		function bhujangaClick() {
			self.cards.gotoAndStop(0);
			removeListeners();
			removeOverListeners();
			removeBodyListeners();
		
			self.aboutBtn.mouseEnabled = false;
		
			stage.cursor = "auto";
			self.cards.visible = true;
			self.exitBtn.visible = true;
		
			self.levelsText.visible = false;
			self.arrowSmall.visible = false;
			self.bodyText.visible = false;
			self.arrow2.visible = false;
		}
		
		//פונקציה - מעבר עכבר על כרטיסייה
		function cardsOver() {
			stage.cursor = "auto";
		}
		
		//פונקציה - יציאת מעבר עכבר מכרטיסייה
		function cardsOut() {
			stage.cursor = "auto";
		}
		
		//פונקציה - לחיצה על איקס, סוגר כרטיסייה - X
		function exitBtnClick() {
			addListeners();
			self.aboutBtn.mouseEnabled = true;
		
			unGrayAll();
			hideAllText();
		
			self.head.gotoAndStop(0);
			self.belly.gotoAndStop(0);
			self.back.gotoAndStop(0);
			self.beginnersBtn.gotoAndStop(0);
			self.advancedBtn.gotoAndStop(0);
		
			self.cards.visible = false;
			self.exitBtn.visible = false;
		
			self.levelsText.visible = true;
			self.arrowSmall.visible = true;
			self.bodyText.visible = true;
			self.arrow2.visible = true;
		
			addOverListeners();
			addBodyListeners();
		}
		
		//פונקציה - מעבר עכבר על תנוחת שחרור הרוח
		function pavanaOver() {
			stage.cursor = "pointer";
		
			grayAll();
			self.pavana.gotoAndStop(0);
		
			hideAllText();
			self.pavanaText.visible = true;
		
			self.belly.gotoAndStop(2);
		
			self.head.gotoAndStop(1);
			self.back.gotoAndStop(1);
			self.advancedBtn.gotoAndStop(1);
			self.beginnersBtn.gotoAndStop(2);
		}
		
		//פונקציה - יציאת מעבר עכבר מתנוחת שחרור הרוח
		function pavanaOut() {
			stage.cursor = "auto";
			unGrayAll();
			hideAllText();
		
			self.belly.gotoAndStop(0);
			self.head.gotoAndStop(0);
			self.back.gotoAndStop(0);
			self.advancedBtn.gotoAndStop(0);
			self.beginnersBtn.gotoAndStop(0);
		
		}
		
		//פונקציה - לחיצת עכבר על תנוחת שחרור הרוח
		function pavanaClick() {
			self.cards.gotoAndStop(1);
			removeListeners();
			removeOverListeners();
			removeBodyListeners();
		
			self.aboutBtn.mouseEnabled = false;
		
			stage.cursor = "auto";
			self.cards.visible = true;
			self.exitBtn.visible = true;
		
			self.levelsText.visible = false;
			self.arrowSmall.visible = false;
			self.bodyText.visible = false;
			self.arrow2.visible = false;
		}
		
		//פונקציה - מעבר עכבר על תנוחת פיתול
		function matsyendraOver() {
			stage.cursor = "pointer";
		
			grayAll();
			self.matsyendra.gotoAndStop(0);
		
			hideAllText();
			self.matsyendraText.visible = true;
		
			self.back.gotoAndStop(2);
			self.belly.gotoAndStop(2);
			self.head.gotoAndStop(1);
			self.beginnersBtn.gotoAndStop(1);
			self.advancedBtn.gotoAndStop(2);
		}
		
		//פונקציה - יציאת מעבר עכבר מתנוחת פיתול
		function matsyendraOut() {
			stage.cursor = "auto";
			unGrayAll();
			hideAllText();
		
			self.back.gotoAndStop(0);
			self.belly.gotoAndStop(0);
			self.head.gotoAndStop(0);
			self.beginnersBtn.gotoAndStop(0);
			self.advancedBtn.gotoAndStop(0);
		
		}
		
		//פונקציה - לחיצת עכבר על תנוחת פיתול
		function matsyendraClick() {
			self.cards.gotoAndStop(2);
			removeListeners();
			removeOverListeners();
			removeBodyListeners();
		
			self.aboutBtn.mouseEnabled = false;
		
			stage.cursor = "auto";
			self.cards.visible = true;
			self.exitBtn.visible = true;
		
			self.levelsText.visible = false;
			self.arrowSmall.visible = false;
			self.bodyText.visible = false;
			self.arrow2.visible = false;
		}
		
		//פונקציה - מעבר עכבר על תנוחת ראש לברך
		function januOver() {
			stage.cursor = "pointer";
		
			grayAll();
			self.janu.gotoAndStop(0);
		
			hideAllText();
			self.januText.visible = true;
		
			self.head.gotoAndStop(2);
			self.belly.gotoAndStop(2);
			self.back.gotoAndStop(1);
			self.beginnersBtn.gotoAndStop(1);
			self.advancedBtn.gotoAndStop(2);
		}
		
		//פונקציה - יציאת מעבר עכבר מתנוחת ראש לברך
		function januOut() {
			stage.cursor = "auto";
			unGrayAll();
			hideAllText();
		
			self.head.gotoAndStop(0);
			self.belly.gotoAndStop(0);
			self.back.gotoAndStop(0);
			self.beginnersBtn.gotoAndStop(0);
			self.advancedBtn.gotoAndStop(0);
		}
		
		//פונקציה - לחיצת עכבר על תנוחת ראש לברך
		function januClick() {
			self.cards.gotoAndStop(3);
			removeListeners();
			removeOverListeners();
			removeBodyListeners();
		
			self.aboutBtn.mouseEnabled = false;
		
			stage.cursor = "auto";
			self.cards.visible = true;
			self.exitBtn.visible = true;
		
			self.levelsText.visible = false;
			self.arrowSmall.visible = false;
			self.bodyText.visible = false;
			self.arrow2.visible = false;
		}
		
		//פונקציה - מעבר עכבר על תנוחת חתול
		function marjariasanaOver() {
			stage.cursor = "pointer";
		
			grayAll();
			self.marjariasana.gotoAndStop(0);
		
			hideAllText();
			self.marjariasanaText.visible = true;
		
			self.head.gotoAndStop(2);
			self.back.gotoAndStop(2);
			self.belly.gotoAndStop(1);
			self.advancedBtn.gotoAndStop(1);
			self.beginnersBtn.gotoAndStop(2);
		}
		
		//פונקציה - יציאת מעבר עכבר מתנוחת חתול
		function marjariasanaOut() {
			stage.cursor = "auto";
			unGrayAll();
			hideAllText();
		
			self.head.gotoAndStop(0);
			self.back.gotoAndStop(0);
			self.belly.gotoAndStop(0);
			self.advancedBtn.gotoAndStop(0);
			self.beginnersBtn.gotoAndStop(0);
		}
		
		//פונקציה - לחיצת עכבר על תנוחת חתול
		function marjariasanaClick() {
			self.cards.gotoAndStop(4);
			removeListeners();
			removeOverListeners();
			removeBodyListeners();
		
			self.aboutBtn.mouseEnabled = false;
		
		
			stage.cursor = "auto";
			self.cards.visible = true;
			self.exitBtn.visible = true;
		
			self.levelsText.visible = false;
			self.arrowSmall.visible = false;
			self.bodyText.visible = false;
			self.arrow2.visible = false;
		}
		
		//פונקציה - מעבר עכבר על תנוחת ילד
		function balasanaOver() {
			stage.cursor = "pointer";
		
			grayAll();
			self.balasana.gotoAndPlay(0);
		
			hideAllText();
			self.balasanaText.visible = true;
		
			self.head.gotoAndStop(2);
			self.back.gotoAndStop(2);
			self.belly.gotoAndStop(1);
			self.advancedBtn.gotoAndStop(1);
			self.beginnersBtn.gotoAndStop(2);
		}
		
		//פונקציה - יציאת מעבר עכבר מתנוחת ילד
		function balasanaOut() {
			stage.cursor = "auto";
			unGrayAll();
			hideAllText();
		
			self.head.gotoAndStop(0);
			self.back.gotoAndStop(0);
			self.belly.gotoAndStop(0);
			self.advancedBtn.gotoAndStop(0);
			self.beginnersBtn.gotoAndStop(0);
		}
		
		//פונקציה - לחיצת עכבר על תנוחת ילד
		function balasanaClick() {
			self.cards.gotoAndStop(5);
			removeListeners();
			removeOverListeners();
			removeBodyListeners();
		
			self.aboutBtn.mouseEnabled = false;
		
			stage.cursor = "auto";
			self.cards.visible = true;
			self.exitBtn.visible = true;
		
			self.levelsText.visible = false;
			self.arrowSmall.visible = false;
			self.bodyText.visible = false;
			self.arrow2.visible = false;
		}
		
		//פונקציה - מעבר עכבר על תנוחת כיפוף לפנים מעמידה
		function uttanasanaOver() {
			stage.cursor = "pointer";
		
			grayAll();
			self.uttanasana.gotoAndStop(0);
		
			hideAllText();
			self.uttanasanaText.visible = true;
		
			self.belly.gotoAndStop(2);
			self.back.gotoAndStop(2);
			self.head.gotoAndStop(1);
			self.beginnersBtn.gotoAndStop(1);
			self.advancedBtn.gotoAndStop(2);
		}
		
		//פונקציה - יציאת מעבר עכבר מתנוחת כיפוף לפנים מעמידה
		function uttanasanaOut() {
			stage.cursor = "auto";
			unGrayAll();
			hideAllText();
		
			self.belly.gotoAndStop(0);
			self.back.gotoAndStop(0);
			self.head.gotoAndStop(0);
			self.beginnersBtn.gotoAndStop(0);
			self.advancedBtn.gotoAndStop(0);
		}
		
		//פונקציה - לחיצת עכבר על תנוחת כיפוף לפנים מעמידה
		function uttanasanaClick() {
			self.cards.gotoAndStop(6);
			removeListeners();
			removeOverListeners();
			removeBodyListeners();
		
			self.aboutBtn.mouseEnabled = false;
		
		
			stage.cursor = "auto";
			self.cards.visible = true;
			self.exitBtn.visible = true;
		
			self.levelsText.visible = false;
			self.arrowSmall.visible = false;
			self.bodyText.visible = false;
			self.arrow2.visible = false;
		}
		
		//פונקציה - מעבר עכבר על תנוחת רגליים על הקיר
		function viparitaOver() {
			stage.cursor = "pointer";
		
			grayAll();
			self.viparita.gotoAndStop(0);
		
			hideAllText();
			self.viparitaText.visible = true;
		
			self.head.gotoAndStop(2);
			self.back.gotoAndStop(2);
			self.belly.gotoAndStop(1);
			self.advancedBtn.gotoAndStop(1);
			self.beginnersBtn.gotoAndStop(2);
		}
		
		//פונקציה - יציאת מעבר עכבר מתנוחת רגליים על הקיר
		function viparitaOut() {
			stage.cursor = "auto";
			unGrayAll();
			hideAllText();
		
			self.head.gotoAndStop(0);
			self.back.gotoAndStop(0);
			self.belly.gotoAndStop(0);
			self.advancedBtn.gotoAndStop(0);
			self.beginnersBtn.gotoAndStop(0);
		}
		
		//פונקציה - לחיצת עכבר על תנוחת רגליים על הקיר
		function viparitaClick() {
			self.cards.gotoAndStop(7);
			removeListeners();
			removeOverListeners();
			removeBodyListeners();
		
			self.aboutBtn.mouseEnabled = false;
		
			stage.cursor = "auto";
			self.cards.visible = true;
			self.exitBtn.visible = true;
		
			self.levelsText.visible = false;
			self.arrowSmall.visible = false;
			self.bodyText.visible = false;
			self.arrow2.visible = false;
		}
		
		//פונקציה - מעבר עכבר על תנוחת הגוויה
		function savasanaOver() {
			stage.cursor = "pointer";
		
			grayAll();
			self.savasana.gotoAndStop(0);
		
			hideAllText();
			self.savasanaText.visible = true;
		
			self.head.gotoAndStop(2);
			self.belly.gotoAndStop(1);
			self.back.gotoAndStop(1);
			self.advancedBtn.gotoAndStop(1);
			self.beginnersBtn.gotoAndStop(2);
		}
		
		//פונקציה - יציאת מעבר עכבר מתנוחת הגוויה
		function savasanaOut() {
			stage.cursor = "auto";
			unGrayAll();
			hideAllText();
		
			self.head.gotoAndStop(0);
			self.belly.gotoAndStop(0);
			self.back.gotoAndStop(0);
			self.advancedBtn.gotoAndStop(0);
			self.beginnersBtn.gotoAndStop(0);
		}
		
		//פונקציה - לחיצת עכבר על תנוחת הגוויה
		function savasanaClick() {
			self.cards.gotoAndStop(8);
			removeListeners();
			removeOverListeners();
			removeBodyListeners();
		
			self.aboutBtn.mouseEnabled = false;
		
			stage.cursor = "auto";
			self.cards.visible = true;
			self.exitBtn.visible = true;
		
			self.levelsText.visible = false;
			self.arrowSmall.visible = false;
			self.bodyText.visible = false;
			self.arrow2.visible = false;
		}
		
		//פונקציה - מעבר עכבר על תנוחת כיפוף קדימה בפישוק רגליים
		function prasaritaOver() {
			stage.cursor = "pointer";
		
			grayAll();
			self.prasarita.gotoAndStop(0);
		
			hideAllText();
			self.prasaritaText.visible = true;
		
			self.back.gotoAndStop(2);
			self.head.gotoAndStop(2);
			self.belly.gotoAndStop(1);
			self.beginnersBtn.gotoAndStop(1);
			self.advancedBtn.gotoAndStop(2);
		}
		
		//פונקציה - יציאת מעבר עכבר מתנוחת כיפוף קדימה בפישוק רגליים
		function prasaritaOut() {
			stage.cursor = "auto";
			unGrayAll();
			hideAllText();
		
			self.back.gotoAndStop(0);
			self.head.gotoAndStop(0);
			self.belly.gotoAndStop(0);
			self.beginnersBtn.gotoAndStop(0);
			self.advancedBtn.gotoAndStop(0);
		}
		
		//פונקציה - לחיצת עכבר על תנוחת כיפוף קדימה בפישוק רגליים
		function prasaritaClick() {
			self.cards.gotoAndStop(9);
			removeListeners();
			removeOverListeners();
			removeBodyListeners();
		
			self.aboutBtn.mouseEnabled = false;
		
			stage.cursor = "auto";
			self.cards.visible = true;
			self.exitBtn.visible = true;
		
			self.levelsText.visible = false;
			self.arrowSmall.visible = false;
			self.bodyText.visible = false;
			self.arrow2.visible = false;
		}
		
		//פונקציה - מעבר עכבר על כפתור ראש
		function headOver() {
			stage.cursor = "pointer";
			self.head.gotoAndStop(2);
			self.belly.gotoAndStop(1);
			self.back.gotoAndStop(1);
		
			grayAll();
			self.janu.gotoAndStop(0);
			self.marjariasana.gotoAndStop(0);
			self.balasana.gotoAndStop(0);
			self.viparita.gotoAndStop(0);
			self.savasana.gotoAndStop(0);
			self.prasarita.gotoAndStop(0);
		
			hideAllText();
			self.januText.visible = true;
			self.marjariasanaText.visible = true;
			self.balasanaText.visible = true;
			self.viparitaText.visible = true;
			self.savasanaText.visible = true;
			self.prasaritaText.visible = true;
		}
		
		//פונקציה - יציאת מעבר עכבר מכפתור ראש
		function headOut() {
			stage.cursor = "auto";
			self.head.gotoAndStop(0);
			self.belly.gotoAndStop(0);
			self.back.gotoAndStop(0);
		
			unGrayAll();
			hideAllText();
		}
		
		//פונקציה - מעבר עכבר על הגוף
		function bodyOver() {
			stage.cursor = "auto";
		}
		
		//פונקציה - יציאת מעבר עכבר מהגוף
		function bodyOut() {
			stage.cursor = "auto";
		}
		
		//פונקציה - מעבר עכבר על background
		function bgOver() {
			stage.cursor = "auto";
		}
		
		//פונקציה - יציאת מעבר עכבר מה background
		function bgOut() {
			stage.cursor = "pointer";
		}
		
		//פונקציה - לחיצת עכבר על כפתור ראש
		function headClick() {
			removeOverListeners();
			removeBodyListeners();
		
			self.bhujanga.mouseEnabled = false;
			self.pavana.mouseEnabled = false;
			self.matsyendra.mouseEnabled = false;
			self.uttanasana.mouseEnabled = false;
			self.beginnersBtn.mouseEnabled = false;
			self.advancedBtn.mouseEnabled = false;
			self.aboutBtn.mouseEnabled = false;
		
			self.head.addEventListener("mouseover", headOver);
			self.belly.removeEventListener("click", bellyClick);
			self.back.removeEventListener("click", backClick);
		
			counter++
			if (counter == 1) {
				self.bodyText.bodyText.text = "לחצו על אותו אזור לחזרה למצב הקודם";
				self.bodyText.gotoAndPlay(1);
		
				self.head.gotoAndStop(2);
				self.belly.gotoAndStop(1);
				self.back.gotoAndStop(1);
		
				grayAll();
		
				self.janu.gotoAndStop(0);
				self.marjariasana.gotoAndStop(0);
				self.balasana.gotoAndStop(0);
				self.viparita.gotoAndStop(0);
				self.savasana.gotoAndStop(0);
				self.prasarita.gotoAndStop(0);
		
				hideAllText();
				self.januText.visible = true;
				self.marjariasanaText.visible = true;
				self.balasanaText.visible = true;
				self.viparitaText.visible = true;
				self.savasanaText.visible = true;
				self.prasaritaText.visible = true;
		
				self.yogaText.visible = false;
				self.levelsText.visible = false;
				self.arrow1.visible = false;
				self.arrowSmall.visible = false;
			}
			if (counter == 2) {
				addOverListeners();
				addBodyListeners();
				self.bhujanga.addEventListener("click", bhujangaClick);
				self.pavana.addEventListener("click", pavanaClick);
				self.matsyendra.addEventListener("click", matsyendraClick);
				self.uttanasana.addEventListener("click", uttanasanaClick);
		
				self.bodyText.bodyText.text = "עברו/לחצו על אחד מאזורי הגוף";
				self.bodyText.gotoAndStop(0);
		
				self.head.gotoAndStop(0);
				self.belly.gotoAndStop(0);
				self.back.gotoAndStop(0);
		
				unGrayAll();
				hideAllText();
		
				self.bhujanga.mouseEnabled = true;
				self.pavana.mouseEnabled = true;
				self.matsyendra.mouseEnabled = true;
				self.uttanasana.mouseEnabled = true;
				self.beginnersBtn.mouseEnabled = true;
				self.advancedBtn.mouseEnabled = true;
				self.aboutBtn.mouseEnabled = true;
		
				self.yogaText.visible = true;
				self.levelsText.visible = true;
				self.arrow1.visible = true;
				self.arrowSmall.visible = true;
		
				self.belly.addEventListener("click", bellyClick);
				self.back.addEventListener("click", backClick);
		
				counter = 0;
			}
		}
		
		//פונקציה - מעבר עכבר על כפתור בטן
		function bellyOver() {
			stage.cursor = "pointer";
			self.belly.gotoAndStop(2);
			self.head.gotoAndStop(1);
			self.back.gotoAndStop(1);
		
			grayAll();
			self.bhujanga.gotoAndStop(0);
			self.pavana.gotoAndStop(0);
			self.matsyendra.gotoAndStop(0);
			self.janu.gotoAndStop(0);
			self.uttanasana.gotoAndStop(0);
		
			hideAllText();
			self.bhujangaText.visible = true;
			self.pavanaText.visible = true;
			self.matsyendraText.visible = true;
			self.januText.visible = true;
			self.uttanasanaText.visible = true;
		}
		
		//פונקציה - יציאת מעבר עכבר מכפתור בטן
		function bellyOut() {
			stage.cursor = "auto";
			self.belly.gotoAndStop(0);
			self.head.gotoAndStop(0);
			self.back.gotoAndStop(0);
			unGrayAll();
			hideAllText();
		}
		
		//פונקציה - לחיצת עכבר על כפתור בטן
		function bellyClick() {
			removeOverListeners();
			removeBodyListeners();
		
			self.marjariasana.mouseEnabled = false;
			self.balasana.mouseEnabled = false;
			self.viparita.mouseEnabled = false;
			self.savasana.mouseEnabled = false;
			self.prasarita.mouseEnabled = false;
			self.beginnersBtn.mouseEnabled = false;
			self.advancedBtn.mouseEnabled = false;
			self.aboutBtn.mouseEnabled = false;
		
			self.belly.addEventListener("mouseover", bellyOver);
			self.head.removeEventListener("click", headClick);
			self.back.removeEventListener("click", backClick);
		
			counter++
			if (counter == 1) {
				self.bodyText.bodyText.text = "לחצו על אותו אזור לחזרה למצב הקודם";
				self.bodyText.gotoAndPlay(1);
		
				self.belly.gotoAndStop(2);
				self.head.gotoAndStop(1);
				self.back.gotoAndStop(1);
				grayAll()
		
				self.bhujanga.gotoAndStop(0);
				self.pavana.gotoAndStop(0);
				self.matsyendra.gotoAndStop(0);
				self.janu.gotoAndStop(0);
				self.uttanasana.gotoAndStop(0);
		
				hideAllText();
				self.bhujangaText.visible = true;
				self.pavanaText.visible = true;
				self.matsyendraText.visible = true;
				self.januText.visible = true;
				self.uttanasanaText.visible = true;
		
				self.yogaText.visible = false;
				self.levelsText.visible = false;
				self.arrow1.visible = false;
				self.arrowSmall.visible = false;
			}
			if (counter == 2) {
				addOverListeners();
				addBodyListeners();
		
				self.bodyText.bodyText.text = "עברו/לחצו על אחד מאזורי הגוף";
				self.bodyText.gotoAndStop(0);
		
				self.belly.gotoAndStop(0);
				self.head.gotoAndStop(0);
				self.back.gotoAndStop(0);
				unGrayAll();
				hideAllText();
		
				self.marjariasana.mouseEnabled = true;
				self.balasana.mouseEnabled = true;
				self.viparita.mouseEnabled = true;
				self.savasana.mouseEnabled = true;
				self.prasarita.mouseEnabled = true;
				self.beginnersBtn.mouseEnabled = true;
				self.advancedBtn.mouseEnabled = true;
				self.aboutBtn.mouseEnabled = true;
		
				self.yogaText.visible = true;
				self.levelsText.visible = true;
				self.arrow1.visible = true;
				self.arrowSmall.visible = true;
		
				self.head.addEventListener("click", headClick);
				self.back.addEventListener("click", backClick);
		
				counter = 0;
			}
		}
		
		//פונקציה - מעבר עכבר על כפתור גב
		function backOver() {
			stage.cursor = "pointer";
			self.back.gotoAndStop(2);
			self.head.gotoAndStop(1);
			self.belly.gotoAndStop(1);
		
			grayAll();
			self.bhujanga.gotoAndStop(0);
			self.matsyendra.gotoAndStop(0);
			self.marjariasana.gotoAndStop(0);
			self.balasana.gotoAndStop(0);
			self.uttanasana.gotoAndStop(0);
			self.viparita.gotoAndStop(0);
			self.prasarita.gotoAndStop(0);
		
			hideAllText();
			self.bhujangaText.visible = true;
			self.matsyendraText.visible = true;
			self.marjariasanaText.visible = true;
			self.balasanaText.visible = true;
			self.uttanasanaText.visible = true;
			self.viparitaText.visible = true;
			self.prasaritaText.visible = true;
		}
		
		//פונקציה - יציאת מעבר עכבר מכפתור גב
		function backOut() {
			stage.cursor = "auto";
			self.back.gotoAndStop(0);
			self.head.gotoAndStop(0);
			self.belly.gotoAndStop(0);
			unGrayAll();
			hideAllText();
		}
		
		//פונקציה - לחיצת עכבר על כפתור גב
		function backClick() {
			removeOverListeners();
			removeBodyListeners();
		
			self.pavana.mouseEnabled = false;
			self.janu.mouseEnabled = false;
			self.savasana.mouseEnabled = false;
			self.beginnersBtn.mouseEnabled = false;
			self.advancedBtn.mouseEnabled = false;
			self.aboutBtn.mouseEnabled = false;
		
			self.back.addEventListener("mouseover", backOver);
			self.head.removeEventListener("click", headClick);
			self.belly.removeEventListener("click", bellyClick);
		
			counter++
			if (counter == 1) {
				self.bodyText.bodyText.text = "לחצו על אותו אזור לחזרה למצב הקודם";
				self.bodyText.gotoAndPlay(1);
		
				self.back.gotoAndStop(2);
				self.head.gotoAndStop(1);
				self.belly.gotoAndStop(1);
		
				grayAll();
				self.bhujanga.gotoAndStop(0);
				self.matsyendra.gotoAndStop(0);
				self.marjariasana.gotoAndStop(0);
				self.balasana.gotoAndStop(0);
				self.uttanasana.gotoAndStop(0);
				self.viparita.gotoAndStop(0);
				self.prasarita.gotoAndStop(0);
		
				hideAllText();
				self.bhujangaText.visible = true;
				self.matsyendraText.visible = true;
				self.marjariasanaText.visible = true;
				self.balasanaText.visible = true;
				self.uttanasanaText.visible = true;
				self.viparitaText.visible = true;
				self.prasaritaText.visible = true;
		
				self.yogaText.visible = false;
				self.levelsText.visible = false;
				self.arrow1.visible = false;
				self.arrowSmall.visible = false;
			}
			if (counter == 2) {
				addOverListeners();
				addBodyListeners();
		
				self.bodyText.bodyText.text = "עברו/לחצו על אחד מאזורי הגוף";
				self.bodyText.gotoAndStop(0);
		
				self.back.gotoAndStop(0);
				self.head.gotoAndStop(0);
				self.belly.gotoAndStop(0);
		
				unGrayAll();
				hideAllText();
		
				self.pavana.mouseEnabled = true;
				self.janu.mouseEnabled = true;
				self.savasana.mouseEnabled = true;
				self.beginnersBtn.mouseEnabled = true;
				self.advancedBtn.mouseEnabled = true;
				self.aboutBtn.mouseEnabled = true;
		
				self.yogaText.visible = truetr;
				self.levelsText.visible = true;
				self.arrow1.visible = true;
				self.arrowSmall.visible = true;
		
				self.head.addEventListener("click", headClick);
				self.belly.addEventListener("click", bellyClick);
		
				counter = 0;
			}
		}
		
		//פונקציה - מעבר עכבר על כפתור מתחילים
		function beginnersOver() {
			stage.cursor = "pointer";
			self.beginnersBtn.gotoAndStop(2);
			self.advancedBtn.gotoAndStop(1);
			self.beginnersBtn.gotoAndStop(2);
		
			self.advancedBtn.gotoAndStop(1);
			self.matsyendra.gotoAndStop(1);
			self.janu.gotoAndStop(1);
			self.uttanasana.gotoAndStop(1);
			self.prasarita.gotoAndStop(1);
		
			self.bhujangaText.visible = true;
			self.pavanaText.visible = true;
			self.marjariasanaText.visible = true;
			self.balasanaText.visible = true;
			self.viparitaText.visible = true;
			self.savasanaText.visible = true;
		}
		
		//פונקציה - יציאת מעבר עכבר מכפתור מתחילים
		function beginnersOut() {
			stage.cursor = "auto";
			self.beginnersBtn.gotoAndStop(0);
			self.advancedBtn.gotoAndStop(0);
		
			unGrayAll();
		
			self.bhujangaText.visible = false;
			self.pavanaText.visible = false;
			self.marjariasanaText.visible = false;
			self.balasanaText.visible = false;
			self.viparitaText.visible = false;
			self.savasanaText.visible = false;
		}
		
		//פונקציה - לחיצת עכבר על רמת קושי מתחילים
		function beginnersClick() {
			removeOverListeners();
			removeBodyListeners();
		
			self.beginnersBtn.removeEventListener("mouseover", beginnersOver);
			self.beginnersBtn.removeEventListener("mouseout", beginnersOut);
		
			counter++;
			if (counter == 1) {
				self.levelsText.levelsText.text = "לחצו על הרמה שנבחרה, לחזרה למצב הקודם";
				self.levelsText.gotoAndPlay(1);
		
				self.beginnersBtn.gotoAndStop(2);
				self.advancedBtn.gotoAndStop(1);
				self.matsyendra.gotoAndStop(1);
				self.janu.gotoAndStop(1);
				self.uttanasana.gotoAndStop(1);
				self.prasarita.gotoAndStop(1);
		
				self.matsyendra.mouseEnabled = false;
				self.janu.mouseEnabled = false;
				self.uttanasana.mouseEnabled = false;
				self.prasarita.mouseEnabled = false;
				self.advancedBtn.mouseEnabled = false;
				self.aboutBtn.mouseEnabled = false;
		
				self.bhujangaText.visible = true;
				self.pavanaText.visible = true;
				self.marjariasanaText.visible = true;
				self.balasanaText.visible = true;
				self.viparitaText.visible = true;
				self.savasanaText.visible = true;
		
				self.yogaText.visible = false;
				self.bodyText.visible = false;
				self.arrow1.visible = false;
				self.arrow2.visible = false;
			}
			if (counter == 2) {
				self.levelsText.levelsText.text = "עברו/לחצו על אחת מרמות הקושי";
				self.levelsText.gotoAndStop(0);
		
				addOverListeners();
				addBodyListeners();
		
				self.beginnersBtn.addEventListener("mouseover", beginnersOver);
				self.beginnersBtn.addEventListener("mouseout", beginnersOut);
		
				self.beginnersBtn.gotoAndStop(0);
				self.advancedBtn.gotoAndStop(0);
				unGrayAll();
		
				self.bhujangaText.visible = false;
				self.pavanaText.visible = false;
				self.marjariasanaText.visible = false;
				self.balasanaText.visible = false;
				self.viparitaText.visible = false;
				self.savasanaText.visible = false;
		
				self.advancedBtn.addEventListener("click", advancedClick);
		
				self.matsyendra.mouseEnabled = true;
				self.janu.mouseEnabled = true;
				self.uttanasana.mouseEnabled = true;
				self.prasarita.mouseEnabled = true;
				self.advancedBtn.mouseEnabled = true;
				self.aboutBtn.mouseEnabled = true;
		
				self.yogaText.visible = true;
				self.bodyText.visible = true;
				self.arrow1.visible = true;
				self.arrow2.visible = true;
		
				counter = 0;
			}
		}
		
		//פונקציה - מעבר עכבר על כפתור מתקדמים
		function advancedOver() {
			stage.cursor = "pointer";
			self.advancedBtn.gotoAndStop(2);
			self.beginnersBtn.gotoAndStop(1);
		
			self.bhujanga.gotoAndStop(1);
			self.pavana.gotoAndStop(1);
			self.marjariasana.gotoAndStop(1);
			self.balasana.gotoAndStop(1);
			self.viparita.gotoAndStop(1);
			self.savasana.gotoAndStop(1);
		
			self.matsyendraText.visible = true;
			self.januText.visible = true;
			self.uttanasanaText.visible = true;
			self.prasaritaText.visible = true;
		}
		
		//פונקציה - יציאת מעבר עכבר מכפתור מתקדמים
		function advancedOut() {
			stage.cursor = "auto";
			self.advancedBtn.gotoAndStop(0);
			self.beginnersBtn.gotoAndStop(0);
		
			unGrayAll();
			self.matsyendraText.visible = false;
			self.januText.visible = false;
			self.uttanasanaText.visible = false;
			self.prasaritaText.visible = false;
		}
		
		//פונקציה - לחיצת עכבר על רמת קושי מתקדמים
		function advancedClick() {
			removeOverListeners();
			removeBodyListeners();
		
			self.advancedBtn.removeEventListener("mouseover", advancedOver);
			self.advancedBtn.removeEventListener("mouseout", advancedOut);
		
			counter++;
			if (counter == 1) {
				self.levelsText.levelsText.text = "לחצו על הרמה שנבחרה, לחזרה למצב הקודם";
				self.levelsText.gotoAndPlay(1);
		
		
				self.advancedBtn.gotoAndStop(2);
				self.beginnersBtn.gotoAndStop(1);
		
				self.bhujanga.gotoAndStop(1);
				self.pavana.gotoAndStop(1);
				self.marjariasana.gotoAndStop(1);
				self.balasana.gotoAndStop(1);
				self.viparita.gotoAndStop(1);
				self.savasana.gotoAndStop(1);
		
				self.bhujanga.mouseEnabled = false;
				self.pavana.mouseEnabled = false;
				self.marjariasana.mouseEnabled = false;
				self.balasana.mouseEnabled = false;
				self.viparita.mouseEnabled = false;
				self.savasana.mouseEnabled = false;
				self.beginnersBtn.mouseEnabled = false;
				self.aboutBtn.mouseEnabled = false;
		
				self.matsyendraText.visible = true;
				self.januText.visible = true;
				self.uttanasanaText.visible = true;
				self.prasaritaText.visible = true;
		
				self.yogaText.visible = false;
				self.bodyText.visible = false;
				self.arrow1.visible = false;
				self.arrow2.visible = false;
			}
			if (counter == 2) {
				self.levelsText.levelsText.text = "עברו/לחצו על אחת מרמות הקושי";
				self.levelsText.gotoAndPlay(0);
				addOverListeners();
				addBodyListeners();
		
				self.advancedBtn.addEventListener("mouseover", advancedOver);
				self.advancedBtn.addEventListener("mouseout", advancedOut);
		
				self.advancedBtn.gotoAndStop(0);
				self.beginnersBtn.gotoAndStop(0);
				unGrayAll();
		
				self.matsyendraText.visible = false;
				self.januText.visible = false;
				self.uttanasanaText.visible = false;
				self.prasaritaText.visible = false;
		
				self.bhujanga.mouseEnabled = true;
				self.pavana.mouseEnabled = true;
				self.marjariasana.mouseEnabled = true;
				self.balasana.mouseEnabled = true;
				self.viparita.mouseEnabled = true;
				self.savasana.mouseEnabled = true;
				self.beginnersBtn.mouseEnabled = true;
				self.aboutBtn.mouseEnabled = true;
		
				self.yogaText.visible = true;
				self.bodyText.visible = true;
				self.arrow1.visible = true;
				self.arrow2.visible = true;
		
				counter = 0;
			}
		}
		
		//פונקציה - לחיצת עכבר על "פקולטה לטכנולוגיות למידה" קישור לאתר
		function hitUrlClick() {
			window.open("https://www.hit.ac.il/telem/overview");
		}
		
		//פונקציה - מעבר עכבר על "פקולטה לטכנולוגיות למידה"
		function hitUrlOver() {
			stage.cursor = "pointer";
			self.about.hitUrl.gotoAndStop(1);
		}
		
		function hitUrlOut() {
			stage.cursor = "auto";
			self.about.hitUrl.gotoAndStop(0);
		}
		
		//פונקציה - מעבר עכבר על אודות
		function aboutBtnOver() {
			self.aboutBtn.gotoAndStop(1);
			stage.cursor = "pointer";
		}
		
		//פונקציה - יציאת מעבר עכבר מאודות
		function aboutBtnOut() {
			self.aboutBtn.gotoAndStop(0);
			stage.cursor = "auto";
		}
		
		//פונקציה - לחיצת עכבר על כפתור אודות
		function aboutBtnClick() {
			self.aboutBtn.gotoAndStop(1);
			self.about.visible = true;
			self.exitBtn2.visible = true;
		
			removeListeners();
			removeOverListeners();
			removeBodyListeners();
		
			stage.cursor = "auto";
		}
		
		//פונקציה - לחיצה על איקס סוגר כרטיסיית אודות
		function exitBtn2Click() {
			addListeners();
		
			self.about.visible = false;
			self.exitBtn2.visible = false;
		
			addOverListeners();
			addBodyListeners();
		}
		
		//פונקציה - מעבר עכבר על כפתור איקס באודות
		function exitBtn2Over() {
			stage.cursor = "pointer";
			self.exitBtn2.gotoAndStop(1);
		}
		
		//פונקציה - יציאת מעבר עבר מכפתור איקס באודות
		function exitBtn2Out() {
			stage.cursor = "auto";
			self.exitBtn2.gotoAndStop(0);
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// Layer_1
	this.exitBtn2 = new lib.exitBtn();
	this.exitBtn2.name = "exitBtn2";
	this.exitBtn2.setTransform(335.85,160.95,1,1,0,0,0,22.8,20.2);

	this.about = new lib.about();
	this.about.name = "about";
	this.about.setTransform(656.1,373.65,1,1,0,0,0,671.6,74.8);

	this.exitBtn = new lib.exitBtn();
	this.exitBtn.name = "exitBtn";
	this.exitBtn.setTransform(257.1,122.95,1,1,0,0,0,22.8,20.2);

	this.cards = new lib.cards_1();
	this.cards.name = "cards";
	this.cards.setTransform(640.4,364.9,1.0046,1.0046,0,0,0,470.2,296.2);

	this.yogaText = new cjs.Text("עברו/לחצו על אחת מהתנוחות", "normal 500 17px 'Rubik'", "#74322C");
	this.yogaText.name = "yogaText";
	this.yogaText.textAlign = "right";
	this.yogaText.lineHeight = 22;
	this.yogaText.lineWidth = 143;
	this.yogaText.parent = this;
	this.yogaText.setTransform(1099.15,159.8);
	if(!lib.properties.webfonts['Rubik']) {
		lib.webFontTxtInst['Rubik'] = lib.webFontTxtInst['Rubik'] || [];
		lib.webFontTxtInst['Rubik'].push(this.yogaText);
	}

	this.bodyText = new lib.bodyText();
	this.bodyText.name = "bodyText";
	this.bodyText.setTransform(833.5,285.6,1,1,0,0,0,63.2,25.1);

	this.levelsText = new lib.levelsText();
	this.levelsText.name = "levelsText";
	this.levelsText.setTransform(94.45,245.4,1,1,0,0,0,69.1,35.1);

	this.arrowSmall = new lib.arrow2();
	this.arrowSmall.name = "arrowSmall";
	this.arrowSmall.setTransform(92.4,189.7,1,1,75.0008,0,0,-3.1,-15.6);

	this.aboutBtn = new lib.aboutBtn();
	this.aboutBtn.name = "aboutBtn";
	this.aboutBtn.setTransform(128.65,649.55,0.7413,0.7413,0,0,0,643.5,-193);

	this.instance = new lib.title();
	this.instance.setTransform(465,11,0.1168,0.1168);

	this.arrow1 = new lib.arrow();
	this.arrow1.name = "arrow1";
	this.arrow1.setTransform(973.25,135.6,1.6736,1.1651,-22.7689,0,0,16.3,25.9);

	this.head = new lib.head_1();
	this.head.name = "head";
	this.head.setTransform(635,157.65,0.8299,0.8299,0,0,0,17.2,22.9);

	this.belly = new lib.belly_1();
	this.belly.name = "belly";
	this.belly.setTransform(612,373.9,1,1,0,0,0,22.7,25.2);

	this.back = new lib.back_1();
	this.back.name = "back";
	this.back.setTransform(663.9,359.9,1,1,0,0,0,9,49.3);

	this.body = new lib.body_1();
	this.body.name = "body";
	this.body.setTransform(634.7,397.9,1,1,0,0,0,83,280.9);

	this.pavanaText = new cjs.Text("שחרור הרוח", "normal 500 20px 'Rubik'", "#75322D");
	this.pavanaText.name = "pavanaText";
	this.pavanaText.textAlign = "center";
	this.pavanaText.lineHeight = 26;
	this.pavanaText.lineWidth = 110;
	this.pavanaText.parent = this;
	this.pavanaText.setTransform(975.35,323.5);
	if(!lib.properties.webfonts['Rubik']) {
		lib.webFontTxtInst['Rubik'] = lib.webFontTxtInst['Rubik'] || [];
		lib.webFontTxtInst['Rubik'].push(this.pavanaText);
	}

	this.arrow2 = new lib.arrow();
	this.arrow2.name = "arrow2";
	this.arrow2.setTransform(759.25,238.6,1.7736,1.2347,-22.7688,0,0,16.3,25.9);

	this.prasaritaText = new cjs.Text("כיפוף קדימה בפישוק רגליים", "normal 500 20px 'Rubik'", "#75322D");
	this.prasaritaText.name = "prasaritaText";
	this.prasaritaText.textAlign = "center";
	this.prasaritaText.lineHeight = 26;
	this.prasaritaText.lineWidth = 231;
	this.prasaritaText.parent = this;
	this.prasaritaText.setTransform(386.1905,209.5,0.9033,0.9033);
	if(!lib.properties.webfonts['Rubik']) {
		lib.webFontTxtInst['Rubik'] = lib.webFontTxtInst['Rubik'] || [];
		lib.webFontTxtInst['Rubik'].push(this.prasaritaText);
	}

	this.savasanaText = new cjs.Text("הגוויה", "normal 500 20px 'Rubik'", "#75322D");
	this.savasanaText.name = "savasanaText";
	this.savasanaText.textAlign = "center";
	this.savasanaText.lineHeight = 26;
	this.savasanaText.lineWidth = 58;
	this.savasanaText.parent = this;
	this.savasanaText.setTransform(270.1172,323.3,0.9033,0.9033);
	if(!lib.properties.webfonts['Rubik']) {
		lib.webFontTxtInst['Rubik'] = lib.webFontTxtInst['Rubik'] || [];
		lib.webFontTxtInst['Rubik'].push(this.savasanaText);
	}

	this.viparitaText = new cjs.Text("רגליים על הקיר", "normal 500 20px 'Rubik'", "#75322D");
	this.viparitaText.name = "viparitaText";
	this.viparitaText.textAlign = "center";
	this.viparitaText.lineHeight = 26;
	this.viparitaText.lineWidth = 134;
	this.viparitaText.parent = this;
	this.viparitaText.setTransform(204.039,440.45,0.9033,0.9033);
	if(!lib.properties.webfonts['Rubik']) {
		lib.webFontTxtInst['Rubik'] = lib.webFontTxtInst['Rubik'] || [];
		lib.webFontTxtInst['Rubik'].push(this.viparitaText);
	}

	this.uttanasanaText = new cjs.Text("כיפוף לפנים מעמידה", "normal 500 20px 'Rubik'", "#75322D");
	this.uttanasanaText.name = "uttanasanaText";
	this.uttanasanaText.textAlign = "center";
	this.uttanasanaText.lineHeight = 26;
	this.uttanasanaText.lineWidth = 173;
	this.uttanasanaText.parent = this;
	this.uttanasanaText.setTransform(280.6733,565.75,0.9033,0.9033);
	if(!lib.properties.webfonts['Rubik']) {
		lib.webFontTxtInst['Rubik'] = lib.webFontTxtInst['Rubik'] || [];
		lib.webFontTxtInst['Rubik'].push(this.uttanasanaText);
	}

	this.balasanaText = new cjs.Text("ילד", "normal 500 20px 'Rubik'", "#75322D");
	this.balasanaText.name = "balasanaText";
	this.balasanaText.textAlign = "center";
	this.balasanaText.lineHeight = 26;
	this.balasanaText.lineWidth = 29;
	this.balasanaText.parent = this;
	this.balasanaText.setTransform(386.65,680.65,0.9033,0.9033);
	if(!lib.properties.webfonts['Rubik']) {
		lib.webFontTxtInst['Rubik'] = lib.webFontTxtInst['Rubik'] || [];
		lib.webFontTxtInst['Rubik'].push(this.balasanaText);
	}

	this.marjariasanaText = new cjs.Text("חתול", "normal 500 20px 'Rubik'", "#75322D");
	this.marjariasanaText.name = "marjariasanaText";
	this.marjariasanaText.textAlign = "center";
	this.marjariasanaText.lineHeight = 26;
	this.marjariasanaText.lineWidth = 51;
	this.marjariasanaText.parent = this;
	this.marjariasanaText.setTransform(868.15,680,0.9033,0.9033);
	if(!lib.properties.webfonts['Rubik']) {
		lib.webFontTxtInst['Rubik'] = lib.webFontTxtInst['Rubik'] || [];
		lib.webFontTxtInst['Rubik'].push(this.marjariasanaText);
	}

	this.januText = new cjs.Text("ראש לברך", "normal 500 20px 'Rubik'", "#75322D");
	this.januText.name = "januText";
	this.januText.textAlign = "center";
	this.januText.lineHeight = 26;
	this.januText.lineWidth = 88;
	this.januText.parent = this;
	this.januText.setTransform(980.8674,563.25,0.9033,0.9033);
	if(!lib.properties.webfonts['Rubik']) {
		lib.webFontTxtInst['Rubik'] = lib.webFontTxtInst['Rubik'] || [];
		lib.webFontTxtInst['Rubik'].push(this.januText);
	}

	this.matsyendraText = new cjs.Text("פיתול", "normal 500 20px 'Rubik'", "#75322D");
	this.matsyendraText.name = "matsyendraText";
	this.matsyendraText.textAlign = "center";
	this.matsyendraText.lineHeight = 26;
	this.matsyendraText.lineWidth = 48;
	this.matsyendraText.parent = this;
	this.matsyendraText.setTransform(1071.15,440.1,0.9033,0.9033);
	if(!lib.properties.webfonts['Rubik']) {
		lib.webFontTxtInst['Rubik'] = lib.webFontTxtInst['Rubik'] || [];
		lib.webFontTxtInst['Rubik'].push(this.matsyendraText);
	}

	this.bhujangaText = new cjs.Text("קוברה", "normal 500 20px 'Rubik'", "#75322D");
	this.bhujangaText.name = "bhujangaText";
	this.bhujangaText.textAlign = "center";
	this.bhujangaText.lineHeight = 26;
	this.bhujangaText.lineWidth = 64;
	this.bhujangaText.parent = this;
	this.bhujangaText.setTransform(862.1894,209.5,0.9033,0.9033);
	if(!lib.properties.webfonts['Rubik']) {
		lib.webFontTxtInst['Rubik'] = lib.webFontTxtInst['Rubik'] || [];
		lib.webFontTxtInst['Rubik'].push(this.bhujangaText);
	}

	this.beginnersBtn = new lib.beginnersBtn();
	this.beginnersBtn.name = "beginnersBtn";
	this.beginnersBtn.setTransform(91.85,100.45,1,1,0,0,0,64.5,22.9);

	this.advancedBtn = new lib.advancedBtn();
	this.advancedBtn.name = "advancedBtn";
	this.advancedBtn.setTransform(96.45,144.65,1,1,0,0,0,63.2,18.4);

	this.levelsH = new cjs.Text("רמת קושי", "normal 500 23px 'Rubik'", "#75322D");
	this.levelsH.name = "levelsH";
	this.levelsH.textAlign = "right";
	this.levelsH.lineHeight = 30;
	this.levelsH.lineWidth = 97;
	this.levelsH.parent = this;
	this.levelsH.setTransform(148.95,44.85);
	if(!lib.properties.webfonts['Rubik']) {
		lib.webFontTxtInst['Rubik'] = lib.webFontTxtInst['Rubik'] || [];
		lib.webFontTxtInst['Rubik'].push(this.levelsH);
	}

	this.prasarita = new lib.prasarita_1();
	this.prasarita.name = "prasarita";
	this.prasarita.setTransform(385.25,162.4,0.4983,0.4983,0,0,0,98,91.1);

	this.savasana = new lib.savasana_1();
	this.savasana.name = "savasana";
	this.savasana.setTransform(275.8,277.15,0.4983,0.4983,0,0,0,108.6,91.6);

	this.viparita = new lib.viparita_1();
	this.viparita.name = "viparita";
	this.viparita.setTransform(203.05,387.7,0.4983,0.4983,0,0,0,93.5,101.5);

	this.uttanasana = new lib.uttanasana_1();
	this.uttanasana.name = "uttanasana";
	this.uttanasana.setTransform(283.1,518.7,0.4983,0.4983,0,0,0,94.2,91.2);

	this.balasana = new lib.balasana_1();
	this.balasana.name = "balasana";
	this.balasana.setTransform(399.8,633,0.4983,0.4983,0,0,0,115.2,91.1);

	this.marjariasana = new lib.marjariasana_1();
	this.marjariasana.name = "marjariasana";
	this.marjariasana.setTransform(871.05,632.75,0.4983,0.4983,0,0,0,105.2,91.6);

	this.janu = new lib.janu_1();
	this.janu.name = "janu";
	this.janu.setTransform(977,518.4,0.4983,0.4983,0,0,0,100.3,91.6);

	this.matsyendra = new lib.matsyendra_1();
	this.matsyendra.name = "matsyendra";
	this.matsyendra.setTransform(1071.2,392.8,0.4983,0.4983,0,0,0,94.3,91.7);

	this.pavana = new lib.pavana_1();
	this.pavana.name = "pavana";
	this.pavana.setTransform(977.15,275.95,0.4983,0.4983,0,0,0,94.2,91.6);

	this.bhujanga = new lib.bhujanga_1();
	this.bhujanga.name = "bhujanga";
	this.bhujanga.setTransform(866.05,164.95,0.4983,0.4983,0,0,0,115.1,86.2);

	this.bg = new lib.bg_1();
	this.bg.name = "bg";
	this.bg.setTransform(639.1,360.5,1,1,0,0,0,639.1,360.5);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#D1DCC8").s().p("AAAgPIAAAPIAAAQg");
	this.shape.setTransform(322.675,185.65);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape},{t:this.bg},{t:this.bhujanga},{t:this.pavana},{t:this.matsyendra},{t:this.janu},{t:this.marjariasana},{t:this.balasana},{t:this.uttanasana},{t:this.viparita},{t:this.savasana},{t:this.prasarita},{t:this.levelsH},{t:this.advancedBtn},{t:this.beginnersBtn},{t:this.bhujangaText},{t:this.matsyendraText},{t:this.januText},{t:this.marjariasanaText},{t:this.balasanaText},{t:this.uttanasanaText},{t:this.viparitaText},{t:this.savasanaText},{t:this.prasaritaText},{t:this.arrow2},{t:this.pavanaText},{t:this.body},{t:this.back},{t:this.belly},{t:this.head},{t:this.arrow1},{t:this.instance},{t:this.aboutBtn},{t:this.arrowSmall},{t:this.levelsText},{t:this.bodyText},{t:this.yogaText},{t:this.cards},{t:this.exitBtn},{t:this.about},{t:this.exitBtn2}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(640,360,638.3,361);
// library properties:
lib.properties = {
	id: 'B8B56150FF25B746A4EC318AC775D838',
	width: 1280,
	height: 720,
	fps: 30,
	color: "#FFFFFF",
	opacity: 1.00,
	webfonts: {},
	manifest: [
		{src:"images/back.png?1602333804157", id:"back"},
		{src:"images/backBlack.png?1602333804157", id:"backBlack"},
		{src:"images/balasanaA.png?1602333804157", id:"balasanaA"},
		{src:"images/belly.png?1602333804157", id:"belly"},
		{src:"images/bellyBlack.png?1602333804157", id:"bellyBlack"},
		{src:"images/bhujangaA.png?1602333804157", id:"bhujangaA"},
		{src:"images/januA.png?1602333804157", id:"januA"},
		{src:"images/marjariasanaA.png?1602333804157", id:"marjariasanaA"},
		{src:"images/marjariasanaA2.png?1602333804157", id:"marjariasanaA2"},
		{src:"images/matsyendraA.png?1602333804157", id:"matsyendraA"},
		{src:"images/pavanaA.png?1602333804157", id:"pavanaA"},
		{src:"images/prasaritaA.png?1602333804157", id:"prasaritaA"},
		{src:"images/savasanaA.png?1602333804157", id:"savasanaA"},
		{src:"images/title.png?1602333804157", id:"title"},
		{src:"images/uttanasanaA.png?1602333804157", id:"uttanasanaA"},
		{src:"images/viparitaA.png?1602333804157", id:"viparitaA"},
		{src:"images/yoga_atlas_1.png?1602333804039", id:"yoga_atlas_1"},
		{src:"images/yoga_atlas_2.png?1602333804039", id:"yoga_atlas_2"},
		{src:"images/yoga_atlas_3.png?1602333804039", id:"yoga_atlas_3"},
		{src:"images/yoga_atlas_4.png?1602333804040", id:"yoga_atlas_4"}
	],
	preloads: []
};



// bootstrap callback support:

(lib.Stage = function(canvas) {
	createjs.Stage.call(this, canvas);
}).prototype = p = new createjs.Stage();

p.setAutoPlay = function(autoPlay) {
	this.tickEnabled = autoPlay;
}
p.play = function() { this.tickEnabled = true; this.getChildAt(0).gotoAndPlay(this.getTimelinePosition()) }
p.stop = function(ms) { if(ms) this.seek(ms); this.tickEnabled = false; }
p.seek = function(ms) { this.tickEnabled = true; this.getChildAt(0).gotoAndStop(lib.properties.fps * ms / 1000); }
p.getDuration = function() { return this.getChildAt(0).totalFrames / lib.properties.fps * 1000; }

p.getTimelinePosition = function() { return this.getChildAt(0).currentFrame / lib.properties.fps * 1000; }

an.bootcompsLoaded = an.bootcompsLoaded || [];
if(!an.bootstrapListeners) {
	an.bootstrapListeners=[];
}

an.bootstrapCallback=function(fnCallback) {
	an.bootstrapListeners.push(fnCallback);
	if(an.bootcompsLoaded.length > 0) {
		for(var i=0; i<an.bootcompsLoaded.length; ++i) {
			fnCallback(an.bootcompsLoaded[i]);
		}
	}
};

an.compositions = an.compositions || {};
an.compositions['B8B56150FF25B746A4EC318AC775D838'] = {
	getStage: function() { return exportRoot.stage; },
	getLibrary: function() { return lib; },
	getSpriteSheet: function() { return ss; },
	getImages: function() { return img; }
};

an.compositionLoaded = function(id) {
	an.bootcompsLoaded.push(id);
	for(var j=0; j<an.bootstrapListeners.length; j++) {
		an.bootstrapListeners[j](id);
	}
}

an.getComposition = function(id) {
	return an.compositions[id];
}


an.makeResponsive = function(isResp, respDim, isScale, scaleType, domContainers) {		
	var lastW, lastH, lastS=1;		
	window.addEventListener('resize', resizeCanvas);		
	resizeCanvas();		
	function resizeCanvas() {			
		var w = lib.properties.width, h = lib.properties.height;			
		var iw = window.innerWidth, ih=window.innerHeight;			
		var pRatio = window.devicePixelRatio || 1, xRatio=iw/w, yRatio=ih/h, sRatio=1;			
		if(isResp) {                
			if((respDim=='width'&&lastW==iw) || (respDim=='height'&&lastH==ih)) {                    
				sRatio = lastS;                
			}				
			else if(!isScale) {					
				if(iw<w || ih<h)						
					sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==1) {					
				sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==2) {					
				sRatio = Math.max(xRatio, yRatio);				
			}			
		}
		domContainers[0].width = w * pRatio * sRatio;			
		domContainers[0].height = h * pRatio * sRatio;
		domContainers.forEach(function(container) {				
			container.style.width = w * sRatio + 'px';				
			container.style.height = h * sRatio + 'px';			
		});
		stage.scaleX = pRatio*sRatio;			
		stage.scaleY = pRatio*sRatio;
		lastW = iw; lastH = ih; lastS = sRatio;            
		stage.tickOnUpdate = false;            
		stage.update();            
		stage.tickOnUpdate = true;		
	}
}
an.handleSoundStreamOnTick = function(event) {
	if(!event.paused){
		var stageChild = stage.getChildAt(0);
		if(!stageChild.paused){
			stageChild.syncStreamSounds();
		}
	}
}


})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;