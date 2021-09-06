<template>
    <div class="container">
        <div class="row d-flex justify-content-between">
            <div class="col-md-3" >
                <div class="card" >
                    <div class="card-header">
                        <h1> {{ShowVuexData.id}}</h1>
                    </div>
                    <div class="card-title">
                        <h2>{{ShowVuexData.title}}</h2>
                    </div>
                    <div class="card-text">
                        <p>{{ShowVuexData.body}}</p>
                    </div>
                <button @click="ShowVuexData"></button>
                </div>
            </div>

            <button @click="Back">back</button>

            <div class="col-md-3" >
                <div class="card" >
                    <div class="card-header">
                        <h1> {{ShowData.id}}</h1>
                    </div>
                    <div class="card-title">
                        <h2>{{ShowData.title}}</h2>
                    </div>
                    <div class="card-text">
                        <p>{{ShowData.body}}</p>
                    </div>
                        <p>{{this.cookie}}</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import{useRouter} from 'vue-router'
    import Cookies from 'js-cookie'
    export default {
        data(){
            return{
                Router: useRouter(),
                cookie: Cookies.get('saman')

            }
        },
        computed:{
            ShowVuexData() {
             return this.$store.getters.ShowFpost
            },
            ShowData(){
                return this.$store.getters.ShowSpost
            }
        },
        methods:{

            Back(){

                this.Router.replace('/')
            }
        }
    }
</script>

<style scoped>

</style>