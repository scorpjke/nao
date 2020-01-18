const OPP = 'c';

const comp = (a,b) => a == b ? 0 : a > b ? 1 : -1;

String.prototype.replaceAll = function(search, replacement) {
    let target = this;
    return target.split(search).join(replacement);
};

const compare_words_Nao = (a,b) => {
	let alphabet = "ptkbdglmnhfcsaiueo'rjzv";
	let m =  Math.min(a.length, b.length);

	for (let i=0; i<m; i++) {
		let as = alphabet.indexOf(a[i]);
		let bs = alphabet.indexOf(b[i]);

		if (as != bs) return comp(as,bs);
	}
	return comp(a.length, b.length);
};

const is_a_Russian_letter = (c) =>
	c >= 'а' && c <= 'я' ||
	c >= 'А' && c <= 'Я' ||
	c == 'ё' || c == 'Ё';

const is_punctuation = (c) => ' ,.!?()-:"%'.includes(c);

const is_a_Russian_phrase = (w) => {
	for (let c of w) {
		if (!is_a_Russian_letter(c) && !is_punctuation(c))
			return false;
	}
	return true;
};

const union = (a,b) => a.concat(b.filter(  (e) => a.indexOf(e) < 0 ));

const smart_split = (w) => {
	w = w.trim();
	let res = [];

	if (w.includes('('))
		res = res.concat( smart_split( w.substr(0,w.indexOf('(')) + w.substr(w.indexOf(')')+1) ) );
	else if (w.includes('/')) {
/* 		let r = new RegExp(/(.+\s|)(.+)\/(.+)(\s.+|)/, 'u');
		let m = w.match(r);
		if (m === null || m==null)
			console.log('AAAAAAAAAAAAAA',w);
		else
			res = union(res, union(smart_split(m[1]+m[2]+m[4]), smart_split(m[1]+m[3]+m[4]))); */
		let p = w.split(' ');
		let f=0; while (!p[f].includes('/')) f++;
		let begin = p.slice(0,f).join(' ')+' ';
		let end = ' '+p.slice(f+1).join(' ');

		let u = p[f].split('/');
		for (let e of u) res = union([w],union(res, smart_split( begin + e + end )  ));
	}
	else if (w.includes('[')) {
		let r = new RegExp(/(.*)\[([^\[\]]*)\](.*)/, 'u');
		let m = w.match(r);
		if (m === null || m==null)
			console.log('AAAAAAAAAAAAAA',w);
		else
			res = union(res,union(smart_split(m[1] + m[3]), smart_split(m[1] + smart_split(m[2]) + m[3])));
	}
	else if (w.startsWith('<') && w.endsWith('>')) {
		res.push(w, w.slice(1,-1)  );
	}
/* 	else if (w.startsWith('be ')) {
		res.push(w);
		res = res.concat(smart_split(w.slice(3)) );
	} */
	else res.push(w);

	return res;
};

//console.log(smart_split("a/the cool town/village/city"));

String.prototype.make_be_optional = function() {
	if (this.startsWith('be ') ) return '[be ]'+this.slice(3);
	else return this;
};


const make_dictionaries = () => {
	let dictionaries = [];
	let excel_table = get_comdic().slice(0,-1).split('\n')
	.map(  (line) => line.split(String.fromCharCode(9)) )
	.filter( (line) => 
		!(   line[0] === '' || line[0].includes('[')  )
	);

	for (let i = 1; i < excel_table[0].length; i=i+2) {
		let cur_dic = {from_Nao: {}, to_Nao: {}};

		for (let line of excel_table) {
			if (line[i] === '') continue;
			
			line[i] = line[i].replace(/_/g,' ');
			let l = [ line[i].replace(/\[|\]/g, '') ];
			if (line[i+1] !== '')
				l.push(line[i+1].split(',').map( e => e.trim() ));

			cur_dic.from_Nao[line[0]] = l;

			let all_tr = [line[i]];
			if (line[i+1] !== '') all_tr = all_tr.concat(l[1]);

			for (let i=0; i < all_tr.length; i++) all_tr[i] = all_tr[i].replace(/ё/g,'е');
			
			let all_ss = [];
			for (let w of all_tr) all_ss = union( all_ss, smart_split(w) );

			for (let w of all_ss) {
				w = w.toLowerCase();
				if (cur_dic.to_Nao[w]) cur_dic.to_Nao[w].push(line[0]);
				else cur_dic.to_Nao[w] = [line[0]];
			}
		}
		dictionaries.push(cur_dic);
	}
	return dictionaries;
};



const dictionaries = make_dictionaries();
//console.log(dictionaries);

const dic = (lang_name) => dictionaries[lang_arr.findIndex(e => e == lang_name)];
const cur_dic = () => dictionaries[dicnum];

const tr_from_Nao = (w) => {
	let r = cur_dic().from_Nao[w];
	//if (r === undefined && w.startsWith("'")) return tr_from_Nao(w.slice(1));

	if (r === undefined ) {
		let num = translate_number(w);
		if (num) {
			let mt = num.power > 0 ? (1*num.print()*1).toLocaleString() : num.print();
			return {nao: w, main_tr: mt};
		}
		else return null;
	}
	else return {
		nao: w,
		main_tr: r[0],
		other_tr: r[1]
	};
};

const tr_to_Nao_specific = (w) => {
	let res = cur_dic().to_Nao[w];
	return res ? res : [];
};


