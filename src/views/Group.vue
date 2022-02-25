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
            <li v-for="member in this.members" :key="member.id">
                <v-img 
                  class="rounded-circle ml-3 mr-3"
                  :src="member.member_picture"
                  width="90"
                  height="90"
                />
                <p>{{ member.member_name }}</p>
            </li>
        </ul>
      </v-card>
    </v-container>
  </div>
</template>

<script>
  export default {
      title: 'Group',
      inject: ['$members'],
      created() {
          console.log(this.members[0].member_name)
      },  
      computed: {
        members() {
          return this.$members();
        }
      }
  }
</script>

<style scoped>


li {
    list-style-type: none;
    /* display: inline; */
}

p {
    text-align: center;
}

ul {
    display: flex;
}
</style>