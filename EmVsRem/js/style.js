$(function () {
  $('.button').on('click', function (e) {
		e.preventDefault();
		var it = $(this);
		var strAttr = it.attr('class');
		var strNowClass = strAttr.slice(-3)
		console.log(strNowClass);
		if (strNowClass === "rem") {
		var strClass ='.' + strAttr.slice(0, 6) +'.button_em';
			it.removeClass('button_rem');
			it.addClass('button_px');
			it.text('px button');
		} else
			if (strNowClass === "_em"){
        var strClass ='.' + strAttr.slice(0, 6) +'.button_px';
        it.removeClass('button_em');
        it.addClass('button_rem');
        it.text('rem button');
			} else
      if (strNowClass === "_px") {
        var strClass ='.' + strAttr.slice(0, 6) +'.button_rem';
        it.removeClass('button_px');
        it.addClass('button_em');
        it.text('em button');
			}
		console.log(strAttr);
		console.log(strClass);
//		console.log($(strClass));
	})
})
