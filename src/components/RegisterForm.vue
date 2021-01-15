<template>
    <div class="register">
        <div class="mt-4">
            <p class="h2 text-center text-success">Register Form</p>
        </div>
        <form class="mt-4 formRegister">
            <div class="registerResult" v-html="regFail">
                <p class="text-center text-success" v-text="regSuccess"></p>
            </div>
            <div class="form-group">
                <input type="text" class="form-control" v-model="user.nameReg" placeholder="Name">
            </div>
            <div class="form-group">
                <input type="email" class="form-control" v-model="user.emailReg" placeholder="Email">
            </div>
            <div class="form-group">
                <input type="password" class="form-control" v-model="user.passwordReg" placeholder="Password">
            </div>
            <button type="submit" class="btn btn-success btn-block" v-on:click.prevent="$emit('register', user)">Register</button>
            <button type="button" class="mt-2 btn btn-link" v-on:click.prevent="$emit('gantiHalaman', 'login')">
                Already have account?
            </button>
        </form>
    </div>
</template>

<script>
export default {
    name: "RegisterForm",
    data() {
        return {
            user: {
                nameReg: '',
                emailReg: '',
                passwordReg: ''
            }
        }
    },
    props: ['regFail', 'regSuccess']
}
</script>

<style>

</style>