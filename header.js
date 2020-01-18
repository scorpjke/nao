

let dicnum;
const lang_arr = ['eng','jap','rus'];
const set_cur_dic = (lang_name) => dicnum = lang_arr.findIndex(e => e == lang_name);
const cur_lang = () => lang_arr[dicnum];

const set_cookies_select_lang = (lang) => {
	Cookies.set('select_lang',lang,{expires: 9999});
	set_cur_dic(lang);
}

if (Cookies.get('select_lang') === undefined) {
	let browser_lang = window.navigator.userLanguage || window.navigator.language;
	let decided_language = 'eng';
	if (browser_lang.includes('ja')) decided_language = 'jap';
	else if (browser_lang.includes('ru')) decided_language = 'rus';

	set_cookies_select_lang(decided_language);
}
else {
	set_cur_dic(Cookies.get('select_lang'));
}

const labels =
[[
    'Nao dictionary',
    'Nao dictionary',
	'ナオ語辞典',
	'Словарь Nao'
],[
    'Settings',
    'Settings',
	'設定',
	'Настройки'
],[
    '(click to open up)',
    '(click to open up)',
	'(閲覧するためにはクリックしてください)',
	'Кликните, чтобы раскрыть'
],[
    'Language of the website',
    'Language of the website',
	'サイトの言語',
	'Язык сайта'
],[
    'Print "a/the" before nouns in the definition',
    'Print "a/the" before nouns in the definition',
	'定義に名詞の前に a/the を入れる',
	'Печатать a/the перед определением'
],[
    'Specify the part of speech',
    'Specify the part of speech',
	'品詞を特定',
	'Указывать часть речи'
],[
    'see the full list of words here',
    'see the full list of words here',
	'全部の単語のリストはこちら',
	'посмотреть полный список слов здесь'
],[
	'Project FAQ',
	'Project FAQ',
	'よくある<br>質問',
	'Часто задаваемые<br>вопросы'
],[
	'Dictionary',
	'Dictionary',
	'辞典',
	'Словарь'
],[
	'Full set of rules',
	'Full<br>set of rules',
	'ルールの<br>リスト',
	'Полный список<br>правил'
],[
	'Game',
	'Game',
	'ゲーム',
	'Игра'
],[
	'Forum',
	'Forum',
	'コミュニティ',
	'Форум'
],[
	'Textbook',
	'Textbook',
	'教科書',
	'Учебник'
],[
	'Go!',
	'Go!',
	'よし',
	'Поиск'
],[
	'Esc',
	'Esc',
	'消',
	'Стереть'
],[
	'Verbs',
	'Verbs',
	'動詞',
	'Глаголы'
],[
	'Nouns',
	'Nouns',
	'名詞',
	'Существительные'
],[
	'Adjectives',
	'Adjectives',
	'形容詞',
	'Прилагательные'
],[
	'Prepositions',
	'Prepositions',
	'前置詞',
	'Предлоги'
],[
	'Prefixes',
	'Prefixes',
	'接頭辞',
	'Префиксы'
],[
	'Others',
	'Others',
	'そのほか',
	'Другое'
],[
    'Enter Nao or English word:',
    'Enter Nao or English word:',
	'ナオ語・日本語・英語を<br>検索してください',
	'Введите слово на Nao, русском или английском:'
],[
	'Max length',
	'Max length',
	'単語の長さ',
	'Максимальная длина'
],[
	'Difficulty',
	'Difficulty',
	'レベル',
	'Уровень сложности'
],[
	'Voice only',
	'Voice only',
	'音声のみ',
	'Только произношение'
],[
	'With translated pieces',
	'With translated pieces',
	'要素の翻訳つき',
	'С переводом элементов'
],[
	'With spaces',
	'With spaces',
	'スペースつき',
	'С пробелами'
],[
	'Normal',
	'Normal',
	'普通',
	'Нормальный'
],[
	'Always pronounce words',
	'Always pronounce words',
	'毎回音声をつける',
	'Всегда произносить слова'
],[
	'Fast mode',
	'Fast mode',
	'ファストモード',
	'Быстрый режим'
],[
	'click to see hint',
	'click to see hint',
	'ヒント',
	'подсказка'
],[
	'English dictionary: not found',
	'English dictionary: not found',
	'日本語の辞書：見つかりませんでした',
	'Словарь русского: слово не найдено'
],[
	'error',
	'error: ',
	'error: ',
	'error: '
],[
	'Nao alphabet does not have letter',
	'Nao alphabet does not have letter ',
	'ナオのアルファベットに入ってない文字：',
	'В алфавите Nao нет буквы '
],[
	'*error: word not found',
	'*error: word not found',
	'*error: 見つかりませんでした',
	'*error: слово не найдено'
],[
	'Main translation:',
	'Main translation: ',
	'主な翻訳：',
	'Главный перевод: '
],[
	'Other possible translations:',
	'Other possible translations: ',
	'そのほかの翻訳：',
	'Другие возможные переводы: '
],[
	'Automatically generated definition:',
	'Automatically generated definition (beta): ',
	'自動作成の定義：',
	'Автоматически сгенерированное определение: '
],[
	'We have found',
	'We have found ',
	'その意味から、',
	'Мы нашли ',
],[
	'possible translations depending on what you mean:',
	' possible translations depending on what you mean:',
	'件の翻訳が見つかりました',
	' возможных перевода, в зависимости от того, что вы имеете в виду:'
],[
	'We have split your query into',
	'We have split your query into ',
	'その文を',
	'Мы разбили ваш запрос на '
],[
	'words',
	' words',
	'の単語に分裂しました',
	' слов(а)'
],[
	'press Enter to continue',
	'(press Enter or click to continue)',
	'（Enterを押して、またはクリックして下さい）',
	'(чтобы продолжить, нажмите Enter или кликните)'
],[
	'Score',
	'Score',
	'スコア',
	'Счёт'
],[
	'',
	'',
	''
],[
	'',
	'',
	''
],[
	'',
	'',
	''
],[
	'',
	'',
	''
],[
	'',
	'',
	''
]];

