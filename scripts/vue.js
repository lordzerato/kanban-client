var app = new Vue({
    el: '.app',
    data: {
      halaman: 'login',
      isLogin: false,
      nameReg: '',
      emailReg: '',
      passwordReg: '',
      user: {
        email: '',
        password: '',
      },
      baseurl: 'http://localhost:3000',
      categories: [],
      displayCategory: '',
      loginFail: '',
      regSuccess: '',
      regFail: '',
      tagFail: '',
      tag: ''
    },
    methods: {
      gantiHalaman(page) {
        this.halaman = page
        this.resetAuth()
      },
      login() {
        this.loginFail = ''
        axios({
          method: 'POST',
          url: this.baseurl + '/login',
          data: {
            email: this.user.email,
            password: this.user.password
          }
        })
        .then( data => {
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
        this.user.email = ''
        this.user.password = ''
        this.nameReg = ''
        this.emailReg = ''
        this.passwordReg = ''
        this.loginFail = ''
        this.regSuccess = ''
        this.regFail = ''
      },
      logOut() {
        this.isLogin = false
        this.halaman = 'login'
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
        .then( data => {
          this.categories = data.data.map( el => {
            return { id: el.id, tag: el.tag }
          } )
          console.log(this.categories);
          this.categories.forEach( el => {
            this.displayCategory += `<div class="category">${el.tag}</div>`
          } )
        } )
        .catch( err => {
          console.log(err);
        } )
      },
      register() { //masih error sukses msg
        this.regFail = ''
        axios({
          method: 'POST',
          url: this.baseurl + '/register',
          data: {
            name: this.nameReg,
            email: this.emailReg,
            password: this.passwordReg
          }
        })
        .then( data => {
          resetAuth()
          console.log('suckezz');
          this.regSuccess = 'Registered successfully'
        } )
        .catch( err => {
          err.response.data.map( el => {
            this.regFail += `<p class="text-center text-danger">${el.message}</p>`
          } )
        } )
      },
      addCategory() {
        axios({
          method: 'POST',
          url: this.baseurl + '/categories',
          headers: {
            access_token: localStorage.getItem('access_token')
          },
          data: {
            tag: this.tag
          }
        })
        .then( data => {
          console.log(data);
          this.displayCategory = ''
          this.getCategories()
          this.gantiHalaman('home')
        } )
        .catch( err => {
          console.log(err);
        } )
      }
    },
    created() {
      if (localStorage.getItem('access_token')) {
        this.isLogin = true
        this.halaman = 'home'
        this.getCategories()
      }
    }
  })