(function() {
    var articlesList = document.querySelectorAll("article");
    var articlesArr = [];
    for (let i = 0; i < articlesList.length; i++) {
        let obj = {};
        obj.title = document.getElementsByClassName("article-title")[i].innerText;
        let link = document.getElementsByClassName("wp-post-image")[i].src;
        obj.img = link.substring(0, link.indexOf('?'));
        obj.postBy = document.getElementsByClassName("author")[i].innerHTML;
        obj.time = document.getElementsByClassName("the-time")[i].innerHTML;
        articlesArr.push(obj);
    };
    console.log(JSON.stringify(articlesArr));
})()

