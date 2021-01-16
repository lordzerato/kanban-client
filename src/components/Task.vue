<template>
    <div class="card"
     v-if="tugas.CategoryId==categoryId"
     draggable="true">
        <!-- <img class="card-img-top" src="holder.js/100x180/" alt=""> -->
        <div class="card-body">
            <h4 class="card-title" id="title">{{ tugas.title }}</h4>
        <span>{{ author }}</span>
        <button
            type="button" onclick="">-</button>
        <button type="button" onclick="">x</button>
            <user></user>
        </div>
    </div>
</template>

<script>
import User from './User';

export default {
    components: { User },
    name: "Task",
    props: ['tugas', 'categoryId', 'pengguna'],
    data() {
        return {
            author: ''
        }
    },
    methods: {
        getUser(idCtt) {
            this.pengguna.forEach( el => {
                if (+idCtt === +el.id){
                    return this.author = el.name
                }
            });
        }
    },
    mounted() {
        this.getUser(this.tugas.UserId)
    },
}
</script>

<style>
#title {
    text-align: center;
    word-wrap: break-word;
}
</style>