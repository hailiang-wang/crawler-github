// var assert = require('assert'),
//     should = require('should'),
const test = require('ava'),
    crawler = require('../services/crawler');
const cheerio = require('cheerio');

function sleep(){
    return new Promise((resolve, reject) => {
        setTimeout(()=>{
            resolve()
        }, 1000)
    })
}

function printAllUserIds(response){
    var names = response.$('body > div > div.github_users > ul > li > div.name');
    for(let i = 0;  i < names.length; i++){
        let s = cheerio.load(names[i.toString()]);
        let d = s.text().split(" ");
        let github_id = d[d.length - 1];
        console.log("github_id:", github_id)
    }
}

test('Web Pages Crawler', async (t)=> {
    // should get paths of http://bbs.byr.cn/#!board/Friends
    let maxIndex = 1648
    for(let index = 1; index <= maxIndex; index++){
        console.log("index ", index)
        await sleep();
        let response = await crawler.queue({
            uri: `http://outofmemory.cn/github/*/*/?sort=stars&page=${index}`,
            headers: {
                'X-Requested-With': 'XMLHttpRequest'
            }
        });
        printAllUserIds(response);
    }
    // should(response.result).ok;
    // should(response.$).ok;


    t.pass();
})
