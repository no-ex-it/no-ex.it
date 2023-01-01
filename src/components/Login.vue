<template>
  <div>
     <section class="container">
      <div class="columns is-multiline">
        <div class="column is-8 is-offset-2 register">
          <div class="columns">
            <div class="column left">
              <h1 class="title is-1">Profile anpassen</h1>
              <h2 class="subtitle colored is-4">Erstelle deine eigene Profilseite</h2>
              <p>Logge dich einfach mit deinem Discord-Account ein und setze nachher weitere Links zu deinen Gaming-Diensten</p>
            </div>
            <div class="column right has-text-centered box">
              <h1 class="title is-4">Login</h1>
              <p class="description">Wir benutzen Discord für eine einfache und schnelle Login Methode</p>
              <div>
                <br />
                <br />
                <button v-for="provider in providers.value"
                         @click="goto(provider)"
                        class="button is-block is-primary is-fullwidth is-medium">
                  <i :class="`fab fa-${provider.name}`"></i>
                  <span class="is-login">{{ provider.name }}</span>
                </button>
                <br />
                <small><em>Wir interagieren nicht mit Deinem Discord Account und nutzen nur Deinen Namen</em></small>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
<script setup lang="ts">
import {ref, reactive, onMounted} from 'vue'


import pb, {redirectUrl} from "../pb";
import {Provider} from "../types";
import {AuthProviderInfo} from "pocketbase";
const providers:{value: AuthProviderInfo[]} = reactive({value:[]})


onMounted(async () => {
  const authMethods = await pb.collection('users').listAuthMethods();
  providers.value = authMethods.authProviders
})

const goto = (provider: AuthProviderInfo) => {
  const url = provider.authUrl + redirectUrl
  localStorage.setItem('provider', JSON.stringify(provider));
  window.location.href = url
}
</script>


<style scoped lang="scss">
.is-login  {
    text-transform:capitalize;
}
</style>
