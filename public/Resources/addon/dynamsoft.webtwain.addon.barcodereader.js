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
* Module: addon/barcodereader
* final js: build\addon\dynamsoft.webtwain.addon.barcodereader.js
*/
;var Dynamsoft=self.Dynamsoft||{};Dynamsoft.DWT=Dynamsoft.DWT||{};Dynamsoft.DBR=Dynamsoft.DBR||{};Dynamsoft.aryAddonReadyFun=Dynamsoft.aryAddonReadyFun||[];Dynamsoft.AddonReady=Dynamsoft.AddonReady||function(a){Dynamsoft.aryAddonReadyFun.push(a)};(function(){Dynamsoft.BarcodeReaderAddon=Dynamsoft.BarcodeReaderAddon||{};var a=Dynamsoft.BarcodeReaderAddon;a.Version="8.2.0.0330";a.VersionForActiveX="8.2.0.0330";a._defaultRuntimeSettingsStr="";a._defaultTemplateStr="";a._wasmInstance=false;a._activeXInstance=false;a.BarcodeReaderException=(function(){var b=function(){var d;var c=arguments[0],f=arguments[1],e=Dynamsoft.DBR.EnumErrorCode.DBR_UNKNOWN;if(typeof c=="number"){e=c;d=new Error(f)}else{d=new Error(c)}d.code=e;return d};return b})();a.RemoveNonPrintableChar=function(b){if(Dynamsoft.Lib.isString(b)){return b.replace(/[^\x20-\x7E]|(\\")/g,"")}else{return b}};a.errors={webcamNotInstalled:"The Webcam add-on not installed.",nonServiceNotSupportWebcamDecode:"The BarcodeReader add-on does not support reading barcodes from video streams.",decodeResultEmpty:"decode result is empty."};a._activeXMaxIEVersion=9;a.logLevel=3;Dynamsoft.DBR.EnumAccompanyingTextRecognitionMode={ATRM_GENERAL:1,ATRM_SKIP:0};Dynamsoft.DBR.EnumBarcodeColourMode={BICM_DARK_ON_LIGHT:1,BICM_LIGHT_ON_DARK:2,BICM_DARK_ON_DARK:4,BICM_LIGHT_ON_LIGHT:8,BICM_DARK_LIGHT_MIXED:16,BICM_DARK_ON_LIGHT_DARK_SURROUNDING:32,BICM_SKIP:0};Dynamsoft.DBR.EnumBarcodeComplementMode={BCM_AUTO:1,BCM_GENERAL:2,BCM_SKIP:0};Dynamsoft.DBR.EnumBarcodeFormat={BF_ALL:-32505857,BF_ONED:2047,BF_GS1_DATABAR:260096,BF_CODE_39:1,BF_CODE_128:2,BF_CODE_93:4,BF_CODABAR:8,BF_ITF:16,BF_EAN_13:32,BF_EAN_8:64,BF_UPC_A:128,BF_UPC_E:256,BF_INDUSTRIAL_25:512,BF_CODE_39_EXTENDED:1024,BF_GS1_DATABAR_OMNIDIRECTIONAL:2048,BF_GS1_DATABAR_TRUNCATED:4096,BF_GS1_DATABAR_STACKED:8192,BF_GS1_DATABAR_STACKED_OMNIDIRECTIONAL:16384,BF_GS1_DATABAR_EXPANDED:32768,BF_GS1_DATABAR_EXPANDED_STACKED:65536,BF_GS1_DATABAR_LIMITED:131072,BF_PATCHCODE:262144,BF_PDF417:33554432,BF_QR_CODE:67108864,BF_DATAMATRIX:134217728,BF_AZTEC:268435456,BF_MAXICODE:536870912,BF_MICRO_QR:1073741824,BF_MICRO_PDF417:524288,BF_GS1_COMPOSITE:-2147483648,BF_NULL:0};Dynamsoft.DBR.EnumBarcodeFormat_2={BF2_NULL:0,BF2_POSTALCODE:32505856,BF2_NONSTANDARD_BARCODE:1,BF2_USPSINTELLIGENTMAIL:1048576,BF2_POSTNET:2097152,BF2_PLANET:4194304,BF2_AUSTRALIANPOST:8388608,BF2_RM4SCC:16777216,BF2_DOTCODE:2};Dynamsoft.DBR.EnumBinarizationMode={BM_AUTO:1,BM_LOCAL_BLOCK:2,BM_SKIP:0};Dynamsoft.DBR.EnumClarityCalculationMethod={ECCM_CONTRAST:1};Dynamsoft.DBR.EnumClarityFilterMode={CFM_GENERAL:1};Dynamsoft.DBR.EnumColourClusteringMode={CCM_AUTO:1,CCM_GENERAL_HSV:2,CCM_SKIP:0};Dynamsoft.DBR.EnumColourConversionMode={CICM_GENERAL:1,CICM_SKIP:0};Dynamsoft.DBR.EnumConflictMode={CM_IGNORE:1,CM_OVERWRITE:2};Dynamsoft.DBR.EnumDeformationResistingMode={DRM_AUTO:1,DRM_GENERAL:2,DRM_SKIP:0};Dynamsoft.DBR.EnumDPMCodeReadingMode={DPMCRM_AUTO:1,DPMCRM_GENERAL:2,DPMCRM_SKIP:0};Dynamsoft.DBR.EnumErrorCode={DBR_SYSTEM_EXCEPTION:1,DBR_SUCCESS:0,DBR_UNKNOWN:-10000,DBR_NO_MEMORY:-10001,DBR_NULL_REFERENCE:-10002,DBR_LICENSE_INVALID:-10003,DBR_LICENSE_EXPIRED:-10004,DBR_FILE_NOT_FOUND:-10005,DBR_FILETYPE_NOT_SUPPORTED:-10006,DBR_BPP_NOT_SUPPORTED:-10007,DBR_INDEX_INVALID:-10008,DBR_BARCODE_FORMAT_INVALID:-10009,DBR_CUSTOM_REGION_INVALID:-10010,DBR_MAX_BARCODE_NUMBER_INVALID:-10011,DBR_IMAGE_READ_FAILED:-10012,DBR_TIFF_READ_FAILED:-10013,DBR_QR_LICENSE_INVALID:-10016,DBR_1D_LICENSE_INVALID:-10017,DBR_DIB_BUFFER_INVALID:-10018,DBR_PDF417_LICENSE_INVALID:-10019,DBR_DATAMATRIX_LICENSE_INVALID:-10020,DBR_PDF_READ_FAILED:-10021,DBR_PDF_DLL_MISSING:-10022,DBR_PAGE_NUMBER_INVALID:-10023,DBR_CUSTOM_SIZE_INVALID:-10024,DBR_CUSTOM_MODULESIZE_INVALID:-10025,DBR_RECOGNITION_TIMEOUT:-10026,DBR_JSON_PARSE_FAILED:-10030,DBR_JSON_TYPE_INVALID:-10031,DBR_JSON_KEY_INVALID:-10032,DBR_JSON_VALUE_INVALID:-10033,DBR_JSON_NAME_KEY_MISSING:-10034,DBR_JSON_NAME_VALUE_DUPLICATED:-10035,DBR_TEMPLATE_NAME_INVALID:-10036,DBR_JSON_NAME_REFERENCE_INVALID:-10037,DBR_PARAMETER_VALUE_INVALID:-10038,DBR_DOMAIN_NOT_MATCHED:-10039,DBR_RESERVEDINFO_NOT_MATCHED:-10040,DBR_AZTEC_LICENSE_INVALID:-10041,DBR_LICENSE_DLL_MISSING:-10042,DBR_LICENSEKEY_NOT_MATCHED:-10043,DBR_REQUESTED_FAILED:-10044,DBR_LICENSE_INIT_FAILED:-10045,DBR_PATCHCODE_LICENSE_INVALID:-10046,DBR_POSTALCODE_LICENSE_INVALID:-10047,DBR_DPM_LICENSE_INVALID:-10048,DBR_FRAME_DECODING_THREAD_EXISTS:-10049,DBR_STOP_DECODING_THREAD_FAILED:-10050,DBR_SET_MODE_ARGUMENT_ERROR:-10051,DBR_LICENSE_CONTENT_INVALID:-10052,DBR_LICENSE_KEY_INVALID:-10053,DBR_LICENSE_DEVICE_RUNS_OUT:-10054,DBR_GET_MODE_ARGUMENT_ERROR:-10055,DBR_IRT_LICENSE_INVALID:-10056,DBR_MAXICODE_LICENSE_INVALID:-10057,DBR_GS1_DATABAR_LICENSE_INVALID:-10058,DBR_GS1_COMPOSITE_LICENSE_INVALID:-10059,DBR_DOTCODE_LICENSE_INVALID:-10061};Dynamsoft.DBR.EnumGrayscaleTransformationMode={GTM_INVERTED:1,GTM_ORIGINAL:2,GTM_SKIP:0};Dynamsoft.DBR.EnumImagePixelFormat={IPF_Binary:0,IPF_BinaryInverted:1,IPF_GrayScaled:2,IPF_NV21:3,IPF_RGB_565:4,IPF_RGB_555:5,IPF_RGB_888:6,IPF_ARGB_8888:7,IPF_RGB_161616:8,IPF_ARGB_16161616:9,IPF_ABGR_8888:10,IPF_ABGR_16161616:11,IPF_BGR_888:12};Dynamsoft.DBR.EnumImagePreprocessingMode={IPM_AUTO:1,IPM_GENERAL:2,IPM_GRAY_EQUALIZE:4,IPM_GRAY_SMOOTH:8,IPM_SHARPEN_SMOOTH:16,IPM_MORPHOLOGY:32,IPM_SKIP:0};Dynamsoft.DBR.EnumIMResultDataType={IMRDT_IMAGE:1,IMRDT_CONTOUR:2,IMRDT_LINESEGMENT:4,IMRDT_LOCALIZATIONRESULT:8,IMRDT_REGIONOFINTEREST:16,IMRDT_QUADRILATERAL:32};Dynamsoft.DBR.EnumIntermediateResultSavingMode={IRSM_MEMORY:1,IRSM_FILESYSTEM:2,IRSM_BOTH:4};Dynamsoft.DBR.EnumIntermediateResultType={IRT_NO_RESULT:0,IRT_ORIGINAL_IMAGE:1,IRT_COLOUR_CLUSTERED_IMAGE:2,IRT_COLOUR_CONVERTED_GRAYSCALE_IMAGE:4,IRT_TRANSFORMED_GRAYSCALE_IMAGE:8,IRT_PREDETECTED_REGION:16,IRT_PREPROCESSED_IMAGE:32,IRT_BINARIZED_IMAGE:64,IRT_TEXT_ZONE:128,IRT_CONTOUR:256,IRT_LINE_SEGMENT:512,IRT_FORM:1024,IRT_SEGMENTATION_BLOCK:2048,IRT_TYPED_BARCODE_ZONE:4096,IRT_PREDETECTED_QUADRILATERAL:8192};Dynamsoft.DBR.EnumLocalizationMode={LM_SKIP:0,LM_AUTO:1,LM_CONNECTED_BLOCKS:2,LM_LINES:8,LM_STATISTICS:4,LM_SCAN_DIRECTLY:16,LM_STATISTICS_MARKS:32,LM_STATISTICS_POSTAL_CODE:64};Dynamsoft.DBR.EnumPDFReadingMode={PDFRM_RASTER:1,PDFRM_AUTO:2,PDFRM_VECTOR:4};Dynamsoft.DBR.EnumQRCodeErrorCorrectionLevel={QRECL_ERROR_CORRECTION_H:0,QRECL_ERROR_CORRECTION_L:1,QRECL_ERROR_CORRECTION_M:2,QRECL_ERROR_CORRECTION_Q:3};Dynamsoft.DBR.EnumRegionPredetectionMode={RPM_AUTO:1,RPM_GENERAL:2,RPM_GENERAL_RGB_CONTRAST:4,RPM_GENERAL_GRAY_CONTRAST:8,RPM_GENERAL_HSV_CONTRAST:16,RPM_SKIP:0};Dynamsoft.DBR.EnumResultCoordinateType={RCT_PIXEL:1,RCT_PERCENTAGE:2};Dynamsoft.DBR.EnumResultType={RT_STANDARD_TEXT:0,RT_RAW_TEXT:1,RT_CANDIDATE_TEXT:2,RT_PARTIAL_TEXT:3};Dynamsoft.DBR.EnumScaleUpMode={SUM_AUTO:1,SUM_LINEAR_INTERPOLATION:2,SUM_NEAREST_NEIGHBOUR_INTERPOLATION:4,SUM_SKIP:0};Dynamsoft.DBR.EnumTerminatePhase={TP_REGION_PREDETECTED:1,TP_IMAGE_PREPROCESSED:2,TP_IMAGE_BINARIZED:4,TP_BARCODE_LOCALIZED:8,TP_BARCODE_TYPE_DETERMINED:16,TP_BARCODE_RECOGNIZED:32};Dynamsoft.DBR.EnumTextAssistedCorrectionMode={TACM_AUTO:1,TACM_VERIFYING:2,TACM_VERIFYING_PATCHING:4,TACM_SKIP:0};Dynamsoft.DBR.EnumTextFilterMode={TFM_AUTO:1,TFM_GENERAL_CONTOUR:2,TFM_SKIP:0};Dynamsoft.DBR.EnumTextResultOrderMode={TROM_CONFIDENCE:1,TROM_POSITION:2,TROM_FORMAT:4,TROM_SKIP:0};Dynamsoft.DBR.EnumTextureDetectionMode={TDM_AUTO:1,TDM_GENERAL_WIDTH_CONCENTRATION:2,TDM_SKIP:0}})();Dynamsoft.AddonReady(function(e,c){var b,f=Dynamsoft.BarcodeReaderAddon;function a(h){return h&&h instanceof ArrayBuffer}f.Class=(function(){var h=Dynamsoft.Lib;var p=function(){this._runtimeSettings=null;this._initSettingsContent=null;this._tplContentArr=[];this.bWasm=false};p.prototype._decodeBlob=function(s,r){var q=this;return new Promise(function(t){if(!(s instanceof Blob)){throw TypeError("'_decodeBlob(blob, templateName)': Type of 'blob' should be 'Blob'.")}t()}).then(function(){return q._innerDecode(0,s,r)})};p.prototype._decodeArrayBuffer=function(s,r){var q=this;return new Promise(function(t){if(!(s instanceof ArrayBuffer)){throw TypeError("'_decodeBlob(arrayBuffer, templateName)': Type of 'arrayBuffer' should be 'ArrayBuffer'.")}t()}).then(function(){return q._innerDecode(0,s,r)})};p.prototype._decodeUint8Array=function(s,r){var q=this;return new Promise(function(t){if(!(s instanceof Uint8Array)&&!(self.Uint8ClampedArray&&s instanceof Uint8ClampedArray)){throw TypeError("'_decodeBlob(uint8Array, templateName)': Type of 'uint8Array' should be 'Uint8Array'.")}t()}).then(function(){return q._innerDecode(0,s,r)})};p.prototype._decodeImage=function(s,r){var q=this;return new Promise(function(t){if(!(s instanceof HTMLImageElement)){throw TypeError("'_decodeImage(image, templateName)': Type of 'image' should be 'HTMLImageElement'.")}if(s.crossOrigin&&"anonymous"!=s.crossOrigin){throw"cors"}r=r||"";t()}).then(function(){if(s.src.substring(0,11)=="data:image/"){return q._decodeBase64(s.src,r)}else{return q._decodeUrl(s.src,r)["catch"](function(u){if(f.logLevel>=3){if(console&&console.warn){console.warn("'_decodeImage(image, templateName)': Image src not available. Use '_decodeCanvas' instead.");console.warn(u)}}if(!self.HTMLCanvasElement){return Promise.reject(Error("'_decodeImage(image, templateName)': Browser not support HTMLCanvasElement."))}var v=document.createElement("canvas");v.width=s.naturalWidth;v.height=s.naturalHeight;var t=v.getContext("2d");t.drawImage(s,0,0);return q._decodeCanvas(v,r)})}})};p.prototype._decodeCanvas=function(s,r){var q=this;return new Promise(function(t){if(!(s instanceof HTMLCanvasElement)){throw TypeError("'_decodeCanvas(canvas, templateName)': Type of 'canvas' should be 'HTMLCanvasElement'.")}if(s.crossOrigin&&"anonymous"!=s.crossOrigin){throw"cors"}r=r||"";if(s.toBlob){s.toBlob(function(u){t(u)})}else{if(s.msToBlob){s.msToBlob(function(u){t(u)})}else{t(s.toDataURL())}}}).then(function(t){if(s.toBlob||s.msToBlob){return q._decodeBlob(t,r)}else{return q._decodeBase64(t,r)}})};p.prototype._decodeVideo=function(t){var r=this;var s;var q=arguments;return new Promise(function(B){if(!(t instanceof HTMLVideoElement)){throw TypeError("'_decodeVideo(video [ [, sx, sy, sWidth, sHeight], dWidth, dHeight] [, templateName] )': Type of 'video' should be 'HTMLVideoElement'.")}if(t.crossOrigin&&"anonymous"!=t.crossOrigin){throw"cors"}var A,z,u,w,y,v;if(q.length<=2){A=z=0;u=y=t.videoWidth;w=v=t.videoHeight}else{if(q.length<=4){A=z=0;u=t.videoWidth;w=t.videoHeight;y=q[1];v=q[2]}else{A=q[1];z=q[2];u=q[3];w=q[4];y=q[5];v=q[6]}}s=(typeof q[q.length-1]=="string")?q[q.length-1]:"";var x=document.createElement("canvas");x.width=y;x.height=v;var C=x.getContext("2d");C.drawImage(t,A,z,u,w,0,0,y,v);B(x)}).then(function(u){return r._decodeCanvas(u,s)})};p.prototype._decodeBase64=p.prototype.decodeBase64String=function(s,r){var q=this;return new Promise(function(t){if(!(typeof s=="string"||typeof s=="object"&&s instanceof String)){throw TypeError("'decodeBase64(base64Str, templateName)': Type of 'base64Str' should be 'String'.")}if(s.substring(0,11)=="data:image/"){s=s.substring(s.indexOf(",")+1)}t()}).then(function(){return q._innerDecode(1,s,r)})};p.prototype._decodeUrl=function(s,r){var q=this;if(s&&s.indexOf&&(s.indexOf("dwt://")==0||s.indexOf("dcs://")==0)){return q._decodeDynamsoftServiceInnerUrl(s,r)}if(f._wasmInstance){return f._wasmInstance.decode(s)}return new Promise(function(v,u){var t;if(!(typeof s=="string"||typeof s=="object"&&s instanceof String)){throw TypeError("'_decodeUrl(url, templateName)': Type of 'url' should be 'String'.")}r=r||"";if(f._activeXInstance){t=new ActiveXObject("MSXML2.XMLHTTP");t.open("GET",s,true);if(t.overrideMimeType){t.overrideMimeType("text/plain; charset=x-user-defined")}else{t.setRequestHeader("Accept-Charset","x-user-defined")}t.onreadystatechange=function(){if(t.readyState==4){v(new VBArray(t.responseBody).toArray())}};t.send("")}else{t=new XMLHttpRequest();t.open("GET",s,true);t.responseType="arraybuffer";t.send();t.onloadend=function(){v(this.response)};t.onerror=function(){u(Error(t.error))}}}).then(function(t){if(f._activeXInstance){return q._activeXDecodeArray(t,r)}else{return q._decodeArrayBuffer(t,r)}})};p.prototype._decodeDynamsoftServiceInnerUrl=function(s,r){var q=this;return new Promise(function(t){if(!(typeof s=="string"||typeof s=="object"&&s instanceof String)){throw TypeError("'_decodeUrl(url, templateName)': Type of 'innerUrl' should be 'String'.")}if(!(s.indexOf("dwt://")==0||s.indexOf("dcs://")==0)){throw TypeError("'_decodeDynamsoftServiceInnerUrl(innerUrl, templateName)': 'innerUrl' should start with 'dwt://' or 'dcs://'.")}t()}).then(function(){return q._innerDecode(4000,s,r)})};p.prototype._activeXDecodeArray=function(s,r){var q=this;return new Promise(function(v,u){if(!(s instanceof Array)){throw TypeError("'_activeXDecodeArray(array, templateName)': Type of 'array' should be 'Array'.")}r=r||"";try{v(Dynamsoft.Lib.btoa(String.fromCharCode.apply(String,s)))}catch(t){u(t)}}).then(function(t){return q._decodeBase64(t,r)})};p.prototype._activeXDecodeHandle=function(s,r){var q=this;return new Promise(function(t){r=r||"";t()}).then(function(){return q._innerDecode(4001,s,r)})};p.prototype._decode=p.prototype.decode=function(r,q){if(f._activeXInstance){if((typeof r=="string"||r instanceof String)){return this._activeXDecodeHandle(r,q)}else{return Promise.reject(TypeError("'_decode(source, templateName)' in activeX: Type of 'source' should be 'String(partUrl)'."))}}else{if(f._wasmInstance){return f._wasmInstance.decode(r)}else{if(self.Blob&&r instanceof Blob){return this._decodeBlob(r,q)}else{if(self.ArrayBuffer&&r instanceof ArrayBuffer){return this._decodeArrayBuffer(r,q)}else{if((self.Uint8Array&&r instanceof Uint8Array)||(self.Uint8ClampedArray&&r instanceof Uint8ClampedArray)){return this._decodeUint8Array(r,q)}else{if(r instanceof Array){return this._activeXDecodeArray(r,q)}else{if(self.HTMLImageElement&&r instanceof HTMLImageElement){return this._decodeImage(r,q)}else{if(self.HTMLCanvasElement&&r instanceof HTMLCanvasElement){return this._decodeCanvas(r,q)}else{if(self.HTMLVideoElement&&r instanceof HTMLVideoElement){return this._decodeVideo(r,q)}else{if(!isNaN(r)){return this._activeXDecodeHandle(r,q)}else{if(typeof r=="string"||r instanceof String){if(r.substring(0,11)=="data:image/"){return this._decodeBase64(r,q)}else{return this._decodeUrl(r,q)}}else{return Promise.reject(TypeError("'_decode(source, templateName)' in H5: Type of 'source' should be 'Blob', 'ArrayBuffer', 'Uint8Array', 'HTMLImageElement', 'HTMLCanvasElement', 'HTMLVideoElement', 'String(base64 with image mime)' or 'String(url)'."))}}}}}}}}}}}};var k=function(q){return typeof q==="number"&&q%1===0};var m=function(r){if(typeof r!="object"||r.length!=8){return false}for(var q=0;q<r.length;++q){if(!k(r[q])){return false}}return true};p.prototype._innerServiceCmd=function(r,q){return new Promise(function(u,t){var s={method:"ReadBarcode",parameter:[Dynamsoft.DWT.ProductKey,4002,"",""],updateSettings:r,initSettingsContent:q};if(f._activeXInstance){u(f._activeXInstance.Process(h.stringify(s),location.protocol+"//"+location.host))}else{var v;if(h.isString(Dynamsoft.DWT.handshakeCode)||h.isString(Dynamsoft.DWT.organizationID)){v=Dynamsoft.DWT.lglic().then(function(w){s.parameter.push(w.ar);s.parameter.push(w.cu);s.parameter.push(0);return h.stringify(s)})}else{v=Promise.resolve(h.stringify(s))}v.then(function(w){return h.fetch(f._urlRoot+"ReadBarcode",{mode:"cors",method:"post",body:w,dataType:"arrayBuffer"})}).then(function(w){if(a(w)){u(String.fromCharCode.apply(null,new Uint8Array(w)))}else{u(w)}},function(x){var w="Init template & runtimeSettings failed.";if(x){w=[w," Http info: ",x.errorString," (",x.httpCode,")"].join("")}t(w)})}})};p.prototype._innerDecode=function(s,t,r){var q=this;if(q._runtimeSettings){if(q._runtimeSettings.expectedBarcodesCount==0){q._runtimeSettings.expectedBarcodesCount=512}}return new Promise(function(y,x){var w={method:"ReadBarcode",parameter:[Dynamsoft.DWT.ProductKey,s,s!=0?t:null,r||""],updateSettings:q._runtimeSettings,conflictMode:1==q.conflictMode?"ignore":"overwrite",initSettingsContent:q._initSettingsContent,tplContent:(function(){if(r){for(var A=0;A<q._tplContentArr.length;++A){if(r==q._tplContentArr[A].ImageParameter.Name){return h.stringify(q._tplContentArr[A])}}}return null})()};var v=function(C,J,I){try{var G=i(C);if(!G||!G.textResults){x(new f.BarcodeReaderException(G.exception,G.description))}if(h.product.bHTML5Edition&&I&&I.config.data){var E=h.parse(I.config.data),D;if(h.isArray(E.parameter)&&E.parameter.length>2){if(E.parameter[1]==4000){if(E.parameter.length>4&&E.parameter[4]){G.textResults.imageid=E.parameter[4]}else{var F,B;F=E.parameter[2];B=F.indexOf("&index=");if(B>=0){G.textResults.imageid=F.substring(B+7,F.indexOf("&t="))}}}}}for(D=0;D<G.textResults.length;D++){var A=G.textResults[D];A.BarcodeText=A.barcodeText;if(G.exception!=Dynamsoft.DBR.EnumErrorCode.DBR_SUCCESS){A.exception=G.exception}}if(G.exception!=Dynamsoft.DBR.EnumErrorCode.DBR_SUCCESS){G.textResults.exception=G.exception;G.textResults.description=G.description}if(G.records){Dynamsoft.Lib.each(G.records,function(K,L){Dynamsoft.DWT.lavrf(L,K)})}Dynamsoft.DWT.lavrf_();y(G.textResults)}catch(H){x(H)}};if(f._activeXInstance){if(h.isString(Dynamsoft.DWT.handshakeCode)||h.isString(Dynamsoft.DWT.organizationID)){Dynamsoft.DWT.lglic().then(function(A){w.parameter.push(A.ar);w.parameter.push(A.cu);w.parameter.push(0);v(f._activeXInstance.Process(h.stringify(w),location.protocol+"//"+location.host))})}else{v(f._activeXInstance.Process(h.stringify(w),location.protocol+"//"+location.host))}}else{var u=f._urlRoot+"ReadBarcode";if(0==s){u+="/LoadZipFromBytes?cmd="+encodeURIComponent(h.stringify(w))}var z;if(s==0){z=Promise.resolve(t)}else{if(h.isString(Dynamsoft.DWT.handshakeCode)||h.isString(Dynamsoft.DWT.organizationID)){z=Dynamsoft.DWT.lglic().then(function(A){w.parameter.push(A.ar);w.parameter.push(A.cu);w.parameter.push(0);return h.stringify(w)})}else{z=Promise.resolve(h.stringify(w))}}z.then(function(A){return h.fetch(u,{mode:"cors",method:"post",body:A,dataType:"arrayBuffer"})}).then(function(C,B,A){if(a(C)){v(String.fromCharCode.apply(null,new Uint8Array(C)),B,A)}else{v(C,B,A)}Dynamsoft.DWT.lavrf_()},function(B){var A="ReadBarcode request fail.";if(B){A=[A," Http info: ",B.errorString," (",B.httpCode,")"].join("")}x(Error(A))})}})};var i=f._handleRetJsonString=function(s){var r;if(typeof s=="string"||typeof s=="object"&&s instanceof String){try{r=h.parse(s)}catch(q){r=h.parse(f.RemoveNonPrintableChar(s))}}else{r=s}if(!r){throw f.BarcodeReaderException(Dynamsoft.DBR.EnumErrorCode.DBR_UNKNOWN,f.errors.decodeResultEmpty)}if("textResults" in r&&h.isArray(r.textResults)){}else{if(r.exception!=Dynamsoft.DBR.EnumErrorCode.DBR_SUCCESS){throw f.BarcodeReaderException(r.exception,r.description)}}return r};p.prototype.getAllParameterTemplateNames=function(){var q=[];for(var r=0;r<this._tplContentArr.length;++r){q.push(this._tplContentArr[r].ImageParameter.Name)}return q};p.prototype.getRuntimeSettings=function(){var q=this;if(q.bWasm){return f._wasmInstance.getRuntimeSettings()}if(!q._runtimeSettings){q._runtimeSettings=h.parse(f._defaultRuntimeSettingsStr)}return Promise.resolve(q._runtimeSettings)};var o='{"ImageParameter":{"AccompanyingTextRecognitionModes":[{"Mode":"ATRM_SKIP"}],"BarcodeColourModes":[{"LightReflection":1,"Mode":"BICM_DARK_ON_LIGHT"}],"BarcodeComplementModes":[{"Mode":"BCM_SKIP"}],"BarcodeFormatIds":["BF_ALL"],"BarcodeFormatIds_2":["BF2_POSTALCODE","BF2_DOTCODE"],"BinarizationModes":[{"BlockSizeX":0,"BlockSizeY":0,"EnableFillBinaryVacancy":1,"ImagePreprocessingModesIndex":-1,"Mode":"BM_LOCAL_BLOCK","ThreshValueCoefficient":10}],"ColourClusteringModes":[{"Mode":"CCM_SKIP"}],"ColourConversionModes":[{"BlueChannelWeight":-1,"GreenChannelWeight":-1,"Mode":"CICM_GENERAL","RedChannelWeight":-1}],"DPMCodeReadingModes":[{"Mode":"DPMCRM_SKIP"}],"DeblurLevel":3,"DeformationResistingModes":[{"Mode":"DRM_SKIP"}],"Description":"","ExpectedBarcodesCount":512,"FormatSpecificationNameArray":null,"GrayscaleTransformationModes":[{"Mode":"GTM_ORIGINAL"}],"ImagePreprocessingModes":[{"Mode":"IPM_GENERAL"}],"IntermediateResultSavingMode":{"Mode":"IRSM_MEMORY"},"IntermediateResultTypes":["IRT_NO_RESULT"],"LocalizationModes":[{"Mode":"LM_CONNECTED_BLOCKS"},{"Mode":"LM_STATISTICS_MARKS"},{"Mode":"LM_STATISTICS_POSTAL_CODE"}],"MaxAlgorithmThreadCount":4,"Name":"bestSpeed","PDFRasterDPI":300,"PDFReadingMode":{"Mode":"PDFRM_AUTO"},"Pages":"","RegionDefinitionNameArray":null,"RegionPredetectionModes":[{"Mode":"RPM_GENERAL"}],"ResultCoordinateType":"RCT_PIXEL","ReturnBarcodeZoneClarity":0,"ScaleDownThreshold":2300,"ScaleUpModes":[{"Mode":"SUM_AUTO"}],"TerminatePhase":"TP_BARCODE_RECOGNIZED","TextAssistedCorrectionMode":{"BottomTextPercentageSize":0,"LeftTextPercentageSize":0,"Mode":"TACM_VERIFYING","RightTextPercentageSize":0,"TopTextPercentageSize":0},"TextFilterModes":[{"Mode":"TFM_SKIP"}],"TextResultOrderModes":[{"Mode":"TROM_CONFIDENCE"},{"Mode":"TROM_POSITION"},{"Mode":"TROM_FORMAT"}],"TextureDetectionModes":[{"Mode":"TDM_GENERAL_WIDTH_CONCENTRATION","Sensitivity":5}],"Timeout":10000},"Version":"3.0"}',j='{"ImageParameter":{"AccompanyingTextRecognitionModes":[{"Mode":"ATRM_SKIP"}],"BarcodeColourModes":[{"LightReflection":1,"Mode":"BICM_DARK_ON_LIGHT"}],"BarcodeComplementModes":[{"Mode":"BCM_SKIP"}],"BarcodeFormatIds":["BF_ALL"],"BarcodeFormatIds_2":["BF2_POSTALCODE","BF2_DOTCODE"],"BinarizationModes":[{"BlockSizeX":0,"BlockSizeY":0,"EnableFillBinaryVacancy":1,"ImagePreprocessingModesIndex":-1,"Mode":"BM_LOCAL_BLOCK","ThreshValueCoefficient":10}],"ColourClusteringModes":[{"Mode":"CCM_SKIP"}],"ColourConversionModes":[{"BlueChannelWeight":-1,"GreenChannelWeight":-1,"Mode":"CICM_GENERAL","RedChannelWeight":-1}],"DPMCodeReadingModes":[{"Mode":"DPMCRM_SKIP"}],"DeblurLevel":5,"DeformationResistingModes":[{"Mode":"DRM_SKIP"}],"Description":"","ExpectedBarcodesCount":512,"FormatSpecificationNameArray":null,"GrayscaleTransformationModes":[{"Mode":"GTM_ORIGINAL"}],"ImagePreprocessingModes":[{"Mode":"IPM_GENERAL"}],"IntermediateResultSavingMode":{"Mode":"IRSM_MEMORY"},"IntermediateResultTypes":["IRT_NO_RESULT"],"LocalizationModes":[{"Mode":"LM_CONNECTED_BLOCKS"},{"Mode":"LM_STATISTICS"},{"Mode":"LM_STATISTICS_MARKS"},{"Mode":"LM_STATISTICS_POSTAL_CODE"}],"MaxAlgorithmThreadCount":4,"Name":"balance","PDFRasterDPI":300,"PDFReadingMode":{"Mode":"PDFRM_AUTO"},"Pages":"","RegionDefinitionNameArray":null,"RegionPredetectionModes":[{"Mode":"RPM_GENERAL"}],"ResultCoordinateType":"RCT_PIXEL","ReturnBarcodeZoneClarity":0,"ScaleDownThreshold":2300,"ScaleUpModes":[{"Mode":"SUM_AUTO"}],"TerminatePhase":"TP_BARCODE_RECOGNIZED","TextAssistedCorrectionMode":{"BottomTextPercentageSize":0,"LeftTextPercentageSize":0,"Mode":"TACM_VERIFYING","RightTextPercentageSize":0,"TopTextPercentageSize":0},"TextFilterModes":[{"MinImageDimension":65536,"Mode":"TFM_GENERAL_CONTOUR","Sensitivity":0}],"TextResultOrderModes":[{"Mode":"TROM_CONFIDENCE"},{"Mode":"TROM_POSITION"},{"Mode":"TROM_FORMAT"}],"TextureDetectionModes":[{"Mode":"TDM_GENERAL_WIDTH_CONCENTRATION","Sensitivity":5}],"Timeout":10000},"Version":"3.0"}',n='{"ImageParameter":{"AccompanyingTextRecognitionModes":[{"Mode":"ATRM_SKIP"}],"BarcodeColourModes":[{"LightReflection":1,"Mode":"BICM_DARK_ON_LIGHT"}],"BarcodeComplementModes":[{"Mode":"BCM_SKIP"}],"BarcodeFormatIds":["BF_ALL"],"BarcodeFormatIds_2":["BF2_POSTALCODE","BF2_DOTCODE"],"BinarizationModes":[{"BlockSizeX":0,"BlockSizeY":0,"EnableFillBinaryVacancy":1,"ImagePreprocessingModesIndex":-1,"Mode":"BM_LOCAL_BLOCK","ThreshValueCoefficient":10}],"ColourClusteringModes":[{"Mode":"CCM_SKIP"}],"ColourConversionModes":[{"BlueChannelWeight":-1,"GreenChannelWeight":-1,"Mode":"CICM_GENERAL","RedChannelWeight":-1}],"DPMCodeReadingModes":[{"Mode":"DPMCRM_SKIP"}],"DeblurLevel":9,"DeformationResistingModes":[{"Mode":"DRM_SKIP"}],"Description":"","ExpectedBarcodesCount":512,"FormatSpecificationNameArray":null,"GrayscaleTransformationModes":[{"Mode":"GTM_ORIGINAL"},{"Mode":"GTM_INVERTED"}],"ImagePreprocessingModes":[{"Mode":"IPM_GENERAL"}],"IntermediateResultSavingMode":{"Mode":"IRSM_MEMORY"},"IntermediateResultTypes":["IRT_NO_RESULT"],"LocalizationModes":[{"Mode":"LM_CONNECTED_BLOCKS"},{"Mode":"LM_SCAN_DIRECTLY","ScanDirection":0,"ScanStride":0},{"Mode":"LM_STATISTICS"},{"Mode":"LM_LINES"},{"Mode":"LM_STATISTICS_MARKS"},{"Mode":"LM_STATISTICS_POSTAL_CODE"}],"MaxAlgorithmThreadCount":4,"Name":"coverage","PDFRasterDPI":300,"PDFReadingMode":{"Mode":"PDFRM_AUTO"},"Pages":"","RegionDefinitionNameArray":null,"RegionPredetectionModes":[{"Mode":"RPM_GENERAL"}],"ResultCoordinateType":"RCT_PIXEL","ReturnBarcodeZoneClarity":0,"ScaleDownThreshold":214748347,"ScaleUpModes":[{"Mode":"SUM_AUTO"}],"TerminatePhase":"TP_BARCODE_RECOGNIZED","TextAssistedCorrectionMode":{"BottomTextPercentageSize":0,"LeftTextPercentageSize":0,"Mode":"TACM_VERIFYING","RightTextPercentageSize":0,"TopTextPercentageSize":0},"TextFilterModes":[{"MinImageDimension":65536,"Mode":"TFM_GENERAL_CONTOUR","Sensitivity":0}],"TextResultOrderModes":[{"Mode":"TROM_CONFIDENCE"},{"Mode":"TROM_POSITION"},{"Mode":"TROM_FORMAT"}],"TextureDetectionModes":[{"Mode":"TDM_GENERAL_WIDTH_CONCENTRATION","Sensitivity":5}],"Timeout":10000},"Version":"3.0"}',l='{"ImageParameter":{"AccompanyingTextRecognitionModes":[{"Mode":"ATRM_SKIP"}],"BarcodeColourModes":[{"LightReflection":1,"Mode":"BICM_DARK_ON_LIGHT"}],"BarcodeComplementModes":[{"Mode":"BCM_SKIP"}],"BarcodeFormatIds":["BF_ALL"],"BarcodeFormatIds_2":null,"BinarizationModes":[{"BlockSizeX":0,"BlockSizeY":0,"EnableFillBinaryVacancy":1,"ImagePreprocessingModesIndex":-1,"Mode":"BM_LOCAL_BLOCK","ThreshValueCoefficient":10}],"ColourClusteringModes":[{"Mode":"CCM_SKIP"}],"ColourConversionModes":[{"BlueChannelWeight":-1,"GreenChannelWeight":-1,"Mode":"CICM_GENERAL","RedChannelWeight":-1}],"DPMCodeReadingModes":[{"Mode":"DPMCRM_SKIP"}],"DeblurLevel":9,"DeformationResistingModes":[{"Mode":"DRM_SKIP"}],"Description":"","ExpectedBarcodesCount":512,"FormatSpecificationNameArray":null,"GrayscaleTransformationModes":[{"Mode":"GTM_ORIGINAL"}],"ImagePreprocessingModes":[{"Mode":"IPM_GENERAL"}],"IntermediateResultSavingMode":{"Mode":"IRSM_MEMORY"},"IntermediateResultTypes":["IRT_NO_RESULT"],"LocalizationModes":[{"Mode":"LM_CONNECTED_BLOCKS"},{"Mode":"LM_SCAN_DIRECTLY","ScanDirection":0,"ScanStride":0},{"Mode":"LM_STATISTICS"},{"Mode":"LM_LINES"}],"MaxAlgorithmThreadCount":4,"Name":"default","PDFRasterDPI":300,"PDFReadingMode":{"Mode":"PDFRM_AUTO"},"Pages":"","RegionDefinitionNameArray":null,"RegionPredetectionModes":[{"Mode":"RPM_GENERAL"}],"ResultCoordinateType":"RCT_PIXEL","ReturnBarcodeZoneClarity":0,"ScaleDownThreshold":2300,"ScaleUpModes":[{"Mode":"SUM_AUTO"}],"TerminatePhase":"TP_BARCODE_RECOGNIZED","TextAssistedCorrectionMode":{"BottomTextPercentageSize":0,"LeftTextPercentageSize":0,"Mode":"TACM_VERIFYING","RightTextPercentageSize":0,"TopTextPercentageSize":0},"TextFilterModes":[{"MinImageDimension":65536,"Mode":"TFM_GENERAL_CONTOUR","Sensitivity":0}],"TextResultOrderModes":[{"Mode":"TROM_CONFIDENCE"},{"Mode":"TROM_POSITION"},{"Mode":"TROM_FORMAT"}],"TextureDetectionModes":[{"Mode":"TDM_GENERAL_WIDTH_CONCENTRATION","Sensitivity":5}],"Timeout":10000},"Version":"3.0"}';p.prototype.updateRuntimeSettings=function(u){var r=this,t;if(typeof u=="string"||typeof u=="object"&&u instanceof String){if("speed"==u||"balance"==u||"coverage"==u||"default"==u){var q;if("speed"==u){q=o}else{if("balance"==u){q=j}else{if("coverage"==u){q=n}else{q=l}}}return r.initRuntimeSettingsWithString(q)}else{t=u}}else{if(typeof u=="object"){t=h.stringify(u)}else{throw TypeError("'setTemplateSettings(settings)': Type of 'settings' should be 'String' or 'PlainObject'.")}}var s=h.parse(t);if(r.bWasm){return f._wasmInstance.updateRuntimeSettings(s).then(function(){return f._wasmInstance.getRuntimeSettings()})}r._runtimeSettings=s;r._initSettingsContent=null;return r._innerServiceCmd(r._runtimeSettings,null).then(function(v){var w=f._handleRetJsonString(v);r._runtimeSettings=w.settings;if(!r._runtimeSettings){r._runtimeSettings=h.parse(f._defaultRuntimeSettingsStr)}return w.settings})};p.prototype.resetRuntimeSettings=function(){var q=this;if(q.bWasm){return f._wasmInstance.resetRuntimeSettings().then(function(){return f._wasmInstance.getRuntimeSettings()})}q._runtimeSettings=h.parse(f._defaultRuntimeSettingsStr);q._initSettingsContent=null;return q._innerServiceCmd(q._runtimeSettings,null).then(function(r){var s=f._handleRetJsonString(r);q._runtimeSettings=s.settings;if(!q._runtimeSettings){q._runtimeSettings=h.parse(f._defaultRuntimeSettingsStr)}return s.settings})};p.prototype.outputSettingsToString=function(q){if(q){for(var r=0;r<this._tplContentArr.length;++r){if(q==this._tplContentArr[r].ImageParameter.Name){return h.stringify(this._tplContentArr[r])}}}else{return f._defaultTemplateStr}};p.prototype.initRuntimeSettingsWithString=function(r){var q=this;if(!h.isString(r)){throw TypeError("'initRuntimeSettingsWithString(settings)': Type of 'settings' should be 'String'.")}if(q.bWasm){return f._wasmInstance.initRuntimeSettingsWithString(r).then(function(){return f._wasmInstance.getRuntimeSettings()})}q._runtimeSettings=null;q._initSettingsContent=h.parse(r);return q._innerServiceCmd(null,q._initSettingsContent).then(function(s){var t=f._handleRetJsonString(s);q._runtimeSettings=t.settings;if(!q._runtimeSettings){q._runtimeSettings=h.parse(f._defaultRuntimeSettingsStr)}return t.settings})};return p})();f._dbr=false;f._initH5=function(i,h){return new Promise(function(k,j){f._urlRoot=Dynamsoft.dcp._getPreUrl(Dynamsoft.dcp.detect.curPortIndex)+"dcp/dbr_"+f.Version.replace(/\./g,"")+"/";e.ajax({method:"POST",url:f._urlRoot+"VersionInfo",data:'{"method":"VersionInfo"}',onSuccess:function(){k()},onError:function(){return j("Failed to connect to the Barcode Reader Add-on, the library may be missing in the Dynamsoft Service directory.")},dataType:"json",async:true,timeout:800})}).then(function(){f._dbr=new f.Class();return f._dbr._innerServiceCmd(null,null)}).then(function(j){try{var l=f._handleRetJsonString(j);f._dbr._runtimeSettings=l.settings;f._defaultRuntimeSettingsStr=e.stringify(l.settings);f._defaultTemplateStr=e.stringify(l.outputSettings);i(f._dbr)}catch(k){h(Error("Init template & runtimeSettings failed: "+k.message)||k)}},function(j){h(j)})};function g(){try{if(typeof WebAssembly==="object"&&typeof WebAssembly.instantiate==="function"){var h=new WebAssembly.Module(Uint8Array.of(0,97,115,109,1,0,0,0));if(h instanceof WebAssembly.Module){return new WebAssembly.Instance(h) instanceof WebAssembly.Instance}}}catch(i){}return false}f.dbrInitPromiseFun=function(n,p){var j=Dynamsoft.BarcodeReaderAddon,m=function(){if(Dynamsoft.DBR&&Dynamsoft.DBR.BarcodeReader&&Dynamsoft.DBR.BarcodeReader.createInstance){Dynamsoft.DBR.BarcodeReader.createInstance().then(function(q){if(Dynamsoft.DWT.dbrCanvasMaxWH){q._canvasMaxWH=Dynamsoft.DWT.dbrCanvasMaxWH}j._wasmInstance=q;return q.getRuntimeSettings()}).then(function(q){j._dbr._runtimeSettings=q;j._defaultRuntimeSettingsStr=e.stringify(q);n(j._dbr)},p)}};if(j._dbr){if(j._dbr.bWasm&&!j._wasmInstance){m()}else{n(j._dbr)}return}var k="?t=2020525",h=Dynamsoft.DWT.ResourcesPath,l=!Dynamsoft.navInfo.bWin||e.product.bHTML5Edition&&(!Dynamsoft.DWT.UseLocalService||e.env.bMobile||Dynamsoft.DWT.UseBarcodeAddonWasm);var o=function(){if(l){if(Dynamsoft.DBR&&Dynamsoft.DBR.BarcodeReader||Dynamsoft.BarcodeReader||window.DSBarcodeReader&&window.DSBarcodeReader.BarcodeReader){}else{return}if(Dynamsoft.DBR){}else{if(Dynamsoft.BarcodeReader){Dynamsoft.DBR={BarcodeReader:Dynamsoft.BarcodeReader}}else{if(window.DSBarcodeReader&&window.DSBarcodeReader.BarcodeReader){Dynamsoft.DBR={BarcodeReader:window.DSBarcodeReader.BarcodeReader}}}}Dynamsoft.DBR.BarcodeReader.engineResourcePath=Dynamsoft.DWT.ResourcesPath+"/addon/dbrjs/";if(e.isString(Dynamsoft.DWT.sessionPassword)){Dynamsoft.DBR.BarcodeReader.sessionPassword=Dynamsoft.DWT.sessionPassword}if(e.isArray(Dynamsoft.DWT.licenseServer)){Dynamsoft.DBR.BarcodeReader.licenseServer=Dynamsoft.DWT.licenseServer}if(e.isString(Dynamsoft.DWT.handshakeCode)){Dynamsoft.DBR.BarcodeReader.handshakeCode=Dynamsoft.DWT.handshakeCode}else{if(e.isString(Dynamsoft.DWT.organizationID)){Dynamsoft.DBR.BarcodeReader.organizationID=Dynamsoft.DWT.organizationID}else{if(e.isString(Dynamsoft.DWT.ProductKey)){Dynamsoft.DBR.BarcodeReader.productKeys=Dynamsoft.DWT.ProductKey}}}e.showLoadingMsg(-1,"",Dynamsoft.MSG.Init_CompilingWasm);Dynamsoft.DBR.BarcodeReader._bUseFullFeature=true;j._dbr=new j.Class();j._dbr.bWasm=true;m();return}if(e.product.bHTML5Edition){j._initH5(n,p)}else{var u=Dynamsoft.navInfoSync,q={method:"ReadBarcode",parameter:[Dynamsoft.DWT.ProductKey,4002,"",""]};if(u.bIE&&parseInt(u.IEVersion)<=j._activeXMaxIEVersion){try{j._activeXInstance=new ActiveXObject("DBRModule.AtlDBR");var v=j._activeXInstance.Process(e.stringify(q),location.protocol+"//"+location.host);var t=e.parse(v);if(!t){return p(Error("The DBR init error."))}if("settings" in t){j._dbr=new j.Class();j._dbr._runtimeSettings=t.settings;j._defaultRuntimeSettingsStr=e.stringify(t.settings);if("outputSettings" in t){j._defaultTemplateStr=e.stringify(t.outputSettings)}n(j._dbr)}else{var r=t.description||"The DBR init error.";return p(Error(r))}}catch(s){return p(Error("The DBR .dll is missing or not accessible: "+(s.message||s)))}}}};if(l){if(!e.detect.dbrwasmScriptLoaded){if(!g()){p(Error(Dynamsoft.MSG.Err_BrowserNotSupportWasm));return}var i=e.getScript([h,"/addon/dbrjs/dbr.js",k].join(""),true,function(q){e.detect.dbrwasmScriptLoaded=true;o()});if(e.isString(Dynamsoft.DWT.handshakeCode)){i.setAttribute("data-productKeys",Dynamsoft.DWT.handshakeCode)}else{if(e.isString(Dynamsoft.DWT.organizationID)){i.setAttribute("data-productKeys",Dynamsoft.DWT.organizationID)}else{i.setAttribute("data-productKeys",Dynamsoft.DWT.ProductKey)}}}else{o()}}else{o()}};var d=function(i){var j=e.html5.Funs,h;if(Dynamsoft.dcp.b64bit){b="dbrx64_"+Dynamsoft.BarcodeReaderAddon.Version+".dll"}else{b="dbr_"+Dynamsoft.BarcodeReaderAddon.Version+".dll"}if(e.product.bHTML5Edition&&!i._isMobileMode()){i._innerSend("GetAddOnVersion",j.makeParams("barcodereader",b),true,false,false)}h={BarcodeReader:{decode:function(k){if(!e.License.checkProductKey(i,{Core:true})){return Promise.reject(f.BarcodeReaderException(i._errorCode,i._errorString))}if(!e.isNumber(k)||k<0||k>=i.HowManyImagesInBuffer){e.Errors.IndexOutOfRange(i);return Promise.reject(f.BarcodeReaderException(i._errorCode,i._errorString))}return Promise.resolve(k).then(function(m){var l;if(e.product.bHTML5Edition){l=i._ImgManager.convertClientIndexToServerId(m);if(l==-1){e.Errors.IndexOutOfRange(i);throw f.BarcodeReaderException(i._errorCode,i._errorString)}}else{l=m}return new Promise(function(o,n){f.dbrInitPromiseFun(function(r){if(r.bWasm){var p=r.getRuntimeSettings();p=p.then(function(u){if(u.expectedBarcodesCount==0){u.expectedBarcodesCount=512;return r.updateRuntimeSettings(u)}});if(i._isMobileMode()){p=p.then(function(){var u=i._ImgManager.convertServerIdToClientIndex(l);return i._ImgManager.getWebViewer().GetImageData(i._ImgManager.getUidByIndex(u))});p=p.then(function(u){if(u.oriData){return u.oriData}return u.originalData})}else{p=p.then(function(){var u=i._ImgManager.convertServerIdToClientIndex(l);return i.GetImageURL(u,-1,-1)})}p=p.then(function(u){if(u instanceof Blob||u instanceof ArrayBuffer){return f._wasmInstance.decode(u)}return e.fetch(u,{mode:"cors",dataType:"blob"}).then(function(v){return f._wasmInstance.decode(v)})});p.then(function(u){u.imageid=i.objImageIndexManager.convertServerIdToGuid(l);o(u)},function(v){var u="decode failed.";if(v){u=[u," ",v.errorString," (",v.httpCode,")"].join("")}n(Error(u))})}else{var s;if(!e.product.bHTML5Edition){s=l;var t=i.GetImagePartURL(s,-1,-1);return r._innerDecode(4001,t,"").then(function(u){u.imageid=i.IndexToImageID(s);o(u)},function(u){n(u)})}if(!r.bWasm){s=i._ImgManager.convertServerIdToClientIndex(l);var q=i.GetImagePartURL(s,-1,-1);return r._innerDecode(4000,q,"").then(function(u){u.imageid=i.IndexToImageID(s);o(u)},function(u){n(u)})}}},n)})})},resetRuntimeSettings:function(){if(!e.License.checkProductKey(i,{Core:true})){return Promise.reject(f.BarcodeReaderException(i._errorCode,i._errorString))}return new Promise(f.dbrInitPromiseFun).then(function(k){return k.resetRuntimeSettings()})},getRuntimeSettings:function(k){if(!e.License.checkProductKey(i,{Core:true})){return Promise.reject(f.BarcodeReaderException(i._errorCode,i._errorString))}if(e.isString(k)&&("speed"==k||"balance"==k||"coverage"==k||"default"==k)){return this.updateRuntimeSettings(k)}return new Promise(f.dbrInitPromiseFun).then(function(l){return l.getRuntimeSettings()})},updateRuntimeSettings:function(k){if(!e.License.checkProductKey(i,{Core:true})){return Promise.reject(f.BarcodeReaderException(i._errorCode,i._errorString))}return new Promise(f.dbrInitPromiseFun).then(function(l){return l.updateRuntimeSettings(k)})},initRuntimeSettingsWithString:function(k){if(!e.License.checkProductKey(i,{Core:true})){return Promise.reject(f.BarcodeReaderException(i._errorCode,i._errorString))}return new Promise(f.dbrInitPromiseFun).then(function(l){return l.initRuntimeSettingsWithString(k)})}}};if(e.product.bHTML5Edition){i.__addon=i.__addon||{};e.mix(i.__addon,h)}else{i.Addon=i.Addon||{};e.mix(i.Addon,h)}};if(e.DynamicLoadAddonFuns){e.DynamicLoadAddonFuns.push(d)}Dynamsoft.unloadQueue.push(function(){if(f._wasmInstance){f._wasmInstance.destroy();f._wasmInstance=false}})});