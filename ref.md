{{short description|Wikipedia help page}}
{{pp-vandalism|small=yes}}
{{for|the encyclopedic article on Wikitext|Wikitext}}
{{Locutions pages header}}
{{Wikipedia how to|H:WT|H:MARKUP|H:WIKICODE}}
{{Wikitext navbox}}
'''Wikitext''', also known as '''Wiki markup''' or '''Wikicode''', consists of the syntax and keywords used by the [[MediaWiki]] software to format a page. To learn how to see this [[hypertext markup]], and to save an edit, see [[Help:Editing]]. Generally, coding can be copied and pasted, without writing new code. There is a short list of markup and tips at [[Help:Cheatsheet]].

In addition to Wikitext, some [[HTML element]]s are also allowed for presentation formatting. See [[Help:HTML in wikitext]] for information on this.
{{TOC limit}}

==Layout==
<!--{{VE documentation}} Over prominent and confusing -->

===Sections===

Sections in a page will follow the page's [[WP:LEAD|lead/introduction]], and under certain conditions, the [[WP:TOC|table of contents]].

====Section headings====
{{see|Help:Section|MOS:HEAD}}

The <code>=</code> through <code>======</code> markup are headings for the sections with which they are associated.
* A single = is styled as the article title and should not be used within an article.
* Headings are styled through [[CSS]] and add an <code>[edit]</code> link. [[Help:Cascading Style Sheets#Wiki headings|See this section]] for the relevant CSS.
* Four or more headings cause a table of contents to be generated automatically.
* Do not use <em>any</em> markup after the final heading markup – this will either break the heading, or will cause the heading to not be included in an edit summary.

{{#lst:Help:HTML in wikitext|WIKI_section}}

Templates: {{tl|fake heading}} for use in documentation.

====Horizontal rule====
{{see|WP:LINE}}

The horizontal rule represents a paragraph-level thematic break. Do not use in article content, as rules are used only after main sections, and this is automatic.

{{markup
|<nowiki>----</nowiki>
|{{crlf2}}
----
}}

HTML equivalent: {{tag|hr|s}}

====Table of contents====
{{see|WP:TOC}}

When a page has at least four headings, a table of contents (TOC) will automatically appear after the lead and before the first heading. The TOC can be controlled by magic words or templates:
* <code><nowiki>__FORCETOC__</nowiki></code> forces the TOC to appear at the normal location regardless of the number of headings.
* <code><nowiki>__TOC__</nowiki></code> forces the TOC to appear at the point where the magic word is inserted instead of the normal location.
* <code><nowiki>__NOTOC__</nowiki></code> disables the TOC entirely.
* {{tl|TOC limit}} can be used to control the depth of subsections included in the TOC. This is useful where the TOC is long and unwieldy.
* [[:Category:Wikipedia table of contents templates]] contains a number of specialized TOC templates.

===Line breaks===
<!--[[Help:Breaks]] links directly here.-->
{{see|Wikipedia:Line-break handling|Wikipedia:Don't use line breaks}}

Line breaks or newlines are used to add whitespace between lines, such as separating paragraphs.
* A line break that is visible in the content is inserted by pressing {{key press|Enter}} twice.
* Pressing {{key press|Enter}} once will place a line break in the markup, but it will not show in the rendered content, except when using list markup.
* Markup such as bold or italics will be terminated at a line break.

{{markup
|<nowiki>A single newline here
has no effect on the layout.

But an empty line starts a new paragraph, 
or ends a list or an indented part.
</nowiki>
|{{crlf2}}
A single newline here
has no effect on the layout.

But an empty line starts a new paragraph, 
or ends a list or an indented part.
}}

HTML equivalent: {{tag|br|o}} or {{tag|br|s}} can be used to break line layout.

Templates for line breaks:
* {{tl|break}} adds multiple line breaks.
* {{tl|-}} and {{tl|clear}} adds a break with styling, to clear floating elements.

Unbulleted list:
* {{tl|plainlist}} and {{tl|unbulleted list}} both create an unbulleted list.

===Indent text===
{{see|WP:INDENT}}

Indentation is most commonly used on talk pages.

{{markup
|<nowiki>Indentation as used on talk pages:
:Each colon at the start of a line
::causes the line to be indented by three more character positions.
:::(The indentation persists
so long as no carriage return or line break is used.)
:::Repeat the indentation at any line break.
::::Use an extra colon for each response.
:::::And so forth ...
::::::And so on ...
{{Outdent|::::::}}The outdent template can give a visual indicator that we're deliberately cancelling the indent (6 levels here)</nowiki>
|Indentation as used on talk pages:
:Each colon at the start of a line
::causes the line to be indented by three more character positions.
:::(The indentation persists
so long as no carriage return or line break is used.)
:::Repeat the indentation at any line break.
::::Use an extra colon for each response.
:::::And so forth ...
::::::And so on ...
{{Outdent|::::::}}The outdent template can give a visual indicator that we're deliberately cancelling the indent (6 levels here)}}

Templates: {{tl|outdent}}, {{tl|outdent2}}

===Blockquote===

When there is a need for separating a block of text. This is useful for (as the name says) inserting blocks of quoted (and cited) text.
{{markup
|<nowiki><blockquote>
The '''blockquote''' tag will indent both margins when needed instead of the left margin only as the colon does.
</blockquote>
</nowiki>
|<blockquote>
The '''blockquote''' tag will indent both margins when needed instead of the left margin only as the colon does.
</blockquote>
}}
Template {{tl|quote}} results in the same render.

===Center text===
{{See also|Span and div|HTML tag|Template:Align}}
{{markup
|<source lang="html" inline style="border:none; background:transparent;"><div class="center" style="width: auto; margin-left: auto; margin-right: auto;">Centered text</div></source>
|2=<div class="center" style="width: auto; margin-left: auto; margin-right: auto;">Centered text</div>
}}

Template {{tl|center}} uses the same markup. To center a table, see [[Help:Table#Centering tables]].
Please do not use {{tag|center}} tags, as it is obsolete.

===Align text to right===

You can align content in a separate container:

{{markup
|1=<source lang="html" inline style="border:none; background:transparent;"><div style="text-align: right; direction: ltr; margin-left: 1em;">Text on the right</div></source>
|2=Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.<div style="text-align: right; direction: ltr; margin-left: 1em;">Text on the right</div>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
}}

Or; make the text float around it:

{{markup
|1=<source lang="html" inline style="border:none; background:transparent;"><div class="floatright">Text on the right</div></source>
|2=Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.<div class="floatright">Text on the right</div>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.

|3=<nowiki>{{stack|Text on the right}}</nowiki>
|4=Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.{{stack|Text on the right}}Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
}}

===Lists===
{{see|Help:List|MOS:LIST}}

Do not leave blank lines between items in a list unless there is a reason to do so, since this causes the MediaWiki software to interpret each item as beginning a new list.

====Unordered lists====

{{markup
|<nowiki>* Item1
* Item2
* Item3
* Item4
** Sub-item 4 a)
*** Sub-item 4 a) 1.
**** Sub-item 4 a) 1. i)
**** Sub-item 4 a) 1. ii)
** Sub-item 4 b)
* Item5</nowiki>
|{{crlf2}}
* Item1
* Item2
* Item3
* Item4
** Sub-item 4 a)
*** Sub-item 4 a) 1.
**** Sub-item 4 a) 1. i)
**** Sub-item 4 a) 1. ii)
** Sub-item 4 b)
* Item5
}}

====Ordered lists====

{{markup
|<nowiki>
# Item1
# Item2
# Item3
# Item4
## Sub-item 1
### Sub-sub-item
#### Sub-sub-sub-item
## Sub-item 2
# Item5
</nowiki>
|{{crlf2}}
# Item1
# Item2
# Item3
# Item4
## Sub-item 1
### Sub-sub-item
#### Sub-sub-sub-item
## Sub-item 2
# Item5
}}

===={{Anchor|DL}}Description lists====
{{anchors|Definition lists|Association lists|H:DL}}
{{Shortcut|H:DL}}

To list terms and definitions, start a new line with a semicolon (;) followed by the term. Then, type a colon (:) followed by a definition. The format can also be used for other purposes, such as make and models of vehicles, etc.

''Description lists''<!--HTML5 name--> (formerly ''definition lists''<!--HTML4 name-->, and a.k.a. ''association lists''<!--draft HTML5 name-->) consist of group names corresponding to values. Group names (terms) are in bold. Values (definitions) are indented. Each group <em>must</em> include one or more definitions. For a single or first value, the <code>:</code> can be placed on the same line after <code>;</code> – but subsequent values must be placed on separate lines.

{{hatnote-inline|Do not use a semicolon (;) simply to bold a line without defining a value using a colon (:). This usage renders invalid [[HTML5]] and creates issues with [[screen reader]]s.}}

{{markup
|<nowiki>; Term : Definition1</nowiki>
|{{crlf2}}
; Term : Definition1
|<nowiki>; Term
: Definition1
: Definition2
: Definition3
: Definition4</nowiki>
|{{crlf2}}
; Term
: Definition1
: Definition2
: Definition3
: Definition4
}}

HTML equivalent: {{tag|dl|o}} {{tag|dt}}, {{tag|dd}} {{tag|dl|c}}

Templates: {{tl|defn}}

===Retaining newlines and spaces===
{{shortcut|H:POEM}}

The MediaWiki software suppresses single newlines and converts lines starting with a space to preformatted text in a dashed box. HTML suppresses multiple spaces. It is often desirable to retain these elements for poems, lyrics, mottoes, oaths and the like. The [[mw:Extension:Poem|Poem]] extension adds HTML-like {{tag|poem}} tags to maintain newlines and spaces. These tags may be used inside other tags such as {{tag|blockquote}}; the template {{tlx|poemquote}} provides a convenient shorthand. [[H:CSS|CSS styles]] may be applied to this tag, e.g.: <code><nowiki><poem style="margin-left: 2em;"></nowiki></code>.

{{markup
|<nowiki><poem>
In Xanadu did Kubla Khan
  A stately pleasure-dome decree:
Where Alph, the sacred river, ran
  Through caverns measureless to man
Down to a sunless sea.

So twice five miles of fertile ground
  With walls and towers were girdled round:
And there were gardens bright with sinuous rills,
  Where blossomed many an incense-bearing tree;
And here were forests ancient as the hills,
  Enfolding sunny spots of greenery.
</poem></nowiki>
|<poem>
In Xanadu did Kubla Khan
  A stately pleasure-dome decree:
Where Alph, the sacred river, ran
  Through caverns measureless to man
Down to a sunless sea.

So twice five miles of fertile ground
  With walls and towers were girdled round:
And there were gardens bright with sinuous rills,
  Where blossomed many an incense-bearing tree;
And here were forests ancient as the hills,
  Enfolding sunny spots of greenery.
</poem>
}}

