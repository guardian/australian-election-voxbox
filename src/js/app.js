import xr from 'xr';
import { Voxbox } from './modules/voxbox'

var key = "10k7rSn5Y4x0V8RNyQ7oGDfhLvDqhUQ2frtZkDMoB1Xk"

xr.get('https://interactive.guim.co.uk/docsdata/' + key + '.json').then((resp) => {

	let googledoc = resp.data.sheets.Sheet1;

	new Voxbox(googledoc)
	
});
