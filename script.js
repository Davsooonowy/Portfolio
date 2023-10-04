var pageTitle = "hobby, które zmieniło moje życie";
var newTitle = "znudziłem cię?";

function handleVisibilityChange() {
    if (document.hidden) {
        document.title = newTitle;
    } else {
        document.title = pageTitle;
    }
}

document.addEventListener("visibilitychange", handleVisibilityChange, false);