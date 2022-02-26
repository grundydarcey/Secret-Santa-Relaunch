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
  }),
  provide() {
    return {
      $members: () => this.members,
      $lists: () => this.lists
    };
  },
  methods: {
    async getData() {
      try {
        const response = await this.$http.get(
          "http://localhost:8001/members"
        );
        this.members = response.data;
        // console.log(JSON.parse(JSON.stringify(this.members[1].price)))
      } catch (error) {
        console.log(error)
      }
    },
    async getLists() {
      try {
        const response = await this.$http.get(
          "http://localhost:8001/lists"
        );
        this.lists = response.data;
        console.log(JSON.parse(JSON.stringify(this.lists[1].link)), 'lists console log')
      } catch (error) {
        console.log(error)
      }
    }
  },
  created() {
    this.getData();
    this.getLists();
  }
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