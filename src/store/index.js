import { createStore } from 'vuex'
import axios from 'axios'



export default createStore({
  state: {
    Post:[],
    Fpost:[],
    Spost:[],
    Fav:[]

  },
  getters:{
    Showpost(state){
      return state.Post
    },
    ShowFpost(state){

      return state.Fpost
    },
    ShowSpost(state){
      return state.Spost
    },
    ShowFav(state){
      return state.Fav
    }
  },
  mutations: {
    Setpost(state,data){

      state.Post = data

    },    SetFpost(state,data){

      state.Fpost = data

},

    SetSpost(state,data){
      state.Spost = data
    },
    SetFav(state,data){
      state.Fav.push(data)
    }


  },
  actions: {
    Getpost(context){
      axios.get('https://jsonplaceholder.typicode.com/posts').then((response)=>{
        context.commit('Setpost',response.data)
        console.log(response.data)
      }).catch((e)=>{
        alert(e)
      })
    }
    ,
    GetFpost(context,filter){

      axios.get(`https://jsonplaceholder.typicode.com/posts/${filter}`).then((response)=>{
        context.commit('SetFpost',response.data)
        console.log(response.data)




      }).catch((e)=>{
        alert(e)
      })
    },

    GetSpost(context,filter){

      axios.get(`https://jsonplaceholder.typicode.com/posts/${filter}`).then((response)=>{
        context.commit('SetSpost',response.data)

        console.log(response.data)
      }).catch((e)=>{

        alert(e)
      })
    },
    GetFav(context,filter,){

      axios.get(`https://jsonplaceholder.typicode.com/posts/${filter}`).then((response)=>{
        context.commit('SetFav',response.data)
        console.log(response.data)
      }).catch((e)=>{

        alert(e)
      })
    }
  },
  modules: {
  }
})
