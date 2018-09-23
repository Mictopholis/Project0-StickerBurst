<template>
    <v-app>
        <v-toolbar extended color="grey">
            <img align-center id="logo" src="../sticker-bros.png"/>
            <v-spacer/>
            <Login/>
        </v-toolbar>
        <v-container grid-list-md text-xs-center>
            <v-layout row wrap>
                <v-flex xs12>
                    <v-card>
                        <h1 align="center">Informational Image</h1>
                    </v-card>
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
</style>
