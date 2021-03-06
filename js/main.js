/* globals marked, unfetch, ES6Promise, Promise */ // eslint-disable-line no-redeclare

let doc = {};

if (!window.Promise) {
  window.Promise = ES6Promise;
}
if (!window.fetch) {
  window.fetch = unfetch;
}

onunhandledrejection = function(e) {
  throw e.reason;
};

// PATCH
wtf.extend( window.wtfHtml );

var $loadingElem = document.querySelector('#loading');
var $mainElem = document.querySelector('#main');
var $markdownElem = document.querySelector('#markdown');
var $markedVerElem = document.querySelector('#markedVersion');
var $commitVerElem = document.querySelector('#commitVersion');
var $markedVer = document.querySelector('#markedCdn');
var $optionsElem = document.querySelector('#options');
var $outputTypeElem = document.querySelector('#outputType');
var $inputTypeElem = document.querySelector('#inputType');
var $responseTimeElem = document.querySelector('#responseTime');
var $previewElem = document.querySelector('#preview');
var $previewIframe = document.querySelector('#preview iframe');
var $permalinkElem = document.querySelector('#permalink');
var $clearElem = document.querySelector('#clear');
var $htmlElem = document.querySelector('#html');
var $lexerElem = document.querySelector('#lexer');
var $panes = document.querySelectorAll('.pane');
var $inputPanes = document.querySelectorAll('.inputPane');
var lastInput = '';
var inputDirty = true;
var $activeOutputElem = null;
var search = searchToObject();
var markedVersions = {
  master: 'https://cdn.jsdelivr.net/gh/markedjs/marked/lib/marked.js'
};
var markedVersionCache = {};
var delayTime = 1;
var checkChangeTimeout = null;
var markedWorker;

$previewIframe.addEventListener('load', handleIframeLoad);

$outputTypeElem.addEventListener('change', handleOutputChange, false);

$inputTypeElem.addEventListener('change', handleInputChange, false);

$markedVerElem.addEventListener('change', handleVersionChange, false);

$markdownElem.addEventListener('change', handleInput, false);
$markdownElem.addEventListener('keyup', handleInput, false);
$markdownElem.addEventListener('keypress', handleInput, false);
$markdownElem.addEventListener('keydown', handleInput, false);

$optionsElem.addEventListener('change', handleInput, false);
$optionsElem.addEventListener('keyup', handleInput, false);
$optionsElem.addEventListener('keypress', handleInput, false);
$optionsElem.addEventListener('keydown', handleInput, false);

$commitVerElem.style.display = 'none';
$commitVerElem.addEventListener('keypress', handleAddVersion, false);

$clearElem.addEventListener('click', handleClearClick, false);

Promise.all([
  setInitialQuickref(),
  setInitialOutputType(),
  setInitialText(),
  setInitialVersion()
    .then(setInitialOptions)
]).then(function() {
  handleInputChange();
  handleOutputChange();
  checkForChanges();
  setScrollPercent(0);
  $loadingElem.style.display = 'none';
  $mainElem.style.display = 'block';
});

function setInitialText() {
  if ('text' in search) {
    $markdownElem.value = search.text;
  } else {
    return fetch('./md/initial.md')
      .then(function(res) { return res.text(); })
      .then(function(text) {
        if ($markdownElem.value === '') {
          $markdownElem.value = text;
        }
      });
  }
}

function setInitialQuickref() {
  return fetch('./md/ref.md')
    .then(function(res) { return res.text(); })
    .then(function(text) {
      document.querySelector('#quickref').value = text;
    });
}

