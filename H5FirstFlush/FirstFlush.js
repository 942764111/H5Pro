(function (lib, img, cjs, ss) {

var p; // shortcut to reference prototypes
var rect; // used to reference frame bounds

// library properties:
lib.properties = {
	width: 750,
	height: 1206,
	fps: 24,
	color: "#000000",
	manifest: []
};



// symbols:



(lib.beijing = function() {
	this.spriteSheet = ss["FirstFlush_atlas_"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.jindudi_03 = function() {
	this.spriteSheet = ss["FirstFlush_atlas_"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.jindutiao_03 = function() {
	this.spriteSheet = ss["FirstFlush_atlas_"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.lijilingqu_03 = function() {
	this.spriteSheet = ss["FirstFlush_atlas_"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.weidadaozhuangtai_03 = function() {
	this.spriteSheet = ss["FirstFlush_atlas_"];
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.yilingqu = function() {
	this.spriteSheet = ss["FirstFlush_atlas_"];
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



// stage content:
(lib.FirstFlush = function() {
	this.initialize();

	// ui
	this.instance = new lib.weidadaozhuangtai_03();
	this.instance.setTransform(195.5,1081.4);

	this.instance_1 = new lib.yilingqu();
	this.instance_1.setTransform(195.5,1081.4);

	this.instance_2 = new lib.lijilingqu_03();
	this.instance_2.setTransform(195.5,1081.4);

	// 图层 1
	this.rulestxt2 = new cjs.Text("                             199元 ", "34px 'Heiti SC'", "#F6EC9A");
	this.rulestxt2.name = "rulestxt2";
	this.rulestxt2.lineHeight = 43;
	this.rulestxt2.lineWidth = 651;
	this.rulestxt2.setTransform(47.4,685.6);

	// beijin
	this.text = new cjs.Text("已领取20天", "24px 'Heiti SC'", "#FFFFFF");
	this.text.textAlign = "right";
	this.text.lineHeight = 26;
	this.text.lineWidth = 140;
	this.text.setTransform(176.4,993);

	this.text_1 = new cjs.Text("已领取20天", "24px 'Heiti SC'", "#FFFFFF");
	this.text_1.lineHeight = 26;
	this.text_1.lineWidth = 144;
	this.text_1.setTransform(565.8,993);

	this.rulestxt = new cjs.Text("1.用户累计充值达到             后，在本活动页点击\n立即领取按钮进行领取;\n2.领取完30天奖励后，活动将重新开始;\n3.每日0点即可领取当日奖励;\n4.充值金额以活动开始后计算。", "28px 'PingFang SC'", "#FFFFFF");
	this.rulestxt.name = "rulestxt";
	this.rulestxt.lineHeight = 37;
	this.rulestxt.lineWidth = 651;
	this.rulestxt.setTransform(47.4,689.6);

	this.instance_3 = new lib.jindutiao_03();
	this.instance_3.setTransform(187.5,995.5);

	this.instance_4 = new lib.jindudi_03();
	this.instance_4.setTransform(183,992.5);

	this.instance_5 = new lib.beijing();

	this.addChild(this.instance_5,this.instance_4,this.instance_3,this.rulestxt,this.text_1,this.text,this.rulestxt2,this.instance_2,this.instance_1,this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = rect = new cjs.Rectangle(375,603,750,1206);
p.frameBounds = [rect];

})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{});
var lib, images, createjs, ss;