<template>
    <v-app>

        <v-toolbar flat>
            <v-spacer></v-spacer>
            <v-btn flat>ABOUT ME</v-btn>
            <v-btn flat>PORTFOLIO</v-btn>
            <v-btn flat>RESUME</v-btn>
            <v-btn flat>CONTACT</v-btn>
        </v-toolbar>

        <v-jumbotron>
            <v-container fill-height>
                <v-layout align-center>
                    <v-flex>
                    <v-layout row wrap>
                        <h3 class="display-3">Hi, I'm Meera.</h3>
                </v-layout>
                        <v-divider class="my-3"></v-divider>
                    </v-flex>
                </v-layout>
            </v-container>
        </v-jumbotron>

        <v-flex>
            <v-btn ref="button" color="primary" block @click="$vuetify.goTo('#element-near-top', { offset: -500 })">scroll</v-btn>
        </v-flex>
    </v-app>
</template>

<script>
import AboutMe from './components/AboutMe.vue'
import * as easings from 'vuetify/es5/util/easing-patterns'
export default {

name: 'App',
components: {
    AboutMe,
},
data () {
      return {

      }
},
};

</script>

<style>
#element-near-top {
  height: 100px;
}
</style>
