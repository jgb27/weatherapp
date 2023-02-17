
const ptBr = ['Umidade', 'Vento', 'Pressão', 'Pais', 'População', 'Moeda']
const en = ['Humidity', 'Wind', 'Pressure', 'Country', 'Population', 'Currency']
const es = ['Humedad', 'Viento', 'Presión', 'País', 'Población', 'Moneda']
const fr = ['Humidité', 'Vent', 'Pression', 'Pays', 'Population', 'Monnaie']
const de = ['Feuchtigkeit', 'Wind', 'Druck', 'Land', 'Bevölkerung', 'Währung']
const it = ['Umidità', 'Vento', 'Pressione', 'Paese', 'Popolazione', 'Valuta']
const nl = ['Vochtigheid', 'Wind', 'Druk', 'Land', 'Bevolking', 'Valuta']
const pt = ['Humidade', 'Vento', 'Pressão', 'País', 'População', 'Moeda']
const ru = ['Влажность', 'Ветер', 'Давление', 'Страна', 'Население', 'Валюта']
const ja = ['湿度', '風', '圧力', '国', '人口', '通貨']
const zh = ['湿度', '風', '壓力', '國家', '人口', '貨幣']

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