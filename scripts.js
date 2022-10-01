$(document).ready(function() {
$('#photo-gallery').cycle({before: onBefore});

    $('#previous').click(function() { $('#photo-gallery').cycle('prev'); return false; });
    $('#next').click(function() { $('#photo-gallery').cycle('next'); return false; });
    $('#pause-play').click(playPause);
    $('#pause-play').hover(function() { $('#pause-play').css("background","url('../images/fotogallctrl/fotogallctrl-playpause-hov.png') no-repeat top") }, function() { $('#pause-play').css("background","url('../images/fotogallctrl/fotogallctrl-playpause.png') no-repeat top") });
    $('#slideshow-module').hover(function() { $('#controlbox').fadeIn(); }, function() { $('#controlbox').fadeOut(); });
    
    function playPause() {
        $('#photo-gallery').cycle('toggle');
        if (document.getElementById('playstate').getAttribute("class") == 'play') {
            //change to pause button and change state to pause
            $('#pause-play').css("background","url('../images/fotogallctrl/fotogallctrl-playpause-hov.png') no-repeat bottom")
            $('#pause-play').hover(function() { $('#pause-play').css("background","url('../images/fotogallctrl/fotogallctrl-playpause-hov.png') no-repeat bottom") }, function() { $('#pause-play').css("background","url('../images/fotogallctrl/fotogallctrl-playpause.png') no-repeat bottom") });
            document.getElementById('playstate').setAttribute("class","pause")
        }
        else
        {
            //change to play button and change state to play
        $('#pause-play').css("background","url('../images/fotogallctrl/fotogallctrl-playpause-hov.png') no-repeat top")
	$('#pause-play').hover(function() { $('#pause-play').css("background","url('../images/fotogallctrl/fotogallctrl-playpause-hov.png') no-repeat top") }, function() { $('#pause-play').css("background","url('../images/fotogallctrl/fotogallctrl-playpause.png') no-repeat top") });
        document.getElementById('playstate').setAttribute("class","play")
        }
    }
    
function onBefore() {
    $('#controlbox #title').html(this.alt);
};

$('#frame').cycle({
    next:   'a.next', 
    prev:   'a.prev'});


	
	$("a.popup").fancybox({
	'overlayShow': true,
	'showCloseButton': false,
	'hideOnOverlayClick': true,
	'hideOnContentClick': false,
	'centerOnScroll': true,
	'width': 468
	});

$("a.popup").each(function () {
    var address = $(this).attr('href');
$(this).attr('href',address+'?javascript=true');
    });

});

$(document).ready(function() {
	
	$("a.slide").fancybox({
	'overlayShow': true,
	'showCloseButton': false,
	'hideOnOverlayClick': true,
	'hideOnContentClick': false,
	'centerOnScroll': true,
	'type': 'ajax',
	'width': 800,
	'titleShow': false,
	'scrolling':'no',
	});

$("a.slide").each(function () {
    var address = $(this).attr('href');
$(this).attr('href',address);
    });

helpfulEmail();

function helpfulEmail() {
    $("a[href*='mailto:']").attr('id','email');
    
$("a#email").each(function () {
    var address = $(this).attr('href');
    $(this).attr('href','/emailHelp.html');
    $(this).attr('rel','/emailHelp.html');
    $(this).click(() => {
        const intervalUid = setInterval(() => {
            if ($('#cluetip-inner #email-help').length === 0) return;
            clearInterval(intervalUid);
            $('#cluetip-inner').html($('#cluetip-inner').html().replace(/{{EMAIL}}/g, address.replace('mailto:', '')))
        }, 50);
    });
//The following fixes an IE Bug
var htmlNew = address.replace("mailto:","");
$(this).html(htmlNew);
    });
}

$('a#email').cluetip({activation: 'click', closePosition: 'top', closeText: 'Close', showTitle: false, sticky: false, dropShadow: false, width: 250, positionBy: 'bottomTop', leftOffset: 10, topOffset: 30});
});