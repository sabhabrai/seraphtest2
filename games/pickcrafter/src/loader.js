var RivasLoaderScene=cc.LoaderScene.extend({init:function(){var e=this._bgLayer=new cc.LayerColor(cc.color(0,0,0,255));e.setPosition(cc.visibleRect.bottomLeft),this.addChild(e,0);var t=this._label=new cc.LabelTTF("0%","Press Start 2P",24);return t.setPosition(cc.pAdd(cc.visibleRect.center,cc.p(0,-115))),t.setColor(cc.color(200,200,200)),e.addChild(this._label,1),!0},onTouchBegan:function(e,t){var c=t.getCurrentTarget(),n=c.convertToNodeSpace(e.getLocation()),o=c.getContentSize(),i=cc.rect(0,0,o.width,o.height);return!!cc.rectContainsPoint(i,n)&&(window.open("http://www.gamessumo.com/","_blank"),!0)},onExit:function(){cc.Node.prototype.onExit.call(this),this._label.setString("0%")},_startLoading:function(){var e=this;e.unschedule(e._startLoading);var t=e.resources;runGameHelper=function(){e.cb&&e.cb()}.bind(this),cc.loader.load(t,function(t,c,n){var o=n/c*100|0;o=Math.min(o,100),e._label.setString(o+"%")},runGameHelper)}}),runGameHelper=null;