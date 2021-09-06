<template>
    <div class="container-fluid">
        <div class="row">
            <h1 class="text-center">Favorites</h1>
        </div>
        <div class="row d-flex flex-column align-items-center" v-for="item in ShowVuexData" :key="item.id" >
            <div class="col-md-4" >
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
                    <button class="btn btn-primary"  >Compare</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Fav",
        computed:{

            ShowVuexData(){
                return this.$store.getters.ShowFav
            }

        }
    }
</script>

<style scoped>

</style>