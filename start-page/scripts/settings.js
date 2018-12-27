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
    var bgurltext = (getCookie("userbg") || "/resources/kyle-hinkson-498968-unsplash.jpg");
    document.getElementById("bgurltextbox").value=bgurltext;
}

function savesettings() {
//     if (document.getElementById("bgurltextbox").value = null) {
//         document.getElementById("bgurltextbox").value="/resources/kyle-hinkson-498968-unsplash.jpg";
//     }
    setCookie("userbg", document.getElementById("bgurltextbox").value)
//     window.location.href = "https://feren-os.github.io/start-page";
}


