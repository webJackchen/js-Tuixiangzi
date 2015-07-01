//====================================================================================================
// 面向对象推箱子游戏
// [作者网名] webjackchen（阿飞）
// [邮    箱] webjackchen@163.com
// [QQ交流] 602071930
//====================================================================================================
(function($){
    $.Game = function(){
        this.oParent = null;
        this.s = {
            defaultGk:0, //默认开始关卡
            gk:[{  //默认关卡配置
                map:[
                    1,1,2,2,2,2,1,1,
                    1,1,2,3,3,2,1,1,
                    1,2,2,0,3,3,2,1,
                    1,2,0,0,0,0,2,1,
                    2,2,0,0,0,0,2,2,
                    2,0,0,2,0,0,0,2,
                    2,0,0,0,0,0,0,2,
                    2,2,2,2,2,2,2,2
                ],
                box:[
                    {x : 4 , y : 3},
                    {x : 3 , y : 4},
                    {x : 4 , y : 5},
                    {x : 5 , y : 5}
                ],
                person:{ x : 3 , y : 6 }
            },
                {
                    map : [
                        1,1,1,1,1,1,1,1,1,1,1,1,
                        1,1,1,2,2,2,2,2,2,2,2,1,
                        1,1,1,2,3,0,0,0,0,0,2,1,
                        1,1,1,2,3,0,0,2,0,0,2,1,
                        1,1,1,2,3,2,0,2,0,0,2,1,
                        1,1,1,2,3,0,0,0,0,0,2,1,
                        1,1,1,2,3,0,0,0,0,0,2,1,
                        1,1,1,2,3,0,0,2,0,0,2,1,
                        1,2,2,2,2,0,0,2,0,2,2,1,
                        1,2,0,0,0,0,0,0,0,2,1,1,
                        1,2,2,2,2,2,2,2,2,2,1,1,
                        1,1,1,1,1,1,1,1,1,1,1,1
                    ],
                    box : [
                        {x : 5 , y : 6},
                        {x : 6 , y : 3},
                        {x : 6 , y : 5},
                        {x : 6 , y : 7},
                        {x : 8 , y : 2},
                        {x : 8 , y : 6}
                    ],
                    person : { x : 5 , y : 9 }
                },
                {
                    map : [
                        1,1,1,1,2,2,2,2,2,2,2,1,
                        1,1,1,1,2,0,0,2,0,0,2,1,
                        1,1,1,1,2,0,0,0,0,0,2,1,
                        2,2,2,2,2,0,0,2,0,0,2,1,
                        3,3,3,2,2,2,0,2,0,0,2,2,
                        3,0,0,2,0,0,0,0,2,0,0,2,
                        3,0,0,0,0,0,0,0,0,0,0,2,
                        3,0,0,2,0,0,0,0,2,0,0,2,
                        3,3,0,2,2,2,0,2,0,0,2,2,
                        2,2,2,2,2,0,0,0,0,0,2,1,
                        1,1,1,1,2,0,0,2,0,0,2,1,
                        1,1,1,1,2,2,2,2,2,2,2,1
                    ],
                    box : [
                        {x : 5 , y : 6},
                        {x : 6 , y : 3},
                        {x : 6 , y : 5},
                        {x : 6 , y : 7},
                        {x : 6 , y : 9},
                        {x : 7 , y : 2},
                        {x : 8 , y : 2},
                        {x : 9 , y : 6}
                    ],
                    person : { x : 5 , y : 9 }
                },
                {
                    map : [
                        1,1,1,1,2,2,2,2,2,2,2,2,1,1,
                        1,1,2,2,2,0,0,2,0,0,0,2,1,1,
                        2,2,2,0,0,0,0,0,0,2,0,2,2,2,
                        2,0,0,0,2,0,0,0,2,0,0,0,0,2,
                        2,0,0,0,0,0,0,0,2,0,2,2,0,2,
                        2,0,0,0,2,2,2,0,0,0,0,0,0,2,
                        2,2,0,0,0,2,2,0,2,0,0,0,0,2,
                        1,2,2,3,3,3,0,0,2,0,0,2,0,2,
                        1,1,2,2,3,3,3,3,3,2,0,0,0,2,
                        1,1,1,2,2,3,3,3,3,3,0,0,0,2,
                        1,1,1,1,2,2,2,2,0,2,0,0,2,2,
                        1,1,1,1,1,1,1,2,0,0,0,0,2,1,
                        1,1,1,1,1,1,1,2,0,0,0,2,2,1,
                        1,1,1,1,1,1,1,2,2,2,2,2,1,1
                    ],
                    box : [
                        {x : 4 , y : 2},
                        {x : 7 , y : 2},
                        {x : 7 , y : 3},
                        {x : 6 , y : 3},
                        {x : 9 , y : 4},
                        {x : 8 , y : 5},
                        {x : 7 , y : 5},
                        {x : 9 , y : 6},
                        {x : 10 , y : 7},
                        {x : 11 , y : 8},
                        {x : 10 , y : 10},
                        {x : 2 , y : 4},
                        {x : 3 , y : 5}
                    ],
                    person : { x : 1 , y : 5 }
                }]
        }
    }
    $.Game.prototype.init = function(oParent,opt){
        opt = opt || {};
        $.extend(this.s,opt);
        this.oParent = oParent;
        this.iNow = this.s.defaultGk;
        this.CreateMap(this.iNow);
        this.createBox();
        this.createPerson();
    }
    $.Game.prototype.CreateMap = function(iNow){
        this.oParent.empty();
        this.nowJson = this.s.gk[iNow];
        $.each(this.nowJson.map, $.proxy(function(i,elem){

            this.oParent.append( $("<div class='pos" + elem +"'></div>") );

        },this))
        this.oParent.css({
            width:Math.sqrt(this.nowJson.map.length)*50 + "px",
            overflow:"hidden"
        })
        var oMask = $("<div>第 "+(parseInt(iNow)+1)+" 关</div>");
        this.CreateMask(oMask,100);
    }
    $.Game.prototype.createBox = function(){
        $.each(this.nowJson.box, $.proxy(function(i,elem){

            var oBox = $("<div class='box'></div>");
            oBox.css({
                left : elem.x*50 + "px",
                top : elem.y*50 + "px"
            })

            this.oParent.append(oBox);
        },this))
    }
    $.Game.prototype.createPerson = function(){

        var oP =  $("<div class='person'></div>") ;

        oP.css({
            left : this.nowJson.person.x * 50 + "px",
            top : this.nowJson.person.y * 50 + "px"
        })


        oP.data("x",this.nowJson.person.x);
        oP.data("y",this.nowJson.person.y);
        this.oParent.append(oP);
        this.bindEvent(oP);
    }
    $.Game.prototype.bindEvent = function(oP){

        $(document).keyup($.proxy(function(ev){

            switch (ev.which){
                case 37://左
                    oP.css({backgroundPosition:"0 0"});
                    this.personMove(oP,{x:-1});
                    break;
                case 38://上
                    oP.css({backgroundPosition:"-50px 0"});
                    this.personMove(oP,{y:-1});
                    break;
                case 39://右
                    oP.css({backgroundPosition:"-100px 0"});
                    this.personMove(oP,{x:1});
                    break;
                case 40://下
                    oP.css({backgroundPosition:"-150px 0"});
                    this.personMove(oP,{y:1});
                    break;
                default :;
            }

        },this))

    }
    $.Game.prototype.personMove = function(oP,json){

        stepX = json.x || 0;
        stepY = json.y || 0;

        if( this.nowJson.map[(oP.data("y")+stepY)*Math.sqrt(this.nowJson.map.length)+oP.data("x")+stepX] != 2 ){

            //乌龟没超出围墙
            oP.data("x",oP.data("x") + stepX);
            oP.data("y",oP.data("y") + stepY);
            oP.css({
                left :  oP.data("x")*50,
                top  :  oP.data("y")*50
            })


            $(".box").each($.proxy(function(i,elem){

                if( this.collision(oP,$(elem)) ){//箱子和乌龟碰上

                    if( this.nowJson.map[(oP.data("y")+stepY)*Math.sqrt(this.nowJson.map.length)+oP.data("x")+stepX] != 2 ){
                        //箱子没超出围墙
                        $(elem).css({//箱子移动
                            left:(oP.data("x")+stepX)*50,
                            top:(oP.data("y")+stepY)*50
                        });
                        $.each( $(".box"),$.proxy(function(j,elem2){
                            //  检测箱子是否和其他箱子重叠
                            if(this.collision($(elem),$(elem2)) && elem!=elem2){
                                //箱子和其他箱子重叠
                                $(elem).css({//箱子移回原来位置
                                    left:(oP.data("x"))*50,
                                    top:(oP.data("y"))*50
                                });

                                oP.data("x",oP.data("x") - stepX);
                                oP.data("y",oP.data("y") - stepY);

                                oP.css({//乌龟退回原来位置
                                    left : (oP.data("x"))*50,
                                    top  : (oP.data("y"))*50
                                })

                            }
                        },this))
                    }else{//箱子超出围墙
                        oP.data("x",oP.data("x") - stepX);
                        oP.data("y",oP.data("y") - stepY);

                        oP.css({//乌龟退回原来位置
                            left : (oP.data("x"))*50,
                            top  : (oP.data("y"))*50
                        })
                    }
                };



            },this))

            this.showNext();
        }


    }
    $.Game.prototype.showNext = function(){
        var complete = 0;

        $(".pos3").each($.proxy(function(i,elem){

            $(".box").each($.proxy(function(j,elem2){

                if(this.collision($(elem),$(elem2))){
                    complete++;
                }

            },this))

        },this))

        if(complete == $(".box").size()){
            this.iNow++;


            if(this.iNow<this.s.gk.length){
                this.CreateMap(this.iNow);
                this.createBox();
                this.createPerson();
            }else{
                var oMask = $("<div>你好牛逼，竟然通过了本大爷设置的关卡！</br>然而并没有卵用</div>")
                this.CreateMask(oMask,25);
            }

        }


    }
    $.Game.prototype.CreateMask = function(oMask,fontSize){
        //设置遮罩层
        oMask.css({
            position:"absolute",
            width :this.oParent.width(),
            height:this.oParent.height(),
            top:0,
            left:0,
            zIndex:1000,
            textAlign:"center",
            lineHeight:40 + "px",
            paddingTop:(parseInt(this.oParent.height())/2 - 40) + "px",
            background:"rgba(0,0,0,0.5)",
            "font-size": fontSize + "px",
            color:"#fff",
            display:"none"
        })
        this.oParent.append(oMask);
        oMask.show(1000).delay(2000).fadeOut(1000);

    }
    $.Game.prototype.collision = function(obj1,obj2){//检测碰撞

        var L1 = $(obj1).offset().left;
        var T1 = $(obj1).offset().top;
        var R1 = L1 + $(obj1).width();
        var B1 = T1 + $(obj1).height();

        var L2 = $(obj2).offset().left;
        var T2 = $(obj2).offset().top;
        var R2 = L2 + $(obj2).width();
        var B2 = T2 + $(obj2).height();

        if( R1<=L2 || L1>=R2 || B1<=T2 || T1>=B2 ){
            return false;
        }else{
            return true;
        }
    }

})($)
