import {GoogleTranslator} from './GoogleTranslator'
const translateTypeApi = {
    GOOGLE: 0,
    CAMBRIDGE: 1
}
class TranslateEngineFactory{
    constructor(typeApi, sourceLang, targetLang) {
      this.translator = null;
      switch(typeApi){
        case translateTypeApi.GOOGLE:
          this.translator = new GoogleTranslator(sourceLang, targetLang);
        break;
        default:
          this.translator = new GoogleTranslator(sourceLang, targetLang);
        break;
      }
    }
    translate(sourceText) {
      return this.translator.translate(sourceText);
    }
};
  