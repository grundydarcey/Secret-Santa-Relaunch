<template>
  <div class="group">
      
    <v-container>
      <v-subheader class="text left">
        <h1 class="display-2 font-weight-bold mb-1 mt-9">Your Group</h1>
      </v-subheader>
      <div>
        <p class="subheading font-weight-regular text-left mt-5 mb-3">Others below are in your Secret Santa group. Click their pictures to see their lists!</p>        
      </div>
      <v-card class="d-flex pt-8 pb-8 ml-15 mr-15 justify-center">
        <ul>
            <li v-for="item in items" :key="item.id">
                {{ item.member_name }}
            </li>
        </ul>
        <div>
          <v-img
            class="rounded-circle ml-3 mr-3"
            src="https://thispersondoesnotexist.com/image"
            max-width="90"
            max-height="90"
          ></v-img>
          <p class="text-center">Mom</p>
        </div>
        <div>
          <v-img
            class="rounded-circle ml-3 mr-3"
            src="https://thispersondoesnotexist.com/image"
            max-width="90"
            max-height="90"
          ></v-img>
          <p class="text-center">Dad</p>
        </div>
        <div>
          <v-img
            class="rounded-circle ml-3 mr-3"
            src="https://thispersondoesnotexist.com/image"
            max-width="90"
            max-height="90"
          ></v-img>
          <p class="text-center">Grandma</p>
        </div>
        <div>
          <v-img
            class="rounded-circle ml-3 mr-3"
            src="https://thispersondoesnotexist.com/image"
            max-width="90"
            max-height="90"
          ></v-img>
          <p class="text-center">Kid</p>
        </div>
        <div>
          <v-img
            class="rounded-circle ml-3 mr-3"
            src="https://thispersondoesnotexist.com/image"
            max-width="90"
            max-height="90"
          ></v-img>
          <p class="text-center">Grandpa</p>
        </div>
        <div>
          <v-img
            class="rounded-circle ml-3 mr-3"
            src="https://thispersondoesnotexist.com/image"
            max-width="90"
            max-height="90"
          ></v-img>
          <p class="text-center">Dog</p>
        </div>
      </v-card>
    </v-container>
  </div>
</template>

<script>
  export default {
      data() {
        items: [
            this.members
        ]
      },
      title: 'Group',
      inject: ['$members'],
      created() {
          console.log(this.members[0].price)
      },  
      computed: {
        members() {
          return this.$members();
        }
      }
    //   data() {
    //       return {
    //           allMembers: this.members
    //       }
    //   }
  }
</script>