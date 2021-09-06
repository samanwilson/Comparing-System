<template>
    <div class="container-fluid">
        <div class="row">
            <h1 class="text-center">Compare</h1>
        </div>
        <div class="row d-flex flex-column align-items-center" >
            <div class="col-md-4" v-for="item in ShowVuexData" :key="item.id">
                <div class="card" >
                    <div class="card-header">
                        <h1>{{item.id}}</h1>
                    </div>
                    <div class="card-title">
                        <h2>{{item.title}}</h2>
                    </div>
                    <div class="card-text">
                        <p>{{item.body}}</p>
                    </div>
                    <button class="btn btn-primary" @click="SendSpost(item.id)" >Compare</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import{useRouter} from 'vue-router'
    export default {
        data(){
            return{
                Router: useRouter()

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
            SendSpost(id){

                this.$store.dispatch('GetSpost',id)
                this.Router.replace('/Compared')

            }
        }
    }
</script>

<style scoped>

</style>