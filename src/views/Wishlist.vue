<template>
  <div class="about">
    <v-container>
      <v-row class="text left">
        <v-col>
          <h1 class="display-2 font-weight-bold mb-1 mt-9">
            Wishlists
          </h1>
          <p class="subheading font-weight-regular text-left mt-5 mb-3">
            Edit your wishlist, or add to your coupled wishlist.
          </p>
        </v-col>
      </v-row>
      <v-row class="text-center mt-3 mb-3">
        <v-col>
          <v-btn
            href="/wishlists/your_list"
            color="secondary"
            x-large
          >
            Your Wishlist
          </v-btn>
        </v-col>
      </v-row>
      <v-row>
        <v-col>
          <p class="subheading font-weight-regular text-left mt-5 mb-3">
            Are you participating in Secret Santa with a partner? Click button below to add details.
          </p>
        </v-col>
      </v-row>
      <v-row class="text-center mt-3 mb-3">
        <v-col>
          <v-btn
            href="/wishlists/couples_list"
            color="secondary"
            x-large
          >
            Add partner info
         </v-btn>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
  export default {
    title: 'Wishlists'
  }
</script>