const GGG = {
"ma":	[		"place/site (of/for)",			"n site c",		"place"],
"ka":	[		"tool/appliance (of/for)",		"n c", 			"tool"],
"bu":	[		"body[part] (of/for)",			"n body c", 	"bodypart"],
"bi":	[		"spirit/soul",					"n body", 		"soul"],
"la":	[		"[f]act (of)",					"n c", 			"act_of"],
"to":	[		"object/thing",					"n c", 			"object"],
"da":	[		"person",						"n c", 			"person"],
"lo":	[		"someone/something",			"n c",			"someone/something"],			
"cu":	[		"top",							"n site c", 	"top"],
"ci":	[		"bottom",						"n site", 		"bottom"],
"me":	[		"I/me",							"n c",			"me"],
"te":	[		"you",							"n c",			"you"],
"le":	[		"time (of)",					"n time c",		"time"],
"su":	[		"[thought of as one whole] group (of)",	"n c",	"group"],
"si":	[		"element (of)",					"n c",			"element"],
"ni":	[		"inside",						"n site c",		"inside"],
"nu":	[		"outside",						"n site",		"outside"],
"se":	[		"oneself",						"n c",			"self"],
"pia":	[		"each other",					"n c",			"each_other"],
"lem":	[		"occurence",					"n c",			"occurence"],
"kiu":	[		"solid",						"n ph_str c", 	"solid"],
"lio":	[		"liquid",						"n ph_str c", 	"liquid"],
"fua":	[		"gaseous matter [possibly air]","n ph_str c", 	"gas"],
"nie":	[		"year",							"n time c",		"year"],
"nal":	[		"weekday",						"n time",		"weekday"],
"dia":	[		"day",							"n time c",		"day"],
"jam":	[		"hour",							"n time",		"hour"],
"lia":	[		"water",						"n c",			"water"],
"san":	[		"type/way (of)",				"n c",			"type"],
"tia":	[		"side",							"n site c",		"side"],
"mik":	[		"right side",					"n site c",		"right"],
"muk":	[		"left side",					"n site",		"left"],
"pau":	[		"parent",						"n c",			"parent"],
"pai":	[		"offspring",					"n",			"offspring"],
"kio":	[		"sibling",						"n c",			"sibling"],
"dio":	[		"story (described by)",			"n c",			"story"],
"cul":	[		"sky",							"n site c",		"sky"],
"cil":	[		"ground",						"n site",		"ground"],
"lik":	[		"front",						"n site c",		"front"],
"luk":	[		"backside",						"n site",		"backside"],
"nim":	[		"center",						"n site c",		"center"],
"num":	[		"edge",							"n site",		"edge"],
"heia":	[		"room",							"n site c",		"room"],
"gos":	[		"country/state",				"n site c",		"country"],
"biu":	[		"city/town/village",			"n site c",		"settlement"],
"dom":	[		"building/house (of/for)",		"n site c",		"building"],
"kius":	[		"beast",						"n animal c",	"beast"],
"lias":	[		"fish",							"n animal c",	"fish"],
"fuas":	[		"bird",							"n animal c",	"bird"],
"gon":	[		"road",							"n site c",		"road"],
"pul":	[		"adult",						"n c",			"adult"],
"pil":	[		"child",						"n",			"child"],
"kel":	[		"circle/sphere",				"n ph_str c",	"circle"],
"cua":	[		"space",						"n site c",		"space"],
"kam":	[		"word",							"n c",			"word"],
"sou":	[		"whole",						"n c",			"whole"],
"soi":	[		"part (of)",					"n",			"part"],
"den":	[		"electricity",					"n",			"electricity"],
"bag":	[		"bag",							"n c",			"bag"],
"doua":	[		"stone",						"n ph_m c",		"stone"],
"len":	[		"language",						"n c",			"language"],
"ha":	[		"color",						"n c",			"color"],
"lit":	[		"character(of a script)",		"n c",			"character"],
"pap":	[		"paper",						"n",			"paper"],
"fue":	[		"cloth",						"n ph_m c",		"cloth"],
"nis":	[		"insect",						"n animal c",	"insect"],
"nik":	[		"container (for)",				"n c",			"container"],
"fio":	[		"flower",						"n plant c",	"flower"],
"mil":	[		"milk",							"n food&cooking c", "milk"],
"mon":	[		"money",						"n c",			"money"],
"buc":	[		"physical matter",				"n ph_str c",	"physical"],
"bic":	[		"non-physical matter",			"n ph_str", 	"non_physical"],
"mur":	[		"wall",							"n c",			"wall"],
"kim":	[		"cream-like substance",			"n food&cooking ph_str","cream"],
"miau":	[		"cat",							"n animal",		"cat"],
"dog":	[		"dog",							"n animal",		"dog"],
"pig":	[		"pig",							"n animal",		"pig"],
"'papagai":	[	"parrot",						"n animal",		"parrot"],
"pue":	[		
"oblong binding object homogeneous in the cross section",
												"n ph_str c",	"rope_shaped"],
"ton":	[		"stick-shaped object",			"n ph_str c",	"stick_shaped"],
"hea":	[		"hair",							"n body c",		"hair"],
"bac":	[		"head",							"n body c",		"head"],
"gal":	[		"glass",						"n ph_str c",	"glass"],
"han":	[		"blood",						"n body c",		"blood"],
"hol":	[		"hole(opening)",				"n c",			"hole"],
"bie":	[		"vehicle with a cabin (that travels on)",		"n c",	"vehicle_with_cabin"],
"dok":	[		"document (that certifies)",	"n c",			"document"],
"kom":	[		"personal computer",			"n",			"PC"],
"kut":	[		"angle",						"n",			"angle"],
"cok":	[		"chocolate",					"n",			"chocolate"],
"pot":	[		"potato",						"n",			"potato"],
"tom":	[		"tomato",						"n",			"tomato"],
"fom":	[		"form/shape",					"n c",			"shape"],
"dot":	[		"dot/point",					"n",			"dot"],
"met":	[		"meter",						"n",			"meter"],
"pan":	[		"trousers",						"n",			"trousers"],
"mes":	[		"meat",							"n c",			"meat"],
"kol":	[		"alcohol",						"n food&cooking",	"alcohol"],
"ris":	[		"rice",							"n food&cooking",	"rice"],
"tam":  [		"atom",							"n",			"atom"],
"'banan":[		"banana",						"n food&cooking", "banana"],
"pom":  [		"apple",						"n food&cooking", "apple"],
"bua":	[		"board",						"n ph_str c",		"board"],
"tes":	[		"substance",					"n ph_str c",		"substance"],
"les":  [		"rule/law",						"n c",				"rule"] ,
"lan":	[		"plant",						"n c",			"plant"],
"def":	[		"tree",							"n c",			"tree"],

//transitive verbs

"ne":	[		"cause",					"v tr -sent c",		"cause"],
"di":	[		"begin",					"v tr -verb c",		"begin"],
"du":	[		"stop (...ing)",			"v tr -verb",		"stop"],
"go":	[		"go (to)",					"v tr -noun c",		"go"],
"na":	[		
"experience a feeling/emotion (signalazing about)",	
												"v tr -noun feeling c",	"feel"],
"so":	[		"see/notice (...ing)",				"v tr -sent c",		"notice"],
"pa":	[		"be located (in/at)",				"v tr -noun weak c","be_located"],
"kan":	[		"see/look (at)",					"v tr -sent c",		"see/look"],
"lui":	[		"hear/listen",						"v tr -sent c",		"hear/listen"],
"fui":	[		"perceive smell (of)",				"v tr -noun c",		"smell"],
"gin":	[		"eat/drink",						"v tr -noun food&cooking c",	"eat/drink"],
"gun":	[		"defecate/urinate",					"v tr -noun",			"defecate/urinate"],
"fual":	[		"breathe",								"v tr -noun c",	"breathe"],
"joi":	[		"be happy (about)",					"v tr -sent repsubj feeling c", "happy"],
"jou":	[		"be sad (about)",					"v tr -sent repsubj feeling",	"sad"],
"tio":	[		"work (as someone)",				"v tr -verb c",		"work"],
"tua":	[		"try",								"v tr -verb c",		"try"],
"pei":	[		"be prone",							"v tr -verb c",		"prone"],
"peu":	[		"be prone not",						"v tr -verb",		"prone_not"],
"fei":	[		"find easy",						"v tr -verb c",		"find_easy"],
"feu":	[		"find difficult",					"v tr -verb",		"find_difficult"],
"kon":	[		"be in contact (with)",				"v tr -noun c",		"in_contact"],
"sim":	[		"be similar/same (with)",			"v tr -noun weak c",	"similar"],
"sum":	[		"be different (from)",				"v tr -noun weak",		"different"],
"mit":	[		"meet/run into",					"v tr -noun c",		"meet"],
"nom":	[		"be named",							"v tr -noun weak c",	"named"],
"ban":	[		"fight",							"v tr -noun c",		"fight"],
"mo":	[		"be able",							"v tr -verb c",		"able"],
"fi":	[		"enjoy/like (...ing)",				"v tr -sent repsubj feeling c",	"like"],
"fu":	[		"dislike (...ing)",					"v tr -sent repsubj feeling",		"dislike"],
"fa":	[		"do/act (...ing)",					"v tr -verb c",					"do"],
"moi":	[		"want",								"v tr -sent repsubj feeling c",	"want"],
"mou":	[		"diswant",							"v tr -sent repsubj feeling",		"diswant"],
"be":	[		"and as a result",					"other c",				"and_as_a_result"],
"pon":	[		"be important",						"v intr c",			"important"],
"ba":	[		"say ∕ speak",						"v tr -noun c",		"speak"],
"fo":	[		"be convinced (about)",				"v tr -sent c",		"convinced"],
"he":	[		"ask ∕ suggest ∕ order",			"v tr -sent c",		"ask"],
"nei":	[		"control",							"v tr -noun c",		"control"],
"neu":	[		"obey",								"v tr -noun",		"obey"],
"lua":	[		"do voice",							"v tr -noun c",		"do_voice"],
"sel":	[		"succeed (in)",						"v tr -verb c",		"succeed"],
"tal":	[		"deserve",							"v tr -sent repsubj c","deserve"],
"pas":	[		"reside (at)",						"v tr -noun c",		"reside"],
"fam":	[		"do thinking (about)",				"v tr -sent c",		"think"],
"sa":	[		"have knowledge (of)",				"v tr -sent c",		"know"],
"hom":	[		"understand",						"v tr -sent c",		"understand"],
"mem":	[		"remember",							"v tr -sent c",		"remember"],
"tek":	[		"test∕check (...ing)",				"v tr -sent c",		"test"],	
"sek":	[		"cut",								"v tr -noun c",		"cut"],
"diu":	[		"[re]solve",						"v tr -noun c",		"solve"],
"lus":	[		"write",							"v tr -noun c",		"write"],
"lis":	[		"read",								"v tr -noun",		"read"],
"mai":	[		"be allowed",						"v tr -verb c",		"allowed"],
"mau":	[		"be not allowed",					"v tr -verb",		"forbidden"],
"kem":	[		"commit crime (expressed in)",		"v tr -verb c",		"commit_crime"],
"jan":	[		
"be in a state ∕ condition (described by)",			"v tr -verb c",		"in_state"],
"fai":	[		"have fun (...ing)",				"v tr -verb feeling c","have_fun"],
"fau":	[		"be bored (with)",					"v tr -verb feeling",	"bored"],
"ten":	[		"hold",								"v tr -noun c",		"hold"],
"bun":	[		"be in danger (from)",				"v tr -noun c",		"in_danger"],
"bin":	[		"be safe (from)",					"v tr -noun",		"safe"],
"fia":	[		
"be romantically ∕ sexually attracted (to)",		"v tr -noun c",		"in_love"],
"hal":	[		"find funny",						"v tr -noun feeling c","find_funny"],
"naf":	[		"be concentrated (on)",				"v tr -sent repsubj c","concentrated"],
"jo":	[		"have",								"v tr -noun c",		"have"],
"bai":	[		"buy",								"v tr -noun c",		"buy"],
"bau":	[		"sell",								"v tr -noun c",		"sell"],
"due":	[		"surpass",							"v tr c",				"surpass"],
"hun":	[		"respect",							"v tr -noun feeling c",	"respect"],
"hin":	[		"disdain",							"v tr -noun feeling",	"disdain"],
"kie":	[		"use (...ing)",						"v tr -noun c",			"use"],
"nio":	[		"need",								"v tr -sent repsubj c",	"need"],
"tun":	[		"be tense (because of)",			"v tr -sent repsubj c",	"tense"],
"tin":	[		"be relaxed (at)",					"v tr -sent repsubj",	"relaxed"],
"fen":	[		"be angry (at)",					"v tr -sent feeling c",	"angry"],
"kuk":	[		"cook",								"v tr -noun food&cooking c","cook"],
"lek":	[		"choose",							"v tr -sent repsubj c",	"choose"],
"bio":	[		"be",								"v tr c",					"be"],
"sit":	[		"sit (on)",							"v tr -noun c",				"sit"],
"tcoi":	[		"taste",							"v tr -noun food&cooking c","taste"],
"kis":	[		"kiss",								"v tr -noun",				"kiss"],
"dil":	[		"have a deal",						"v tr -sent",				"deal"],
"maie":	[		"do real magic (expressed in)",		"v tr -verb c",			"do_magic"],
//"fai":	[		"find",								"v tr -noun c",		""],
"kas":	[		"get in sexual contact (with)",		"v tr -noun c",			"have_sex"],
"puc":	[		"press/push",						"v tr -noun c",			"push"],
"pic":	[		"pull",								"v tr -noun",			"pull"],
"goi":	[		"be instead (of)",					"v tr c",				"instead"],
"hai":	[		"be in order(organized)",			"v intr c",				"organized"],
"hau":	[		"be in chaos(disorganized)",		"v intr",				"chaotic"],
"sem":	[		"be married (to)",					"v tr -noun",			"married"],
"tok":	[		"flow",								"v c",					"flow"],
"kua":	[		"crawl/climb",						"v tr -noun c",			"crawl"],
"ham":	[		"bite",								"v tr -noun c",			"bite"],
"lif":	[		"playback",							"v tr -noun",			"playback"],
"luf":	[		"record",							"v tr -noun c",			"record"],
"lef":	[		"wait (for)",						"v tr -sent time c",	"wait"],
"hua":	[		"paint/draw",						"v tr -noun c",			"draw"],
"hit":	[		"hit",								"v tr -noun c",			"hit"],	
"do":	[		"PASSIVE",							"v tr -verb c",			"PASSIVE"],
"has":	[		"undo (...ing)",					"v tr -verb c",			"undo"],
"mus":	[		"play (a musical instrument)",		"v c",					"play"],
"nut":	[		"stick out",						"v c",					"stick_out"],
"nit":	[		"deepen",							"v",					"deepen"],




//intransitive verbs and adjectives

"mei":	[		"be alive",								"v intr c",		"live"],
"meu":	[		"be dead",								"v intr",		"dead"],
"bei":	[		"exist",								"v intr c",		"exist"],
"beu":	[		"not exist",							"v intr",		"not_exist"],
"nai":	[		"warm/hot",								"adj c",		"warm/hot"],
"nau":	[		"cold",									"adj",			"cold"],
"pun":	[		"large",								"adj ph_str c",	"big"],
"pin":	[		"small",								"adj ph_str",	"small"],
"lun":	[		"long",									"adj ph_str c",	"long"],
"lin":	[		"short",								"adj ph_str",	"short"],
"cun":	[		"high/tall",							"adj c",		"high"],
"cin":	[		"low",									"adj",			"low"],
"son":	[		"be asleep",							"v intr c",		"sleep"],
"dei":	[		"true",									"adj intr c",	"true"],
"deu":	[		"false",								"adj intr",		"false"],
"li":	[		"good",									"adj c",		"good"],
"lu":	[		"bad",									"adj",			"bad"],
"foi":	[		"fast",									"adj c",		"fast"],
"fou":	[		"slow",									"adj",			"slow"],
"mof":	[		"be in movement",						"v intr c",		"move"],
"faia":	[		"be on fire",							"v intr c",		"on_fire"],
"hie":	[		"be frozen",							"v intr c",		"frozen"],
"dou":	[		"hard(not soft)",						"adj ph_str c",	"hard"],
"doi":	[		"soft",									"adj ph_str",	"soft"],
"pal":	[		"be injured",							"v c",			"injured"],
"kai":	[		"be open",								"v intr c",		"open"],
"kau":	[		"be closed",							"v intr",		"closed"],
"sai":	[		"healthy",								"adj c",		"healthy"],
"sau":	[		"ill",									"adj",			"ill"],
"jus":	[		"extraordinary",						"adj c",		"extraordinary"],
"jis":	[		"ordinary",								"adj",			"ordinary"],
"poi":	[		"clean",								"adj c",		"clean"],
"pou":	[		"dirty",								"adj",			"dirty"],
"lei":	[		"wet",									"adj c",		"wet"],
"leu":	[		"dry",									"adj",			"dry"],
"tai":	[		"vertical",								"adj c",		"vertical"],
"tau":	[		"horizontal",							"adj",			"horizontal"],
"jen":	[		"be full of energy",					"v intr c",		"have_energy"],
"bul":	[		"strong",								"adj c",		"strong"],
"bil":	[		"weak",									"adj",			"weak"],
"bom":	[		"explode",								"v intr",		"explode"],
"lai":	[		"light",								"adj c",		"light"],
"lau":	[		"dark",									"adj",			"dark"],
"hei":	[		"back and forth (...ing)",				"v intr c",		"back_and_forth"],
//"som":	[		"early><late",							"adj c",		""],
//"kon":	[		"particular><general",					"adj c",		""],
"hus":	[	"straight",									"adj ph_str c",		"straight"],
"his":	[	"curved",									"adj ph_str",		"curved"],
"kun":	[	"next",										"adj c",		"next"],
"kin":	[	"previous",									"adj",			"previous"],
"kuf":	[	"late",										"adj c",		"late"],
"kif":	[	"early",									"adj",			"early"],
"nia":	[	"cute",										"adj",			"cute"],
"suit":	[	"sweet",									"adj food&cooking",		"sweet"],
"tcua":	[	"sour",										"adj food&cooking",		"sour"],
"sal":	[	"salty",									"adj food&cooking",		"salty"],
"'tcin":[	"Chinese",									"adj",		"Chinese"],
"pol":	[	"Polish",									"adj",		"Polish"],
"'eng":	[	"English",									"adj",		"English"],
"rus":	[	"Russian",									"adj",		"Russian"],
"dan":	[	"Danish",									"adj",		"Danish"],	
"pers":	[	"Persian",									"adj",		"Persian"],	
"'ame":	[	"related to the people of the US",			"adj",		"USA"],
"turk":	[	"Turkish",									"adj",		"Turkish"],
"'iapon":	[	"Japanese",								"adj",		"Japanese"],
"'asia":	[	"Mongoloid",							"adj",		"Mongoloid"],
"'europ":	[	"European",								"adj",		"European"],




"sil":	[		"slide",				"v intr c",		"slide"],

//prefixes

"pu":	[		"GIANT-",				"prefix c",		"GIANT"],
"pi":	[		"a little",				"prefix",		"LITTLE"],
"no":	[		"not",					"prefix c",		"not"],
"ga":	[		"completely",			"prefix c",		"completely"],
"gaus":	[		"regularly",			"prefix c",		"regularly"],
"gais":	[		"not regularly",		"prefix",		"not_regularly"],
"sol":	[		"only",					"prefix c",		"only"],
"nui":	[		"...,too,",				"prefix c",		"also"],
"dac":	[		"even",					"prefix c",		"even"],
"bis":	[		"(emphasis)",			"prefix c",		"EMPHASIS"],
"dui":	[		"...back",				"prefix c",		"back"],
"pus":	[		"more/extra",			"prefix c",		"more"],
"pis":	[		"less",					"prefix",		"less"],
"hu":	[		"o great respected",	"prefix c",		"o_great"],
"hi":	[		"ew-",					"prefix",		"ew"],
"fe":	[		"(angry/rude)",			"prefix c",		"ANGRY"],

"bui":	[		"would",				"prefix c",		"would"],
"ku":	[		"FUTURE",				"prefix c",		"FUTURE"],
"ki":	[		"PAST",					"prefix",		"PAST"],
"sen":	[		"NOW",					"prefix c",		"NOW"],
"je":	[		"(informal ∕ slang)",	"prefix c",		"INFORMAL"],
"tul":	[		"too much",				"prefix c",		"too_much"],
"til":	[		"too little",			"prefix",		"too_little"],



"ke":	[		"what",					"n c",		"what"],
"ta":	[		"this/that",			"n c",		"that"],
"gau":	[		"all",					"n c",		"all"],
"gai":	[		"none",					"n",		"none"],
"mu":	[		"male (who is)",		"n c",		"male"],
"mi":	[		"female (who is)",		"n c",		"female"],


// prepositions
"pua":	[		"for the sake of",		"prep c",		"for_the_sake"],
"ko":	[		"[along] with",			"prep c",		"with"],
"tu":	[		"towards",				"prep c",		"to"],
"ti":	[		"from",					"prep",			"from"],
"kuc":	[		"after",				"prep c",		"after"],
"kic":	[		"before",				"prep",			"before"],
"pio":	[		"in exchange for",		"prep c",		"in_exchange"],
"niu":	[		"among/between",		"prep c",		"among"],
"jil":	[		"alongside",			"prep c",		"alongside"],
"jul":	[		"against",				"prep",			"against"],

//numbers
"nol":	[		"0",					"other number c",		"zero"],
"ja":	[		"1",					"other number c",		"one"],
"dua":	[		"2",					"other number c",		"two"],
"tui":	[		"3",					"other number c",		"three"],
"fos":	[		"4",					"other number c",		"four"],
"pet":	[		"5",					"other number c",		"five"],
"lok":	[		"6",					"other number c",		"six"],
"set":	[		"7",					"other number c",		"seven"],
"hap":	[		"8",					"other number c",		"eight"],
"nef":	[		"9",					"other number c",		"nine"],
//others
"din":	[		"and",					"other c",		"and"],
"dun":	[		"or",					"other",		"or"],
"kei":	[		"although",				"other c",		"although"],
"keu":	[		"but",					"other",		"but"],
"hoi":	[		"because (of)",			"other c",		"because"],
"hou":	[		"therefore",			"other",		"therefore"],
"sei":	[		"if",					"other c",		"if"],
"seu":	[		"then",					"other",		"then"],
"ca":	[		"[QUESTION CLAUSE]",	"other c",		"QUESTION"],
"gi":	[		"[SUBJECT]:",			"other c",		"SUBJECT"],
"gu":	[		"[OBJECT]:",			"other",		"OBJECT"],
"ho":	[		"[MAIN VERB]:",			"other c",		"MAIN_VERB"],
"po":	[		"[ADVERB]:",			"other c",		"ADVERB"],
"ce":	[		"[ADJECTIVE]:",			"other c",		"ADJECTIVE"],
"de":	[		"of",					"other c",		"of"],
"ge":	[		"quantity ∕ extent",	"n c",			"quantity"],
"pe":	[		"[CLAUSE]:",			"other c",		"CLAUSE"],
"jin":	[		"be near (...ing)",		"v tr weak c",	"near"],
"jun":	[		"be far (from)",		"v tr weak",	"far"]
};

