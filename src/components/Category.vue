<template>
    <div class="text-center">
        {{ grup.tag }}<br>
        <task
         class="task"
         v-for="tugas in tetugas"
         :key="tugas.id"
         :tugas="tugas"
         :pengguna="pengguna"
         :categoryId="grup.id"></task>
        <button
         class="task"
         @click.prevent="$emit('gantiHalaman', 'formTask')">
            Add new Task
        </button>
    </div>
</template>

<script>
import Task from './Task'

export default {
    components: { Task },
    name: "Category",
    data() {
        return {
            items: []
        }
    },
    props: ['grup', 'tetugas', 'pengguna']
}
</script>

<style>
.task {
    width: 100%;
    text-align: center;
}
</style>