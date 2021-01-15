<template>
    <div>
        <category
         class="category"
         :tetugas="tetugas"
         v-for="grup in grups"
         :key="grup.id" :grup="grup"
         @gantiHalaman="$emit('gantiHalaman', 'formTask')"></category>
        <button
         class="category"
         id="addCttBtn"
         @click.prevent="$emit('gantiHalaman', 'formTag')">
            Add new cattegory
        </button>
    </div>
</template>

<script>
import Category from './Category'

export default {
    components: { Category },
    name: 
        "Home",
    props: ['grups', 'tetugas']
}
</script>

<style>
/* #addCttBtn {
    errorJustify
} */
</style>