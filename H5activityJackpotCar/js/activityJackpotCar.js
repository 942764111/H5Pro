(function (lib, img, cjs, ss) {

var p; // shortcut to reference prototypes

// library properties:
lib.properties = {
	width: 750,
	height: 1334,
	fps: 24,
	color: "#000000",
	manifest: []
};



// symbols:



(lib.anniu = function() {
	this.spriteSheet = ss["activityJackpotCar_atlas_"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.beijing_0 = function() {
	this.spriteSheet = ss["activityJackpotCar_atlas_"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.beijing_1 = function() {
	this.spriteSheet = ss["activityJackpotCar_atlas_"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.beijing_2 = function() {
	this.spriteSheet = ss["activityJackpotCar_atlas_"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.beijing_3 = function() {
	this.spriteSheet = ss["activityJackpotCar_atlas_"];
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.tubiao_1 = function() {
	this.spriteSheet = ss["activityJackpotCar_atlas_"];
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.tubiao_2 = function() {
	this.spriteSheet = ss["activityJackpotCar_atlas_"];
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.tubiao_3 = function() {
	this.spriteSheet = ss["activityJackpotCar_atlas_"];
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.tubiao_4 = function() {
	this.spriteSheet = ss["activityJackpotCar_atlas_"];
	this.gotoAndStop(8);
}).prototype = p = new cjs.Sprite();



(lib.tubiao_5 = function() {
	this.spriteSheet = ss["activityJackpotCar_atlas_"];
	this.gotoAndStop(9);
}).prototype = p = new cjs.Sprite();



(lib.tubiao_6 = function() {
	this.spriteSheet = ss["activityJackpotCar_atlas_"];
	this.gotoAndStop(10);
}).prototype = p = new cjs.Sprite();



(lib.tubiao_8 = function() {
	this.spriteSheet = ss["activityJackpotCar_atlas_"];
	this.gotoAndStop(11);
}).prototype = p = new cjs.Sprite();



(lib.tubiao_9 = function() {
	this.spriteSheet = ss["activityJackpotCar_atlas_"];
	this.gotoAndStop(12);
}).prototype = p = new cjs.Sprite();



(lib.xuanzhongkuang = function() {
	this.spriteSheet = ss["activityJackpotCar_atlas_"];
	this.gotoAndStop(13);
}).prototype = p = new cjs.Sprite();



(lib.zi = function() {
	this.spriteSheet = ss["activityJackpotCar_atlas_"];
	this.gotoAndStop(14);
}).prototype = p = new cjs.Sprite();



(lib.winlable = function() {
	this.initialize();

	// 图层 1
	this.instance = new lib.zi();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,102,102);


(lib.touchLayer = function() {
	this.initialize();

	// 图层 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.329)").s().p("Eg6lBoNMAAAjQaMB1KAAAMAAADQag");
	this.shape.setTransform(375,667);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,750,1334);


(lib.label8 = function() {
	this.initialize();

	// 图层 1
	this.instance = new lib.tubiao_9();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,202,127);


(lib.label7 = function() {
	this.initialize();

	// 图层 1
	this.instance = new lib.tubiao_8();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,202,127);


(lib.label6 = function() {
	this.initialize();

	// 图层 1
	this.instance = new lib.tubiao_6();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,202,127);


(lib.label5 = function() {
	this.initialize();

	// 图层 1
	this.instance = new lib.tubiao_5();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,202,127);


(lib.label4 = function() {
	this.initialize();

	// 图层 1
	this.instance = new lib.tubiao_4();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,202,127);


(lib.label3 = function() {
	this.initialize();

	// 图层 1
	this.instance = new lib.tubiao_3();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,202,127);


(lib.label2 = function() {
	this.initialize();

	// 图层 1
	this.instance = new lib.tubiao_2();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,202,127);


(lib.label1 = function() {
	this.initialize();

	// 图层 1
	this.instance = new lib.tubiao_1();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,202,127);


(lib.index = function() {
	this.initialize();

	// 图层 1
	this.instance = new lib.xuanzhongkuang();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,237,171);


(lib.btn = function() {
	this.initialize();

	// 图层 1
	this.instance = new lib.anniu();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,231,144);


// stage content:
(lib.activityJackpotCar = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 3
	this.touchLayer = new lib.touchLayer();
	this.touchLayer.setTransform(375,667,1,1,0,0,0,375,667);
	this.touchLayer.visible = false;

	this.timeline.addTween(cjs.Tween.get(this.touchLayer).wait(20));

	// 图层 2
	this.xuanzhong = new lib.index();
	this.xuanzhong.setTransform(128.5,888.6,1,1,0,0,0,118.5,85.5);

	this.label5 = new lib.label8();
	this.label5.setTransform(621.2,1207.5,1,1,0,0,0,101,63.5);

	this.label6 = new lib.label7();
	this.label6.setTransform(375.3,1207.5,1,1,0,0,0,101,63.5);

	this.label7 = new lib.label6();
	this.label7.setTransform(128.5,1207.5,1,1,0,0,0,101,63.5);

	this.label4 = new lib.label5();
	this.label4.setTransform(621.2,1049.5,1,1,0,0,0,101,63.5);

	this.label8 = new lib.label4();
	this.label8.setTransform(128.5,1049.5,1,1,0,0,0,101,63.5);

	this.label3 = new lib.label3();
	this.label3.setTransform(621.2,888.6,1,1,0,0,0,101,63.5);

	this.label2 = new lib.label2();
	this.label2.setTransform(375.3,888.6,1,1,0,0,0,101,63.5);

	this.label1 = new lib.label1();
	this.label1.setTransform(128.5,888.6,1,1,0,0,0,101,63.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.label1},{t:this.label2},{t:this.label3},{t:this.label8},{t:this.label4},{t:this.label7},{t:this.label6},{t:this.label5},{t:this.xuanzhong}]}).wait(20));

	// 图层 4
	this.winlable = new lib.winlable();
	this.winlable.setTransform(381.9,1047.1,1,1,0,0,0,51,51);

	this.btn = new lib.btn();
	this.btn.setTransform(379.9,1046.1,1,1,0,0,0,115.5,72);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.btn},{t:this.winlable}]}).wait(20));

	// 图层 1
	this.instance = new lib.beijing_0();

	this.instance_1 = new lib.beijing_1();

	this.instance_2 = new lib.beijing_2();

	this.instance_3 = new lib.beijing_3();

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},5).to({state:[{t:this.instance_2}]},5).to({state:[{t:this.instance_3}]},5).wait(5));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(375,667,750,1334);

})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{});
var lib, images, createjs, ss;