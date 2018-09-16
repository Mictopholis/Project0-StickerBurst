<template>
<div id="app">
  <div v-for="item in items">
    <div v-if="!item.image">
      <h2>Select an image</h2>
      <input type="file" @change="onFileChange(item, $event)">
    </div>
    <div v-else>
      <img :src="item.image" />
      <button @click="removeImage(item)">Remove image</button>
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
    height: 500px;
}
button {

}
</style>