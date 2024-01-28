
const library = reactive({
  Allbooks:[
  {
    id:1,
    title: 'Super kniha',
    author: 'Noel Takacs',
    pages: 10,
  },
  {
    id:2,
    title: 'Zla kniha',
    author: 'Misko',
    pages: 21,

  },
  {
    id:3,
    title: 'Zivot na Jazere',
    author: 'Mike Tyson',
    pages: 14,

  },
  {
    id:4,
    title: 'Kniha na dobru noc',
    author: 'Messi',
    pages: 5,

  },
  {
    id:5,
    title: 'Harry Potter',
    author: 'J.K.Rowling',
    pages: 2,

  },
  {
    id:6,
    title: 'OKej',
    author: 'Nik Tendo',
    pages: 67,

  },
  ]
})

export const useLibrary = () => {
  return{library}
}
