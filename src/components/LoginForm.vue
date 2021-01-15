<template>
    <div class="login">
        <div class="mt-4">
            <p class="h2 text-center text-primary">Login Form</p>
        </div>
        <form class="mt-4 formLogin" @submit.prevent="">
            <div class="loginResult">
                <p class="text-center text-danger" v-text="loginFail"></p>
            </div>
            <div class="form-group">
                <input type="email" class="form-control" v-model="user.email" placeholder="Email">
            </div>
            <div class="form-group">
                <input type="password" class="form-control" v-model="user.password" placeholder="Password">
            </div>
            <button type="submit" class="btn btn-primary btn-block" v-on:click.prevent="$emit('login', user)">Login</button><br>
            <!-- <div class="g-signin2" id="gbtn" data-onsuccess="onSignIn"></div> -->
            <button type="button" class="btn btn-link" id="regbtn" v-on:click.prevent="$emit('gantiHalaman', 'register')">
                Register
            </button>
            <g-signin-button
            id="gbtn"
            :params="googleSignInParams"
            @success="onSignInSuccess"
            @error="onSignInError">
                Sign in with Google
            </g-signin-button>
        </form>
    </div>
</template>

<script>

export default {
    name: "LoginForm",
    data () {
        return {
            googleSignInParams: {
                client_id: '799995055369-ileq6qsbc62miv574g4ufvscmprq1gua.apps.googleusercontent.com'
            },
            user: {
                email: "",
                password: ""
            }
        }
    },
    props: ['loginFail'],
    methods: {
        onSignInSuccess (googleUser) {
        // `googleUser` is the GoogleUser object that represents the just-signed-in user.
        // See https://developers.google.com/identity/sign-in/web/reference#users
            const profile = googleUser.getBasicProfile()
            // $emit('loginGoogle')
        },
        onSignInError (error) {
        // `error` contains any error occurred.
        console.log('OH NOES', error)
        }
    }
}
</script>

<style>
.g-signin-button {
    display: inline-block;
    padding: 4px 8px;
    border-radius: 3px;
    background-color: #3c82f7;
    color: #fff;
    box-shadow: 0 3px 0 #0f69ff;
}

#regbtn {
    float: right;
}
</style>