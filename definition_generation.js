/*jshint esversion: 6 */

let tags_and_indexes = [];

const calculate_tags_and_indexes = () => {
	for (let w in GGG) {
		let k = GGG[w][1].split(" ");
		
		for (let j=0; j<k.length; j++) {
			if (typeof tags_and_indexes[k[j]] == 'undefined')
				tags_and_indexes[k[j]] = [];
			tags_and_indexes[k[j]].push(w);
		}
	}
};

calculate_tags_and_indexes();

let basket = document.createElement('div');

let size_coef = Math.pow($(window).width(),0.4) / 1.3;


const handleKeyPress = (e) => {
	let key = e.keyCode || e.which;
	
	if (key==13)
		print_full_translation("demo");

	else if (key==27)
		clean_input();
};


const put_a_space_after_each_slash = (w) => {
	let k = w.split("/");
	w = k[0];

	for (let i=1; i<k.length; i++) {
		w += "/ " + k[i];
	}

	k = w.split("(");
	w = k[0];

	for (let i=1; i<k.length; i++) {
		w += "<br>(" + k[i];
	}

	return w;
};


const print_translation_by_elem = (w) =>
	print_translation_by_elem_from_disassemble(disassemble(w));

const print_translation_by_elem_from_disassemble = (d,k) => {
	if (d.error) return d.error;
	let zz = d.join('+').replaceAll("'","%");
	let res = `<div class="tey">`;

	for (let el of d) {
		res += `
		<div style="width: ${Math.round(2.5*k*el.length)}px; min-width: ${Math.round(8*k)}px;">
			<div style="font-size: ${Math.round(3.5*k)}px"> <b> ${el} </b>
		</div>`;

		let t = translate_elem_smart(el);

		res += `
		<div style="font-size: ${Math.round(3*k/Math.pow(t.length,0.3))}px">
			${put_a_space_after_each_slash(t)}
		</div></div>`;
	}

	if (k != 11)
	res += `<div style="height: ${Math.round(7*size_coef)}px">
	<img src="pronounce_icon.png" style="width: ${Math.round(3*size_coef)}px" onClick="pronounce_d('${zz}')"></div>
	</div>`;

	return res;
};

const get_elem_table = (tag, column_width, title) => {
	let res = `
	<div>
		<div style="font-size: 30px; text-align: center; padding: 10px 0px"><b>${title}</b></div> 
	<div id="${title}_container" class="elt" >`;

	let k = tag.split(' ');
	let head_tag = k[0];
	
	let elem_array = tags_and_indexes[head_tag];
	
	for (let j=0; j < elem_array.length; j++) {
		
		let y = GGG[  elem_array[j]  ];

		let tag_missing = false;

		for (let i=1; i < k.length; i++)
			if (!(" "+y[1]+" ").includes(" "+k[i]+" ")) {
				tag_missing = true;
				break;
			}

		if (tag_missing) continue;

		let spl = y[0].split('><')[0];
		if (cur_lang() != 'eng') {
			let a = tr_from_Nao(elem_array[j]);
			if (a !== null) spl = a.main_tr;
		}

		let sk = 30;
		if (cur_lang() == 'jap') sk = 25;

		res +=`
			<div>
			<div>${elem_array[j]}</div>
			<div style="font-size: ${parseInt(sk/Math.pow(spl.length,0.3))}px">
				${put_a_space_after_each_slash(spl)}</div>
			</div>`;
   	}

	res += '</div></div>';
	return res;
};

const get_column_of_tables = (tags,column_width) => {
	let res = "";
	res += '<div>';
	for (let i=0; i < tags.length; i++)
		res += get_elem_table(tags[i][0],100,tags[i][1]);
	res += '</div>';
	return res;
};

const print_by_part_of_speech = () => {
	let res = "";

	res += get_column_of_tables([ ["prefix c",get_label("Prefixes")],["prep c",get_label("Prepositions")] ],30);
	res += get_column_of_tables([ ["adj c",get_label("Adjectives")],["other c",get_label("Others")] ],30);
	
	//res += get_column_of_tables([ ["v intr","Intr. verbs"],[,"Others"] ],15);
	//res += get_column_of_tables([ ["nlp","Noun-like prefixes"],["n","Nouns"] ],30);
	//res += get_elem_table("v intr",15,"Intr. verbs");
	res += get_elem_table("v c",25,get_label("Verbs"));
	res += get_elem_table("n c",25,get_label("Nouns"));

	document.getElementById("elem_table").innerHTML = res;
};

function clicked_element() {
	document.getElementById("input_word1").value += this.children[0].innerHTML;
	$('html, body').animate({ scrollTop: $('.main').offset().top }, 300);
	document.getElementById("input_word1").focus();
}

const toggle_settings = () => {
	$('#klmz > div:nth-child(1) > div:nth-child(3)').slideToggle();
	$('#klmz > div:nth-child(1) > div:nth-child(2)').slideToggle();
};

let generated_translation = "";
let word_to_translate = "";
let shown_words;

