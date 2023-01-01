<template>
  <div>
    <div v-if="$route.name !== 'home'" class="profile-logo">
      <div class="columns text-logo-background">
        <div class="column is-one-third">
          <a @click="$router.push({name: 'home'})">
            <img src="@/assets/img/no-exit.jpeg" class="logo">
          </a>
        </div>
        <div class="column is-two-third text-logo" v-if="store.state.current_profile !== undefined" style="display: table;">
          <span style=" display: table-cell; vertical-align: middle;">
            {{ store.state.current_profile.name }}
          </span>
        </div>
      </div>
    </div>
    <div v-else class="logo-parent">
      <img src="@/assets/img/no-exit.jpeg" class="logo" @click="$router.push({name: 'home'})">
    </div>
    <br/>
    <section class="section" id="content">
      <router-view></router-view>
    </section>
    <div class="column is-8 is-offset-2">
      <br>
      <nav class="level">
        <div class="level-left">
          <div class="level-item">
            <a @click="$router.push({name:'login'})" v-if="!store.state.login_data">Login</a>
            <a @click="$router.push({name:'change'})" v-else>Profil bearbeiten</a>
          </div>
        </div>
        <div class="level-right">
          <small class="level-item">
            &copy; No-eXiT Gaming Clan. All Rights Reserved.
          </small>
        </div>
      </nav>
    </div>
    <!--    <CookieLaw></CookieLaw>-->
  </div>
</template>
<script setup lang="ts">
import {useStore} from 'vuex'

const store = useStore();
</script>


<style lang="scss">
.text-logo-background {
  background: #121212;
}

.text-logo {
  font-size: 6vw;
  background: #121212;
  color: white;
  text-align: center;
}

.page-home {
  img.logo {
    height: 53vw;
    width: auto;
    max-width: none;
  }

  .logo-parent {
    text-align: center;
    background: #121212;
  }
}
</style>
