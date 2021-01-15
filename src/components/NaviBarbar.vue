<template>
    <nav class="navbar  navbar-dark bg-primary btn-block myNavBar" >
        <a href="#" class="navbar-brand mb-0 h1">Kanban</a>
        <ul class="navbar-nav" id="user" v-if="isLogin">
            <li class="nav-item dropdown">
                <a class="nav-link dropdown-toggle" data-toggle="dropdown" href="#" role="button" aria-haspopup="true" aria-expanded="false">User</a>
                <div class="dropdown-menu">
                <a class="dropdown-item" href="#">Profil</a>
                <div class="dropdown-divider"></div>
                <a class="dropdown-item" v-on:click.prevent="$emit('logOut')" href="#">Logout</a>
                </div>
            </li>
        </ul>
    </nav>
</template>

<script>
export default {
    name: "NaviBarbar",
    props: ['isLogin']
}
</script>

<style>

</style>