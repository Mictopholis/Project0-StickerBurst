<template>
<v-app>
    <v-toolbar>
    Testing the toolbar
    <v-icon>home</v-icon>
    </v-toolbar>
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

</style>