const irregular_verbs = {
"be":		["was",		"been"],
"do":		["did",		"done"],
"say":		["said",		"said"],
"make":		["made",		"made"],
"go":		["went",		"gone"],
"take":		["took",		"taken"],
"come":		["came",		"come"],
"see":		["saw",		"seen"],
"know":		["knew",		"known"],
"get":		["got",		"got"],
"give":		["gave",		"given"],
"find":		["found",	"found"],
"think":	["thought",	"thought"],
"tell":		["told",		"told"],
"become":	["became",	"become"],
"show":		["showed",	"shown"],
"leave":	["left",		"left"],
"feel":		["felt",		"felt"],
"put":		["put",		"put"],
"bring":	["brought",	"brought"],
"begin":	["began",	"begun"],
"keep":		["kept",		"kept"],
"eat":		["ate",		"eaten"],
"hold":		["held",		"held"],
"write":	["wrote",	"written"],
"stand":	["stood",	"stood"],
"hear":		["heard",	"heard"],
"let":		["let",		"let"],
"mean":		["meant",	"meant"],
"set":		["set",		"set"],
"meet":		["met",		"met"],
"run":		["ran",		"run"],
"pay":		["paid",		"paid"],
"sit":		["sat",		"sat"],
"speak":	["spoke",	"spoken"],
"lie":		["lay",		"lain"],
"lead":		["led",		"led"],
"read":		["read",		"read"],
"grow":		["grew",		"grown"],
"lose":		["lost",		"lost"],
"fall":		["fell",		"fallen"],
"send":		["sent",		"sent"],
"build":	["built",	"built"],
"understand":["understood","understood"],
"draw":		["drew",		"drawn"],
"break":	["broke",	"broken"],
"spend":	["spent",	"spent"],
"cut":		["cut",		"cut"],
"rise":		["rose",		"risen"],
"drive":	["drove",	"driven"],
"buy":		["bought",	"bought"],
"wear":		["wore",		"worn"],
"choose":	["chose",	"chosen"],
"throw":	["threw",	"thrown"]
};

