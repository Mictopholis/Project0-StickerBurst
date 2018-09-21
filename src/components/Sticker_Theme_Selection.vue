<template>
  <!-- Tier 0 (no login) Buttons -->
  <div v-if="!buttonSelected">

      <div v-if="tierlevel0">
          <v-btn depressed small color="error" @click="EventFunction()">
            I like to live on the wild side. Randomize me!
          </v-btn>
      </div>
  
      <v-container fluid class="pa-0">
        <!-- Tier 1 (basic login) and part of Tier 2 (premium login) buttons -->
        <div v-if="tierlevel1 || tierlevel2">
          <v-layout row wrap>
            <v-flex xs12 sm3>
              <v-btn flat large @click="ClickFunction()">
                <img src="../../sticker/avatar/001-man.png" />
              </v-btn>
            </v-flex>

            <v-flex xs12 sm3>
              <v-btn flat large @click="ClickFunction()">
                <img src="../../sticker/cooking/012-chef.png" />
              </v-btn>
            </v-flex>

            <v-flex xs12 sm3>
              <v-btn flat large @click="ClickFunction()">
                <img src="../../sticker/payment/041-bitcoin.png" />
              </v-btn>
            </v-flex>

            <v-flex xs12 sm3>
              <v-btn flat large @click="ClickFunction()">
                <img src="../../sticker/recycle/047-recycling-2.png" />
              </v-btn>
            </v-flex>
          </v-layout>
        </div>

        <!-- Tier 2 (premium) only Buttons -->
        <div v-if="tierlevel2">
          <v-layout row wrap>
            <v-flex xs12 sm3>
              <v-btn flat disabled large></v-btn>
            </v-flex>

            <v-flex xs12 sm3>
              <v-btn flat large @click="ClickFunction()">
                <img src="../../sticker/social_networking/facebook.png" />
              </v-btn>
            </v-flex>

            <v-flex xs12 sm3>
              <v-btn flat large @click="ClickFunction()">
                <img src="../../sticker/avatar/001-man.png" />
              </v-btn>
            </v-flex>

            <v-flex xs12 sm3>
              <v-btn flat disabled large></v-btn>
            </v-flex>
          </v-layout>
        </div>

      </v-container>
      </div>
    </div>

    <div v-else>
      <!--when you click a button, a confirm screen shows-->
      <p> Are you sure you want to use this theme?</p>
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
      tierlevel0: false,
      tierlevel1: false,
      tierlevel2: true,
      //button function items
      buttonSelected: false,
      stickerNumber: 0,
     
    }),

    methods: {
      //fucntions go in here
      ClickFunction: function (){
        this.buttonSelected = true 
      },
      BackToMain: function () {
        this.buttonSelected = false

      },
      WhichTheme: function () {
        return this.theme;
      },
      EventFunction: function () {

      },
  }
  }


</script>

<style>
  img {
    height: 35px;
  }
</style>
