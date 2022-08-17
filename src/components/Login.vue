<template>
  <div>
      <div class="container">
          <div class="row">
              <div class="col-md-6 col-sm-12 col-lg-6 col-xl-6 col-xxl-6 mx-auto">
                  <div class="card shadow-lg">
                      <div class="card-body">
                          <h1 class="h4 text-center mb-4">Iniciar sesión</h1>

                          <form action="" @submit.prevent="login">
                              <div class="form-group">
                                  <input type="text" placeholder="Nombre de usuario..." class="form-control" required id="username" v-model="username">
                              </div>

                              <div class="form-group mt-4">
                                  <input type="password" placeholder="Contraseña" class="form-control" required id="password" v-model="password">
                              </div>

                              <div class="d-grid gap-2">
                                  <input type="submit" value="Ingresar" class="btn btn-secondary mt-4">
                              </div>

                              <p v-if="error" class="error">
                                Tu usuario o Contraseña estan mal, intenta de nuevo
                              </p>
                          </form>
                      </div>
                  </div>
              </div>
          </div>
      </div>
  </div>
</template>

<script>
import auth from '@/users/auth.js';

export default {
    name: "Login",

    data() {
        return {
            username: '',
            password: '',
            error: false
        }
    },

    methods: {
        async login() {
            try {
                await auth.login(this.username, this.password);
                this.$router.push('/Dashboard.vue');
            } catch (error) {
                this.error = true;
            }
        }
    }
}
</script>

<style scoped>
    .mt-7 {
        margin-top: 10rem !important;
        margin-bottom: 10rem !important;
    }

    .error {
        margin: 1rem 0 0;
        color: #ff4a96;
    }
</style>