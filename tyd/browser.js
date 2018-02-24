window.onload = function () {
	o = _.g("id:output");
	nav = window.navigator;
	navigator.getBattery().then( function(v) {
		o.innerHTML += "Battery: " + ( v.level * 100 ).toString() + "%<br>";
		o.innerHTML += "IsCharging: " + v.charging + "<br>";
	} );
	o.innerHTML += "Language: " + nav.language + "<br>";
	o.innerHTML += "NativeCore: " + nav.appCodeName + "<br>";
	o.innerHTML += "SelectedLangs: " + nav.languages + "<br>";
	o.innerHTML += "Developer: " + nav.vendor + "<br>";
	o.innerHTML += "AppName: " + nav.appName + "<br>";
	o.innerHTML += "UserAgent: " + nav.userAgent + "<br>";
	o.innerHTML += "DoNotTrack: " + nav.doNotTrack + "<br>";
	o.innerHTML += "MaxiumTouchPoints: " + nav.maxTouchPoints + "<br>";
	o.innerHTML += "Online: " + nav.onLine + "<br>";
	o.innerHTML += "Product: " + nav.product + "<br>";
	o.innerHTML += "ProductSub: " + nav.productSub + "<br>";
	o.innerHTML += "HardwareCuncurrency: " + nav.hardwareConcurrency + "<br>";
	o.innerHTML += "Platform: " + nav.platform + "<br>";
}
setInterval("window.onload()",5000)
