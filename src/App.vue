<template>
    <v-app>
        <v-toolbar extended>
            <img align-center id="logo" src="../logo_bar.png"/>
            <v-spacer/>
            <Login/>
        </v-toolbar>
        <v-container grid-list-md text-xs-center>
            <v-layout row wrap>
                <v-flex xs12>
                        <img id="topbar" src="../top_bar.gif" />
                </v-flex>
                <v-flex xs6>
                    <v-card>
                        <ImageUpload/>
                    </v-card>
                </v-flex xs6>
                <v-flex xs6>
                    <v-card>
                        <Sticker_Theme_Selection/>
                    </v-card>
                </v-flex xs6>
            </v-layout>
        </v-container>
    </v-app>
</template>

<script>
import Login from './components/Login.vue'
import ImageUpload from './components/ImageUpload.vue'
import Sticker_Theme_Selection from './components/Sticker_Theme_Selection.vue'

export default {

name: 'App',
components: {
    Login,
    ImageUpload,
    Sticker_Theme_Selection
},
data () {
      return {
          env: false,
          theme: "Random",
          numStickers: 0,
      }
},
};

</script>

<style>
#logo {
    height: 110px;
    position: relative;
    top: 33px;
}
#topbar {
    height: 150px;
}
</style>
