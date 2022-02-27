<template>

    <!-- <v-container>
        one persons page
    </v-container> -->
    <div id='route'>
        <h1></h1>
    </div>
</template>

<script>
  export default {
      title: 'single person page',
      data() {
          return {
              id: this.$route.params.id,
              member: {}
          }
      },
      created() {
          this.$http.get('http://localhost:8001/members' + this.id)
            .then(function(data) {
                this.member = data.body
            })
      }
  }
</script>