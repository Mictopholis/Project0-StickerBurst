<template>
  <div v-if="!buttonSelected">
    <v-container fluid class="pa-0">
      <v-layout row wrap>
        <v-flex xs12 sm3>
          <v-btn flat large @click="ClickFunction(0)">
            <img src="../../sticker/avatar/001-man.png" />
          </v-btn>
        </v-flex>

        <v-flex xs12 sm3>
          <v-btn flat large @click="ClickFunction(1)">
            <img src="../../sticker/avatar/001-man.png" />
          </v-btn>
        </v-flex>

        <v-flex xs12 sm3>
          <v-btn flat large @click="ClickFunction(2)">
            <img src="../../sticker/avatar/001-man.png" />
          </v-btn>
        </v-flex>

        <v-flex xs12 sm3>
          <v-btn flat large @click="ClickFunction(3)">
            <img src="../../sticker/avatar/001-man.png" />
          </v-btn>
        </v-flex>

        <v-flex xs12 sm3>
          <v-btn flat disabled large></v-btn>
        </v-flex>

        <v-flex v-if="tierlevel3">
            <v-layout row wrap>
              <v-flex xs12 sm3>
                <v-btn flat large @click="ClickFunction(4)">
                  <img src="../../sticker/avatar/001-man.png" />
                </v-btn>
              </v-flex>

              <v-flex xs12 sm3>
                <v-btn flat large @click="ClickFunction(5)">
                  <img src="../../sticker/avatar/001-man.png" />
                </v-btn>
              </v-flex>
            </v-layout>
        </v-flex>
        
      </v-layout>
    </v-container>
  </div>

  <div v-else>
    <p> Are you sure you want to show {{buttonSel}}?</p>
  </div>
</template>

<script>

  /*This portion is all of the backend functionality.

  We need to:

  1. Decide what to do when a button is clicked.
     a. Do we spawn a new button and then when clicked create an event bus to send to the other portion of the project?
     b. Do we simply pass an event when the icon is clicked instead to eliminate a step?

  2. Figure out how we are deciding what to display depending on the user access level
     a. Can we hardcode the access levels? (Ask tomorrow)

  */
  import { EventBus } from '../main.js';
  export default {
    //initialize variables
    data: () => ({
      //**What variables do we need?**
      tierlevel1: false,
      tierlevel2: false,
      tierlevel3: true,
      buttonSelected: false,
      stickerNumber:0,
      posts: [
        { id: 1, title: 'cats' },
        { id: 2, title: 'Blogging with Vue' },
        { id: 3, title: 'Why Vue is so fun' }
      ],
      buttonSel: '',
    }),

    methods: {
      //fucntions go in here
      ClickFunction: function (stickerNumber){
        this.buttonSelected = true
        this.buttonsel = stickers[stickerNumber.title]
        
      },
  }
  }


</script>

<style>
  img {
    height: 40px;
  }
</style>
