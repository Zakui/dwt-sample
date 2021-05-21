/*! 20210304
* Dynamsoft JavaScript Library
* Product: Dynamsoft Web Twain
* Web Site: http://www.dynamsoft.com
*
* Copyright 2021, Dynamsoft Corporation 
* Author: Dynamsoft R&D Department
*
* Version: 17.0
*
* Module: addon/webcam
* final js: build\addon\dynamsoft.webtwain.addon.webcam.js
*/
;var Dynamsoft=self.Dynamsoft||{};Dynamsoft.DWT=Dynamsoft.DWT||{};Dynamsoft.aryAddonReadyFun=Dynamsoft.aryAddonReadyFun||[];Dynamsoft.AddonReady=Dynamsoft.AddonReady||function(a){Dynamsoft.aryAddonReadyFun.push(a)};Dynamsoft.WebcamVerForActiveX="15.0.0.0625";Dynamsoft.WebcamVerInName="15.0.0.0625";(function(c){var d=[Dynamsoft.DWT],b=0;for(;b<1;b++){var a=d[b];a.EnumDWT_VideoRotateMode={VRM_NONE:0,VRM_90_DEGREES_CLOCKWISE:1,VRM_180_DEGREES_CLOCKWISE:2,VRM_270_DEGREES_CLOCKWISE:3,VRM_FLIP_VERTICAL:4,VRM_FLIP_HORIZONTAL:5};a.EnumDWT_VideoProperty={VP_BRIGHTNESS:0,VP_CONTRAST:1,VP_HUE:2,VP_SATURATION:3,VP_SHARPNESS:4,VP_GAMMA:5,VP_COLORENABLE:6,VP_WHITEBALANCE:7,VP_BACKLIGHTCOMPENSATION:8,VP_GAIN:9};a.EnumDWT_CameraControlProperty={CCP_PAN:0,CCP_TILT:1,CCP_ROLL:2,CCP_ZOOM:3,CCP_EXPOSURE:4,CCP_IRIS:5,CCP_FOCUS:6}}})(typeof window!=="undefined"?window:this);(function(a){a.WebcamErrors={InvalidParameter:function(b){b._errorCode=-10001;b._errorString="The parameter is invalid."},VideoNotPlayingWhenCapture:function(b){b._errorCode=-10002;b._errorString="To capture an image, the video must be playing."},VideoNotPlayingWhenGetURL:function(b){b._errorCode=-10003;b._errorString="To get the url for the current frame, the video must be playing."},Success:function(b){b._errorCode=0;b._errorString="Successful."}}})(Dynamsoft.Lib);(function(a){function b(c){var d=this;d._Count=0;d._resultlist=[];d._stwain=c}b.prototype.GetCount=function(){var c=this;a.WebcamErrors.Success(c._stwain);return c._Count-1};b.prototype.Get=function(d){var e=this,c=e._resultlist.length;if(d>=c-1||d<0){Dynamsoft.Lib.Errors.Webcam_InvalidIndex(e._stwain,"Get");return""}a.WebcamErrors.Success(e._stwain);return e._resultlist[d]};b.prototype.GetCurrent=function(){var d=this,c=d._resultlist.length;if(c==0){Dynamsoft.Lib.Errors.Webcam_InvalidIndex(d._stwain,"GetCurrent");return""}a.WebcamErrors.Success(d._stwain);return d._resultlist[c-1]};a.NewWebcamValue=function(c){return new b(c)}})(Dynamsoft.Lib);(function(a){function b(c){var d=this;d._Count=0;d._resultlist=[];d._stwain=c}b.prototype.GetValue=function(){var d=this,c=d._resultlist.length;if(c==0){Dynamsoft.Lib.Errors.Webcam_InvalidIndex(d._stwain,"");return""}a.WebcamErrors.Success(d._stwain);return d._resultlist[0].current};b.prototype.GetIfAuto=function(){var d=this,c=d._resultlist.length;if(c==0){Dynamsoft.Lib.Errors.Webcam_InvalidIndex(d._stwain,"");return false}a.WebcamErrors.Success(d._stwain);return d._resultlist[0].auto=="true"?true:false};a.NewWebcamSetting=function(c){return new b(c)}})(Dynamsoft.Lib);(function(a){function b(c){var d=this;d._Count=0;d._resultlist=[];d._stwain=c}b.prototype.GetMinValue=function(){var d=this,c=d._resultlist.length;if(c==0){Dynamsoft.Lib.Errors.Webcam_InvalidIndex(d._stwain,"");return""}return d._resultlist[0].min};b.prototype.GetMaxValue=function(){var d=this,c=d._resultlist.length;if(c==0){Dynamsoft.Lib.Errors.Webcam_InvalidIndex(d._stwain,"");return""}return d._resultlist[0].max};b.prototype.GetSteppingDelta=function(){var d=this,c=d._resultlist.length;if(c==0){Dynamsoft.Lib.Errors.Webcam_InvalidIndex(d._stwain,"");return 0}return d._resultlist[0].step};b.prototype.GetDefaultValue=function(){var d=this,c=d._resultlist.length;if(c==0){Dynamsoft.Lib.Errors.Webcam_InvalidIndex(d._stwain,"");return 0}return d._resultlist[0].defaultValue};b.prototype.GetIfAuto=function(){var d=this,c=d._resultlist.length;if(c==0){Dynamsoft.Lib.Errors.Webcam_InvalidIndex(d._stwain,"");return false}return d._resultlist[0].auto=="true"?true:false};a.NewWebcamMoreSetting=function(c){return new b(c)}})(Dynamsoft.Lib);Dynamsoft.AddonReady(function(b,a){var c=function(d){var e=b.html5.Funs;d._innerSetWebcamValue=function(g){var h=d,f;f=b.NewWebcamValue(d);if(g&&b.isArray(g)){f._resultlist=g;f._Count=g.length}return f};d._innerSetWebcamSetting=function(g){var h=d,f;f=b.NewWebcamSetting(d);if(g&&b.isArray(g)){f._resultlist=g;f._Count=g.length}return f};d._innerSetWebcamMoreSetting=function(g){var h=d,f;f=b.NewWebcamMoreSetting(d);if(g&&b.isArray(g)){f._resultlist=g;f._Count=g.length}return f}};if(b.DynamicLoadAddonFuns){b.DynamicLoadAddonFuns.push(c)}b.Addon_Events.push("OnFrameCaptured");b.Addon_Events.push("OnCaptureSuccess");b.Addon_Events.push("OnCaptureError")});Dynamsoft.AddonReady(function(b,a){if(!b.product.bHTML5Edition){return}function c(f){var g=b.html5.Funs;f._innerWebcamValueFunction=function(h,j){var k=this,i;i=k._innerFunRaw(h,j,false,false);return k._innerSetWebcamValue(i)};f._innerWebcamSettingFunction=function(h,j){var k=this,i;i=k._innerFunRaw(h,j,false,false);return k._innerSetWebcamSetting(i)};f._innerWebcamMoreSettingFunction=function(h,j){var k=this,i;i=k._innerFunRaw(h,j,false,false);return k._innerSetWebcamMoreSetting(i)};f._OnCaptureSuccess=function(h){var i=this;if(Dynamsoft.Lib.isFunction(i.__OnCaptureSuccess)){i.__OnCaptureSuccess()}};f._OnCaptureError=function(i){var k=this,h=i[1],j=i[2];if(Dynamsoft.Lib.isFunction(k.__OnCaptureError)){k.__OnCaptureError(h,j)}};f._OnFrameCaptured=function(h){var k=this,j=Dynamsoft.Lib;if(!k.__videoPause){var i=k.__videoQuality;if(!i){i=60}if(k.__videoDest){k.__videoDest.UpdateVideoContainer(k.GetImageURL(-1,-1,-1,0,i))}}if(j.isFunction(k.__OnFrameCaptured)){k.__OnFrameCaptured(h)}}}function d(g,h){var f=h.length-1;while(f>=0&&h[f].p1>=g.p1){if(h[f].p1==g.p1&&h[f].p2<g.p2){break}h[f+1]=h[f];f--}h[f+1]=g}var e=function(h){var i=b.html5.Funs,g,f;if(b.env.bMac){f="DynamicWebcam_"+Dynamsoft.WebcamVerInName+".dylib"}else{if(b.env.bLinux){f="DynamicWebcam_"+Dynamsoft.WebcamVerInName+".so"}else{if(Dynamsoft.dcp.b64bit){f="DynamicWebcamx64_"+Dynamsoft.WebcamVerInName+".dll"}else{f="DynamicWebcam_"+Dynamsoft.WebcamVerInName+".dll"}}}if(!h._isMobileMode()){h._innerSend("GetAddOnVersion",i.makeParams("webcam",f),true,false,false)}c(h);g={Webcam:{IsModuleInstalled:function(){var k=h;k._resetErr();if(k._isMobileMode()){return k._mobileNotSupport("Addon.Webcam.IsModuleInstalled")}var j=k._innerFun("GetAddOnVersion",i.makeParams("webcam",f));return(j!="")},Download:function(n,q,j){var m=h,o;m._resetErr();if(m._isMobileMode()){return m._mobileNotSupport("Addon.Webcam.Download")}Dynamsoft.Lib.cancelFrome=2;var l=function(){if(Dynamsoft.Lib.isFunction(q)){q()}return true},r=function(){if(Dynamsoft.Lib.isFunction(j)){j(h.ErrorCode,h.ErrorString)}return false};if(!b.License.checkProductKey(h,{Webcam:true},true)){return r()}if(this.IsModuleInstalled()){return l()}if(!n||n==""){Dynamsoft.Lib.Errors.Webcam_InvalidRemoteFilename(m);return r()}if(i.isServerInvalid(m)){r();return false}o="get";Dynamsoft.Lib.showProgress(m,"Download",true);var p=function(s){var t=(s.total===0)?100:Math.round(s.loaded*100/s.total),u=[s.loaded," / ",s.total].join("");m._OnPercentDone([0,t,"","http"])},k=true;m._OnPercentDone([0,-1,"Downloading Webcam Module...","http"]);if(!Dynamsoft.Lib.isFunction(q)){k=false}return i.loadHttpBlob(m,o,n,k,function(s){m._OnPercentDone([0,-1,"Loading..."]);var u=100;m.__LoadImageFromBytes(s,u,"",k,l,r)},function(){Dynamsoft.Lib.closeProgress("Download");r()},p)},GetSourceList:function(){var k=h;k._resetErr();if(k._isMobileMode()){return k._mobileNotSupport("Addon.Webcam.GetSourceList")}if(!b.License.checkProductKey(k,{Webcam:true},true)){return[]}var j=k._innerFunRaw("GetWebcamSourceList");if(k.ErrorCode==0){j.splice(j.length-1,1)}return j},SelectSource:function(j){var k=h;k._resetErr();if(k._isMobileMode()){return k._mobileNotSupport("Addon.Webcam.SelectSource")}if(!b.License.checkProductKey(k,{Webcam:true},true)){return false}return k._innerFun("SelectWebcam",i.makeParams(j))},CloseSource:function(){var j=h;j._resetErr();if(j._isMobileMode()){return j._mobileNotSupport("Addon.Webcam.CloseSource")}this._clear();return j._innerFun("StopCapture")},GetFramePartURL:function(){var j=h;j._resetErr();if(j._isMobileMode()){return j._mobileNotSupport("Addon.Webcam.GetFramePartURL")}if(!this._isPlaying()){b.WebcamErrors.VideoNotPlayingWhenGetURL(j);return""}return j.GetImageURL(-1,-1,-1,!0,j.__videoQuality)},GetFrameURL:function(){var j=h;j._resetErr();if(j._isMobileMode()){return j._mobileNotSupport("Addon.Webcam.GetFrameURL")}if(!this._isPlaying()){b.WebcamErrors.VideoNotPlayingWhenGetURL(j);return""}return j.GetImageURL(-1,-1,-1,0,j.__videoQuality)},PlayVideo:function(r,u,l,s,m){var n=h;n._resetErr();if(n._isMobileMode()){return n._mobileNotSupport("Addon.Webcam.PlayVideo")}var k,p=Dynamsoft.Lib,q=60,j=false,o=this,t=function(){o._clear();if(Dynamsoft.Lib.isFunction(m)){m(h.ErrorCode,h.ErrorString)}return false};if(!r){Dynamsoft.Lib.Errors.ParameterCannotEmpty(h);return t()}if(!b.License.checkProductKey(h,{Webcam:true},true)){return t()}n.__videoDest=r;n.__videoDest.ShowVideoContainer(true);if(p.isFunction(l)){h.__OnFrameCaptured=l}if(h.__videoPause){h.__videoPause=false;if(b.isFunction(s)){s()}return true}h.__videoPause=false;if(u){q=1*u;if(q<1){q=60}h.__videoQuality=q;if(j){if(b.isFunction(s)){s()}return true}}else{h.__videoQuality=q}return h._innerSend("PlayVideo",i.makeParams(true),true,s,t)},PauseVideo:function(){var j=h;j._resetErr();if(j._isMobileMode()){return j._mobileNotSupport("Addon.Webcam.PauseVideo")}if(this._isPlaying()){j.__videoPause=true}return true},_clear:function(){var k=h;var j=Dynamsoft.Lib;k.__videoPause=false;k.__OnFrameCaptured=false;k.__videoQuality=60;if(k.__videoDest){k.__videoDest.ShowVideoContainer(false)}k.__videoDest=false},_isPlaying:function(){var j=h;return j.GetIfShowVideoContainer()},StopVideo:function(){var k=h;k._resetErr();if(k._isMobileMode()){return k._mobileNotSupport("Addon.Webcam.StopVideo")}this._clear();var j=k._innerFun("PlayVideo",i.makeParams(false,0));k._innerFun("StopCapture");return j},CaptureImage:function(n,k){var p=h;p._resetErr();if(p._isMobileMode()){p._mobileNotSupport("Addon.Webcam.CaptureImage");if(b.isFunction(k)){k(p._errorCode,p._errorString)}return false}if(!b.License.checkProductKey(p,{Webcam:true},true)){if(b.isFunction(k)){k(p._errorCode,p._errorString)}return false}var j="CaptureImage",o=function(){i.hideMask(j);if(b.isFunction(n)){setTimeout(n,0)}},l=function(){i.hideMask(j);if(b.isFunction(k)){k(p._errorCode,p._errorString)}};i.showMask(j);p.__OnCaptureError=l;return p._innerSend(j,i.makeParams(false),true,function(){i.hideMask();if(p.ErrorCode==0){o()}else{l(p.ErrorCode,p.ErrorString)}},l)},GetMediaType:function(){var j=h;j._resetErr();if(j._isMobileMode()){return j._mobileNotSupport("Addon.Webcam.GetMediaType")}return j._innerWebcamValueFunction("GetMediaType")},SetMediaType:function(j){var k=h;k._resetErr();if(k._isMobileMode()){return k._mobileNotSupport("Addon.Webcam.SetMediaType")}if(!b.isString(j)){b.Errors.InvalidValue(k);return false}return k._innerFun("SetMediaType",i.makeParams(j))},GetResolution:function(){var m=h;m._resetErr();if(m._isMobileMode()){return m._mobileNotSupport("Addon.Webcam.GetResolution")}var n=m._innerWebcamValueFunction("GetResolution");if(n&&n._resultlist){var l,j,r=n._resultlist,k=[],s=[],p;if(r.length>0){p=r[r.length-1]}if(p==""&&r.length>0){p=r[0]}for(l=0;l<r.length-1;l++){j=r[l];var q=j.toLowerCase().split("x");d({value:j,p1:parseInt(q[0]),p2:parseInt(q[1])},k)}for(l=0;l<k.length;l++){j=k[l].value;s.push(j)}if(p){s.push(p)}n._resultlist=s;k=null;s=null}return n},SetResolution:function(k){var l=h;l._resetErr();if(l._isMobileMode()){return l._mobileNotSupport("Addon.Webcam.SetResolution")}if(!b.isNumber(k)&&!b.isString(k)){b.Errors.InvalidValue(l);return false}var j=l._innerFun("SetResolution",i.makeParams(k));return j},GetFrameRate:function(){var j=h;j._resetErr();if(j._isMobileMode()){return j._mobileNotSupport("Addon.Webcam.GetFrameRate")}return j._innerWebcamValueFunction("GetFrameRate")},SetFrameRate:function(j){var k=h;k._resetErr();if(k._isMobileMode()){return k._mobileNotSupport("Addon.Webcam.SetFrameRate")}if(!b.isNumber(j)){b.Errors.InvalidValue(k);return false}return h._innerFun("SetFrameRate",i.makeParams(j))},GetVideoPropertySetting:function(j){var k=h;k._resetErr();if(k._isMobileMode()){return k._mobileNotSupport("Addon.Webcam.GetVideoPropertySetting")}return k._innerWebcamSettingFunction("GetWebcamVideoPropertySetting",i.makeParams(j))},GetVideoPropertyMoreSetting:function(j){var k=h;k._resetErr();if(k._isMobileMode()){return k._mobileNotSupport("Addon.Webcam.GetVideoPropertyMoreSetting")}return k._innerWebcamMoreSettingFunction("GetWebcamVideoPropertyMoreSetting",i.makeParams(j))},SetVideoPropertySetting:function(k,j,m){var l=h;l._resetErr();if(l._isMobileMode()){return l._mobileNotSupport("Addon.Webcam.SetVideoPropertySetting")}return l._innerFun("SetWebcamVideoPropertySetting",i.makeParams(k,j,m))},SetVideoRotateMode:function(j){var k=h;k._resetErr();if(k._isMobileMode()){return k._mobileNotSupport("Addon.Webcam.SetVideoRotateMode")}return k._innerFun("SetVideoRotateMode",i.makeParams(j))},GetCameraControlPropertySetting:function(j){var k=h;k._resetErr();if(k._isMobileMode()){return k._mobileNotSupport("Addon.Webcam.GetCameraControlPropertySetting")}return k._innerWebcamSettingFunction("GetWebcamCameraControlSetting",i.makeParams(j))},GetCameraControlPropertyMoreSetting:function(j){var k=h;k._resetErr();if(k._isMobileMode()){return k._mobileNotSupport("Addon.Webcam.GetCameraControlPropertyMoreSetting")}return k._innerWebcamMoreSettingFunction("GetWebcamCameraControlMoreSetting",i.makeParams(j))},SetCameraControlPropertySetting:function(k,j,m){var l=h;l._resetErr();if(l._isMobileMode()){return l._mobileNotSupport("Addon.Webcam.SetCameraControlPropertySetting")}return l._innerFun("SetWebcamCameraControlPropertySetting",i.makeParams(k,j,m))}}};h.__addon=h.__addon||{};b.mix(h.__addon,g)};if(b.DynamicLoadAddonFuns){b.DynamicLoadAddonFuns.push(e)}});Dynamsoft.AddonReady(function(c,b){if(!c.product.bPluginEdition&&!c.product.bActiveXEdition){return}var a;function d(g){g._innerRead=function(i){var k=this,h;try{h=Dynamsoft.Lib.parse(i)}catch(j){}return h.result};g._innerWebcamValueFunctionPlugin=function(i){var j=this,h;h=j._innerRead(i);return j._innerSetWebcamValue(h)};g._innerWebcamSettingFunctionPlugin=function(i){var j=this,h;h=j._innerRead(i);return j._innerSetWebcamSetting(h)};g._innerWebcamMoreSettingFunctionPlugin=function(i){var j=this,h;h=j._innerRead(i);return j._innerSetWebcamMoreSetting(h)}}function e(h,i){var g=i.length-1;while(g>=0&&i[g].p1>=h.p1){if(i[g].p1==h.p1&&i[g].p2<h.p2){break}i[g+1]=i[g];g--}i[g+1]=h}var f=function(k){var l,j;if(k.getSWebTwain()&&k.getSWebTwain().Addon){}else{return false}if(Dynamsoft.navInfo.bWin){var i=navigator.userAgent.toLowerCase(),g=!Dynamsoft.navInfo.bOSx64||(i.indexOf("wow64")>=0);if(g){a="DynamicWebcam_"+Dynamsoft.WebcamVerForActiveX+".dll"}else{a="DynamicWebcamx64_"+Dynamsoft.WebcamVerForActiveX+".dll"}}else{}l=k.getSWebTwain();try{l.GetAddOnVersion("webcam",a)}catch(h){}d(k);j={Webcam:{IsModuleInstalled:function(){var m=l.GetAddOnVersion("webcam",a);c.setErrorString(k);return(m!="")},Download:function(r,m,p){var n=function(){if(Dynamsoft.Lib.isFunction(m)){m()}return true},q=function(){if(Dynamsoft.Lib.isFunction(p)){p(k.ErrorCode,k.ErrorString)}return false};if(!c.License.checkProductKey(k,{Webcam:true},true)){return q()}if(this.IsModuleInstalled()){return n()}if(!r||r==""){Dynamsoft.Lib.Errors.Webcam_InvalidRemoteFilename(k);return q()}var o=l.DownloadAddon(r);return c.wrapperRet(k,o,n,q)},GetSourceList:function(){if(!c.License.checkProductKey(k,{Webcam:true},true)){return[]}var n=l.GetWebcamSourceList(),m=[];c.setErrorString(k);if(k.ErrorCode==0){m=k._innerRead(n);if(m&&m.length>1){m.splice(m.length-1,1)}}return m},SelectSource:function(m){if(!c.License.checkProductKey(k,{Webcam:true},true)){return false}var n=l.SelectWebcam(m);c.setErrorString(k);return n},CloseSource:function(){k._playVideoDWT=null;var m=l.StopCapture();c.setErrorString(k);return m},GetFramePartURL:function(){if(!this._isPlaying()){c.WebcamErrors.VideoNotPlayingWhenGetURL(k);return""}var m=l.GetDIB(-1);c.setErrorString(k);return m},GetFrameURL:function(){return""},PlayVideo:function(s,r,p,m,n){var o=function(){k._playVideoDWT=null;if(Dynamsoft.Lib.isFunction(n)){n(k.ErrorCode,k.ErrorString)}return false};if(!s||!s.getSWebTwain()){Dynamsoft.Lib.WebcamErrors.InvalidParameter(k);return o()}if(!c.License.checkProductKey(k,{Webcam:true},true)){return o()}var q=s.getSWebTwain().CurrentHWND;if(!q){c.WebcamErrors.InvalidParameter(k);return o()}k._playVideoDWT=s;setTimeout(function(){var t=l.RunWebcamCmd("PlayVideo",q,null,null,p);c.wrapperRet(k,t,m,o)},0);return true},PauseVideo:function(){return true},StopVideo:function(){k._playVideoDWT=null;var m=l.RunWebcamCmd("StopVideo",0,null,null,null);c.setErrorString(k);l.StopCapture();return m},CaptureImage:function(p,n){var q=function(){if(c.isFunction(p)){setTimeout(p,0)}},o=function(){if(Dynamsoft.Lib.isFunction(n)){n(k.ErrorCode,k.ErrorString)}return false};if(!c.License.checkProductKey(k,{Webcam:true},true)){return o()}var m=l.RunWebcamCmd("Capture",0,q,o,null);c.setErrorString(k);return m},GetMediaType:function(){var m=k._innerWebcamValueFunctionPlugin(l.GetMediaType());c.setErrorString(k);return m},SetMediaType:function(n){if(!c.isString(n)){c.Errors.InvalidValue(k);return false}var m=l.SetMediaType(n);c.setErrorString(k);return m},GetResolution:function(){var m=k._innerWebcamValueFunctionPlugin(l.GetResolution());c.setErrorString(k);if(m&&m._resultlist){var n,t,s=m._resultlist,r=[],u=[],q;if(s.length>0){q=s[s.length-1]}for(n=0;n<s.length-1;n++){t=s[n];var p=t.toLowerCase().split("x");e({value:t,p1:parseInt(p[0]),p2:parseInt(p[1])},r)}for(n=0;n<r.length;n++){t=r[n].value;u.push(t)}if(q){u.push(q)}m._resultlist=u;r=null;u=null}return m},SetResolution:function(n){if(!c.isNumber(n)&&!c.isString(n)){c.Errors.InvalidValue(k);return false}var m=l.SetResolution(n);c.setErrorString(k);return m},GetFrameRate:function(){var m=k._innerWebcamValueFunctionPlugin(l.GetFrameRate());c.setErrorString(k);return m},SetFrameRate:function(n){if(!c.isNumber(n)){c.Errors.InvalidValue(k);return false}var m=l.SetFrameRate(n);c.setErrorString(k);return m},GetVideoPropertySetting:function(n){var m=l.GetWebcamVideoPropertySetting(n);c.setErrorString(k);return k._innerWebcamSettingFunctionPlugin(m)},GetVideoPropertyMoreSetting:function(n){var m=l.GetWebcamVideoPropertyMoreSetting(n);c.setErrorString(k);return k._innerWebcamMoreSettingFunctionPlugin(m)},SetVideoPropertySetting:function(o,n,p){var m=l.SetWebcamVideoPropertySetting(o,n,p);c.setErrorString(k);return m},SetVideoRotateMode:function(n){var m=l.SetVideoRotateMode(n);c.setErrorString(k);return m},GetCameraControlPropertySetting:function(n){var m=l.GetWebcamCameraControlSetting(n);c.setErrorString(k);return k._innerWebcamSettingFunctionPlugin(m)},GetCameraControlPropertyMoreSetting:function(n){var m=l.GetWebcamCameraControlMoreSetting(n);c.setErrorString(k);return k._innerWebcamMoreSettingFunctionPlugin(m)},SetCameraControlPropertySetting:function(o,n,p){var m=l.SetWebcamCameraControlPropertySetting(o,n,p);c.setErrorString(k);return m},_isPlaying:function(){if(k._playVideoDWT){return true}return false}}};k.Addon=k.Addon||{};c.mix(k.Addon,j)};if(c.DynamicLoadAddonFuns){c.DynamicLoadAddonFuns.push(f)}});