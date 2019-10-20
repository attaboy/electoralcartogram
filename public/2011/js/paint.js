/*global canadaMap: false */

if (!Array.prototype.forEach) {
  Array.prototype.forEach = function(fun /*, thisp */) {
    "use strict";
    var t = this;
    var len = t.length;
    if (typeof fun !== "function") {
      throw new TypeError();
    }
    var thisp = arguments[1];
    for (var i = 0; i < len; i++) {
      if (i in t) {
        fun.call(thisp, t[i], i, t);
      }
    }
  };
}

canadaMap.activeParty = '';

canadaMap.partyNames = {
  'con': 'Conservative',
  'lib': 'Liberal',
  'ndp': 'New&nbsp;Democrat',
  'bq': 'Bloc&nbsp;Québécois',
  'grn': 'Green',
  'ind': 'Independent'
};

canadaMap.labelRiding = function(name, hash, year) {
  var oldParty = hash['2010'];
  var currentParty = hash[year];
  var newParty = hash['2011'];
  try {
    var $riding = $('#' + name);
    var oldPartyName = canadaMap.partyNames[oldParty];
    var newPartyName = canadaMap.partyNames[newParty];
    var party = oldPartyName;
    if (year === '2011' || canadaMap.animateTimerId) {
      if (newPartyName !== oldPartyName) {
        party += '&nbsp;→&nbsp;' + newPartyName;
      } else {
        party += ' hold';
      }
    }
    $riding
      .removeClass()
      .addClass('riding ' + currentParty)
      .attr({ 'meta-data': hash.name + '<br>' + party });
    if (canadaMap.activeParty) {
      if (canadaMap.activeParty === currentParty) {
        $riding.removeClass('hidden');
      } else {
        $riding.addClass('hidden');
      }
    }
  } catch(err) {}
};

canadaMap.forEachProvinceAndEachRiding = function(year, func) {
  function ridings(riding) {
    for (var ridingName in riding) {
      func(ridingName, riding[ridingName]);
    }
  }
  function provinces(province) {
    for (var provinceName in province) {
      province[provinceName].forEach(ridings);
    }
  }
  canadaMap.provinces.forEach(provinces);
};

canadaMap.labelRidings = function(year) {
  canadaMap.forEachProvinceAndEachRiding(year, function(ridingName, result) {
    canadaMap.labelRiding(ridingName, result, year);
  });
  canadaMap.updateResultsFor(year);
};

canadaMap.getResultsFor = function(year) {
  var tallies = {};
  canadaMap.forEachProvinceAndEachRiding(year, function(ridingName, hash) {
    var party = hash[year];
    tallies[party] = (tallies[party] || 0) + 1;
  });
  return tallies;
};

canadaMap.updateResultsFor = function(year) {
  if (!canadaMap.results) {
    canadaMap.results = {
      '2010': canadaMap.getResultsFor('2010'),
      '2011': canadaMap.getResultsFor('2011')
    };
  }
  var $results = $('#results');
  function appendResult(party, before, after) {
    var partyName = canadaMap.partyNames[party];
    if (partyName.search(/s$/) === -1) {
      partyName += 's';
    }
    var $result = $('#resultFor-'+party);
    if (!$result.length) {
      $result = $('<div/>')
        .attr({
          'class': 'result ' + party,
          id: 'resultFor-'+party,
          title: 'Click to toggle only these seats' })
        .appendTo($results)
        .click(function() { canadaMap.toggleRidingsFor(party); });
    }
    $result.empty().append(
      $('<span class="name"/>').append(partyName),
      $('<span class="numbers"/>').append(
        $('<span class="before"/>').append(before || '0'),
        $('<span class="after hidden"/>').append(
          ' &rarr; ',
          $('<span class="afterNumber"/>').append(after || '0')
        )));
  }
  var party;
  for (party in canadaMap.results['2010']) {
    appendResult(party, canadaMap.results['2010'][party]);
  }
  var $alreadyResult;
  for (party in canadaMap.results['2011']) {
    $alreadyResult = $('#resultFor-'+party);
    if ($alreadyResult.length) {
      $alreadyResult.find('.afterNumber').empty().append(canadaMap.results['2011'][party]);
    } else {
      appendResult(party, '0', canadaMap.results['2011'][party]);
    }
  }
  if (year === '2011') {
    $results.find('.after').removeClass('hidden');
  } else {
    $results.find('.after').addClass('hidden');
  }
};

