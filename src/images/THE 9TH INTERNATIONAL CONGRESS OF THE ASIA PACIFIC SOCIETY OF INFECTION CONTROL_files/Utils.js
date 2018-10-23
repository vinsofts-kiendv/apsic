/* APDF 2014 - Ha Noi - Viet Nam*/

// Common class
String.prototype.format = function () {
    var text = this;
    //decrement to move to the second argument in the array
    var tokenCount = arguments.length;
    //check if there are two arguments in the arguments list
    if (tokenCount < 1) {
        //if there are not 2 or more arguments there's nothing to replace
        //just return the original text
        return text;
    }
    for (var token = 0; token < tokenCount; token++) {
        //iterate through the tokens and replace their placeholders from the original text in order
        text = text.replace(new RegExp("\\{" + token + "\\}", "gi"), arguments[token]);
    }
    return text;
};
Trim = function (s) {
    return s.trim();
}
// Removes leading whitespaces
String.prototype.ltrim = function () {
    return this.replace(/\s*((\S+\s*)*)/, "$1");
}
// Removes ending whitespaces
String.prototype.rtrim = function () {
    return this.replace(/((\s*\S+)*)\s*/, "$1");
}
// Removes leading and ending whitespaces
String.prototype.trim = function () {
    return this.ltrim().rtrim();
}
// check a stringh is not or empty
function IsNullOrEmpty(str) {
    if (typeof str == undefined) return true;
    if (str == null) return true;
    if (str.trim() == "") return true;
}
// wrap word in text
String.prototype.wordWrap = function (m, b, c) {
    var i, j, l, s, r;
    if (m < 1)
        return this;
    for (i = -1, l = (r = this.split("\n")).length; ++i < l; r[i] += s)
        for (s = r[i], r[i] = ""; s.length > m; r[i] += s.slice(0, j) + ((s = s.slice(j)).length ? b : ""))
            j = c == 2 || (j = s.slice(0, m + 1).match(/\S*(\s)?$/))[1] ? m : j.input.length - j[0].length
			|| c == 1 && m || j.input.length + (j = s.slice(m).match(/^\S*/)).input.length;
    return r.join("\n");
};

// Array prototype
Array.prototype.removeAt = function (iIndex /*:int*/) /*:variant*/ {
    var vItem = this[iIndex];
    if (vItem) {
        this.splice(iIndex, 1);
    }
    return vItem;
};
Array.prototype.swapped = function (x, y /*:int*/) /*:variant*/ {
    this[x] = this.splice(y, 1, this[x])[0];
};

function IsNullOrEmpty(input) {
    if (input == undefined || input == null) return true;
    if (input.trim() == "") return true;
    return false;
}
function IsValidEmail(email) {
    var reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
    if (reg.test(email) == false) {
        return false;
    }
    return true;
}

function GoTo(i) {
    return goTo(i);
}
function goTo(i) {
    location.href = i;
    return false;
}

function ShowVideoPlayer(divId, videoPath, imagePath, width, height, autoStart) {
    if (typeof (autoStart) == "undefined") autoStart = true;
    if ($("#" + divId).length > 0) {
        //jwplayer(divId).setup({
        //    autoStart: autoStart,
        //    width: width,
        //    height: height,
        //    volume: 100,
        //    streamer: "",
        //    provider: "http",
        //    controlbar: { position: "over" },
        //    skin: "/Players/abu.com.zip",
        //    image: imagePath,
        //    modes: [
        //            { type: "flash", src: "/Players/player.swf" },
        //            { type: "html5" },
        //            { type: "download" }
        //        ],
        //    levels: [
        //            { file: videoPath }
        //        ],
        //    abouttext: "Apdf 2014",
        //    aboutlink: "http://www.apdfvn2014.com.vn"
        //});
        jwplayer(divId).setup({
            'flashplayer': '/players/jwplayer.swf',
            'id': 'playerID',
            'width': width,
            'height': height,
            'file': 'http://www.youtube.com/embed/' + videoPath + '&feature=youtu.be',
            'controlbar.position': 'over',
            "controlbar.idlehide": true,
            "controlbar.dock": true,
            'logo.file': '/Images/logo.jpg',
            'image.file': imagePath,
            'aboutlink': 'http://www.apdfvn2014.com.vn'
        });
        $("#" + divId).css("margin", "0px auto");

    }
}

function DownloadFile(filepath) {
    var downloadUrl = "/Download.aspx?docfile=" + filepath;
    window.location.href = downloadUrl;
    return false;
}