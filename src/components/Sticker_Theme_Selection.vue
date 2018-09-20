<template>
  <!-- Tier 2 (login) Buttons -->
  <div v-if="!buttonSelected">
    <div v-if="tierlevel2"></div>
      <v-container fluid class="pa-0">
        <v-layout row wrap>
          <v-flex xs12 sm3>
            <v-btn flat large @click="ClickFunction(0)">
              <img src="../../sticker/avatar/001-man.png" />
            </v-btn>
          </v-flex>

          <v-flex xs12 sm3>
            <v-btn flat large @click="ClickFunction(1)">
              <img src="../../sticker/cooking/012-chef.png" />
            </v-btn>
          </v-flex>

          <v-flex xs12 sm3>
            <v-btn flat large @click="ClickFunction(2)">
              <img src="../../sticker/payment/041-bitcoin.png" />
            </v-btn>
          </v-flex>

          <v-flex xs12 sm3>
            <v-btn flat large @click="ClickFunction(3)">
              <img src="../../sticker/recycle/047-recycling-2.png" />
            </v-btn>
          </v-flex>

         
          <!-- Tier 3 (premium) Buttons -->
          <v-flex v-if="tierlevel3">
            <v-layout row wrap>
              <v-flex xs12 sm3>
                <v-btn flat disabled large></v-btn>
              </v-flex>

              <v-flex xs12 sm3>
                <v-btn flat large @click="ClickFunction(4)">
                  <img src="../../sticker/social_networking/facebook.png" />
                </v-btn>
              </v-flex>

              <v-flex xs12 sm3>
                <v-btn flat large @click="ClickFunction(5)">
                  <img src="../../sticker/avatar/001-man.png" />
                </v-btn>
              </v-flex>

              <v-flex xs12 sm3>
                <v-btn flat disabled large></v-btn>
              </v-flex>
            </v-layout>
          </v-flex>
        </v-layout>
      </v-container>
    </div>
  </div>

  <div v-else>
    <p> Are you sure you want to use {{}}?</p>
    <v-layout row wrap>
      <div>
        <v-btn depressed small color="primary" @click="EventFunction()">
          Yes
        </v-btn>
      </div>
      <div>
        <v-btn depressed small color="error" @click="BackToMain()">
          No
        </v-btn>
      </div>  
    </v-layout>


  </div>
</template>

<script>
  import { EventBus } from '../main.js';
  export default {
    //initialize variables
    data: () => ({
      //Decides what tier
      tierlevel1: false,
      tierlevel2: false,
      tierlevel3: true,
      //button function items
      buttonSelected: false,
      stickerNumber: 0,

      //theme list
      posts: ['avatar', 'cooking', 'payment', 'recycle', 'social networking', 'BB'],
      theme: '',
    }),

    methods: {
      //fucntions go in here
      ClickFunction: function (stickerNumber){
        this.buttonSelected = true
        this.theme = stickers[stickerNumber.title]   
      },
      BackToMain: function () {
        this.buttonSelected = false
    
      },
      WhichTheme: function () {
        return this.theme;
      },
  }
  }


</script>

<style>
  img {
    height: 35px;
  }
</style>
