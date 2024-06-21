function updatePointContent(element, title, content, link){
    $(element).text(title)
    $(element).append(content)// add content
    element = element + ' > a'
    $(element).attr('href', link)
}

var ti = "本周(6.17.2024 - 6.21.2024)晨兴与读经进度"
$('title').text(ti)
$('h1').text(ti)
//Morning Revival
$('.div1 > .sub').text("晨兴圣言")
var book = "书目：" + "经营美地所预表包罗万有的基督，为着建造召会作基督的身体，为着国度的实际与实现，并为着新妇得以为主的来临将自己预备好(2023年冬季训练)"
$('.div1 > h3 > ul > .p1').text(book)
ti = "进度："
var content = "<a>第六周 基督作我们安息日的安息，由迦南美地所预表</a>"
var link = "https://stemofjesse.org/doku/doku.php/%E6%99%A8%E5%85%B4%E5%9C%A3%E8%A8%80:2023:2023.07.%E5%86%AC%E5%AD%A3%E8%AE%AD%E7%BB%83:%E7%AC%AC%E5%85%AD%E5%91%A8"
var elem = '.div1 > h3 > ul > .p2'
updatePointContent(elem, ti, content, link)
//Bible
var oldTest = "民数记"
var newTest = "罗马书"
$('.div2 > .sub').text("圣经")
ti = "旧约：" + oldTest
content = " <a>第4~8章</a>" //<------ update here every week
link = "https://www.recoveryversion.com.tw/Style0A/026/read_List.php?f_BookNo=4&f_ChapterNo=4&f_VerseNo=1"
elem = '.div2 > h3 > ul > .p1'
updatePointContent(elem, ti, content, link)
ti = "新约：" + newTest
content = " <a>第4~8章</a>" //<------ update here every week
link = "https://www.recoveryversion.com.tw/Style0A/026/read_List.php?f_BookNo=45&f_ChapterNo=4&f_VerseNo=1"
elem = '.div2 > h3 > ul > .p2'
updatePointContent(elem, ti, content, link)
ti = "认识基督系列认识基督系列："
content = "<a>" + oldTest + "</a>"
link = "https://substantial-baboon-a7f.notion.site/eecc41f80c404494b4faaec0088ea8b2"
elem = '.div2 > h3 > ul > .p3'
updatePointContent(elem, ti, content, link)
ti = "认识基督系列认识基督系列："
content = "<a>" + newTest + "</a>"
link = "https://shard-desk-771.notion.site/8c64d024703f43b2a7ad8c8a665c9e64"
elem = '.div2 > h3 > ul > .p4'
updatePointContent(elem, ti, content, link)
ti = "新约圣经导读："
content = "<a>" + newTest + "</a>"
link = "https://xinrenfuyin.org/?page_id=10686"
elem = '.div2 > h3 > ul > .p5'
updatePointContent(elem, ti, content, link)
//Life Study
newTest = "歌罗西书生命读经"
$('.div3 > .sub').text("生命读经")
ti = "进度："
content = "<a>" + newTest + "</a>"
link = "http://www.life-study1984.org/schedule/schedule.php?bookno=51-Y"
elem = '.div3 > h3 > ul > .p1'
updatePointContent(elem, ti, content, link)
ti = "展览日期：8/15/2024"
link = "http://www.life-study1984.org/schedule/schedule.php?bookno=50-Y"
$('.div3 > h3 > ul > .p2').text(ti)
ti = "展览范围：歌罗西书生命读经第1至8篇"
link = "http://www.life-study1984.org/schedule/schedule.php?bookno=50-Y"
$('.div3 > h3 > ul > .p3').text(ti)