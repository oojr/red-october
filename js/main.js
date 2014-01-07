//Directional constants
var DIR_LEFT  = 0;
var DIR_RIGHT = 1;
var DIR_UP    = 2;
var DIR_DOWN  = 3;

enchant();
window.onload = function() {
    //Game object creation
    var game = new Core(320, 320);
    game.fps = 16;
    
    //Image loading
    game.preload(
        'map0.gif', 
        'chara0.gif',
        'img/bg/leaves.jpg',
        'need.mp3',
        'img/apple.png',
        'onsight.mp3',
        'black.mp3',
        'chara1.gif',
        'chara2.gif',
        'icon0.gif',
        'map2.gif',
        'walk1.wav',
        'bomb1.wav',
        'new.mp3',
        'net.png',
        'se2.wav',
        'send.mp3',
        'se1.wav',
        'se6.wav',
        'leaves.mp3',
        'img/bg/bound.png',
        'bound.mp3'
        );
    game.onload = function() {

    //Called when the loading is completed
        //Map creation
        var map = new Map(16, 16);
        map.image = game.assets['map0.gif']; 
        map.loadData([
            [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
            [0,2,2,2,2,0,2,2,2,2,0,2,2,2,2,0,2,2,2,2,0,0,0],
            [0,2,2,2,2,0,2,2,2,2,0,2,2,2,2,0,2,2,2,2,0,0,0],
            [0,2,2,2,2,0,2,2,2,2,0,2,2,2,2,0,2,2,2,2,0,0,0],
            [0,0,2,2,0,0,0,2,2,0,0,0,2,2,0,0,0,2,2,0,0,0,0],
            [0,0,2,2,0,0,0,2,2,0,0,0,2,2,0,0,0,2,2,0,0,0,0],
            [0,0,2,2,0,0,0,2,2,0,0,0,2,2,0,0,0,2,2,0,0,0,0],
            [0,0,2,2,2,2,2,2,2,2,2,2,2,2,0,0,0,2,2,0,0,0,0],
            [0,0,2,2,2,2,2,2,2,2,2,2,2,2,0,0,0,2,2,0,0,0,0],
            [0,0,2,2,0,0,0,2,2,0,0,0,2,2,2,2,2,2,2,0,0,0,0],
            [0,2,2,2,2,0,0,2,2,0,0,0,2,2,2,2,2,2,2,0,0,0,0],
            [0,2,2,2,2,0,0,2,2,0,0,0,2,2,0,0,0,0,0,0,0,0,0],
            [0,2,2,2,2,0,0,2,2,0,0,0,2,2,2,2,2,2,2,2,2,0,0],
            [0,0,0,0,0,0,0,2,2,0,0,0,2,2,2,2,2,2,2,2,2,0,0],
            [0,0,0,0,0,0,0,2,2,0,0,0,0,0,0,0,0,0,0,2,2,0,0],
            [0,0,0,0,0,0,0,2,2,0,0,0,0,0,0,0,0,0,0,2,2,0,0],
            [0,0,0,0,0,0,2,2,2,2,0,0,0,0,0,0,0,0,2,2,2,2,0],
            [0,0,0,0,0,0,2,2,2,2,0,0,0,0,0,0,0,0,2,2,2,2,0],
            [0,0,0,0,0,0,2,2,2,2,0,0,0,0,0,0,0,0,2,2,2,2,0],
            [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
        ],[
            [23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23],
            [23,-1,-1,-1,-1,23,-1,-1,-1,-1,23,-1,-1,-1,-1,23,-1,-1,-1,-1,23,23,23],
            [23,-1,-1,-1,-1,23,-1,-1,22,-1,23,-1,-1,22,-1,23,-1,-1,19,-1,23,23,23],
            [23,-1,-1,-1,-1,23,-1,-1,-1,-1,23,-1,-1,-1,-1,23,-1,-1,-1,-1,23,23,23],
            [23,23,-1,-1,23,23,23,-1,-1,23,23,23,-1,-1,23,23,23,-1,-1,23,23,23,23],
            [23,23,-1,-1,23,23,23,-1,-1,23,23,23,-1,-1,23,23,23,-1,-1,23,23,23,23],
            [23,23,-1,-1,23,23,23,-1,-1,23,23,23,-1,-1,23,23,23,-1,-1,23,23,23,23],
            [23,23,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,23,23,23,-1,-1,23,23,23,23],
            [23,23,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,23,23,23,-1,-1,23,23,23,23],
            [23,23,-1,-1,23,23,23,-1,-1,23,23,23,-1,-1,-1,-1,-1,-1,-1,23,23,23,23],
            [23,-1,-1,-1,-1,23,23,-1,-1,23,23,23,-1,-1,-1,-1,-1,-1,-1,23,23,23,23],
            [23,-1,-1,20,-1,23,23,-1,-1,23,23,23,-1,-1,23,23,23,23,23,23,23,23,23],
            [23,-1,-1,-1,-1,23,23,-1,-1,23,23,23,-1,-1,-1,-1,-1,-1,-1,-1,-1,23,23],
            [23,23,23,23,23,23,23,-1,-1,23,23,23,-1,-1,-1,-1,-1,-1,-1,-1,-1,23,23],
            [-1,-1,-1,-1,-1,-1,-1,-1,-1,23,23,23,23,23,23,23,23,23,23,-1,-1,23,23],
            [-1,-1,-1,-1,-1,-1,-1,-1,-1,23,23, 1, 1, 1, 1, 1, 1,23,23,-1,-1,-23,23],
            [-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,23, 1, 1, 1, 1, 1, 1,23,-1,-1,-1,-1,23],
            [-1,-1,-1,-1,-1,-1,-1,-1,20,-1,23, 1, 1, 1, 1, 1, 1,23,-1,-1,25,-1,23],
            [-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,23, 1, 1, 1, 1, 1, 1,23,-1,-1,-1,-1,23],
            [-1,-1,-1,-1,-1,-1,-1,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23]
        ]);
        map.collisionData = [
            [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
            [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
            [1,0,0,0,0,1,0,0,1,0,1,0,0,1,0,1,0,0,1,0,1,1,1],
            [1,0,0,0,0,1,0,0,1,0,1,0,0,1,0,1,0,0,1,0,1,1,1],
            [1,1,0,0,1,1,1,0,0,1,1,1,0,0,1,1,1,0,0,1,1,1,1],
            [1,1,0,0,1,1,1,0,0,1,1,1,0,0,0,1,1,0,0,1,1,1,1],
            [1,1,0,0,1,1,1,0,0,1,1,1,0,0,1,1,1,0,0,1,1,1,1],
            [1,1,0,0,1,1,1,0,0,1,1,1,0,0,1,1,1,0,0,1,1,1,1],
            [1,1,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,0,0,1,1,1,1],
            [1,1,0,0,1,1,1,0,0,1,1,1,0,0,0,0,0,0,0,1,1,1,1],
            [1,1,0,0,0,1,1,0,0,1,1,1,0,0,0,0,0,0,0,1,1,1,1],
            [1,0,0,1,0,1,1,0,0,1,1,1,0,0,1,1,1,1,1,1,1,1,1],
            [1,0,0,1,0,1,1,0,0,1,1,1,0,0,0,0,0,0,0,0,0,1,1],
            [1,1,1,1,1,1,1,0,0,1,1,1,0,0,0,0,0,0,0,0,0,1,1],
            [1,1,1,1,1,1,1,0,0,1,1,1,1,1,1,1,1,1,1,0,0,1,1],
            [1,1,1,1,1,1,1,0,0,1,1,1,1,1,1,1,1,1,1,0,0,1,1],
            [1,1,1,1,1,1,1,0,0,1,1,1,1,1,1,1,1,1,0,0,0,0,1],
            [1,1,1,1,1,1,0,0,1,0,1,1,1,1,1,1,1,1,0,0,1,0,1],
            [1,1,1,1,1,1,0,0,1,0,1,1,1,1,1,1,1,1,0,0,1,0,1],
            [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]
        ];

        //Player creation
        var player = new Sprite(32, 32);
        player.image = game.assets['chara0.gif'];
        player.x = 2 * 16;
        player.y = 16;
        player.dir   = DIR_DOWN;
        player.anim  = [
             9, 10, 11, 10, //Left
            18, 19, 20, 19, //Right
            27, 28, 29, 28, //Up
             0,  1,  2,  1];//Down
        
        //Periodic processing of the player
        player.addEventListener(Event.ENTER_FRAME, function() {
            //Move up
            if (game.input.up) {
                player.dir = DIR_UP;
                player.y -= 4;
                if (map.hitTest(player.x + 16, player.y + 32)) player.y += 4;
            }
            //Move down
            else if (game.input.down) {
                player.dir = DIR_DOWN;
                player.y += 4;
                if (map.hitTest(player.x + 16, player.y + 32)) player.y -= 4;
            } 
            //Move left
            else if (game.input.left) {
                player.dir = DIR_LEFT;
                player.x -= 4;
                if (map.hitTest(player.x + 16, player.y + 32)) player.x += 4;
            }
            //Move right
            else if (game.input.right) {
                player.dir = DIR_RIGHT;
                player.x += 4;
                if (map.hitTest(player.x + 16, player.y + 32)) player.x -= 4;
            } 
            
            //Frame setting
            if (!game.input.up && !game.input.down && 
                !game.input.left && !game.input.right) player.age = 1;//Standing Still
            player.frame = player.anim[player.dir * 4 + (player.age % 4)];
            //Collision detection with first cave
            if (calcLen(player.x + 16, player.y + 16, 8 * 16 + 8, 2* 16 + 8) <= 16) {
                player.x = 7 * 16;
                player.y = 6 *16;
                player.dir = DIR_RIGHT;
                var black = new BlackScene();
                game.pushScene(black);
            }
            //Collision detection with second cave
            if (calcLen(player.x + 16, player.y + 16, 13 * 16 + 8, 2* 16 + 8) <= 16) {
                player.x = 12 * 16;
                player.y = 6 *16;
                player.dir = DIR_DOWN;
                var send = new SendScene();
                game.pushScene(send);
            }
            //Collision detection with trees
            if (calcLen(player.x + 16, player.y + 16, 18 * 16 + 8, 2* 16 + 8) <= 16) {
                player.x = 12 * 16;
                player.y = 8 *16;
                player.dir = DIR_RIGHT;
                var leaves = new LeavesScene();
                game.pushScene(leaves);
            }
            //Collision detection with first building
            if (calcLen(player.x + 16, player.y + 16, 3 * 16 + 8, 10* 16 + 8) <= 16) {
                player.x = 3 * 16;
                player.y = 6 *16;
                player.dir = DIR_RIGHT;
                var onSight = new OnSightScene();
                game.pushScene(onSight);
            }
             //Collision detection with second building
            if (calcLen(player.x + 16, player.y + 16, 8 * 16 + 8, 16* 16 + 8) <= 16) {
                player.x = 7 * 16;
                player.y = 6 *16;
                player.dir = DIR_RIGHT;
                var news = new NewScene();
                game.pushScene(news);
            }
            
            //Collision detection with treasure box
            if (calcLen(player.x + 16, player.y + 16, 20 * 16 + 8, 17 * 16 + 8) <= 16) {
                player.x = 12* 16;
                player.y = 8 *16;
                player.dir = DIR_DOWN;
                var bound = new BoundScene();
                game.pushScene(bound);
            }
        });

        //Group creation
        var stage = new Group();
        stage.addChild(map);
        stage.addChild(player);
        game.rootScene.addChild(stage);

        //Virtual pad creation
        var pad = new Pad();
        pad.y = 220;
        game.rootScene.addChild(pad);

        //var label = new Label("X");
        //label.x = 10 * 16;
        //label.y = 16 * 7;
        //label.color="red";
        //game.rootScene.addChild(label);

        //Periodic processing of the scene
        game.rootScene.addEventListener(Event.ENTER_FRAME, function(e) {
            //Set stage XY coordinates
            var x = Math.min((game.width  - 16) / 2 - player.x, 0);
            var y = Math.min((game.height - 16) / 2 - player.y, 0);
            x = Math.max(game.width,  x + map.width)  - map.width;
            y = Math.max(game.height, y + map.height) - map.height;
            stage.x = x;
            stage.y = y;
        });
    };
    //Scene Creation
    var OnSightScene = Class.create(Scene, {
        initialize: function(){
            
            Scene.apply(this);
            this.backgroundColor = "white";
            var timeLabel = new Label();
            var lastLabel = new Label();
            var appleNum = 50;
            var lastAppleNum = appleNum;
            var apples = Array(appleNum);
            var inGame = true;

            var music = game.assets['onsight.mp3'];


            music.play();
        
        var time = 1000;
        timeLabel.text = 'SCORE : '+time;
        timeLabel.addEventListener('enterframe', function(e) {
            if (!inGame) return;
            time--;
           
            if (time <= 0) {
                inGame = false;
                game.popScene();
                return;
            }
            timeLabel.text = 'SCORE : '+time;
        });
        this.addChild(timeLabel);
        
        lastLabel.y = 20;
        lastLabel.text = 'Albums Left : '+lastAppleNum;
        this.addChild(lastLabel);
        
        var i;
        var randMax = 320 - 32;
        var imgW = 32;
        var imgH = 32;
        var wItemNum = game.width / (imgW*1.5);
        var hItemNum = game.height / (imgH*1.5);
        
        

        for (i=0; i<appleNum; i++) {
            apples[i]= new Sprite(32, 32);
            apples[i].id = i;
            apples[i].x = Math.floor((Math.random()*250)+20);
            apples[i].y = Math.floor((Math.random()*250)+20);
            apples[i].image = game.assets['img/apple.png'];
            apples[i].addEventListener('touchstart', function(e) {
                if (this.opacity == 0) return;
                this.opacity = 0;
                // 同じ位置に居たら重なった後ろのスクリプトの当たり判定を邪魔するので当たり判定を外す
                this.x = -this.width;
                this.y = -this.height;
                lastAppleNum--;
                lastLabel.text = 'Albums Left: '+lastAppleNum;
                if (lastAppleNum == 0) {
                    inGame = false;
                    music.stop();
                    game.assets['need.mp3'].play();

                    game.popScene();
                    
                }
            });
            this.addChild(apples[i]);
        }
          
        }   
    });
    var BlackScene = Class.create(Scene, {
         initialize: function(){
            Scene.apply(this);
            this.backgroundColor = 'black';
            var SCREEN_WIDTH = 320;
            var SCREEN_HEIGHT = 320;
            var SIZE_X = 32;
            var SIZE_Y = 32;

            var music = game.assets['black.mp3'];
            music.play();
//画像
            var CHARA_GRAPHICS = 'chara1.gif';
            var MAP_IMAGE = 'map0.gif';
             var ICON_GRAPHICS = 'icon0.gif';
            //var music = game.assets['black.wav'];
            var MAP_DATA = [ 
                [-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1],
                [-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1],
                [-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1],
                [-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1],
                [-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1],
                [-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1],
                [-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1],
                [-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1],
                [-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1],
                [-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1],
                [-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1],
                [-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1],
                [-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1],
                [-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1],
                [8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8],
                [8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8],
                [8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8],
                [8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8],
                [8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8],
                [8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8]
                   ];            
                var HP = 3;
                //フラグ    
        //ドクロを取る
       var flag1 = false;
      //赤ポーションを取る
      var flag2 = false;
       //ボールを投げる
       var flag3 = false;
       //コインを取る
      var flag4 = false;
       //スターを取る
       var flag5 = false;
       //王冠を取る
       var flag6 = false;
       var count = 0;
      //その他
       var randint = function(min,max)
       {
           return window.Math.floor( Math.random()*(max-min+1))+min;
       }; 
       var map = new Map(16,16);
        map.image = game.assets[MAP_IMAGE];
        map.loadData(MAP_DATA);
        map.onenterframe = function()
        {
            map.x -= 3;
            if(map.x+200 < 0)
            {
                map.x = 200;
            }
        };
        var map2 = new Map(16,16);
        map2.image = game.assets[MAP_IMAGE];
        map2.loadData(MAP_DATA);
        map2.onenterframe = function()
        {
            map2.x -= 3;
            if(map2.x+200 < 0)
            {
                map2.x = 200;
            }
        };
        map2.x = 200;
            
        //得点0スタートのためゲームスタートと同時にフレームを初期化
        
        
        //スコアラベル
        var scoreLabel = new Label("Score");
        scoreLabel.x = 200;
        scoreLabel.y = 7;
        scoreLabel.color = 'YELLOW';
        scoreLabel.font = "bold 16px 'Impact'"; 
        this.addChild(scoreLabel);
        //得点をわかりやすくするためにフレームとする
        scoreLabel.onenterframe = function(){
            if(game.frame % 20 == 0)
            {
                count++
            }
            scoreLabel.text = count;
        };
    
        //主人公：茶色クマ
        var hero = new Sprite(SIZE_X,SIZE_Y);
        hero.image = game.assets[CHARA_GRAPHICS];
        hero.x=30;
        hero.y=250;
        hero.vy = 1;
        hero.vx = 1;
        hero.frameIndex = 0;      
        //茶色クマ：フレーム別に使う画像をリストで保存
        var frameList = [0,1,2];
        
        //敵：白クマ     
        var enemy = new Sprite(SIZE_X, SIZE_Y);
        enemy.image = game.assets[CHARA_GRAPHICS];
        enemy.x = 250;
        enemy.y = 208;
        enemy.frame = 4;
        enemy.vx = 5;
        var enemy2 = new Sprite(SIZE_X, SIZE_Y);
        enemy2.image = game.assets[CHARA_GRAPHICS];
        enemy2.x = SCREEN_WIDTH;
        enemy2.y = 238;
        enemy2.frame = 4;
        enemy2.vx = 7;
        var enemy4 = new Sprite(SIZE_X, SIZE_Y);
        enemy4.image = game.assets[CHARA_GRAPHICS];
        enemy4.x = SCREEN_WIDTH;
        enemy4.y = 268;
        enemy4.frame = 4;
        enemy4.vx = 10;
        
        //ハート
        var life1 = new Sprite(16, 16);
        life1.image = game.assets[ICON_GRAPHICS];
        life1.x = 10;
        life1.y = 30;
        life1.frame = 70;
        //ハート
        var life2 = new Sprite(16, 16);
        life2.image = game.assets[ICON_GRAPHICS];
        life2.x = 30;
        life2.y = 30;
        life2.frame = 70;
        //ハート
        var life3 = new Sprite(16, 16);
        life3.image = game.assets[ICON_GRAPHICS];
        life3.x = 50;
        life3.y = 30;
        life3.frame = 70;
    
        //テキストラベル
        var label = new Label("BLACK");
        label.x = 10;
        label.y = 7;
        label.color = 'white';
        label.font = "bold 16px 'Impact'";  
    
        //薬
        var item1 = new Sprite(16, 16);
        item1.image = game.assets[ICON_GRAPHICS];
        item1.x = 1000;
        item1.y = 218;
        item1.frame = 12;
        
        //ドクロ
        var item2 = new Sprite(16, 16);
        item2.image = game.assets[ICON_GRAPHICS];
        item2.x = 2000;
        item2.y = 248;
        item2.frame = 11;
        
        //薬2
        var item3 = new Sprite(16, 16);
        item3.image = game.assets[ICON_GRAPHICS];
        item3.x = 3000;
        item3.y = 278;
        item3.frame = 13;
       
        
       
                                       
         //主人公：ゲーム中の処理
        hero.onenterframe = function()
        {
            //フレームごとにheroの絵を変える
            if(game.frame % 2 ==　0){
                this.frameIndex += 1;
                this.frameIndex %= frameList.length;
                this.frame = frameList[this.frameIndex];
            }
            //プレイヤーの速度
            //ドクロ
            if(flag1 == true)
            {
                hero.vx = 0;
            }
            //ドクロを取っている場合に赤ポーションを取る
            else if(flag2 == true)
            {
                hero.vx = 1;
                hero.vy = 1;
            }
            //コイン
            else if(flag4 == true)
            {
                hero.vx = 3;
                hero.vy = 3;
            }
            //王冠
            else if(flag5 == true)
            {
                hero.vx = 10;
                hero.vy = 10;
            }
            //スター
            else if(flag6 == true)
            {
                hero.vx = 5;
                hero.vy = 5;
            }
            //GameOver判定：HP0
            if(enemy.within(hero, 20))
            {
                enemy.x = SCREEN_WIDTH;
                HP --;
                hero.x = 30;
                hero.y = 250;
                flag1 = false;
                flag2 = false;
                flag4 = false;
                flag6 = false;
                flag5 = false;
            }
            else if(enemy2.within(hero, 20))
            {
                enemy2.x = SCREEN_WIDTH;
                HP --;
                hero.x = 30;
                hero.y = 250;
                flag1 = false;
                flag2 = false;
                flag4 = false;
                flag5 = false;
                flag6 = false;
            }
            else if(enemy4.within(hero, 20))
            {
                enemy4.x = SCREEN_WIDTH;
                HP --;
                hero.x = 30;
                hero.y = 250;
                flag1 = false;
                flag2 = false;
                flag4 = false;
                flag5 = false;
                flag6 = false;
            }
   
            //HPが1か2の場合のみ
            if(HP == 1 || HP == 2)
            {
                if(item1.within(hero,20))
                {
                    HP ++;
                    item1.x = 1000;
                } 
            }
            if(item2.within(hero,20))
            {   
                flag1 = true;
                flag2 = false;
                flag4 = false;
                flag5 = false;
                flag6 = false;
                item2.x = 1500;
            }
            if(item3.within(hero,20))
            {
                if(flag1 == true)
                {
                    flag2 = true
                    flag1 = false;
                    flag4 = false;
                    flag5 = false;
                    flag6 = false;
                    item3.x = 2000;
                }
            } 
            
            if(count == 88)
            {
                label.text = "終わり";
                music.stop();
                var score = ""
                var msg = "完走。";
                game.popScene();
            }
            if(HP == 0)
            {
                hero.frame=3;
                enemy.frame = 3;
                enemy2.frame = 3;
                enemy4.frame = 3;
                label.text = "終わり";
               
                    music.stop();
           //         bgm = game.assets[BGM_END];
            //        game.assets['past.wav'].play();
                var score = count;
                var msg = score + "メートルでした。";
                game.popScene();
            }
            if(HP == 3)
            {
                life1.x = 10;
                life2.x = 30;
                life3.x = 50;
            }
            else if(HP == 2)
            {
                life1.x = 10;
                life2.x = 30;
                life3.x = -100;
            }
            else if(HP == 1)
            {
                life1.x = 10;
                life2.x = -100;
                life3.x = -100;
            }
            else
            {
                life1.x = -100;
                life2.x = -100;
                life3.x = -100;
            }
            //移動
            var input = game.input;
            if (input.right  === true)
            {
                if(hero.x < SCREEN_WIDTH-40)
                {
                    hero.x += hero.vx;
                }
            }
            else if (input.left === true)
            {
                if(hero.x > 0)
                {
                    hero.x -= hero.vx;
                }
            }
            if(input.up == true)
            {
                if(hero.y > SCREEN_HEIGHT/2+40)
                {
                    hero.y -= hero.vy;
                }
            }
            else if(input.down == true)
            {
                if(hero.y < SCREEN_HEIGHT-40)
                {
                    hero.y += hero.vy;
                }
            }
            if(input.a == true)
            {
                flag3 = true;
            }
        };

        //敵：ゲーム中の処理
        enemy.onenterframe = function(){
            enemy.x -= enemy.vx;;
            if(enemy.x <-100) {
                enemy.x = SCREEN_WIDTH;
            }                                   
        }; 
        enemy2.onenterframe = function(){
            if(game.frame > 500)
            {
                enemy2.x -= enemy2.vx;
            }
            if(enemy2.x <-100) {
                enemy2.x = SCREEN_WIDTH;
            }
        };
        enemy4.onenterframe = function(){
            if(game.frame > 1000)
            {
                enemy4.x -= enemy4.vx;
            }
            if(enemy4.x <-100) {
                enemy4.x = SCREEN_WIDTH;
            }
        };
    
        //薬の処理
        item1.onenterframe = function(){
            if(game.frame > 100)
            {
                item1.x -= 3;
            }
            if(item1.x <-100) {
                item1.x = 1000;
            }
        };
    
        //ドクロの処理
        item2.onenterframe = function(){
            if(game.frame > 100)
            {
                item2.x -= 3;
            }
            if(item2.x <-100) {
                item2.x = 1500;
            }
        };
    
        //薬2の処理
        item3.onenterframe = function(){
            if(game.frame > 100)
            {
                item3.x -= 3;
            }
            if(item3.x <-100) {
                item3.x = 2000;
            }
        };
        //描画
        this.addChild(map);
        this.addChild(map2);
        this.addChild(hero);      
        this.addChild(enemy);
        //this.addChild(enemy2);
        this.addChild(enemy4);
        this.addChild(label);
        this.addChild(life1);
        this.addChild(life2);
        this.addChild(life3);
        this.addChild(item1);
        this.addChild(item2);
        this.addChild(item3);   
        
        //アイテム4
        for(var i=0; i<10; ++i)
        {
            var item4 = new Sprite(16,16);
            item4.image = game.assets[ICON_GRAPHICS];
            item4.x = randint(SCREEN_WIDTH+1000,SCREEN_WIDTH+2000);
            item4.y = randint(220,SCREEN_HEIGHT);
            item4.vx = 3;
            //         ball2.frame = 16;
            //1
            if(i%2 == 0)
            {
                item4.frame = 14;
            }
            //2
            else if(i%3 == 0)
            {
                item4.frame = 30;
            }
            else
            {
                item4.frame = 31;
            }
            item4.onenterframe= function()
            {
                this.x -= this.vx;
                if(this.x < -100)
                {
                    this.x = randint(SCREEN_WIDTH+1000,SCREEN_WIDTH+2000);
                    this.y = randint(220,SCREEN_HEIGHT);
                }
                if(hero.within(this,20))
                {
                    if(this.frame == 14)
                    {
                        // ball2.image = game.assets[ENEMY_GRAPHICS];
                        //  ball.frame = 16;
                        if(flag1 == false)
                        {
                            flag4 = true;
                            flag5 = false;
                            flag6 = false;
                            flag2 = false;
                            this.x = randint(SCREEN_WIDTH+1000,SCREEN_WIDTH+2000);
                            this.y = randint(220,SCREEN_HEIGHT);
                        }
                    }
                    else if(this.frame == 31)
                    {
                        // ball2.image = game.assets[ENEMY_GRAPHICS];
                        //ball.frame = 17;
                        if(flag1 == false)
                        {
                            flag5 = true;
                            flag4 = false;
                            flag6 = false;
                            flag1 = false;
                            flag2 = false;
                            this.x = randint(SCREEN_WIDTH+1000,SCREEN_WIDTH+2000);
                            this.y = randint(220,SCREEN_HEIGHT);
                        }
                    }
                    else if(this.frame == 30)
                    {
                        // ball2.image = game.assets[ENEMY_GRAPHICS];
                        //ball.frame = 18;
                        if(flag1 == false)
                        {
                            flag6 = true;
                            flag4 = false;
                            flag5 = false;
                            flag1 = false;
                            flag2 = false;
                            this.x = randint(SCREEN_WIDTH+1000,SCREEN_WIDTH+2000);
                            this.y = randint(220,SCREEN_HEIGHT);
                        }
                    }
                }   
            };
            this.addChild(item4);
        }
        //敵5
        for(var i=0; i<10; ++i)
        {
            var enemy5 = new Sprite(32,32);
            enemy5.image = game.assets[CHARA_GRAPHICS];
            enemy5.x = randint(SCREEN_WIDTH,SCREEN_WIDTH+2000);
            enemy5.y = randint(200,SCREEN_HEIGHT);
            enemy5.vx = 3;
            //         ball2.frame = 16;
            //1
            if(i%2 == 0)
            {
                enemy5.frame = 5;
            }
            //2
            else if(i%3 == 0)
            {
                enemy5.frame = 10;
            }
            else
            {
                enemy5.frame = 10;
            }
            enemy5.onenterframe= function()
            {
                this.x -= this.vx;
                if(this.x < -100)
                {
                    this.x = randint(SCREEN_WIDTH+1000,SCREEN_WIDTH+2000);
                    this.y = randint(200,SCREEN_HEIGHT);
                }
                if(hero.within(this,20))
                {
                    HP--;
                    hero.x = 30;
                    hero.y = 250;
                    this.x = randint(SCREEN_WIDTH+1000,SCREEN_WIDTH+2000);
                    this.y = randint(200,SCREEN_HEIGHT);
                }
                if(HP == 0)
                {
                    if(this.frame == 10)
                    {
                        this.frame = 13;
                    }
                    else
                    {
                        this.frame = 8;
                    }
                }
                if(flag3 == true)
                {
                    if(this.within(ball,20))
                    {
        //                this.x = randint(SCREEN_WIDTH+1000,SCREEN_WIDTH+2000);
         //               this.y = randint(200,SCREEN_HEIGHT);
                        ball.x = hero.x+25;//r
                        ball.y = hero.y+15;
                        flag3 = false;
                    }
                }
            };
            this.addChild(enemy5);
        }
         }
    });
    var NewScene = Class.create(Scene, {
        initialize: function(){ 
            Scene.apply(this);
            var bear = new Sprite(32, 32);
            var music = game.assets['new.mp3'];
            music.play();
        //画像を選択
        bear.image = game.assets['chara1.gif'];
        //最初の座標を設定
        bear.x = 160-16;
        bear.y = 320-32-32-40;
        bear.vx = 2.6;
        bear.ax = 0.05;
        bear.vy = 2.6;
        bear.ay = 0.05;
        bear.scaleX = 1.1;
        bear.scaleY = 1.0;
        //自由に定義できるbearに関する変数の一つ
        //これを変化させて、frameに代入することで画像を変化させる
        bear.pose = 0;
        bear.frame = bear.pose;
        //enterframe(画面更新)のたびに呼ばれるメソッド
        //この中でbear.やbear.x,bear.yを変化させることで動いているように見せる
        var teki = new Sprite(32, 32);  //scale大きさ
        teki.image = game.assets['chara2.gif'];
        teki.x = 32+180;
        teki.y = 160-80;
        teki.vx = 1.3;
        teki.vy = 1.3;
        teki.scaleX = 1.1;
        teki.scaleY = 1.1;
        teki.pose = 0;
        teki.frame = teki.pose;

        var teki2 = new Sprite(32, 32);  //scale大きさ
        teki2.image = game.assets['chara2.gif'];
        teki2.x = 32+40;
        teki2.y = 160-80;
        teki2.vx = 0.6;
        teki2.vy = 0.6;
        teki2.pose = 0;
        teki2.scaleX = 1.7;
        teki2.scaleY = 1.4;
        teki2.frame = teki2.pose;


        var bakudan = new Sprite(16, 16);  //scale大きさ
        bakudan.image = game.assets['icon0.gif'];
        bakudan.x =140;
        bakudan.y =10;      
        bakudan.frame = 25;
        bakudan.opacity = 1;
        bakudan.use = 0;

                 
        var score = new Label();
        score.x =11;
        score.y =10;
        var point = 0;
        score.text = "0 point";
        score.color = '#f00';
        score.font = "15px bold";
        var time = new Label();
        time.x = 220;
        time.y = 10;
        var limitTime = 50;
        time.text ='Time：' +limitTime ;
        time.color = '#f00';
        time.font = "15px bold";
        var count =0;
        var h_setnum = 0;

            
        bear.addEventListener('enterframe', function(e) {
        if(limitTime != 0){

            score.text = point + ' points';
            //当たり判定。
            var distance1 = Math.sqrt((bear.x - teki.x)*(bear.x - teki.x) + (bear.y - teki.y)*(bear.y - teki.y));
            if(distance1 <  ((bear.width*0.45)+(teki.width*0.45))){//teki
            if(bakudan.use == 1){
                if(teki.x > bear.x){//敵がプレイヤーの右にいたら
                    bear.x -= bear.vx*1;
                    teki.x += teki.vx*70;
                }else{//敵がプレイヤーの左
                    bear.x += bear.vx*1;
                    teki.x -= teki.vx*70;
                }
                if(teki.y < bear.y){//敵がプレイヤーの上
                    bear.y += bear.vy*1;
                    teki.y -= teki.vy*70;
                }else{//敵がプレイヤーの下
                    bear.y -= bear.vy*1;
                    teki.y += teki.vy*70;
                }               
                bakudan.use = 2;
                bakudan.opacity = 0;
                var sound = game.assets['bomb1.wav'].clone();
                sound.play();
                point += 250;               
            }else{
                if(teki.x > bear.x){//敵がプレイヤーの右にいたら
                    bear.x -= bear.vx*3;
                    teki.x += teki.vx*8;
                }else{//敵がプレイヤーの左
                    bear.x += bear.vx*3;
                    teki.x -= teki.vx*8;
                }
                if(teki.y < bear.y){//敵がプレイヤーの上
                    bear.y += bear.vy*3;
                    teki.y -= teki.vy*8;
                }else{//敵がプレイヤーの下
                    bear.y -= bear.vy*3;
                    teki.y += teki.vy*8;
                }
            }point += 10;
            }

            var distance2 = Math.sqrt((bear.x - teki2.x)*(bear.x - teki2.x) + (bear.y - teki2.y)*(bear.y - teki2.y));
            if(distance2 <  ((bear.width*0.5)+(teki2.width*0.5))){//teki2
            if(bakudan.use == 1){
                if(teki2.x > bear.x){//敵がプレイヤーの右にいたら
                    bear.x -= bear.vx*2;
                    teki2.x += teki2.vx*150;
                }else{//敵がプレイヤーの左
                    bear.x += bear.vx*2;
                    teki2.x -= teki2.vx*150;
                }
                if(teki.y < bear.y){//敵がプレイヤーの上
                    bear.y += bear.vy*2;
                    teki2.y -= teki2.vy*150;
                }else{//敵がプレイヤーの下
                    bear.y -= bear.vy*2;
                    teki2.y += teki2.vy*150;
                }               
                bakudan.use = 2;
                bakudan.opacity = 0;
                var sound = game.assets['bomb1.wav'].clone();
                sound.play();
                point+=250;             
            }else{
                if(teki2.x > bear.x){//敵がプレイヤーの右にいたら
                    bear.x -= bear.vx*6;
                    teki2.x += teki2.vx*27;
                }else{//敵がプレイヤーの左
                    bear.x += bear.vx*6;
                    teki2.x -= teki2.vx*27;
                }
                if(teki2.y < bear.y){//敵がプレイヤーの上
                    bear.y += bear.vy*6;
                    teki2.y -= teki2.vy*27;
                }else{//敵がプレイヤーの下
                    bear.y -= bear.vy*6;
                    teki2.y += teki2.vy*27;
                }
            }point += 15;
            }           
            
            //プレイヤーの動作
            ///-------bakudan set-----------------///
            if(game.input.a == 1 && bakudan.use == 0){//アイテムを使う
                bakudan.x = bear.x+24;
                bakudan.y = bear.y+16;
                bakudan.opacity = 1;
                h_setnum =1;
                bakudan.use =1;
            }
            if(game.input.a == 0 && h_setnum == 1){//アイテムを保持
                bakudan.x = bear.x+24;
                bakudan.y = bear.y+16;
                h_setnum = 1;
            }if(bakudan.use ==1){           
                bakudan.x = bear.x+24;
                bakudan.y = bear.y+16;          
            }
            if(game.input.right == 1 ||
               game.input.left == 1 ||
               game.input.up == 1 || 
               game.input.down == 1)
            {
                animation(bear);
                if(game.input.right){
                    if(bear.x < 320 - 32){      
                            bear.x += bear.vx;
                    }
                }
                if(game.input.left){
                    if(0 < bear.x){
                            bear.x -= bear.vx;
                    }
                }
                if(game.input.up){
                    if(0 < bear.y){
                            bear.y -= bear.vy;
                    }
                }
                if(game.input.down){
                    if(bear.y < 320 - 32){          
                        bear.y += bear.vy;                      
                    }
                }
            }else{
                bear.frame=0;
            }
            //場外判定（プレイヤー）
            if((bear.x < 32-16 || bear.x > 320 - 32-16)||
                (bear.y < 8 ||bear.y > 320-32*2+8)){
                  //  bear.x = 160-16;
                  //  bear.y = 320-32-32-40;
                    limitTime=0;
               
                var sound = game.assets['walk1.wav'].clone();
                sound.play();
            }
            //////敵の動作//////
            //+------------teki----------------+//
            animation(teki);
            if(teki.x > bear.x){//敵がプレイヤーの右にいたら
                teki.x -= teki.vx;
            }else{//敵がプレイヤーの左
                teki.x += teki.vx;
            }
            if(teki.y < bear.y){//敵がプレイヤーの上
                teki.y += teki.vy;
            }else{//敵がプレイヤーの下
                teki.y -= teki.vy;
            }
            //場外判定（敵）
            if((teki.x < 32-16 || teki.x > 320 - 32-16)||
                (teki.y < 8 ||teki.y > 320-32*2+8)){
                teki.x = 32+50+130;
                teki.y = 160-80;
                point+=2500;
                var sound = game.assets['walk1.wav'].clone();
                sound.play();
            }
            //+------------teki2----------------+//
            animation(teki2);
            if(teki2.x > bear.x){//敵がプレイヤーの右にいたら
                teki2.x -= teki2.vx;
            }else{//敵がプレイヤーの左
                teki2.x += teki2.vx;
            }
            if(teki2.y < bear.y){//敵がプレイヤーの上
                teki2.y += teki2.vy;
            }else{//敵がプレイヤーの下
                teki2.y -= teki2.vy;
            }
            //場外判定（敵）
            if((teki2.x < 32-16 || teki2.x > 320 - 32-16)||
                (teki2.y < 8 ||teki2.y > 320-32*2+8)){
                teki2.x = 32+40;
                teki2.y = 160-80;
                point+=4000;
                var sound = game.assets['walk1.wav'].clone();
                sound.play();
            }
            //時間処理
            count++;
            if(count == game.fps-1){
               limitTime -= 1;
               time.text = 'Time：'+limitTime;
               point += 50;
               count =0;
             }
            }else{
                game.popScene();
                music.stop();
            }
                
        });

        //padを入れることで十字キーを画面に置くことができる
        //スマホで遊べるようになる(十字キー操作のもの)
        var pad = new Pad();
        pad.x = 0;
        pad.y = 224;

        //オブジェクトを画面に追加
        var map = new Array(20);
        for(var i=0;i<20;i++){
            map[i] = new Array(20);
        }
        for(var i=0;i<20;i++){
            for(var j=0;j<20;j++){
                map[i][j] = new Sprite(16,16);
                map[i][j].image = game.assets['map2.gif'];
                map[i][j].x = 16*i;
                map[i][j].y =16*j;
                map[i][j].frame =10;
                
                if((2 <=i && i <= 17) && (2 <= j && j <= 17)){
                map[i][j].opacity = 0.8;
                map[i][j].frame =21;
                map[i][j].scaleX=1.04;
                map[i][j].scaleY=1.04;              
                }
                else{
                map[i][j].opacity = 0.4;
                map[i][j].scaleX=1;
                map[i][j].scaleY=1.1;
                    }
                this.addChild(map[i][j]);
            }
        }
        this.addChild(bakudan);
        this.addChild(teki2);
        this.addChild(bear);
        this.addChild(pad);
        this.addChild(teki);
        this.addChild(time);
        this.addChild(score);

        //ゲームの背景色を選択 rgb(=Red Green Blue)
        this.backgroundColor = 'RGB(220,220,220)';

        var animation;
        animation = function(e){
        e.pose %= 3;                  
        e.frame = e.pose;
        e.pose++;
}


        }
    });

    var SendScene = Class.create(Scene, {
        initialize: function(){
            Scene.apply(this);
            var music = game.assets['send.mp3'];
            music.play();
            var that = this;
            var Net = enchant.Class.create(enchant.Sprite, {
                  initialize: function(x,y) {
                  enchant.Sprite.call(this, 60,12);
                  this.image = game.assets['net.png'];

                   this.x = x;
                   this.y = y;
                   this.frame = 0;
                   this.nettick=0;
                   this.anim  = [0, 1, 0, 2];
                   this.hit=0;

                   this.addEventListener('touchstart',
                      function(e) { net.x=e.x-30; game.touched = true; });
                   this.addEventListener('touchend',
                      function(e) { net.x=e.x-30; game.touched = false; });
                   this.addEventListener('touchmove',
                      function(e) { net.x=e.x-30;});
    
                    this.addEventListener(Event.ENTER_FRAME, function() {
                        if(this.hit>0) {
                        this.nettick++;
                        this.frame = this.anim[this.nettick%3];
                        this.hit--;
                        } else {
                        this.frame = 0;
                        }
        
                    });

                    
                        } 
                    });//End of Net                    
                var Bear = enchant.Class.create(enchant.Sprite, {
                             initialize: function(x,y,col) {
                             enchant.Sprite.call(this, 32,32);
    
                             this.x = x;
                             this.y = y;
                         
                         this.image = game.assets['chara1.gif'];
                         this.tick  = 0;
                         this.anim  = [0, 1, 0, 2,
                               5, 6, 5, 7,
                               10, 11, 10,12];
                          this.frame = 0;

                          this.fall=1;
 
                          bearcnt++;

                          //スプライトの定期処理
                              this.addEventListener(Event.ENTER_FRAME, function() {
                                //スプライトのフレームの指定
                                  this.tick++;
                                  this.frame = this.anim[col*4+bear.tick % 4];
        
                                //右向き
                                  if (this.scaleX == 1) {
                                    this.x += 2;
                                    //向き変更
                                    if (this.x > 300 - 32) this.scaleX = -1;
                                } 
                                //左向き
                                else {
                                    this.x -= 2;
                                    //向き変更
                if (this.x < 0) this.scaleX = 1;
            }
        
        this.y += this.fall;
        
        if( this.y+32 >= net.y && this.y+16 <= net.y+12  &&  this.fall>0) { // 当たり判定をするべきか
        if( net.intersect(this) ) { // 当たっている場合
            game.se = game.assets['se2.wav'].clone();
            game.se.play();
            len = Math.abs(this.x+16-(net.x+30));
            this.fall =-(7-len/10);
            this.y = net.y-32+6;
            net.hit=12;
        } 
        } else if( this.y >= 250){//落下してしまった場合
            this.frame = col*5+3;
            game.popScene();
            music.stop();
        }

        this.fall+=0.1;

    });
    
    
      that.addChild(this);
    }
});//End of Bear
    game.touched=false;
    game.tick=0;
        bearcnt=0;
    maxcnt=9;
    this.backgroundColor = 'black';
    

    net = new Net(140,250);
    this.addChild(net);
    //player = new Player(100,50);
    bear = new Bear(50,-40,bearcnt%3);
    
    scoreLabel = new ScoreLabel(8,8);
    this.addChild(scoreLabel);

    this.addEventListener(Event.ENTER_FRAME, function() {
        game.tick++;
        scoreLabel.score = game.tick;
        
        if( bearcnt<maxcnt && game.tick%100 == 0) {  
        new Bear(50,-40,bearcnt%3);
        }
    });
    


        }
});


    var LeavesScene = Class.create(Scene,{
        initialize: function(){
            Scene.apply(this);
            var music = game.assets['leaves.mp3'];
            music.play();
            var scene = this;
            game.score = 0;
            var label;
            var bear;
            var bg;
            var Apple_POINT_MUSIC ='se1.wav';
            var TIMER_GET_MUSIC = 'se6.wav';
            var RUBY_GET_MUSIC = 'se6.wav';

    //ポイント獲得ラベル    
    Point = Class.create( Label, {
    initialize:function(txt, x, y, duration, xspeed, yspeed) {
    Label.call( this, txt );
    this.x = x; //衝突した場所の座標
    this.y = y; //衝突した場所の座標
    this.opaspeed = 1.0 / duration; //透明度の変化値
    this.vx = xspeed;
    this.vy = yspeed;
    },
    
    onenterframe:function() {
    this.x += this.vx;
    this.y += this.vy;
    //テキストを透明に変化させる
    var newopa = this.opacity - this.opaspeed;
    
    if ( newopa <= 0 ) {
            game.rootScene.removeChild(this); 
    } else {
        this.opacity = newopa;
    }
    }
});//End of point
        var bg = makeBackground(game.assets['img/bg/leaves.jpg']);
        scene.addChild(bg);
        
        
        //バーチャルパッドの生成
        var pad = new Pad();
        pad.x = 220;
        pad.y = 210;
        scene.addChild(pad);
        
        //ラベルの生成
        label = new Label("Time : 40");
        label.moveTo(10,10);
        //フォントの指定
        
        label.font = "bold 16px 'Impact'";
        this.addChild(label);
        
        //スコアラベルの生成
        score = new Label("Score : 0");
        score.moveTo(200, 10);
        score.color="white";
        score.font = "bold 16px 'Impact'";
        this.addChild(score);
        
        
        //クマの生成
        bear = new Sprite(32, 32);
        bear.image = game.assets['chara1.gif'];
        bear.x = 160 - 16;
        bear.y = 320 - 16 - 32;
        bear.anim = [0, 1, 0, 2];
        bear.frame = 0;
        this.addChild(bear);
        
        //クマの定期処理
        bear.tick = 0;
        bear.addEventListener(Event.ENTER_FRAME, function () {
            //左
            if(game.input.left) {
                bear.x -= 6;
                bear.scaleX = -1;
            }
            //右
            else if(game.input.right) {
                bear.x += 6;
                bear.scaleX = 1;
            }
            
            //画面の外に出ないように制御
            var left = 0;
            var right = 320 - 32;
            
            //左ハミ出しチェック
            if(this.x < left) {
                this.x = left;
                this.x *= -1;
            }
            //右ハミ出しチェック
            else if(this.x > right){
                this.x = right;
                this.x = this.x;
            }
            
            
            //フレームの指定
            bear.tick++;
            if(!game.input.left && !game.input.right) {
                bear.frame = bear.anim[0];
            }else{
                bear.frame = bear.anim[bear.tick % 4];
            }
        });
    
    
    //林檎の追加
    scene.addApple = function (x, speed) {
        //林檎の生成
        var apple = new Sprite(16, 16);
        apple.image = game.assets['icon0.gif'];
        apple.x = x;
        apple.y = -16;
        apple.frame = 15;
        apple.speed = speed;
        scene.addChild(apple);
        
        //スプライトの生成
        apple.tick = 0;
        apple.addEventListener(Event.ENTER_FRAME, function() {
            apple.tick++;
            apple.y += apple.speed;
            //林檎と衝突
            if(bear.within(apple, 16)){
                game.score += 30;
                var pm = game.assets[Apple_POINT_MUSIC].clone();
                pm.play();
                //scene.addChild(new Point( "<strong><font color=white size='+1'>+30</font><strong>", this.x, this.y, 10, 0, -4 ));
                scene.removeChild(apple);
            }
            //地面と衝突
            else if(apple.y > 320 - 16){
                scene.removeChild(apple);
            }
             
        });
    };
    
     //バナナの追加
     scene.addBanana = function (x) {
        //バナナの生成
        var banana = new Sprite(16, 16);
        banana.image = game.assets['icon0.gif'];
        banana.x = x;
        banana.y = -16;
        banana.frame = 16;
        banana.speed = 12;
        scene.addChild(banana);
        
        //スプライトの生成
        banana.addEventListener(Event.ENTER_FRAME, function() {
            banana.y += banana.speed;
            //バナナと衝突
            if(bear.within(banana, 16)){
                game.score += 60;
                var pm = game.assets[Apple_POINT_MUSIC].clone();
                pm.play();
                //scene.addChild( new Point( "<strong><font color=white size='+1'>+60</font><strong>", this.x, this.y, 10, 0, -4 ) );
                scene.removeChild(banana);
            }
            //地面と衝突
            else if(banana.y > 320 - 16){
                scene.removeChild(banana);
            }
        });
    };
   
    
     //モンスターの追加
    
    
    //時計の追加
    scene.addTimer = function (x) {
        //時計の生成
        var timer = new Sprite(16, 16);
        timer.image = game.assets['icon0.gif'];
        timer.x = x;
        timer.y = -16;
        timer.frame = 34;
        timer.speed = 15;
        scene.addChild(timer);
        
        //スプライトの生成
        timer.addEventListener(Event.ENTER_FRAME, function() {
            timer.y += timer.speed;
            //時計と衝突
            if(bear.within(timer, 16)){
                game.tick += 100;
                var tm = game.assets[TIMER_GET_MUSIC].clone();
                tm.play();
                //scene.addChild( new Point( "<strong><font color=blue size='+1'>Time:+10</font><strong>", this.x, this.y, 10, 0, -4 ) );
                scene.removeChild(timer);
            }
            //地面と衝突
            else if(timer.y > 320 - 16){
                scene.removeChild(timer);
            }
        });
    };
    
    //ルビーの追加
    scene.addRuby = function (x) {
        //ルビーの生成
        var ruby = new Sprite(16, 16);
        ruby.image = game.assets['icon0.gif'];
        ruby.x = x;
        ruby.y = -16;
        ruby.frame = 66;
        ruby.speed = 22;
        scene.addChild(ruby);
        
        //スプライトの生成
        ruby.addEventListener(Event.ENTER_FRAME, function() {
            ruby.y += ruby.speed;
            //時計と衝突
            if(bear.within(ruby, 16)){
                game.score += 100;
                var rm = game.assets[RUBY_GET_MUSIC].clone();
                rm.play();
                //scene.addChild( new Point( "<strong><font color=red size='+1'>+100</font><strong>", this.x, this.y, 10, 0, -4 ) );
                scene.removeChild(ruby);
            }
            //地面と衝突
            else if(ruby.y > 320 - 16){
                scene.removeChild(ruby);
            }
        });
    };
    
    
    //シーンの定期処理
    game.tick = 400;
    scene.addEventListener(Event.ENTER_FRAME, function () {
        game.tick--;
        if(game.tick > 0){
            //林檎の生成
            if((game.tick % 10) === 0){
                var x = Math.floor(Math.random() * 300);
                var speed = 4 + Math.floor(Math.random() * 6);
                scene.addApple(x, speed);
                
            }
            
            //モンスターの生成
            if((game.tick % 7) === 0){
                var x = Math.floor(Math.random() * 300);
                //game.addMonster(x);
                
            }
            
            //バナナの生成
            if((game.tick % 20) === 0){
                var x = Math.floor(Math.random() * 300);
                scene.addBanana(x);
                
            }
            
            //タイマーの生成
            if((game.tick % 60) === 0){
                var x = Math.floor(Math.random() * 300);
                scene.addTimer(x);
                
            }
            
            //ルビーの生成
            if((game.tick % 90) === 0){
                var x = Math.floor(Math.random() * 300);
                scene.addRuby(x);
                
            }
            
            //時間の表示
            label.text = "Time : " + Math.floor(game.tick / 10);
            //10秒以下になったら、色を変更
            if(game.tick < 100){
                label.color = "red";
                //tickが2で割って余りが出る時は消して、それ以外は表示
                if(game.frame % 2 == 0){
                    label.opacity = 0;
                }else{
                    label.opacity = 1;
                }
            }else if(game.tick > 100){
                label.color = "white";
                label.opacity = 1;
            }
            
            //スコアの表示
            score.text = "Score : " + game.score;
            } else if(game.tick === 0) {
                //ゲームオーバー画面の表示
                game.popScene();
                music.stop();
            }
            
        });


        }
    });
    var BoundScene = Class.create(Scene,{
        initialize: function(){
        Scene.apply(this);

        var scene = this;
        var music = game.assets['bound.mp3'];
        music.play();
        var stage = new Group();
    var player = new Sprite(32, 32);
    var enemy = new Sprite(32, 32);
    var shot = [];
    var chart = [
        [{deg:90}],
        [{deg:90,type:1}],
        [{deg:90}],
        [{deg:90,type:1}],
        [{deg:120}],
        [{deg:120}],
        [{deg:120,type:1}],
        [{deg:120}],
        [{deg:90}],
        [{deg:90,type:1}],
        [{deg:90}],
        [{deg:90}],
        [{deg:120}],
        [{deg:120}],
        [{deg:120,type:1}],
        [{deg:120}],
        [],
        [{deg:90},{deg:120},{deg:60}],
        [],
        [{deg:90},{deg:120,type:1},{deg:60}],
        [],
        [{deg:90},{deg:120},{deg:60,type:1}],
        [],
        [{deg:90},{deg:120},{deg:60}],
        [],
        [],
        [],
        [],
        [],
        [],
        [{deg:90,speed:2},{deg:120,speed:2},{deg:60,speed:2,type:1}],
        [],
        [{deg:90,speed:2},{deg:120,speed:2},{deg:60,speed:2}],
        [],
        [{deg:90,speed:2,type:1},{deg:120,speed:2,type:1},{deg:60,speed:2,type:1}],
        [],
        [{deg:90,speed:2},{deg:120,speed:2},{deg:60,speed:2,type:1}],
        [{deg:90}],
        [{deg:90,type:1}],
        [{deg:90}],
        [{deg:90}],
        [{deg:90}],
        [{deg:60},{deg:75,type:1},{deg:90},{deg:105},{deg:120}],
        [],
        [{deg:60},{deg:75,type:1},{deg:90},{deg:105,type:1},{deg:120}],
        [],
        [],
        [{deg:60,type:1},{deg:75},{deg:90},{deg:105},{deg:120,type:1}],
        [],
        [{deg:60},{deg:75,type:1},{deg:90},{deg:105},{deg:120}],
        [],
        [{deg:105,speed:1.2,type:1},{deg:105,speed:0.8},{deg:105,type:1},{deg:120,speed:1.2},{deg:120,speed:0.8,type:1},{deg:120}],
        [{deg:90,speed:1.2},{deg:90,speed:0.8,type:1},{deg:90},{deg:105,speed:1.2,type:1},{deg:105,speed:0.8},{deg:105,type:1}],
        [],
        [{deg:60,speed:1.0},{deg:75,speed:1.2},{deg:90,speed:1.4},{deg:105,speed:1.6},{deg:120,speed:1.8}],
        [],
        [{deg:90},{deg:75},{deg:60},{deg:45},{deg:30},{deg:90,speed:1.2},{deg:75,speed:1.4},{deg:60,speed:1.6},{deg:45,speed:1.8},{deg:30,speed:2.0}],
        [],
        [{deg:60},{deg:75},{deg:90},{deg:105},{deg:120}],
        [{deg:60},{deg:75},{deg:90},{deg:105},{deg:120}],
        
        [{deg:0},{deg:15},{deg:30},{deg:45},{deg:60},{deg:75},{deg:90,type:1},{deg:105},{deg:120},{deg:135},{deg:150},{deg:165},{deg:180}],
        [{deg:0},{deg:15},{deg:30},{deg:45},{deg:60},{deg:75},{deg:90,type:1},{deg:105},{deg:120},{deg:135},{deg:150},{deg:165},{deg:180}],
        [{deg:0},{deg:15},{deg:30},{deg:45},{deg:60},{deg:75},{deg:90,type:1},{deg:105},{deg:120},{deg:135},{deg:150},{deg:165},{deg:180}],
        [{deg:0},{deg:15},{deg:30},{deg:45},{deg:60},{deg:75},{deg:90,type:1},{deg:105},{deg:120},{deg:135},{deg:150},{deg:165},{deg:180}],
        [{deg:0},{deg:15},{deg:30},{deg:45},{deg:60},{deg:75},{deg:90,type:1},{deg:105},{deg:120},{deg:135},{deg:150},{deg:165},{deg:180}],
        [{deg:0},{deg:15},{deg:30},{deg:45},{deg:60},{deg:75},{deg:90,type:1},{deg:105},{deg:120},{deg:135},{deg:150},{deg:165},{deg:180}],
        [{deg:0,speed:1.2},{deg:15,speed:1.2},{deg:30,speed:1.2},{deg:45,speed:1.2},{deg:60,speed:1.2},{deg:75,speed:1.2},{deg:90,type:1,speed:1.2},{deg:105,speed:1.2},{deg:120,speed:1.2},{deg:135,speed:1.2},{deg:150,speed:1.2},{deg:165,speed:1.2},{deg:180,speed:1.2}],
        [{deg:0,speed:1.2},{deg:15,speed:1.2},{deg:30,speed:1.2},{deg:45,speed:1.2},{deg:60,speed:1.2},{deg:75,speed:1.2},{deg:90,type:1,speed:1.2},{deg:105,speed:1.2},{deg:120,speed:1.2},{deg:135,speed:1.2},{deg:150,speed:1.2},{deg:165,speed:1.2},{deg:180,speed:1.2}],
        [{deg:0,speed:1.2},{deg:15,speed:1.2},{deg:30,speed:1.2},{deg:45,speed:1.2},{deg:60,speed:1.2},{deg:75,speed:1.2},{deg:90,type:1,speed:1.2},{deg:105,speed:1.2},{deg:120,speed:1.2},{deg:135,speed:1.2},{deg:150,speed:1.2},{deg:165,speed:1.2},{deg:180,speed:1.2}],
        [{deg:0,speed:1.2},{deg:15,speed:1.2},{deg:30,speed:1.2},{deg:45,speed:1.2},{deg:60,speed:1.2},{deg:75,speed:1.2},{deg:90,type:1,speed:1.2},{deg:105,speed:1.2},{deg:120,speed:1.2},{deg:135,speed:1.2},{deg:150,speed:1.2},{deg:165,speed:1.2},{deg:180,speed:1.2}],
        [{deg:0,speed:1.2},{deg:15,speed:1.2},{deg:30,speed:1.2},{deg:45,speed:1.2},{deg:60,speed:1.2},{deg:75,speed:1.2},{deg:90,type:1,speed:1.2},{deg:105,speed:1.2},{deg:120,speed:1.2},{deg:135,speed:1.2},{deg:150,speed:1.2},{deg:165,speed:1.2},{deg:180,speed:1.2}],
        [],
    ];
    
    var frame = 0;
    var next = 0;
    var handicap = 1;
    var sinTable = [];
    
    for(var i=0;i<720;i++){
        sinTable[i] =  Math.sin(i * (Math.PI / 180));
    }
    var bg = makeBackground(game.assets['img/bg/bound.png']);
    stage.addChild(bg);
        
        enemy.image = game.assets['chara1.gif'];
        enemy.frame = 10;
        enemy.x = 160-enemy.width/2;
        enemy.y = 20;
        enemy.vx = 2;
        enemy.vy = 0;
        enemy.frameList = [10,11,10,12];
        enemy.framePos = 0;
        //enemy[i].backgroundColor = '#000';
        stage.addChild(enemy);
        
        //player.backgroundColor = '#f00';
        player.image = game.assets['chara1.gif'];
        player.frame = 0;
        player.frameList = [0,1,0,2];
        player.framePos = 0;
        player.x = 160-player.width/2;
        player.y = 240;
        player.vx = player.vy = 0;
        player.life = 1;
        player.damage = 0;
        player.score = 0;
        player.sec = 0;
        stage.addChild(player);
        
        scene.addChild(stage);
        //game.rootScene.backgroundColor = '#ccc'
        
        stage.addEventListener('enterframe', function(e){
            var i,len,c;
            
            if(!player.damage){
                if(player.life<1){
                    //console.log(player.sec,player.score);
                    music.stop();
                    game.popScene();

                    return;
                }
                player.x += player.vx;
                player.y += player.vy;
                if(player.x<0)player.x=0;
                if(player.x>game.width-player.width)player.x=game.width-player.width;
                if(player.y<0)player.x=0;
                if(player.y>game.height-player.height)player.y=game.height-player.height;
                if(player.vx || player.vy){
                    player.framePos = (player.framePos+1)%4;
                    player.frame = player.frameList[player.framePos];
                }else{
                    player.frame=0;
                }
                if((player.vx>0)) player.scaleX = 1;
                if((player.vx<0)) player.scaleX = -1;
            }else{
                player.damage--;
                player.visible = 1-player.damage%2;
            }
            
            enemy.x += enemy.vx;
            if( enemy.x<4 || enemy.x>320-32 ){
                enemy.vx = -enemy.vx;
                enemy.scaleX = -enemy.scaleX;
            }
            enemy.framePos = (enemy.framePos+1)%4;
            enemy.frame = enemy.frameList[enemy.framePos];
            
            len = shot.length;
            //console.log(len);
            for(i=0;i<len;i++){
                if(!shot[i])continue;
                shot[i].x += shot[i].vx;
                shot[i].y += shot[i].vy;
                if(shot[i].x<-shot[i].width || shot[i].x>game.width || shot[i].y<-shot[i].height || shot[i].y>game.height){
                    stage.removeChild(shot[i]);
                    shot[i] = null;
                }else if(!player.damage){
                    x = Math.abs((shot[i].x+shot[i].width/2) - (player.x+player.width/2));
                    y = Math.abs((shot[i].y+shot[i].height/2) - (player.y+player.height/2));
                    if( shot[i].type==0 && x<(4+shot[i].width/2) && y<(4+shot[i].height/2)  ){
                        player.frame = 3;
                        player.life--;
                        player.damage = 10;
                        stage.removeChild(shot[i]);
                        shot[i] = null;
                    }else if( shot[i].type==1 && x<(6+shot[i].width/2) && y<(8+shot[i].height/2) ){
                        player.score++;
                        stage.removeChild(shot[i]);
                        shot[i] = null;
                    }
                }
                if(!shot[i]) shot.splice(i--,1);
            }
            
            if(!(frame%game.fps)){
                c = chart[next];
                if( c ){
                    for(i=0;i<c.length;i++){
                        shot[len] = new Sprite(16, 16);
                        //shot[len].backgroundColor = '#939';
                        shot[len].x = enemy.x+enemy.width/2-shot[len].width/2;
                        shot[len].y = enemy.y+16;
                        shot[len].vx = sinTable[c[i].deg+90] * (c[i].speed||1) * handicap;
                        shot[len].vy = sinTable[c[i].deg] * (c[i].speed||1) * handicap;
                        shot[len].type = c[i].type || 0;
                        shot[len].image = game.assets['icon0.gif'];
                        if( shot[len].type==0 ){
                            shot[len].frame = 11;
                        }else{
                            shot[len].frame = 10;
                        }
                        //shot[len].rotation = c[i].deg-90;
                        stage.addChild(shot[len]);
                        len++;
                    }
                }
                next++;
                if( next>=chart.length ){
                    next = 0;
                    handicap *= 0.8;
                }
                if(player.life>0) player.sec++;
            }
            
            frame++;
        });
    
    
    scene.addEventListener('touchstart', touch);
    scene.addEventListener('touchmove', touch);
    scene.addEventListener('touchend', function(){
        player.vx = player.vy = 0;
    });
    
    function touch(e){
        var x = e.x - (player.x+(player.width/2));
        var y = e.y - (player.y+(player.height/2));
        var z = Math.sqrt(x*x+y*y);
        player.vx = x/z*2;
        player.vy = y/z*2;
    }

        }
    });

    game.start();
};
//makes Backgrounds
function makeBackground(image){
    var bg = new Sprite(320,320);
    bg.image = image;
    return bg;
}


//Calculates the distance between two points
function calcLen(x0, y0, x1, y1) {
    return Math.sqrt((x0 - x1) * (x0 - x1) + (y0 - y1) * (y0 - y1));
}