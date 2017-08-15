var assert = require('assert'),
    should = require('should'),
    crawler = require('../services/crawler');

describe('Web Pages Crawler', function() {
    this.timeout(5000);

    it('should get paths of http://bbs.byr.cn/#!board/Friends', function(done) {
        crawler.queue({
                uri: 'http://bbs.byr.cn/board/Friends',
                headers: {
                    'X-Requested-With': 'XMLHttpRequest'
                }
            })
            .then(function(response) {
                should(response.result).ok;
                should(response.$).ok;
                done();
            })
            .fail(function(err) {
                done(err);
            });
    })
})
