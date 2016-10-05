/**
 * juulio.com - Costa Rica
 */

var JUULIO = JUULIO || {};

JUULIO.global = JUULIO.global || (function () {
	'use strict';

  var object = {};

	// Verifies if app is running on a mobile device
	object.isMobile = function(){
		if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
			return true;
		}
		else {
			return false;
		}
	};

	object.setRendererWidth = function(width){
		if (typeof width !== 'undefined' || width !== null) {
  		if(this.isMobile()){
				return window.innerWidth;
			}
			else {
				return width;
			}
		}
	};

  return object;

})();
