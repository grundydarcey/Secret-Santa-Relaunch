<template>
    <div class="couples">
        <v-container>
            <!-- <v-header class="text left">
                <h1 class="display-2 font-weight-bold mb-1 mt-9">Your Couple's List</h1>
            </v-header>
            <div>
                <p class="subheading font-weight-regular text-left mt-5 mb-3">View items currently in the list and add new items to your list.</p>
            </div>
            <div class="mt-15 mr-5 ml-5 mb-3">
                Find an item you want to add to the list on other websites, copy their URL and paste them below to add them to your wishlist.
            </div>
            <v-row>
                <v-text-field 
                    class="mr-8 ml-8"
                    label="Item URL"
                ></v-text-field>
            </v-row>
            <div class="mt-8">
                <h2 class="display-1 font-weight-bold text-center">Wishlist Items (9)</h2>
                <v-card>
                    <div class="d-flex pt-3 pb-3 pr-3 pl-3">
                        <v-img
                            src="https://cdn.shopify.com/s/files/1/0156/6146/products/AdaptOmbre_Knitted_SeamlessLeggingsBlackB1A2L-BBCX4_ZH_ZH_600x.jpg?v=1639761899"
                            max-width="150"
                            max-height="150"
                        ></v-img>
                        <div class="ml-3">
                            <p class="body-1 font-weight-black">Grey Athletic Leggings</p>
                            <p class="body-2 font-weight-bold">$25.99</p>
                            <p>Click item name to open link in another tab.</p>
                        </div>
                        <v-spacer></v-spacer>
                        <div class="d-flex align-center">
                            <v-icon
                                class="mr-8"
                                color="red"
                                large    
                            >
                                mdi-trash-can
                            </v-icon>
                        </div>
                    </div>
                </v-card>
            </div> -->
            <v-header class="text left">
                <h1 class="display-2 font-weight-bold mb-1 mt-9">Add Your Partner</h1>
            </v-header>
            <div class="mb-13">
                <p class="subheading font-weight-regular text-left mt-5 mb-3">Choose your partner's name from the dropdown menu below to create a new linked list for the two of you!</p>
            </div>
            <v-form class="mr-15 ml-15 text-center">
                <v-select
                    class="mr-15 ml-15"
                    :items="users"
                    label="Choose your partner"
                    outlined
                ></v-select>
                <v-btn>
                    add partner
                </v-btn>
            </v-form>
        </v-container>
    </div>
</template>

<script>
  export default {
      title: 'Couple List',
      data: () => ({
        users: ['Mom', 'Dad', 'Kid', 'Grandma', 'Grandpa']
      })
  }
</script>
