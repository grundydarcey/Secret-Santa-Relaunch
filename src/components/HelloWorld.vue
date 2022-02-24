<template>
  <v-container>
    <v-row class="text-left">
      <v-col>
        <h1 class="display-2 font-weight-bold mb-1 mt-9">
          Welcome to Secret Santa 2.0!
        </h1>
        <p class="subheading font-weight-regular text-left mt-5 mb-3">
          Let's see if anyone in your group has been active on Secret Santa 2.0 recently.
        </p>
      </v-col>
    </v-row>
    <v-row class="text-center mx-auto">
      <v-col>
        <v-list dense>
          <v-list-item
            class="tile"
            v-for="item in items"
            :key="item.activity"
          >
            <v-list-item-icon>
              <v-icon
                color="red darken"
              >
                mdi-account
              </v-icon>
            </v-list-item-icon>
          <v-spacer></v-spacer>
          <v-list-item-content>
            <v-list-item-title class="text-right" v-text="item.activity"></v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
      </v-col>
    </v-row>
    <v-row class="text-center">
      <v-btn class="text-center" href="/join">
        Join group now
      </v-btn>
    </v-row>
  </v-container>
</template>

<script>
  export default {
    name: 'HelloWorld',
    data: () => ({
      items: [
        { activity: 'Your friend did x.'},
        { activity: 'New friend joined.'},
        { activity: 'Your friend added items to their list.'},
        { activity: 'Your friend drew someone else\'s name.'},
        { activity: 'Your friend started their list.'},
        { activity: 'Your friend entered a couple\'s list'}
      ],
      // members: [],
    }),
    provide() {
      return {
        members: this.members
      }
    },
    // methods: {
    //   async getData() {
    //     try {
    //       const response = await this.$http.get(
    //         "http://localhost:8001/members"
    //       );
    //       this.members = response.data;
    //       console.log(JSON.parse(JSON.stringify(this.members[1].price)))
    //     } catch (error) {
    //       console.log(error)
    //     }
    //   }
    // },
    // created() {
    //   this.getData();
    // } 
}
</script>

<style scoped>
.tile {
  background-color: rgb(255, 162, 162);
  margin: 2px 0;
}
</style>