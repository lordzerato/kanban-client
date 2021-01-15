<template>
    <div id="formTask">
        <div class="mt-4">
            <p class="h2 text-center text-primary">Create New Task</p>
        </div>
        <form class="mt-4" id="formTag">
            <div class="taskResult" v-html="taskFail">
            </div>
            <div class="form-group">
                <input type="text" class="form-control" v-model="newData.title" placeholder="Name Task">
            </div>
            <div class="form-group">
                <select v-model="newData.CategoryId">
                    <option value="">--Please Select--</option>
                    <option
                    v-for="grup in grups"
                    :key="grup.id" :value="grup.id" v-text="grup.tag"></option>
                </select>
            </div>
            <button type="submit" class="btn btn-primary btn-block" v-on:click.prevent="$emit('addTask', newData)">Add</button>
            <button type="submit" class="btn btn-secondary btn-block" v-on:click.prevent="$emit('gantiHalaman', 'home')">Cancel</button>
        </form>
    </div>
</template>

<script>
export default {
    name: "AddTask",
    data() {
        return {
            newData: {
                title: '',
                CategoryId: ''
            }
        }
    },
    props: ['grups', 'taskFail']
}
</script>

<style>
#formTask {
    margin: auto;
}
</style>