const print_def = (d) => {
	if (d.length == 1 || cur_lang() != 'eng') return;
	let gd = generate_definition_from_disassemble(d).join(' ');
	generated_translation += `<div class="transl" style="font-size: ${Math.round(size_coef*1.5)}px">
	 ${get_label('Automatically generated definition:')}
	 <span class="trb" style="color: grey; font-size:
	 ${Math.round(size_coef*1.7)}px"> ${gd} </span></div>`;
};

const print_main_tr = (k) => {
	return `<div class="transl" style="font-size: ${Math.round(size_coef*2)}px">
	${get_label('Main translation:')}
	<span class="trb" style="font-size: ${Math.round(size_coef*3)}px">
	${k.main_tr} </span></div>`;
};

const print_other_tr = (k) => {
	if (k.other_tr === undefined) return '';
	return `<div class="transl" style="font-size: ${Math.round(size_coef*2)}px">
	${get_label('Other possible translations:')}
	<span class="trb" style="font-size: ${Math.round(size_coef*3)}px; color: grey">
	${k.other_tr.join('; ')} </span></div>`;
};

const add_number_to_tr = (tr, number) => {
	basket.innerHTML = tr;
	basket.children[0].innerHTML =
	`<div style="font-size: ${Math.round(size_coef*4)}px">${(number+1)}) </div>`+ basket.children[0].innerHTML;

	return basket.innerHTML;
};

const print_trio = (arr_of_nao_words, translating_to_Nao) => {
	//if (arr_of_nao_words === null || arr_of_nao_words === undefined) return;

	if (translating_to_Nao && arr_of_nao_words.length == 0) {
		generated_translation = get_label("English dictionary: not found");
	}
	else if (!translating_to_Nao && arr_of_nao_words != null && arr_of_nao_words.length > 0 && shown_words.length == 0) {
		generated_translation = '';
	}

	if (arr_of_nao_words.length > 1) {
		if (translating_to_Nao)
			generated_translation += `<div class="transl">${get_label('We have found')+arr_of_nao_words.length+get_label('possible translations depending on what you mean:')}</div>`;
		else generated_translation += `<div class="transl">${get_label('We have split your query into')+arr_of_nao_words.length+get_label('words')}</div>`;
	}

	for (let i = 0; i < arr_of_nao_words.length; i++) {

		let d = disassemble(arr_of_nao_words[i]);
		if ( !d.error && shown_words.includes(d.join('')) ) continue;
		let tr = print_translation_by_elem_from_disassemble(d, size_coef);
		
		if (d.error && d.error.includes(get_label('Nao alphabet does not have letter'))) {
			if (generated_translation === '') generated_translation = '"'+arr_of_nao_words[i] + '" : '+ get_label("English dictionary: not found");
			continue;
		}

		if ( tr.includes(get_label('error')) && shown_words.length == 0) {
			generated_translation = get_label("English dictionary: not found");
			return;
		}
		
		if ( i==0 && (tr.includes(get_label('error')) || tr.includes("---")) && shown_words.length > 0) break;
		
		if (arr_of_nao_words.length > 1) generated_translation += add_number_to_tr(tr, i);
		else generated_translation += tr;
		shown_words.push(arr_of_nao_words[i]);

		if ( tr.startsWith('<div') ) {
			
			if (!tr.includes('*') ) print_def(d);
			let k = tr_from_Nao(d.join(''));

			if (k !== null) {
				if (d.length > 1) generated_translation += print_main_tr(k);
				if (arr_of_nao_words.length == 1) generated_translation += print_other_tr(k);
			}
		}

		if (is_an_hsl_color(d)) generated_translation += hsl_to_colorbox(Nao_color_to_HSL(d));

		generated_translation += '<br>';
	}
};

const print_full_translation = (output_elem) => {
	let hh = document.getElementById("input_word1").value.toLowerCase().trim();
	set_hash('word-to-search',document.getElementById("input_word1").value);

	if (hh === '') return;

	if (hh == word_to_translate) {
		$('#demo').slideDown();
		return;
	}
	$('#demo').hide();

	word_to_translate = hh;
	generated_translation = '';
	shown_words = [];

	print_trio(tr_to_Nao(hh), true);
	print_trio(translate_sentence(hh) );
	
	//if (generated_translation.includes(get_label('error')) )
	//	generated_translation = `<div class="transl">${get_label('English dictionary: not found')}</div>`;

	document.getElementById(output_elem).innerHTML = generated_translation;
	$('#demo').slideDown();
};

const dictionary_tab = () => {
	document.getElementById("input_word1").focus();

	print_by_part_of_speech();
};

const clean_input = () => {
	document.getElementById("input_word1").value = "";
	document.getElementById("input_word1").focus();
	set_hash('word-to-search','');

	$('#demo').slideUp();
	$('html, body').animate({ scrollTop: $('.main').offset().top }, 300);
};

$('#select_lang').on('change', () => {
	erase_hash('lang');
	set_cookies_select_lang(document.getElementById('select_lang').value);
	location.reload();
});	