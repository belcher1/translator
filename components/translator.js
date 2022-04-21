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

        console.log(translatedTime);
        return translatedTime;
    }

    titles(text, locale) {

        // console.log(text);   

        // let obj = americanToBritishTitles;

        let spanStart = "<span class='highlight'>";
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

        console.log(translatedText);
        return translatedText;
    }

    translate(text, locale) {
        let spanStart = "<span class='highlight'>";
        let spanEnd = '</span>'; 

        let translatedText = text;

        if(locale == 'american-to-british') {
            let aOnly = Object.entries(americanOnly);
            let a2bSpelling = Object.entries(americanToBritishSpelling);

            aOnly.forEach((term) => {
                translatedText = translatedText.replace(new RegExp(term[0], 'gi'), spanStart + term[1] + spanEnd);
            });

            a2bSpelling.forEach((term) => {
                translatedText = translatedText.replace(new RegExp(term[0], 'gi'), spanStart + term[1] + spanEnd);
            });

            // for(let i = 0; i < aOnly.length; i++) {
            //     translatedText = translatedText.replace(new RegExp(title, 'gi'), spanStart + aOnly[i][1] + spanEnd);
            // }

            // let arr = text.split(' ');

            // for(let i = 0; i < arr.length; i++) {
            //     if(americanOnly.hasOwnProperty(arr[i])) {
            //         console.log(americanOnly[arr[i]]);
            //     }
            // }
        }

        if(locale == 'british-to-american') {
            let a2bSpelling = Object.entries(americanToBritishSpelling);
            let bOnly = Object.entries(britishOnly);

            a2bSpelling.forEach((term) => {
                translatedText = translatedText.replace(new RegExp(term[1], 'gi'), spanStart + term[0] + spanEnd);
            }); 

            bOnly.forEach((term) => {
                translatedText = translatedText.replace(new RegExp(term[0], 'gi'), spanStart + term[1] + spanEnd);
            });
        }

        console.log(translatedText);
        return translatedText;
    }
}

module.exports = Translator;