const get_label = (w) => {
	let r = labels.filter( e => e[0] == w );
	return (r.length == 0) ? w : (r[0][dicnum+1] === undefined) ? w : r[0][dicnum+1];
}

let hash_settings;

const onHashChange_header = () => {
	hash_settings = decodeURIComponent(window.location.hash).replace("#", "").split('&');
	hash_settings[0] = {parameter: 'word-to-search', value: hash_settings[0]};

	for (let i=1; i < hash_settings.length; i++) {
		let a = hash_settings[i].split('=');
		hash_settings[i] = {parameter: a[0], value: a[1]};
		
		if (a[0] == 'lang' && lang_arr.includes(a[1]) ) set_cur_dic(a[1]);
	}
}
onHashChange_header();

//$(window).on('hashchange', onHashChange_header);

const from_settings_to_hash = () => {
	let h = hash_settings[0].value;
	for (let i=1; i < hash_settings.length; i++)
		h += '&'+hash_settings[i].parameter+'='+hash_settings[i].value;

	window.location.hash = h;
};

const set_hash = (p, v) => {
	for (let e of hash_settings) {
		if (e.parameter == p) {
			e.value = v;
			from_settings_to_hash();
			return;
		}
	}
	hash_settings.push({parameter: p, value: v});
	from_settings_to_hash();
}

const get_hash = (p) => {
	for (let e of hash_settings) {
		if (e.parameter == p) return e.value;
	}
	return null;
}

const erase_hash = (p) => {
	hash_settings = hash_settings.filter(e => e.parameter != p);
	from_settings_to_hash();
}

document.addEventListener("DOMContentLoaded", function(event) { 
	document.getElementById("header").innerHTML = `
	<div class="list_header" id="my_header">
		<div><a href="faq.html">${get_label('Project FAQ')}</a></div>
		<div><a href="index.html">${get_label('Dictionary')}</a></div>
		<div><a href="full-set-of-rules.html">${get_label('Full set of rules')}</a></div>
		<div><a href="game.html">${get_label('Game')}</a></div>
		<div><a href="preface.html">${get_label('Textbook')}</a></div>
	</div>
	`;
});

const replace_all_numbers_to_words = t => t.replace(/\d/g, tr_to_Nao);