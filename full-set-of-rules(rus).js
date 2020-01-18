document.body.innerHTML += `<div class="main" style="padding: 100px 0">
<h1 class="e"> Полное описание языка и список правил</h1>

<div id="under_header" style="">

	<div style="vertical-align: top; width: 80%; margin-left: 10%">

<h3>I. Буквы и звуки</h3>
<ol class="bl">
<li>В Nao имеется 19 родных букв: <b>a i u e o  p t k b d g s f h c l m n j</b>, а также 4 дополнительные буквы, использующихся только в заимствованиях:<b> y r z v</b>. Заглавные буквы не используются.</li>
<li>Произношение букв:
<b>"c"</b>=<a href="https://ru.wikipedia.org/wiki/Глухой_постальвеолярный_сибилянт">[ʃ]</a>,
<b>"j"</b>=<a href="https://ru.wikipedia.org/wiki/Звонкая_постальвеолярная_аффриката">[dʒ]</a>,
<b>"y"</b>=<a href="https://ru.wikipedia.org/wiki/Шва">[ə]</a>,
<b>"o"</b>=<a href="https://ru.wikipedia.org/wiki/Огублённый_гласный_заднего_ряда_средне-нижнего_подъёма">[ɔ]</a>,
<b>"e"</b>=<a href="https://ru.wikipedia.org/wiki/Неогублённый_гласный_переднего ряда_средне-нижнего_подъёма">[ɛ]</a>,
<i>апостроф</i>=<a href="https://ru.wikipedia.org/wiki/Гортанная_смычка">[ʔ]</a>.
Остальные буквы произносятся как в <a href="https://ru.wikipedia.org/wiki/Международный_фонетический_алфавит">МФА</a>.</li>
<li>Структура элементарного слова: <b>одна согласная</b> + <b>одна или несколько гласных</b> + (необязательно) <b>согласная</b>. Заимствованные слова, которые не подходят под данную структуру, либо те, которые совпадают по произношению с родными словами Nao, помечаются апострофом (особенно в сочетаниях).</li>
<li>Одна буква - один звук. Все слова произносятся как пишутся. </li>
<li>Ударение в элементарном слове приходится на первый слог. В сочетаниях гласных, буквы <i>i</i> и <i>u</i> не образуют слога. В сочетаниях элементарных слов, ударение семантическое и обычно падает на последнее элементарное слово. Интонация не предопределена, используется исключительно для выделения.</li>

</ol>
<br>

<h3>II. Конструирование слов</h3>
<ol class="bl">
<li>Каждое слово является последовательностью элементарных слов. Значение слова определяется строго логически, согласно правилам комбинирования.</li>
<li>Когда два элементарных слова оказываются рядом, они формируют связь. Существует два типа связи. <i>Связь первого типа</i> между существительными и глаголами определяется следующим образом:
<ol class="al">
   <li>Сочетание <b>[сущ<sub>1</sub>] [сущ<sub>2</sub>]</b> означает<b> [сущ<sub>1</sub>] [родительный падеж либо родная связь, встроенная в сущ<sub>1</sub>] [сущ<sub>2</sub>]</b></li>
   <li>Сочетание <b>[сущ] [глаг]</b> означает <b>[сущ], которое [глаг]</b></li>
   <li>Сочетание <b>[глаг] [сущ]</b> означает <b>[глаг], чьим объектом является [сущ]</b></li>
   <li>Сочетание <b>[глаг<sub>1</sub>] [глаг<sub>2</sub>]</b> означает <b>[глаг<sub>1</sub>], чьим объектом является [глаг<sub>2</sub>]</b></li>
</ol>
</li>
<li>Связь второго типа для <b>[слово<sub>1</sub>] [слово<sub>2</sub>]</b> определяется как <b>[слово<sub>1</sub>], которые описывается [словом<sub>2</sub>]</b>. Связь второго типа образуется тогда и только тогда, когда связь первого типа бессмысленна или бесполезна. Прилагательные обычно образуют вторичную связь.</li>
<li>В ситуации, когда обе связи оказываются бессмысленными или бесполезными, <b>[слово<sub>2</sub>]</b> пытается образовать связь с наиближайшим словом, которое стоит левее.
<li>Каждое слово грамматически однозначно: оно либо существительное, либо глагол, либо прилагательное; переходный либо непереходный; событие или состояние; никогда и то и другое одновременно.</li>
<li>В ситуации, когда какое-то правило затрагивает объект глагола, но рассматриваемый глагол непереходный, вместо него рассматриваться будет субъект.</li>
<li>Префиксы это относительно небольшая группа служебных элементарных слов, которые ставятся прямо перед главным словом. Итоговое сочетание при этом никак грамматически не изменяется.</li>
<li>Чтобы образовать противоположность (антоним) у элементарного слова, прочередуйте последние гласные u/i.
<ol class="al">
   <li>Это может быть сделано только в случае, если существует только одно объективное решение. Поэтому данный приём применим не ко всем словам.</li>
   <li>Противоположность противоположности равна изначальному слову.</li>
   <li>Противоположность грамматически идентична изначальному слову и ведёт себя точно так же во всех ситуациях.
   <li>Если слово является состоянием, процессом либо событием, противоположность сохранит это свойство.</li>
   <li>Если рассматривать слово, описывающее активное осознанное действие, то антоним тоже будет активным осознанным действием, если такое решение существует. В противном случае его значение совпадёт с обычным отрицанием.</li>
   <li>Противоположность никогда не может означать отменяющее действие, обратное действие, каузатив или пассив.</li>
</ol>
</li>
<li>Времена глагола, как и другие модификаторы, не являются обязательными. Подобно префиксам, они ставятся перед глаголом.
<ol class="al">
   <li>Условное: <b>bui</b>=бы</li>
   <li>Время: <b>ku</b>=будущее, <b>ki</b>=прошедшее, <b>sen</b>=настоящее</li>
   <li>Аспект: <b>gaus</b>=регулярный, <b>gais</b>=единичный, <b>ni</b>=продолжительный, <b>nu</b>=мгновенный, <b>niki</b>=перфект, <b>niku</b>=проспектив</li>
   <li>В случае их одновременного применения, они должны идти в таком порядке: условное, время, аспект</li>
   <li>Время подчинённого глагола или клаузы всегда относительно времени вышестоящего глагола или клаузы.</li>
   <li>В сочетании двух глаголов, если время подчинённого глагола не указано, значит действие происходит одновременно с вышестоящим глаголом.</li>
</ol>
</li>
<li>Пассивный залог образуется из любого переходного глагола добавлением <b>do</b> в начало. Итоговое слово является непереходным глаголом. Агент действия может быть указан через специальный предлог <b>doc</b>.</li>
<li>Слова <b>ko</b> и <b>be</b> - союзы между элементарными словами: <b>be</b> соединяет два глагола, а <b>ko</b> может соединять любые части речи. Границы этих конструкций определяются как минимально короткие, при которых получится осмысленное сочетание.</li>
<li> Есть <a href="word-systems.html">специальные группы слов, следующие особым правилам словообразования (кликните, чтобы посмотреть)</a>.</li>
<li> Чтобы записывать иностранные слова (например, имена собственные), необходимо адаптировать их написание в соответствии с <a href="transliteration-rules.html">официальными правилами транслитерации</a>.
</li>
</ol>
<br>

<h3>III. Составление предложений</h3>
<ol class="bl">
	<li>Предложение состоит из:
	<ol class="al">
	  <li>Главный глагол (= сказуемое). Может быть промаркирован при помощи <b>ho</b>.</li>
	  <li>Главные существительные:<br>
	     — Подлежащее. Должно предшествовать сказуемому, если не промаркировано при помощи <b>gi</b>;<br>
	     — Прямое дополнение. Должно идти после сказуемого, если не промаркировано при помощи <b>gu</b>;<br>
	     — Именные группы, идующие после предлогов, <b>de</b> или <b>[po+глаг]</b>.<br>
	  </li>
	  <li>Главные прилагательные (= модификаторы главных существительных). Маркируются посредством <b>ce</b>, если не являются прилагательным как частью речи, либо если не идут сразу за существительным. </li>
	  <li>Главные наречия (= модификаторы сказуемого). Маркируются через <b>po</b>.</li>
	  <li>Подчинительное предложение. Маркируется через <b>pe</b> (не советуется опускать) либо через маркер вопросительного предложения <b>ja</b></b>.</li>
	</ol>
	</li>
	<li>Другие типы слов:
		<ol class="al">
			<li>Слова <b>tu</b>, <b>pua</b>, <b>kuc/kic</b> являются предлогами.</li>
			<li>Слова <b>hoi/hou, kei/keu, sei/seu, din/dun</b> являются по умолчанию союзами между словами или предложениями.</li>
			<li>Слова <b>le</b>, <b>pa</b>, <b>kie</b>, <b>sim/sum</b>, <b>jin</b> по умолчанию могут выступать также и наречиями/предлогами.</li>
			<li>Вышеперечисленные слова можно сделать другим членом предложения при помощи других маркеров, либо посредством присоединения к <b>to</b>. </li>
			<li>Слова, обозначающее время (le, dia, jam и т.д.) по умолчанию могут быть также и наречиями. </li>
		</ol>
	</li>
	<li>Любое главное слово в предложении может быть опущено, но чтобы при этом грамматическая структура предложения оставалась явной.
	</li>
	<li>Правила пунктуации:
		<ol class="al">
			<li>Предложения отделяются друг от друга при помощи тире (−).</li>
			<li>Запятая используется для разделения однородных членов предложения, маркировки конца подчинительного предложения и вокатива.</li>
			<li>Все другие знаки пунктуации не имеют никакого формального статуса.</li> 
		</ol>
	</li>
</ol>
		</div>
	</div>
</div>`;