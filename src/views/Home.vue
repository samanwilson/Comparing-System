<template>
  <div class="home">
    <div class="container">
      <div class="row">
        <router-link to="/Favorites">Favorites</router-link>
      </div>
      <div class="row">
        <div class="col-md-3" v-for="item in ShowVuexData" :key="item.id">
          <div class="card" >
            <div class="card-header">
              <h1> {{item.id}}</h1>
            </div>
            <div class="card-title">
              <h2>{{item.title}}</h2>
            </div>
            <div class="card-text">
              <p>{{item.body}}</p>
            </div>
            <button class="btn btn-primary" @click="SendFpost(item.id)">Compare</button>
            <button class="btn btn-danger" @click="SendFav(item.id)" :class="{Liked : this.IsLiked }">Favorites</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import{useRouter} from 'vue-router'
export default {
  name: 'Home',
  data(){
    return{
      Router: useRouter(),
      IsLiked:false

    }
  },
  computed:{
    ShowVuexData(){

      return this.$store.getters.Showpost

    }
  },
  created(){
    this.$store.dispatch('Getpost')
  },
  methods:{
    SendFpost(postid){
      this.$store.dispatch('GetFpost',postid)
      this.Router.replace('/Compare')


    }
    ,
    SendFav(Id){
      this.IsLiked =! this.IsLiked
      this.$store.dispatch('GetFav',Id)


    }


  }

}
</script>

<style>
  .Liked{
    background-color: green!important;
  }

</style>
