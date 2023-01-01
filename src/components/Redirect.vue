<template>
  <div>
    <pre>{{ data }}</pre>
  </div>
</template>
<script setup lang="ts">
import {onMounted, ref} from 'vue'
import {useRoute, useRouter} from 'vue-router'
import {useStore} from 'vuex'
import pb, {redirectUrl} from "../pb";
import {ParamsType, Provider} from "../types";
import {RecordAuthResponse} from "pocketbase";


const data = ref({}),
    route = useRoute(),
    router = useRouter(),
    params: ParamsType = route.query as ParamsType,
    store = useStore(),
    provider:Provider = JSON.parse(localStorage.getItem('provider') as string);

onMounted(async () => {

});

if (provider.state !== params.state) {
  console.log("State parameters don't match. provider.state: " + provider.state + " route.state: " + params.state);
}



pb.collection('users').authWithOAuth2(
    provider.name,
    params.code,
    provider.codeVerifier,
    redirectUrl,
    {
      emailVisibility: false,
    }
).then(async (authData: RecordAuthResponse) => {
  data.value = JSON.stringify(authData, null, 2);
  store.commit('login', authData)

  try {
    await pb.collection('team').getFirstListItem(`discord_id="${authData.meta?.id}"`, {});
  } catch {
    const data = {
      "name": authData.meta?.name,
      "avatar": authData.meta?.avatarUrl,
      "discord_id": authData.meta?.id.toString(),
      "steam_ids": JSON.stringify([]),
      "lol_ids": JSON.stringify([])
    };
    await pb.collection('team').create(data);
  }

  await router.push({name: 'home', params: {successful: "true"}})
}).catch((err) => {
  data.value = "Failed to exchange code.\n" + err;
});
</script>


<style scoped>
</style>
