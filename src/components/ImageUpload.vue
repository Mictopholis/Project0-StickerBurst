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
        var sticker1 = new Image();
        var sticker2 = new Image();
        var sticker3 = new Image();
        var sticker4 = new Image();
        var finalPic = new Image();

        var c = document.getElementById("canvas")
        var ctx = c.getContext("2d");

        uploadedPic.onload = function() {
          c.width = 500;
          c.height = 350;
          sticker1.src = "src/assets/Cat.jpeg";
          sticker2.src = "src/assets/inbreadcat.png";
          sticker3.src = "src/assets/Cute_Cat.jpeg";
          sticker4.src = "src/assets/Close_Cat.jpeg";
          ctx.drawImage(uploadedPic, 0, 0, c.width, c.height);
          ctx.globalAlpha = 1.0;  // Transparency

          var stickerWidth = c.width/4.0;
          var stickerHeight = c.width/4.0;
          var randomStickerX = Math.random() * (c.width-stickerWidth);
          var randomStickerY = Math.random() * (c.height-stickerHeight);
          //ctx.drawImage(sticker1, randomStickerX, randomStickerY, stickerWidth, stickerHeight);
          ctx.drawImage(sticker1, 180, 100, stickerWidth, stickerHeight);
          ctx.globalAlpha = 1.0;  // Transparency
          randomStickerX = Math.random() * (c.width/2.0-stickerWidth);
          randomStickerY = Math.random() * (c.height/2.0-stickerHeight);
          ctx.drawImage(sticker2, randomStickerX, randomStickerY, stickerWidth, stickerHeight);
          ctx.globalAlpha = 1.0;  // Transparency
          randomStickerX = Math.random() * (c.width/2.0-stickerWidth) + c.width/2.0;
          randomStickerY = Math.random() * (c.height/2.0-stickerHeight);
          ctx.drawImage(sticker3, randomStickerX, randomStickerY, stickerWidth, stickerHeight);
          ctx.globalAlpha = 1.0;  // Transparency
          randomStickerX = Math.random() * (c.width-stickerWidth);
          randomStickerY = Math.random() * (c.height/2.0-stickerHeight) + c.height/2.0;
          ctx.drawImage(sticker4, randomStickerX, randomStickerY, stickerWidth, stickerHeight);
          ctx.globalAlpha = 1.0;  // Transparency
          ctx.font = "19px san-serif";
          ctx.fillStyle = "#ff0000";
          ctx.fillText("Get a premium account to get these cats out of your picture!", 20, 7*c.height/8.0);
          ctx.textBaseline = "middle";
          ctx.textAlign = "center";

          finalPic.src = c.toDataURL("image/png");
          item.image = finalPic.src;
        };
        uploadedPic.src = e.target.result;
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