canadaMap.toggleRidingsFor = function(party) {
  var $ridings = $('.riding');
  $('.result.selected').removeClass('selected');
  if (canadaMap.activeParty === party) {
    canadaMap.activeParty = '';
    $ridings.removeClass('hidden');
  } else {
    $ridings.filter('.'+party).removeClass('hidden');
    $ridings.not('.'+party).addClass('hidden');
    canadaMap.activeParty = party;
    $('#resultFor-'+party).addClass('selected');
  }
};

canadaMap.updateHash = function(year) {
  var hash = window.location.hash;
  var newParam = 'show:' + year;
  if (hash && hash.indexOf('#!/') === 0) {
    var match = hash.match(/\b(show:\w*)\b/);
    if (match && match[1]) {
      hash = hash.replace(/\bshow:\w*\b/, newParam);
    } else {
      hash += '/' + newParam;
    }
    window.location.hash = hash;
  } else {
    hash = '#!/' + newParam;
    if (window.history.replaceState) {
      // don't alter browser history on first update of location hash
      window.history.replaceState({}, window.document.title, hash);
    } else {
      window.location.hash = hash;
    }
  }
};

canadaMap.animateYears = function($label) {
  if (!canadaMap.currentYear) {
    var year = canadaMap.getYearFromHash();
    if (!year || year.search(/\d{4}/) === -1) {
      year = '2011';
    }
    canadaMap.currentYear = year;
  }
  canadaMap.currentYear = canadaMap.currentYear === '2010' ? '2011' : '2010';
  canadaMap.labelRidings(canadaMap.currentYear);
  var $labelForYear = $('input[value='+canadaMap.currentYear+']').closest('label');
  canadaMap.updateButtonStatus($labelForYear, canadaMap.currentYear);
  canadaMap.animateTimerId = window.setTimeout(canadaMap.animateYears, 1500);
};

canadaMap.updateButtonStatus = function($label, year) {
  $('label.selected').removeClass('selected');
  $label.addClass('selected');
};

canadaMap.handleButtonFor = function($label) {
  window.clearTimeout(canadaMap.animateTimerId);
  canadaMap.animateTimerId = null;
  var year = $label.find('input').val();
  if (year === 'animate') {
    canadaMap.animateYears($label);
  } else {
    canadaMap.labelRidings(year);
  }
  canadaMap.updateButtonStatus($label, year);
  canadaMap.updateHash(year);
};

canadaMap.getYearFromHash = function() {
  var hash = window.location.hash;
  var match = hash.match(/\bshow:(\d{4}|animate)\b/);
  return match && match[1] || null;
};

canadaMap.resetYear = function() {
  var year = canadaMap.getYearFromHash();
  if (year) {
    $('.yearButton:checked').each(function() { this.checked = false; });
    $('.yearButton[value=' + year + ']').each(function() { this.checked = true; });
  }

  $('.yearButton:checked').click();
};

canadaMap.initialize = function() {
  $('.yearButtonLabel').click(function(e) {
    canadaMap.handleButtonFor($(this));
  });

  canadaMap.resetYear();

  $(window).bind('hashchange', function() { canadaMap.resetYear(); });

  $.fn.tipsy.defaults = {
    delayIn: 300,      // delay before showing tooltip (ms)
    delayOut: 0,     // delay before hiding tooltip (ms)
    fade: false,     // fade tooltips in/out?
    fallback: '',    // fallback text to use when no tooltip text
    gravity: 's',    // gravity
    html: true,     // is tooltip content HTML?
    live: false,     // use live event support?
    offset: 0,       // pixel offset of tooltip from element
    opacity: 0.75,    // opacity of tooltip
    title: 'meta-data',  // attribute/callback containing tooltip text
    trigger: 'hover' // how tooltip is triggered - hover | focus | manual
  };

  $('.riding').tipsy();
};

$(function() {
  window.setTimeout(function() {
    canadaMap.initialize();
  }, 250);
});