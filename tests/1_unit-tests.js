const chai = require('chai');
const assert = chai.assert;

const Translator = require('../components/translator.js');
let translator = new Translator();

let locale1 = 'american-to-british';
let locale2 = 'british-to-american';

suite('Unit Tests', () => {
    suite('1 - American to British Terms', function() {
        test('1', function() {
            let phrase = 'Mangoes are my favorite fruit.';
            let translation = `Mangoes are my <span class="highlight">favourite</span> fruit.`;
            assert.equal(translator.translate(phrase, locale1), translation);
        });
        test('2', function() {
            let phrase = 'I ate yogurt for breakfast.';
            let translation = `I ate <span class="highlight">yoghurt</span> for breakfast.`;
            assert.equal(translator.translate(phrase, locale1), translation);
        });
        test('3', function() {
            let phrase = "We had a party at my friend's condo.";
            let translation = `We had a party at my friend's <span class="highlight">flat</span>.`;
            assert.equal(translator.translate(phrase, locale1), translation);
        });
        test('4', function() {
            let phrase = 'Can you toss this in the trashcan for me?';
            let translation = `Can you toss this in the <span class="highlight">rubbish</span>can for me?`;
            assert.equal(translator.translate(phrase, locale1), translation);
        });
        test('5', function() {
            let phrase = 'The parking lot was full.';
            let translation = `The <span class="highlight">car park</span> was full.`;
            assert.equal(translator.translate(phrase, locale1), translation);
        });
        test('6', function() {
            let phrase = 'Like a high tech Rube Goldberg machine.';
            let translation = `Like a high tech <span class="highlight">Heath Robinson device</span>.`;
            assert.equal(translator.translate(phrase, locale1), translation);
        });
        test('7', function() {
            let phrase = 'To play hooky means to skip class or work.';
            let translation = `To <span class="highlight">bunk off</span> means to skip class or work.`;
            assert.equal(translator.translate(phrase, locale1), translation);
        }); 
    });
    suite('2 - American to British Titles & Times', function() {
        test('8', function() {
            let phrase = 'No Mr. Bond, I expect you to die.';
            let translation = 'No <span class="highlight">Mr</span> Bond, I expect you to die.';
            assert.equal(translator.titles(phrase, locale1), translation);
        });
        test('9', function() {
            let phrase = 'Dr. Grosh will see you now.';
            let translation = '<span class="highlight">Dr</span> Grosh will see you now.';
            assert.equal(translator.titles(phrase, locale1), translation);
        });
        test('10', function() {
            let phrase = 'Lunch is at 12:15 today.';
            let translation = 'Lunch is at <span class="highlight">12.15</span> today.';
            assert.equal(translator.time(phrase, locale1), translation);
        });
    });
    suite('3 - British to American Terms', function() {
        test('11', function() {
            let phrase = 'We watched the footie match for a while.';
            let translation = `We watched the <span class="highlight">soccer</span> match for a while.`;
            assert.equal(translator.translate(phrase, locale2), translation);
        });
        test('12', function() {
            let phrase = 'Paracetamol takes up to an hour to work.';
            let translation = `<span class="highlight">Tylenol</span> takes up to an hour to work.`;
            assert.equal(translator.translate(phrase, locale2), translation);
        });
        test('13', function() {
            let phrase = 'First, caramelise the onions.';
            let translation = `First, <span class="highlight">caramelize</span> the onions.`;
            assert.equal(translator.translate(phrase, locale2), translation);
        });
        test('14', function() {
            let phrase = 'I spent the bank holiday at the funfair.';
            let translation = `I spent the <span class="highlight">public holiday</span> at the <span class="highlight">carnival</span>.`;
            assert.equal(translator.translate(phrase, locale2), translation);
        });
        test('15', function() {
            let phrase = 'I had a bicky then went to the chippy.';
            let translation = `I had a <span class="highlight">cookie</span> then went to the <span class="highlight">fish-and-chip shop</span>.`;
            assert.equal(translator.translate(phrase, locale2), translation);
        });
        test('16', function() {
            let phrase = "I've just got bits and bobs in my bum bag.";
            let translation = `I've just got <span class="highlight">odds and ends</span> in my <span class="highlight">fanny pack</span>.`;
            assert.equal(translator.translate(phrase, locale2), translation);
        });
        test('17', function() {
            let phrase = 'The car boot sale at Boxted Airfield was called off.';
            let translation = `The <span class="highlight">swap meet</span> at Boxted Airfield was called off.`;
            assert.equal(translator.translate(phrase, locale2), translation);
        });
    });
    suite('4 - Britsh to American Titles & Time', function() {
        test('18', function() {
            let phrase = 'Have you met Mrs Kalyani?';
            let translation = 'Have you met <span class="highlight">Mr.</span>s Kalyani?';
            assert.equal(translator.titles(phrase, locale2), translation);
        });
        test('19', function() {
            let phrase = "Prof Joyner of King's College, London.";
            let translation = `<span class="highlight">Prof.</span> Joyner of King's College, London.`;
            assert.equal(translator.titles(phrase, locale2), translation);
        });
        test('20', function() {
            let phrase = 'Tea time is usually around 4 or 4.30.';
            let translation = 'Tea time is usually around 4 or <span class="highlight">4:30</span>.';
            assert.equal(translator.time(phrase, locale2), translation)
        });
    });
    suite('5 - Highlight translation', function() {
        test('21', function() {
            let phrase = 'Mangoes are my favorite fruit.';
            let translation = `Mangoes are my <span class="highlight">favourite</span> fruit.`;
            assert.equal(translator.translate(phrase, locale1), translation);
        });
        test('22', function() {
            let phrase = 'I ate yogurt for breakfast.';
            let translation = `I ate <span class="highlight">yoghurt</span> for breakfast.`;
            assert.equal(translator.translate(phrase, locale1), translation);
        });
        test('23', function() {
            let phrase = 'We watched the footie match for a while.';
            let translation = `We watched the <span class="highlight">soccer</span> match for a while.`;
            assert.equal(translator.translate(phrase, locale2), translation);
        });
        test('24', function() {
            let phrase = 'Paracetamol takes up to an hour to work.';
            let translation = `<span class="highlight">Tylenol</span> takes up to an hour to work.`;
            assert.equal(translator.translate(phrase, locale2), translation);
        });
    }); 
});
