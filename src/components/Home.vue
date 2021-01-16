<template>
    <div>
        <category
         class="category"
         :tetugas="tetugas"
         :pengguna="pengguna"
         v-for="grup in grups"
         :key="grup.id" :grup="grup"
         @addNew="addNew"
         @gantiHalaman="$emit('gantiHalaman', 'formTask')">
        </category>
        <div class="category">
            <button
             class="btn-primary"
             @click.prevent="$emit('gantiHalaman', 'formTag')">
                Add new cattegory
            </button>
        </div>
    </div>
</template>

<script>
import Category from './Category'

export default {
    components: { Category },
    name: 
        "Home",
    props: ['grups', 'tetugas', 'pengguna'],
    methods: {
        addNew(id) {
            this.$emit('getSelected', id)
            this.$emit('gantiHalaman', 'formTask')
        }
    },
}
</script>

<style>
.category {
    overflow-y: scroll;
    width: 300px;
    text-align: center;
    margin-left: 20px;
    margin-bottom: 30px;
    border-style: dotted;
    border-width: 2px;
    min-height: 100px;
    max-height: 400px;
    display: flex;
    flex-direction: column;
    height: fit-content;
}
</style>