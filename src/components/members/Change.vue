<template>
  <div>
    <div v-if="messages != ''" class="message is-primary">
      <div class="message-body">
        {{ messages }}
      </div>
    </div>
    <FormKit type="form" @submit="submit_and_save" :plugins="[castRangeToNumber]" #default="{value}"
             :form-class="'columns is-multiline'" v-model="loadedValues">
      <FormKit type="group" name="basic" id="basics">
        <div class="is-one-third column">
          <FormKit
              type="text"
              name="name"
              label="Name"
              help="Anzeigename"
              placeholder="“eXiT | Incredible”"
              maxlength="255"
              validation="required"
          />

          <FormKit
              type="url"
              name="avatar"
              label="Avatar"
              help="Avatarurl"
              placeholder="https://..."
              maxlength="255"
              validation="required"
          />

          <FormKit
              type="textarea"
              name="text"
              label="Text"
              help="Freitext"
              placeholder="Hallo, ich bin ...."
              maxlength="2000"
              rows="10"
              validation="required"
          />
        </div>
      </FormKit>

      <FormKit id="lol_repeater" name="lol_ids" type="repeater" label="League of Legends IDs"
               :classes="{outer: 'is-one-third column'}">
        <FormKit
            type="url"
            name="url"
            label="Profile URL"
            help="URL von dem LoL-Account"
            placeholder="https://u.gg/lol/profile/euw1/mrsupercheg/overview"
            maxlength="255"
            validation="required|url"/>
        <FormKit
            type="text"
            name="name"
            label="Account name"
            help="Anzeigename für den Account"
            placeholder="eXiT l Incredble"
            maxlength="255"
            validation="required"
        />
        <FormKit
            type="text"
            name="img"
            label="Account name"
            help="Anzeigename für den Account"
            placeholder="eXiT l Incredble"
            maxlength="255"
            validation="required"
        />
      </FormKit>
      <FormKit id="steam_repeater" name="steam_ids" type="repeater" label="Steam Accounts"
               :classes="{outer: 'is-one-third column'}">
        <FormKit
            type="url"
            name="avatar"
            label="Avatar URL"
            help="URL von dem Steam-Avatar"
            placeholder="https://steamcdn-a.akamaihd.net/steamcommunity/public/images/avatars/84/84199881caecec9848af94166c4ef97192c8ae52_full.jpg"
            maxlength="255"
            validation="required|url"/>
        <FormKit
            type="text"
            name="name"
            label="Anzeigename"
            help="Account Anzeigename"
            placeholder="eXiT l Incredble"
            validation="required"
        />
        <FormKit
            type="number"
            name="id"
            label="Account ID"
            help="Steam ID"
            placeholder="76561198091982448"
            validation="required"
        />
      </FormKit>
    </FormKit>

  </div>
</template>

<script setup lang="ts">
import {onMounted, reactive, Ref, ref} from "vue";
import pb from "../../pb";
import {useStore} from "vuex";
import {FormType} from "../../types";

const store = useStore(),
    profileData = ref({id: "undefined"}),
    messages = ref(""),
    loadedValues:FormType = reactive({
      "basic": {
        name: "",
        avatar: "",
        text: ""
      },
      "lol_ids": [],
      "steam_ids": [],

    });
onMounted(async () => {
  const data = await pb.collection('team').getFirstListItem(`discord_id="${store.state.login_data.meta.id}"`, {});
  profileData.value = data;
  loadedValues.basic.name = data.name;
  loadedValues.basic.avatar = data.avatar;
  loadedValues.lol_ids = data.lol_ids;
  loadedValues.steam_ids = data.steam_ids;
  loadedValues.basic.text = data.text;
});
const castRangeToNumber = (node: any) => {
  if (node.props.type !== 'range') return
  node.hook.input((value: any, next: (payload?: any) => any) => next(Number(value)))
}

const submit_and_save = async (fields: FormType) => {
  const data = {
    "name": fields.basic.name,
    "avatar": fields.basic.avatar,
    "steam_ids": fields.steam_ids,
    "lol_ids": fields.lol_ids,
    text: fields.basic.text
  };

  await pb.collection('team').update(profileData.value.id, data);

  messages.value = "Saved!";
  setTimeout(() => {
    messages.value = "";
  }, 2000);
}
</script>

<style scoped>

</style>