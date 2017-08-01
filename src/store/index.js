import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export const store = new Vuex.Store({
  state: {
    loadedMeetups: [
      {
        imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/4/47/New_york_times_square-terabass.jpg',
        id: 'kirheocnserhgcqp',
        titre: 'Meetup in New York',
        date: '2017-07-19'
      },
      {
        imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/8/8a/Paris_vue_d%27ensemble_tour_Eiffel.jpg',
        id: 'gkljorxggvdrtvtf',
        titre: 'Meetup in Paris',
        date: '2017-07-20'
      }
    ],
    user: {
      id: 'gfdsxrecretbrtt',
      registerMeetups: ['gfdsxrecretbrtt']
    }
  },
  mutations: {
    createMeetup (state, payload) {
      state.loadedMeetups.push(payload)
    }
  },
  actions: {
    createMeetup ({ commit }, payload) {
      const meetup = {
        titre: payload.titre,
        lieu: payload.lieu,
        imageUrl: payload.imageUrl,
        description: payload.description,
        date: payload.date,
        id: 'kfdojestjfsgcrtcre'
      }
      // Envoyer les donnée à Firebase et les enregister
      commit('createMeetup', meetup) // appel de la mutation pour créer un tableau
    }
  },
  getters: {
    loadedMeetups (state) {
      return state.loadedMeetups.sort((meetupA, meetupB) => {
        return meetupA.date > meetupB.date
      })
    },
    featuredMeetups (state, getters) {
      return getters.loadedMeetups.slice(0, 5)
    },
    loadedMeetup (state) {
      return (meetupId) => {
        return state.loadedMeetups.find((meetup) => {
          return meetup.id === meetupId
        })
      }
    }
  }
})
