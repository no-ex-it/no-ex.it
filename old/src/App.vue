<template>
  <div>
    <div v-if="$route.name === 'profile'" class="profile-logo">
      <div class="columns text-logo-background">
        <div class="column is-one-third">
          <img src="@/assets/img/no-exit.jpeg" class="logo">
        </div>
        <div class="column is-two-third text-logo">
          {{ $route.params.id }}
        </div>
      </div>
    </div>
    <div v-else class="logo-parent">
      <img src="@/assets/img/no-exit.jpeg" class="logo">
    </div>
    <br/>
    <div class="container">
      <h1 class="title"> Welcome to No-eXiT </h1>
      <p class="subtitle">
        We are a simple gaming clan.
      </p>
      Members:
      <br/>
      <a :href="'/members/'+id" @click.prevent="$router.push({ name: 'profile', params: { id: id }});" class="button"
         v-for="(name, id) in members">{{ name }}</a>
    </div>
    <section class="section" id="content">
      <router-view></router-view>
    </section>
    <CookieLaw></CookieLaw>
  </div>
</template>

<script>
import CookieLaw from "vue-cookie-law";

export default {
  name: "App",
  components: {
    CookieLaw
  },
  data() {
    return {
      members: {
        Defcon: "Defcon",
        Incredible: "eXiT | Incredible",
        PRoXiS: "eXiT | PRoXiS"
      }
    };
  },
  methods: {
    t() {
      this.$route.name;
    }
  },
  mounted() {
    this.$nextTick(function () {
      const el = this.$el.getElementsByClassName("section")[0];
      if (el) {
        setTimeout(() => {
          el.scrollIntoView({behavior: "smooth", block: "end"});
        }, 1000);
      }
    });
  }
};
</script>

<style lang="scss">
//.page-profile {
//  .logo {
//    max-width: 40%;
//  }
//}

</style>
