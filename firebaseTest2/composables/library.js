const Allbooks = reactive({
    params: [
      {id:1,
      title: 'My car',
      author: 'Marry Roosvelt', 
      pages: 35},

      {id:2,
      title: 'My boat',
      author: 'Adam Sandler', 
      pages: 22},

      {id:3,
      title: 'My house',
      author: 'Marie House', 
      pages: 61},

      {id: 4,
        title: 'My book',
      author: 'Adam Maly', 
      pages: 5},

      {id:5,
        title: 'My car',
      author: 'Janko Hraskou', 
      pages: 15},

      {id:6,
        title: 'My car',
      author: 'Peter Parker', 
      pages: 21},

      {id:7,
        title: 'My dog',
      author: 'Peter Dog', 
      pages: 12},
      
      {id:8,
        title: 'Hello',
      author: 'Martin Parker', 
      pages: 32},
    ]


})


export const useState = () => {
  return{Allbooks}
}
