<template>
<div id="app">
  <div v-for="item in items">
    <div v-if="!item.image">
      <v-layout column wrap align-center>
        <h2>Upload Your Photo Here!</h2>
        <v-icon x-large>cloud_upload</v-icon>
        <canvas id="canvas" style="display:none"></canvas>
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
        var uploadedPic = new Image();
        var sticker = new Image();
        var finalPic = new Image();

        var c = document.getElementById("canvas")
        var ctx = c.getContext("2d");

        sticker.onload = function() {
          c.width = 500;
          c.height = 350;
          uploadedPic.src = e.target.result;
        };
        uploadedPic.onload = function() {
          ctx.globalAlpha = 1.0;
          ctx.drawImage(uploadedPic, 0, 0, c.width, c.height);
          ctx.globalAlpha = 1.0; //Remove if pngs have alpha
          var stickerWidth = c.width/4.0;
          var stickerHeight = c.width/4.0;
          var randomStickerX = Math.random() * (c.width-stickerWidth);
          var randomStickerY = Math.random() * (c.height-stickerHeight);
          //ctx.drawImage(sticker, randomStickerX, randomStickerY, stickerWidth, stickerHeight);
          ctx.drawImage(sticker, 180, 100, stickerWidth, stickerHeight);

          finalPic.src = c.toDataURL("image/png");
          item.image = finalPic.src;
        };
        sticker.src = "src/assets/Cat.jpeg";
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