Poems and their translation can be presented side-by-side, and the language can be indicated with <code>lang="xx"</code>. Following the last side-by-side block, {{tlx|Clear|left}} must be used to cancel <code>"float:left;"</code> and to re-establish normal flow. Note that this method does not require [[#Tables|a table]] and its columns to achieve the side-by-side presentation.

'''Markup'''
<source lang="xml"><poem lang="fr" style="float:left;">Frère Jacques, frère Jacques,
Dormez-vous? Dormez-vous?
Sonnez les matines! Sonnez les matines!
Ding, dang, dong. Ding, dang, dong.</poem>
<poem style="margin-left:2em; float:left;">Are you sleeping? Are you sleeping?
Brother John, Brother John,
Morning bells are ringing! Morning bells are ringing!
Ding, dang, dong. Ding, dang, dong.</poem>{{Clear|left}}</source>
'''Renders as'''
<poem lang="fr" style="float:left;">Frère Jacques, frère Jacques,
Dormez-vous? Dormez-vous?
Sonnez les matines! Sonnez les matines!
Ding, dang, dong. Ding, dang, dong.</poem>
<poem style="margin-left:2em; float:left;">Are you sleeping? Are you sleeping?
Brother John, Brother John,
Morning bells are ringing! Morning bells are ringing!
Ding, dang, dong. Ding, dang, dong.</poem>{{Clear|left}}

==Format==

===Text formatting===

{| class="wikitable"
|- style="vertical-align: top;"
!style="width:34%;"| Description
!style="width:33%;"| What you type
!style="width:33%;"| What it looks like

<!---------- italics, bold, smallcaps ----------->
|- id="emph" style="vertical-align: top;"
|
''italics'', '''bold''', {{smallcaps|small capital letters}}
|
<pre>
To ''italicize text'', put two consecutive apostrophes on each side of it.

Three apostrophes each side will '''bold the text'''.

Five consecutive apostrophes on each side (two for italics plus three for bold) produces '''''bold italics'''''.

'''''Italic and bold formatting''''' works correctly only within a single line.

For text as {{smallcaps|small caps}}, use the template {{tl|smallcaps}}.
</pre>
|
To ''italicize text'', put two consecutive apostrophes on each side of it.

Three apostrophes each side will '''bold the text'''.

Five consecutive apostrophes on each side (two for italics plus three for bold) produces '''''bold italics'''''.

'''''Italic and bold formatting''''' works correctly only within a single line.

For text as {{smallcaps|small caps}}, use the template {{tl|smallcaps}}.

To reverse this effect where it has been automatically applied, use {{tl|nobold}} and {{tl|noitalic}}.

<!------------- inline source code -------------->
|-
|
Small chunks of [[source code]] within a line of normal text.

Code is displayed in a [[Monospaced font|monospace]] font.
|
<pre><nowiki>function <code>int m2()</code> is nice.</nowiki></pre>
|
function <code>int m2()</code> is nice.

<!------------ syntax highlighting -------------->
|- style="vertical-align:top;"
|
[[mw:Extension:SyntaxHighlight|Syntax highlighting]] for source code.

Computer code has colored text and more stringent formatting. For example, to define a function: <code>int m2()</code>, with highlights.

See [https://github.com/wikimedia/mediawiki-extensions-SyntaxHighlight_GeSHi/blob/master/SyntaxHighlight.lexers.php here] for a full list of supported languages that can be put in <code>lang="????"</code>
|
<pre><nowiki><syntaxhighlight lang="cpp">
#include <iostream>
int m2 (int ax, char *p_ax) {
  std::cout <<"Hello World!";
  return 0;
}</syntaxhighlight></nowiki></pre>
OR (will be rendered exactly the same way)
<pre><nowiki><source lang="cpp">
#include <iostream>
int m2 (int ax, char *p_ax) {
  std::cout <<"Hello World!";
  return 0;
}</source></nowiki></pre>
|
<syntaxhighlight lang="cpp">
#include <iostream>
int m2 (int ax, char *p_ax) {
  std::cout <<"Hello World!";
  return 0;
}</syntaxhighlight>

<!---------------- <small> text ----------------->
|-
|
<small>Small text</small>
|
<source lang="html">
Use <small>small text</small> only 
when necessary.
</source>
|
Use <small>small text</small> only when necessary.

<!---------------- <small> span ----------------->
|-
|
<small style="font-size:87%;">a <nowiki><small></nowiki> span</small>
|
<source lang="html">
To match, for example, the font-size used in an [[Help:Visual file markup#Caption|image caption]], the "small" tag can also be used to 
<small style="font-size:87%;">reduce a text's font-size to 87%</small>.
</source>
|
To match, for example, the font-size used in an [[Help:Visual file markup#Caption|image caption]], the "small" tag can also be used to <small style="font-size:87%;">reduce a text's font-size to 87%</small>.

<!----------------- <big> text ------------------>
|-
|
<big>Big text</big>
|
<source lang="html">
Better not use <big>big text</big>, unless <small>it's <big>within</big> small</small> text.
</source>
|
Better not use <big>big text</big>, unless <small>it's <big>within</big> small</small> text.

<!-------------------- nbsp --------------------->
|-
|
To prevent two words from becoming separated by a [[linewrap]] (e.g. ''Mr.&nbsp;Smith'' or ''400&nbsp;km/h'') a '''[[non-breaking space]]''', sometimes also called a "non-printing character", may be used between them. (For three or more words, the template {{tl|nowrap}} is probably more suitable.)
|
<pre>Mr.&amp;nbsp;Smith or 400&amp;nbsp;km/h</pre>
|
Mr.&nbsp;Smith or 400&nbsp;km/h

<!------------------- {{pad}} ------------------->
|-
|
'''Extra spacing''' within text is usually best achieved using the {{tl|pad}} template.
|
<pre><nowiki>Mary {{pad|4.0em}} had a little lamb.</nowiki></pre>
|
Mary {{pad|4.0em}} had a little lamb.

<!---------- (<kbd>)
|-
|
'''Typewriter text'''<br><br>

(Also works beyond the end of a paragraph.)
|
<pre><nowiki><kbd>right arrow    →</kbd>

<kbd>''italics'', '''bold'''</kbd>

<kbd>[[wikilink]]

New paragraph </kbd>started here.</nowiki></pre>
|
<pre><kbd>right arrow    →</kbd>

<kbd>''italics'', '''bold'''</kbd>

<kbd>[[wikilink]]

New paragraph </kbd>started here.</pre>

 ----->
|}

===Special characters===
{{See also|Help:Special characters|List of XML and HTML character entity references}}
Special characters can often be displayed using [[Numeric character reference|numeric character references]] or [[List of XML and HTML character entity references|character entity references]]. See [[Character encodings in HTML]] for more information. For example, <code>&amp;Agrave;</code> and <code>&amp;#xC0;</code> both render [[&Agrave;]] (A-[[Grave accent|grave]]). [[Percent-encoding]] can't be used, as it works only in [[URL]]s.

====Diacritical marks====
[[Diacritic]] marks, using character entity references.
{| class="wikitable"
! What you type
! What it looks like
|-
|
<pre><nowiki>&amp;Agrave; &amp;Aacute; &amp;Acirc; &amp;Atilde; &amp;Auml; &amp;Aring; &amp;AElig;

&amp;Ccedil; &amp;Egrave; &amp;Eacute; &amp;Ecirc; &amp;Euml;

&amp;Igrave; &amp;Iacute; &amp;Icirc; &amp;Iuml; &amp;Ntilde;

&amp;Ograve; &amp;Oacute; &amp;Ocirc; &amp;Otilde; &amp;Ouml; &amp;Oslash; &amp;OElig;

&amp;Ugrave; &amp;Uacute; &amp;Ucirc; &amp;Uuml; &amp;Yuml; &amp;szlig;

&amp;agrave; &amp;aacute; &amp;acirc; &amp;atilde; &amp;auml; &amp;aring; &amp;aelig; &amp;ccedil;

&amp;egrave; &amp;eacute; &amp;ecirc; &amp;euml;

&amp;igrave; &amp;iacute; &amp;icirc; &amp;iuml; &amp;ntilde;

&amp;ograve; &amp;oacute; &amp;ocirc; &amp;otilde; &amp;ouml; &amp;oslash; &amp;oelig;

&amp;ugrave; &amp;uacute; &amp;ucirc; &amp;uuml; &amp;yuml;</nowiki></pre>

|
À Á Â Ã Ä Å Æ

Ç È É Ê Ë

Ì Í Î Ï Ñ

Ò Ó Ô Õ Ö Ø Œ

Ù Ú Û Ü Ÿ ß

à á â ã ä å æ ç

è é ê ë

ì í î ï ñ

ò ó ô õ ö ø œ

ù ú û ü ÿ
|}

====Punctuation special characters====
Using character entity references.
{| class="wikitable"
! What you type
! What it looks like
|-
|<code>&amp;iquest; &amp;iexcl; &amp;sect; &amp;para;</code>
|¿ ¡ § ¶ 
|-
|<code>&amp;dagger; &amp;Dagger; &amp;bull; &amp;ndash; &amp;mdash;</code>
|† ‡ • &ndash; &mdash;
|-
|<code>&amp;lsaquo; &amp;rsaquo; &amp;laquo; &amp;raquo;</code>
|‹ › « »
|-
|<code>&amp;lsquo; &amp;rsquo; &amp;ldquo; &amp;rdquo;</code>
|&lsquo; &rsquo; &ldquo; &rdquo;
|-
|<code>&amp;apos; &amp;quot;</code> 
|&apos; &quot;
|}

====Escaping punctuation characters====
The [[#Pre|{{tag|pre|o}}]], [[#Nowiki|{{tag|nowiki|o}}]], and  [[#Code|{{tag|code|o}}]]  markup tags are also available, for writing <nowiki>"[", "{", "&", "}", "]"</nowiki> for example. These tags prevent these characters from being recognised as wiki markup, which is a possibility in some circumstances.

====Commercial symbols====
Using character entity references.
{| class="wikitable"
! What you type
! What it looks like
|-
|<code>&amp;trade; &amp;copy; &amp;reg; </code>
|™ © ®
|-
|<code>&amp;cent; &amp;euro; &amp;yen; &amp;pound; &amp;curren;</code>
|¢ € ¥ £ ¤
|}

====Greek characters====
Using character entity references.
{| class="wikitable"
! What you type
! What it looks like
|-
|<code>&amp;alpha; &amp;beta; &amp;gamma; &amp;delta; &amp;epsilon; &amp;zeta; </code>
|α β γ δ ε ζ
|-
|<code>&amp;Alpha; &amp;Beta; &amp;Gamma; &amp;Delta; &amp;Epsilon; &amp;Zeta;</code>
|Α Β Γ Δ Ε Ζ
|-
|<code>&amp;eta; &amp;theta; &amp;iota; &amp;kappa; &amp;lambda; &amp;mu; &amp;nu;</code>
|η θ ι κ λ μ ν
|-
|<code>&amp;Eta; &amp;Theta; &amp;Iota; &amp;Kappa; &amp;Lambda; &amp;Mu; &amp;Nu; </code>
|Η Θ Ι Κ Λ Μ Ν
|-
|<code>&amp;xi; &amp;omicron; &amp;pi; &amp;rho; &amp;sigma; &amp;sigmaf;</code>
|ξ ο π ρ σ ς
|-
|<code>&amp;Xi; &amp;Omicron; &amp;Pi; &amp;Rho; &amp;Sigma; </code>
|Ξ Ο Π Ρ Σ
|-
|<code>&amp;tau; &amp;upsilon; &amp;phi; &amp;chi; &amp;psi; &amp;omega;</code>
|τ υ φ χ ψ ω
|-
|<code>&amp;Tau; &amp;Upsilon; &amp;Phi; &amp;Chi; &amp;Psi; &amp;Omega; </code>
|Τ Υ Φ Χ Ψ Ω
|}

====Egyptian hieroglyphs====
{{main|Help:WikiHiero syntax}}

WikiHiero is a software extension that renders [[Egyptian hieroglyphs]] as PNG images using {{xtag|hiero}} tags.

Example:
{{markup
|<nowiki><hiero>P2</hiero></nowiki>
|<hiero>P2</hiero>
}}

====Chess symbols====
{{main|Chess symbols in Unicode}}

For example, &amp;#9812; displays &#9812;

====Subscripts and superscripts====
* The [[Wikipedia:Manual of Style (mathematics)#Superscripts and subscripts|Manual of Style]] prefers the {{tag|sub|o}} and {{tag|sup|o}} formats, for example <code>x{{tag|sub|content=1}}</code>. So this should be used under most circumstances.
* The latter methods of sub/superscripting cannot be used in the most general context, as they rely on [[Unicode]] support that may not be present on all users' machines.

{| class="wikitable"
! Description
! What you type
! What it looks like
|-
|
''Subscripts''
|
<source lang="html">
x<sub>1</sub> x<sub>2</sub> x<sub>3</sub> or

x&#8320; x&#8321; x&#8322; x&#8323; x&#8324;

x&#8325; x&#8326; x&#8327; x&#8328; x&#8329;
</source>
|

x<sub>1</sub> x<sub>2</sub> x<sub>3</sub> or

x₀ x₁ x₂ x₃ x₄

x₅ x₆ x₇ x₈ x₉

|-
|
''Superscripts''
|
<source lang="html">
x<sup>1</sup> x<sup>2</sup> x<sup>3</sup> or

x&#8304; x&sup1; x&sup2; x&sup3; x&#8308;

x&#8309; x&#8310; x&#8311; x&#8312; x&#8313;
</source>
|

x<sup>1</sup> x<sup >2</sup > x<sup >3</sup > or

x⁰ x¹ x² x³ x⁴

x⁵ x⁶ x⁷ x⁸ x⁹

|-
|
''Combined''
|
<pre>
&epsilon;<sub>0</sub> = 8.85 &times; 10<sup>&minus;12</sup> C&sup2; / J m

1 [[hectare]] = [[1 E+4 m&sup2;]]
</pre>
|

&epsilon;<sub>0</sub> = 8.85 &times; 10<sup>&minus;12</sup> C&sup2; / J m

1 [[hectare]] = [[1 E+4 m&sup2;]]

|}

====Characters in the Private Use Area, and invisible formatting characters====
{{main|MOS:TEXT#PUA and RTL}}

Invisible and [[Private Use Areas|PUA (Private Use Areas)]] characters should be avoided where possible.  When needed, they should both be replaced with their (hexa)decimal code values (as "&#(x)...;").  This renders invisible characters visible, for manual editing, and allows [[Wikipedia:AutoWikiBrowser|AWB]] to process pages with PUA characters.  The latter should also be tagged with the {{tl|PUA}} template for tracking and future maintenance.

===Mathematical characters and formulae===

====Mathematical characters====

* See also [[Wikipedia:Mathematical symbols]], [[Wikipedia:WikiProject Mathematics|WikiProject Mathematics]] and [[TeX]].

{| class="wikitable"
! What you type
! What it looks like
|-
|<kbd>&amp;int; &amp;sum; &amp;prod; &amp;radic;</kbd>||&int; &sum; &prod; &radic;
|-
|<kbd>&amp;minus; &amp;plusmn; &amp;infin;</kbd>||&minus; &plusmn; &infin;
|-
|<kbd>&amp;asymp; &amp;prop; &amp;equiv; &amp;ne;</kbd>||&asymp; &prop; &equiv; &ne;
|-
|<kbd>&amp;le; &amp;ge;</kbd>||&le; &ge;
|-
|<kbd>&amp;times; &amp;middot; &amp;divide; &amp;part;</kbd>||&times; &middot; &divide; &part;
|-
|<kbd>&amp;prime; &amp;Prime;</kbd>||&prime; &Prime;
|-
|<kbd>&amp;nabla; &amp;permil; &amp;deg; &amp;there4; &amp;alefsym;</kbd>||&nabla; &permil; &deg; &there4; &alefsym;
|-
|<kbd>&amp;oslash;</kbd>||&oslash;
|-
|<kbd>&amp;isin; &amp;notin; &amp;cap; &amp;cup;</kbd>||&isin; &notin; &cap; &cup;
|-
|<kbd>&amp;sub; &amp;sup; &amp;sube; &amp;supe;</kbd>||&sub; &sup; &sube; &supe;
|-
|<kbd>&amp;not; &amp;and; &amp;or; &amp;exist; &amp;forall;</kbd>||&not; &and; &or; &exist; &forall;
|-
|<kbd>&amp;rArr; &amp;lArr; &amp;dArr; &amp;uArr; &amp;hArr;</kbd>||&rArr; &lArr; &dArr; &uArr; &hArr;
|-
|<kbd>&amp;rarr; &amp;larr; &amp;darr; &amp;uarr; &amp;harr;</kbd>||&rarr; &larr; &darr; &uarr; &harr;
|}

====Mathematical formulae====
{{main|Help:Displaying a formula}}

* Formulae that include mathematical letters, like {{math|x}}, and operators like <code>×</code> should not use the plain letter <code>x</code>. See [[MOS:MATH#Font_formatting|math font formatting]]. For a comprehensive set of symbols, and comparison between {{tag|math|o}} tags and the {{tl|math}} template see section [[Help:Displaying_a_formula#TeX_vs_HTML|''TeX vs HTML'']].

* The {{tag|math|o}} tag typesets using [[MOS:MATH#Typesetting_of_mathematical_formulae|LaTeX markup]], which may render as an image or as HTML, depending on environmental settings. The {{tag|math|o}} tag is best for the complex formula on its own line in an image format. If you use this tag to put a formula in the line with text, put it in the {{tl|nowrap}} template.

* The {{tl|math}} template [[MOS:MATH#Using_HTML|uses HTML]], and will size-match a serif font, and will also prevent line-wrap. All templates are sensitive to the <code>=</code> sign, so remember to replace <code>=</code> with <code>{{tl|{{=}}}}</code> in template input, or start the input with <code>1=</code>. Use wikimarkup <code><nowiki>''</nowiki></code> and <code><nowiki>'''</nowiki></code> inside the {{tl|math}} template, as well as other [[Wikipedia:Mathematical_symbols|HTML entities]]. The {{tl|math}} template is best for typeset formulas in line with the text.

{{markup
|<source lang="tex" inline>
<math>2x \times 4y \div 6z + 8 - \frac {y}{z^2} = 0</math>
</source>

<source lang="html" inline>
{{math|2''x'' &times; 4''y'' &divide; 6''z'' + 8 &minus; {{sfrac|''y''|''z''<sup>2</sup>}} {{=}} 0}}
</source>

<source lang="tex" inline>
<math>\sin 2\pi x + \ln e</math>
</source>
<nowiki>
{{math|sin 2&amp;pi;''x'' + ln ''e''}}
</nowiki>
|<math>2x \times 4y \div 6z + 8 - \frac {y}{z^2} = 0</math>
{{crlf|}}

{{math|2''x'' &times; 4''y'' &divide; 6''z'' + 8 &minus; {{sfrac|''y''|''z''<sup>2</sup>}} {{=}} 0}}

<math>\sin 2\pi x + \ln e</math>{{crlf|}}
{{math|sin 2π''x'' + ln ''e''}}
}}

====Spacing in simple math formulae====

* Using '''<code>&amp;nbsp;</code>''' to prevent line break is not needed; the {{tl|math}} template will prevent line breaks anyway; you can use {{tag|br|s}} if you need an explicit line break inside a formula.

{{markup
|<source lang="html" inline>
It follows that {{math|''x''<sup>2</sup> &ge; 0}} for real {{mvar|x}}.
</source>
|2=

It follows that {{math|''x''<sup>2</sup> &ge; 0}} for real {{mvar|x}}.
}}

====Complicated formulae====

* See [[Help:Displaying a formula]] for how to use {{tag|math|o}}.
* A formula displayed on a line by itself should probably be indented by using the colon (:) character.

{{markup
|<source lang="latex" inline>
: <math>\sum_{n=0}^\infty \frac{x^n}{n!}</math>
</source>
|2={{crlf2}}
: <math>\sum_{n=0}^\infty \frac{x^n}{n!}</math>
}}

==Links and URLs==
{{main|Help:Link}}

===Free links===

In [[Wikipedia]] and some other [[wiki]]s, '''free links''' are used in [[wikitext]] markup to produce [[internal link]]s between pages, as opposed to the concept of [[CamelCase]] for the same purpose, which was used in the early days of Wikipedia – see [[Wikipedia:CamelCase and Wikipedia|CamelCase and Wikipedia]].

In [[Wikipedia:How to edit a page#Wiki markup|Wikipedia's markup language]], you create free links by putting double square brackets around text designating the title of the page you want to link to. Thus, <code><nowiki>[[Texas]]</nowiki></code> will be rendered as [[Texas]]. Optionally, you can use a [[vertical bar]] (|) to customize the link title. For example, typing <code><nowiki>[[Texas|Lone Star State]]</nowiki></code> will produce [[Texas|Lone Star State]], a link that is displayed as "<u>Lone Star State</u>" but in fact links to [[Texas]].

====Link to another wiki article====

* Internally, the first letter of the target page is automatically capitalized and spaces are represented as underscores (typing an underscore in the link has the same effect as typing a space, but is not recommended).
* Thus the link hereafter is to the Web address <code>en.wikipedia.org/wiki/Public_transport</code>, which is the Wikipedia article with the name "Public transport". See also [[Help:Link#Conversion to canonical form|Canonicalization]].
* [[Intentionally permanent red link|A red link]] is a page that doesn't exist yet; it can be created by clicking on the link.
* [[Help:Self link|A link to its own page]] will appear only as bold text.

{{markup
|<nowiki>London has [[public transport]].</nowiki>
|London has [[public transport]].

|<nowiki>Link to this article: "[[Help:Wikitext]]" will appear only as bold text.</nowiki>
|Link to this article: "[[Help:Wikitext]]" will appear only as bold text.

}}

====Renamed link====

* Same target, different name.
* The target ("piped") text must be placed '''first''', then the text to be displayed '''second'''.

{| class="wikitable"
! What you type
! What it looks like
|-
|
<code><nowiki>New York also has [[public transport|public transportation]].</nowiki></code>
|
New York also has [[public transport|public transportation]].
|}

====Automatically rename links====

* Simply typing the pipe character | after a link will automatically rename the link in certain circumstances. The next time you open the edit box you will see the expanded piped link. When [[Help:Show preview|previewing]] your edits, you will not see the expanded form until you press '''Save''' and '''Edit''' again. The same applies to [[#link-to-section|links to sections within the same page]].
* See [[Help:Pipe trick|Pipe trick]] for details.

{| class="wikitable"
! Description
! What you type
! What it looks like
|-
|
''Automatically hide stuff in parentheses''
|
<code><nowiki>[[kingdom (biology)|]]</nowiki></code>
|
[[kingdom (biology)|kingdom]]
|-
| ''Automatically hide the comma and following text''
| <code><nowiki>[[Seattle, Washington|]]</nowiki></code>
| [[Seattle, Washington|Seattle]]
|-
|
''Automatically hide namespace''
|
<code><nowiki>[[Wikipedia:Village pump|]]</nowiki></code>
|
[[Wikipedia:Village pump|Village pump]]
|-
|
''Or both''
|
<code><nowiki>[[Wikipedia:Manual of Style (headings)|]]</nowiki></code>
|
[[Wikipedia:Manual of Style (headings)|Manual of Style]]
|-
|
''<b>But this doesn't work for section links</b>''
|
<code><nowiki>[[Wikipedia:Manual of Style#Links|]]</nowiki></code>
|
[[Wikipedia:Manual of Style#Links|]]
|}

====Blend link====

* Endings are blended into the link. 
** ''Exception'': a trailing [[apostrophe]] (') and any characters following the apostrophe are ''not'' blended.
* Preferred style is to use this instead of a piped link, if possible.
* Blending can be suppressed by using the [[#Nowiki|{{tag|nowiki|s}}]] tag, which may be desirable in some instances.

{| class="wikitable"
! Description
! What you type
! What it looks like
|-
| rowspan=2 | ''Blending active''
|
<code><nowiki>San Francisco also has [[public transport]]ation. Examples include [[bus]]es, [[taxicab]]s, and [[tram]]s.</nowiki></code>
| San Francisco also has [[public transport]]ation. Examples include [[bus]]es, [[taxicab]]s, and [[tram]]s.
|- 
| <code><nowiki>A [[micro-]]second</nowiki></code>
| A [[micro-]]second
|-
|
''Blending suppressed''
|
<code><nowiki>A [[micro-]]<nowiki />second.</nowiki></code>
|
A [[micro-]]<nowiki />second
|}

====Link to a section of a page====

* The part after the hash sign (#) must match a [[Section_editing#Creation_and_numbering_of_sections|section heading]] on the page. Matches must be exact in terms of spelling, case, and punctuation. Links to non-existent sections are not broken; they are treated as links to the beginning of the page.
* Include "| link title" to create a stylish ([[WP:Piping|piped]]) link title.
* If sections have the same title, add a number to link to any but the first. [[#Example section 3]] goes to the third section named "Example section". You can use the pipe and retype the section title to display the text without the # symbol.

{| class="wikitable"
! What you type
! What it looks like
|-
|
<code><nowiki>[[Wikipedia:Manual of Style#Italics]] is a link to a section within another page.</nowiki></code>
|
[[Wikipedia:Manual of Style#Italics]] is a link to a section within another page.
|-
|
<code><nowiki>[[#Links and URLs]] is a link to another section on the current page. [[#Links and URLs|Links and URLs]] is a link to the same section without showing the # symbol.</nowiki></code>
|
[[#Links and URLs]] is a link to another section on the current page. [[#Links and URLs|Links and URLs]] is a link to the same section without showing the # symbol.
|-
|
<code><nowiki>[[Wikipedia:Manual of Style#Italics|Italics]] is a piped link to a section within another page.</nowiki></code>
|
[[Wikipedia:Manual of Style#Italics|Italics]] is a piped link to a section within another page.
|}

====Create a page link====

* To create a new page:
*# Create a link to it on some other (related) page.
*# Save that page.
*# Click on the link you just made. The new page will open for editing.
* For more information, see [[Wikipedia:Starting an article|starting an article]] and check out Wikipedia's [[Wikipedia:Naming conventions|naming conventions]].
* Please do not create a new article without linking to it from at least one other article.

{| class="wikitable"
! Description
! What you type
! What it looks like
|-
|
''Links to pages that don’t exist yet look red.''
|
<code><nowiki>The article about [[cardboard sandwiches]] doesn't exist yet.</nowiki></code>
|
The article about [[cardboard sandwiches]] doesn't exist yet.
|}

===Redirects===
{{main|Help:Redirect}}

* [[Wikipedia:Redirect|Redirect]] one article title to another by placing a directive like the one shown to the right on the ''first'' line of the article (such as at a page titled "[[US]]").
* It is possible to redirect to a section. For example, a redirect to [[United States#History]] will redirect to the History section of the [[United States]] page, if it exists.

{| class="wikitable" border=1
! Description
! What you type
|-
|
''Redirect to an article''
|
<code><nowiki>#REDIRECT [[United States]] </nowiki></code>
|-
|
''Redirect to a section''
|
<code><nowiki>#REDIRECT [[United States#History]]</nowiki></code>
|}

===Link to another [[Help:namespace|namespace]]===

*The full page name should be included in double square brackets.

{| class="wikitable"
! What you type
! What it looks like
|-
|
<code><nowiki>See the [[Wikipedia:Manual of Style]].</nowiki></code>
|
See the [[Wikipedia:Manual of Style]].
|}

===Link to the same article in another language (interlanguage links)===
{{main|Help:Interlanguage links|Wikipedia:Complete list of language wikis available}}
{{notice|After the launch of [[Wikipedia:Wikidata|Wikidata]], interlanguage links are now added through it. Links in articles should exist only in special cases, for example when an article in one language has two articles in another language.}}

* To link to a corresponding page in another language, use the form: <code><nowiki>[[</nowiki><em>language code</em>:<em>Foreign title</em><nowiki>]]</nowiki></code>.
* It is recommended interlanguage links be placed at the very end of the article.
* Interlanguage links are not visible within the formatted article, but instead appear as language links on the sidebar (to the left) under the menu section "languages".

* '''NOTE:''' To create an '''''inline link''''' (a clickable link within the text) to ''any'' foreign language article, see [[Help:Interlanguage links#Inline interlanguage links]] and consider the usage notes.

{| class="wikitable"
! Description
! What you type
|-
|
''Link from English article "Plankton" to the Spanish article [[:es:Plancton|"Plancton"]].''

''"es" is the language code for "{{lang|es|español}}" (the [[Spanish language]]).''
|
<pre>
[[es:Plancton]]
</pre>

|-
|
''Other examples: French (<code>fr</code> for {{lang|fr|français}}), German (<code>de</code> for {{lang|de|Deutsch}}), Russian (<code>ru</code>), and simple English (<code>simple</code>).''
|
<pre>
[[fr:Plancton]]
[[de:Plankton]]
[[ru:Планктон]]
[[simple:Plankton]]
</pre>

|}

===Interwiki link===

* [[Interwiki links]] link to any page on other wikis. [[Help:Interwikimedia links|Interwikimedia links]] link to other Wikimedia wikis.
* Note that interwikimedia links use the internal link style, with double square brackets.
* See [[MetaWikiPedia:Interwiki_map]] for the list of shortcuts; if the site you want to link to is not on the list, use an [[#External links|external link]].
* See also [[Wikipedia:Wikimedia sister projects|Wikimedia sister projects]].

{| class="wikitable"
! Description
! What you type
! What it looks like
|-
| colspan="3"|
Linking to a page on another wiki in English.

All of these forms lead to the URL <em>http://en.wiktionary.org/wiki/hello</em>.
|-
|
''Simple link.''

''Without prefix.''

''Named link.''
|
<code><nowiki>[[Wiktionary:hello]]</nowiki></code>

<code><nowiki>[[Wiktionary:hello|]]</nowiki></code>

<code><nowiki>[[Wiktionary:hello|Wiktionary definition of "hello"]] </nowiki></code>
|
[[Wiktionary:hello]]

[[Wiktionary:hello|hello]]

[[Wiktionary:hello|Wiktionary definition of "hello"]]
|-
| colspan="3"|
Linking to a page on another wiki in another language.

All of these forms lead to the URL <em>http://fr.wiktionary.org/wiki/bonjour</em>.
|-
|
''Simple link.''

''Without prefix.''

''Named link.''
|
<code><owiki>[[Wiktionary:fr:bonjour]]</nowiki></code>

<code><nowiki>[[Wiktionary:fr:bonjour|]]</nowiki></code>

<code><nowiki>[[Wiktionary:fr:bonjour|bonjour]]</nowiki></code>
|
[[Wiktionary:fr:bonjour]]

[[Wiktionary:fr:bonjour|fr:bonjour]]

[[Wiktionary:fr:bonjour|bonjour]]
|}

===Categories===

* To put an article in a [[Wikipedia:Categorization|category]], place a link like <code><nowiki>[[Category:Example]]</nowiki></code> into the article. As with interlanguage links, placing these links at [[WP:FOOTERS|the end of the article]] is recommended.
* To link to a category page without putting the article into the category, use a colon prefix (":Category") in the link.

{| class="wikitable"
! Description
! What you type
! What it looks like
|-
|
''Categorize an article.''
|
<code><nowiki>[[Category:Character sets]]</nowiki></code>
|
|-
|
''Link to a category.''
|
<code><nowiki>[[:Category:Character sets]]</nowiki></code>
|
[[:Category:Character sets]]
|-
|
''Without prefix.''
|
<code><nowiki>[[:Category:Character sets|]]</nowiki></code>
|
[[:Category:Character sets|Character sets]]
|}

===External links===
<!-- linked from [[Wikipedia:External links]] -->

*Single square brackets indicate an external link. Note the use of a ''space'' (not a pipe |) to separate the URL from the link text in a named link. Square brackets may be used as normal punctuation when not linking to anything – [like this].
*A [[Uniform Resource Locator|URL]] must begin with a supported [[URI scheme]]: <code>http://</code> and <code>https://</code> will be supported by all browsers; <code>irc://</code>, <code>ircs://</code>, <code>ftp://</code>, <source inline>news://</source>, <code>mailto:</code>, and <code>gopher://</code> will require a plugin or an external application. IPv6 addresses in URLs are currently not supported.
*A URL containing certain characters will display and link incorrectly unless those characters are [[Percent-encoding|percent encoded]]. For example, a space must be replaced by <code>%20</code>. Encoding can be achieved by:
:*Use the link button [[File:OOjs UI icon link-ltr.svg]] on the enhanced editing toolbar to encode the link; this tool will add the bracket markup and the linked text, which may not always be desirable.
:*Or manually encode the URL by replacing these characters:

{| class="wikitable" style="margin-left: 5em"
! ''space'' !! " !! ' !! , !! ; !! < !! > !! ? !! [ !! ]
|-
| %20 || %22 || %27 || %2c || %3b || %3c || %3e || %3f || %5b || %5d
|}
:*Or use the <code><nowiki>{{urlencode:}}</nowiki></code> magic word. See [[:mw:Help:Magic words#URL data|Help:Magic words]] in the MediaWiki documentation for more details.

* See [[Wikipedia:External links]] for style issues, and [[:Category:External link file type templates]] for indicating the file type of an external link with an icon.

{| class="wikitable"
! Description
! What you type
! What it looks like
|-
|
''Named link'' with an [[Help:external link icons|external link icon]]
|
<code><nowiki>[http://www.wikipedia.org Wikipedia]</nowiki></code>
|
[http://www.wikipedia.org Wikipedia]
|-
|
''Unnamed link''

''(Used only within article body for footnotes)''
|
<code><nowiki>[http://www.wikipedia.org]</nowiki></code>
|
[http://www.wikipedia.org]
|-
|
''Bare URL''

''(Bad style)''  

use <nowiki><nowiki></nowiki></nowiki> to keep this bad style from showing
|
<code><nowiki>http://www.wikipedia.org</nowiki></code>
|
http://www.wikipedia.org
|-
|
''Link without arrow''

''(Not often used)''
|
<code><nowiki><span class="plainlinks">[http://www.wikipedia.org Wikipedia]</span</nowiki></code>
|
<span class="plainlinks"> [http://www.wikipedia.org Wikipedia]</span>
|}

===Automatic links===
{{main|Help:Magic links}}

Magic links are automatic links for certain unique identifiers that require no markup. They can be used for ISBN numbers, RFC numbers, and PMID numbers.

====Book sources====

* Link to books using their [[Wikipedia:ISBN|ISBN]], which creates a link to [[Special:BookSources]]. This is preferred to linking to a specific online bookstore, because it gives the reader a choice of vendors. However, if one bookstore or online service provides additional free information, such as table of contents or excerpts from the text, then a link to that source will aid the user and is recommended. ISBN links do not need any extra markup, provided you use one of the indicated formats.
* To create a link to [[Special:BookSources]] using alternative text (e.g. the book's title), use the internal link style with the appropriate namespace.

{| class="wikitable"
! What you type
! What it looks like
|-
|
<code><nowiki>{{ISBN|022628705X}}</nowiki></code>
|
{{ISBN|022628705X}}
|-
|
<code><nowiki>{{ISBN|0-22-628705-X}}</nowiki></code>
|
{{ISBN|0-22-628705-X}}
|-
|
<code><nowiki>Link to a book using [[Special:BookSources/0670037818|alternative text, such as its title]]</nowiki></code>
|
Link to a book using [[Special:BookSources/0670037818|alternative text, such as its title]]
|}

====RFC number====

* Link to an [[Internet Engineering Task Force]] [[Request for Comments|Request for Comments (RFC)]].

{| class="wikitable"
! What you type
! What it looks like
|-
|
<code><nowiki>Text mentioning an RFC number anywhere, e.g. RFC 4321.</nowiki></code>
|
Text mentioning an RFC number anywhere, e.g. RFC 4321.
|}

===Miscellaneous===

===="As of" template====

* The ''[[Wikipedia:As of|As of]]'' template generates phrases like "As of April 2009" or "as of April 2009", and categorize information that will need updating. For an explanation of the parameters see the {{tl|As of}} documentation.

{| class="wikitable"
! What you type
! What it looks like
|-
|
<code><nowiki>{{As of|2009|4|df=us}}</nowiki></code>
|
{{As of|2009|4|df=us}}
|-
|
<code><nowiki>{{As of|2009|4|df=us|lc=y}}</nowiki></code>
|
{{As of|2009|4|df=us|lc=y}}
|}

====Media link====

* To include links to non image uploads such as sounds, use a "media" link. For images, [[#Images|see next section]].
* Some uploaded sounds are listed at [[Commons:Sound]].

{| class="wikitable"
! What you type
! What it looks like
|-
|
<code><nowiki>[[media:Classical guitar scale.ogg|Sound]]</nowiki></code>
|
[[Media:Classical guitar scale.ogg|Sound]]
|}

====Links directly into edit mode====
*These create links that directly go to the edit or view source tab. For example, to create links to the edit tab for this page, either of the following works:
{| class="wikitable"
! Description
! What you type
! What it looks like
|-
|
Using the {{tl|fullurl}} template
|
<code><nowiki>[{{fullurl:Help:Wiki markup|action=edit}} edit]</nowiki></code>
|
[{{fullurl:Help:Wiki markup|action=edit}} edit]
|-
|
Using the {{tl|Edit}} template
|
<code><nowiki>{{edit}}</nowiki></code>
|
{{edit}}
|}

====Links partially italicized====

*Linking to a page with a title containing words that are usually italicized, such as the [[Hindenburg disaster|''Hindenburg'' disaster]] article.

{| class="wikitable"
! What you type
! What it looks like
|-
|
<code><nowiki>[[Hindenburg disaster|''Hindenburg'' disaster]]</nowiki></code>
|
[[Hindenburg disaster|''Hindenburg'' disaster]]
|}

==Pronunciation aids==

I is often desirable to provide an aid to pronunciation for a word. The [[Template:IPAc-en|''IPAc-en'']] and [[Template:Respell|''Respell'']] templates can be of assistance.

{| class="wikitable"
! What you type
! What it looks like
|-
|
<code><nowiki>'''Konjac''' {{IPAc-en|lang|pron|ˈ|k|oʊ|n|j|æ|k}}</nowiki></code>
|
'''Konjac''' {{IPAc-en|lang|pron|ˈ|k|oʊ|n|j|æ|k}}
|-
|
<code><nowiki>'''Konjac''' ({{IPAc-en|lang|pron|ˈ|k|oʊ|n|j|æ|k}} {{respell|KOHN|yak}})</nowiki></code>
|
'''Konjac''' ({{IPAc-en|lang|pron|ˈ|k|oʊ|n|j|æ|k}} {{respell|KOHN|yak}})
|-
|
<code><nowiki>''Konjac'' is pronounced {{IPAc-en|ˈ|k|oʊ|n|j|æ|k}} in English.</nowiki></code>
|
''Konjac'' is pronounced {{IPAc-en|ˈ|k|oʊ|n|j|æ|k}} in English.
|}

Refer to [[Wikipedia:Manual of Style (pronunciation)]] for more information.

==Musical notation==
{{main|Help:Score}}
Musical notation is added by using the {{xtag|score|p}} extension tag. For example:
:
{{markup
|<nowiki><score>\relative c' { fis d fis a d f e d c cis d e a g f ees }</score></nowiki>
|<score>\relative c' { fis d fis a d f e d c cis d e a g f ees }</score>
}}

==Images==
{{Main page|Help:Visual file markup|Wikipedia:Images}}
Only images that have been uploaded to Wikipedia or [[commons:main|Wikipedia Commons]] can be used. To upload images, use the [[:commons:Special:UploadWizard|Commons upload wizard]] for photos you have taken, and the [[Special:Upload|upload page]] if there may be copyright issues. You can find the uploaded image on the [[Special:Imagelist|image list]].

See the Wikipedia's [[Wikipedia:Image use policy|image use policy]] for the policy used on Wikipedia.

For further help on images, including some more versatile abilities, see the [[WP:PIC|picture tutorial]] and [[Wikipedia:Extended image syntax|extended image syntax]].

{| class="wikitable"
|-
! What you type
! What it looks like
! Notes
|- style="vertical-align:top;"
| <pre style="white-space: pre-wrap;">The image name, the word thumb then the caption : 
<nowiki>[[File:wiki.png|thumb|Wikipedia logo]]</nowiki></pre> 

| The image name, the word thumb then the caption : 
[[File:wiki.png|thumb|alt=Puzzle globe|Wikipedia logo]] {{clear}}

|
* The thumb tag automatically allows the image to be enlarged and positions it (floats) automatically to the right of the page.
* An enlarge icon is placed in the lower right corner.
* See note below about adding an [[#alt tag|alt tag]]
* This is the basic markup for most images


|- style="vertical-align: top;"
| <pre>A picture: <nowiki>[[File:wiki.png]]</nowiki></pre>

| A picture: [[File:wiki.png]]

|
* The picture name alone places the image in the text, or on the next line if there is insufficient space.
* Embedding the image in the text is only possible for very small images.
* Embedding the image will affect the vertical formatting of text.
|- style="vertical-align: top;"
| <pre>With alternative text: 
<nowiki>[[File:wiki.png|alt=Puzzle globe logo]]</nowiki></pre>

| With alternative text: 
[[File:wiki.png|alt=Puzzle globe logo]]

|
* {{anchor|alt tag}}Alternative text, used when the image is unavailable or when the image is loaded in a text-only browser, or when spoken aloud, is '''strongly''' encouraged. See [[Wikipedia:Alternative text for images|Alternative text for images]] for help on choosing it.

|- style="vertical-align:top;"
| <pre>With link: 
<nowiki>[[File:wiki.png|link=Wikipedia]]</nowiki></pre>

| With link: 
[[File:wiki.png|link=Wikipedia]] {{clear}}
|
* The link directs to the Wikipedia page, [[Wikipedia]], instead of the image file page.

|- style="ertical-align:top;"
| <pre style="white-space: pre-wrap;">Forced to the centre of the page
using the ''frame'' tag (attribute), a ''centre'' tag and a caption: 
<nowiki>[[File:wiki.png|frame|centre|alt=Puzzle globe|Wikipedia logo]]</nowiki></pre> 

| Forced to the centre of the page using the ''frame'' tag (attribute), a ''centre'' tag and a caption:
[[File:wiki.png|frame|centre|alt=Puzzle globe|Wikipedia logo]] {{clear}}

|
* The frame tag automatically floats the image right.
* The frame tag is only of use with very small images or ones using the [[#px tag|px tag]]
* The attributes left, center or centre override this, and places the image to the left or the centre of the page. {{anchor|upright tag}}
* The last parameter is the caption that appears below the image.

|- style="vertical-align:top;"
| <pre style="white-space: pre-wrap;">Forced to the left side of the page
using the ''thumb'' attribute, the ''left'' attribute  and a caption: 
<nowiki>[[File:wiki.png|thumb|left|alt=Puzzle globe|Wikipedia logo]]</nowiki></pre> 

| Forced to the left side of the page using the ''thumb'' attribute, the ''left'' attribute  and a caption:
[[File:wiki.png|thumb|left|alt=Puzzle globe|Wikipedia logo]] {{clear}}

|
* The thumb tag automatically floats the image right.
* An enlarge icon is placed in the lower right corner.
* The attributes left, center or centre override this, and places the image to the left or the centre of the page. 

|- style="vertical-align:top;"
| <pre style="white-space: pre-wrap;">Forced to the right side of the page
''without'' a caption: 
<nowiki>[[File:wiki.png|right|Wikipedia encyclopedia]]</nowiki></pre>

| Forced to the right side of the page ''without'' a caption: 
[[File:wiki.png|right|Wikipedia encyclopedia]]
|
* Captions are only displayed when the thumb or frame attributes are present
* The [[WP:PIC|picture tutorial]] explains more options.

|- style="vertical-align:top;"
| <pre>A picture resized to 50 pixels... 
<nowiki>[[File:wiki.png|50 px|Wikipedia encyclopedia]]</nowiki></pre>

| A picture resized to 50 pixels... 
[[File:wiki.png|50 px|Wikipedia encyclopedia]]

|
* {{anchor|px tag}}The [[WP:PIC|picture tutorial]] explains more options.
* This should be used very sparingly, thumb images are always of the same width. 
* There is an [[#upright tag|''upright'' attribute]] that can be used to display tall images. These tags are optimised for both laptop and mobile phone screens.

|- style="vertical-align:top;"
| <pre>Linking directly to the description page of an image: 
<nowiki>[[:File:wiki.png]]</nowiki></pre>

| Linking directly to the description page of an image: 
[[:File:wiki.png]]

|
* Clicking on an image displayed normally on a page also leads to the description page.

|- style="vertical-align:top;"
| <pre>Linking directly to an image without displaying it: 
<nowiki>[[Media:wiki.png|Image of jigsaw globe]]</nowiki></pre>

| Linking directly to an image without displaying it: 
[[Media:Wiki.png|Image of jigsaw globe]]

|
* To include links to images shown as links instead of drawn on the page, use a "media" link.

|- style="vertical-align:top;"
|
<source lang="html">Example: 
<div style="display: inline; width: 220px; float: right;">
[[File:wiki.png|50 px|Wikipedia encyclopedia]][[File:wiki.png|50 px]] </div></source>

|
Example: 
<div style="display: inline; width: 220px; float: right;">
[[File:wiki.png|50 px|Wikipedia encyclopedia]][[File:wiki.png|50 px]] </div>

|
* Using the [[span and div|<code>span</code> or <code>div</code> elements]] to separate images from text (note that this mayallow images to cover text).

|- style="vertical-align:top;"
|
<pre><nowiki>Example:

{| align=right
|-
|
[[File:wiki.png|50 px]]
|-
|
[[File:wiki.png|50 px]]
|-
|
[[File:wiki.png|50 px]]
|}</nowiki></pre>

|
Example:

{| align=right
|-
|
[[File:wiki.png|50 px]]
|-
|
[[File:wiki.png|50 px]]
|-
|
[[File:wiki.png|50 px]]
|}

|
*Using wiki markup to make a table in which to place a vertical column of images (this helps edit links match headers, especially in Firefox browsers).
|}

==Tables==
{{main|Help:Table}}
There are two ways to build tables:
* In special wiki-markup (see [[Help:Table]]).
* Using HTML elements: {{tag|table|o}}, {{tag|tr|o}}, {{tag|td|o}} or {{tag|th|o}}.

See also [[Wikipedia:Manual of Style/Tables#Appropriate|When tables are appropriate]].

==Columns==
{{main|Help:Columns}}
Use {{tl|colbegin}} and {{tl|colend}} to produce columns.

==References and citing sources==
{{main|Wikipedia:Citing sources|Help:Footnotes}}
{{see also|APA style|The Chicago Manual of Style{{!}}Chicago style|Harvard style|MLA style}}

Making a reference citing a printed or online source can be accomplished by using the {{tag|ref}} tags. Inside these tags details about the reference are added.

Details about the citation can be provided using a structure provided by various templates; the table below lists some typical citation components.

{| class="wikitable"
|-
! What it's for !! What you type
|-
| {{Nowrap|To create the reference}} || {{tag|ref|params=name="name for reference"|content=Use a closing tag}}
|-
| To cite a book || {{Tlx|cite book}}
|-
| To cite a web source || {{Tlx|cite web}}
|-
| Book ISBN || {{para|isbn|0-4397-0818-4}} (ISBN of the book)
|-
| Web URL || {{para|url|ht<nowiki />tp://www.wikipedia.org}}
|-
| Title || {{para|title|title of source}}
|-
| Author || {{para|author|authors, use commas for multiple}}
|-
| First name || {{para|first|first name}}
|-
| Last name || {{para|last|last name}}
|-
| Location || {{para|location|location of publisher}}
|-
| Publisher || {{para|publisher|who published the source}}
|-
| Date || {{para|date|2007-09-21}} (date of source)
|-
| Year || {{para|year|year of source}}
|-
| Accessed date || {{para|accessdate|2008-12-25}} (only if url= is included)
|-
| A complete reference tag || {{tag|ref|o|params=name="WikiMarkup"}}<code><nowiki>{{cite web |url=http://en.wikipedia.org/w/index.php?title=Help:Wiki_markup |title=Help:Wiki markup |publisher=Wikimedia Foundation}}</nowiki></code>{{tag|ref|c}}
|-
| Referencing this again || {{tag|ref|s|params=name="WikiMarkup"}}
|-
| Citation needed || {{tlx|Citation needed|{{tls|DATE}}}}
|}

==Templates and transcluding pages==
{{main|Wikipedia:Transclusion}}
{{see also|Help:Template#Noinclude, includeonly, and onlyinclude}}

Examples for templates: <nowiki>{{pad|...}}, {{math|...}}, {{as of|...}}, {{edit}}</nowiki>

'''[[Help:Template|Templates]]''' are segments of wiki markup that are meant to be copied automatically ("transcluded") into a page.
You add them by putting the template's name in <nowiki>{{double braces}}</nowiki>. It is also possible to transclude other pages by using <nowiki>{{:colon and double braces}}</nowiki>.

There are three pairs of [[html element|tags]] that can be used in [[wikitext]] to control how transclusion affects parts of a template or article.
They determine whether or not wikitext renders, either in its own article, which we will call "'''here'''", or in another article where it is transcluded, which we will call "'''there'''".
* '''<nowiki><noinclude></nowiki>: ''' the content '''will not be rendered ''there'''' These tags have no effect ''here''.
* '''<nowiki><includeonly></nowiki>: ''' the content  '''will render only ''there''''', and  '''will not render ''here''''' (like [[invisible ink]] made visible by means of transclusion).
* '''<nowiki><onlyinclude></nowiki>: ''' the content '''will render ''here''''' and '''will render ''there''''', but it will only render ''there'' what is between these tags.
There can be several such section "[[HTML#Elements|elements]]". Also, they can be nested. All possible renderings are achievable. For example, to render ''there'' one or more sections of the page ''here'' use '''<nowiki><onlyinclude></nowiki>''' tags. To append text ''there'', wrap the addition in '''<nowiki><includeonly></nowiki>''' tags before, within, or after the section. To omit portions of the section, nest '''<nowiki><noinclude></nowiki>''' tags within it.

If a page is transcluded without transclusion markup, it may cause an unintentional [[Help:Category#Putting_pages_in_categories|categorization]]. Any page transcluding it will contain the same category as the original page. Wrap the category markup with '''<nowiki><noinclude></nowiki>''' tags to prevent incorrect categorization.
{{anchor|hovertext}}
Some templates take ''parameters'', as well, which you separate with the pipe character <code>|</code>.

{| class="wikitable"
!width="500"| What you type
!width="1000"| What it looks like
|-
|
<pre>{{Transclusion demo}}</pre>
|
{{Transclusion demo}}
|-
|
<pre>{{Help:Transclusion demo}}</pre>
|
{{Help:Transclusion demo}}
|-
|
<pre>
This template takes two parameters,
and creates underlined text with a
hover box for many modern browsers
supporting CSS:

{{H:title|This is the hover text|
Hover your mouse over this text}}

Go to this page to see the H:title
template itself: {{tl|H:title}}
</pre>
|

This template takes two parameters,
and creates underlined text with a
hover box for many modern browsers
supporting CSS:

{{H:title|This is the hover text|
Hover your mouse over this text}}

Go to this page to see the H:title
template itself: {{tl|H:title}}

|}

==Talk and project pages==
These are likely to be helpful on [[Help:Using talk pages|talk]] and [[Wikipedia:Project namespace|project pages]].

===Signing comments===

*The  ''[[tilde]]'' character (~) is used when signing a comment on a talk page. Your username provides a link to your [[Wikipedia:user page|user page]].

{| class="wikitable"
! Description
! What you type
! What it looks like
|-
|
''You should sign your comments by appending four tildes to the comment, which adds your user name plus date/time.''
|
<code><nowiki>~~~~</nowiki></code>
|
[[Special:Mypage|Username]] ([[Special:Mytalk|talk]]) {{CURRENTTIME}}, {{CURRENTDAY}} {{CURRENTMONTHNAME}} {{CURRENTYEAR}} (UTC)
|-
|
''Adding three tildes will add just your user name.''
|
<code><nowiki>~~~</nowiki></code>
|
[[Special:Mypage|Username]] ([[Special:Mytalk|talk]])
|-
|
''Adding five tildes gives the date/time alone.''
|
<code><nowiki>~~~~~</nowiki></code>
|
{{CURRENTTIME}}, {{CURRENTDAY}} {{CURRENTMONTHNAME}} {{CURRENTYEAR}} (UTC)
|}

===Linking to old revisions of pages, diffs, and specific history pages===

*The external link function is mainly used for these. Open an old revision or diff, and copy the [[URL]] from the address bar, pasting it where you want it.

{| class="wikitable"
! What you type
! What it looks like
|-
|
<code><nowiki>[//en.wikipedia.org/w/index.php?title=Help:Wiki_markup&diff=330350877&oldid=330349143 Diff between revisions 330349143 and 330350877]</nowiki></code>
|
[//en.wikipedia.org/w/inx.php?title=Help:Wiki_markup&diff=330350877&oldid=330349143 Diff between revisions 330349143 and 330350877]
|}

*You can also use an [[Help:Diff#Internal links|internal diff link]]. '''Unlike the template {{tl|diff}}, this kind of link can even be used in edit summaries.'''

{| class="wikitable"
! What you type
! What it looks like
|-
|
<code><nowiki>[[Special:Diff/330349143/330350877|Diff between revisions 330349143 and 330350877]]</nowiki></code>
|
[[Special:Diff/330349143/330350877|Diff between revisions 330349143 and 330350877]]
|}

*If the diff intended to be shown is between an immediately previous revision, the first parameter can be dropped.

{| class="wikitable"
! What you type
! What it looks like
|-
|
<code><nowiki>[[Special:Diff/330350877|Diff between revisions 330349143 and 330350877]]</nowiki></code>
|
[[Special:Diff/330350877|Diff between revisions 330349143 and 330350877]]
|}  

*For an old revision, you can also use a [[Help:Permanent link|permalink]]. Though here only the main text is guaranteed to be retained (images and templates will be shown as they are today, not as they were at the time).

{| class="wikitable"
! What you type
! What it looks like
|-
|
<code><nowiki>[[Special:Permalink/330350877|Revision 330350877]]</nowiki></code>
|
[[Special:Permalink/330350877|Revision 330350877]]
|}

===What links here, and recent changes linked===

*The following markup can be used. For example, for the article [[Beetroot]]:
{| class="wikitable"
! What you type
! What it looks like
|-
|
<code><nowiki>[[Special:WhatLinksHere/Beetroot]]</nowiki></code>
|
[[Special:WhatLinksHere/Beetroot]]
|-
|
<code><nowiki>[[Special:RecentChangesLinked/Beetroot]]</nowiki></code>
|
[[Special:RecentChangesLinked/Beetroot]]
|}

===User edits===

*Link to a user's [[Help:User contributions|contributions page]].

{| class="wikitable"
! Description
! What you type
! What it looks like
|-
| ''Username (registered users).''
| <code><nowiki>[[Special:Contributions/UserName]]</nowiki></code>
| [[Special:Contributions/UserName]]
|-
| ''[[IPv4]] address (unregistered users).''
| <code><nowiki>[[Special:Contributions/192.0.2.0]]</nowiki></code>
| [[Special:Contributions/192.0.2.0]]
|-
| ''[[IPv6]] address (unregistered users).''
| <code><nowiki>[[Special:Contributions/2001:0db8:0000:0000:0000:ff00:0042:8329]]</nowiki></code>
| [[Special:Contributions/2001:0db8:0000:0000:0000:ff00:0042:8329]]
|}

===Coloring and highlighting text===

*Using the {{tl|Color}} and {{tl|Font color}} templates:
{| class="wikitable"
! What you type
! What it looks like
|-
|

<code><nowiki>I will change the color in {{color|blue|the middle part of}} this sentence.</nowiki></code>

|

I will change the color in {{color|blue|the middle part of}} this sentence.

|-
|

<code><nowiki>This is how to {{Font color||yellow|highlight part of a sentence}}.</nowiki></code>

|

This is how to {{Font color||yellow|highlight part of a sentence}}.
|}

===Example text===
The {{tlx|xt}} family of templates can be used on help pages and user pages to highlight e'''x'''ample tex'''t'''. 

{{!bxt|It does not work in mainspace, that is articles. }}
{| class=wikitable
!What you type
!What you get
|-
|<kbd><nowiki>This is an {{</nowiki>'''xt'''<nowiki>|A correct example}} for comparison {{tick}}</nowiki></kbd>
|This is an {{xt|A correct example}} for comparison {{tick}}
|-
|<kbd><nowiki>this is an {{</nowiki>'''!xt'''<nowiki>|An incorrect example}} for example {{cross}}</nowiki></kbd>
|this is an {{!xt|An incorrect example}} for example {{cross}}
|-
|<kbd><nowiki>this is an {{</nowiki>''mxt'''<nowiki>|In monospace}} for comparison</nowiki></kbd>
|this is an {{mxt|In monospace}} for comparison
|-
|<kbd><nowiki>this is an {{</nowiki>'''!mxt'''<nowiki>|In monospace}} for comparison</nowiki></kbd>
|this is an {{!mxt|In monospace}} for comparison
|-
|<kbd><nowiki>this is an {{</nowiki>'''bxt'''<nowiki>|in bold}} for comparison</nowiki></kbd>
|this is an {{bxt|In bold}} for comparison
|-
|<kbd><nowiki>this is an {{</nowiki>'''!bxt'''<nowiki>|In bold}} for comparison</nowiki></kbd>
|this is an {{!bxt|In bold}} for comparison
|}

===Show deleted or inserted text===
{{details|Wikipedia:Talk page guidelines}}
*When editing your own previous remarks in talk pages, it is sometimes appropriate to mark up deleted or inserted content: 
**It is best to indicate deleted content using the strike-through markup {{tag|s}}.
**It is best to indicate inserted content using the underline markup {{tag|u}}.
*When editing regular Wikipedia articles, just make your changes, and do not mark them up in any special way. However, when the article itself discusses deleted or inserted content, such as an amendment to a statute:
**It is best to indicate deleted content using the strike-through markup {{tag|del}}.
**It is best to indicate inserted content using the underline markup {{tag|ins}}.
Note: {{tag|s|content=}} and {{tag|u|content=}} (speced in HTML 3 & 4) are considerably more popular than {{tag|del|content=}} and {{tag|ins|content=}}  (speced in HTML 5) on Wikipedia.

{| class="wikitable"
! What you type
! What it looks like
|-
|
<code><nowiki>You can <del>strike out deleted material</del> and <ins>underline new material</ins>.</nowiki></code>
|
You can <del>strike out deleted material</del> and <ins>underline new material</ins>.
|-
|
Alternative markup:

<code><nowiki>You can <s>strike out deleted material</s> and <u>underline new material</u>.</nowiki></code>
|



You can <s>strike out deleted material</s> and <u>underline new material</u>.
|}
===Strike through===
{{anchor|Strikethrough}}
This is also possible with the {{tlx|strike}}} template.
{| class=wikitable
!What you type
!What you get
|-
|<kbd><nowiki>This is {{</nowiki>'''strike'''<nowiki>|a misplaced bit of text}} for comparison</nowiki></kbd>
|This is {{strike|a misplaced bit of text}} for comparison
|}

=={{anchor|Limiting formatting}} Limiting formatting / escaping wiki markup==

A few different kinds of formatting will tell the wiki to display things as you typed them – what you see is what you get!

{| class="wikitable" style="margin-right:0em;"
|-
!What you type
!What it looks like
|-
|
<pre>'''&amp;lt;nowiki&amp;gt; tag:'''

&lt;nowiki&gt;
The <nowiki> tag ignores [[wiki]]
''markup''. It reformats text by
removing newlines and    multiple
spaces.       It still interprets
characters specified by
&amp;name;: &amp;rarr;
&lt;/nowiki&gt;</pre>
|
'''&lt;nowiki&gt; tag:'''

<nowiki>
The <nowiki> tag ignores [[wiki]]
''markup''. It reformats text by
removing newlines and    multiple
spaces.       It still interprets
characters specified by
&amp;name;: &rarr;
</nowiki>
|-
|
<pre>'''&amp;lt;pre&amp;gt; tag:'''

&lt;pre&gt;The &lt;pre&gt; tag ignores [[wiki]]
''markup'' as does the &lt;nowiki&gt;
tag. Additionally, &lt;pre&gt; displays
in a mono-spaced font, and does
not  reformat    text    spaces.
It still interprets special
characters: &amp;rarr;
&lt;/pre&gt;</pre>
|
'''&lt;pre&gt; tag:'''

<pre>The &lt;pre&gt; tag ignores [[wiki]]
''markup'' as does the &lt;nowiki&gt;
tag. Additionally, &lt;pre&gt; displays
in a mono-spaced font, and does
not  reformat    text  paces.
It still interprets special
characters: &rarr;</pre>
|-
|
<pre>'''[Text without a URL]:'''

Single square brackets holding
[text without a HTTP URL] are
preserved, but single square
brackets containing a URL are
treated as being an external
[http://example.com/ Web link].</pre>
|
'''[Text without a URL]:'''

Single square brackets holding
[text without a HTTP URL] are
preserved, but single square
brackets containing a URL are
treated as being an external
[http://example.com/ Web link].
|-
|
<source lang="moin">'''Leading space:'''

Leading spaces are another way
to preserve formatting.
 Putting a space at the
 beginning of each line
 stops the text   from
 being reformatted.
 It still interprets [[wiki]]
 ''markup'' and special characters: &amp;rarr;</source>
|
'''Leading space:'''

Leading spaces are another way
to preserve formatting.
 Putting a space at the
 beginning of each line
 stops the text   from
 being reformatted.
 It still interprets [[wiki]]
 ''markup'' and special characters: &rarr;
|}

===Nowiki===
{{redirect for|WP:NOWIKI|Wikipedia:Don't abbreviate "Wikipedia" as "Wiki"!}}
{{shortcut|H:NOWIKI|WP:NOWIKI}}
{{anchor|NOWIKI}}

In order for the software to interpret wiki markup, its parser first scans the page. When it sees its nowiki tags 
:{{tag|nowiki}} ([[escape character|escape]]s all contained wiki markup), and
:{{tag|nowiki|s}} (escapes the interpretations it is designed to "break"),
it escapes its wikicode, so editors can document its markup ''using'' its markup.

Article editors can normalize the font of characters trailing <code>[<nowiki />[...]]outside</code> a wikilink, which would otherwise adhere to the wikilink font. They can also add line-spacing in the wikitext. Template editors: tag {{tag|nowiki|o}} works only on its source page, not the target; also <code>{{#tag<nowiki />:nowiki&nbsp;|&nbsp;''content''}}</code>, although it wraps that content in nowiki tags, it also does a [[mw:Manual:Tag extensions#How do I render wikitext in my extension?|pre-save transform]] on that content, which is entirely at odds with the intended purpose of nowiki for templates, subst, signatures, and the pipe-trick.

The two kinds of nowiki operate in different ways to target content, but they both remove meaning (subtract rendering) of wiki markup, then disappear into the background font. Nowiki does nothing toward rendering, but it can add newlines to wikitext (for readability), just like the HTML comment (the preferred method) can. Unlike wiki markup, nowiki does not remove the meaning of ''character entities'', either [[HTML character entities|HTML]] or MediaWiki [[#Special characters|special ''characters'']].

There is only one meaning for what {{tag|nowiki}} contains, so it needs few examples; but the singular {{tag|nowiki|s}} tag "contains" ''many'' linkage structures, where it is expected between bracketing-pair characters or in the keyword area.  So this section has ''many'' examples and few mis-examples.

For example, only at the beginning of a line (bol of wikitext, bol in a transclusion, or beginning of a table cell), do {{code|*}}, {{code|#}}, {{code|;}} or {{code|:}} mean something. 

{{markup
|<nowiki># Ordered list</nowiki>
|{{crlf2}}
# Ordered list
|<nowiki><nowiki /># Ordered list</nowiki>
|{{crlf2}}
<nowiki /># Ordered list
|<nowiki>A [[micro-]]second.</nowiki>
|A [[micro-]]second.
|<nowiki>A [[micro-]]<nowiki />second.</nowiki>
|A [[micro-]]<nowiki />second.
|<nowiki>a<nowiki>

</nowiki>b</nowiki>
|a<nowiki>

</nowiki>b
|<nowiki>'<nowiki />'Italics' markup'<nowiki />'</nowiki>
|'<nowiki/>'Italics' markup'<nowiki />'
|<nowiki><nowiki>[[Example]]</nowiki></nowiki>
|<nowiki>[[Example]]</nowiki>
|&lt;nowiki>&lt;!-- revealed -->&lt;/nowiki> 
|   <nowiki>   <!-- revealed -->    </nowiki>
}}

The rest of the section consists of simple, live examples showing how a single nowiki tag escapes entire linkage structures, beyond [[&nbsp;wikilink&nbsp;<nowiki />]] and {{&nbsp;template&nbsp;<nowiki />}}:

:[[ ''[[wp:fullpagename|fullpagename]]'' <nowiki />| ''label'' ]]
:{{ ''pagename'' <nowiki />| ''parameter'' }}
:[[ ''fullpagename'' | {{ ''pagename'' }<nowiki />} ]<nowiki />]
:{{ ''pagename'' | [[ ''fullpagename'' ]<nowiki />] }}
:{{ ''pagename'' <nowiki />| {{ ''pagename'' }<nowiki />} }}

Unless you use the two "balanced" nowiki tags, troubleshooting [[help:strip markers|strip marker]] errors and template parameter-handling inconsistencies is a risk. Also, a rendering error may arise when two <kbd>[<nowiki />[...]]</kbd> square brackets are on the same line, or two <kbd>{<nowiki />{...}}</kbd> curly brackets are in the same section, but only when the two have the nowiki markup placed inconsistently.

====Displaying wikilinks====

(These are all live examples.)

<pre>
[[ wp:pagename | page name ]]
[<nowiki />[ wp:pagename | page name ]]
[[<nowiki /> wp:pagename | page name ]]
[[ wp:pagename <nowiki />| page name ]]
[[ wp:pagename | page name ]<nowiki />]</pre>

<poem>
:[[ wp:pagename | page name ]]
:[<nowiki />[ wp:pagename | page name ]]
:[[<nowiki /> wp:pagename | page name ]]
:[[ wp:pagename <nowiki />| page name ]]
:[[ wp:pagename | page name ]<nowiki />] 
</poem>

For '''nested structures''', escaping an inner structure escapes its outer structure too.

<pre>
[[ wp: {{ 1x | pagename }} ]]
[[ wp: {<nowiki />{ 1x | pagename }} ]]
[[ wp: {{<nowiki /> 1x | pagename }} ]]
[[ wp: {{ 1x <nowiki />| pagename }} ]]</pre>

<poem>
:[[ wp: {{ 1x | pagename }} ]]
:[[ wp: {<nowiki />{ 1x | pagename }} ]]
:[[ wp: {{<nowiki /> 1x | pagename }} ]]
:[[ wp: {{ 1x <nowiki />| pagename }} ]]
</poem>

For '''two, first pipes''', two nowiki tags are required: 

<pre>
[[ wp: pagename | {{ 1x | label }} ]]
[[ wp: pagename <nowiki />| {{ 1x <nowiki />| label }} ]]
&lt;nowiki>[[ wp: pagename | {{ 1x | label }} ]] &lt;/nowiki></pre>

<poem>
:[[ wp: pagename | {{ 1x | label }} ]]
:[[ wp: pagename <nowiki />| {{ 1x <nowiki />| label }} ]]
:<nowiki>[[ wp: pagename | {{ 1x | label }} ]] </nowiki>
</poem>

====Displaying template calls====
{{See also|Template:tl}}

For templates, put nowiki before the first pipe.
If a parameter has a wikilink, put it in that, an inmost position.

<pre>
{<nowiki />{ val | u=&amp;gt; [[ms]] | 49082 }}
{{<nowiki /> val | u=&amp;gt; [[ms]] | 49082 }}
{{ val <nowiki />| u=&amp;gt; [[ms]] | 49082 }}
{{ val | u= &gt; [[ms]] | 49082 }<nowiki />}
{{ val | u= &gt; [[ ms ]<nowiki />] | 49082 }} </pre>

<poem>
:{<nowiki />{ val | u=&gt; [[ms]] | 49082 }}
:{{ val | u= &gt; [[ms]] | 49082 }<nowiki />}
:{{<nowiki /> val | u=&gt; [[ms]] | 49082 }}
:{{ val <nowiki />| u=&gt; [[ms]] | 49082 }}
:{{ val | u= &gt; [[ ms ]<nowiki />] | 49082 }} {{OK}}
</poem>

====Displaying magic words====
{{Further|Help:Magic words|Help:Parser function}}

For input '''parameters''', {{{1}}}, {{{2}}}, just write them out, unless they have a default (which goes behind their pipe): 
{{&lt;nowiki />{1|default}}} &rarr; {{<nowiki />{1|default}}}

For a '''parser function''' nowiki goes between bracketing-pair characters, or anywhere before the : colon.

<pre>
{{ #ifeq: inYes | inYes | outYes | outNo }}
{<nowiki />{ #ifeq: inYes | inYes | outYes | tNo }}
{{<nowiki /> #ifeq: inYes | inYes | outYes | outNo }}
{{ #ifeq<nowiki />: inYes | inYes | outYes | outNo }}
{{ #ifeq: inYes | inYes | outYes | outNo }<nowiki />}</pre>

<poem>
:{{ #ifeq: inYes | inYes | outYes | outNo }}
:{<nowiki />{ #ifeq: inYes | inYes | outYes | outNo }}
:{{<nowiki /> #ifeq: inYes | inYes | outYes | outNo }}
:{{ #ifeq<nowiki />: inYes | inYes | outYes | outNo }} 
:{{ #ifeq: inYes | inYes | outYes | outNo }<nowiki />}
</poem>

'''Behavioral switches''' expect the tag anywhere:

<pre>
 1. __HIDDENCAT__
 2. __HIDDENCAT<nowiki />__</pre>

:1. __HIDDENCAT__{{break}}
:2. __HIDDENCAT<nowiki />__

====Displaying tags====

{{tag|tags|o}} do not display; they are just markup. If you want them to, insert {{tag|nowiki|s}} after an {{code|<}} opening angle bracket; it goes only in the very front. Opening tags and closing tags must be treated separately.

<pre>
<span style=color:blue> Blue </span>
<<nowiki />span style=color:blue> Blue <<nowiki />/span>
<section end=la<nowiki />bel /> </pre>

<poem>
:<span style=color:blue> Blue </span>
:<<nowiki />span style=color:blue> Blue <<nowiki />/span>
:<section end=la<nowiki />bel /> {{cross}}
</poem>

Use template {{tl|tag}} instead of nowiki tags to display parser tags:

'''Character entities''', nowiki cannot escape.  
To escape HTML or special character entities, replace <code>&</code> with <code>&amp;amp;</code>.
For example, <code>&amp;amp;lt;</code> &rarr; <code>&amp;lt;</code>

To '''display a nowiki tag''', you can (1) use {{tl|tag}}, (2) replace the < left angle bracket with its HTML character entity, or (3) nest nowiki tags in each other:

<pre>
{{ tag | nowiki }}
<code>&amp;lt; nowiki>...&amp;lt;/ nowiki ></code>
<code><<nowiki />nowiki>...<<nowiki />/ nowiki ></code></pre>

<poem>
:{{ tag | nowiki }}
:<code>&lt; nowiki>...&lt;/ nowiki ></code>
:<code><<nowiki /> nowiki>...<<nowiki />/ nowiki ></code>
</poem>

<pre>
{{ tag | nowiki | s }}
<code>&amp;lt; nowiki /></code>
<code>&lt;&lt;nowiki /> nowiki /></code>
<code>&lt;nowiki>&lt; nowiki />&lt;/nowiki></code></pre>

<poem>
:{{ tag | nowiki | s }}
:<code>&lt; nowiki /></code>
:<code><<nowiki /> nowiki /></code>
:<code><nowiki>< nowiki /></nowiki></code>
</poem>

Nowiki tags do not otherwise nest, so it is the second and fourth that displays:

<pre>
1&lt;nowiki>2&lt;nowiki>3</nowiki>4</nowiki>
&lt;nowiki>{{!}}&lt;nowiki></nowiki>{{!}}</nowiki>
</pre>

<poem>
:1<nowiki>2<nowiki>3</nowiki>4</nowiki> {{spaces|5}} ''{{small|second and fourth}}'' 
:<nowiki>{{!}}<nowiki></nowiki>{{!}}</nowiki>
</poem>

These simply scan from left to right.
The paired tags cannot overlap, because the very first pair-match nullifies any intervening tags inside. Unbalanced tags always display.

Nowiki tags do not display table markup, use {{tag|pre}}.

===Pre===
{{shortcut|WP:PRE}}

{{tag|pre|o}} is a parser tag that emulates the HTML {{tag|pre|o}} tag. It defines preformatted text that is displayed in a fixed-width font and is enclosed in a dashed box. HTML and wiki markups are escaped and spaces and line breaks are preserved, but HTML entities are parsed.

{{markup|title={{tag|pre|o}} examples
|<nowiki><pre><!--Comment-->

[[wiki]] markup &amp;amp;</pre></nowiki>
|<pre><!--Comment-->

[[wiki]] markup &amp;</pre>
}}

{{tag|pre|o}} formatted text does not wrap, thus text may extend past the browser window:

<pre>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commoo consequat.</pre>

To resolve this, {{tag|pre|o}} may use CSS styling to add wrapping or a horizontal scrollbar:
* Wrapping: {{tag|pre|o|params=style="white-space:-moz-pre-wrap; white-space:-pre-wrap; white-space:-o-pre-wrap; white-space:pre-wrap; word-wrap:break-word;"}}
* Scroll bar: {{tag|pre|o|params=style="overflow:auto; width:auto;"}}

Alternatively, consider using {{tl|pre2}} template or {{xtag|syntaxhighlight|p|params=lang="text"}}.

==Invisible text (comments)==
{{see also|Help:Hidden text}}

It's uncommon{{spaced ndash}}but on occasion acceptable for notes to other editors{{spaced ndash}}to add a hidden comment within the text of an article. These comments are visible only when editing or viewing the source of a page. Most comments should go on the appropriate [[Wikipedia:Talk page|Talk page]]. <!-- This is an example of text that is not visible except in "edit" mode. --> The format is to surround the hidden text with "<code>&lt;!--</code>" and "<code>--&gt;</code>" and may cover several lines, e.g.:
 <nowiki><!-- An example of hidden comments
 This won't be visible except in "edit" mode. --></nowiki>

Another way to include a comment in the wiki markup uses the {{tl|Void}} template, which can be abbreviated as {{tl|^}}. This template "expands" to the empty string, generating no HTML output; it is visible only to people editing the wiki source. Thus {{nowrap|1=<code>{{tlp|^|A lengthy comment here}}</code>}} operates similarly to the comment {{nowrap|1=<code>&lt;!-- A lengthy comment here --&gt;</code>}}. The main difference is that the template version can be nested, while attempting to nest HTML comments produces odd results.

==Variables==

{{seealso| Help:Magic_words#Variables}}

{| style="text-align:center" class="wikitable"
|-
! Code
! Effect
! Notes
|-
| <nowiki>{{CURRENTWEEK}}</nowiki> || {{CURRENTWEEK}}
|
|-
| <nowiki>{{CURRENTDOW}}</nowiki> || {{CURRENTDOW}}
|
Monday = 1, Tuesday = 2, etc., but Sunday = 0

|-
| <nowiki>{{CURRENTMONTH}}</nowiki> || {{CURRENTMONTH}}
|
|-
| <nowiki>{{CURRENTMONTHNAME}}</nowiki>
| {{CURRENTMONTHNAME}}
|
|-
| <nowiki>{{CURRENTMONTHNAMEGEN}}</nowiki>
| {{CURRENTMONTHNAMEGEN}}
|
|-
| <nowiki>{{CURRENTDAY}}</nowiki> || {{CURRENTDAY}}
|
|-
| <nowiki>{{CURRENTDAYNAME}}</nowiki> || {{CURRENTDAYNAME}}
|
|-
| <nowiki>{{CURRENTYEAR}}</nowiki> || {{CURRENTYEAR}}
|
|-
| <nowiki>{{CURRENTTIME}}</nowiki> || {{CURRENTTIME}}
|
|-
| <nowiki>{{NUMBEROFARTICLES}}</nowiki>
| {{NUMBEROFARTICLES}}
|
|-
| <nowiki>{{NUMBEROFPAGES}}</nowiki>
| {{NUMBEROFPAGES}}
|
|-
| <nowiki>{{NUMBEROFUSERS}}</nowiki>
| {{NUMBEROFUSERS}}
|
|-
| <nowiki>{{PAGENAME}}</nowiki> || {{PAGENAME}}
|
|-
| <nowiki>{{NAMESPACE}}</nowiki> || {{NAMESPACE}}
|
|-
| <nowiki>{{REVISIONID}}</nowiki> || {{REVISIONID}}
|
|-
| <nowiki>{{REVISIONUSER}}</nowiki> || {{REVISIONUSER}}
|
|-
| <nowiki>{{localurl:pagename}}</nowiki>
| {{localurl:pagename}}
|
|-
| <nowiki>{{localurl:</nowiki>''Wikipedia:Sandbox''<nowiki>|action=edit}}</nowiki>
| {{localurl:Wikipedia:Sandbox|action=edit}}
|
|-
| <nowiki>{{fullurl:pagename}}</nowiki>
| {{fullurl:pagename}}
|
|-
| <nowiki>{{fullurl:pagename|</nowiki>''query_string''<nowiki>}}</nowiki>
| {{fullurl:pagename|query_string}}
|
|-
| <nowiki>{{SERVER}}</nowiki> || {{SERVER}}
|
|-
| <nowiki>{{ns:1}}</nowiki> || {{ns:1}}
|
<nowiki>{{ns:</nowiki>''index''<nowiki>}} e.g. {{ns:1}}</nowiki>  &rarr;  full name of namespace

|-
| <nowiki>{{SITENAME}}</nowiki> || {{SITENAME}}
|
|}

'''{{tlf|NUMBEROFARTICLES}}''' is the number of pages in the main namespace that contain a link and are not a redirect. This incdes full articles, stubs containing a link, and disambiguation pages.

'''{{tlf|CURRENTMONTHNAMEGEN}}''' is the genitive (possessive) grammatical form of the month name, as used in some languages but not in English; '''{{tlf|CURRENTMONTHNAME}}''' is the nominative (subject) form, as usually seen in English.

In languages where it makes a difference, you can use constructs like <code><nowiki>{{grammar:case|word}}</nowiki></code> to convert a word from the nominative case to some other case. For example, <code><nowiki>{{grammar:genitive|{{CURRENTMONTHNAME}}}}</nowiki></code> means the same as <code><nowiki>{{CURRENTMONTHNAMEGEN}}</nowiki></code>. <!-- Is there a reference for this, other than the source code (for example, phase3/languages/Lnaguage*.php) ? -->

==HTML==
{{main|Help:HTML in wikitext}}

Many [[HTML]] tags can be used in wiki markup. You can check your HTML by using [[Help:Markup validation|markup validation]].

==Common templates==
{{quicktemplates |state=expanded}}

==See also==
{{Help desk}}
See the 'Coding wiki markup' section of the Help navigation navbox below for additional links.
*[[Help:Magic links]]: magic links are automatic links for certain unique identifiers that require no markup.
*[[Wikipedia:Extended image syntax]]: advanced [[Help:Visual file markup|visual file markup]].
*[[Help:A quick guide to templates]]: an introduction to [[Help:Template|templates]].
*[[Help:Substitution]]: substitution is an alternative way of including templates than [[Wikipedia:Transclusion|transclusion]]
*[[Help:Score]]: how to render musical scores.
*[[Help:Displaying a formula]]: displaying mathematical formulae.
*{{wikibooks-inline|Editing Wikitext}}
*[[mw:Parsoid|Parsoid]]- MediaWiki application that allows for converting back and forth between wikitext and HTML.
{{Help navigation}}
{{Wikipedia technical help|state=collapsed}}
{{Tools |state=collapsed}}

[[Category:Wikipedia how-to]]
[[Category:Wikipedia editor help]]
[[Category:Wikipedia text help]]
[[Category:Wikipedia article elements help]]

