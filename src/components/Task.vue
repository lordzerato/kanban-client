<template>
    <div class="card"
     v-if="tugas.CategoryId==categoryId">
        <!-- <img class="card-img-top" src="holder.js/100x180/" alt=""> -->
        <div class="card-body">
            <h4 class="card-title">{{ tugas.title }}</h4>
        <p class="card-text">{{ getUser(tugas.CategoryId) }}</p>
        <button
            type="button" onclick="" class="btnEdit">Edit</button>
        <button type="button" onclick="" class="btnDelete">Delete</button>
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
                console.log(idCtt, el.CategoryId);
                if (idCtt === el.CategoryId) return el.name
            });
        }
    },
}
</script>

<style>
    .btnEdit {
        width: 50px;
        font-size: 14px;
    }
</style>