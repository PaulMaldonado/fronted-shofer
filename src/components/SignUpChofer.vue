<template>
  <div>
      <div class="container">
          <div class="row">
              <div class="col-md-8 col-sm-12 col-lg-8 col-xl-8 col-xxl-8 mx-auto">
                  <div class="card shadow-lg">
                    <h1 class="h4 text-center mb-4">Registrate como chofer</h1>

                      <div class="card-body">
                          <form action="" @submit.prevent="register">
                                <div class="form-group">
                                    <label>Nombre completo: </label>
                                    <input type="text" placeholder="Nombre completo" class="form-control" id="name" v-model="name" required>
                                </div>

                                <div class="form-group mt-4">
                                    <label>Nombre de usuario: </label>
                                    <input type="text" placeholder="Nombre de usuario" class="form-control" id="username" v-model="username" required>
                                </div>

                                 <div class="form-group mt-4">
                                    <label>Correo electrónico: </label>
                                    <input type="text" placeholder="Correo electrónico" class="form-control" id="email" v-model="email" required>
                                </div>

                                 <div class="form-group mt-4">
                                    <label>Contraseña: </label>
                                    <input type="text" placeholder="Contraseña" class="form-control" id="password" v-model="password" required>
                                </div>

                                <div class="d-grid gap-2">
                                    <input type="submit" value="Regístrate" class="btn btn-secondary mt-4">
                                </div>

                                <p v-if="error" class="error">
                                    No pudimos registrarte, intenta de nuevo
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
import auth from '@/users/auth';

export default {
    name: "SignUpChofer",

    data() {
        return {
            name: '',
            username: '',
            email: '',
            password: '',
            error: false
        }
    },

    methods: {
        async register() {
            try {
                await auth.register(this.name, this.username, this.email, this.password);
                this.$router.push('/Dashboard.vue');
            } catch (error) {
                this.error = true;
            }
        }
    }
}
</script>

<style scoped>
     .error {
        margin: 1rem 0 0;
        color: #ff4a96;
    }
</style>