function setInitialVersion() {
  return fetch('https://data.jsdelivr.com/v1/package/npm/marked')
    .then(function(res) {
      return res.json();
    })
    .then(function(json) {
      for (var i = 0; i < json.versions.length; i++) {
        var ver = json.versions[i];
        markedVersions[ver] = 'https://cdn.jsdelivr.net/npm/marked@' + ver + '/lib/marked.js';
        var opt = document.createElement('option');
        opt.textContent = ver;
        opt.value = ver;
        $markedVerElem.appendChild(opt);
      }
    })
    .then(function() {
      return fetch('https://api.github.com/repos/markedjs/marked/commits')
        .then(function(res) {
          return res.json();
        })
        .then(function(json) {
          markedVersions.master = 'https://cdn.jsdelivr.net/gh/markedjs/marked@' + json[0].sha + '/lib/marked.js';
        })
        .catch(function() {
          // do nothing
          // uses url without commit
        });
    })
    .then(function() {
      if (search.version) {
        if (markedVersions[search.version]) {
          return search.version;
        } else {
          var match = search.version.match(/^(\w+):(.+)$/);
          if (match) {
            switch (match[1]) {
              case 'commit':
                addCommitVersion(search.version, match[2].substring(0, 7), match[2]);
                return search.version;
              case 'pr':
                return getPrCommit(match[2])
                  .then(function(commit) {
                    if (!commit) {
                      return 'master';
                    }
                    addCommitVersion(search.version, 'PR #' + match[2], commit);
                    return search.version;
                  });
            }
          }
        }
      }

      return 'master';
    })
    .then(function(version) {
      $markedVerElem.value = version;
    })
    .then(updateVersion);
}

function setInitialOptions() {
  if ('options' in search) {
    $optionsElem.value = search.options;
  } else {
    setDefaultOptions();
  }
}

function setInitialOutputType() {
  if (search.outputType) {
    $outputTypeElem.value = search.outputType;
  }
}

function handleIframeLoad() {
  lastInput = '';
  inputDirty = true;
}

function handleInput() {
  inputDirty = true;
}

function handleVersionChange() {
  if ($markedVerElem.value === 'commit' || $markedVerElem.value === 'pr') {
    $commitVerElem.style.display = '';
  } else {
    $commitVerElem.style.display = 'none';
    updateVersion();
  }
}

function handleClearClick() {
  $markdownElem.value = '';
  $markedVerElem.value = 'master';
  $commitVerElem.style.display = 'none';
  updateVersion().then(setDefaultOptions);
}

function handleAddVersion(e) {
  if (e.which === 13) {
    switch ($markedVerElem.value) {
      case 'commit':
        var commit = $commitVerElem.value.toLowerCase();
        if (!commit.match(/^[0-9a-f]{40}$/)) {
          alert('That is not a valid commit');
          return;
        }
        addCommitVersion('commit:' + commit, commit.substring(0, 7), commit);
        $markedVerElem.value = 'commit:' + commit;
        $commitVerElem.style.display = 'none';
        $commitVerElem.value = '';
        updateVersion();
        break;
      case 'pr':
        $commitVerElem.disabled = true;
        var pr = $commitVerElem.value.replace(/\D/g, '');
        getPrCommit(pr)
          .then(function(commit) {
            $commitVerElem.disabled = false;
            if (!commit) {
              alert('That is not a valid PR');
              return;
            }
            addCommitVersion('pr:' + pr, 'PR #' + pr, commit);
            $markedVerElem.value = 'pr:' + pr;
            $commitVerElem.style.display = 'none';
            $commitVerElem.value = '';
            updateVersion();
          });
    }
  }
}

function handleInputChange() {
  handleChange($inputPanes, $inputTypeElem.value);
}

function handleOutputChange() {
  //console.log( $outputTypeElem.value );
  $activeOutputElem = handleChange($panes, $outputTypeElem.value);
  updateLink();
}

function handleChange(panes, visiblePane) {

  //console.log( panes, visiblePane );

  var active = null;

  for (var i = 0; i < panes.length; i++) {
    if (panes[i].id === visiblePane) {
      panes[i].style.display = '';
      active = panes[i];
    } else {
      panes[i].style.display = 'none';
    }
  }

  return active;

}

