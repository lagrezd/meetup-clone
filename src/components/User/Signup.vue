<template>
    <v-container>
        <v-layout row v-if="error">
            <v-flex x12 sm6 offset-sm3>
                <app-alert @dismissed="onDismissed" :text="error.message"></app-alert>
            </v-flex>
        </v-layout>
        <v-layout>
            <v-flex x12 sm6 offset-sm3>
                <v-card-text>
                    <v-container>
                        <form @submit.prevent="onSignup">
                            <v-layout row>
                                <v-flex xs12>
                                    <v-text-field
                                        name="email"
                                        label="Mail"
                                        id="email"
                                        v-model="email"
                                        type="email"
                                        required></v-text-field>
                                </v-flex>
                            </v-layout>
                            <v-layout row>
                                <v-flex xs12>
                                    <v-text-field
                                            name="password"
                                            label="Mot de passe"
                                            id="password"
                                            v-model="password"
                                            type="password"
                                            required></v-text-field>
                                </v-flex>
                            </v-layout>
                            <v-layout row>
                                <v-flex xs12>
                                    <v-text-field
                                            name="confirmPassword"
                                            label="Confirmer le mot de passe"
                                            id="confirmPassword"
                                            v-model="confirmPassword"
                                            type="password"
                                            :rules="[comparePasswords]"></v-text-field>
                                </v-flex>
                            </v-layout>
                            <v-layout row>
                                <v-flex xs12>
                                    <v-btn type="submit" :disabled="loading" :loading="loading">
                                        Créer un compte
                                        <span slot="loader" class="custom-loader">
                                            <v-icon light>cached</v-icon>
                                        </span>
                                    </v-btn>
                                </v-flex>
                            </v-layout>
                        </form>
                    </v-container>
                </v-card-text>
            </v-flex>
        </v-layout>
    </v-container>
</template>

<script>
    export default {
      name: 'signup',
      data () {
        return {
          email: '',
          password: '',
          confirmPassword: ''
        }
      },
      computed: {
        comparePasswords () {
          return this.password !== this.confirmPassword ? 'Mauvais mot de passe' : ''
        },
        user () {
          return this.$store.getters.user
        },
        loading () {
          return this.$store.getters.loading
        },
        error () {
          return this.$store.getters.error
        }
      },
      watch: {
        user (value) {
          if (value !== null && value !== undefined) {
            this.$router.push('/')
          }
        }
      },
      methods: {
        onSignup () {
          // Vuex
          this.$store.dispatch('signUserUp', {
            email: this.email,
            password: this.password
          })
        },
        onDismissed () {
          this.$store.dispatch('clearError')
        }
      }
    }
</script>

<style scoped>
</style>
