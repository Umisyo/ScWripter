import firebase from '~/plugins/firebase'

export const state = {
    user: null
}

export const mutations = {
    setUser(state, payload) {
        state.user = payload
    }
}

export const actions = {
    googleLogin({ commit }) {
        const provider = new firebase.auth.GoogleAuthProvider()

        firebase
            .auth()
            .signInWithPopup(provider)
            .then(result => {
                console.log(result)
                commit('setUser', {
                    id: result.additionalUserInfo.profile.id,
                    name: result.additionalUserInfo.profile.name,
                    icon: result.additionalUserInfo.profile.picture
                })
            })
    }
}