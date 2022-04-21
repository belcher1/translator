const chai = require('chai');
const chaiHttp = require('chai-http');
const assert = chai.assert;
const server = require('../server.js');

chai.use(chaiHttp);

let Translator = require('../components/translator.js');

suite('Functional Tests', () => {
    test('1 - Normal', function(done) {
        chai.request(server)
            .post('/api/translate')
            .send({text:'Mangoes are my favorite fruit.', locale:'american-to-british'})
            .end(function(err, res) {
                let translation = `Mangoes are my <span class="highlight">favourite</span> fruit.`;
                assert.equal(res.body.translation, translation);
                done();
            });
    });
    test('2 - Invalid locale field', function(done) {
        chai.request(server)
            .post('/api/translate')
            .send({text:'Mangoes are my favorite fruit.', locale:'invalid'})
            .end(function(err, res) {
                assert.equal(res.body.error, 'Invalid value for locale field');
                done();
            });
    });
    test('3 - Missing text field', function(done) {
        chai.request(server)
            .post('/api/translate')
            .send({locale:'american-to-british'})
            .end(function(err, res) {
                assert.equal(res.body.error, 'Required field(s) missing');
                done();
            });
    });
    test('4 - Missing locale field', function(done) {
        chai.request(server)
            .post('/api/translate')
            .send({text:'Mangoes are my favorite fruit.'})
            .end(function(err, res) {
                assert.equal(res.body.error, 'Required field(s) missing');
                done();
            });
    });
    test('5 - Empty text', function(done) {
        chai.request(server)
            .post('/api/translate')
            .send({text:'', locale:'american-to-british'})
            .end(function(err, res) {
                assert.equal(res.body.error, 'No text to translate');
                done();
            });
    });
    test('6 - Text that needs no translation', function(done) {
        chai.request(server)
            .post('/api/translate')
            .send({text:'Text that needs no translation', locale:'american-to-british'})
            .end(function(err, res) {
                assert.equal(res.body.translation, 'Everything looks good to me!');
                done();
            });
    });
});
