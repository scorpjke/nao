

const Nao_color_to_HSL = (d) => {
	if (d[0] != 'ha') return 'error: color must start with "ha"';
	let hue = "";
	let saturation = 100;
	let luminosity = 50;

	let i;
	let z;

	for (i=1; i < d.length; i++) {
		z = translate_elem(d[i]).translation;
		if ( isNaN(z) ) break;
		hue += z;
	}

	hue = hue / Math.pow(10,hue.length-1) * 60;

	if (i < d.length ) {
		if ( d[i] == 'ga') {
			if (d[i+1]== 'lai') luminosity = 100 ;
			else if (d[i+1]== 'lau') luminosity = 0;
		}
		else if ( d[i].match(/^lai|lau$/) ) {
			let s = d[i] == 'lai' ? 1 : -1;
			luminosity = "";

			for (i=i+1; i < d.length; i++) {
				z = translate_elem(d[i]).translation;
				if ( isNaN(z) ) break;
				luminosity += z;
			}

			if ( luminosity === '') luminosity = 50+25*s;
			else luminosity = 50 + luminosity / Math.pow(10,luminosity.length)*100/2*s;
		}
	}

	if (i < d.length ) {
		if ( d[i] == 'ga') {
			if (d[i+1]== 'bul') saturation = 100 ;
			else if (d[i+1]== 'bil') luminosity = 0;
		}
		else if ( d[i].match(/^bil|bul$/)  ) {
			let s = d[i] == 'bil' ? -1 : 1;
			saturation = "";

			for (i=i+1; i < d.length; i++) {
				z = translate_elem(d[i]).translation;
				if ( isNaN(z) ) break;
				saturation += z;
			}

			if ( saturation === '') saturation = 50+25*s;
			else saturation = 50 + saturation / Math.pow(10,saturation.length)*100/2*s;
		}
	}

	return 'hsl('+hue+','+saturation+'%,'+luminosity+'%)';
};

function hsl_to_colorbox(hsl) {
	return '<div class="transl"><div class="color_box" style="background: '+ hsl + '"></div></div>';
}

const is_an_hsl_color = (d) => {
	if (d[0] != 'ha' || d.length < 2) return false;
	let t = translate_elem(d[1]).translation;

	if (isNaN(t) && d[1] != 'ga') return false;
	if (t > 5) return false;

	let z;
	for (let i=1; i<d.length; i++) {
		z = translate_elem(d[i]).translation;
		if ( isNaN(z) && !['lai','lau','bul','bil','ga','pu','pi'].includes(d[i])) return false;
	}
	return true;
};


