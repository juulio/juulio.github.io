/**
 * @author Julio Del Valle
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

  return object;

})();
