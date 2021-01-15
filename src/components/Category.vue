<template>
    <div class="text-center">
        {{ grup.tag }}<br>
        <task
         class="task"
         v-for="tugas in tetugas"
         :key="item.id" v-if="condition"
         :item="item"></task>
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
    props: ['grup', 'tetugas']
}
</script>

<style>
</style>