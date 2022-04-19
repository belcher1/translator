'use strict';

const Translator = require('../components/translator.js');

module.exports = function (app) {
  
  const translator = new Translator();

  app.route('/api/translate')
    .post((req, res) => {

      // console.log(req.body);

      let text = req.body.text;
      let locale = req.body.locale;

      let translation = '';

      //#6 Check if one or more fields are missing 
      if(locale == undefined || text == undefined) {
        return res.json({error: 'Required field(s) missing'});
      }

      //#7 Check if text is empty
      if(text == '') {
        return res.json({error: 'No text to translate'}); 
      }

      //#8 Check if locale matches one of the two specified
      let option1 = 'american-to-british';
      let option2 = 'british-to-american';
      if(locale != option1 && locale != option2) {
        return res.json({error: 'Invalid value for locale field'});
      }

      translation = translator.time(text, locale);
      translation = translator.titles(translation, locale);
      translation = translator.translate(translation, locale);

      //#9 Check if the text required no translation
      if(translation == text) {
        // console.log('test');
        return res.json({text: text, translation: 'Everything looks good to me!'});
      }

      return res.json({text: text, translation: translation});
    });
};
