<template>
    <div id="formCategory">
        <div class="mt-4">
            <p class="h2 text-center text-primary">Create New Category</p>
        </div>
        <form class="mt-4" id="formTag">
            <div id="tagResult">
                <p class="text-center text-danger" v-text="tagFail"></p>
            </div>
            <div class="form-group">
                <input type="text" class="form-control" v-model="tag" placeholder="Name Category">
            </div>
            <button type="submit" class="btn btn-primary btn-block" v-on:click.prevent="$emit('addCategory', tag)">Add</button>
            <button type="submit" class="btn btn-secondary btn-block" v-on:click.prevent="$emit('gantiHalaman', 'home')">Cancel</button>
        </form>
    </div>
</template>

<script>
export default {
    name: "AddCategory",
    data() {
        return {
            tag: ''
        }
    },
    props: ['tagFail']
}
</script>

<style>
#formCategory {
    margin: auto;
}
</style>