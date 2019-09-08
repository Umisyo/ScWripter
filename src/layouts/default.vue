<template>
  <div>
    <header class="header">
      <p class="header__logo">ScWripter</p>
      <div class="header__user_info">
        <v-btn v-if="!user" @click="googleLogin">login</v-btn>
        <div v-else>
          <nuxt-link to="/mypage">{{ user.name }}</nuxt-link>
        </div>
      </div>
    </header>
    <nuxt />
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";

export default {
  computed: {
    user() {
      return this.$store.state.auth.user;
    }
  },
  methods: {
    ...mapActions("auth", ["googleLogin"])
  }
};
</script>

<style lang="scss" src="./style.scss" />