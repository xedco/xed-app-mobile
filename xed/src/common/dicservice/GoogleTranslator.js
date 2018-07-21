import {$http} from '../http-utils'

class GoogleTranslator{
    constructor(sourceLang, targetLang) {
        this.sourceLang = sourceLang;
        this.targetLang = targetLang;
      }
      translate(sourceText) {
        var url  = "https://translate.googleapis.com/translate_a/single?client=gtx&sl="
        +sourceLang+"&tl="+targetLang+"&hl=en-US&dt=t&dt=bd&dj=1&source=icon&tk=184946.184946&q="
         + encodeURI(sourceText);
      return $http.get(url)
        .then(result => {
            callback(result);
        }).catch(e => {
            callback(null);
        });
      }
}