function addCommitVersion(value, text, commit) {
  if (markedVersions[value]) {
    return;
  }
  markedVersions[value] = 'https://cdn.jsdelivr.net/gh/markedjs/marked@' + commit + '/lib/marked.js';
  var opt = document.createElement('option');
  opt.textContent = text;
  opt.value = value;
  $markedVerElem.insertBefore(opt, $markedVerElem.firstChild);
}

function getPrCommit(pr) {
  return fetch('https://api.github.com/repos/markedjs/marked/pulls/' + pr + '/commits')
    .then(function(res) {
      return res.json();
    })
    .then(function(json) {
      return json[json.length - 1].sha;
    }).catch(function() {
      // return undefined
    });
}

function setDefaultOptions() {
  if (window.Worker) {
    messageWorker({
      task: 'defaults',
      version: markedVersions[$markedVerElem.value]
    });
  } else {
    var defaults = marked.getDefaults();
    setOptions(defaults);
  }
}

function setOptions(opts) {
  $optionsElem.value = JSON.stringify(
    opts,
    function(key, value) {
      if (value && typeof value === 'object' && Object.getPrototypeOf(value) !== Object.prototype) {
        return undefined;
      }
      return value;
    }, ' ');
}

function searchToObject() {
  // modified from https://stackoverflow.com/a/7090123/806777
  var pairs = location.search.slice(1).split('&');
  var obj = {};

  for (var i = 0; i < pairs.length; i++) {
    if (pairs[i] === '') {
      continue;
    }

    var pair = pairs[i].split('=');

    obj[decodeURIComponent(pair.shift())] = decodeURIComponent(pair.join('='));
  }

  return obj;
}

