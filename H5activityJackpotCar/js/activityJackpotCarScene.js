/**
 * Created by jon on 2017/7/17.
 */



var mainScene;
(function(){
    console.log(this);
    mainScene = function(){
        if (!(this instanceof mainScene)) {
            Function.prototype.testname = 'fun';
            Function.prototype.addMehod = function(name,fun){
                this[name] =fun & fun();
            }
            return new mainScene();
        }
        function init(){
            /**
             * 按钮文字动画
             * @type {boolean}
             */
            var isScale = false;//当前状态是否  有被缩放
            var Interval = setInterval(function(){
                if(!isScale){
                    isScale = true;
                    exportRoot['winlable'].scaleX = 1.3;
                    exportRoot['winlable'].scaleY = 1.3;
                }else{
                    isScale = false;
                    exportRoot['winlable'].scaleX = 1;
                    exportRoot['winlable'].scaleY = 1;
                }

            },0.3*1000);

            run();
        }

        /**
         *
         * @param MaxcircleNum 最大圈数:到最大圈数后开始定位真实奖励
         * @param IntervalTime Interval时间 0.5|1|2....
         */
        function run(MaxcircleNum,IntervalTime){


            // init the visible false
            exportRoot.xuanzhong.visible = false;
            exportRoot.btn.addEventListener('click',function(evt){

                //touch  end
                exportRoot.xuanzhong.visible = true;
                evt.remove(); // removes this listener.

                //touch  end attributes
                var randall = ['1','2','4','5','6','8'];
                var reandNum = randall[Math.floor(Math.random()*randall.length)];// reand Jackpot
                MaxcircleNum = MaxcircleNum||3;//最大圈数
                IntervalTime = IntervalTime||0.1;
                var circleNum = 0;//默认在第3圈开始计算
                var index = 0;//当前奖池索引   1----8 ++

                //run state
                var Interval = setInterval(function(){
                    index+=1;
                    if(index==9){
                        circleNum+=1;
                        index = 1;
                    }
                    exportRoot.xuanzhong.x = (exportRoot['label'+index]).x;
                    exportRoot.xuanzhong.y = (exportRoot['label'+index]).y;
                    if(circleNum>=MaxcircleNum&&index==reandNum){
                        clearInterval(Interval);
                        GetOverResults(reandNum);
                    }
                },IntervalTime*1000);
            })
        }

        /**
         *
         * @param IMGindex : reandNum
         * @constructor
         */
        function GetOverResults(IMGindex){
            //背景蒙版
            exportRoot.touchLayer.visible = true;
            exportRoot.touchLayer.addEventListener("click", function () {});
            //创建弹窗
            var bitmap = new createjs.Bitmap("images/activityJackpotCar"+IMGindex+".png");
            exportRoot.addChild(bitmap);

            bitmap.addEventListener("click", function () {
                self.location = 'http://qlbuy-img.qlifeapp.com/apk/Qlbuy_guanwang.apk';
            })
        };

        init();

    }
})();