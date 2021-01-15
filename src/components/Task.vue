<template>
    <div class="card">
        <!-- <img class="card-img-top" src="holder.js/100x180/" alt=""> -->
        <div class="card-body">
            <h4 class="card-title">Title</h4>
            <p class="card-text">Text</p>
        <button type="button" onclick="" class="btnEdit">Edit</button>
        <button type="button" onclick="" class="btnDelete">Delete</button>
        </div>
    </div>
</template>

<script>
export default {
    name: "Task",
    props: ['tetugas']
}
</script>

<style>
    .btnEdit {
        width: 50px;
        font-size: 14px;
    }
</style>