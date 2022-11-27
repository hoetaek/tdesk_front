const DjangoBase = 'http://localhost:8000/'
const API_VERSION = 'v1'

export default {
  Django_API: `${DjangoBase}api/${API_VERSION}/`,

  /* Worksheet */
  worksheet_all: 'worksheet/',
  worksheet_detail: (id) => {
    return `worksheet/${id}`
  },

  /* Wordsearch */
  wordsearch_all: 'wordsearch/',
  wordsearch_detail: (id) => {
    return `wordsearch/${id}`
  },
}
