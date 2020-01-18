const get_comdic = () => `
ma	place		場所		место (для)	
da	person	human, man, people	人		человек	
cu	top	up	上		верх	
pacu	be_located_on...	on	上にいる		наверху	на, вверху, сверху
						
ci	bottom	down	下		низ	
paci	be_located_under	under	下にいる		внизу	под
						
ta	that	it, this	これ/それ/あれ		это/то	этот/тот
nel	some				что-то/какой-то	что-нибудь
ke	what		何		что/какой	
ne	cause	make, get	させる		сделать так, чтобы	
le	time		とき	時間,時	время	
di	begin	get, start, become	始まる	始める	начать/стать	
du	stop		やめる		перестать	прекратить
mu	male	boy, guy, man	男性	男,やつ	особь мужского пола	мужчина, мужик, мальчик
mi	female	girl, woman	女性	女	особь женского пола	женщина, девушка, девочка
go	go		行く		передвигаться (к)	идти, ходить, ездить, ехать, ездить
gau	all	every, each	全て		всё	каждый
gai	none		何も		ничего/никакой	
gau	everything					
gai	nothing					
noponcake	doesn't_matter_which	any			любой	
lo	lo				кто-то/что-то	
lik	front		前_(空間)		перед	
luk	backside		後ろ		зад	
ni	inside		中		внутри	в
nu	outside		外		снаружи	
ceni	interior		中の		внутренний	
cenu	exterior		外の		внешний	
pani	(adv)_inside_(of)	in				
pei	prone_to	always, prone	いつも[～する]	[～]がち	склонный (к)	
peu	prone_not					
bu	body[part]		体の部分		часть тела	
ka	tool		道具		орудие	инструмент
sen	PRESENT		今		сейчас	
sen	now	currently				
to	thing		もの	物	вещь/то,что...	объект
to	obj					
be	>	and as a result	そしてその結果		и как следствие	
ca	whether	if	か	<疑問>	<вопросительная частица>	
ku	FUTURE	will, shall, gonna, going to	<未来>		<будущее время>	
ki	PAST		<過去>		<прошедшее время>	
do	PASSIVE		される	<受身形>,<受動態>	<пассив>	
			反対語		противоположность	
po	ADV		<副詞>		<наречие>	
						
ce	ADJ		<形容詞>		<прил>	
de	of		の		<род.п.>	
ho	PRED		<述語>		<сказуемое>	
la	act_of		<名詞>	こと	факт/процесс (того, что)	
gi	SUBJ		<主語>		<подлежащее>	
gu	OBJ		<目的語>		<объект>	
pe	CLAUSE				<маркер начала подчинительной клаузы>	что, который
hu	RESP	respected	<尊敬の響き>		<восторженно>	
hi	DISR		<侮る響き>		<уничижительно>	
pu	GIANT	extremely	大		<увелич>	
pi	a_LITTLE		小		<уменьш>	
je	INFORMAL		<非公式>		<слэнг>	
fe	FUCKING	bloody, damn	くそ		<матерн>	
gaus	REGULAR				регулярно	
kigaus	used_[to]					
						
he	IMP	come on, ask, suggest, order			просить	призывать/призвать
heno	don't_(when_telling_someone_not_to_do_something)					
ni	CONT					
nu	INSTANT	outside				
niki	PERF					
bis	EMPHASIS					
no	not	don't, doesn't	<否定>	ない	не	
noku	won't					
noki	didn't					
						
pua	for	[in order] to	(の)ため(に)		ради	для, чтобы
din	and		そして		и	
dun	or		それとも		или	
keu	but		しかし	[だ]け[れ]ど[も],でも	но	
kei	despite	[even] though, although, in spite			несмотря [на]	хотя, хоть
pokeu	however	nevertheless			однако, тем не менее	
pokei		though				
						
tul	too	excessive	[～]すぎる		слишком	
latul	excess					
til	not_enough				недостаточно	
latil	shortage	lack, deprivation				
me	I/me		私		я	
te	you		あなた		ты	
megau	we/us		私たち		мы	
tegau	you_[all]		あなたたち		вы	
mekote	I/me_and_you	we			я и ты	мы
mekotegau	I/me_and_you_all	we			я и вы	мы
mekodata	I/me_and_he/she	we			я и (э)тот человек	мы
mekodatagau	I/me_and_they/them	we			я и они	мы
						
						
deme	my	mine	私の		мой	
dete	your	yours	あなたの		твой	
demuta	his		あの男性の	彼の	принадлежащий ему	его
demita	her	hers	あの女性の	彼女の	принадлежащий ей	ее
dedatagau	their	theirs	あの人たちの		принадлежащий им	их
detegau	your	yours	あなたたちの		ваш	
demegau	our	ours	私たちの		наш	
						
ge	QUANTITY		数量		количество/степень	
nol	0	zero	0	ゼロ	0	ноль
ja	1	one	1	一	1	один
dua	2	two, pair	2	二	2	два
tui	3	three	3	三	3	три
fos	4	four	4	四	4	четыре
pet	5	five	5	五	5	пять
lok	6	six	6	六	6	шесть
set	7	seven	7	七	7	семь
hap	8	eight	8	八	8	восемь
nef	9	nine	9	九	9	девять
janol	10	ten	10	十	10	десять
jaja	11	eleven	11	十一	11	одиннадцать
jadua	12	douzen, twelve	12	十二	12	двенадцать
						
mei	be_alive	live	生きている	生きる	быть живым	жить
lamei	life		人生		жизнь	
tomei	living_thing		生き物		живое существо	
dimei	be_born		生まれる		родиться	
duimei	be_back_to_life	be reborn	生まれ変わっている			
duidimei	get_reborn	be reborn, revive	生まれ変わる		возродиться	
neduimei	bring_back_to_life				возродить	
diadimei	birthday		誕生日		день рождения	
ladimei	birth		誕生		рождение	
nedimei	give_birth		生む		родить	
dimeu	die		死ぬ		умереть	скончаться
ladimeu	death		死		смерть	
meu	be_dead		死んでいる		быть мертвым	
nemeu	kill	murder	殺す		убить	
lanemeu	(noun)_murder		殺害	[人]殺し, 殺人	убийство	
danemeu	killer	murderer, assassin	殺害者	殺人犯, 人殺し	убийца	
dationemeu	[professional]_killer		キラー	殺人者	киллер	
dadonemeu	person_killed_by_someone_or_something	victim	殺された人	犠牲者	убитый	жертва
nemeuse	commit_suicide	suicide, kill oneself	自殺する		совершить самоубийство	
lanemeuse	suicide		自殺		самоубийство	
moinemeuse	suicidal		自殺したがる			
danemeuse	person_killing_oneself	suicide, suicidal	自殺者		самоубийца	
dameumei	zombie		ゾンビ		зомби	
nikdameu	coffin		棺		гроб	
madonenicil	graveyard/cemetery		墓地		кладбище	
nenicil	bury		埋める		хоронить	
lanenicil	funeral		葬式		похороны	
sudationenicil	funeral_home				похоронное бюро	
						
niu	among				среди	
kiu	solid		固体		твердое тело	
lio	liquid		液体		жидкость	
fua	air		気体		воздух/газ	
makiu	soil_(as_a_place_opposed_with_water_and_air)		土		суша	земля
malia	water_(as_a_place_opposed_with_air_and_soil)				вода (как пространство или место)	
mafua	air_(as_a_place_opposed_with_soil_and_water)	sky			воздух (как пространство или место)	
makiuniumalia	island		島		остров	
pumakiu	continent		大陸		континент	
	peninsula					
sudaban	military		軍		армия	
sudabanmakiu	army_(soil_forces)				пехота	
sudabanmalia	navy				флот	
sudabanmafua	air_force				военно-воздушные силы	ВВС
						
bie	automatic_vehicle_with_a_cabin				транспортное средство с кабиной	
biekiu	car				автомобиль	машина
bielio	ship/yacht	boat	船		корабль/яхта	судно
biefuas	airplane		飛行機		самолёт	
biefuanis	helicopter		ヘリコプター		вертолёт	
biecilio	submarine		潜水艦		подводная лодка	
biepue	train		電車		поезд	
gonbiepue	railway		線路		рельсы	
biepuecicil	subway	metro, underground	地下鉄		метро	
madugobie	a_place_where_a_public_vehicle_stops	station	駅		станция	остановка
mabiefuas	airport		空港		аэропорт	
bus	bus				автобус	
'taksi	taxi				такси	
						
						
dugo	stop_[going]	halt, brake	止まる			остановиться
dumof	stop_[moving]				перестать двигаться	остановиться
						
kius	beast	animal	獣_(哺乳類)	動物	зверь (млекопитающее)	
lias	fish		魚		рыба	
fuas	bird		鳥		птица	
nis	insect		虫		насекомое	
						
pue	rope-shaped				длинный гибкий продолговатый предмет, однородный в разрезе	
nispue	worm				червь	червяк
						
						
gokiu	go_on_solid_surface				передвигаться по твёрдой поверхности	
golio	swim				плавать/плыть	
gofua	fly/jump				лететь/летать	
						
goni	enter	go inside, go in, come in, join	入る		входить/войти	
gonu	(verb)_exit	go outside, go out, come out	出る		выходить/выйти	
magoni	entrance		入口	入り口	вход	
magonu	(noun)_exit		出口		выход	
						
kan	look/see		見る		смотреть/видеть	
saunomokan	be_blind		[目が]見えない		быть слепым	
lui	listen/hear		聞く		слушать/слышать	
nomolui	be_deaf		[耳が]聞こえない			
tolui	(noun)_sound		音		звук	
doluibeso	(verb)_sound		音する		быть слышимым	слышно
dobabedoso	(verb)_sound_(speaking_of_a_word/phrase)		響きする		звучать (о фразе)	
doluipun	loud		音が大きい	うるさい	громкий	
togedolui					громкость	
doluipin	quiet	silent	音が小さい	静か	тихий	
ladoluipin	quietness	silence	静寂		тишина	
dofului	noisy		うるさい		шумный	
tofului	noise		うるさい音		шум	
fadofului	make_noise		うるさい行為をする		шуметь	
						
lakan	vision					
						
tok	flow	stream	流れ		поток	
latok	(noun)_flow					
gon	road	way, road, street, path	道		путь/дорога	
sao	circle		丸		круглый объект	
fomfoskuthus	rectangle		四角		прямоугольник	
fomtuikut	triangle		三角形		треугольник	
fomfoskuthustiasim	square		正方形			
						
kut	angle		角度		угол	
sikut	degree(in_an_angle)		度(角度の中に)		градус (у угла)	
kuthus	right_angle				прямой угол	
	pi_(mathematical constant, appr. = 3.14)					
						
kos	cosine	cos, cosinus	コサイン		косинус	cos
sin	sine	sin, sinus	サイン		синус	sin
tan	tangent	tan, tg	タンジェント		тангенс	tg
miftan	cotangent	cot, ctg			котангенс	ctg
						
tiajilkuthus	cathetus				катет	
tiajulkuthus	hypothenuse				гипотенуза	
						
fui	smell		においをかぐ		нюхать	
						
gin	eat/drink		食べる/飲む		кушать/пить	есть
ginkiu	eat		食べる		кушать	есть
ginlio	drink		飲む		пить	
fual	breathe		息をする		дышать	
fualni	breathe_in	inhale	吸い込む		вдыхать/вдохнуть	
fualnu	breathe_out	exhale	息を吐く		выдыхать/выдохнуть	
						
lafual	breath		息		дыхание	
						
tilginkiu	eat_not_enough	starve			недостаточно кушать	голодать, недоедать
latilginkiu	fact_of_eating_not_enough	hunger, starvation			недоедание	голод
domogin	edible		食用	食べられる	съедобный	
tofual	air_(what_we_breathe)		空気			
toginkiu	food		食べ物	ごはん	еда	пища
nanioginkiu	be_hungry		お腹[が]空いている	お腹[が]空いた	голодный	хотеть есть
lananioginkiu	hunger	appetite	空腹		голод	
nanioginlio	be_thirsty		のど[が]渇いている	のど[が]渇いた	испытывать жажду	хотеть пить
nanioson	be_sleepy		眠い		испытывать сонливость	хотеть спать
lanomoson	(f)act_of_not_being_able_to_sleep	sleeplessness, insomnia	不眠		бессонница	
						
gun	defecate/urinate				испражняться/мочиться	
gunkiu	defecate	poop			испражняться	какать
gunlio	urinate	pee			мочиться	писать, писять
gunfua	fart				пердеть/пёрнуть	
togunkiu	feces				фекалии	говно, дерьмо
togunlio	urine				моча	
						
						
katokliabenopatogun	lavatory_pan	toilet			унитаз	
						
nie	year		年	一年	год	
sinie	month		一ヶ月	月	месяц	
nal	weekday		曜日		день недели	
sunal	week		週間	一週間	неделя	
						
dia	day		日		день (сутки)	
jam	hour	o'clock	一時間		час	
min	minute		一分		минута	
simin	second_(1/60_of_a_minute)				секунда	
mil	milk		乳汁		молоко	
milmua	[cow]_milk		牛乳		коровье молоко	
cemil	mammal		哺乳類		млекопитающее	
						
mupul	man		男の人		мужчина	
mipul	woman		女の人		женщина	
mupil	little_boy	boy	男の子		мальчик (ребенок)	
mipil	little_girl	girl	女の子		девочка (ребенок)	
pimu	boy		男の子		мальчик	
pimi	girl		女の子		девочка	
jepil	kid					
pilpupin	baby		赤ちゃん		младенец	
						
humu	gentleman				господин/джентельмен	
humi	lady				госпожа/леди	
himu	jerk					
himi	bitch					
						
pojanjis	usually/normally				обычно	
						
						
						
						
						
jemu	guy	dude			парень/мужик	пацан
jemi	(informal)_girl	chick, gal			девчонка	девка
						
nai	warm/hot		温度が高い	暖かい,温かい,熱い,暑い	высокой температуры	
nau	cold		温度が低い	寒い,冷たい	низкой температуры	холодный
punai	hot		暑い/熱い		горячий/жаркий	
pinai	warm		あたたかい	暖かい,温かい	теплый	
pinau	cool_(temperature)		涼しい		прохладный	
lapunai	heat		あつさ	暑さ,熱さ,熱	жара	
lapinai	warmth		あたたかさ	暖かさ,温かさ	(сущ) тепло	
						
soinie	part_of_year	season			время года	сезон
soinienai	summer		夏		лето	
soinienau	winter		冬		зима	
soiniedinai	spring		春		весна	
soiniedinau	autumn	fall	秋		осень	
dialelailunsimlelau	equinox				равноденствие	
dialelaigapuslun	[summer]_solstice				[летнее] солнцестояние	
dialelaigapuslin	[winter]_solstice				[зимнее] солнцестояние	
						
su	group		群		(мыслимое как единое целое) группа	
si	element		要素		элемент	
sou	whole		全体		целый	
soi	part	piece	部分		часть	
						
nedosopus	exaggerate				преувеличивать	
						
						
						
						
						
suf	general				обобщённый	общий
sif	particular	specific, concrete			конкретный	
						
sufli	abstract				обобщённый (в хорошем смысле)	
sifli	specific				конкретный	
nesifli	[give_an]_example				привести пример	
lanesifli	example				пример	
seinesifli	for_example				например	
soisif	detail				подробность	деталь
suflu	vague				абстрактный (в плохом смысле)	
						
puf	public					
pif	private					
						
						
						
						
muf	be_multiplied_(by)					
mif	be_divided_(by)					
nemuf	multiply					
nemif	divide					
lanemuf	multiplication					
lanemif	division_(as_action)					
						
mif	1_over		部分		разделить на (для образования дроби)	
mifdua	half		半分		половина	
miftui	one_third		3分の1		треть	
miffos	quarter	[one]_fourth	4分の1		четверть	
pidua	percent				процент	
						
niku	going_to					
leku	future		未来		будущее	
leki	past		過去		прошлое	
lesen	present_time	contemporary	現在		настоящее	
						
kie	use	spend	使う		использовать	пользоваться, употреблять
dakie	user				пользователь	
diu	solve	figure out, handle, tackle	解決する		решить (задачу, проблему)	разобраться
ladiu	(action)_solution		解決		решение	
sandiu	solution/strategy					
						
lon	line					
loncul	horizon					
						
pun	big	large	大きい		большой	
pin	small		小さい		маленький	
dipun	become_bigger	enlarge, grow	大きくなる		расти/вырасти	
						
joimei	be_happy_[to_be_alive]		(形容詞)_幸せ		счастлив	
lajoimei	(f)act_of_being_happy_to_be_alive	happiness	(名詞)_幸せ	幸福	счастье	
hujoumei	be_miserable				несчастен	
lahujoumei	misery					
						
jen	be_full_of_energy	have energy	力がある	元気	полон энергии/сил	
nojen	be_out_of_energy	be tired	力がない	疲れている	истративший энергию	уставший, устать
lajen	energy		力		энергия	
togelunnodujen	stamina				выносливость	
kiejen	put_effort_(into)	try [hard]	頑張る		стараться/постараться	прилагать усилия
lakiejen	effort				старание	усилие, усилия
kiejentua					пытаться	
						
lun	long		長い		длинный	
nepuslun	make_longer	extend				
tiapun	wide		太い		широкий/толстый	
nepustiapun	make_wider	extend				
cun	high		高い		высокий	
lin	short		短い		короткий	
tiapin	narrow				узкий/тонкий	
cin	low		低い		низкий	
togelun	length		長さ		длина	
togenai	temperature		温度/気温		температура	
togecun	height		高さ		высота	
togepun	size		大きさ		размер	
togejun	distance		遠さ		расстояние	
tonsotogelun	ruler_(mesurement_tool)				линейка	
togeli	quality				качество	
						
pau	parent		親		родитель	
mupau	father	dad	父	[お]父さん	отец	папа
	daddy					
mipau	mother	mom	母	[お]母さん	мать	мама
	mommy					
						
paupau	grandparent				дед/бабушка	
mupaupau	grandfather		祖父	おじいさん,おじいちゃん	дед	дедушка
jemupaupau	grandpa					
mipaupau	grandmother		祖母	おばあさん,おばあちゃん	бабушка	бабка
jemipaupau	grandma					
						
pai	offspring	child	子孫	子供	сын/дочь	ребёнок
mupai	son		息子		сын	
mipai	daughter		娘		дочь	дочка
hupimi	o_great_respected_girl	princess				
hupimu	o_great_respected_boy	prince				
						
paipai	grandchild		孫			
mupaipai	grandson				внук	
mipaipai	granddaughter				внучка	
						
kio	sibling		兄弟		брат/сестра	
mukio	brother		兄/弟		брат	
jemukio	bro					
mikio	sister		姉/妹		сестра	
jemikio	sis					
mikiopusjanmeilin	younger_sister	little sister, young sister	妹		младшая сестра	
mukiopusjanmeilin	younger_brother	little brother, young brother	弟		младший брат	
mikiopusjanmeilun	older_sister	big sister	姉	お姉さん,お姉ちゃん	старшая сестра	
mukiopusjanmeilun	older_brother	big brother	兄	お兄さん,お兄ちゃん	старший брат	
						
kiodua	cousin					
mukiodua	[male]_cousin				двоюродный брат	
mikiodua	[female]_cousin				двоюродная сестра	
						
kiopau	uncle/aunt				дядя/тётя	
mukiopau	uncle				дядя	
mikiopau	aunt				тётя	тётка
						
paikio	nephew/niece				племянник/племянница	
mupaikio	nephew				племянник	
mipaikio	niece				племянница	
						
dahanjin	relative				родственник	
han	blood		血		кровь	
puehan	[blood]_vessel/artery				кровеносный сосуд	
						
nalja	Monday		月曜[日]		понедельник	
naldua	Tuesday		火曜[日]		вторник	
naltui	Wednesday		水曜[日]		среда	
nalfos	Thursday		木曜[日]		четверг	
nalpet	Friday		金曜[日]		пятница	
nallok	Saturday		土曜[日]		суббота	
nalset	Sunday		日曜[日]		воскресенье	
						
sinieja	January		一月	1月	январь	
siniedua	February		二月	2月	февраль	
sinietui	March		三月	3月	март	
siniefos	April		四月	4月	апрель	
siniepet	May		五月	5月	май	
sinielok	June		六月	6月	июнь	
sinieset	July		七月	7月	июль	
siniehap	August		八月	8月	август	
sinienef	September		九月	9月	сентябрь	
siniejanol	October		十月	10月	октябрь	
siniejaja	November		十一月	11月	ноябрь	
siniejadua	December		十二月	12月	декабрь	
						
jin	be_near	close, at, approximately, about, around, some, nearly	近い		близкий	
dijin	(verb)_approach		近づく		приближаться/приблизиться	
jun	far	distant	遠い		далёкий	
						
						
						
						
kon	be_in_contact	be connected, be acquaintances (with), know	接		быть в контакте (с)	
nikon	be_connected_(be_in_continuous_contact)	online			быть присоединённым (к)	
ninokon	be_disconnected	offline			быть отсоединённым (от)	
nenikon	[cause_to]_connect				присоединить	
dinikon	become_connected	connect			присоединиться	
dunikon	become_disconnected	disconnect			отсоединиться	
lanikon	connection		接続		соединение	
						
konbuc	touch				прикасаться	трогать, касаться
pajinbuc	in_physical_proximity	in real life, offline				
						
						
						
kanekonbenomokiebutenpet	handcuffs				наручники	
						
sim	same	similar	似ている	一緒	похожий (на)	такой же
sum	be_different_(from)		似ていない	違う	отличаться (от)	другой
lasim	similarity				сходство	схожесть
lasum	difference				различие	разница
gasim	identical/same	equal			идентичный	
lagasim	identity/equation				идентичность	равенство, уравнение
pisim	similar					
nesum	cause_to_be_different	change			изменять/изменить	
disum	become_different	change			изменяться/измениться	
gepunkosumpia	various	different			много разных	разный
						
mit	meet/see	run into, find	会う		встретить[ся] (с)	
mitpajinbuc	meet_(in_physical_proximity)				встретиться [вживую]	
mitbenesejo	run_into_(smth)_and_take_it	find				
						
ko	with	plus	と[一緒に]		[вместе] с	
kopia	together		一緒に		вместе	
noko	without				без	
hasko	minus	except				
kodagai	alone		一人で		быть в одиночестве	один
nalupakodagai	be_lonely		寂しい		одиноко	
lanalupakodagai	loneliness				одиночество	
						
dikopia	become_united	unite			объединиться	
nekopia	cause_to_be_united	unite			объединить	
						
jil	along[side]	in favor			вдоль	за
jul	against				против	
						
						
mo	be_able	can	できる		мочь	
nomo	can't	cannot, unable	できない		не мочь	
domo	possible					
donomo	impossible			無理		
modei	might_be_true	possible	可能		возможный	
nomodei	cannot_be_true	impossible	不可能		невозможный	
togemodei	probability	possibility	確立		вероятность	
toge	quantity_of		数		число	
toge	number	figure				
modeigepun	be_probable				вероятный	
pomodeigepun	probably	must			очень вероятно	наверно[е]
modeigepin	be_unlikely				маловероятный	
pomodeigepin	doubtedly				маловероятно	врядли
pomodei	maybe	might, may			может быть	возможно
						
						
fabemo	skilled	can	スキルがある		уметь	
fabemoli	be_well-skilled_(at)	good (at)	上手		умелый	
fabemolu	be_bad-skilled_(at)	bad (at)	下手			
tofabemo	skill		スキル	能力	навык/умение	способность
dafabemo	specialist					
dafabemoli	expert				профессионал	мастер
dafabemolu	amateur					
jedafabemoli	pro					
jedafabemolu	noob					
nefabemo	(verb)_coach	teach			тренировать (кого-то)	
difabemo	acquire_skill_(at)	learn			получать навык	тренироваться, учиться/научиться
disakohom	study	learn	勉強する		изучать/изучить	учить, учиться, выучить
ladisakohom	(noun)_studying		勉強		учеба	
lemdisakohom	lesson	class	授業		урок	
sulemdisakohom	[lesson]_course					
nesakohom	teach		教える		обучать	учить
dadisakohom	student	pupil	学生		учащийся	ученик
danesakohom	teacher		教師	先生	учитель	
madisakohom	school		学校		учебное заведение	школа
dadonesakohomkopia	classmate		同級生		одноклассник/одногрупник	
sakohom					разбираться (в чём-то)	
dasakohom	expert				эксперт	
						
sumagau	world		世界		мир	
sudagau	humankind	mankind, humanity	人類		человечество	
						
						
dofa	happen	occur			происходить/произойти	случаться/случиться
todofa	occurrence	event, incident			событие	
todofalimaie	miracle				чудо	
sel	succeed_(in)	achieve, manage	成功する		смочь	получиться, удасться
lasel	success		成功		успех	
tosel	what_one_succeeded_in	achievement			достижение	
nosel	fail		失敗する		не смочь	провалить, потерпеть неудачу
lanosel	failure		失敗		провал/неудача	
peidofali	be_lucky		運がいい	ラッキー	удачливый	везучий
peidofalu	be_unlucky		運が悪い		неудачливый	невезучий
dasel	a_person_who_succeeds	winner			успешный человек	
danosel	a_person_who_fails	loser			неудачник	
						
						
						
peifali	be_kind	good, nice	優しい		добрый	
peifalu	be_evil				злой (творящий зло)	
						
bul	strong		強い		сильный	
bil	weak		弱い		слабый	
labul	strength	force	強さ		сила	
labil	weakness		弱さ		слабость	
						
						
janmo	ready		準備ができている	準備OK	готов	
nejanmo	prepare_(something_for_something)				готовить	
dijanmo	get_ready	prepare	準備する		готовиться	
						
						
						
cul	sky		空		небо	
cil	ground		土		земля	
						
men	surface		表面		поверхность	
						
						
cel	cover				покрывать	крыть
locelnaison	blanket				одеяло	
locel	(noun)_cover					
						
tal	deserve	be worth, merit	値する		заслуживать	быть достойным
					не заслуживать	быть недостойным
jantal	be_in_a_deserved_position/situation	have_what_one_deserves			иметь то, что заслужил	
jannotal	be_in_a_non-deserved_position/situation	have_what_one_doesn't_deserve			иметь то, чего не заслужил	
lajantal	justice				справедливость	
lajannotal	injustice				несправедливость	
nejantal	fair	just				
nejannotal	unfair					
talli	deserve_good				заслуживать хорошего	
tallu	deserve_bad				заслуживать плохого	
nejantallu	punish				наказать	
lanejantallu	punishment				наказание	
nejantallunemeu	execute(death)				казнить	
lanejantallunemeu	death_penalty	death_sentence, execution			казнь	
nejantalli	(verb)_reward				наградить	
tonejantalli	(noun)_reward				награда	
						
nesejanlinotal	put_oneself_in_a_good_position_that_one_does_not_deserve	cheat			мухлевать	
						
						
ban	fight		戦う		бороться	
laban	(noun)_fight	battle				
puban	be_in_war_(with)				воевать	
lapuban	a_giant_fight	war			гигантская битва	война
labanpuaneima	a_fight_over_controlling_land	war			битва за контроль территории	война
lapubanniusudama	a_giant_fight_between_societies	war			битва между сообществами	война
bankiebu	(verb)_physical_fight_with_no_weapon	fight			драться	
banba	argue				ссориться	
siban	(verb)_attack				атаковать	
lasiban	(noun)_attack				атака	
						
banbedue	win	win, beat	勝つ		победить	
banbenodue	be_defeated	lose	負ける		проиграть	
labanbedue	victory	win			победа	
labanbenodue	defeat	loss			поражение	
dabanbedue	winner				победитель	
dabanbenodue	loser				проигравший	
donomobanbedue	invincible				непобедимый	
						
sanban'tcin	Chinese_martial_arts	kung fu, wushu			ушу	кун[-]фу
						
						
						
						
bulabul	muscle		筋肉		мышца	
bugin	mouth		口		рот	
bufual	lungs				легкие (часть тела)	
bukan	eye		目		глаз	
bului	ear		耳		ухо	
buten	hand/arm		手/腕		рука	
butennol	shoulder				плечо	
butenja	upper_arm					
butendua	elbow				локоть	
butentui	forearm				предплечье	
butenfos	wrist				запястье	
butenpet	hand				кисть [руки]	рука
likbutenpet	palm				ладонь	
lukbutenpet						
butenpetkau	fist				кулак	
butenpetkai	open_hand					
tonbutenpet	finger				палец	
bugo	leg/foot		足		нога	
bugonol	hip_joint				таз	
bugoja	upper_leg					
bugodua	knee				колено	
bugotui	lower_leg					
bugofos	ankle				щиколотка	
bugopet	foot	feet			стопа	ступня
tonbugopet	toe					
bugofua	wing		羽		крыло	
bupueluk	tail					
bufui	nose		鼻		нос	
bumu	penis		男性器		пенис	член
jebumu	dick					
bumi	vagina		女性器		вагина	
jebumi	pussy					
bukas	genitalia		性器		гениталии	
bumil	breast[s]	udder	乳	胸, おっぱい	грудь (женская)	
jebumil	boob[s]		おっぱい		сиськи	титьки
tonimmenbumil	nipple				сосок	
bac	head		頭		голова	
buniktogin	stomach				живот	
buni	[body]_organ		臓			
						
bi	spirit/soul		心理		душа	
	ghost					
cebi	mental/psychological_(related_to_psyche)				духовный/психологический	душевный, моральный
cebu	physical_(related_to_the_body)				телесный	физический
hea	hair		毛	髪の毛	волос	
cehea	hairy				волосатый	
heacubukan	eyebrow[s]				брови	
heakonbukan	eyelash[es]				ресницы	
healikbac	facial_hair				растительность на лице	
heacubugin	moustache				усы	
heanumlikbac	beard				борода	
						
						
						
likbac	face		顔		лицо	
culikbac	forehead				лоб	
tialikbac	cheek				щека	
cilikbac	chin				подбородок	
healikbac	facial hair				растительность на лице	борода
						
bucel	skin				кожа	
						
liobugin	saliva				слюна	
nenuseliobugin	spit					
liobucel	sweat				пот	
						
	sperm				сперма	
liobumi						
						
lei	wet		濡れている		мокрый	влажный, сырой
leu	dry		乾いている		сухой	
lia	water		水		вода	
						
latokfua	wind		風		ветер	
nego	send	deliver			посылать/послать	отправить/отправлять
lanego	(f)act_of_sending	delivery			отправка	
tonego	delivered_thing	delivery			посылка	
negobepa	cause_to_arrive	deliver			доставлять/доставить (посылку)	
lanegobepa	(f)act_of_causing_to_arrive	delivery			доставка	
danegobepa	deliveryperson	courier, deliveryman, deliverer			курьер	
netokfua	blow				дуть (создавать поток воздуха)	
katokfuanau	fan (device)		扇風機		вентилятор	
kaneleuhea	hair_dryer					
						
heia	room		部屋		комната/помещение	
heiason	bedroom				спальня	
heiaba	chat[room]					
biu	city/town/village				населённый пункт	город, деревня, посёлок
dom	building/house		家/ビル		дом/здание	
pa	located	in, at, be present	居る/在る	いる,ある, に, で	в местоположении	находиться, располагаться
lapa	presence					
topa	location	place, spot, territory			место	
topasen	current_place	here	ここ		это место	
topata	that_place	there	そこ/あそこ		то место	
patopasen	here				здесь	тут
patopata	there				там	
nopa	be_absent	be away			отсутствовать	
lanopa	absence				отсутствие	
						
pas	reside	live	住む		проживать (в)	жить, обитать
topas	place_of_residence	home			место жительства	
dompas	building/house_of_residence	home, place			(чей-то) дом	
dipas	move_in				начать проживать	въехать, заехать
dupas	move_out				перестать проживать	съехать
dapasjin	neighbor	neighbour			сосед	
dapasheiakopia	roommate				сосед [по комнате]	
						
						
						
						
gos	country	state	国		государство	страна
gosse	one's_country	motherland, fatherland, homeland	内国/母国		родина	отечество
gosnose	abroad		外国		заграница	
dagos	citizen				гражданин	
dagosnose	foreigner		外国人		иностранец	
cegosnose	foreign				иностранный	
						
nudom	outdoors	outside, street	家の外		улица (вне здания)	
nidom	indoors	inside	家の中		внутри здания	
						
kuc	after	in	あと	後	после	через
kucta	afterwards	then	そのあと		после этого	потом, затем
kic	before	ago	前_(時間)		перед (во времени)	
						
						
kun	next		次		следующий	
kin	previous	last			предыдущий	
diasen	(noun)_today		今日		сегодня	
diakun	(noun)_tomorrow		明日		завтра	
diakin	(noun)_yesterday		昨日		вчера	
	(adv)_today					
	(adv)_tomorrow					
	(adv)_yesterday					
diakundua	[the]_day_after_tomorrow		あさって		послезавтра	
diakindua	[the]_day_before_yesterday		おととい		позавчера	
diakunta	the_next_day				следующий день	
diakinta	the_previous_day				предыдущий день	
						
						
dui	back		<反対方向へ>		обратно	назад
se	self	myself, yourself, himself, herself, ourselves, themselves, itself	自分		себя/сам	
pia	each_other		お互い		друг друга	
nose	others		他の人	他人	других	
						
mencuheia	ceiling				потолок	
menciheia	floor				пол	
tiaheia						
						
fue	cloth		布		ткань	
sifue	thread		糸		нить	нитка
fueleubu	towel		タオル		полотенце	
fuemenciheia	carpet				ковер	
lapou	dirt		汚れ	どろ	грязь	
						
						
						
pusli	better				лучше	
puslu	worse				хуже	
nepusli	make_better	improve			улучшить	
nepuslu	make_worse	screw up, fuck up			ухудшить	испортить
dipusli	get_better	improve			улучшиться	
dipuslu	get_worse	deteriorate			ухудшиться	испортиться
						
puli	great				замечательный	
pulu	terrible				ужасный	
hupuli	excellent	fantastic, magnificent, wonderful			превосходный	прекрасный, чудесный, великолепный
jepuli	(informally)_extremely_good	awesome			офигенный	
jeli	(informally)_good	nice			зачётный	
jelu	suck_(be_bad)	shit, sucks			фиговый	
puslem	again					
pus	extra	more	もっと		более/еще	
pus	more					
pis	less					
due	surpass	beat, take the lead	優れる		превосходить/превзойти	
						
duepalik	outrun	beat, take the lead			обогнать	
diduepalik	catch_up_(with)				догнать	
						
lem	occurence		[~]回		раз	
lemja	first_time		はじめて		первый раз	
lemja[OPP]	last_time				последний раз	
jalem	once				один раз	однажды
dualem	twice				два раза	дважды
						
						
benopa	away					
						
poi	clean		清潔	綺麗	чистый	
pou	dirty	polluted	汚い	汚れている	грязный	
nepoi	(verb)_clean				чистить	
nepou	cause_to_be_dirty	pollute, make dirty	汚す		сделать грязным	[ис]пачкать, [за]морать, загрязнять/загрязнить
						
fuecelholmurpualai	curtain[s]				шторы	
fuebugopet	sock[s]				носки	
nenopa	remove	delete, erase			убирать/убрать	
nenopahea	shave				брить(ся)	
	rub					
[rub]neleu	wipe_dry					
[rub]nepoi	wipe_clean					
fuenepoi	wiping_cloth					
[rub]nenopa	wipe_off					
						
lamo	[cap]ability				способность	
tokan	visual_data					
tokansankopiasoi	scheme				схема	
tokansutopa	map				карта (географическая)	
famso	imagine	picture			воображать/вообразить	представлять, представить
lafamso	act_of_imagining	imagination			воображение	
lamofamso	ability_to_imagine	imagination			способность воображать	воображение
donomofamso	unimaginable				невообразимый	
nedui	reflect					
kaduikan	mirror					
						
						
fam	do_thinking	think, consider	考える		мыслить (о)	думать
sa	know	aware	知っている	わかる,知る	знать	
nosa	not_know	unaware	知らない		не знать	
moisa	want_to_know	wonder, be curious	知りたがる		хотеть знать	
lamoisa	curiosity		好奇心		желание знать	
peimoisa	be_curious_(character_trait)				любознательный	любопытный
lapeimoisa	curiosity_(character_trait)				любознательность	любопытство
lanosa	fact_of_not_knowing	ignorance, oblivion, unawareness	好奇心		незнание	
lanotuasa	fact_of_not_trying_to_get_knowledge	ignorance			невежество	
						
hom	understand		理解する	わかる, うん, はい	понимать	
nehom	explain		理解させる	説明する	объяснять/объяснить	
lanehom	explanation				объяснение	
dihom	start_to_understand	get			понять	
duhom	get_confused				перестать понимать	запутаться
nikiduhom	be_confused					
lanikiduhom	confusion					
dohom	understandable/clear				понятный	
nohom	not_understand		理解していない	わからない	не понимать	тупить
lanohom	non-understanding	confusion			непонимание	
dusa	stop_knowing	forget			перестать знать	забыть
nodusa	not_stop_knowing	remember			продолжать помнить	помнить
dufam	stop_thinking	forget, get over			перестать думать	забыть
nodufam	not_stop_thinking	remember			не переставать думать (о)	вспоминать
duidifam	again_have_a_thought_(about)	remember, recall				
neduimem	remind				напоминать/напомнить (о чём-то, либо сделать что-то)	
						
						
						
						
						
						
						
						
peidumem	have_bad_memory	forgetful			забывчивый	
peudumem	have_good_memory					
						
fo	believe	think, figure, be convinced	思う		убежден (в)	думать, считать, полагать
nefo	convince				убеждать/убедить	
tofo	what_someone_believes_to_be_true	opinion, view, belief	意見		мнение	убеждение, взгляд
fodeu	believe_to_be_false	doubt			убежден в неправдивости (какого-л факта)	
so	see/notice		気づいている		замечать	видеть, ощущать, чувствовать
noso			気づいていない		не замечать	
tuaba	mean		言おうとする		пытаться сказать	иметь в виду
tek	test		試す		проверять/проверить	
latek	(noun)_test/check				проверка	
peihom	smart		頭いい		умный	
peuhom	stupid	dumb	頭悪い		глупый	тупой
dapeuhom	idiot	fool	頭悪い人	馬鹿,ばか,アホ	идиот	дурак, дебил
hidapeihom	smartass				умник	
hidapeuhom	dumbass					
						
noson	be_awake		起きている		бодрствовать	
son	be_asleep	sleep	寝ている		спать	
lason	(noun)_sleep		眠り		сон (как процесс)	
dison	fall_asleep		寝る		уснуть	заснуть
duson	wake_up		起きる		проснуться	
kanenoson	[wake-up]_alarm		目覚まし	アラーム	будильник	
goson	go_to_sleep		寝る		пойти спать	
sonbekan	(verb)_dream(when_sleeping)	have a dream	夢を見る_(寝ているとき)		видеть во сне	сниться/присниться
tosonbekan	(noun)_dream(when_sleeping)		夢_(寝ているとき)		сон (то что снится)	
tosonbekandonabun	scary_dream	nightmare	怖い夢		страшный сон	кошмар
pison	take_a_nap	nap				
tilson	sleep_too_little				недосыпать	
latilson	sleep_deprivation		寝不足		недосып[ание]	
tul[early][OPP]duson	oversleep		寝坊する		проспать	
						
totuaba	meaning		意味		значение (слова или фразы)	смысл
kamtuabasim	synonym				синоним	
kamdoluisim					омоним	
						
nodu	not_stop	continue, stay, keep, remain	続ける		не переставать	продолжать, всё ещё, пока
duidi	get_back_to_(...ing)	continue, resume			вернуться к (какому-то действию)	
						
						
						
nikidu	[not_...]_anymore					
						
nonikidu	still_...ing	still				
niki	has_already_...	already				
nikidi	is_already_...ing	already				
noniki	hasn't_..._yet	[not] yet, have not				
nonikidi	isn't_..._yet	[not] yet, have not started				
						
tosa	knowledge		知識		знание	
nesa	let_know	tell	知らせる	教える	сообщить	сказать
peisa	knowledgeable	smart, clever, intelligent			эрудированный	
tonesa	information					
						
diso	notice		気づく		заметить	обратить внимание
doso	seem	look, appear			казаться	выглядеть
dokanbeso	visually_seem	look			выглядеть (визуально)	
sandokanbeso	[visual]_appearance	look[s]			внешний вид (визуальный)	внешность
sandoso	appearance					
nesedoso	pretend	act			притворяться/притвориться	делать вид
nesedosonoso	ignore				делать вид, что не замечаешь	игнорировать
neso	show		見せる		показать	
nenoso	hide		隠す		спрятать	
nenosose	hide_[oneself]		隠れる		спрятаться	
tonenoso	secret		秘密		секрет	тайна
						
todofajanbeilin	news				новости	
paptodofajanbeilin	newspaper_(made_of_actual_paper)				газета	
sudanesatodofajanbeilin	news_organization	newspaper			новостное_агенство	
danesatodofajanbeilin	news_reporter	journalist			репортёр	журналист, ведущий новостей
disa	begin_to_know	find out, learn			узнавать/узнать	
						
laheimofcil	earthquake				землетрясение	
						
						
						
tofam	thought		考え		мысль	
bufam	brain		脳みそ		мозг	
						
foi	fast	quick, rapid, swift	速い		быстрый	
fou	slow		遅い		медленный	
togefoi	speed	velocity			скорость	
dipusfoi	become_faster	accelerate			ускоряться/ускориться	
ladipusfoi	(f)act_of_becoming_faster	acceleration			ускорение	
dipusfou	become_slower	slow down			замедляться/замедлиться	
ladipusfou	(f)act_of_becoming_slower	deceleration			замедление	
						
						
						
pifo	suppose	guess			предполагать	
peipufo	prone_to_be_sure				склонный быть уверенным	[само]уверенный
peupufo	not_prone_to_be_sure					
pifodeu	(verb)_doubt				сомневаться	
						
						
						
						
						
tu	to	towards, for	へ		по направлению к	к, в, на
ti	from		から		от/из	с, чем (при сравнении), прочь
totu	direction		方向		направление	
toti	source	origin			исток	
hou	therefore	so			поэтому	
hoi	because	fault, since, as	(が)理由として	[だ]から,(の)せい(で)	из-за	потому что
tohoi	reason		理由		причина	
tohou	consequence[s]	effect, result			следствие	
hoike	for_what_reason	why	何の理由で	なんで,なぜ,どうして	почему	
hoinel	for_some_reason		なぜか		почему-то	
hoigai	for_no_reason				нет причины	просто
hoibista	that's_why				вот почему	
puake	for_what_purpose	why	何のために	なんで,なぜ,どうして	зачем	
						
						
						
seu	in_that_case	then, mean[s], imply			в таком случае	тогда, то
sei	if		if	なら,と,～たら	если	
tosei	[sufficient]_condition				условие	
toseu	consequence[s]				следствие	
						
lenikidi	beginning_[part]				начало	
lenikudu	end_[part]				конец	
						
						
ladi	(f)act_of_starting	beginning	始まり	スタート	начало	
ladu	(f)act_of_stopping	end	終わり		конец	
						
lai	be_light		明るい		светлый	
lau	be_dark		暗い		темный	
						
saocualauja	Mercury				Меркурий (планета)	
saocualaudua	Venus				Венера (планета)	
saocualautui	Earth				Земля (планета)	
saocualaufos	Mars				Марс (планета)	
saocualaupet	Jupiter				Юпитер (планета)	
saocualaulok	Saturn				Сатурн (планета)	
saocualauset	Uranus				Уран (планета)	
saocualauhap	Neptune				Нептун (планета)	
						
den	electricity		電気		электричество	
tokden	[electrical]_current				[электрический] ток	
manebei	factory	plant			завод/фабрика	
manebeiden	power_plant				электростанция	
nikden	battery		バッテリー	電池	батарейка	
nikdennu	exterior_battery	powerbank			внешняя батарейка	
lahitden	electric_shock				удар током	
hitden	electrocute				ударить током	
						
						
						
ginlenikidilai	have_breakfast				завтракать	
ginnimlelai	have_lunch				обедать	
ginlenikidilau	have_dinner				ужинать	
laginlenikidilai	breakfast				завтрак	
laginnimlelai	lunch				обед	
laginlenikidilau	dinner				ужин	
lagin	[having_a]_meal				приём пищи	трапеза
piginkiu	have_a_snack				перекусить (поесть)	
						
nim	center/middle		真ん中		центр	
num	edge				край	край, окраина, граница
						
						
						
num	(noun)_limit				предел	
jonum	be_limited				ограниченный	
nojonum	be_limitless	be unlimited			неограниченный	
nejonum	(verb)_limit				ограничивать/ограничить	
						
nut	stick_out	jut, protrude			торчать	выступать
nit	deepen				углубляться	входить
fomnut	convexity				выступ	
fomnit	cavity				углубление (как объект)	впадина
fomnutcil	mountain/hill					
fomnitcil	pit_(in_the_ground)	hole				
						
						
						
						
naf	be_concentrated	focus	集中する		сосредоточен (на)	
nik	container		入れ物		контейнер	
niknau	refrigerator	fridge	冷蔵庫		холодильник	
niknai	warmer					
nikhie	freezer		冷凍庫		морозильник	
						
						
sudafa	team				команда	
dasudafa	teammate					
						
mof	move	be in movement	動く		двигаться	
lamof	movement	motion	動き		движение	
nemof	cause_to_move	move	動かせる		двигать	
tuaduemofbu	take_part_in_sports_competition	do sports				
latuaduemofbu	sports_[competition]				спорт	
datuaduemofbu	athlete				спортсмен(ка)	атлет
mofpuasai	do_[physical]_exercises	exercise			выполнять физические упражнения	упражняться
heiamofpuasai	gym				спортивный зал	спортзал
danefabemomofbu	coach				тренер	
						
						
						
						
						
						
hei	back_and_forth				туда-сюда	
heimof	oscillate	shake, tremble, swing	揺れる			
heimofpun	shake				трястись	
heimofpin	tremble/vibrate				дрожать	вибрировать
heimoffou	swing/wave					
heimofnau	shake_cold	tremble, shake				
laheimoflio	wave_(in_water_or_other_liquid)				волны	
fomheimoflio	wave_(as_a_shape)				волна (как фигура)	
neheimoffoubutenpet	wave_[one's_hand]				махать [рукой]	
						
heilai	(verb)_flash	blink, twinkle			мигать	
heikaubukan	blink_(eyes)				моргать	
heipucseticil	do_push-ups				отжиматься (как упражнение)	
heipicsecu	do_pull-ups				подтягиваться (как упражнение)	
heikonbuc	poke					
heihit	knock_(on)				стучать	бить
heigofua	bounce				скакать	
						
						
						
						
						
tia	side		側		сторона	
tiadilai	east		東		восток	
tiadilau	west		西		запад	
tialai	south		南		юг	
tialau	north		北		север	
						
mik	right		右		справа	правый
muk	left		左		слева	левый
						
sek	cut		切る		резать	
fomsekli	sharp		鋭い		острый (который режет)	
fomseklu	dull		鈍い		затупленный	тупой
bupisek	nail		つめ		ноготь/ногти	
putonbansek	sword		剣		меч	
ham	bite		噛む		кусать	
hamnedoi	chew					
						
dutua	give_up	surrender	諦める		перестать пытаться	сдаться
luf	record		撮る		записывать (аудио, видео)	
lif	playback				проигрывать (аудио, видео)	
						
						
						
liocul	rain		雨		дождь	
						
fia	be_romantically/sexually_attracted_(to)	love, in love	好き_(恋愛のこと)		испытывать романтическое/секусальное влечение	любить, быть влюблённым
pifia	like_(in_a_romantical/sexual_way)				испытывать лёгкое романтическое/сексуальное влечение	нравиться
dosofiabi	romantic					
difia	fall_in_love		恋に落ちる		влюбиться	
						
lafia	romantic/sexual_attraction	love	恋愛		влюблённость	любовь
fiabu	be_physically_sexually_attracted_(to)				испытывать сексуальное влечение	
lafiabu	physical_sexual_attraction				сексуальное влечение	
fiabi	be_romantically_attracted_(to)		恋に落ちている	惚れている	испытывать романтическое влечение	
lafiabi	romantic_attraction	romance, love	恋		романтическое влечение	
fiabeko	be_together_(as_a_love_couple)	date, be seeing	付き合っている		быть [любовной] парой	встречаться
lafiabeko	act_of_being_together_as_a_love_couple	relationship	恋人関係		отношения (романтические или сексуальные) 	
dafiabekopia	[love]_couple		カップル			
dafiabeko	boyfriend/girlfriend	partner	恋人		бойфренд/девушка	
mufiabeko	boyfriend	bf	彼氏		бойфренд	парень, молодой человек
mifiabeko	girlfriend	gf	彼女_(恋人)		(чья-то) девушка	
						
difiabeko	start_being_together_(as_a_love_couple)	start dating, get together			стать любовной парой	сойтись
dufiabeko	break_up_(as_a_love_couple)				перестать быть любовной парой	расстаться, разойтись
nenosefiabeko	leave/dump_(one's_boyfriend/girlfriend/husband/wife)	break up			расторгнуть любовные отношения	
dakifiabeko	ex					
mukifiabeko	ex[boyfriend]				бывший [бойфренд]	
mikifiabeko	ex[girlfriend]				бывшая [девушка]	
nojodafiabeko	not_have_a_boyfriend/girlfriend	be single				
						
						
						
kas	have_sex		えっちなことをする	えっち[する]	вступить в сексуальный контакт (с)	
fekas	(rude)_have_sex	fuck			ебаться	
hukas	make_love				заниматься любовью	
lakas	(f)act_of_getting_in_sexual_contact	sex	えっち	セックス, 性交	сексуальный акт	секс
kasse	masturbate		オナニーする		мастурбировать	дрочить
lakasse	masturbation		オナニー		мастурбация	
jekas	hook_up	get laid				
jekasse	jerk_off	fap			дрочить	
dalegaikikas	virgin		童貞/処女			
mulegaikikas			童貞		девственник	
milegaikikas			処女		девственница	
naniokas	be_sexually_aroused	horny	興奮している		сексуально возбуждён	
nenaniokas	[sexually]_arouse	turn on	興奮させる		сексуально возбуждать	
donaniokas	[sexually]_arousing	sexy, hot	エロい	セクシー	сексуально возбуждающий	сексуальный
luakas	moan_[sexually]		エロ声を出す		стонать (во время секса)	
lanebumunibumi	vaginal_[sex]	sex	セックス	性交	[вагинальный] секс	
lanebumuni[anus]	anal_[sex]				[анальный] секс	анал
lakiebuginkonbukas	oral_sex				оральный секс	
lakiebuginkonbumu	blowjob		フェラ		минет	
lakiebuginkonbumi	cunnilingus				куннилингус	
kafombumuheimof					вибратор	
						
						
						
						
pilua	whisper				шептать	
peifamkas	prone_to_think_about_sex	perverted	変態(な)		склонный думать о сексе	извращённый
kiebulkas	rape				насиловать/изнасиловать	
dakiebulkas	rapist				насильник	
camudunmi	gender				пол	
lakasdahanjin	incest				инцест	
fialosim	be_homosexual	gay			быть гомосексуальным	
fialosum	be_heterosexual	be straight			быть гетеросексуальным	
dafialosim	homosexual_[person]	gay			гомосексуал	
lafialosim	homosexuality				гомосексуальность	
mifiami	lesbian		レズ	ゆり	лесбиянка	
mufiamu	gay(male)		ゲイ		гей	
pufulafialosim	homophobic					
dakaspiomon	prostitute					
lakaspiomon	prostitution				проституция	
madakaspiomon	brothel				бордель	
himikaspiomon	(rude)_female_who_gets_in_sexual_contact_in_exchange_for_money	whore, slut, scank			(грубо) женщина вступающая в сексуальный контакт за деньги	блядь, шлюха
mikaspiomon	hooker				проститутка	
mikasdagepun	a_female_who_gets_in_sexual_contact_with_many_people	slut, whore			женщина вступающая в сексуальный контакт со многими	шлюха
						
tokankas	porn[ography]		ポルノ		порно[графия]	
dafiapil	a_person_who_is_romantically/sexually_attracted_to_children	pedophile			человек, испытывающий романтическое/сексуальное влечение к детям	педофил
dakemkaspil	child_molestor	pedophile			насильник детей	педофил
						
						
bumutun	erected_penis	boner				
						
paf	shoot				стрелять	
kapafsek	bow-and-arrow				лук	
tonpafsek	arrow				стрела	
						
totasnitok	pipe					
						
tasni	through				сквозь	через
tas	trans-				пере	
tasgo	(verb)_transfer/cross	pass			перейти	
						
						
pueden	wire				[электрический] провод	
						
sai	healthy		健康である		здоровый	
sau	sick	ill	病気である		болеть	больной
lasai	health		健康		здоровье	
lasau	illness	sickness	病気		болезнь	
disai	recover_(from_a_sickness)		健康になる		выздороветь	поправиться
ladisai	recovery_(from_a_sickness)				выздоровление	
disau	get_sick		病気になる		заболеть	
saubi	mentally_ill	mentally sick, crazy			психически больной	душевно-больной
lasaubi	mental_illness	mental sickness			психическая болезнь	
lanesaibi	mental_treatment	psychiatry			психиатрия	дурка
danesaibi	psychiatrist				психиатр	
						
danesaibumi	gynecologist				гинеколог	
						
						
						
sauhoinau	sick_(caught_a_cold)		風邪を引いている		простудившийся	болеть
disauhoinau	catch_a_cold		風邪を引く		простудиться	
danesaibuham	dentist				стоматолог	зубной [врач]
nesai	cure	treat	癒す	治療する	лечить	
lanesai	treatment_(making_healthy)				лечение	
buham	tooth	teeth	歯		зуб	
danesai	doctor		医者		врач	доктор
dadonesai	patient_(person_being_treated)		患者		пациент	
dafapuadadonesai	(noun)_nurse				медбрат/медсестра	
tesnesai	medicine (substance)	drug[s], med[s]	薬		лекарство	
laseknesai	surgery		手術		[хирургическая] операция	
laseknesumbu	plastic_surgery				[пластическая] операция	
daseknesai	surgeon				хирург	
manesai	hospital		病院		больница	
manesaibi	psychiatric_hospital	mental hospital, [mental] asylum, mental house			псих.больница	
biekiumanesai	ambulance				машина скорой помощи	скорая [помощь]
nepatumanesai	hospitalize				госпитализировать	
lanepatumanesai	hospitalization				госпитализация	
						
'metal	metal				металл	
mon	money	currency	お金		деньги	
mon'metal	coin				монета	
monpap	paper_money	banknote, cash			купюра	
monbuc	physical_money	cash			наличные [деньги]	наличка
monbic	non-physical_money	credit			электронные деньги	
topiomon	[currency]_value				курс (валюты)	
ladipintopiomon	inflation_(decrease_of_currency_value)				инфляция	
ladipuntopiomon	deflation_(increase_of_currency_value)				дефляция	
bai	buy	acquire, purchase	買う		покупать/купить	приобретать/приобрести
bau	sell		売る		продать	продавать
dabai	buyer	customer, client			покупатель	
dabau	seller				продавец	
mabai	shop/store		店		магазин	
mabaikobau	market				рынок	
dokbai	receipt				чек	
danebeika	engineer				инженер	
lanebeika	engineering				инженерное дело	
						
faia	burn	be on fire	燃えている	燃える,火がついている	гореть (огнём)	
hie	be_frozen		凍っている		замороженный	
fuapeifaia	gas				[воспламеняющийся] газ	
liopeifaia	fuel	gasoline, gas			горючая жидкость	топливо
lafaia	fire				огонь	горение
fuatifaia	(noun)_smoke				дым	
nenofaia	put_out_(fire)				тушить (огонь)	
kanenofaia	[fire]_extinguisher				огнетушитель	
danenofaia	fire_fighter	fireman			пожарный	
biekiunenofaia	firetruck				пожарная машина	
madanenofaia	fire_station	fire brigade, fire department			пожарная часть	
tontokfuatifaia	chimney					
						
danoginmes	vegetarian_[person]	vegan			вегетарианец	
						
						
liahiedoi	snow				снег	
liahiedou	ice				лёд	
						
ga	completely/finish	complete, absolutely	完全に		полностью	
						
saocualau	planet				планета	
togosaosaocualau						
ten	hold		持つ		держать	
neno	not_let	stop, prevent				
noneno	let_(meaning_not_prevent)				позволять/позволить (всмысле не препятствовать)	дать, допустить
nenogo	not_let_go	hold, keep			не отпускать	держать
gobenopapodonenogo	(verb)_escape	run away			убежать/сбежать	
dinenogo	catch				поймать	
dunenogo	let_go				отпустить	
goten	carry				нести	
gobenopakoten	carry_away				унести	
gagoten	bring				принести	
gagoko	bring				привести	
gago	arrive					
						
						
tuadinenogokius	hunt				охотиться	
latuadinenogokius	hunting				охота	
tuadinenogolias	do_fishing				рыбачить	
latuadinenogolias	fishing				рыбалка	
datuadinenogokius	hunter				охотник	
datuadinenogolias	fisherman				рыбак	
jo	have		有する	持つ,持っている,ある,いる	иметь	
nejo	give				давать/дать	
dijo	begin_to_have	get, receive, obtain, acquire, find			получать/получить	
gajo	own				владеть	обладать
						
dujo	stop_having	lose			лишиться	потерять
nenojo	take_away	deprive			лишить	отобрать
nesejo	take				брать/взять	
duinejo	give_back				вернуть	
						
jokose	have_with_self				иметь при себе	
gotenkose	take_with_oneself					
						
kago	vehicle				транспортное средство	
kagofua	aircraft				воздушное транспортное средство	
						
						
tai	vertical	stand	たて		вертикальный	
tau	horizontal	lie	横		горизонтальный	
ditai	stand_up				принять вертикальное положение	встать
ditau	lie_down		横になる		принять горизонательное положение	лечь
						
dou	be_hard		硬い		твердый	
doi	be_soft		やわらかい		мягкий	
doua	stone		石		камень	
						
cua	space		宇宙		космос	
kakancua	telescope				телескоп	
dagocua	astronaut				космонавт	
kagocua	spacecraft				космический корабль/ракета	
douacua	asteroid				астероид	
						
mus	play(music)					
tomus	music	song, melody	音楽		музыка	
kamus	musical_instrument				музыкальный инструмент	
damus	musician				музыкант	
dafambenebeitomus	composer				композитор	
litmus	[musical]_note				[музыкальная] нота	
suhap	оctave				октава	
sudamus	musical_ensemble	music[al] group, band				
pusudamus	orchestra					
daneipusudamus	conductor					
sudaluamus	choir	glee				
						
						
toi	same_(not_other)				тот же самый	
tou	other	another	他の		другой	
netou	replace	change			сменить	
						
						
						
						
lua	do_voice	bark, meow	声を出す		голосить	
luapupun	shout		大きい声を出す			
lalua	voice		声		голос	
luamus	sing		歌う		петь	
toluamus	song_(consisting_in_core_of_actual_singing)		歌	曲	песня	
daluamus	singer		歌手		певец	
maluamus	karaoke		カラオケ		караоке	
mofmus	(verb)_dance		踊る		танцевать	
tomofmus	(noun)_dance		ダンス		танец	
lamofmus	dancing		ダンス			
						
luaba	pronounce				произносить/произнести	
laluaba	pronunciation				произношение	
sangausluaba	accent_(way_of_pronouncing_words_in_a_language)				акцент	
						
toluakon	consonant_[sound]				согласный звук	согласная
toluanokon	vowel_[sound]				гласный звук	гласная
littoluanokon	vowel_[letter]				согласная [буква]	
littoluakon	consonant_[letter]				гласная [буква]	
sutoluanokon	diphthong				дифтонг	
						
						
						
fambeniku	intend/decide	gonna, going to, plan			намереваться	собираться, планировать
tofambeniku	deicision/intention				намерение	план[ы]
nikifambeniku	intend					
difambeniku	make_up_one's_mind				запланировать	решить, собраться
						
						
suda	group_of_people				группа [людей]	
	nation					
						
dagepungajinpia	crowd				толпа	
nenugofua	throw				бросить (в воздух)	кинуть
nenigofua	launch_(cause_to_fly)				запустить (в полёт)	
nesenigofua	fly_(applying_one's_own_force)				лететь (посредством собственных сил)	
negofuaci	(verb)_drop				сбросить	
						
nesenugofua	jump				прыгать/прыгнуть	
						
pal	be_injured	be broken	怪我している		поврежденный	
nopal	not_be_injured		無事		не повреждённый	целый
lapal	injury	wound	傷/怪我		повреждение	рана
tonodubeikuc	what's_left_after					
tonodubeikucpal	scar		傷跡		шрам	
tonodubeikucgo	trace[s]	footprint	足跡		след (в широком смысле)	
tonodubeikuckonbuckiebugo	footprint	trace[s]			след (от ходьбы)	
fommentonbutenpet	fingerprint				отпечатки [пальцев]	
kumkucfaia	ash[es]		灰		зала	
tonodubeikucdonenokobebeu	ruins/debris				руины	
						
nepal	injure	hurt, break	傷つける		повредить	
dipal	get_injured	break	傷つく	怪我する	повредиться	
palbenomokie	be_broken		壊れている		сломанный	
dipalbenomokie	become_broken	break	壊れる		сломаться	
nepalbenomokie	cause_to_be_broken	break	壊す		сломать	
						
						
bun	be_in_danger		危ない状況にいる		быть в опасности (от)	
bin	be_safe		安全な状況にいる		быть в безопасности (от)	
tuabin	be_careful		気をつける		осторожный	
dobun	dangerous		危ない		опасный	
labun	fact_of_being_in_danger	danger	(名詞)_危険		опасность	
todobun	dangerous_thing	danger				
dobin	safe	secure			безопасный	
ladobin	safety	security			безопасность	
nebin	protect	defend			защищать/защитить	
lanebinse	self-defense				самозащита	
nenogabun	(verb)_rescue	save			спасти	
lanenogabun	(noun)_rescue				спасение	
fabun	risk				рисковать	
fajusbun	[act]_crazy					
peifajusbun	be_crazy_(character_trait)	be mad, be insane			сумасшедший	
fabundimeu	risk_life				рисковать жизнью	
						
nabun	be_scared	be afraid	怖がる	怖い	бояться	страшно
hunabun	(verb)_fear					
nenabun	scare				пугать/напугать	испугать
donabun	scary				страшный	
nenabunbenopa	scare_away				спугнуть	
lanabun	(noun)_fear	fright			страх	
					паниковать	
dapeinabun	coward				трус	
dafepeinabun	(rude)_person_prone_to_be_scared	pussy			ссыкло	
peunabun	brave				смелый	отважный
lapeunabun	bravery				смелость	отвага
dio	story		ストリー	話	история	
diohua						
diomaie	fairytale		物語		сказка	
						
ba	speak/say				говорить/сказать	
duiba	reply	respond			сказать в ответ	ответить
bakopia	have_a_conversation	converse, talk			разговаривать	
labakopia	conversation	talk, discussion			разговор	
gausbakopia					общаться	
						
len	language		言語	言葉	язык (речь)	
					называться	
kam	word		単語	言葉	слово	
kamto	noun				существительное	
kamfa	verb				глагол	
kamsanto	adjective				прилагательное	
kamsanfa	adverb				наречие	
						
						
						
toba	phrase				фраза	слова
tobajin	[conversation]_topic	subject			тема [разговора]	
						
lus	write		書く		писать	
lit	letter(character)		字	文字	буква/символ	
sulitgau	alphabet				алфавит	
lit'tcin	Chinese_character	hanzi, kanji, hanja	漢字		[китайский] иероглиф	кандзи, ханьцзы, ханча
sulit'tcin	Chinese_script	hanzi, kanji, hanja	漢字		китайская письменность	иероглифы, кандзи, ханьцзы, ханча, китайское письмо
lit'roma	Roman_character		ラテン文字	ローマ字		
sulit'roma	Latin_script		ラテンアルファベット	ローマ字	латиница	
						
lit'slav	Cyrillic_character					
sulit'slav	Cyrillic_script				кириллица	
lit'arab	Arabic_character					
sulit'arab	Arabic_script				арабица	арабская вязь
'roma	Rome				Рим	
len'roma	Latin				латынь	латинский язык
gos'roma	Roman_Empire					
litkor	hangul				хангыль	
						
						
pap	paper		紙		бумага	
dalusdio	writer				писатель	
tolus	something_written	script				
tolusnesakohom	written_lesson(s)	textbook			учебник	
supapnesakohom	[paper]_textbook				[бумажный] учебник	
tolusnego	letter				письмо	
paplusnego	[paper]_letter		手紙		[бумажное] письмо	
						
pucpuane	click/press				нажать	кликнуть
topucbene	button		ボタン		кнопка	
topucbenelit	key_(on_a_keyboard)				клавиша	
buapuclit	keyboard		キーボード		клавиатура	
luspuclit	type_(with_keyboard)				печатать (на клавиатуре)	
puclittoutimoi	make_a_typo				опечататься	
lapuclittoutimoi	typo					
kiebul	(verb)_use_force				использовать силу	
kiebulne	(verb)_force				заставлять/заставить	
						
mai	allowed	ok[ay], cool, can, may	[[～]して[も]]いい		иметь право	можно
mau	forbidden	can't, mustn't	[[～]しては]いけない	だめ	не иметь права	нельзя
nemai	allow		許可する		разрешить	
nemau	forbid	ban			запретить	
maino	allowed_not_(to)	okay not to, don't have to			не обязан	
mauno	be_obliged_(to)	must, ought (to)			обязан	должен
maunoduifanejo	must_pay_back	owe			должен (всмысле долг)	задолжать
maitogepun	be_allowed_a_lot	be free				
	be_allowed_little(be_forbidden_a_lot)					
lamaitogepun	fact_of_being_allowed_a_lot	freedom				
hulamaitogepun	liberty					
						
						
hua	paint/draw		描く		рисовать	
lahua	(action)_painting/drawing	art			рисование	
dahua	artist_(person_who_paints/draws)				художник	
tohua	(noun)_painting/drawing	picture	絵		рисунок/картина	
						
nebeisandokanbeso	(verb)_[visual]_design				делать дизайн	
danebeisandokanbeso	[visual]_designer				дизайнер	
						
						
						
						
						
nei	control	administer, be in charge, run, manipulate	支配する		управлять	
neu	obey		従う	了解, かしこまりました	подчиняться	
pinei	influence	affect			влиять/повлиять	
donei	be_controlled					
						
fa	do	play (a game)	する	やる	делать	
fa	act					
tua	try	attempt	試みる	してみる,トライ,挑戦する	пробовать	попробовать
tekkesei	(verb)_experiment					
putua						
						
li	good	nice	いい		хороший	
lu	bad		悪い		плохой	
nolu	not_bad	be ok[ay], be alright	悪くない	大丈夫	неплохой	нормальный
notullu	not_too_bad	satisfactory			удовлетворительный	сносный
notilli	good_enough	decent				
						
						
dil	have_a_deal	ok[ay], alright			иметь договорённость	
ladil	deal				договорённость	
dokdil	contract				контракт	
						
jan	be_in_state_of		[～]状況にいる	[～]状態にいる	быть в положении/состоянии	
lajan	state		状況/状態		положение/состояние	
						
joi	happy	glad	うれしい	喜ぶ	рад (из-за)	радостный
jou	sad	upset	悲しい	悲しむ	грустный (из-за)	
lajou	sadness				грусть	
falikbacjoi	(verb)_smile				улыбаться/улыбнуться	
likbacjoi	(noun)_smile				улыбка	
liobukan	tear[s]				слезы	
faliobukan	cry_(with_tears)				плакать (слезами)	
joulua	cry_(with_voice)				плакать (голосом)	реветь, ныть
fi	enjoy		好き			
pusfi	prefer				предпочитать	
topusfi	preference				предпочтение	
gapusfi	prefer_most	favo[u]rite			[больше всего] предпочитать	
lanali	pleasure				удовольствие	
donali	pleasant				приятный	
donalu	unpleasant				неприятный	
dofisosimpil	beautiful_in_childishness				красивый ребячеством	миленький, милый, хорошенький, прелестный
dofisonokonfalu	beautiful_in_innocence				красивый невинностью	миленький, милый, хорошенький, прелестный
domoinaponbefapua	such_that_you_want_to_give_care_to				такой, о котором хочется заботиться	миленький, милый, хорошенький, прелестный
nia	cute	adorable	可愛い		хорошенький	миленький, милый, прелестный
nokonfalu	not_in_contact_with_evil	innocent	純粋		невинный	
						
najandomoi	be_satisfied	happy	満足している		быть удовлетворённым	
lanajandomoi	satisfaction		満足		удовлетворённость	удовлетворение
nenajandomoi	bring_satisfaction	satisfy	満足させる		удовлетворять/удовлетворить	
moi	want		望む	ほしい,したい,[～]たい	хотеть	
mou	diswant		嫌	したくない		
fai	have_fun		楽しむ	楽しい	(субъекту) весело/увлекательно (из-за)	
dofai	(adj)_amusing	fun	楽しい		весёлый/увлекательный	
fau	be_bored					
dofau	boring		つまらない		скучный	
lafai	amusement	fun			веселье	
nefai	amuse/entertain	amusing, entertaining			развлекать	
hal	laugh		笑う		(субъекту) смешно (над)	смеяться
lahal					смех	
nehal	(verb)_make_laugh	joke			смешить	
tuanehal	(verb)_joke	kidding			шутить	
luahal	laugh_out_loud	laugh			смеяться (в голос)	
dohal	funny				смешной	
pudohal	hilarious					
lanehal	(noun)_humor/joke	humour			шутка	
nejandohal	put_(someone)_in_a_funny_situation	mock, make fun			прикалываться/приколоться	
fainejandohalkohin	have_fun_putting_(someone)_in_a_funny_and_humiliating_situation	mock, bully, make fun			издеваться	
santuanehal	one's_style_of_joking	sense of humo[u]r			тип юмора	чувство юмора
						
						
diohal	comedy				смешная история	комедия
datiobanehal	comedian				комик	
						
na	feel		感じる		испытывать чувство/эмоцию (сигнализирующую о)	чувствовать
tona	feeling	emotion	感情		чувство/эмоция	
nikifamau	guilty					
	guilty					
						
folu			悪く思う		думать плохо (о ком-то или чём-то)	
						
fonikifamau	(verb)_suspect	blame				
fokem	suspect_(of_commiting_a_crime)				подозревать [в совершении преступления]	
						
dufolu	forgive		許す		простить	
henofolu	ask_for_forgiveness	apologize	謝る		просить прощения	извини[те]
						
peinodisum	prone_to_stay_the_same	be stable, be smooth			стабильный	постоянный, неизменчивый
peidisum	prone_to_change	be unstable			нестабильный	непостоянный, изменчивый
						
famoiban	aggressive				проявлять агрессию	
lafamoiban	aggression				проявление агрессии	
fadoso	behave				вести себя	
						
hun	respect		尊敬する		уважать	
fahun	polite_(act_out_of_respect)				проявлять уважение	
fadosohun	polite_(behave_respectfully)	nice			быть вежливым	
hin	disdain				презирать	
fahin	rude				вести себя грубо	
dohin	be_disdained				презираемый	
nenadohin	humiliate_(make_feel_disdained)	insult			заставить почувствовать себя униженным	унижать, унизить
banenadohin	(verb)_insult_(with_words)				оскорблять/оскорбить	
lanenadohin	(f)act_of_being_caused_to_feel_disdained	humiliation			унижение	
nejandohin	humiliate_(put_in_a_disdaining_position)	insult			поставить в унизительное положение	унижать/унизить, опозорить
lanejandohin	(f)act_of_being_put_in_a_disdaining_position	humiliation			унижение	
lajandohin	disdaining_situation	shame			унизительное положение	стыд, позор
dohun	be_respected	be reputable, be honorable			уважаемый	
taldohun	be_worthy_of_respect	be reputable			заслуживать уважения	
jedohun	be_cool_(respected)				крутой (в смысле уважаемый)	
jetaldohun	be_cool_(worthy_of_respect)					
						
						
nataldohun	be_proud_(of)				гордиться	
nataldohin	be_ashamed_(of)				стыдиться	
lanataldohin	[feeling_of]_shame				чувство стыда	стыд
pon	be_important	matter	大事		важен	важно
						
						
						
dei	true	yes, real, right	本当	うん,はい,そう[です]	истина	да, правда, верный
jedei	yeah	yep			ага	
deu	false	no, fake, wrong	本当ではない	違う,う～ん,いいえ	неистина	нет, неправда, ложь, неверный
jedeu	nope				неа	
gadei	completely_true	exactly			абсолютео верно	
fotodei	be_convinced_of_something_that_is_actually_true	be right			иметь мнение, соответствующее действительности	прав
fotodeu	be_convinced_of_something_that_is_actually_false	be wrong, be mistaken			иметь мнение, не соответствующее действительности	неправ, заблуждаться, ошибаться
podei	really		本当に		реально	
cadei	[...]right[?]					
						
fali	do_a_good_thing		いいことをする		[с]делать что-то хорошее	
falu	do_a_bad_thing		悪いことをする		[с]делать что-то плохое	
duifali	repay	thank			ответить добром на добро	отблагодарить, отплатить
duifalu	(verb)_revenge				мстить/отомстить	
laduifalu	(noun)_revenge				месть	
						
maie	do_magic		魔法を使う		делать волшебство (заключающееся в)	колдовать
lamaie	magic		魔法		волшебство	магия
damaie	person_who_has_magical_(supernatural)_abilities	mage	魔法使い		волшебник/волшебница	
damaieso	clairvoyant/psychic				ясновидящий	экстрасенс
mumaie	wizard				волшебник	маг, колдун
mimaie	witch				волшебница	ведьма, колдунья
tobamaie	[magic]_spell				заклинание	
						
jus	be_extraordinary	unique, special	不思議	変	необычный	
jis	be_ordinary	normal, common	普通		обычный	нормальный
lijis	be_classic				классический	
lujis	be_banal				банальный/тривиальный	
lijus	be_special				особенный	особый, уникальный
lujus	be_weird	be strange			странный	
najus	be_surprised		驚く	びっくりする	удивляться/удивиться	
donajus	be_surprising				удивительный	
najusgemogai	be_shocked				быть в шоке	
nenajus	(verb)_surprise				удивлять/удивить	
nenajusgemogai	(verb)_shock				шокировать	
dinajis	get_used_(to)	accustom			начать ощущать обычным	привыкать/привыкнуть
najis	be_used_(to)				ощущать обычным	
						
najusli	be_amazed				приятно удивлен	
donajusli	be_amazing				потрясающий	
jedonajusli	(informal)_amazing	awesome, insane, crazy, sick			офигительный	офигенный, потрясный, крутой, огонь
jisnolu	be_normal	fine			нормальный	
						
						
bafolu	critisize				критиковать	
						
						
neno	cause_not				сделать так, чтобы не	
gaus	all_in_general					
lafanejannotallugaus	discrimination				дискриминация	
						
potua	on_purpose				нарочно	специально
nopotua	accidentally				ненарочно	случайно
						
nojole	busy		時間がない	忙しい	не иметь времени	занят
jole	have_time	free, not busy, available	時間がある		иметь время	свободен
						
pic	pull		引く		тянуть	
puc	push	press	押す		давить	
lapuc	pressure				давление	
puctinli	(verb)_massage				делать массаж	
lapuctinli	(noun)_massage				массаж	
						
picsecu	pull-up					
pucsecu	push-up					
						
pucsao	squeeze				сжимать/сжать	
picnepun	stretch				растягивать/растянуть	
						
	clasp					
						
jobenejo	share				делиться (чем-то с кем-то)	
peijobenejo	generous				щедрый	
lapeijobenejo	generosity				щедрость	
peujobenejo	not_prone_to_share	greedy			жадный	
						
						
kuk	cook		料理する	作る	готовить (пищу)	
lakuk	cooking				готовка	
heiakuk	kitchen		台所	キッチン	кухня	
dakuk	person_who_cooks	chef, cook			повар	
						
						
bapajin					разговаривать вживую	
bapajun					общаться дистанционно	
baden					разговаривать [посредством электроники]	
balua	(verb)_[voice]talk				говорить [голосом]	
badenlua	voicetalk_via_electronic_device	talk, talk on the phone			общаться голосом посредством электронного устройства (по телефону, скайпу и т.п.)	
nibadenlua	be_in_voicetalk_via_an_electronic_device	be on the phone				
badenlus	communicate_in_written_form_via_an_electronic_device	chat, text			переписываться [посредством электронного устройства]	
nelabadenlua	[make_a_phone]_call				звонить/позвонить (кому-то по телефону, скайпу и т.п.)	
nenolabadenlua	hang_up				прекратить звонок	повесить трубку
kabadenlua	[tele]phone				телефон	
						
dahunenogabun	hero				герой	
						
pul	adult		大人		взрослый	
pil	child		子供		ребенок	
simpil	childish/infantile		子供っぽい		инфантильный	
						
kis	kiss		キスする		целовать	
bukis	lips		唇		губы	
						
						
						
sankopiasoi	structure					
						
san	type	kind, sort, manner, way, form	種類/[やり]方/ふう		тип/способ	вид
sanmo	method				метод	
san	how	style				
						
lek	decide/choose		選ぶ		выбрать/решить	
tolek	option	decision, choice			выбор	решение
						
						
						
						
						
						
						
						
						
						
						
kai	be_open		開いている		открытый	
kau	be_closed		閉まっている		закрытый	
nekai	[cause_to_be]_open		開ける		открывать/открыть	
nekau	cause_to_be_closed	close	閉める		закрывать/закрыть	
dikai	[become]_open		開く		открываться/открыться	
dikau	become_closed	close	閉まる		закрываться/закрыться	
						
miau	cat		猫		кот/кошка	
pimiau	kitty		猫ちゃん			
pilmiau	kitten		子猫		котёнок	
dog	dog		犬		собака	пес
pildog	puppy		子犬		щенок	
maur	ant				муравей	
tucu	up		上へ		наверх	
tuci	down		下へ		вниз	
						
dake	who		誰		кто	
data	he/she		あの人	この人,その人	он/она	
muta	he/him		彼		он	
mita	she/her		彼女		она	
datagau	they/them		あの人たち	彼ら	они	
dagau	everybody	everyone	みんな[の人]		все	
danel	somebody	someone	だれか		кто-то	
dagai	nobody	no-one	だれも		никто	
						
pake	where_(as_a_location)		どこ		где	
tutopake	where_(as_a_direction)				куда	
						
						
						
geke	how_much/many	how much, how many			сколько	насколько
gepun	a_lot	really, very, many, much	たくさん/とても	いっぱい	много/очень	
gepin	small quantity/number	few, little	あんまり		мало	
genajus	so_[much]		すごく	やばい,ちょー		
geta	that_[much]	so	そんなに		столько	
gepe	so…that...	so			настолько...что	
genel	to_some_extent	[a] little	ある程度	ちょっと	в некоторой степени	немного
nogepin	quite	pretty	結構		достаточно	
						
leke	at_what_time(as_question)	when	いつ		когда (в вопросе)	
lepe	when(as_clause_link)				когда (как соединительное слово)	
pole	during	when, while				
legau	always	all_the_time			всегда	
legai	never				никогда	
lenel	sometimes				когда-то	
leta	at_that_time				в то время	тогда
						
pokieke	by_[doing]_what	how			посредством чего	как
posanke	in_what_kind_of_way	how			каким образом	как
poke	in_what_way	how				
						
cesanke	what_kind_[of]				какого типа	какой
cesanta	such	like that			такого типа	такой
						
						
						
lelai	day_time	day			светлое время суток	день
lelau	night				тёмное время суток	ночь, вечер
nimlelai	middle_of_the_day					
nimlelau	middle_of_the_night					
ganimlelai	noon				полдень	
ganimlelau	midnight				полночь	
						
ledilai					рассвет	
ledidilai						
lenikudilai						
lenidilai						
lenikidilai	morning				утро	
						
ledilau					сумерки	
ledidilau						
lenikudilau						
lenidilau						
lenikidilau	evening				вечер	
						
						
fambesa	deduce				логически вывести	
lafambesa	deduction	logic, reasoning			логика	
celafambesa	logical				логичный	
sobesa						
nabesa						
						
						
fambefo						
sobefo						
nabefo	have_faith_(in)	believe	信じる		верить	
lanabefo	faith					
fampuahom	analyze	analyse			анализировать	
						
puslisei	should				лучше если	
						
						
pufo	be_sure				быть уверенным	
gafo	be_100%_sure				быть на 100% уверенным	
dopufo	certain					
dogafo	certain					
podogafo					без капли сомнения	точно
						
kif	early		早い		рано	
kuf	late		遅い		поздно	
tulkif	too_early				слишком рано	
tulkuf	[too]_late				слишком поздно	опоздать
notulkuf	be_not_too_late	make it, on time			успеть	
nokuf	be_not_late				вовремя	
						
bak	bag		かばん		сумка/пакет	
bakbuluk	backpack				рюкзак	портфель
						
sil	slide		滑る		скользить (по)	
silbenoseltai	slip				подскользнуться	
dosil	slippery				скользкий	
bua	board		板/ボード		доска	
ton	stick	stick-shaped object	棒		длинный твёрдый вытянутый предмет, однородный в разрезе	палка
						
konbucsil	pat				гладить [рукой]	
buasillia	surfboard				доска для сёрфинга	
buasilliahiedoi	snowboard				сноуборд	
tonsilliahiedoi	ski				лыжи	
butsilliahiedou	skates				коньки	
lasilliahiedou	ice-skating	ice skating, iceskating			катание по льду	фигурное катание
						
hutogausfajisli	tradition				традиция	
	culture					
	ritual					
danegau	God		神		бог	
danegaulu	devil				дьявол	
						
						
dofambefoku	be_supposed_[to]	should			должен (по логике, по идее)	
						
						
dipunsao	swell				раздуться/распухнуть	
						
napon	(feeling,verb)_care		大事に思う			ценить
naponbefapua	give_care_(to)	take care, care	大事にする		заботиться	
tonapon	value(what_one_cares_about)				то, что ценно и дорого сердцу	ценности
donapon	dear				дорогой [сердцу]	ценный
nonapon	be_indifferent_(to)	not care (about)	関心がない		быть безразличным (к)	плевать, неважно
lanonapon	indifference				безразличие	наплевательство
peinaponbefapua	caring	thoughtful			заботливый	
maunodiu	be_responsible				нести ответственность	отвечать
tomaunodiu	responsibility				ответственность	
namaunodiu	feel_responsible				чувствовать себя ответственным	
fikonapon	(verb)_love_(cherish)		愛する		любить (ценить)	
lafikonapon	(noun)_love		愛		любовь	
dafikonapongosse	patriot		愛国者		патриот	
lafikonapongosse	patriotism		愛国		патриотизм	
						
henonapon	never_mind		気にしないで		не парься	забей
mesennufam	by_the_way	btw	っていうか	てか	кстати	
podomonofoku	actually		実は		вообще-то	
feke	what_the_fuck	wtf				
jedonajus	oh_my_god	omg	やばい		боже мой	
jedohal	(slang)_funny	lol				
jejus	wow					
jedojoi	yay		やった[！](何かいいことが起こったとき)		ура	
tcidei?nofacfofa	oh[...]					
pojedoso	[...]huh					
joimit	(neutral)_hi/hello		こんにちは	やっほ[ー]	рад встрече (нейтральное приветствие)	привет, здравствуйте
joimitlemja	nice_to_meet_you		はじめまして		приятно познакомиться	
jejoimit	hi/hey					
joimithute	(politely)_hello	good morning,good afternoon,good evening			здравствуйте	
joikohunfali	be_grateful	thanks, thank you	ありがとう[ございます]		благодарен	спасибо
menom	my_name_is				меня зовут	
bajoikohunfali	say_thank_you	thank			сказать слова благодарности	(по)благодарить, сказать спасибо
joifali	you're_welcome		どういたしまして		рад сделать доброе дело (в ответ на спасибо)	пожалуйста
joinepusfei	glad_to_help	you're welcome			рад помочь	пожалуйста
nalufalu	be_sorry_(experience_a_feeling_of_guilt)		ごめん[なさい]		каяться	сожалеть, извини[те]
beutofeudiu	no_problem	ok[ay], sure		うん	без проблем	
bagaijul	no_objections	ok[ay]		うん	нет возражений	ладно, хорошо
joitegobepa	welcome				добро пожаловать	
banalufalu	say_sorry	apologize, apologise			извиняться/извиниться	
bajoimit	say_hello				здороваться/поздороваться	
lahenofolu	apology				извинение	
tefalugai	it's_okay(as_a_reply_to_an_apology;_lit._you_did_nothing_bad)					
notal	not_at_all_(as_a_reply_to_thanking_or_to_an_apology)		いいえ_(感謝への返事)		не за что (в ответ на спасибо)	не стоит
joisoteduson	good_morning(saying_to_someone_who_just_woke_up)				доброе утро (человеку, который только что проснулся)	
sonli	sleep_well	good night	おやすみ[なさい]		спокойной ночи	
hemegaujoi	congratulations		おめでとう[ございます]		поздравляю	
hemegaujoidiadimei					[поздравляю] с днём рождения	
dofalu	[oh]_no_(when_something_bad_happened)				о нет (когда случилось что-то плохое)	
nomogafo	you_never_know				нельзя быть полностью уверенным	кто знает
tenajanke	how_is_your_mood[?]	how are you[?], how are you [doing][?]	(あなたは)_[お]元気[[です]か][？]		как настроение?	как дела[?]
joinikimit	[good]bye				рад был увидеться	до свидания, пока
joinikiba					рад был пообщаться	до свидания, пока
mittepusku	see_you_later	bye			увидимся (как прощание)	до свидания, пока
bakotepusku	talk_to_you_later	bye				до свидания, пока
niofam	well[...]		考えてみると	考えると	надо подумать	ну
heso	(when_trying_to_get_someone's_attention)_hey[!]		おい[！]		эй	
namaitin	[feel]_relieved	thank god	よかった[！]		чувствовать облегчение	слава богу
napal	ouch[!]		痛い[！]		ай (когда больно)	больно
notua	oops				ой (когда сделал что-то непреднамеренно)	
podofeifambeso	of_course		もちろん		разумеется	конечно, очевидно
pojoi	with_pleasure		喜んで		с радостью	
hemegau	let's				давай(те)	
						
						
mehom	I_understand	I see, ok[ay]	なるほど		я понимаю	понятно, ясно
hehute	please(politely)		[～して]ください		прошу	пожалуйста
puhe	please(when_begging)				умолять	пожалуйста
puhe	beg					
pihe	ask_(someone_to_do_something)	ask for				
						
'krismas	Christmas				Рождество	
hemegaujoi'krismas	Merry_Christmas				поздравляю с Рождеством	
						
						
						
						
senleke	what_time_is_it_now[?]	what time is it[?]	今[は]何時[ですか][？]		сколько сейчас времени?	
						
naliseljandomoi	feel_good_because_of_succeeding_to_get_what_one_wants	be happy, be satisfied				
						
buna	heart		心		сердце (в бытовом смысле)	
						
tcoi	(verb)_taste		味わう		ощущать вкус	
butcoi	tongue		舌		язык (часть тела)	
kiebutcoikon	lick		舐める		лизать	
dofitcoi	delicious	yummy	美味しい		вкусный	
						
						
tuafoi	(verb)_hurry	rush	急ぐ		спешить	
notuafoi	not_hurry	take one's time				
						
						
famoi						
fanamauno						
						
						
sandomai	(adj)_correct	right			правильный	
sandomau	incorrect	wrong			неправильный	
fasandomai						
fasandomau	make_a_mistake				сделать ошибку	ошибаться/ошибиться
tofasandomau	mistake	error			ошибка	
nesandomai	cause_to_be_correct	correct			сделать правильным	поправлять/поправить, исправлять/исправить
						
						
						
						
feu	find_difficult		兼ねる		(субъекту) трудно (что-то)	
fei	find_easy		簡単だと思う		(субъекту) легко (что-то)	
dofeu	difficult	hard	難しい		трудный	сложный
dofei	easy		簡単		простой/легкий	
dofeunedu	be_difficult_to_stop	stubborn			упрямый	
peinodutua	prone_to_not_give_up	stubborn				
nepusfei	help				помогать/помочь	
nepusfeu	hinder				мешать/помешать	
						
peifonosefotodeu						
fafonosefotodeu						
						
						
kuclelin	soon	shortly			скоро	
kuclelun	not_soon				нескоро	
kuclegalin	in_a_moment	about [to]			вот-вот	
kiclelin	recently	just			недавно	
kiclelun	long_time_ago				давно	
kiclegalin	a_moment_ago	just			только что	
kuclelingemo	as_soon_as_possible	asap			как можно скорее	
kuclegeke	how_soon				как скоро	
cekiclelin	recent					
legenel	[a]_while					
lesim	at_the_same_time	simultaneously			одновременно	
modeukeitosamebio	as_far_as_I_know					
modeukeitomemmebio	as_far_as_I_remember					
ge	as...as...	as				
tisen	[from]_now	gonna	今から			сейчас
tusen	until_now	always	今まで		до настоящего времени	всегда
						
						
sobenebeitosim	[create]_copy				копировать	
tosobenebeitosim	(noun)_copy				копия	
sobefasim	copy_[action]	imitate			подражать	имитировать
lasobefasim	imitation				подражание	имитация
nebei	create	make, produce	作る		создавать/создать	делать
tonebei	creation	product			творение	создание
bei	exist		存在する	ある,いる	существовать/иметься	есть, быть
labei	existence				существование/наличие	
beu	not_exist	no	存在しない	ない,いない	не существовать	нет, нету
labeu	non-existence	lack				
						
nenosedo	resist				сопротивляться	
lanenosedo	resistance				сопротивление	
						
fomodei	believe_(something)_might_be_true	allow_for			считать возможным	допускать
moikofomodei	(verb)_hope	wish			надеяться	
lamoikofomodei	(noun)_hope				надежда	
dumoikofomodei	be_in_despair	lose hope			отчаяться	
ladumoikofomodei	despair				отчаяние	
						
fambeso	realize				осознать	
	admit					
						
kanbeso	see_(visually)				видеть (глазами)	
nafkan	look	watch			смотреть	
luibeso	hear				слышать	
naflui	listen				слушать	
						
sobio	recognize				распознавать/распознать	узнать
bio	be		である		быть/являться (кем-то/чем-то)	
dofeifambeso	obvious				очевидный	
dofainaf	interesting				интересный	
fainaf	find_interesting					
tofainaf	what_one_finds_interesting	interest			то, что интересно	
						
gobenopapuabin	evacuate				эвакуироваться	
						
fosim	agree				согласен	
fosum	disagree				не согласен	
						
bafu	complain				жаловаться	
ba	speak		話す/言う		говорить	
ba	say	claim			сказать	заявить
fi	like				любить (всмысле нравится)	нравиться
fu	dislike		嫌い		не любить (всмысле не нравится)	
pufu	hate		大嫌い		ненавидеть	
pufi	like_very_much	love	大好き		обожать	
						
negadosodei	prove	[be a] proof			доказывать/доказать	
						
togadofo	something_completely_certain	fact			нечто несомненное	факт
toganotaldofodeu	something_that_completely_doesn't_deserve_to_be_doubted	fact			нечто абсолютно не заслуживающее сомнений	факт
togadosodei	something_completely_seen_as_true	fact			то что абсолютно выглядит верным	факт
togadosodeu	disprove	be a disproof			опровергать/опровергнуть	
						
						
ga	completely					
gano	completely_not	not at all				
						
peifanejantal	prone_to_act_fair	fair, honest			склонный поступать справедливо	справедливый, честный
peifanejannotal	prone_to_act_unfair	dishonest			склонный поступать несправедливо	несправедливый, нечестный
peibakofo	prone_to_speak_honestly	straightforward, honest			искренний	честный, откровенный
peibakofodeu	prone_to_speak_dishonestly	dishonest			неискренний	скрытный, нечестный
peibagepun	talkative				разговорчивый	
						
nehumoi	inspire				вдохновлять/вдохновить	
lanehumoi	inspiration				вдохновение	
						
						
			頼む	<命令形>,お願い		
						
dagauspalbu	disabled_[person]				инвалид	
						
lakemkietomopuanei	corruption				коррупция	
tomopuanei	authority_power				полномочия	
						
doniofopon	be_serious				серьёзно	
nio	need	have, require	必要とする		нуждаться	надо, нужно, необходимо
mem	remember					
dumem	forget					
tomem	memory(thing)				память	
lamem	memory(action)				память	
duimem	recall					
tobaluspap	[paper]note				записка	
pilnojopau	orphan				сирота	
mapilnojopau	orphanage				детский дом	
						
moibefamso	(verb)_[day]dream				мечтать	
lamoibefamso	(noun)_[day]dream					
						
nenonaf	distract				не давать сосредоточиться	отвлекать/отвлечь
netunfu	annoy/bother	annoying, disturb			создавать дискомфорт (для кого-то)	напрягать, мешать, беспокоить
						
kasimda	robot	bot	ロボット		робот	
kasobakofodeu	lie_detector				детектор лжи	
						
						
fomo	have_confidence		できると思う	自信[が]ある,自信[を]持っている	быть уверенным [в своих силах]	
lafomo	confidence		できると思うこと	自信		
lafosemo	[self-]confidence				уверенность [в своих силах]	
namo			できるって感じる	自信[が]ある,自信[を]持っている		
lanamo			できるって感じること	自信		
						
tojinneima	politics				политика	
dajinneima	politician				политик	
lanodonei	liberty				независимость	свобода
fambenebei	invent	come up [with], make up			придумывать/придумать	
dafambenebei	inventor				изобретатель	
peifambenebei	creative				изобретательный	
lapeifambenebei	creativity				изобретательность	
danebei	creator	author			создатель	автор
						
gajindei	accurate	precise, exact			точный	
nogajindei	not_completely_accurate	approximate			неточный	
jindei	near_truth/reality	approximate, kind of, sort of, kinda			приблизительный	примерный
jundei	inaccurate					
gajin	precisely	exactly			именно	прямо, ровно
						
						
						
dakon	acquaintance		知り合い		знакомый	
danokon	stranger		知らない人	他人		
						
konli	be_friends_(with)		仲[が]いい		быть в хороших отношениях	дружить
konlu	be_enemies_(with)					
dakonli	friend		友達		друг	приятель
dofeikonli	easy_to_be_friends_with	friendly				
peikonli					дружелюбный	
dakongapusli	best_friend		親友		лучший друг	
lakonli	friendship		友情	仲良し	дружба	
dakonlu	enemy		敵		враг	неприятель
duidikonli	make_up_(with)	make peace	仲直りする		помириться	
						
tun	be_stressed	be tense		緊迫している	напряжен (из-за)	
tin	be_relaxed			リラックスしている	расслаблен (из-за)	
ditin	relax			リラックスする	расслабиться	
tinbu	be_[physically]_relaxed				физически расслаблен	
tinbi	be_calm		安心	落ち着いている	спокоен	
latun	stress	tension			напряжение	
						
ditinbi	calm_down		落ち着く		успокоиться	
tunfobun	be_worried	worry	心配する		беспокоиться	переживать, волноваться
tunfobunsenosel	be_worried_that_oneself_might_fail	be nervous				
tunfokuli	be_excited		わくわくする			
latunfokuli	excitement					
tunfu	experience_discomfort				испытывать дискомфорт	
latunfu	discomfort				дискомфорт	
tinfi	experience_comfort		安楽	楽	испытывать комфорт	
latinfi	comfort				комфорт	
dotinfi	be_comfortable				комфортный	удобный
dotunfu	be_uncomfortable				дискомфортный	неудобный
						
						
lasakohom	the_study_of	understanding			наука	
						
sannabefa	character_(of_a_person)	mentality				
sutopa	geographical_structure					
						
lasakohombi	psychology		心理学		психология	
dasakohombi	psychologist		心理学者		психолог	
lasakohomnesai	medicine(as_a_science)		医学		медицина	
						
lasakohomtoge	math[ematics]	maths	数学		математика	
dasakohomtoge	mathematician		数学者		математик	
lasakohomtogemodei	probability_theory		確率論		теория вероятностей	
lasakohomfom	geometry		幾何学		геометрия	
lasakohomlen	linguistics		言語学		лингвистика	языкознание
dasakohomlen	linguist		言語学者		лингвист	
lasakohomsutopa	geography		地理学		география	
lasakohombuc	physics		物理学		физика	
dasakohombuc	physisist		物理学者		физик	
lasakohomsutam	chemistry		化学		химия	
dasakohomsutam	chemist		化学者		химик	
lasakohomtomei	biology		生物学		биология	
dasakohomtomei	biologist		生物学者		биолог	
lasakohomki	history		歴史[学]		история	
dasakohomki	historian		歴史学者		историк	
lafampacincimen	philosophy		哲学		философия	
dafampacincimen	philosopher		哲学者		философ	
						
tam	atom	element	原子		атом	
sutam	molecule		分子_(化学)		молекула	
						
						
						
jeto	stuff					
goi	instead_(of)		(の)代わり(に)		вместо	заместо
negoi	replace				заменять/заменить	
tojo	property_(something_owned)				собственность	владение
dofikan	be_beautiful	be gorgeous, be pretty, be attractive	綺麗_(見た目がいい)		красивый	
ladofikan	beauty				красота	
dofukan	be_ugly		醜い		некрасивый	уродливый
ladofukan	ugliness				уродство	
						
kol	alcohol		[お]酒		алкогольный напиток	алкоголь
jankol	be_drunk		酔っ払っている		пьяный	
maginkol	bar	pub	酒場	バー,飲み屋	бар	
						
kol'uba	wine		ワイン		вино	
bir	beer		ビール		пиво	
						
						
sal	be_salty		塩っぱい		соленый	
maliasal	sea/ocean		海		море	
pumaliasal	ocean				океан	
matoklia	river		川		река	
malianomof	lake				озеро	
pimalianomof	pond					
maliagomakiu	flood				потоп	
matokliatai	waterfall				водопад	
lianaibegonucil	hot_spring				горячий источник	
tontailianaibegonucil	geyser				гейзер	
	institution					
						
	challenge					
patopagau	throughout				везде	всюду, повсюду
topagau	everywhere					
gapon	necessary					
jandofeudiu	be_in_trouble				быть в сложной ситуации	
lajandofeudiu	trouble				сложная ситуация	
hunkoneu	worship				поклоняться	
						
nabeitopua	be_motivated				быть мотивированным	
nenabeitopua	motivate				мотивировать	
lanabeitopua	feeling_of_being_motivated	motivation			чувство мотивации	мотивация
lonenabeitopua	motivating_thing	motivation			то, что мотивирует	мотивация
nedunabeitopua	demotivate				демотивировать	
topua	purpose				цель	
kieneinenomoso	(verb)_censor				цензурировать	
lakieneinenomoso	censorship				цензура	
nabundofolu	be_shy				стесняться	смущаться
saocualai	star				звезда	
saocullelai	sun				солнце	
saocullelau	moon				луна	
	constellation					
						
nodofoku	unexpected				неожиданный	
foku	expect	anticipate			ожидать (всмысле предвидеть)	предвидеть
	predict					
donomosaku	unpredictable				непредсказуемый	
fokuli	be_optimistic				ожидать хорошего	
dapeifokuli	optimist				оптимист	
fokulu	be_pessimistic				ожидать плохого	
dapeifokulu	pessimist				пессимист	
lafokuli	optimism				оптимизм	
lafokulu	pessimism				пессимизм	
						
domokanbeso	visible_(physically,with_one's_eyes)				видимый (визуально)	
donomokanbeso	invisible_(physically,with_one's_eyes)				невидимый (визуально)	
domoso	noticeable	visible			заметный	видимый
donomoso	unnoticeable	invisible			незаметный	невидимый
domoluibeso	audible				слышимый	
						
						
kaban	weapon				оружие	
bui	would				бы	
						
						
dosonomodei	unbelievable	incredible				
gedosonomodei	to_an_unbelievable_extent	incredibly, unbelievably				
						
haija	first				первый	
haija[OPP]	last				последний	
haidua	number_two_in_order	second			второй	
haitui	number_three_in_order	third			третий	
haifos	number_four_in_order	fourth			четвёртый	
haipet	number_five_in_order	fifth			пятый	
						
hai	be_in_order				быть упорядоченным	
hau	be_in_chaos	be chaotic			быть в хаосе	
lahai	order_(opposite_of_chaos)				порядок	
lahau	chaos	disorder			хаос	
nehai	cause_to_be_in_order	organize, organise, arrange			упорядочивать	
lanehai	act_of_causing_to_be_in_order	organization, organisation, arrangement			упорядочивание	
						
sutodosakofojin	reputation				репутация	
jin	about				близко	о, об, касательно, насчёт
						
moikofokujodiu	rely_(on)				полагаться	
falisenejantal[OPP]lu	cheat	deceive			жульничать	
kanesejantal[OPP]li	hacking_program_or_tool	hack, cheat			чит	
[TAIL_ADV]kie	by_(using)	with				
						
bakofo	speak_honestly	tell the truth			говорить честно	говорить правду
bakofodeu	speak_dishonestly	lie			говорить нечестно	говорить неправду, лгать/солгать, врать/соврать, обманывать/обмануть
tobakofodeu	something_that_is_said_dishonestly	lie			враньё	ложь, брехня
dabakofodeu	liar				лжец	лгун, врун
bom	explode	blow up	爆発する		взорваться	
labom	explosion		爆発		взрыв	
kabom	bomb				взрывное устройство	бомба
tonenugofuabom	grenade				граната	
tonnigofuabom	missile	rocket			ракета (снаряд)	
jomonpunkodosa	be_rich_and_famous	be successful (in), celebrity			богатый и известный	
dadosa	famous_person	celebrity			известный человек	знаменитость, звезда
jomonpun	be_rich				богатый	
jomonmikio	be_poor_(have_little_money)				бедный	
dosa	be_known	popular, famous			известный	
ladosa	(f)act_of_being_known_(of)	popularity, fame			известность	
latuanedosa	PR				пиар	
ladonosa	fact_of_not_being_known	oblivion				
ladodumem	fact_of_being_forgotten	oblivion				
lajandonosa	state_of_not_being_known	oblivion				
lajandodumem	state_of_being_forgotten	oblivion				
lajannosa	state_of_being_unaware	oblivion				
						
						
						
						
						
putui	thousand	1000			тысяча	
pulok	million_(1,000,000)				миллион	
punef	billion_(1,000,000,000)				миллиард	
pujadua	trillion_(1,000,000,000,000)				триллион	
						
met	meter		メートル		метр	
putuimet	kilometer	kilometre, km			километр	
piduamet	centimeter	centimetre, cm			сантиметр	
pituimet	millimeter	millimetre, mm			миллиметр	
pinefmet	nanometer_(one_billionth_of_a_meter)	nanometre			нанометр	
						
duadotpetfosmet	inch				дюйм	
noldottuinolfoshapmet	foot_(the_length_unit)				фут (мера длины)	
noldotnefjafosfosmet	yard_(the_length_unit)				ярд (мера длины)	
jaloknolneftuifosmet	mile				миля	
jahappetduamet	[nautical]_mile				[морская] миля	
						
						
kil	kilogram				килограмм	
pituikil	gram_(1/1000th_of_a_kilogram)				грамм	
pilokkil	milligram_(one_millionth_a_of_kilogram)				миллиграмм	
putuikil	thousand_kilograms	tonne, [metric] ton			тонна	
						
noldotfospetkil	pound_(0.45_kilograms)	lbs			фунт (мера веса)	
						
						
						
						
kem	commit_crime		犯罪を犯す		совершить преступление (заключающееся в)	
tokem	crime		犯罪		преступление	
dakem	criminal		犯罪者		преступник	
dadiukem	police_officer	policeman, cop	警官		полицейский	
sudadiukem	police		警察		полиция	
datuasalakikem	detective				детектив	следователь
madakem	prison	jail	刑務所		тюрьма	
nimadakem	be_in_jail				сидеть [в тюрьме]	
dinimadakem	go_to_jail				сесть [в тюрьму]	
dunimadakem	get_out_of_jail				выйти из тюрьмы	
						
fokembeten	arrest				арестовывать/арестовать	
dadofokem	person_suspected_in_commiting_a_crime	suspect			подозреваемый [в совершении преступления]	
dasa[law_(in_a_country/society)]	lawyer				юрист	
danesodeikem	prosecutor				прокурор	
danesodeukem	advocate				адвокат	
daleklajantal	judge				судья	
						
danei	person_in_control	boss, leader, manager			(сущ) главный	
daneigos	head_of_country(state)	president, prime minister			глава государства	президент
daneitio	boss_(at_work)				начальник	
daneu	subordinate_[person]				подчинённый 	
						
hudaneigos	king/queen/emperor				король	царь
mipaihudaneigos	king's_daughter	princess			дочь короля	принцесса
mupaihudaneigos	king's_son	prince			сын короля	принц
						
huda	Mister/Miss	Mr, Mrs, Miss			господин/госпожа	
sudaneigos	government				правительство	
sudanebeilesgos	parliament					
						
						
						
						
						
						
fafai	have_fun	play			веселиться	играть
faidiu	play_(a_game)				играть (в)	
tofaidiu	game				игра	
kafai	toy				игрушка	
						
fikohun	admire				восхищаться	восторгаться, восхищаться
lafikohun	admiration				восхищение	
dadofikohun	idol				идол	
tokuk	dish_(something_cooked)				блюдо	стряпня
sankuk	style_of_cooking	cuisine			стиль готовки	
	native					
dok	document	certificate	証		документ	
dokfabemo	[skill]_certificate				сертификат	
						
'inet	internet		インターネット		интернет	
nepa	put	add			поместить	
nepatu'inet	upload				выложить [в интернет]	
nebeitosimtu'inet	upload				загрузить (в интернет)	
nebeitosimti'inet	download				скачать (из интернета)	
nesejoti'inet	download					
						
magun	restroom	bathroom, toilet, WC	トイレ		туалет	
papmagun	toilet_paper		トイレットペーパー		туалетная бумага	
						
'mesa	table				стол	
						
'iapon	Japanese		日本の		(прил) японский	
gos'iapon	Japan		日本		Япония	
diohuamof'iapon	anime		日本のアニメ		аниме (японская мультипликация)	
diohuanomof'iapon	manga_(Japanese_comics)		日本の漫画		манга (японские комиксы)	
len'iapon	Japanese_[language]		日本語		японский [язык]	
da'iapon	Japanese_[person]		日本人		японец	
mon'iapon	[Japanese]_yen	JPY	[日本]円		йена	
tokuk'iapon	Japanese_[cuisine]		日本料理		японская кухня	
						
'tceh	(adj)_Czech		チェコの		(прил) чешский	
gos'tceh	(country)_Czech		チェコ		Чехия	
len'tceh	Czech_[language]		チェコ語		чешский [язык]	
da'tceh	Czech_[person]		チェコ人		чех	
						
'slovak	(adj)_Slovakian				(прил) словацкий	
gos'slovak	Slovakia				Словакия	
len'slovak	Slovak_[language]	Slovakian_[language]			словацкий_[язык]	
da'slovak	Slovak_[person]				словак	
						
						
serb	(adj)_Serbian				(прил) сербский	
gosserb	Serbia				Сербия	
lenserb	Serbian_[language]				сербский [язык]	
daserb	Serbian_[person]				серб	
						
'bulgar	(adj)_Bulgarian				(прил) болгарский	
gos'bulgar	Bulgaria				Болгария	
len'bulgar	Bulgarian_[language]				болгарский [язык]	
da'bulgar	Bulgarian_[person]				болгарин	
						
						
						
						
'ind	Indian		インドの		индийский	
gos'ind	India		インド		Индия	
da'ind	Indian_[person]		インド人		индус	
mon'ind	[Indian]_rupee		[インド・]ルピー		рупи (валюта Индии)	
pumaliasal'ind	Indian_ocean				индийский океан	
						
'frans	(adj)_French		フランスの		(прил) французский	
gos'frans	France		フランス		Франция	
da'frans	French_[person]	Frenchman, Frenchwoman	フランス人		француз	
len'frans	French_[language]		フランス語		французский [язык]	
						
'svis	(adj)_Swiss				швейцарский	
gos'svis	Switzerland				Швейцария	
da'svis	Swiss_[person]				швейцарец	
mon'svis	[Swiss]_Franc	CHF			[швейцарский] франк	
						
kurd	(adj)_Kurdish				курдский	
dakurd	Kurdish_[person]	Kurd			курд	
lenkurd	Kurdish_[language]				курдский_[язык]	
makurd	Kurdistan				Курдистан	
						
						
'afgan	(adj)_Afghan		アフガンの	アフガニスタンの	афганский	
da'afgan	Afghan_[person]		アフガン人		афганец	
gos'afgan	Afghanistan		アフガニスタン		Афганистан	
mon'afgan	Afghani_(the_currency_of_Afghanistan)	AFN	[アフガニスタン・]アフガニ		афгани (валюта)	
						
pers	(adj)_Persian				персидский	
dapers	Persian_[person]				перс	иранец
lenpers	Persian_[language]				персидский [язык]	
monpers	[Iranian]_rial	IRR			риал (иранская валюта)	
gospers	Iran/Persia				Иран/Персия	
dagospers	Iranian_[person]				гражданин Ирана	иранец
						
'irak	(adj)_Iraqi				иракский	
da'irak	Iraqi_[person]				иракец	
mon'irak	[Iraqi]_dinar	IQD			динар (валюта Ирака)	
						
						
						
turk	Turkish		トルコの		(прил) турецкий	
gosturk	Turkey		トルコ		Турция	
lenturk	Turkish_[language]		トルコ語		турецкий [язык]	
daturk	Turkish_[person]	Turk	トルコ人		турок	
monturk	[Turkish]_lira	TRY	[トルコ・]リラ		лира (валюта Турции)	
						
'eng	English		英		(прил) английский	
ma'eng	England		英国		Англия	
len'eng	English_[language]		英語		английский [язык]	
da'eng	English_[person]	Englishman, Englishwoman	英人		англичанин	
						
'brit	British		イギリスの		британский	
gos'brit	United_Kingdom	UK, [Great] Britain	イギリス		Великобритания	
da'brit	British_[person]	Briton, Brit	イギリス人		британец	
mon'brit	[Great_Britain]_pound	GBP	[イギリス・]ポンド		фунт (британская валюта)	
						
						
						
						
'vietnam	Vietnamese		ベトナムの		вьетнамский	
gos'vietnam	Vietnam		ベトナム		Вьетнам	
len'vietnam	Vietnamese_[language]		ベトナム語		вьетнамский [язык]	
da'vietnam	Vietnamese_[person]		ベトナム人		вьетнамец	
mon'vietnam	[Vietnamese]_dong		[ベトナム・]ドン		дон (вьетнамская валюта)	
tokuk'vietnam	Vietnamese_[cuisine]		ベトナムの料理		вьетнамская кухня	
						
'singapur	Singaporean				сингапурский	
gos'singapur	Singapore				Сингапур	
da'singapur	Singaporean_[person]				сингапурец	
mon'singapur	[Singapore]_dollar	SGD			[сингапурский] доллар	
						
						
'ame	related_to_the_people_of_the_US	American	アメリカの		американский	
gos'ame	[the]_United_States_[of_America]	America, [the] US[A]	アメリカ		Соединенные Штаты [Америки]	США, Америка
da'ame	American_[person]	American	アメリカ人		американец	
mon'ame	[US]_dollar	USD	[アメリカ・]ドル		доллар США	
						
'eston	Estonian		エストニアの		(прил) эстонский	
gos'eston	Estonia		エストニア		Эстония	
da'eston	Estonian_[person]		エストニア人		эстонец	
len'eston	Estonian_[language]		エストニア語		эстонский [язык]	
						
'latvi	Latvian				(прил) латышский	
gos'latvi	Latvia				Латвия	
da'latvi	Latvian_[person]				латыш	
len'latvi	Latvian_[language]				латышский_[язык]	
						
'lituan	Lithuanian				(прил) литовский	
gos'lituan	Lithuania				Литва	
da'lituan	Lithuanian_[person]				литовец	
len'lituan	Lithuanian_[language]				литовский [язык]	
						
'iud	Jewish		ユダヤの		еврейский	
da'iud	Jew		ユダヤ人		еврей	
len'iud	Hebrew		ヘブライ語		иврит	
gos'iud	Israel		イスラエル		Израиль	
[religion]'iud	Judaism		ユダヤ教		иудаизм	
						
'europ	European		ヨーロッパの		европейский	
da'europ	European_[person]		ヨーロッパ人		европеец	
ma'europ	Europe		ヨーロッパ		Европа	
sugos'europ	European_Union	EU	欧州連合	EU	Европейский Союз	ЕС
mon'europ	euro		ユーロ		евро	
						
'asia	Mongoloid	Asian	[東]アジアの		монголоидный	
'afrik	[Sub-Saharan]_African		アフリカの		негроидный	
da'afrik	[Sub-Saharan]_African_[person]		アフリカ人		африканец	
ma'afrik	[Sub-Saharan]_Africa		アフリカ		[Негроидная] Африка	
						
ma'asia	[East and Southeast]_Asia	Far East	[東]アジア		[восточная и юго-восточная] Азия	
da'asia	[East or Southeast]_Asian_[person]		[東]アジア人		человек из восточной или юго-восточной Азии	азиат
						
'slav	Slavic		スラブ		славянский	
						
'ital	(adj)_Italian		イタリアの		(прил) итальянский	
gos'ital	Italy		イタリア		Италия	
da'ital	Italian_[person]		イタリア人		итальянец	
len'ital	Italian_[language]		イタリア語		итальянский [язык]	
						
'grek	(adj)_Greek				(прил) греческий	
gos'grek	Greece				Греция	
da'grek	Greek_[person]				грек	
len'grek	Greek_[language]				греческий [язык]	
						
						
'espan	(adj)_Spanish		スペインの		(прил) испанский	
gos'espan	Spain		スペイン		Испания	
da'espan	Spanish_[person]	Spaniard	スペイン人		испанец	
len'espan	Spanish_[language]		スペイン語		испанский [язык]	
						
dan	(adj)_Danish		デンマークの		[прил] датский	
gosdan	Denmark		デンマーク		Дания	
dadan	Danish_[person]	Dane	デンマーク人		датчанин	
lendan	Danish_[language]		デンマーク語		датский [язык]	
						
'nederland	(adj)_Dutch				(прил) недерландский	голландский
gos'nederland	Netherlands				Недерланды	Голландия
da'nederland	Dutch_[person]	Dutchman, Dutchwoman			голландец	
len'nederland	Dutch_[language]				голландский [язык]	
						
						
						
'german	German		ドイツの		(прил) немецкий	
da'german	German_[person]		ドイツ人		немец	
len'german	German_[language]		ドイツ語		немецкий [язык]	
gos'german	Germany		ドイツ		Германия	
						
fin	Finnish		フィンランドの		(прил) финский	
dafin	Finnish_[person]	Finn	フィンランド人		финн	
lenfin	Finnish_[language]		フィンランド語		финский [язык]	
gosfin	Finland		フィンランド		Финляндия	
						
'norveg	(adj)_Norwegian				(прил) норвежский	
da'norveg	Norwegian_[person]				норвежец	
len'norveg	Norwegian_[language]				норвежский [язык]	
gos'norveg	Norway				Норвегия	
						
						
						
pol	Polish		ポーランドの		(прил) польский	
dapol	Polish_[person]	Pole	ポーランド人		поляк	
lenpol	Polish_[language]		ポーランド語		польский [язык]	
gospol	Poland		ポーランド		Польша	
monpol	[Polish]_złoty	[Polish] zloty	[ポーランド・]ズウォティ		злотый (польская валюта)	
						
'ukrain	Ukrainian		ウクライナの		(прил) украинский	
da'ukrain	Ukrainian_[person]		ウクライナ人		украинец	
len'ukrain	Ukrainian_[language]		ウクライナ語		украинский [язык]	
gos'ukrain	Ukraine		ウクライナ		Украина	
mon'ukrain	[Ukrainian]_hryvnia	hryvnya, hryvna, hrivna, gryvna, grivna, UAH	[ウクライナ・]フリヴニャ		гривна	
						
'belarus	Belarusian		ベラルーシの		(прил) белорусский	
da'belarus	Belarusian_[person]		ベラルーシ人		белорус	
len'belarus	Belarusian_[language]		ベラルーシ語		белорусский [язык]	
gos'belarus	Belarus		ベラルーシ		Беларусь	Белоруссия
mon'belarus	[Belarusian]_rouble	BYR, [Belarusian] ruble	[ベラルーシ・]ルーブル		[белорусский] рубль	
						
rus	Russian		ロシアの		(прил) русский	
darus	Russian_[person]		ロシア人		русский [человек]	
lenrus	Russian_[language]		ロシア語		русский [язык]	
gosrus	Russia	Russian Federation	ロシア		Россия	
monrus	[Russian]_rouble	[Russian] ruble	[ロシア・]ルーブル		[российский] рубль	
						
'soviet	related_to_the_Soviet_Union	Soviet	ソビエトの		советский	
da'soviet	Soviet_[person]		ソビエト人		советский человек	
gos'soviet	Soviet_Union	USSR	ソビエト[共和国]連邦	ソ連	Советский Союз	СССР
mon'soviet	[Soviet]_rouble		[ソビエト・]ルーブル		[советский] рубль	
						
						
'kazah	(adj)_Kazakh		カザフの		(прил) казахский	
da'kazah	Kazakh_[person]	Khazakhstani	カザフ人	カザフスタン人	казах/казашка	
len'kazah	Kazakh_[language]		カザフ語		казахский [язык]	
gos'kazah	Kazakhstan		カザフスタン		Казахстан	
mon'kazah	[Kazakhstani]_tenge	KZT	[カザフスタン・]テンゲ		тенге (валюта Казахстана)	
						
'uzbek	(adj)_Uzbek		ウズベクの		(прил) узбекский	
da'uzbek	Uzbek_[person]		ウズベク人		узбек/узбечка	
len'uzbek	Uzbek_[language]		ウズベク語		узбекский [язык]	
gos'uzbek	Uzbekistan		ウズベキスタン		Узбекистан	
mon'uzbek	[Uzbekistani]_soʻm	som, UZS	[ウズベキスタン・]スム		сум (валюта Узбекистана)	
						
'tcin	Chinese		漢		(прил) китайский	
da'tcin	Chinese_[person]		漢人	中国人	китаец/китаянка	
len'tcin	Chinese_[language]		中国語		китайский [язык]	
gos'tcin	China		中国		Китай	
mon'tcin	[Chinese]_yuan	CNY, RMB	[中国]元		юань	
						
'indones	Indonesian		インドネシアの		индонезийский	
da'indones	Indonesian_[person]		インドネシア人		индонезиец/индонезийка	
len'indones	Indonesian_[language]		インドネシア語		индонезийский [язык]	
gos'indones	Indonesia		インドネシア		Индонезия	
mon'indones	[Indonesian]_rupiah	IDR	[インドネシア・]ルピア		рупия (валюта Индонезии)	
						
'malai	(adj)_Malay	Malaysian	マレー	マレーシアの	малайский	
da'malai	Malay_[person]	Malaysian	マレー人	マレーシア人	малаец/малайка	
len'malai	Malay_[language]	Malaysian	マレー語	マレーシア語	малайский [язык]	
gos'malai	Malaysia		マレーシア		Малайзия	
mon'malai	[Malaysian]_ringgit	MYR	[マレーシア・]リンギット		ринггит (валюта Малайзии)	
						
'austral	Australian		オーストラリアの		австралийский	
da'austral	Australian_[person]		オーストラリア人		австралиец	
gos'austral	Australia_(as_a_state)		オーストラリア_(国)		Австралия (как государство)	
ma'austral	Australia_(as_an_continent)		オーストラリア_(大陸)		Австралия (как континент)	
mon'austral	[Australian]_dollar	AUD	[オーストラリア・]ドル		[австралийский] доллар	
						
'sved	Swedish		スウェーデンの		(прил) шведский	
da'sved	Swedish_[person]	Swede	スウェーデン人		швед/шведка	
gos'sved	Sweden		スウェーデン		Швеция	
len'sved	Swedish_[language]		スウェーデン語		шведский [язык]	
mon'sved			[スウェーデン・]クローナ		[шведская] крона	
						
'hungar	Hungarian		ハンガリーの		(прил) венгерский	
da'hungar	Hungarian_[person]		ハンガリー人		венгр/венгерка	
gos'hungar	Hungary		ハンガリー		Венгрия	
len'hungar	Hungarian_[language]		ハンガリー語		венгерский [язык]	
						
'kanada	Canadian		カナダの		канадский	
da'kanada	Canadian_[person]		カナダ人		канадец/канадка	
gos'kanada	Canada		カナダ		Канада	
mon'kanada	[Canadian]_dollar	CAD	[カナダ・]ドル		[канадский] доллар	
						
kor	Korean		朝鮮の		(прил) корейский	
dakor	Korean_[person]		朝鮮人	韓国人	кореец/кореянка	
lenkor	Korean_[language]		朝鮮語	韓国語	корейский [язык]	
goskortialai	[South]_Korea		韓国		[Южная] Корея	
goskortialau	[North]_Korea		北朝鮮		[Северная] Корея	
makor	Korea_(ethnicogeographically)		朝鮮		Корея	
monkortialai	[South_Korean]_won	KRW	[韓国]ウォン		[южнокорейская] вона (валюта)	
monkortialau	[North_Korean]_won	KPW	[北朝鮮]ウォン		[северокорейская] вона (валюта)	
						
'arab	(adj)_Arabic		アラブの		(прил) арабский	
ma'arab	Arab_world				арабский мир	
da'arab	Arab		アラブ人		араб/арабка	
len'arab	Arabic_[language]				арабский [язык]	
						
'islam	islam		イスラム		ислам	
da'islam	muslim_[person]		ムスリム		мусульманин/мусульманка	
'krist	Christianity				христианство	
da'krist	Christian_[person]		キリスト信者	クリスチャン	христианин/христианка	
						
dabu'europ	white_(belonging_to_the_Caucasian_race)	europeoid, European, Caucasian			европеоид	
dabu'asia	Asian_(belonging_to_the_Mongoloid_race)				монголоид	азиат
dabu'afrik	black_(belonging_to_the_race_of_Sub-Saharan_Africa)				негроид	
						
piduamon	one_hundredth_of_a_currency	cent			сотая доля единицы валюты	копейка, цент
-	-					
'kofe	coffee		コーヒー		кофе	
'tcai	tea		茶		чай	
'banan	banana		バナナ		банан	
pom	apple		りんご		яблоко	
'lemon	lemon		レモン		лемон	
'uba	grape		ぶどう		виноград	
'uba-leu	raisin				изюм	
'mandarin	mandarin_[orange]	tangerine			мандарин	
'arbuz	watermelon				арбуз	
'melon	melon				дыня	
						
ris	rice		米	ごはん	рис	
gof	egg		卵		яйцо	
'tcok	chocolate		チョコ		шоколад	
'tcis	cheese				сыр	
luk	onion		たまねぎ		лук	
tom	tomato		トマト		помидор	томат
gur	cucumber				огурец	
pot	potato		ジャガイモ		картофель	картошка
kap	cabbage		キャベツ		капуста	
mok	carrot		にんじん		морковь	
pip	pepper		ピーマン		перец	
fut	fruit/vegetable				фрукт/овощ/ягода	
soia	soy				соя	
mais	maize	corn	コーン	トウモロコシ	кукуруза	
maisbom	popcorn					
						
maspekgoffes	French_toast					
tesfutbol	jam				варенье	джем
mascelmesbol	dumplings				пельмени	
liofut	juice				сок	
goflias	caviar/roe		魚卵	イクラ, キャビア	икра	
						
'tcik	chicken		鶏	鶏肉	курица	
pig	pig/pork		豚		свинья	свинина
mua	cow	cattle	牛		корова	говядина
hos	horse		馬		лошадь	
pihos	pony		ポニー		пони	
pauk	spider		蜘蛛		паук	
'kanin	rabbit/hare					
ber	bear				медведь	
ber'tcin	panda				панда	
maus	mouse/rat					
bel	bee					
						
						
						
						
sem	be_married		結婚している		женат/замужем	
nosem	be_not_married				не женат/не замужем	
hesem	ask_to_marry	propose			сделать предложение [о женитьбе]	
lahesem	(f)act_of_asking_to_marry	proposal			предложение [о женитьбе]	
lasem	marriage				брак	
disem	get_married				жениться/выйти за муж	
dinosem	get_divorced				развестись	
ladinosem	divorce				развод (супругов)	
doksem	marriage_certificate				свидетельство о браке	
dasem	spouse				супруг/супруга	
misem	wife				жена	
musem	husband				муж	
mijomeudasem	widow				вдова	
mujomeudasem	widower				вдовец	
						
munikusem	fiancé	fiance, groom			жених	
minikusem	fiancée	fiancee, bride			невеста	
						
mipaudasem	mother-in-law				мать супруга или супруги	тёща, свекровь
mipaumusem					свекровь	
mipaumisem					тёща	
mupaudasem	father-in-law				отец супруга или супруги	тесть, свёк[о]р
mupaumusem					свёкр	свёкор
mupaumisem					тесть	
mukiodasem	spouse's_brother	brother-in-law			брат супруга или супруги	деверь, шурин
mukiomusem					деверь	
mukiomisem					шурин	
misemmukiomisem					жена брата жены	невестка
musemkio	sibling's_husband	brother-in-law			муж брата или сестры	свояк
mikiodasem	spouse's_sister	sister-in-law			сестра мужа или жены	золовка, свояченница
mikiomusem					золовка	
musemmikiomusem					муж сестры мужа	зять
mikiomisem					свояченица	
musemmikiomisem					муж сестры жены	свояк
misemkio	sibling's_wife	sister-in-law			жена брата или сестры	ятровка
						
musempai	son-in-law				муж дочери	зять
misempai	daughter-in-law				жена сына	сноха, невестка
paudasempai					сваты	
						
mupautia	step-father				отчим	
mipautia	step-mother				мачеха	
mupaitia	step-son				пасынок	
mipaitia	step-daughter				падчерица	
mukiotia	step-brother				сводный брат	
mikiotia	step-sister				сводная сестра	
						
naponsolse	be_selfish	egoistic			проявлять эгоизм	
danaponsolse	egoist				эгоист	
naponsolnose	be_altruistic				проявлять альтруизм	
danaponsolnose	altruist				альтруист	
sol	only	just	だけ		только	
						
kalufkan	camera	cam			камера	
kaluflui	microphone	mic			микрофон	
ka[playblack]kan	screen				экран	монитор
ka[playblack]lui	speaker				динамик	колонка
						
lufkan	take_a_photo/video_(of)	take a picture, take a video			снимать (на камеру)	
tolufkan	photo/footage				фотография/видеозапись	фото, видео, снимок
lufkanmof	take_a_footage_(of)	film, take a video, record			записывать на видео	снимать на видео
tolufkanmof	footage	video			видео[запись]	
lufkannomof	take_a_photo_(of)	take a picture			фотографировать	
tolufkannomof	photo	picture, photograph			фото[графия]	
						
luflui	record_sound				записывать (на микрофон)	
toluflui	recording_(of_sound)				аудиозапись	
						
tokanmof	video				видео	
tokannomof	image	picture			изображение	
tokannomofkotoba	image_with_a_phrase	meme			мем	
tobakotokannomof	sticker_(in_text_messaging)					
						
diokanmof	video-format_story_(such_as_movie,_TV_show,_cartoon)	movie, film, TV show, cartoon				
diolufkanmof	video-format_story_made_from_footage	movie, film, TV show			кино	фильм
makandiokanmof	movie_theater	cinema			кинотеатр	
						
diohuamof	cartoon		アニメ		мультфильм	мультик
diohuanomof	comics		漫画			
						
napal	feel_pain				испытывать боль	
lanapal	pain				боль	
lanapalbu	physical_pain				физическая боль	
tesnenonapal	painkiller	anasthetic			обезбаливающее	
lanapalbi	psychological_pain	mental pain			душевная боль	
lanapalbac	headache				головная боль	
donapal		hurt			болеть (о части тела)	
nenapal	make_feel_pain	hurt			причинять боль	
finenapal	be_sadistic					
lafinenapal	sadism				садизм	
dafinenapal	sadist				садист	
fidonenapal	be_masochistic					
lafidonenapal	masochism				мазохизм	
dafidonenapal	masochist				мазохист	
						
naponbepuctuse	(verb)_hug	give a hug	抱きしめる	ハグする,抱く	обнимать/обнять	
						
lanemofkiefam	psychokinesis	telekinesis			телекинез	
laluitofam	mind_reading	telepathy			чтение мыслей	телепатия
						
dokda	ID				удостоверение личности	паспорт
						
ganodonei	be_independent	be free			независимый	
laganodonei	independence	freedom			независимость	
						
gojunfai	(verb)_travel				путешествовать	
lagojunfai	(noun)_travel	travelling, tourism, trip, journey			путешествие	
dagojunfai	traveller	traveler, tourist			путешественник	
						
dafobeudanegau	atheist				атеист	
lafobeudanegau	atheism				атеизм	
						
kiebebeu	[run]_out_(of)	spend			расходовать/израсходовать	[по]тратить
kiepuagai	waste				потратить зря	
						
sudameikopia	family_(group_of_people_spend_their_lives_together)				семья (люди, живущие вместе)	
						
						
heiapoibu	room_for_washing_the_body	bathroom			ванная [комната]	
neleipoi	wash				мыть	
kanikneleipoifue	washing_machine				стиральная машина	
neleipoise	wash_oneself	take a shower			мыться	
						
jankunedimei	be_pregnant				беременна[я]	
lanenojankunedimei	abortion				аборт (беременности)	
mojankunedimei	be_fertile				фертильна	
nomojankunedimei	be_infertile				бесплодна	
moubenojopai	be_child-free					
damoubenojopai	child-free_person				чайлдфри	
						
les	rule/law				правило/закон	закономерность
lesgos	law_(in_a_country)				закон (в государстве)	
lesnekopiakam	grammar	syntax				
leslitkam	orthography					
sanhualit	font/handwriting				шрифт/почерк	
						
bakufalupuanenabun	threaten				высказывать угрозу	угрожу
						
nom	be_named		(と)名前を持っています	[と]いいます,[と]申します,って名前	называться	
tonom	name		名前		имя/название	
	personal_name	first name				
tonomsudahanjin	surname	last name, family name			фамилия	
						
						
najandomoukonofoku	be_disappointed	upset			быть разочарованным	
lanajandomoukonofoku	disappointment				разочарование	
donajandomoukonofoku	be_disappointing	disappoint			вызывающий разочарование	
						
ha	color	colour	色		цвет	
hagalai	white		白	白い	белый	
hagalau	black		黒	黒い	черный	
hagabil	grey	gray	灰色		серый	
						
hanol	red		赤	赤い	красный	
haja	yellow		黄色	黄色い	желтый	
hadua	green		緑[色]		зеленый	
hatui	cyan	blue	シアン		циан	
hafos	indigo_blue	blue	インディゴブルー	青,紺色	синий	
hapet	magenta	purple	マゼンタ		маджента	розовый
						
hapetlai	pink		ピンク		розовый	
hanolpet	orange		オレンジ		оранжевый	
hanolpetlau	brown		茶色	茶色い	коричневый	
hatuipet	sky-blue	blue	空色		голубой	
						
cudom	roof[top]		屋上		крыша	
heiacidom	basement				подвал	
						
duifa	react	respond	反応する		реагировать	
laduifa	reaction	response	反応		реакция	
						
heduhiba	shut_up[!]				заткнись	
						
danidio	character				персонаж	
pos	perform		演技する		выступать (перед публикой)	
lapos	performance_(live_show)				выступление	
laposbanehal	stand-up_(joke_performance)				стендап	
posdio	(verb)_act_(as_an_actor)				играть (персонажа)	
laposdio	(noun)_play_(in_a_theater)				театральное выступление	спектакль, пьеса
makanposdio	theater				театр	
laposmus	[live]_concert	live			концерт	
						
daposdio	actor/actress				актёр/актриса	
						
tolise	personal_gain				личная выгода	
falise	act_out_of_personal_interests				действовать в личных интересах	
						
gobepa	arrive_(at)	get, come, reach			приходить/прийти	
lagobepa	arrival					
gobenopa	leave_(a_place)				уходить/уйти	
digo	begin_to_go	depart, take off, get going			отправиться	пойти
						
pupun	huge	giant			огромный	гигантский
hupupun	enormous	gigantic				
pupin	tiny				крошечный	
kakantopupin	microscope				микроскоп	
						
lajanmafua	weather				погода	
lagausjanmafua	climate				климат	
						
bali	praise				хвалить	
balu	scold				ругать	
						
topuadoibac	pillow				подушка	
						
tio	(verb)_work		働く		работать (человеком, который...)	
latio	(noun)_work	job	仕事/バイト		работа	
matio	workplace	work			место работы	работа
datio	worker/employee				работник	
datiokopia	collegue				коллега	
jotio	employ					
dajotio	employer				работодатель	
dadojotio	employee				сотрудник	
nesejotio	hire				нанимать/нанять	
nenosejotio	(verb)_fire_(from_work)				увольнять/уволить	
sudatio	organization/company	organisation			фирма/компания	организация
						
nitio	be_on_(speaking_of_a_device)				быть включённым (об устройстве)	работать
nonitio	be_off_(speaking_of_a_device)				быть выключенным	
nenitio	turn_on_(a_device)				включить (устройство)	
nenonitio	turn_off_(a_device)				выключить	
						
						
						
						
						
lakie	usage				использование	употребление
bais	bicycle	bike			велосипед	
'motos	motorcycle	bike, motorbike				
						
naflaba	listen(what_someone_is_saying)				слушать (как кто-то говорит)	
sodoba	hear_(rumors,_news,_etc)				слышать (как кто-то говорит)	
						
tonegotoba	message				сообщение	
tonegotobalus	[text]_message				текстовое сообщение	
						
nalunalu	feel_bad_(for)	sympathy, pity, sorry			сочувствовать	жалеть
lanalunalu	sympathy	pity			сочувствие	
taldonalunalu	poor(deserving_sympathy)				заслуживающий сочувствия	бедный
						
						
kale	clock/watch				часы	
						
tohuabucel	tatoo				татуировка	тату
						
dokonlepunbenapon	have_been_in_contact_for_a_long_time,_and_as_a_result,_care				такой, к которому испытываешь привязанность	родной
donajisli	feel_ordinary_in_a_good_way	familiar			[ощущаться как] родной	
						
sit	sit		座っている	座る	сидеть (на)	
tosit	seat				сидение	
disit	become_seated	sit down	座る		сесть	
tositlin	chair		いす		стул	
tositlundoi	sofa				диван	
tositlundou	bench				скамейка	
						
dencul	lightning		雷		молния	
toluidencul	thunder				гром	
						
celbumu	condom				презерватив	
gocu	go_up	ascend			подниматься/подняться	
goci	go_down	descend			спускаться/спуститься	опускаться/опуститься
gopaluk	follow				следовать (за)	
gopalik	lead				идти впереди	вести
						
						
						
lasakutisaocualai	astrology				астрология	
						
moijannose	want_to_be_in_someone_else's_shoes	be jealous, be envious, envy			завидовать	
lamoijannose	a_desire_to_be_in_someone_else's_shoes	jealousy			зависть	
						
nebiopaise	adopt_(as_a_child)				усыновить/удочерить	
lanebiopaise	adoption				усыновление	
						
hugos	kingdom					
hugoscul	paradise/heaven				рай	
						
buc	physical	matter	物質的	物理的	материальный	физический
bic	non-physical					
						
hit	hit		打つ		ударить	
hitsek	chop				рубить/колоть	
kahitsek	axe				топор	
kiebugohit	kick		蹴る		пинать/пнуть	
hitkiebutenpetkau	punch					
butenpetkau	fist				кулак	
selnodohit	dodge				увернуться	
						
						
						
						
nekobebei	build		建てる		строить/построить	
nenokobebeu	destroy				разрушать/разрушить	
lanenokobebeu	destruction				разрушение (как действие)	
						
bakodanegau	pray		祈る		молиться	
tobakodanegau	prayer				молитва	
hedanegaunejanli	pray_(for)				молиться (за кого-то)	
mabakodanegau	praying_facility	church,temple,mosque,synagogue			храм	церковь
						
posim	as/like				подобно	как
						
lef	wait		待っている		ждать	
feilef	be_patient				терпеливый	
feulef	be_impatient				нетерпеливый	
						
subu	body		体		тело	
subumeu	corpse	body	死体		труп	тело
bombufui	sneeze		くしゃみが出る		чихать	чихнуть
bom[throat]	cough		咳が出る		кашлять	
						
nanojenbenukaibugin	yawn				зевать/зевнуть	
neha	cover_with_color	paint, dye			окрашивать/окрасить	красить/покрасить
tesneha	dye/paint_(as_substance)				краска	
						
neihe	(verb)_give_order				приказывать/приказать	
						
jototumokie	be_useful				полезный	
jo[OPP]totumokie	be_useless				бесполезный	
						
ponodone	by_oneself	automatically, [by] myself, [by] yourself, [by] himself, [by] ourselves, [by] themselves, [by] itself			самостоятельно	сам, автоматически
						
dipa	appear				появиться (где-то)	оказаться, попасть
ladipa	appearance(starting_to_be_in_a_location)				появление (где-то)	
dipa[OPP]	disappear	vanish			исчезнуть (из)	пропасть
ladipa[OPP]	disappearance				исчезновение	
nikidipa[OPP]	have_disappeared	gone				
						
nebeibucgasim	(verb)_clone				клонировать	
lanebeibucgasim	cloning				клонирование	
tonebeibucgasim	(noun)_clone				клон	
						
tofamsanmo	plan/strategy				план/стратегия	
						
tonufamsanmo	idea				идея	
						
lagintomeisimse	cannibalism		共食い	カニバリズム,人肉食,人食い	каннибализм	
						
cebugogedua	bipod					
cebugogetui	tripod					
						
lunaganio	be_addicted				страдать зависимостью (от)	
dilunaganio	become_addicted					
lalunaganio	addiction				зависимость (от наркотиков и т.п.)	
dalunaganio	addict				человек, страдающий зависимостью	наркоман
peidolunaganio	be_addictive				вызывающий зависимость	
teslunaganio	drug_(addictive_substance)				наркотик[и]	
dalunaganiokol	(noun)_alcoholic				страдающий алкоголизмом	алкоголик
						
lebiopil	childhood				детство	
						
luspuanodusa	(verb)_note_(write_to_remember)	take notes			записывать/записать (чтобы не забыть)	
toluspuanodusa	(noun)_note_(something_written_to_not_forget)	notes			записи	
						
nenososenaf	hiddenly_watch_or_listen_to_someone	spy			шпионить (за)	
nenososenaflui	eavesdrop				подслушивать/подслушать	
nenososenafkan	hiddenly_watch_someone	spy, peek			подсматривать/подсмотреть	
						
						
famaunesejo	steal	kidnap			красть/украсть	воровать/своровать
dafamaunesejo	thief				вор	
famaunesejoti	rob	mug			ограбить	
						
nepusjanli	(verb)_support				поддерживать/поддержать	
lanepusjanli	(noun)_support				поддержка	
nenapusjanli	(verb)_[psychological]_support				морально поддерживать	
lanenapusjanli	(noun)_[psychological]_support				моральная поддержка	
						
todei	something_that_is_true	truth, reality			истина	
sutodei	reality				реальность	
todeu	something_that_is_false	lie			неистина	
batodei	say_something_that_is_true	be right			говорить что-то истинное	прав
batodeu	say_something_that_is_false	be wrong			говорить что-то неистинное	неправ
						
sotodei	see_right					
sotodeu	see_wrong					
						
nali	feel_good				испытывать позитивные чувства	
nalu	feel_bad				испытывать негативные чувства	
						
podojoi	fortunately				к счастью	
podojou	unfortunately				к сожалению	
						
monpiotio	salary	wage			заработная плата	зарплата
						
labanlafanejannotallugausmi	feminism				борьба с дискриминацией женщин	феминизм
						
simmi	be_womanly	feminine, womanlike			женоподобный	
simmu	be_manly	masculine			мужеподобный	
						
bapuslem	say_again	repeat			сказать ещё раз	повторять/повторить
fapuslem	do_again	repeat			сделать ещё раз	повторять/повторить
basim	say_the_same_thing_(as)	repeat			сказать то же самое	повторять/повторить
						
famlasim	compare				сравнивать/сравнить	
lafamlasim	comparison				сравнение	
						
donaniopisek	be_itchy				чесаться (как чувство)	
pisek	scratch				чесать	
						
						
						
faca	ask_(a_question)				задать вопрос	спрашивать/спросить
tofaca	question				вопрос	
faca[OPP]	(verb)_answer				отвечать/ответить [на вопрос]	
tofaca[OPP]	(noun)_answer				ответ [на вопрос]	
						
hamkaibugin	slurp				чавкать	
						
dofusobil	be_pathetic(ugly_in_weakness)				жалкий	
lamonalufalu	conscience				совесть	
						
lanataldohun	pride				гордость	
nefotodeu	mislead	deceive			вводить/ввести в заблуждение	
	by				<маркер агента действия>	
tonodone[by]da	what_has_not_been_caused_by_humans	nature				
nodone[by]da	natural				не созданный человеком	природный
donebei[by]da	artificial				созданный человеком	искуственный
manokonda						
						
tuasatopa	try_to_find_out_the_location_(of)	search, look for			пытаться узнать местоположение (чего-то)	искать
selsatopa	(succeed_to)_find_out_the_location_(of)	find			смочь узнать местоположение (чего-то)	найти
dusatopa	stop_knowing_the_location_(of)	lose				
taspa						
						
duipa	be_back				вернувшийся	
domokantas	be_transparent	be translucent, be [crystal] clear			прозрачный	
						
kafamsimda	artificial_intelligence	AI			искуственный интеллект	ИИ
kafamsimbufam	neural_network				нейронная сеть	
						
latuanepal	violence	aggression			насилие	
celatuanepal	be_violent				насильственный	
						
babuipusli	say_that_it_would_be_better	recommend, give advice, give advise			рекоммендовать	советовать
lababuipusli	act_of_saying_that_it_would_be_better	recommendation, advise, advice			рекоммендация	совет
tobabuipusli	what_is_said_that_it_would_be_better	recommendation, advise, advice			рекоммендация	совет
						
nepacun	lift				приподнимать/приподнять	поднимать/поднять
dofeinepacun	be_light[weight]				лёгкий (по весу)	
dofeunepacun	be_heavy				тяжёлый (по весу)	
togedofeinepacun	weight				вес	
dofeinepacunge	weigh				весить	
						
cetidimei	(adj)_from_birth	native				
sudama	society				население	народ
						
len'nao	Nao_[language]				[язык] Nao	
						
lafamdoso	conciousness				сознание	
lafamdonoso	unconciousness				бессознание	
						
kabinliocul	umbrella				зонт[ик]	
nehitpialikbutenpet	applaud				хлопать в ладоши	апплодировать
						
tomeijuskodonabun	monster		モンスター		монстр	чудовище, чудище
nemoiduiban	provoke				провоцировать	
lanemoiduiban	provocation				провокация	
						
cellikbac	mask				маска	
						
dinajislu	begin_to_experience_a_negative_feeling_from_ordinariness_(of)	bored, tired, sick			начать ощущать банальным	надоесть, устать (от)
konlepunbenofi	be_in_contact_for_a_long_time,_and_as_a_result,_stop_liking	bored, tired			быть в контакте долгое время, и в результате больше не любить	надоесть, устать (от)
konlepunbefen	be_in_contact_for_a_long_time,_and_as_a_result,_be_angry	be sick (of)			быть в контакте долгое время, и в результате злиться	надоесть, устать (от)
						
toli	what_is_good_(for)	interest[s]			то, что хорошо (для)	интересы
tomoi	what_someone_wants	desire, interest[s]				
						
celenodofoku	sudden				неожиданный	
lenodofoku	suddenly				неожиданно	
						
nonataldohinnaponsolse	not_be_ashamed_of_being_egoistic	brazen, bold, arrogant			быть наглым	
						
fen	be_angry	be mad, be pissed off	怒っている		злиться (из-за)	злой
lafen	anger				злость	
lapufen	rage					
hupufen	be_furious				быть в ярости	
nefen	make_angry	piss off			злить	
						
						
						
bataldogafo	(verb)_promise				обещать	
tobataldogafo	(noun)_promise				обещание	
						
'moskit	mosquito		蚊		комар	
maspek	bread		パン		хлеб	
masgoffes	pancakes				блины	блинчики
kafesmaspek	toaster				тостер	
maspekfes	toast				жареный хлеб	
						
						
kalai	light_tool	lamp, flashlight			осветительный прибор	лампа
kalainimmencuheia	chandler				люстра	
kalainudom	streetlamp				[уличный] фонарь	
kadenlaiten	[electric]_torch				фонарик	
tonfaianelai	[fire]_torch				факел	
nikfaialai	lantern					
pikanefaia	lighter				зажигалка	
pitonnefaia	match[es]				спички	
	lighter					
silafaia	spark				искра	
kalai'mesa	[table]_lamp				[настольная] лампа	
kalaineitokbiekiu	traffic_lights				светофор	
kanaima	heater				обогреватель	
kanaitogin	tool_for_warming_up_food	microwave_oven			устройство для разогревания еды	микроволновая печь, микроволновка
kanailia	kettle				чайник	
kanauma	air_conditioner				кондиционер	
						
dofeidiso	easy_to_notice	bright			[легко] заметный	
dofeudiso	hard_to_notice				[трудно] заметный	незаметный
						
nutua	give_it_a_try	try				
						
budou	bone				кость	
						
						
						
gokiebu	go_using_one's_own_body_force_(without_a_vehicle_etc)					
gofoukiebu	go_slowly_using_one's_own_body_force_(without_a_vehicle_etc)	walk				
gofoikiebu	go_fast_using_one's_own_body_force_(without_a_vehicle_etc)	run				
gokiukiebugo	go_on_foot					
gokiufoukiebugo	go_slowly_on_foot	walk				
gokiufoikiebugo	go_fast_on_foot	run				
						
kua	climb/crawl				лезть/позти (по)	лазить, ползать
						
mapasdagojun	hotel				отель	гостиница
						
fonofalu	trust				доверять	
nomou	I_don't_mind				быть не против	
						
palfaia	be_injured_by_fire	burn			иметь ожог	
palbepun	swell				распухнуть	
nalunokon	experience_negative_emotions_due_to_not_being_in_contact_(with)	miss				скучать
jounokon	be_sad_due_to_not_being_in_contact_(with)	miss				скучать
moiduidikon	want_to_be_back_in_contact_(with)	miss				скучать
						
						
						
						
						
lefkomoi	look_forward_(to)	can't wait	楽しみにしている		ждать с нетерпением	
podijandolefkomoi	finally		やっと		наконец-то	
						
netokfualui	(verb)_whistle				свистеть	
kanetokfualui	(tool)_whistle				свисток	
						
pogauspun	often				часто	
pogauspin	rarely				редко	
pogauspupun	extremely_often	all the time				
						
humoi	(verb)_desire	wish			желать	
tohumoi	(noun)_desire	wish			желание	
bamoi	proclaim_one's_desire(s)	wish				
tobamoi	proclamation_of_one's_desire(s)	wish				
						
joubefajusbun	be_sad,_and_as_a_result,_act_crazily				психовать	
moibefo	believe_what_one_wants					
						
						
moikofomosel	good_luck					
tonejopuanejoi	present/gift					
moikopufosel	be_confident					
						
nukan	take_a_look				глянуть	
						
tinpuadijen	[have]_rest	take [some] rest			отдыхать/отдохнуть	
tetaltinpuadijen	you_deserve_to_have_some_rest					
diolinnehal	anecdote				анекдот	
niksakam	dictionary		辞典	辞書	словарь	
tojuskeidei	something_strange_but_true	paradox			парадокс	
banefamso	describe				описывать	
labanefamso	description				описание	
						
dokmaigogos	visa				виза	
dokdagogosnose	passport				[заграничный] паспорт	
labiodagos	citizenship		国籍		гражданство	
						
lalekdanei	election[s]				выбор главы	
silek	vote_(for)					
						
nonaponnapalnose	cruel				жестокий	
lamonebeipai	fertility				фертильность	
lanomonebeipai	infertility				нефертильность	
						
peineu	be_obedient				послушный	
peinei	be_dominant				склонный к манипулированию	
peuneu	be_inobedient	be naughty			непослушный	
moifalibetiopiogai	(verb)_volunteer					
damoifalibetiopiogai	(noun)_volunteer				волонтёр	
lamoifalibetiopiogai	volunteering				волонтёрство	
						
gapus	the_most_(+adj)	most			самый	
gapusli	[the]_best		一番いい	最高	лучший	
gapuslu	[the]_worst				худший	
						
dot	dot/point		点		точка	
dotgapusnali	(noun)_orgasm				оргазм	
gobepadotgapusnali	[have_an]_orgasm	come, cum			достигать/достичь оргазма	кончать/кончить
dotle	moment				момент	
dotgapuscun	peak		頂上		пик	
						
tonfafuatifaia	cigarette				сигарета	
fafuatifaia	(verb)_smoke(cigarettes,weed,etc)				курить	
						
pogapus	especially				особенно	
						
menpuason	bed				кровать	
magin	restaraunt	dining room, canteen			ресторан/кафе	
nodumei	survive		生き残る	生存する	выживать/выжить	
lanodumei	survival		生き残り	サバイバル,生存	выживание	
danodumei	survivor		生存者		выживший	
						
sutofa	system				система	
daneisutofa	administrator					
sudaneisutofa	[group_of_people_doing]_administration					
						
lojobi	animate_[being]	animal			животное	
						
lonojobi	inanimate_[being]					
						
sels	degree[s]_[Celcius]	Celcius			градус [Цельсия]	
						
babio	say_that_someone/something_is...	call			называть	
dobabio	be_called				называться	
banom	say_that_someone/something_is_named...	call				
						
hunei	dominate					
naponbetulnaf	be_obsessed				быть помешанным (на чём-то)	быть одержимым (чем-то)
lanaponbetulnaf	obsession				помешательство	одержимость
						
jonise	contain	include			иметь в себе	включать, содержать
						
jonisegai	(adj)_empty				пустой	
jonisegepun	full					
jonisegegapuspun	full				полный	
						
lamainebeitosim	copyright				авторские права	копирайт
kemnebeitosim	break_the_copyright				нарушить авторские права	
						
pio	in_exchange_(for)	cost, for	と交換になる		взамен (на)	за
topio	price		値段		цена	стоимость
nepio	(verb)_exchange	trade	交換する		обменивать/обменять	
lanepio	(noun)_exchange		交換		обмен	
pioke	what_price	how much[?]	いくら_(値段)		сколько стоит	
piopun	expensive				дорогой (по цене)	
piopin	cheap				дешёвый	
piogai	free_[of_charge]		無料		бесплатный	
[ф]	priceless				бесценный	
						
pibuamon	[money]_card	credit card, bank card			[банковская] карта	
duifanejo	pay		払う		платить/заплатить	
						
						
hus	direct/straight		直接/まっすぐ		прямой	
his	indirect/curved				кривой	
						
bahus	say_directly	straightforward	直接言う		говорить прямо	
peibahus	prone_to_say_directly	straightforward			откровенный	прямолинейный
bahis	(verb)_hint				намекать	
tobahis	(noun)_hint				намёк	
						
neni	put_in	insert, put inside	入れる		положить (в)	
nenu	put_out	eject	出す		вынуть	
necu	put_on		置く		положить (на)	поставить
						
tonenibuluipuanolui	earplug[s]				беруши	
						
gofuaci	fall_[down]				лететь вниз	падать
						
						
gan	gun				огнестрельное/травматическое оружие	
						
janbeilin	new		新しい		новый	
janbeilun	old_(not_new)		古い		старый (не новый)	
						
janmeilin	young		若い		молодой	
janmeilun	old		年をとっている		старый (не молодой)	
togelejanmei	age		年齢		возраст	
janmeilegeke	how_old_(as_a_question_about_someone's_age)				какого возраста	сколько лет
janmei	be_...(years/months)_of_age	years old, old				лет
						
dojo	belong				принадлежать	
						
polegauku	forever				навсегда	
lalegau	eternity				вечность	
beilegau	eternal				вечный	
						
tulik	forward				вперед	
tuluk	back[ward]				назад	
sigokiukiebugo	(verb)_step				шагать/шагнуть	
lasigokiukiebugo	[foot]step				шаг	
						
bubansek	claw				когти	
						
tonlus	pen/pencil				ручка/карандаш	
fom	shape		形		форма	фигура
kafaifomda	doll		人形		кукла	
						
gali	perfect	ideal, flawless	完璧		идеальный	
soinoli	flaw				изъян	недостаток
						
duigo	go_back	return	戻る		возвращаться/вернуться	
						
du[TAIL_ADV]nikuduidi	[make_a]_pause				сделать перерыв	сделать паузу
ladu[TAIL_ADV]nikuduidi	(noun)_pause				перерыв	пауза
nedu[TAIL_ADV]nikuduidi	[put_on]_pause				поставить на паузу	
						
lekduineno	cancel				приостановить	
						
tuadue	compete				соперничать	соревноваться, конкурировать
latuadue	competition	rivalry			конкуренция	
datuadue	competitor	rival	ライバル		соперник	конкурент
						
						
naf[TAIL_ADV]nikuhit	aim					
						
hegobepa	invite					
lahegobepa	(f)act_of_inviting	invitation			приглашение	
tolushegobepa	invitation_[letter]					
						
luapunfen	yell				кричать (на кого-то)	орать
						
nesenojo	get_rid_[of]					
noniobenesenojo	throw_away	dump				
tononiobenesenojo	garbage	trash, rubbish	ゴミ		мусор	
niktononiobenesenojo	garbage_container	trashbin, trashcan	ゴミ箱		мусорка	
noniobenesenojotutopamau	(verb)_litter					
matononiobenesenojo	[garbage]_dump	landfill				
						
dac	(adv)_even				даже	
						
kep	hat/cap		帽子		головной убор	шапка, шляпа, кепка
but	shoe[s]		靴			
pan	trousers	pants	ズボン/ショーツ			
						
'futbol	football/soccer		サッカー			
'basketbol	basketball		バスケ[ットボール]			
'beisbol	baseball		野球			
golf	golf		ゴルフ			
'hokei	hockey		ホッケー			
						
milhiedoi	ice_cream	icecream	アイス			
						
naigedilio	melt		溶ける		плавиться/расплавиться	
naibefua	vaporize	vapourise				
naigedifua	boil_(when_the_temperature_is_hot_to_the_point_that_it_begins_to_change_to_a_vapour)					
naubelio	condense					
						
gontascu	bridge		橋		мост	
						
silio	[liquid]_drop		滴		капля	
butpuanidom	slippers				тапки	тапочки
gosao	go_round					
mofsao	rotate				вращаться	крутиться, вертеться
lamofsao	rotation				вращение	
						
tofeudiu	problem	issue	問題		проблема	
toniodiu	task	problem			задача	задание
						
nepisum	(verb)_edit				подправить	редактировать
naluseki	(verb)_regret				жалеть	
						
nogali	imperfect	flawed	完璧ではない			
						
nolbac	neck					
						
fukeinonedu	endure	put up [with], hold	我慢する		терпеть	
						
[broadcast]tolui	radio					
[broadcast]tokan	television	TV				
						
mur	wall		壁		стена	
pudua	hundred	100				
puduanie	century					
						
bakopiajin	talk_about	discuss				
						
						
						
foibehit	collide					
lafoibehit	collision					
						
jin	almost					
						
sudaneikongosnose	Ministry_of_Foreign_Affairs	MoFA	外務省			
						
dineimanose	take_control_over_the_territory_of_others	occupy				
ladineimanose	[f]act_of_taking_control_over_the_territory_of_others	occupation				
						
nesedinei	take_control_(over)	occupy, conquer, take over				
						
sobesatoge	measure					
						
hitkielikbutenpet	hit with one's palm	slap				
						
nebeu	destroy					
lanenokobebeu	destruction					
						
lis	read		読む		читать	
hutolus'krist	Bible				Библия	
hutolus'islam	Qur'an	Quran				
supap	book		本		книга	
masupap	library				библиотека	
pudoluifualleson	snore					
						
hutojanpulu	disaster					
						
noba	not_speak/say	be silent			молчать	
lanoba	(f)act_of_not_speaking/saying	silence			молчание	
						
labanefamsolamei	biography					
labanefamsolameise	autobiography					
						
fambesatoge	calculate				вычислять/вычислить	[по]считать
lafambesatoge	calculation				вычисление	
kafambesatoge	calculator				калькулятор	
						
bakose	talk_with_oneself				разговаривать с самим собой	
						
[break_trust]	betray					
						
nui	also	too, as well, either, neither	も		тоже	
seibapus	to_say_more,…	also, moreover				
						
moutun	not_want_to_be_stressed_(with)	be lazy				
futun	dislike_to_be_not_relaxed	be lazy			не любить напрягаться	
peituajantin	prone_to_try_to_be_in_a_relaxed_state	be lazy				
peituanotunfu	prone_to_avoid_discomfort	be lazy				
						
						
suit	sweet		甘い		сладкий	
'tcua	sour		酸っぱい		кислый	
						
gonbiekiu	[car]_road					
gonfoiniubiu	highway					
						
nodupa	stay_(somewhere)	remain			остаться (где-то)	
niu	between				среди	
lateksa	[knowledge]_test	exam				
latekfabemo	[skill]_test					
						
janmaiedofalu	be_cursed					
tolussedofa	diary	journal				
juslubuseikon	be_allergic					
lajuslubuseikon	allergy					
						
nemeitosimse	reproduct					
lanemeitosimse	reproduction					
						
konbesausim	be_infected					
tokonbesausim	infection					
dokonbesausim	be_infectious	contagious				
kasbesausim	[have_an]_STD_(sexually_transmitted_disease)					
tokasbesausim	sexually_transmitted_disease	STD				
						
neihe	[give_an]_order					
						
puckiebugocu	step_(on)					
kabomseipuckiebugocu	mine_(a_type_of_bomb)					
						
						
dapeihomgedosonomodei	genius				гений	
						
lanoban	peace					
						
tonodubeikucpal	scar					
						
nohomtopase	be_lost					
dinohomtopase	get_lost					
dinopakodonosatopa	be_missing_(location_unknown)					
					найти (что-то новое)	
tuamit	look_for_(something_new)	search			искать (что-то новое)	
domoidinenogo	be_wanted_(by_the_police_etc)				быть в розыске	разыгрываться
	stairs					
punafkan	be_extremely_concentrated_looking_(at)	stare				
picsebekon	pull_oneself,_and_as_a_result,_get_in_contact_(with)	reach			дотянуться	
seldikon	succeed_in_getting_in_contact_(with)	reach				
						
kiogasim	twin(s)				близнецы	
						
ti	than					
						
nodubei	be_left					
dufubetuanoso	[start_to]_admit					
fubetuanoso	not_admit	deny				
baladeu	say_that_(smth)_is_not_true	deny			заявить о несоответствии действительности (чего-л)	
baladei	say_that_(smth)_is_true	confirm			заявить о соответствии действительности (чего-л)	подтверждать/подтвердить
						
						
						
						
						
						
fapuamo	(verb)_practice					
lafapuamo	(noun)_practice					
						
tolusnionejomonpio	bill					
nikfomfoskuthus	box					
palna	be_emtionally_injured	heartbroken				
nomofual	cannot_breathe	suffocate, choke				
nenomofual	cause_to_not_be_able_to_breathe	suffocate, choke				
dimeuhoinomofual	die_because_of_not_being_able_to_breathe	choke				
						
						
toginlio	beverage	drink				
						
lalai	(noun)_light					
lalau	darkness					
						
						
						
lamoiginkiu	desire_to_eat	appetite				
						
dofalibefafai	celebrate					
ladofalibefafai	celebration	party				
						
ladofalibefafaidisem	wedding					
tonsek	knife				нож	
						
budoubac	skull					
						
nepusgepun	[cause_to]_increase					
dipusgepun	increase					
						
tunlibejo	earn					
ganosa	not_know_at_all	have no idea				
						
						
kum	sand					
kumsuit	sugar					
kumsal	salt					
						
notil	enough	sufficiently			достаточно	
						
faineduifana	have_fun_causing_emotional_reaction	tease				
fainenadohin	have_fun_humiliating	bully				
						
nosabedofeinefo	be_easy_to_make_believe_(in_smth)_(as_a_result_of_ignorance)	be naive				
sagepinbepeifotodeu	know_little_and_as_a_result_be_prone_to_be_wrong	be_naive				
						
hol	hole		穴		дыра	
holbufui	nostril				ноздря	
holbului	ear_hole					
						
						
lanedofikanbupisek	manicure/pedicure					
						
puagai	in_vain					
						
						
						
						
niugos	international					
neniu	add					
tule	until	till				
tile	since					
sansen	modern					
						
deudonedosodei	be_false_but_caused_to_look_true_or_real	fake				
tekpuapufo	make_sure					
						
						
nanau	feel_cold	freeze			мерзнуть	
						
seibajin	speaking_of	as for				
keseibajin	what_about					
	mind					
						
kemnesejotimabai	shoplift					
lakemnesejotimabai	shoplifting					
						
ladiniejanbeilin	New_Year					
						
	suspended	hang				
ne[suspended]	cause_to_be_hanged	hang				
nemeu[suspended]	execute_by_hanging					
						
genim	of_average_quantity	average				
sanjis	typical	average				
						
ligajus	be_unique					
podosobefo	apparently					
tonaibefua	steam					
						
disumbepuspeinodumei	evolve					
ladisumbepuspeinodumei	evolution					
						
kifabefabemo	be_experienced					
lakifabefabemo	experience_(skill)					
						
saunajanlu	be_depressed					
lasaunajanlu	depression					
peina	sensitive					
lapeina	sensitivity					
domcungecul	skyscraper					
dogonuhan	bleed					
						
fes	fry				жарить (на сковороде)	
liofes	[frying]_oil				масло [для жарки]	
bol	cook_by_boiling	boil			варить (как способ готовки)	
pek	bake				печь	
						
lan	plant		植物		растение	
def	tree	wood, wooden	木	木材	дерево	деревянный
madef	woods/forest					
	seed				семя/семена	
linkodohom	concise					
kafaiakuk	stove					
						
todofeifambesodeu	something_that_is_obviously_false	nonsense, absurd, bullshit				
						
nesosejul	(verb)_protest				протестовать	
lanesosejul	(noun)_protest				протест	
	effect					
dofibekiele[idk]	fashionable	in fashion				
						
dokmaineibiekiu	[driver's]_license					
						
tasnejan	(verb)_switch					
katasnejan	(noun)_switch	power				
						
tasnejanlen	translate				переводить/перевести (с языка на язык)	
latasnejanlen	translation				перевод (с языка на язык)	
datasnejanlen	translator_(person)				переводчик (человек)	
katasnejanlen	translator_(tool)				переводчик (программа)	
						
jopamenbu	wear					
dijopamenbu	put_on_(begin_to_be_wearing)					
dujopamenbu	take_off_(stop_being_wearing)					
fuecelbu	clothes					
jopamenbugai	naked					
						
'metalcelbu	armor				броня/доспехи	кольчуга, латы
subudou	skeleton					
diafia	Valentine's_day					
						
gal	glass		ガラス		стекло	
fio	flower		花		цветок	
fiosaocullelai	sunflower		ひまわり		подсолнух	
						
gobenupa	visit				нанести визит (куда-то)	заходить/зайти
dagobenupa	visitor	guest			гость	
kanemof	engine	motor			двигатель	
						
						
tenbul	be_tight				крепко/туго	
tenbil	be_loose					
						
togo	destination					
						
tuafaipa'inet	look_up_[on_the_internet]	google				
						
nomolegaumei	mortal					
lanomolegaumei	mortality					
nomodimeu	immortal					
lanomodimeu	immortality					
						
selgotasni	make_it_through					
tobatonejokucdimeu	will_(after_death)					
						
montugos	tax					
montigos	welfare					
montigostudadisakohom	scholarship					
montigostudajanmeilun	pension					
						
mondijo	income					
montugostimondijo	income_tax					
						
neginkiu	feed				кормить	
lanegintibumil	breastfeeding				кормление грудью	
bumilmua	udder_[of_a_cow]				вымя [коровы]	
						
butenpetcellikbac	facepalm				фейспам	
has	undo					
hasgin	(verb)_vomit	throw up, puke			блевать	вырвать, тошнить
hasginfua	burp/belch				рыгать	
naluhoimof	experience_motion_sickness	carsick, airsick, seasick, dizzy			испытывать тошноту от укачивания	укачивать/укачать, тошнить
lanaluhoimof	motion_sickness				тошнота [от укачивания]	
naniohasgin	experience_nausea	sick, be nauseous			испытывать тошноту	тошнить
lananiohasgin	nausea				тошнота	
						
busit	butt	ass				
jobudipul	go_through_puberty					
lajobudipul	puberty					
dajobudipul	adolescent	teen[ager]				
dipul	grow_up					
jodipul	bring_up_(someone)					
hansinie	menstruation	period				
nihansinie	be_on_one's_period	period				
sanhan	blood_type				группа крови	
ponoponcajanke	anyway					
						
pitonpuasifue	[sewing]_needle					
						
holmurpualai	window		窓			
buacelmagoni	door					
tes	substance				вещество	субстанция
						
tesdipusauseigonibu	(noun)_poison					
nepusauhoijogoni	(verb)_poison					
donedodipusauseigonibu	be_caused_to_be_poisonous	be poisoned				
dipusauhoijogonibu	get_poisoned					
dodipusauseigonibu	be_poisonous					
						
dijasoutes	get_mixed	mix				
nejasoutes	cause_to_be_mixed	mix				
						
						
lamolihualitdofikan	calligraphy					
						
dofokupakeinopa	expected_to_be_present_but_be_absent	be missing				
						
batofamjin	(verb)_comment					
tobatofamjin	(noun)_comment					
						
nesejonise	absorb					
nesenojonise	emit					
liko	fit	be suitable				
nikinoso	overlook	miss				
						
nafpuasabin	look_after					
nafpuasabinpil	babysit					
danafpuasabinpil	babysitter					
						
lagofaifia	(noun)_date_(as_a_love_couple)					
gofaifia	go_on_a_date_(with)	date				
						
toluipuanesa	sound_for_informing	alarm				
						
pusti	more_than	over				
pisti	less_than	under				
nopisti	not_less_than	at least				
nopusti	not_more_than	at most				
						
tasnebio	convert	cause to turn [into], transform				
katasnebio	converter					
katasnebiotoge	[mathematical]_function					
						
papnepoi	tissue					
nojodompas	be_homeless					
danojodompas	homeless_person					
						
pusku	later					
puski	earlier					
						
fuecelbumil	bra		ブラ			
ponmei	important_for_life					
diasinienie	day_month_year	date				
						
tonajan	mood					
najanli	be_in_a_good_mood	good	元気_(気分のこと)			
najanlu	be_in_a_bad_mood	bad	元気[じゃ]ない_(気分のこと)			
						
laigefeukan	dazzle/dazzling	blinding	まぶしい			
						
togegapuspin	(noun)_minimum					
togegapuspun	(noun)_maximum					
gegapuspin	minimal	minimum				
gegapuspun	maximal	maximum				
						
maniknaudameu	morgue				морг	
domdog	doghouse	kennel				
tasdipas	move_(to_a_new_place_to_live)					
gofafainudom	go_have_fun_outdoors	go out				
						
taspanokiemof	(verb)_teleport					
kataspanokiemof	teleporter					
lataspanokiemof	teleportation					
						
lagotasle	time_travel					
kagotasle	time_machine					
						
						
						
tessuitbel	honey					
tolustonomse	signature					
B no seu no A	A_even_if_B	even [if]	BてもA	～ても		
no A sei no B	A_only_if_B	[only] if				
solsei	[if_and]_only_if				тогда и только тогда, когда	
solseinope	unless					
seideu	otherwise				в противном случае	иначе
dofeuhom	hard_to_understand	complicated				
douanaigedilio	lava				лава	
ladomaienejantallu	karma_(meaning_as_a_form_of_punishment)				карма (как наказание)	
nesedokanbesosimdanidio	(verb)_cosplay					
lanesedokanbesosimdanidio	(noun)_cosplay					
tobomlaiculdofikan	fireworks		花火		феерверк	
						
	wheat				пшеница	
mas	dough				мука с водой	тесто
mes	meat				мясо	
						
masbol	pasta	macaroni			макароны	
maspuebol	noodles/spaghetti	pasta			лапша/спагетти	
						
kom	pc	computer, smartphone, tablet, laptop			компьютерное устройство (ноутбук, планшет, смартфон и т.п.)	
komjabuten	[smart]phone				смартфон	телефон
komduabuten	tablet_[computer]				планшетный компьютер	планшет
komnomof	[desktop]_computer				[стационарный] компьютер	
						
						
						
	at_least					
dokbailapa	ticket_(for_a_plane,_theater,_etc)				билет (в кино, на самолёт и т.д.)	
mokonpuakie	have_access				иметь доступ (к)	
lamokonpuakie	access				доступ	
nenapalpuaneneu	(verb)_torture				пытать	
lanenapalpuaneneu	(noun)_torture				пытка	
nenabunpuaneneu	make_scared_in_order_to_make_obey				пугать с целью подчинить себе	угрожать, шантажировать, запугивать
tonesopuanedofolu	dirt/oppo				компромат	
tuaneneukietonesopuanedofolu	(verb)_blackmail				шантажировать	
tolustoniba	subtitles				субтитры	
nesopuanemoikie	advertise	publicize, promote			рекламировать	
lanesopuanemoikie	advertisement				реклама	
						
						
						
						
						
tenbenekopia	attach	stick				
testenbenekopia	glue				клей	
tenbenekopiase	(verb)_attach_oneself_(to_smb/smth)	stick			приклеиться/прикрепиться	
	sticky					
						
nemoitomau	tempt	lure			соблазнять/соблазнить	
lanemoitomau	temptation				соблазнение	
						
kanaisilhusfue	iron_(device)				утюг	
cesen	(adj)_current				нынешний	настоящий, текущий
gopasgosnose	migrate				мигрировать	иммигрировать, эмигрировать
dagopasgosnose	migrant				мигрант	иммигрант, эмигрант
lagopasgosnose	migration					
						
dabunbegogosnose	refugee				беженец	
mabin	shelter				убежище	
						
						
mitbepufafai	(verb)_party				тусить	
lamitbepufafai	(noun)_party				тусовка	вечеринка
						
henofekonme	(rude)_do_not_get_in_contact_with_me	fuck you, fuck off			отъебись	
hefedimeu	die,_motherfucker!	fuck you			сдохни	
						
						
						
						
niliobenomofualbemeu	drown				захлебнуться и умереть	утонуть
						
					псевдоним	
tonomnenosose	pseudonym/alias					
tasnetupap	print_(on_paper)					
katasnetupap	printer					
						
pacincimen	deep				глубокий	
						
						
						
						
nenoku	prevent				предотвратить	предупредить
nabunbepulua	scream				кричать от страха	
tonajisbegausfa	habit				привычка	
						
						
basanpifia	flirt				флиртовать	заигрывать
lujusgehal	ridiculous					
feidifabemo	be_talented				иметь талант	талантливый
tofeidifabemo	talent				талант	
						
soinietinpuadijen	vacation	holiday			отпуск/каникулы	
						
						
						
						
hunalu	suffer				страдать	
nehunalu	make_suffer	torture			причинять страдания	мучать
lahunalu	(noun)_suffering	torture			страдание	страдания
						
dolaibehalau	[have_a]_tan				получить загар	загорать, [под]загореть
dolaipuahalau					пытаться подзагореть	загорать
ladolaibehalau	(noun)_tan				загар	
						
batofambesanomodeilesimkotobapuski	contradict_[oneself]				противоречить себе	
dofambesanomodeilesimko	logically_cannot_be_true_at_the_same_time_with	contradict			противоречить	
sudahanpujin	family_(group_of_relatives)					
sudameikopia	family_(people_who_spend_life_together)					
	sarcasm					
						
						
nesabun	warn				предостеречь	предупредить
lanesabun	warning				предостережение	предупреждение
tofambenikuhit	target				цель	
						
bapuadil	speak_to_make_a_deal	negotiate			договариваться	
bapuadilpuslise	speak_trying_to_get_a_better_deal_for_oneself	negotiate			торговаться	
						
tofa	deed/action				дело	
sutolekle	schedule					
letio	work_shift					
						
						
						
nubajin	mention				упоминать/упомянуть	
						
						
						
nanionaf					быть увлечённым (чем-то)	
nanionafbejen	passionate					
lananionafbejen	passion					
macilcun	mountain				гора/горы	
	flag					
kamnemokonpuakie	password					
tokannomofcelmen	texture_(in_computer_graphics)				текстура	
natunbenufual	sigh					
tuajun	stay_away_(from)				сторониться	избегать, держаться подальше
batolukodeu	(verb)_slander	defame				
tobatolukodeu	(noun)_slander	libel				
						
jannomomof	be_paralyzed	be paralysed				
lajannomomof	paralysis					
nejannomomof	paralyze	paralyse				
						
dadogajo	slave		奴隷		раб	
lagajoda	slavery				рабство	
						
tamja	hydrogen				водород	
tamdua	helium				гелий	
tamtui	lithium				литий	
tamfos	beryllium				бериллий	
tampet	boron				бор	
tamlok	carbon				углерод	
tamset	nitrogen				азот	
tamhap	oxygen				кислород	
tamnef	fluorine				фтор	
tamjanol	neon				неон	
tamjaja	sodium				натрий	
tamjadua	magnesium				магний	
tamjatui	alumin[i]um				алюминий	
tamjafos	silicon				кремний	
tamjapet	phosphorus				фосфор	
tamjalok	sulfur				сера	
tamjaset	chlorine				хлор	
tamjahap	argon				аргон	
tamjanef	potassium				калий	
tamduanol	calcium				кальций	
tamduaja	scandium				скандий	
tamduadua	titanium				титан	
tamduatui	vanadium				ванадий	
tamduafos	chromium				хром	
tamduapet	manganese				марганец	
tamdualok	iron				железо	
tamduaset	cobalt				кобальт	
tamduahap	nickel				никель	
tamduanef	copper				медь	
tamtuinol	zinc				цинк	
tamtuitui	arsenic				мышьяк	
tamtuipet	bromine				бром	
tamfoslok	palladium				палладий	
tamfosset	silver				серебро	
tampetnol	tin				олово	
tampettui	iodine				иод	
tampetpet	cesium				цезий	
tampetlok	barium				барий	
tamsethap	platinum				платина	
tamsetnef	gold				золото	
tamhapnol	mercury				ртуть	
tamhapdua	lead				свинец	
tamhapfos	polonium				полоний	
tamhaphap	radium				радий	
tamnefdua	uranium				уран	
tamneffos	plutonium				плутоний	
						
labeulahou	coincidence				совпадение	
nenomokon	isolate				изолировать	
lanenomokon	isolation				изоляция	
						
'marihuana	marijuana	pot, weed, cannabis			марихуана	травка
	intervene					
sait	[web]site				[веб]сайт	
	interrupt					
	essay					
palbefeugo	limp				хромать	хромой
henonenonejo	(verb)_offer					
nonenosedonejo	not_resist_to_being_given_(something)	accept				
	resist_to_being_given_(something)	reject				
leknoneu	refuse				отказываться/отказаться	
	stop_by					
pingenopon	insignificant	negligible			незначительный	
pungepon	cloud				значительный	
	nail					
	powerful					
la[powerful]	powerfulness					
	great					
	lock_up					
	lock					
	key					
	locker					
	revolution					
	rehearsal					
	fresh					
	guarantee					
	insurance					
	avatar					
	nickname					
	holiday					
	anniversary					
tosatopa	information_about_the_location_(of)	address				
	disgusting					
	sentence					
	confirm					
	myth					
	be_impressed					
fokobaku	forecast	predict, foretell			прогнозировать	предсказывать/предсказать
sakobaku		predict, foretell			пророчить	предрекать
	skip					
	evaluate					
	underestimate					
	overestimate					
	misunderstand					
tolustolektogin	menu					
lanepou[environment]	pollution					
kanepacuntai	elevator	lift	エレベーター		лифт	
nabunbefasandomau	panic					
	intuition					
	insist					
donena	be_touched_(feeling)					
	shadow					
todofanepal	accident					
	terrorism					
	pirate					
	bank					
peifapeihombedue	sly				хитрый	
pingemopani	fit_in				вмещаться	влазить, помещаться
lasimlabul	equilibrium	balance				
						
tobapuadipusfabemobafoi	tongue_twister		早口言葉		скороговорка	
						
jonotilmonpuabai	can_afford	afford			мочь себе позволить	
						
tesnepoibucel	soap				мыло	
tesnepoibuham	toothpaste				зубная паста	
tesnepoihea	shampoo					
						
tesnedofikanlikbac	make-up					
katokfuasilio	spray					
kanenokuliobucel	antiperspirant					
katokfuasilionedofifuibu	perfume				духи́	духи
lacun	storey_(of_a_building)	floor, story	階		этаж	
						
suheiapas	apartment				квартира	
sutolusjingau	encyclopedia					
						
lasaumougin	anorexia				анорексия	
lamonesefa	will power				сила воли	
kaneijun	remote_[control]				пульт [дистационного управления]	
						
sotobeu	hallucinate					
lasotobeu	hallucination					
						
lenkom	programming_language					
luslenkom	do_programming					
laluslenkom	programming					
						
kakombic	software	program, app				
kakombuc	hardware					
						
						
jomeipuagin	do_farming	grow				
lajomeipuagin	farming					
majomeipuagin	(noun)_farm					
						
lukbugopet	heel				пятка	
						
buanutmur	shelf				полка	
`;