function jsonString(input) {
  var output = (input + '')
    .replace(/\n/g, '\\n')
    .replace(/\r/g, '\\r')
    .replace(/\t/g, '\\t')
    .replace(/\f/g, '\\f')
    .replace(/[\\"']/g, '\\$&')
    .replace(/\u0000/g, '\\0');
  return '"' + output + '"';
}

function getScrollSize() {
  var e = $activeOutputElem;

  return e.scrollHeight - e.clientHeight;
}

function getScrollPercent() {
  var size = getScrollSize();

  if (size <= 0) {
    return 1;
  }

  return $activeOutputElem.scrollTop / size;
}

function setScrollPercent(percent) {
  $activeOutputElem.scrollTop = percent * getScrollSize();
}

function updateLink() {

  var outputType = '';

  if ($outputTypeElem.value !== 'preview') {
    outputType = 'outputType=' + $outputTypeElem.value + '&';
  }

  $permalinkElem.href = '?' + outputType + 'text=' + encodeURIComponent($markdownElem.value)
      + '&options=' + encodeURIComponent($optionsElem.value)
      + '&version=' + encodeURIComponent($markedVerElem.value);

  history.replaceState('', document.title, $permalinkElem.href);
}

function updateVersion() {
  if (window.Worker) {
    handleInput();
    return Promise.resolve();
  }
  var promise;
  if (markedVersionCache[$markedVerElem.value]) {
    promise = Promise.resolve(markedVersionCache[$markedVerElem.value]);
  } else {
    promise = fetch(markedVersions[$markedVerElem.value])
      .then(function(res) { return res.text(); })
      .then(function(text) {
        markedVersionCache[$markedVerElem.value] = text;
        return text;
      });
  }
  return promise.then(function(text) {
    var script = document.createElement('script');
    script.textContent = text;

    $markedVer.parentNode.replaceChild(script, $markedVer);
    $markedVer = script;
  }).then(handleInput);
}

function checkForChanges() {
  if (inputDirty && $markedVerElem.value !== 'commit' && $markedVerElem.value !== 'pr' && (typeof marked !== 'undefined' || window.Worker)) {
    inputDirty = false;

    updateLink();

    var options = {};
    var optionsString = $optionsElem.value || '{}';
    try {
      var newOptions = JSON.parse(optionsString);
      options = newOptions;
      $optionsElem.classList.remove('error');
    } catch (err) {
      $optionsElem.classList.add('error');
    }

    var version = markedVersions[$markedVerElem.value];
    var markdown = $markdownElem.value;
    var hash = version + markdown + optionsString;
    if (lastInput !== hash) {
      lastInput = hash;
      if (window.Worker) {
        delayTime = 100;
        messageWorker({
          task: 'parse',
          version: version,
          markdown: markdown,
          options: options
        });
      } else {
        var startTime = new Date();
        var lexed = marked.lexer(markdown, options);
        var lexedList = [];
        for (var i = 0; i < lexed.length; i++) {
          var lexedLine = [];
          for (var j in lexed[i]) {
            lexedLine.push(j + ':' + jsonString(lexed[i][j]));
          }
          lexedList.push('{' + lexedLine.join(', ') + '}');
        }
        var parsed = marked.parser(lexed, options);
        var scrollPercent = getScrollPercent();
        setParsed(parsed, lexedList.join('\n'));
        setScrollPercent(scrollPercent);
        var endTime = new Date();
        delayTime = endTime - startTime;
        setResponseTime(delayTime);
        if (delayTime < 50) {
          delayTime = 50;
        } else if (delayTime > 500) {
          delayTime = 1000;
        }
      }
    }
  }
  checkChangeTimeout = window.setTimeout(checkForChanges, delayTime);
}

function setResponseTime(ms) {
  var amount = ms;
  var suffix = 'ms';
  if (ms > 1000 * 60 * 60) {
    amount = 'Too Long';
    suffix = '';
  } else if (ms > 1000 * 60) {
    amount = '>' + Math.floor(ms / (1000 * 60));
    suffix = 'm';
  } else if (ms > 1000) {
    amount = '>' + Math.floor(ms / 1000);
    suffix = 's';
  }
  $responseTimeElem.textContent = amount + suffix;
}


function setParsed(parsed, lexed) {

  let wikitext  = $markdownElem.value; // get wiki-markup
  doc   				= wtf( wikitext ); // create wtf object
  let html      = doc.html(); // render document to HTML

  try {
    $previewIframe.contentDocument.body.innerHTML = html;
    //$previewIframe.contentDocument.body.innerHTML = parsed;
  } catch (ex) {}

  $htmlElem.value = doc.html();
  //$htmlElem.value = parsed;

	// https://github.com/Phrogz/NeatJSON
  $lexerElem.value = neatJSON( doc.data )

  //$lexerElem.value = JSON.stringify( doc.data, null, 4 )
  //$lexerElem.value = lexed;

}

function messageWorker(message) {

  if (!markedWorker || markedWorker.working) {
    if (markedWorker) {
      clearTimeout(markedWorker.timeout);
      markedWorker.terminate();
    }
    markedWorker = new Worker('js/worker.js');
    markedWorker.onmessage = function(e) {
      clearTimeout(markedWorker.timeout);
      markedWorker.working = false;
      switch (e.data.task) {
        case 'defaults':
          setOptions(e.data.defaults);
          break;
        case 'parse':
          $previewElem.classList.remove('error');
          $htmlElem.classList.remove('error');
          $lexerElem.classList.remove('error');
          var scrollPercent = getScrollPercent();
          setParsed(e.data.parsed, e.data.lexed);
          setScrollPercent(scrollPercent);
          setResponseTime(e.data.time);
          break;
      }
      clearTimeout(checkChangeTimeout);
      delayTime = 10;
      checkForChanges();
    };
    markedWorker.onerror = markedWorker.onmessageerror = function(err) {
      clearTimeout(markedWorker.timeout);
      var error = 'There was an error in the Worker';
      if (err) {
        if (err.message) {
          error = err.message;
        } else {
          error = err;
        }
      }
      error = error.replace(/^Uncaught Error: /, '');
      $previewElem.classList.add('error');
      $htmlElem.classList.add('error');
      $lexerElem.classList.add('error');
      setParsed(error, error);
      setScrollPercent(0);
    };
  }
  if (message.task !== 'defaults') {
    markedWorker.working = true;
    workerTimeout(0);
  }

  markedWorker.postMessage(message);

}

function workerTimeout(seconds) {
  markedWorker.timeout = setTimeout(function() {
    seconds++;
    markedWorker.onerror('Marked has taken longer than ' + seconds + ' second' + (seconds > 1 ? 's' : '') + ' to respond...');
    workerTimeout(seconds);
  }, 1000);
}

// see: https://github.com/Phrogz/NeatJSON
function neatJSON(value,opts){

	opts = opts || {}
	if (!('wrap'          in opts)) opts.wrap = 80;
	if (opts.wrap==true) opts.wrap = -1;
	if (!('indent'        in opts)) opts.indent = '  ';
	if (!('arrayPadding'  in opts)) opts.arrayPadding  = ('padding' in opts) ? opts.padding : 0;
	if (!('objectPadding' in opts)) opts.objectPadding = ('padding' in opts) ? opts.padding : 0;
	if (!('beforeComma'   in opts)) opts.beforeComma   = ('aroundComma' in opts) ? opts.aroundComma : 0;
	if (!('afterComma'    in opts)) opts.afterComma    = ('aroundComma' in opts) ? opts.aroundComma : 0;
	if (!('beforeColon'   in opts)) opts.beforeColon   = ('aroundColon' in opts) ? opts.aroundColon : 0;
	if (!('afterColon'    in opts)) opts.afterColon    = ('aroundColon' in opts) ? opts.aroundColon : 0;
	if (!('beforeColon1'  in opts)) opts.beforeColon1  = ('aroundColon1' in opts) ? opts.aroundColon1 : ('beforeColon' in opts) ? opts.beforeColon : 0;
	if (!('afterColon1'   in opts)) opts.afterColon1   = ('aroundColon1' in opts) ? opts.aroundColon1 : ('afterColon'  in opts) ? opts.afterColon  : 0;
	if (!('beforeColonN'  in opts)) opts.beforeColonN  = ('aroundColonN' in opts) ? opts.aroundColonN : ('beforeColon' in opts) ? opts.beforeColon : 0;
	if (!('afterColonN'   in opts)) opts.afterColonN   = ('aroundColonN' in opts) ? opts.aroundColonN : ('afterColon'  in opts) ? opts.afterColon  : 0;

	var apad   = repeat(' ',opts.arrayPadding),
	    opad   = repeat(' ',opts.objectPadding),
	    comma  = repeat(' ',opts.beforeComma)+','+repeat(' ',opts.afterComma),
	    colon1 = repeat(' ',opts.beforeColon1)+':'+repeat(' ',opts.afterColon1),
	    colonN = repeat(' ',opts.beforeColonN)+':'+repeat(' ',opts.afterColonN);

	var build = memoize();
	return build(value,'');

	function memoize(){
		var memo = new Map;
		return function(o,indent){
			var byIndent=memo.get(o);
			if (!byIndent) memo.set(o,byIndent={});
			if (!byIndent[indent]) byIndent[indent] = rawBuild(o,indent);
			return byIndent[indent];
		}
	}

	function rawBuild(o,indent){

		if (o===null || o===undefined) return indent+'null';

		else{
			if (typeof o==='number'){
				if (o===Infinity) {
					return indent+'9e9999';
				}else if (o===-Infinity){
					return indent+'-9e9999';
				}else if (Number.isNaN(o)){
					return indent+'"NaN"';
				}else{
					var isFloat = (o === +o && o !== (o|0));
					return indent + ((isFloat && ('decimals' in opts)) ? o.toFixed(opts.decimals) : (o+''));
				}
			}else if (o instanceof Array){
				if (!o.length) return indent+"[]";
				var pieces  = o.map(function(v){ return build(v,'') });
				var oneLine = indent+'['+apad+pieces.join(comma)+apad+']';
				if (opts.wrap===false || oneLine.length<=opts.wrap) return oneLine;
				if (opts.short){
					var indent2 = indent+' '+apad;
					pieces = o.map(function(v){ return build(v,indent2) });
					pieces[0] = pieces[0].replace(indent2,indent+'['+apad);
					pieces[pieces.length-1] = pieces[pieces.length-1]+apad+']';
					return pieces.join(',\n');
				}else{
					var indent2 = indent+opts.indent;
					return indent+'[\n'+o.map(function(v){ return build(v,indent2) }).join(',\n')+'\n'+(opts.indentLast?indent2:indent)+']';
				}
			}else if (o instanceof Object){
				var sortedKV=[],i=0;
				var sort = opts.sort || opts.sorted;
				for (var k in o){
					var kv = sortedKV[i++] = [k,o[k]];
					if (sort===true) kv[2] = k;
					else if (typeof sort==='function') kv[2]=sort(k,o[k],o);
				}
				if (!sortedKV.length) return indent+'{}';
				if (sort) sortedKV = sortedKV.sort(function(a,b){ a=a[2]; b=b[2]; return a<b?-1:a>b?1:0 });
				var keyvals=sortedKV.map(function(kv){ return [JSON.stringify(kv[0]), build(kv[1],'')].join(colon1) }).join(comma);
				var oneLine = indent+"{"+opad+keyvals+opad+"}";
				if (opts.wrap===false || oneLine.length<opts.wrap) return oneLine;
				if (opts.short){
					keyvals = sortedKV.map(function(kv){ return [indent+' '+opad+JSON.stringify(kv[0]), kv[1]] });
					keyvals[0][0] = keyvals[0][0].replace(indent+' ',indent+'{');
					if (opts.aligned){
						var longest = 0;
						for (var i=keyvals.length;i--;) if (keyvals[i][0].length>longest) longest = keyvals[i][0].length;
						var padding = repeat(' ',longest);
						for (var i=keyvals.length;i--;) keyvals[i][0] = padRight(padding,keyvals[i][0]);
					}
					for (var i=keyvals.length;i--;){
						var k=keyvals[i][0], v=keyvals[i][1];
						var indent2 = repeat(' ',(k+colonN).length);
						var oneLine = k+colonN+build(v,'');
						keyvals[i] = (opts.wrap===false || oneLine.length<=opts.wrap || !v || typeof v!="object") ? oneLine : (k+colonN+build(v,indent2).replace(/^\s+/,''));
					}
					return keyvals.join(',\n') + opad + '}';
				}else{
					var keyvals=sortedKV.map(function(kvs){ kvs[0] = indent+opts.indent+JSON.stringify(kvs[0]); return kvs });
					if (opts.aligned){
						var longest = 0;
						for (var i=keyvals.length;i--;) if (keyvals[i][0].length>longest) longest = keyvals[i][0].length;
						var padding = repeat(' ',longest);
						for (var i=keyvals.length;i--;) keyvals[i][0] = padRight(padding,keyvals[i][0]);
					}
					var indent2 = indent+opts.indent;
					for (var i=keyvals.length;i--;){
						var k=keyvals[i][0], v=keyvals[i][1];
						var oneLine = k+colonN+build(v,'');
						keyvals[i] = (opts.wrap===false || oneLine.length<=opts.wrap || !v || typeof v!="object") ? oneLine : (k+colonN+build(v,indent2).replace(/^\s+/,''));
					}
					return indent+'{\n'+keyvals.join(',\n')+'\n'+(opts.indentLast?indent2:indent)+'}'
				}
			}else{
				return indent+JSON.stringify(o);
			}
		}
	}

	function repeat(str,times){ // http://stackoverflow.com/a/17800645/405017
		var result = '';
		while(true){
			if (times & 1) result += str;
			times >>= 1;
			if (times) str += str;
			else break;
		}
		return result;
	}

	function padRight(pad, str){
		return (str + pad).substring(0, pad.length);
	}

}


