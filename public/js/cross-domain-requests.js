// function requestCrossDomain(site, callback) {
// 	if (!site) {
// 		alert('user needs to submit a station number');
// 		return false;
// 	}

// 	// var yql = 'http://waterservices.usgs.gov/nwis/iv/?sites= '+site+' &parameterCd=00060&siteType=ST'
// 	// var yql = 'http://query.yahooapis.com/v1/public/yql?q=' + encodeURIComponent('select * from html where url="' + site + '"') + '&format=xml&callback=cbFunc';

// 	var yql = 'http://query.yahooapis.com/v1/public/yql?q=SELECT%20*%20FROM%20xml%20WHERE%20url%3D'http%3A%2F%2Fwaterservices.usgs.gov%2Fnwis%2Fiv%2F%3Fsites%3D'+ site +'%26parameterCd%3D00060%26siteType%3DST''

// 	$.getJSON(yql, function(data){
// 		if (data.results[0]) {
// 			data = data.results[0].replace.replace(/<script[^>]*>[\s\S]*?<\/script>/gi, ''); 
		
// 			if (typeof callback === 'function') {
// 				callback(data);
// 			}

// 		}
// 		else throw new Error('Nothing returned from getJSON.'); 

// 	});

// }