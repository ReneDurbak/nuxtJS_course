const state = ref([
  {
  id:1,
  title: "Article A",
  content: "bfe jklamls asas ",
},

{
  id:2,
  title: "Article B",
  content: "bfe jklafsdfsfs asas ",
},

{
  id:3,
  title: "Article C",
  content: "bsdadadadww jklamls asas ",
},


])

const deleteById = (id) => {

  state.value = state.value.filter(item =>  item.id != id )
}

export const useArticles = () => {
  return {state,deleteById}
}
