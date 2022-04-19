const americanOnly = require('./american-only.js');
const americanToBritishSpelling = require('./american-to-british-spelling.js');
const americanToBritishTitles = require("./american-to-british-titles.js")
const britishOnly = require('./british-only.js')


class Translator {

    time(text, locale) {

        let spanStart = '<span class="highlight">';
        let spanEnd = '</span>';        

        let timeRegex = /[0-2]*[0-9][:\.][0-5][0-9]/g;

        let translatedTime = text;

        if(timeRegex.test(text) && locale == 'american-to-british') {

            let matches = text.match(timeRegex);
            let newTimes =[]; 

            // console.log(matches);
            // console.log(matches.length);

            for(let i = 0; i < matches.length; i++) {
                newTimes.push(matches[i].replace(':', '.'));
                
                translatedTime = translatedTime.replace(matches[i], spanStart + newTimes[i] + spanEnd);
                // console.log(translatedTime);
            }
        }

        if(timeRegex.test(text) && locale == 'british-to-american') {

            let matches = text.match(timeRegex);
            let newTimes =[]; 

            // console.log(matches);
            // console.log(matches.length);

            for(let i = 0; i < matches.length; i++) {
                newTimes.push(matches[i].replace('.', ':'));
                
                translatedTime = translatedTime.replace(matches[i], spanStart + newTimes[i] + spanEnd);
                // console.log(translatedTime);
            }
        }

        return translatedTime;
    }

    titles(text, locale) {

        // console.log(text);   

        // let obj = americanToBritishTitles;

        let spanStart = '<span class="highlight">';
        let spanEnd = '</span>'; 

        let americanTitles = Object.keys(americanToBritishTitles);
        let britishTitles = Object.values(americanToBritishTitles);

        let translatedText = text;

        if(locale == 'american-to-british') {
            americanTitles.forEach((title) => {
                // translatedText = translatedText.replace(new RegExp('\^' + title + '\\s', 'gi'), spanStart + americanToBritishTitles[title] + ' ' + spanEnd);
                // translatedText = translatedText.replace(new RegExp('\\s' + title + '\\s', 'gi'), spanStart + ' ' + americanToBritishTitles[title] + ' ' + spanEnd);
                translatedText = translatedText.replace(new RegExp(title, 'gi'), spanStart + americanToBritishTitles[title] + spanEnd);
            });
        }

        if(locale == 'british-to-american') {
            britishTitles.forEach((title, i) => {
                // translatedText = translatedText.replace(new RegExp('\^' + title + '\\s', 'gi'), spanStart + americanTitles[i] + ' ' + spanEnd);
                // translatedText = translatedText.replace(new RegExp('\\s' + title + '\\s', 'gi'), spanStart + ' ' + americanTitles[i] + ' ' + spanEnd);
                translatedText = translatedText.replace(new RegExp(title, 'gi'), spanStart + americanTitles[i] + spanEnd);
            });
        }

        // console.log(translatedText);
        return translatedText;
    }

    translate(text, locale) {
        let spanStart = '<span class="highlight">';
        let spanEnd = '</span>'; 

        if(locale == 'american-to-british') {

        }

        if(locale == 'british-to-american') {
            
        }

        // console.log(translatedText);
        return translatedText;
    }
}

module.exports = Translator;