<template>
  <v-app>
    <v-app-bar
      app
      class="red"
      dark
    >
      <div class="flexxy">
      <div class="d-flex align-center">
        <v-img
          alt="Vuetify Logo"
          class="shrink mr-2"
          contain
          src="http://cdn.onlinewebfonts.com/svg/img_550407.png"
          transition="scale-transition"
          width="40"
        />
          Secret Santa 2.0
      </div>

  
      <div>
      <v-btn
        href="/wishlists"
        text
      >
        <span class="mr-2">Manage Wishlists</span>
      </v-btn>
      <v-btn
        href="/group"
        text
      >
        <span class="mr-2">Group</span>
      </v-btn>
      </div>
    </div>
    </v-app-bar>

    <v-main>
      <router-view/>
    </v-main>
  </v-app>
</template>

<script>

export default {
  name: 'App',

  data: () => ({
    //
  }),
};
</script>

<style scoped>
.flexxy {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-evenly;
}
</style>