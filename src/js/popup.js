$("#btn_openSite").click(function () {
    createTab("https://thwiki.cc");
});

checkLogin(doPopup);

function doPopup(username) {
    if (username !== null) {
        username=username.replace("+","_");
        $("#btn_login").text(function () {
            return username.replace("_"," ");
        }).click(function () {
            newURL = "https://thwiki.cc/用户:" + username;
            chrome.tabs.create({url: newURL});
        });
        checkUnreadNotificationList();
    } else {
        $("#btn_login").text("登录THBWiki")
            .click(function () {
                newURL = "https://thwiki.cc/index.php?title=%E7%89%B9%E6%AE%8A:%E7%94%A8%E6%88%B7%E7%99%BB%E5%BD%95";
                chrome.tabs.create({url: newURL});
            });
    }
}