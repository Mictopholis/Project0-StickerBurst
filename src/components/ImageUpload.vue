<template>
<div id="app">
  <div v-for="item in items">
    <div v-if="!item.image">
    <v-layout column wrap align-center>
      <h2>Upload Your Photo Here!</h2>
      <v-icon x-large>cloud_upload</v-icon>
      <input type="file" accept="image/*" @change="onFileChange(item, $event)">
    </v-layout>
    </div>
    <div v-else>
      <img :src="item.image" />
      <v-btn color="primary" @click="removeImage(item)">Choose Another Image</v-btn>
    </div>
  </div>
</div>
</template>

<script>

   export default{
  data: () => ({
    items: [
       {
         image: false,
       },

    ],
   }),
  methods: {
    onFileChange(item, e) {
      var files = e.target.files || e.dataTransfer.files;
      if (!files.length)
        return;
      this.createImage(item, files[0]);
    },
    createImage(item, file) {
      var image = new Image();
      var reader = new FileReader();

      reader.onload = (e) => {
        item.image = e.target.result;
      };
      reader.readAsDataURL(file);
    },
    removeImage: function (item) {
      item.image = false;
    }
  }

}
</script>

<style>
#app {
  text-align: center;
}
img {
    height: 300px;
}
button {

}
</style>