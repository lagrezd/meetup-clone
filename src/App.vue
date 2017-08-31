<template>
  <v-app>
      <v-navigation-drawer temporary v-model="sideNav">
        <v-list>
            <v-list-tile
                v-for="item in menuItems"
                :key="item.title"
                :to="item.link">
                <v-list-tile-action>
                    <v-icon>{{ item.icon }}</v-icon>
                </v-list-tile-action>
                <v-list-tile-content>{{ item.title }}</v-list-tile-content>
            </v-list-tile>
            <v-list-tile
                v-if="userIsAuthenticated"
                @click="onLogout">
                <v-list-tile-action>
                    <v-icon>exit_to_app</v-icon>
                </v-list-tile-action>
                <v-list-tile-content>Se déconnecter</v-list-tile-content>
            </v-list-tile>
        </v-list>
      </v-navigation-drawer>
      <v-toolbar dark class="primary">
          <v-toolbar-side-icon
              @click.stop="sideNav = !sideNav"
              class="hidden-sm-and-up">
          </v-toolbar-side-icon>
          <v-toolbar-title>
              <router-link to="/" tag="span" style="cursor: pointer">Meetup Clone</router-link>
          </v-toolbar-title>
          <v-spacer></v-spacer>
          <v-toolbar-items class="hidden-xs-only">
              <v-btn
                  flat
                  v-for="item in menuItems"
                  :key="item.title"
                  :to="item.link">
                  <v-icon left dark>{{ item.icon }}</v-icon>
                  {{ item.title }}
              </v-btn>
              <v-btn
                  flat
                  v-if="userIsAuthenticated"
                  @click="onLogout">
                  <v-icon left dark>exit_to_app</v-icon>
                  Se déconnecter
              </v-btn>
          </v-toolbar-items>
      </v-toolbar>
    <main>
        <router-view></router-view>
    </main>
  </v-app>
</template>

<script>
  export default {
    data () {
      return {
        sideNav: false
      }
    },
    computed: {
      menuItems () {
        let menuItems = [
          {icon: 'face', title: 'Créer un compte', link: '/signup'},
          {icon: 'lock_open', title: 'Se connecter', link: '/signin'}
        ]
        if (this.userIsAuthenticated) {
          menuItems = [
            {icon: 'supervisor_account', title: 'Voir les Meetups', link: '/meetups'},
            {icon: 'room', title: 'Créer un Meetup', link: '/meetup/new'},
            {icon: 'person', title: 'Profil', link: '/profile'}
          ]
        }
        return menuItems
      },
      userIsAuthenticated () {
        return this.$store.getters.user !== null && this.$store.getters.user !== undefined
      }
    },
    methods: {
      onLogout () {
        this.$store.dispatch('logout')
      }
    }
  }
</script>

<style lang="stylus">
  @import './stylus/main'
</style>
