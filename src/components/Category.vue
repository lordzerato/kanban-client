<template>
    <div class="text-center noselect">
        {{ grup.tag }}<br>
        <task
         class="task"
         v-for="tugas in tetugas"
         :key="tugas.id"
         :tugas="tugas"
         :pengguna="pengguna"
         :categoryId="grup.id"></task>
        <button
         class="btn-success"
         @click.prevent="$emit('addNew', grup.id)">
            Add new Task
        </button>
    </div>
</template>

<script>
import Task from './Task'

export default {
    components: { Task },
    name: "Category",
    props: ['grup', 'tetugas', 'pengguna'],
    methods: {
        addNew(id) {
            this.cttSelected = id
        }
    },
}
</script>

<style>
.task {
    width: 100%;
    text-align: right;
}
.noselect {
  -webkit-touch-callout: none;
    -webkit-user-select: none;
     -khtml-user-select: none;
       -moz-user-select: none;
        -ms-user-select: none;
            user-select: none;
}
</style>