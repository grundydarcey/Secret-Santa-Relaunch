<template>
    <!-- <v-container>
        one persons page
    </v-container> -->
    <div id='route'>
        <h1>{{ member.member_name }}</h1>
        <h2>{{ lists.link }}</h2>
    </div>
</template>

<script>
  export default {
      title: 'single',
      inject: ['$lists'],
      data() {
          return {
              id: this.$route.params.id,
              member: {}
          }
      },
      created() {
          this.$http.get('http://localhost:8001/members/' + this.id)
            .then((data) => {
                this.member = data.data
                console.log(this.member.member_name)
                console.log(this.lists[0])
            })
      },
      computed: {
          lists() {
            return this.$lists();
          }
      }
  }
</script>