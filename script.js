// Title change, after tab change

var pageTitle = "piłka ręczna w moim życiu";
var newTitle = "znudziłem cię?";

function handleVisibilityChange() {
    if (document.hidden) {
        document.title = newTitle;
    } else {
        document.title = pageTitle;
    }
}