let anti_GGG = {};
for (let w in GGG) {
	let t = GGG[w];
	if (t) anti_GGG[t[2]] = w;
}

function make_neutral_elem(e, G) {
	let r = G[e];
	return r ? r[2] : '綱' + e;
}

function make_neutral(t, version) {
	let G = (version == 5) ? GGG5 : GGG;
	return t.split('-').join('髭').replace(/['A-z]+/g, function(w) {
		let d = disassemble(w);
		if ( d.error ) return '綱'+w;
		if (w[0] != "'" && d[0][0] == "'") d[0] = d[0].slice(1);
		return d.map(x => make_neutral_elem(x, G) ).join('-');
	});
}

function unmake_neutral(t, version) {
	let anti_G = (version == 5) ? anti_GGG5 : anti_GGG;
	return t.replace(/綱?['/A-z]+/g, w => w[0] == '綱' ? w.slice(1) : anti_G[w] || w ).split('-').join('').split('髭').join('-');
}


const is_a_final = (c) => "aiueoy".includes(c);
const is_an_initial = (c) => "ptkbdglmnhfsrjzvc".includes(c);
const is_a_valid_letter = (c) => is_a_final(c) || is_an_initial(c) || c == OPP;

const disassemble = (w) => {
	for (let e of w)
		if (!is_a_valid_letter(e) && !" -?!',.–0123456789".includes(e) )
			return {error: get_label('error')+get_label('Nao alphabet does not have letter')+' "'+e+'"'};

	let res = [];

	let pr = replace_all_numbers_to_words(w).replace(/\./g,'dot').replace(/'/g," '").trim().split(/\s+/);
	let elementary_word_pattern = new RegExp("(([ptkbdglmnhfsrjzvc])[aiueo]+)",'g');

	for (let e of pr) {
		if (is_an_initial(e[0]) && is_a_final(e[1]) || e.startsWith('tc'))
			res = res.concat(e.replace(elementary_word_pattern," $1").trim().split(/\s+/));
		else res.push(e.startsWith("'") || e.length==1 ? e : "'"+e);
	}

	return res;
};

const pronounce = (d) =>
	responsiveVoice.speak(to_Polish_writing(d), "Polish Female", {rate: 0.7, pitch: 1.1} );

const pronounce_d = (d) =>
	pronounce(d.replaceAll('%',"'").replaceAll('-',"+'").split('+'));

const to_Polish_writing = (d) => {
	let w='  ';

	for (let e of d) {
		e = e.split('tc').join('ć').split('ts').join('ц').split('dz').join('з');
		if (e.startsWith("'")  ) {
			let new_di = "";
			let k=1;
			while(!is_a_vowel(e[k]) && k < e.length ) { new_di += e[k]; k++; } 
			for (; k < e.length; k++) {
				if ( is_a_vowel(e[k+1]) && "pbtdkgfvszjhlmnrwcćцз".includes(e[k]) ) new_di += ' ';
				new_di += e[k];
			}
			w=w.concat(new_di+' ');
		}
		else
			w=w.concat(e+' ');
	}
	w += ' ';

	let g = "v_w_ee_e_oo_o_jy_dży_ nia _ niaaa _ sa _ saa _ zi _ zee _'_ _ong_ą_eng_ę_ng_n_ si _ see _g _gg _b _bb _d _dd _ji_dzi_j _dź _j_dzi_ci_śi_c_sz_h _ch _aui_ałi_ia_ja_hja_chja_ai_aj_ei_ej_oi_oj_ui_uj_yi_yj_au_ał_uo_ło_ua_ła_ae_aae_ie_je_dzj_dzi_nje_niie_ue_łe_ou_oł_oe_o'e_eu_eł_naj_naaj_dzi ye_dzie_kis_kiss_indd_indy_sea_sse'ea_hea_he'aa_tio_ttio_gun_goon_bun_boon_kon_konn_turk_tłurk_pio_pjo_fałs_faus_ ia_ ja_ ie_ ie_ io_ jo_ iu_ ju_gin_ginn_з_ц_цja_cja_цje_cje_цiu_cju_цio_cjo_цo _co _ц_tz_ćj_ćij_ćł_ću_szć_ść";

	g = g.split('_');

	for (let i=0; i < g.length/2; i++) {
		w = w.replaceAll(g[i*2], g[i*2+1] );
	}
	
	return w.trim();
};

const is_a_vowel = (c) => "aiueoy".includes(c);

const is_a_consonant = (c) => "pbtdkgfvszjhlmnrwc".includes(c);

const includes_a_vowel = (w) => {
	for (let e of w)
		if (is_a_vowel(e)) return true;
	return false;
};

const preprocess = (foo, w) => {
	let f = get_first_word(w);
	let r = w.slice(f.length);

	let k = f.split("/");
	f = foo(k[0]);

	for (let i=1; i<k.length; i++) {
		f += "/" + foo(k[i]);
	}

	return f+r;
};


const add_ing = (w) => add_ing_or_ed(w, "ing");
const add_ed = (w) => add_ing_or_ed(w, "ed");

const add_ing_or_ed = (w, ing_or_ed) => {
	let f = get_first_word(w);
	let r = w.slice(f.length);

	if (
	       f.length == 2 
	   	|| f.endsWith('w')
	   	|| ( f.endsWith('y') || f.endsWith('ee') )
			 &&
			ing_or_ed == "ing"
		) {
		//do nothing
	}
	else if (f.endsWith('y') && is_a_consonant( f[f.length - 2] )) {
		f = f.slice(0,-1) + 'i';
	}
	else if (f.endsWith('ie') && ing_or_ed == "ing") {
		f = f.slice(0,-2) + 'y';
	}
	else if (f.endsWith('e')) {
		f = f.slice(0,-1);
	}
	else {
		let last_three_characters = f.slice(-3);

		if (
		is_a_consonant(last_three_characters[0]) &&
		    is_a_vowel(last_three_characters[1]) &&
		is_a_consonant(last_three_characters[2]) 
		) {
			if (   !includes_a_vowel(f.slice(0,-3))    ) 
				f += last_three_characters[2];
			else if ( ["begin","refer","control"].includes(f) ) {
				f += last_three_characters[2];
			}
		}


	}

	w = f + ing_or_ed + r;
	return w;
};

const add_s = (w) => {
	let f = get_first_word(w);
	let r = w.slice(f.length);

	if (f == "be") f = 'i';
	else if (f == "have") f = 'ha';
	else if (f.endsWith("o")) f += "e";
	//else if (f.endsWith('y')) f = f.substr(0,f.length-1) + 'ie';

	w = f + 's' + r;
	return w;
};

const get_V3 = (w) => {
	let f = get_first_word(w);
	let r = w.slice(f.length);

	let n = irregular_verbs[f];

	return n ? n[1] + r : add_ed(f) + r  ;
};

const get_V2 = (w) => {
	let f = get_first_word(w);
	let r = w.slice(f.length);

	let n = irregular_verbs[f];

	return n ? n[0] + r : add_ed(f) + r ;
};

const get_passive = (w) => "be " + preprocess(get_V3,w);
const get_continuous = (w) => "be " + preprocess(add_ing,w);

const get_first_word = (str) =>
	str.indexOf(' ') === -1 ? str : str.substr(0, str.indexOf(' '));

const is_a_consonant_rus = (c) => 'вбгджзйклмнпрстфхцчшщ'.includes(c);

const create_short_forms = (w) => {
	let stem = w.slice(0,-2);
	let r = [];
	if (stem.endsWith('нн') ) stem = stem.slice(0,-1);
	if (is_a_consonant_rus(stem[stem.length-1]) && is_a_consonant_rus(stem[stem.length-2])  ) r.push(stem.slice(0,-1)+'е'+stem.slice(-1));
	r.push(stem);
	return r;
};

const create_equivalents_rus = (w) => {
	let r = [w.replaceAll('ё','е')];

	if (w.startsWith('быть ')) {
		let f = get_first_word(w.slice(5));
		
		if (f.endsWith('ым') || f.endsWith('им')) {
			let rest = w.slice(5).slice(f.length);
			let stem = f.slice(0,-2);
	
			r = [f.slice(0,-1)+'й'+rest, f.slice(0,-2)+'ой'+rest];
			r = r.concat(create_short_forms(f).map(e => e+rest) );
			
			r.push(w);
		}
	}
	else if (['ый','ий','ой'].includes( w.slice(-2) ) ) {
		r = r.concat(create_short_forms(w) );
	}
	else if (is_a_consonant_rus(w.slice(-1) )  ) {
		let y = w;
		if (w.endsWith('ен') || w.endsWith('ан') ) y+= 'н';

		r = r.concat([y+'ий',y+'ый',y+'ой']);
		if ( 'ео'.includes(w[w.length-2])  ) {
			w = w.slice(0,-2)+w.slice(-1);
			r = r.concat([w+'ий',w+'ый',w+'ой']);
		}
	}

	return r;
};

const create_equivalents_eng = (w) => {
	let r = [w];
	if (w.startsWith('be ')  ) r.push(w.slice(3));
	else r.push('be '+w);
	return r;
};

const create_equivalents_jap = (w) => {
	let r = [w];
	
	return r;
}

//console.log(create_equivalents_jap('<未来>') );

const create_equivalents_lang = (w, lang) => {
	if (lang == 'eng') return create_equivalents_eng(w);
	if (lang == 'rus') return create_equivalents_rus(w);
	if (lang == 'jap') return create_equivalents_jap(w);
	return [w];
};

String.prototype.create_equivalents = function() {
	w = this.slice(0);
	return create_equivalents_lang(w, cur_lang());
};

const tr_lang_to_Nao = (w, lang) => {
	let eq = create_equivalents_lang(w,lang);
	let orig_lang = cur_lang();
	set_cur_dic(lang);

	let res = [];
	for (let e of eq) {
		res = res.concat(tr_to_Nao_specific(e));
	}
	set_cur_dic(orig_lang);
	return res;
};

const tr_to_Nao = (w) => {
	if (w.match(/^([\d]+)?(\.\d+)?$/) && w.length > 1 ) {
		let num = translate_number(w);
		if (num) return [num.print_in_Nao_words()];
	}
	res = tr_lang_to_Nao(w, cur_lang() );

	if (res.length == 0) {
		let other_lang = lang_arr.filter( e => e != cur_lang() );
		
		for (let lang of other_lang) {
			res = tr_lang_to_Nao(w, lang );
			if (res.length > 0) return res;
		}
	}

	return res;
};

function Nao_word(w) {
	this.nao = w[0];
	this.translation = w[1];
	this.tags = w[2];
	this.u = " "+this.tags+" ";

	this.is = (s) => {
		let k = s.split(" ");

		for (let e of k)
			if (!this.u.includes(" "+e+" ")) return false;
		return true;
	};

	this.type = w[2].split(" ")[0];
	this.is_tr = this.u.includes(" tr ");
	this.is_intr = this.u.includes(" intr ");
	this.is_noun = this.u.includes(" n ");
	this.is_verb = this.u.includes(" v ");
	this.is_adj = this.u.includes(" adj ");
	this.is_prefix = this.u.includes(" prefix ");
	this.is_prep = this.u.includes(" prep ");
	this.is_other = this.u.includes(" other ");
}

const translate_elem = (w)  => {
	let n = GGG[w];

	if (!n) return get_label('*error: word not found');

	n = [w].concat(n);

	let res = new Nao_word(n);

	return res;
};

const translate_elem_smart = (el) => {
	let t = translate_elem(el);
		
	let y='';
	let f = tr_from_Nao(el);
	const n_err = el[0] == "'" ? "---" : get_label('*error: word not found');
	const err = get_label('*error: word not found');

	if (cur_lang() == 'eng') {
		if (t != err) y=t.translation;
		else y = (f === null) ? n_err : '*'+f.main_tr;
	}
	else {
		if (t == err) y='*';
		if (f === null) {
			y = (t == err) ? n_err: t.translation;
		}
		else y += f.main_tr;
	}

	return y;
};


const get_body = (w) =>
	w.endsWith(")") && w.includes(" (") ? w.split(" (")[0] : w;

const get_prep = (w) => {
	if ( w.endsWith(")") && w.includes(" (") )
		return w.split(" (")[1].slice(0,-1);
	else return "";
};

const is_a_marker = (w) => {
	return ['hu','hi','le','ba','bac','gu','de','pe','tci','sei','seic','hoi','hoic','keo','keoc',"'?","'!","'.","'–"].includes(w);
};

const generate_definition_from_disassemble = (d) => {
	if (d == "incorrect word") return w + " : " + d;

	let res = [];
	let cur = [];

	for (let e of d) {
		if (is_a_marker(e)) {
			res = res.concat(generate_definition_word(cur));
			cur = [];
		}
		cur.push(e);
	}
	res = res.concat(generate_definition_word(cur));
	return res;
};

const generate_definition = (w) =>
	generate_definition_from_disassemble(disassemble(w));

const generate_definition_word = (d) => {
	let head = null;
	let cur, cur_prep, cur_body, head_prep, head_body, possible_prefix = [];
	let passive_flag, continuous_flag;
	let res = [], trel = [];
	
	for (let e of d)
		trel.push(translate_elem(e));

	for (let i=0; i < d.length; i++) {
		let body_to_add = "", prep_to_add = "";

		cur = trel[i];
		
		if ( cur.nao == "be") {
			res.push(", and as a result,");
			
			if (i-2 < 0) head = null;
			else {
				head = trel[i-2];
				
				head_body = get_body(head.translation);
				head_prep = get_prep(head.translation);
			}
			continue;
		}
		if (cur.nao == "do") {
			passive_flag = true;
			continue;
		}
		if (cur.nao == "ni" && i+1<d.length) {
			let k=i+1;
			while(/* k < d.length) if ( */trel[k].is_prefix) k++;
			if (k < d.length);
				if (trel[k].is_verb) {
				continuous_flag = true;
				continue;
			}
		}
		if (cur.is_prefix) {
			possible_prefix.push(cur.translation);
			continue;
		}
		if (cur.is_other) { res.push(cur.translation); continue; }

		if (cur.is_prep) {
			head = cur;
			/*if (cur.translation == "with" && trel[i+1].type.startsWith("verb"))
				head_prep = "and";
			else*/
				head_prep = cur.translation;
			if (i == d.length - 1) res.push(cur.translation);
			continue;
		}
		
		cur_body = get_body(cur.translation);
		cur_prep = get_prep(cur.translation);

		if (passive_flag) {
			if (cur_body.startsWith('be ')) cur_body = "PASSIVE "+cur_body;
			else cur_body = get_passive(cur_body);
		}

		if (continuous_flag)
			cur_body = get_continuous(cur_body);

		if (head !== null)
			if (["gaus","su","gau"].includes(head.nao))
				cur_body = preprocess(add_s,cur_body);

		
		if (head === null) {
			body_to_add = cur_body;
			let zz = document.getElementById("specify_the_part_of_speech");
			if (zz !== null)
				if (zz.checked)
					res.push("(" + cur.type + ")");
		}
		else if (head.nao == "to" && cur.is_verb  ) {
			if (cur.is_verb && cur.is_tr && !passive_flag) {
				prep_to_add = ": what one";
				body_to_add = preprocess(add_s,cur_body);
			}
			else {
				prep_to_add = ": (any)thing that";
				body_to_add = preprocess(add_s,cur_body);
			}
		}
		/*else if (head.nao == "du") {
			if (cur.type == "verb intransitive") body_to_add = "something " + cur.translation.split(" ").slice(1);

		}*/
		//interesting part

		else if (head_prep !== '' && (!cur.is_adj || head.nao == 'ti')) {
			if (head_prep != "...ing") prep_to_add = head_prep;
			if (cur.is_adj) cur_body = 'be ' + cur_body;
			body_to_add = (cur.is_noun) ? cur_body : preprocess(add_ing, cur_body);
		}
		else if (head.is_noun) {
			if (cur.is_noun) {
				prep_to_add = "of";
				body_to_add = cur_body;
			}
			else if (cur.is_verb || cur.is_adj) {
				prep_to_add = ["person","male","female","persons","males","females"].includes(head_body) ? "who" : "that";
				if (cur.is_adj) cur_body = "be "+cur_body;
				body_to_add = head_body.endsWith('s') ? cur_body : preprocess(add_s, cur_body);
			}
		}
		else if ( (head.is("intr") || head.is_adj) && cur.is_noun ) {
			body_to_add = cur_body;
		}
		else if (head.is_adj) {
			prep_to_add = "described by";
			body_to_add = cur_body;
		}
		else if (head.is("tr")) {
			if (cur.is_noun) {
				body_to_add = cur_body;
			}
			else if (head.is("-noun") || cur.is_adj) {
				body_to_add = cur.is_adj ? 'in a ' + cur_body + ' way' : preprocess(add_ing, cur_body);
			}
			else if (head.is("-sent") || head.is("-verb") || head.is("repsubj")) {
				prep_to_add = "to";
				body_to_add = (cur.is_adj ? "be " : '') + cur_body;
			}
		}
		else if (head.is_verb || head.is_adj) {
			prep_to_add = 'in a';
			body_to_add = (cur.is_verb ? '"'+preprocess(add_ing, cur_body)+'"' : cur_body )+ ' way';
		}
		

		if (prep_to_add !== '' && trel[i-1].nao != "bi") res.push(prep_to_add);
		
		if (  cur_body.startsWith("be ")  ) {
			res.push(body_to_add.split(" ")[0]);
			body_to_add = body_to_add.slice(body_to_add.search(" ")+1);
		}

		for (let j=0; j < possible_prefix.length; j++) 
			if (!possible_prefix[j].startsWith("...")) res = res.concat(possible_prefix[j]);

		let yy = document.getElementById("print_a_the");
		if (yy !== null)
			if (cur.is_noun && yy.checked)
				res.push("[a/the]");

		res = res.concat(body_to_add);

		if (i == d.length-1 && cur_prep != "...ing") {
			if (passive_flag) res.push(cur_prep);
			if (head !== null)
				if (head.nao == "to") res.push(cur_prep);
		} 

		for (let j=0; j < possible_prefix.length; j++)
			if (possible_prefix[j].startsWith("...")) res = res.concat(possible_prefix[j].slice(3)    );

		head = cur;
		head_body = cur_body;
		head_prep = cur_prep;
		possible_prefix = [];
		passive_flag = false;
		continuous_flag = false;
	}
	return res;
};


const elem_frequency_table = () => {
	let res = "";
	let tb = {};
	tb[OPP] = [];

	for (let cw in dictionaries[0].from_Nao) {
		let d = disassemble(cw);
		if (d.error ) continue;

		for (let k=0; k<d.length; k++) {
			if (d[k].endsWith(OPP)) {
				tb[OPP].push(cw);
				d[k] = d[k].slice(0,-1);
			} 
			try {
				tb[ d[k] ].push(cw);
			}
			catch(err) {
				tb[ d[k] ] = [];
				tb[ d[k] ].push(cw);
			}
		}
	}

	let new_tb=[];

	for (let x in tb) new_tb.push( [x,tb[x]] );

	new_tb.sort(  (b,a) => comp(a[1].length,b[1].length) );


	tb = [];
	for (let i=0; i < new_tb.length; i++) tb.push(new_tb[i]);

	return tb;
};

function translate_sentence(s) {
	let words = [];
	s.replace(/['-.\w\s]+/g, function(w){
		words.push(w.trim() );
	});
	
	let res = [];
	words.forEach( function(w){
		res = res.concat(smart_translate2(disassemble_with_preserved_spaces(w)));
	});
	
	return res;
}

function smart_translate(d) {
	if (!d || !Array.isArray(d) ) return [];
	if (d.length == 0) return [];
	let dj = d.join('');
	let t = tr_from_Nao(dj);
	if (t) return [t];

	for (let len = d.length - 1; len > 0; len--) {
		for (let start = d.length - len; start >= 0; start--) {
			let f = tr_from_Nao(d.slice(start, start+len).join(''));
			if (f) {
				let head = smart_translate(d.slice(0,start));
				let tail = smart_translate(d.slice(start+len,d.length));
				return head.concat(f).concat(tail);
			}
		}
	}

	return d.map( function(x){ return {nao: x, main_tr: `[${x}]`, other_tr: undefined}});
	//return {nao: dj, main_tr: `[${x}]`, other_tr: undefined};
}

function disassemble_with_preserved_spaces(w) {
	let res = [];
	let pp = w.split(' ').map(x => disassemble(x));

	for (let p of pp) {
		for (let i=0; i<p.length; i++) {
			let adding = p[i];
			if (i == 0) adding = ' ' + adding;
			if (i == p.length - 1) adding = adding + ' ';
			res.push(adding);
		}
	}
	return res;
}

function smart_translate2(d) {
	if (!d || !Array.isArray(d) ) return [];
	if (d.length == 0) return [];
	let d_ns = d.map(x=>x.trim());

	for (let len = d.length; len >= 2; len--) {
		for (let start = d.length - len; start >= 0; start--) {
			let subw = d_ns.slice(start, start+len);
			let f;
			if ( is_an_hsl_color(subw) ) f = {nao: subw.join('')};
			else f = tr_from_Nao(subw.join(''));

			if (f) {
				let head = smart_translate2(d.slice(0,start));
				let tail = smart_translate2(d.slice(start+len,d.length));
				return head.concat(f.nao).concat(tail);
			}
		}
	}

	return d.join('').trim().split(/\s+/);
}

class AwesomeNumber{
	constructor(head, power) {
		if (power === undefined) {
			let h = head.toString();

			if (h.includes('e') ) {
				this.head = h.split('e')[0].replace(/\./,'');
				this.power = h.split('e')[1].replace(/\+/,'');
			}
			else {
				this.head = h.replace(/\./,'').replace(/^0*([1-9\.]+)0*$/, "$1");
				this.power = Math.floor(Math.log10(head)).toString();
			}
		}
		else {
			this.head = head.toString();
			this.power = power.toString();
		}
	}

	multiply(n) {
		return new AwesomeNumber( (this.head * n.head).toString(), (parseInt(this.power) + parseInt(n.power)).toString()  );
	}

	print() {
		let res = '';
		let h = this.head;
		let p = parseInt(this.power)
		if (p < 0) {
			res = '0.';
			for (let i=-1; i > p; i--) res+='0';
			return res+=h;
		}
		else if (h.length <= p+1) {
			res += h;
			let zeroes = p + 1 - h.length;
			for (let i=0; i < zeroes; i++) res+='0';
			return res;
		}
		else return h.slice(0,p+1) + '.' + h.slice(p+1);
	}

	print_in_Nao_digits() {
		if (1 + parseInt(this.power) == this.head.length) return this.head;
		let prefix = (this.power[0] == '-' ? 'pi' : 'pu');
		let hh = this.head;
		if (hh.length > 1) hh = hh[0] + '.' + hh.slice(1);
		return (hh == '1' ? '' : hh + ' ') + prefix + this.power.replace(/\-/,'');
	}

	print_in_Nao_words() {
		let exp_form = replace_all_numbers_to_words(this.print_in_Nao_digits()).replace(/\./,'dot');
		let dot_form = replace_all_numbers_to_words(this.print()).replace(/\./,'dot');
		return exp_form.length < dot_form.length+2 ? exp_form : dot_form;
	}
}

function translate_number(t) {
	let d = Array.isArray(t) ? t : disassemble(t);
	let res = '';
	for (let w of d) {
		let u = replace_word_to_digit(w);
		if (u.match(/pu|pi/)) res+=' ';
		else if (!u.match(/^[\d\.]+$/)) return null;
		res += u;
	}

	if (d[d.length-1].match(/pu|pi|dot/) ) return null;
	
	let multipliers = res.trim().split(' ');
	let num = new AwesomeNumber(1);

	for (let m of multipliers) {
		let search = m.match(/(pi|pu)?([\d\.]+)/);
		let prefix = search[1];

		if (prefix) {
			let k = prefix == 'pu' ? 1 : -1;
			num.power = (parseInt(num.power)+k*parseInt(search[2])).toString();
		}
		else {
			let mm = new AwesomeNumber(search[2]);
			num = num.multiply(mm);
		}
	}
	return num;
}

let kdu = {};
for (let i=0; i<10; i++) kdu[replace_all_numbers_to_words(i.toString())] = i.toString();

function replace_word_to_digit(w) {
	if (w == 'dot') return '.';
	let res = kdu[w];
	if (res && res.match(/\d/) ) return res;
	return w;
}