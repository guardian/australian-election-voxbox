import xr from 'xr';
import { Voxbox } from './modules/voxbox'



function getParameter(paramName) {
	var searchString = window.location.search.substring(1),
	i, val, params = searchString.split("&");

	for (i=0;i<params.length;i++) {
	val = params[i].split("=");
	if (val[0] == paramName) {
	return val[1];
	}
	}
	return null;
}

var key = getParameter('key');

if(!key) {
	key = "10k7rSn5Y4x0V8RNyQ7oGDfhLvDqhUQ2frtZkDMoB1Xk";
}

console.log(key)

xr.get('https://interactive.guim.co.uk/docsdata/' + key + '.json').then((resp) => {

	let googledoc = resp.data.sheets;

	new Voxbox(googledoc.data,googledoc.settings)
	
});
