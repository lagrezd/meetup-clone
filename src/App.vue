<template>
  <v-app>
      <v-toolbar>
          <v-toolbar-side-icon></v-toolbar-side-icon>
          <v-toolbar-title>Meetup Clone</v-toolbar-title>
          <v-spacer></v-spacer>
          <!-- v-toolbar-side-icon class="hidden-md-and-up"></v-toolbar-side-icon -->
          <v-toolbar-items>
              <v-btn flat>
                  <v-icon left>supervisor_account</v-icon>
                  Voir les Meetups
              </v-btn>
          </v-toolbar-items>
      </v-toolbar>
    <main>
        Tester mon meetup
    </main>
  </v-app>
</template>

<script>
  export default {
    data () {
      return {
      }
    }
  }
</script>

<style lang="stylus">
  @import './stylus/main'
</style>
