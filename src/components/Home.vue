<template>
  <div class="container">
    <h1 class="title"> Welcome to No-eXiT </h1>
    <p class="subtitle">
      We are a simple gaming clan.
    </p>
    Members:
    <br/>
    <a :href="`/members/${data.id}/${data.name}`"
       @click.prevent="$router.push({ name: 'profile', params: { id: data.id, name: data.name }});"
       class="button"
       v-for="(data, id) in record">
      {{ data.name }}
    </a>
  </div>
</template>

<script setup lang="ts">
import {onMounted, Ref, ref} from "vue";
import pb from "../pb";
import {defaultProfileData, FormType, ProfileDataType} from "../types";

const record: Ref<ProfileDataType[]> = ref([defaultProfileData]);
onMounted(async () => {
  const resultList: { items: ProfileDataType[] } = await pb.collection('team').getList(1, 50, {});
  record.value = resultList.items;
});
</script>

<style scoped>

</style>