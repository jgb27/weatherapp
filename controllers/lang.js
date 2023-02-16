
const ptBr = ['Umidade', 'Vento', 'Pressão']
const en = ['Humidity', 'Wind', 'Pressure']
const es = ['Humedad', 'Viento', 'Presión']
const fr = ['Humidité', 'Vent', 'Pression']
const de = ['Feuchtigkeit', 'Wind', 'Druck']
const it = ['Umidità', 'Vento', 'Pressione']
const nl = ['Vochtigheid', 'Wind', 'Druk']
const pt = ['Humidade', 'Vento', 'Pressão']
const ru = ['Влажность', 'Ветер', 'Давление']
const ja = ['湿度', '風', '圧力']
const zh = ['湿度', '風', '壓力']

const selectLanguage = (lang) => {
  switch (lang) {
    case 'pt_br':
      return ptBr
    case 'en':
      return en
    case 'es':
      return es
    case 'fr':
      return fr
    case 'de':
      return de
    case 'it':
      return it
    case 'nl':
      return nl
    case 'pt':
      return pt
    case 'ru':
      return ru
    case 'ja':
      return ja
    case 'zh':
      return zh
    default:
      return en
  }
}

export default selectLanguage