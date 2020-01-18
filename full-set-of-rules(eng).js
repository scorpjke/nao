document.body.innerHTML += `<div class="main" style="padding: 100px 0">
<h1 class="e"> Full language description and set of rules</h1>

<div id="under_header" style="">

	<div style="vertical-align: top; width: 80%; margin-left: 10%">

<h3>I. Letters and sounds</h3>
<ol class="bl">
<li>Nao has 19 native letters: <b>a i u e o  p t k b d g s f h c l m n j</b>, and 4 additional letters used only in loan words:<b> y r z v</b>. Capital letters are not used.</li>
<li>Pronunciation of the letters:
<b>c</b>=<a href="https://en.wikipedia.org/wiki/Voiceless_postalveolar_fricative">[ʃ]</a>,
<b>j</b>=<a href="https://en.wikipedia.org/wiki/Voiced_postalveolar_affricate">[dʒ]</a>,
<b>y</b>=<a href="https://en.wikipedia.org/wiki/Schwa">[ə]</a>,
<b>o</b>=<a href="https://en.wikipedia.org/wiki/Open-mid_back_rounded_vowel">[ɔ]</a>,
<b>e</b>=<a href="https://en.wikipedia.org/wiki/Open-mid_front_unrounded_vowel">[ɛ]</a>.
The rest of the letters are pronounced like in the <a href="https://en.wikipedia.org/wiki/International_Phonetic_Alphabet">IPA</a>.</li>
<li>The structure of each standard elementary word: <b>one consonant</b> + <b>vowel(s)</b> + (optionally) <b>consonant(s)</b>. Borrowed words that do not correspond to that structure or the ones that coincide in pronunciation with native Nao words, should be marked with an apostrophe, especially when in a compound.</li>
<li>One letter one sound. Each word is pronounced exactly the way it is written, letter by letter. The apostrophe is to be pronounced as a glottal stop.</li>
<li>The stress in the elementary word is on the first syllable. In vowel clusters, <i>i</i> and <i>u</i> become non-syllabic. In compounds, the stress is semantic and usually happens to be on the last elementary word. Intonation is not predetermined but is used purely for emphasis.</li>

</ol>
<br>

<h3>II. Constructing words</h3>
<ol class="bl">
<li>Every word is a sequence of one or a few elementary words. The meaning of the compound is determined strictly logically by the combination rules.</li>
<li>When elementary words are near each other, they form bonds resulting in a compound. There are two possible bonds. The so-called <i>primary bond</i> between nouns and verbs is defined as follows:
<ol class="al">
   <li>Combination <b>[noun<sub>1</sub>] [noun<sub>2</sub>]</b> means<b> [noun<sub>1</sub>] of/[a bond (preposition or other) built in noun<sub>1</sub>] [noun<sub>2</sub>]</b></li>
   <li>Combination <b>[noun] [verb]</b> means <b>[noun] who does [verb]</b></li>
   <li>Combination <b>[verb] [noun]</b> means <b>[verb], the object being [noun]</b></li>
   <li>Combination <b>[verb<sub>1</sub>] [verb<sub>2</sub>]</b> means <b>[verb<sub>1</sub>], the object being [verb<sub>2</sub>]</b></li>
</ol>
</li>
<li>The secondary bond of <b>[word<sub>1</sub>] [word<sub>2</sub>]</b> is defined as <b>[word<sub>1</sub>] described by [word<sub>2</sub>]</b>. The secondary bond is formed if and only if the primary bond doesn't make much sense or is useless. Adjectives normally form a secondary bond.</li>
<li>In a situation where neither of the two bonds make much sense, <b>[word<sub>2</sub>]</b> goes searching further to the left for the closest word that it can create a bond with.
<li>Each word is grammatically stable: it is either a noun, a verb or an adjective, transitive or intransitive, event or state, never both.</li>
<li>If an intransitive verb is followed by a noun, that noun is the subject of the intransitive verb.</li>
<li>Prefixes are a relatively small group of elementary words that must be put right before the noun/verb they describe. The resulting compound is grammatically the same as the original one.</li>
<li>To build an antonym of an elementary word (i.e. change its meaning to the opposite), alternate the last vowels u/i.
<ol class="al">
   <li>This can only be done when only one objective solution exists, so the antonym does not exist for all elementary words.</li>
   <li>The antonym of the antonym equals the original word.</li>
   <li>The antonym always behaves grammatically the same as the original word in any situation.
   <li>As for the semantics, if the word is a condition/state or an event, the antonym will also have that same feature.</li>
   <li>Considering a word denoting an active/conscious action, the antonym will also be an active/conscious action if such a solution exists; otherwise its meaning coincides with the negation.</li>
   <li>Antonym can never denote the cancelling action, the reverse action, causality action or the passive voice.</li>
</ol>
</li>
<li>Verb tenses, just like other modifiers, are not obligatory. Similarly to prefixes, they are put right before a verb.
<ol class="al">
   <li>Conditional: <b>bui</b>=would</li>
   <li>Time: <b>ku</b>=future, <b>ki</b>=past, <b>sen</b>=present</li>
   <li>Aspect: <b>gaus</b>=regular, <b>gais</b>=not regular, <b>ni</b>=continuous, <b>nu</b>=instant, <b>niki</b>=perfect, <b>niku</b>=prospective</li>
   <li>When applied at the same time, they must follow this order: conditional, time, aspect</li>
   <li>The time of a subordinate verb/clause is always relative to the time of the head verb/clause</li>
   <li>In a verb-verb combination, if the time of the subordinate verb is not specified, it is contemporary with the head verb</li>
</ol>
</li>
<li>Passive voice is applied to transitive verbs by putting <b>do</b> right before. The resulting word is an intransitive verb. The agent can be specified via the special preposition <b>doc</b>.</li>
<li>Words <b>ko</b> and <b>be</b> are conjunctions: <b>be</b> connects two verbs while <b>ko</b> can also connect two nouns as well. The borders of such constructions are determined as the shortest possible such that the combination would make sense.</li>
<li> There are <a href="word-systems.html">specialized word systems that follow special constructions rules (click to see)</a>.</li>
<li> When writing foreign words (e.g. proper nouns), you must adopt their spelling to Nao according to the <a href="transliteration-rules.html">official transliteration rules</a>.
</li>
</ol>
<br>

<h3>III. Constructing sentences</h3>
<ol class="bl">
	<li>The sentence consists of top-words.
	<ol class="al">
	  <li>Top-verb (= predicate = main verb). Can be optionally marked with <b>ho</b>. </li>
	  <li>Top-nouns:<br>
	     — top-subject. Must come before the top-verb unless marked with <b>gi</b>;<br>
	     — top-object. Must come after the top-verb unless marked with <b>gu</b>;<br>
	     — noun phrases that follow <b>de</b> or <b>[po+verb]</b>.<br>
	  </li>
	  <li>Top-adjective (= top-noun modifier). Marked with <b>gu</b> unless the elementary word is already an adjective or it follows the top-noun it describes. </li>
	  <li>Top-adverb (= top-verb modifier). Always marked with <b>po</b>.</li>
	  <li>Clause (= subsentence). Marked by <b>pe</b> (not adviced to omit) or the question clause marker <b>ja</b> (allowed to omit only if the clause contains <b>ke</b>) .</li>
	</ol>
	</li>
	<li>Other types of words:
		<ol class="al">
			<li>Words <b>tu</b>, <b>pua</b>, <b>kuc/kic</b> are prepositions.</li>
			<li>Words <b>hoi/hou, kei/keu, sei/seu, din/dun</b> are by default conjunctions between words or sentences.</li>
			<li>Words <b>le</b>, <b>pa</b>, <b>kie</b>, <b>sim/sum</b>, <b>jin</b> by default can be an adverb.</li>
			<li>The role in the sentence of the words mentioned above can be changed by applying a necessary marker or <b>to</b>. </li>
			<li> Words that denote time (le, dia, hoa, etc) can by default be adverbs as well. </li>
		</ol>
	</li>
	<li>Any top-word can be omitted if the speaker wishes to do so. If necessary, use the markers to make sure the grammatical structure of the sentence remains clear.
	</li>
	<li>The indirect object specified via the preposition <b>tu</b>, is allowed to act as if it is the direct object in case if the two cannot be confused with each other. </li>
	<li>Punctuation is as follows:
		<ol class="al">
			<li>Sentences are separated from each other with a dash (−).</li>
			<li>Comma is only used to separate homogeneous parts of the sentence, mark the end of the subordinate clause, and mark the vocative.</li>
			<li>Any other puncuation marks (including the question mark and the exclamation mark) do not have any formal status.</li> 
		</ol>
	</li>
</ol>

		</div>
	</div>
</div>


`;