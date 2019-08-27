function setCookie(name, value)
{
    var expires = "";
    expires = "; expires=Fri, 31 Dec 9999 23:59:59 GMT";
    document.cookie = name + "=" + (value || "") + expires;
}

function getCookie(cname)
{
    var match = document.cookie.match(new RegExp('(^| )' + cname + '=([^;]+)'));
    if (match) return match[2];
}

var getbgurl = getbgurl || {}

function getbg() {
    var bgurltext = (getCookie("userbg") || "../start-page/resources/bg.jpg");
    document.getElementById("bgurltextbox").value=bgurltext;
}

function gettickboxesstates() {
    var hidetiles = getCookie("hidetiles");
    document.getElementById("hidetilestoggle").value=hidetiles;
    var hideblog = getCookie('hideblog');
    document.getElementById("hideblogtoggle").value=hideblog;
    var hidecredits = getCookie('hidecredits');
    document.getElementById("hidecreditstoggle").value=hidecredits;
}

function savesettings() {
//     if (document.getElementById("bgurltextbox").value = null) {
//         document.getElementById("bgurltextbox").value="/resources/bg.jpg";
//     }
    setCookie("userbg", document.getElementById("bgurltextbox").value)
    setCookie("hidetiles", document.getElementById("hidetilestoggle").value)
    setCookie("hideblog", document.getElementById("hideblogtoggle").value)
    setCookie("hidecredits", document.getElementById("hidecreditstoggle").value)
    window.location.href = "https://feren-os.github.io/start-page";
}


