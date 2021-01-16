<template>
    <div class="container" id="container">
        <!-- Nav tabs -->
        <navi-barbar
         :isLogin="isLogin"
         @logOut="logOut"></navi-barbar>
        <div v-if="!isLogin" class="row">
            <div class="col-sm-4"></div>
            <div class="col-sm-4">
                <login-form
                 v-if="halaman==='login'"
                 :loginFail="loginFail"
                 @login="login"
                 @gantiHalaman="gantiHalaman"></login-form>
                <register-form
                 v-else-if="halaman==='register'"
                 :regFail="regFail"
                 :regSuccess="regSuccess"
                 @loginGoogle="loginGoogle"
                 @register="register"
                 @gantiHalaman="gantiHalaman"></register-form>
            </div>
            <div class="col-sm-3"></div>
        </div>
        <div v-else-if="isLogin" class="row ">
            <home
             class="home"
             v-if="halaman==='home'"
             :grups="categories"
             :tetugas="tasks"
             :pengguna="orang"
             @getSelected="getSelected"
             @gantiHalaman="gantiHalaman"></home>
            <!-- <button class="category" v-on:click.prevent="gantiHalaman('formTag')">New Tag</button> -->
            <add-category
             v-else-if="halaman==='formTag'"
             :tagFail="tagFail"
             @addCategory="addCategory"
             @gantiHalaman="gantiHalaman"></add-category>
            <add-task
             v-else-if="halaman==='formTask'"
             :grups="categories"
             :taskFail="taskFail"
             @addTask="addTask"
             @gantiHalaman="gantiHalaman"></add-task>
        </div>
    </div>
</template>

<script>
import axios from 'axios'
import LoginForm from './components/LoginForm'
import NaviBarbar from './components/NaviBarbar'
import RegisterForm from './components/RegisterForm'
import AddCategory from './components/AddCategory'
import Home from './components/Home'
import AddTask from './components/AddTask'

export default {
    name: "App",
    data() {
        return {
            halaman: 'login',
            isLogin: false,
            baseurl: 'https://kanban-app-fdr.herokuapp.com',
            categories: [],
            loginFail: '',
            regSuccess: '',
            regFail: '',
            tagFail: '',
            taskFail: '',
            tasks: [],
            orang: []
        }
    },
    components: {
        LoginForm,
        RegisterForm,
        NaviBarbar,
        AddCategory,
        Home,
        AddTask,
    },
    methods: {
      gantiHalaman(page) {
        this.halaman = page
        this.resetAuth()
      },
      login(user) {
        this.loginFail = ''
        axios({
          method: 'POST',
          url: this.baseurl + '/login',
          data: {
            email: user.email,
            password: user.password
          }
        })
        .then( data => {
          console.log(data.data);
          const { access_token } = data.data
          localStorage.setItem('access_token', access_token)
          this.isLogin = true
          this.halaman = 'home'
          this.resetAuth()
          this.getCategories()
        } )
        .catch( err => {
          const { message } = err.response.data
          this.loginFail = message
        } )
      },
      resetAuth(){
        // this.user.email = ''
        // this.user.password = ''
        // this.nameReg = ''
        // this.emailReg = ''
        // this.passwordReg = ''
        this.loginFail = ''
        this.regSuccess = ''
        this.regFail = ''
      },
      logOut() {
        this.isLogin = false
        this.halaman = 'login'
        var auth2 = gapi.auth2.getAuthInstance();
        auth2.signOut().then(function () {
          console.log('User signed out.');
        });
        this.resetAuth()
        localStorage.clear()
      },
      getCategories() {
        axios({
          method: 'GET',
          url: this.baseurl + '/categories',
          headers: {
            access_token: localStorage.getItem('access_token')
          }
        })
        .then( ({ data }) => {
          this.categories = data
          this.getTask()
        } )
        .catch( err => {
          console.log(err);
        } )
      },
      register(user) { //masih error sukses msg
        this.regFail = ''
        axios({
          method: 'POST',
          url: this.baseurl + '/register',
          data: {
            name: user.nameReg,
            email: user.emailReg,
            password: user.passwordReg
          }
        })
        .then( data => {
          console.log('suckezz', data);
          this.resetAuth()
          this.regSuccess = 'Registered successfully'
        } )
        .catch( err => {
          err.response.data.map( el => {
            this.regFail += `<p class="text-center text-danger">${el.message}</p>`
          } )
        } )
      },
      addCategory(nameTag) {
        axios({
          method: 'POST',
          url: this.baseurl + '/categories',
          headers: {
            access_token: localStorage.getItem('access_token')
          },
          data: {
            tag: nameTag
          }
        })
        .then( data => {
          this.getCategories()
          this.gantiHalaman('home')
        } )
        .catch( err => {
          const { message } = err.response.data[0]
          this.tagFail = message
        } )
      },
      loginGoogle() { //error
        localStorage.setItem('access_token', 'bolehmasuk')
        this.isLogin = true
        this.halaman = 'home'
        this.resetAuth()
        this.getCategories()
      },
      addTask(newData) {
        this.taskFail = ''
        axios({
          method: 'POST',
          url: this.baseurl + '/tasks',
          headers: {
            access_token: localStorage.getItem('access_token')
          },
          data: {
            title: newData.title,
            CategoryId: newData.CategoryId
          }
        })
        .then( data => {
          this.getTask()
          this.gantiHalaman('home')
        } )
        .catch( err => {
          err.response.data.map( el => {
            this.taskFail += `<p class="text-center text-danger">${el.message}</p>`
          } )
        } )
      },
      getTask() {
        axios({
          method: 'GET',
          url: this.baseurl + '/tasks',
          headers: {
            access_token: localStorage.getItem('access_token')
          }
        })
        .then( ({ data }) => {
          this.tasks = data
        } )
        .catch( err => {
          console.log(err);
        } )
      },
      getUser(){
        axios({
          method: 'GET',
          url: this.baseurl + '/register'
        })
        .then( ({data}) => {
          this.orang = data
        } )
        .catch( err => {
          console.log(err);
        })
      },
      getSelected(id) {
        this.categories.map( el => {
          if (el.id === id) {
            return el.attr = 'true'
          } else {
            return el.attr = 'false'
          }
        } )
      }
    },
    created() {
      if (localStorage.getItem('access_token')) {
        this.isLogin = true
        this.halaman = 'home'
        this.getCategories()
        this.getUser()
      }
    }
}
</script>

<style>
#container {
    margin: 0px;
    max-width: 100%;
    padding: 0px;
}

.home {
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    padding: 30px;
    flex-wrap: wrap;
}
</style>
