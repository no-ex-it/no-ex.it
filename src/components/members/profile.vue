<template>
  <div v-if="profileData.id != 'undefined'" class="container">
    <br/>
    <div class="box" v-if="profileData.text" v-html="profileData.text"></div>
    <div class="columns  is-multiline">
      <div class="column is-one-fifth  is-narrow">
        <div class="card">
          <div class="card-image">
            <figure class="image is-4by4">
              <img :src="profileData.avatar" alt="Placeholder image">
            </figure>
          </div>
          <div class="card-content">
            <div class="media">
              <div class="media-content">
                <p class="title is-4"> {{ profileData.name }} </p>
                <p class="subtitle is-6">@Discord</p>
              </div>
            </div>
            <div class="content">
              <a class="button" :href="`https://discordapp.com/users/${profileData.discord_id}`" target="_blank">
                Profile öffnen
              </a>
            </div>
          </div>
        </div>
      </div>
      <div class="column is-one-fifth " v-for="(lol,i) in profileData.lol_ids">
        <div class="card">
          <div class="card-image" v-if="lol.img">
            <figure class="image is-4by4">
              <img :src='lol.img' alt="Placeholder image">
            </figure>
          </div>
          <div class="card-content">
            <div class="media">
              <div class="media-content">
                <p class="title is-4">{{ lol.name }}</p>
                <p class="subtitle is-6">@League of Legends</p>
              </div>
            </div>
            <div class="content">
              <a class="button" :href='lol.url' target="_blank">Profile öffnen</a>
            </div>
          </div>
        </div>
      </div>
      <div class="column is-one-fifth" v-for="(steam,i) in profileData.steam_ids">
        <div class="card">
          <div class="card-image" v-if="steam.avatar">
            <figure class="image is-4by4">
              <img :src='steam.avatar' alt="Placeholder image">
            </figure>
          </div>
          <div class="card-content">
            <div class="media">
              <div class="media-content">
                <p class="title is-4">{{ steam.name }}</p>
                <p class="subtitle is-6">@Steam</p>
              </div>
            </div>
            <div class="content">
              <a class="button" :href='`https://steamcommunity.com/profiles/${steam.id}`' target="_blank">
                Profile öffnen
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import {onMounted, ref, Ref} from 'vue'
import {useRoute} from "vue-router";
import {useStore} from 'vuex'
import pb from "../../pb";
import {defaultProfileData, ProfileDataType} from "../../types";


const profileData: Ref<ProfileDataType> = ref(defaultProfileData),
    route = useRoute(),
    store = useStore();
onMounted(async () => {
  const id: string = route.params.id as string;
  const data: ProfileDataType = await pb.collection('team').getOne(id, {});
  profileData.value = data;

  store.commit("current_profile", data)
});
</script>

<style scoped lang="scss">
.hero-body .container {
  .image {
    float: left;
  }

  h1 {
    width: 18vw;
  }

  h1, h2, {
    float: right;
  }
}
</style>