<template>
  <div>
    <h1 class="heading">{{ profileData.name }}</h1>
    <div class="columns">
      <div class="column is-one-fifth card">
        <div class="card-image">
          <figure class="image is-4by4">
            <img :src="profileData.steam.img" alt="Placeholder image">
          </figure>
        </div>
        <div class="card-content">
          <div class="media">
            <div class="media-content">
              <p class="title is-4">{{ $route.params.id }}</p>
              <p class="subtitle is-6">@steam</p>
            </div>
          </div>

          <div class="content">
            <a class="button" :href="profileData.steam.url" target="_blank">Profile öffnen</a>
          </div>
        </div>
      </div>
      <div class="column is-one-fifth card" v-for="i in range(profileData.lolNumber.number)">
        <div class="card-image">
          <figure class="image is-4by4">
            <img :src='profileData["lol"+i].img' alt="Placeholder image">
          </figure>
        </div>
        <div class="card-content">
          <div class="media">
            <div class="media-content">
              <p class="title is-4">{{ $route.params.id }}</p>
              <p class="subtitle is-6">@LoL</p>
            </div>
          </div>

          <div class="content">
            <a class="button" :href='profileData["lol"+i].url' target="_blank">Profile öffnen</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "profile",
  computed:{
    profileData(){
      return this.data[this.$route.params.id];
    }
  },
  data() {
    return {
      data: {
        "Incredible": {
          "steam": {
            "img": "https://steamcdn-a.akamaihd.net/steamcommunity/public/images/avatars/84/84199881caecec9848af94166c4ef97192c8ae52_full.jpg",
            "url": "http://steamcommunity.com/profiles/76561198091982448"

          },
          "lol1": {
            "url": "https://u.gg/lol/profile/euw1/eXiT%20l%20Incredble/overview",
            "img": "https://icons.iconarchive.com/icons/fazie69/league-of-legends-gold-border/512/Malphite-icon.png"
          },
          "lol2": {
            "url": "https://u.gg/lol/profile/euw1/mrsupercheg/overview",
            "img": "https://icons.iconarchive.com/icons/fazie69/league-of-legends-gold-border/512/Malphite-icon.png"
          },  "lol3": {
            "url": "https://u.gg/lol/profile/euw1/busch%20b%C3%A4rchen/overview",
            "img": "https://icons.iconarchive.com/icons/fazie69/league-of-legends-gold-border/512/Malphite-icon.png"
          },
          "lolNumber": {
            number: 3
          }
        },
        "PRoXiS": {
          "steam": {
            "img": "https://cdn.cloudflare.steamstatic.com/steamcommunity/public/images/avatars/8a/8ad43049988deffe3893cf403db0b80c76890507_full.jpg",
            "url": "https://steamcommunity.com/profiles/76561198033785745"

          },
          "lol1": {
            "url": "https://u.gg/lol/profile/euw1/exit%20l%20proxis/overview",
            "img": "https://icons.iconarchive.com/icons/fazie69/league-of-legends-gold-border/512/Malphite-icon.png"
          },
          "lolNumber": {
            number: 1
          }
        },
        "Defcon": {
          "steam": {
            "img": "https://cdn.cloudflare.steamstatic.com/steamcommunity/public/images/avatars/9b/9b03b282bf864fedcfc49491bcd03b13afe34a01_full.jpg",
            "url": "https://steamcommunity.com/profiles/76561198083646866"

          },
          "lol1": {
            "url": "https://u.gg/lol/profile/euw1/the%20arke/overview",
            "img": "https://icons.iconarchive.com/icons/fazie69/league-of-legends-gold-border/512/Malphite-icon.png"
          },
          "lolNumber": {
            number: 1
          }
        },
      }
    };
  },
  methods: {
    range(end) {
      return [...Array(end).keys()].map(i => i + 1);
    }
  },
  mounted() {

  }
};
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