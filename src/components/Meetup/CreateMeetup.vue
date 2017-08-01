<template>
    <v-container>
        <v-layout row>
            <v-flex xs12 sm6 offset-sm3>
                <h4>Créer un nouveau Meetup</h4>
            </v-flex>
        </v-layout>
        <v-layout row>
            <v-flex xs12>
                <form @submit.prevent="onCreateMeetup">
                    <v-layout row>
                        <v-flex xs12 sm6 offset-sm3>
                            <v-text-field
                                name="titre"
                                label="Titre"
                                id="titre"
                                v-model="titre"
                                required
                                autofocus>
                            </v-text-field>
                        </v-flex>
                    </v-layout>
                    <v-layout row>
                        <v-flex xs12 sm6 offset-sm3>
                            <v-text-field
                                    name="lieu"
                                    label="Lieu"
                                    id="lieu"
                                    v-model="lieu"
                                    required>
                            </v-text-field>
                        </v-flex>
                    </v-layout>
                    <v-layout row>
                        <v-flex xs12 sm6 offset-sm3>
                            <v-text-field
                                    name="imageUrl"
                                    label="Image URL"
                                    id="image-url"
                                    v-model="imageUrl"
                                    required>
                            </v-text-field>
                        </v-flex>
                    </v-layout>
                    <v-layout row>
                        <v-flex xs12 sm6 offset-sm3>
                            <img :src="imageUrl" height="135">
                        </v-flex>
                    </v-layout>
                    <v-layout row>
                        <v-flex xs12 sm6 offset-sm3>
                            <v-text-field
                                    name="description"
                                    label="Description"
                                    id="description"
                                    v-model="description"
                                    multi-line
                                    required>
                            </v-text-field>
                        </v-flex>
                    </v-layout>
                    <v-layout row>
                        <v-flex xs12 sm6 offset-sm3>
                            <v-btn
                                class="primary"
                                :disabled="!formIsValid"
                                type="submit"
                            >Créer un Meetup</v-btn>
                        </v-flex>
                    </v-layout>
                </form>
            </v-flex>
        </v-layout>
    </v-container>
</template>

<script>
    export default {
      name: 'create-meetup',
      data () {
        return {
          titre: '',
          lieu: '',
          imageUrl: '',
          description: ''
        }
      },
      computed: {
        formIsValid () {
          return this.titre !== '' && this.lieu !== '' && this.imageUrl !== '' && this.description !== ''
        }
      },
      methods: {
        onCreateMeetup () {
          if (!this.formIsValid) {
            return
          }
          const meetupData = {
            titre: this.titre,
            lieu: this.lieu,
            imageUrl: this.imageUrl,
            description: this.description,
            date: new Date()
          }
          this.$store.dispatch('createMeetup', meetupData) // appel action et les datas
          this.$router.push('/meetups')
        }
      }
    }
</script>

<style scoped>
</style>
