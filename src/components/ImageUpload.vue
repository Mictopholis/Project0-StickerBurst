<template>
<div id="app">
  <div v-for="item in items">

    <div v-if="!item.image">
    <v-layout column wrap align-center>
      <v-flex x12 sm3>
        <h2>Upload Your Photo Here!</h2>
      </v-flex>
      <v-flex x12 sm3>
        <img src="../../upload_sign.png" />
      </v-flex>
      <v-flex x12 sm3>
        <div class="file-upload">
          <div class="file-select">
            <div class="file-select-button" id="fileName">Choose File</div>
            <div class="file-select-name" id="noFile">No file chosen...</div>
            <canvas id="canvas" style="display:none"></canvas>
            <input type="file" name="chooseFile" id="chooseFile" accept="image/*" @change="onFileChange(item, $event)">
          </div>
        </div>
      </v-flex>
      <v-flex xs12 sm6 md3>
        <v-text-field
            label="Number of stickers"
            placeholder="Enter here!"
            v-model="numInput"
        ></v-text-field>
        <v-btn @click="submitNumStickers(numInput)">submit</v-btn>
      </v-flex>
    </v-layout>
    </div>

    <div v-else>
      <v-layout column>
        <v-flex x12 sm3>
          <img id="displayedPic" :src="item.image"/>
        </v-flex>
        <v-flex x12 sm3>
          <v-btn color="primary" @click="removeImage(item)">Choose Another Image</v-btn>
        </v-flex>
      </v-layout>
    </div>

  </div>
</div>
</template>

<script>
  import App from '../App.vue';
  export default{
  data: () => ({
    items: [
       {
         image: false,
       },
    ],

   }),
  methods: {
    submitNumStickers(item) {
      item = Number(item);
      if (typeof(item) == "number")
      {
        if (item % 1 != 0)
          alert("ERROR: Please enter a positive integer.");
        else if (item > 0)
        {
          if (item <= 10)
          {
            App.numStickers = item;
            alert("Number of stickers updated! Now, upload your picture!");
          }
          else {
            alert("Too many stickers! Please choose a number equal to or lower than 10.")
          }
        }
        else {
          alert("ERROR: Please enter a positive integer.");
        }
      }
      else
        alert("ERROR: Please enter a positive integer.");
    },
    onFileChange(item, e) {
      var files = e.target.files || e.dataTransfer.files;
      if (!files.length)
        return;
      if (App.env)
      {
        if (App.numStickers != 0)
        {
          this.createImage(item, files[0]);
        }
        else {
          alert("Number of stickers not chosen! Please enter the number!");
        }
      }
      else {
        alert("Sticker theme not selected! Please choose a sticker theme.");
      }
    },
    createImage(item, file) {
      var image = new Image();
      var reader = new FileReader();
      var themes = ["Avatar", "Cooking", "Payment", "Recycling", "Social Networking", "BB"];
      var randomStickersURL = [];
      var stickers;
      var avatarStickers = ['sticker/avatar/044-farmer.png', 'sticker/avatar/022-man-5.png', 'sticker/avatar/050-catwoman.png', 'sticker/avatar/019-woman-5.png', 'sticker/avatar/011-man-2.png', 'sticker/avatar/031-policeman.png', 'sticker/avatar/052-witch.png', 'sticker/avatar/004-woman.png', 'sticker/avatar/021-girl-3.png', 'sticker/avatar/027-man-7.png', 'sticker/avatar/064-punk.png', 'sticker/avatar/009-firefighter.png', 'sticker/avatar/062-builder.png', 'sticker/avatar/055-bodybuilder.png', 'sticker/avatar/003-boy.png', 'sticker/avatar/014-man-3.png', 'sticker/avatar/043-chef.png', 'sticker/avatar/010-girl-1.png', 'sticker/avatar/032-girl-5.png', 'sticker/avatar/059-doctor.png', 'sticker/avatar/042-vampire.png', 'sticker/avatar/023-man-6.png', 'sticker/avatar/066-boy-6.png', 'sticker/avatar/049-thief.png', 'sticker/avatar/017-girl-2.png', 'sticker/avatar/024-woman-6.png', 'sticker/avatar/060-doctor-1.png', 'sticker/avatar/065-pinup.png', 'sticker/avatar/001-man.png', 'sticker/avatar/008-clown.png', 'sticker/avatar/057-woman-14.png', 'sticker/avatar/007-boy-1.png', 'sticker/avatar/069-woman-15.png', 'sticker/avatar/046-woman-12.png', 'sticker/avatar/039-woman-10.png', 'sticker/avatar/061-nun.png', 'sticker/avatar/068-girl-8.png', 'sticker/avatar/035-woman-9.png', 'sticker/avatar/056-girl-6.png', 'sticker/avatar/002-girl.png', 'sticker/avatar/047-man-13.png', 'sticker/avatar/041-woman-11.png', 'sticker/avatar/058-death.png', 'sticker/avatar/012-woman-2.png', 'sticker/avatar/013-woman-3.png', 'sticker/avatar/028-woman-7.png', 'sticker/avatar/053-concierge.png', 'sticker/avatar/026-girl-4.png', 'sticker/avatar/016-boy-2.png', 'sticker/avatar/038-man-10.png', 'sticker/avatar/070-man-15.png', 'sticker/avatar/006-woman-1.png', 'sticker/avatar/025-boy-4.png', 'sticker/avatar/018-boy-3.png', 'sticker/avatar/034-woman-8.png', 'sticker/avatar/045-man-12.png', 'sticker/avatar/030-policewoman.png', 'sticker/avatar/063-girl-7.png', 'sticker/avatar/020-man-4.png', 'sticker/avatar/036-man-9.png', 'sticker/avatar/005-man-1.png', 'sticker/avatar/029-man-8.png', 'sticker/avatar/051-american-football-player.png', 'sticker/avatar/048-boy-5.png', 'sticker/avatar/015-woman-4.png', 'sticker/avatar/040-man-11.png', 'sticker/avatar/054-woman-13.png', 'sticker/avatar/037-arab-woman.png', 'sticker/avatar/067-man-14.png', 'sticker/avatar/033-superhero.png'];
      var BBStickers = ['sticker/BB/A54DE17760BFAD6D98715FA36DF8ABE9425F0072_size13_w240_h240.gif', 'sticker/BB/C853F39FC014ACABBE8B201DB9484EC29705594A_size22_w240_h240.gif', 'sticker/BB/46127399DFE7444771261DBE5AB8DB704DE9F317_size38_w240_h240.gif', 'sticker/BB/41245D64F4E498D7B7BF5683D428B1A842458CE1_size12_w240_h240.gif', 'sticker/BB/0EEE2397DA2911D79A6F1E896E8563B637667339_size8_w240_h240.gif', 'sticker/BB/017F53920C60E280F7D98C223DDDF1F0BCC562D0_size12_w240_h240.gif', 'sticker/BB/E253F2C0D3A05EFCB216BB6686B424676F61BB13_size16_w240_h240.gif', 'sticker/BB/466D6F26A858D6893422BBE7A9D65B938FC3A15F_size30_w240_h240.gif', 'sticker/BB/D44A73E68B636D425881349FB161497E1FF57C98_size28_w240_h240.gif', 'sticker/BB/929AC0C6462D4C0980078C0494133D576CB4973A_size54_w240_h240.gif', 'sticker/BB/94EA799FD1BEDF608DB3F9154276142F4C22FDAF_size13_w240_h240.gif', 'sticker/BB/80FD0FEBF3C95B38865DB393901C73398B768D25_size10_w240_h240.gif', 'sticker/BB/D75EE57B7BE7986BE27AF2D9DCA88C294FD8191C_size12_w240_h240.gif', 'sticker/BB/BD7912DB08565F9FF5292944834B7B4F28E37C7A_size9_w240_h240.gif', 'sticker/BB/5B586F288C6007CD9EECAAAFF6DC339D39B0D7DB_size21_w240_h240.gif', 'sticker/BB/D8D5A4A90E3B6C71362B147F05D2CADC57EDB7A2_size13_w240_h240.gif', 'sticker/BB/8930C36479A7F7F3B486F492BB53DFBA78BB75D8_size61_w240_h240.gif', 'sticker/BB/410CCE7EF00AF08DFC0CFF308AE12FB36846C359_size10_w240_h240.gif', 'sticker/BB/036A2DFCB2416D08A6155B93C8B840E2993A60F2_size13_w240_h240.gif', 'sticker/BB/411E7A1258D2FCFC4377FFF5A61759392F4B901D_size25_w240_h240.gif', 'sticker/BB/0D09A42CF9D608BFD12D1831783474B0FAEFBB70_size17_w240_h240.gif', 'sticker/BB/94B46531DB7B878333929D06E665E253D511CC00_size13_w240_h240.gif', 'sticker/BB/2FE07A08F7EA35FC89BE80F295E77D160DB0F436_size56_w240_h240.gif'];
      var cookingStickers = ['sticker/cooking/003-shrimp.png', 'sticker/cooking/011-meat.png', 'sticker/cooking/021-salt.png', 'sticker/cooking/039-noodles.png', 'sticker/cooking/036-soup.png', 'sticker/cooking/026-cutlery.png', 'sticker/cooking/002-boiling.png', 'sticker/cooking/028-whisk.png', 'sticker/cooking/001-chef-hat.png', 'sticker/cooking/023-woman.png', 'sticker/cooking/009-barbecue-1.png', 'sticker/cooking/024-butcher-knife.png', 'sticker/cooking/022-kitchen-pack.png', 'sticker/cooking/014-mixing.png', 'sticker/cooking/018-pancake.png', 'sticker/cooking/013-chicken.png', 'sticker/cooking/029-spatula.png', 'sticker/cooking/047-fried-rice.png', 'sticker/cooking/008-barbecue.png', 'sticker/cooking/042-blender.png', 'sticker/cooking/025-sink.png', 'sticker/cooking/043-toaster.png', 'sticker/cooking/006-carrot.png', 'sticker/cooking/041-refrigerator.png', 'sticker/cooking/015-mixer.png', 'sticker/cooking/005-potato.png', 'sticker/cooking/044-frying-pan.png', 'sticker/cooking/049-boiling-1.png', 'sticker/cooking/032-egg.png', 'sticker/cooking/010-steak.png', 'sticker/cooking/050-cooking.png', 'sticker/cooking/046-cheese.png', 'sticker/cooking/016-pour.png', 'sticker/cooking/037-soup-1.png', 'sticker/cooking/004-leek.png', 'sticker/cooking/019-ketchup-bottle.png', 'sticker/cooking/045-groceries.png', 'sticker/cooking/035-dough.png', 'sticker/cooking/038-water.png', 'sticker/cooking/031-flour.png', 'sticker/cooking/012-chef.png', 'sticker/cooking/020-pepper.png', 'sticker/cooking/007-fish.png', 'sticker/cooking/030-honey.png', 'sticker/cooking/040-noodles-1.png', 'sticker/cooking/033-rolling-pin.png', 'sticker/cooking/017-microwave.png', 'sticker/cooking/034-apron.png', 'sticker/cooking/027-ladle.png', 'sticker/cooking/048-frying.png'];
      var paymentStickers = ['sticker/payment/003-western-union-2.png', 'sticker/payment/005-western-union.png', 'sticker/payment/047-2co.png', 'sticker/payment/029-generali.png', 'sticker/payment/014-postepay.png', 'sticker/payment/007-visa.png', 'sticker/payment/006-wepay.png', 'sticker/payment/041-bitcoin.png', 'sticker/payment/032-ebay.png', 'sticker/payment/008-unionpay.png', 'sticker/payment/040-bluepay.png', 'sticker/payment/039-cirrus.png', 'sticker/payment/042-bbb-1.png', 'sticker/payment/025-jcb.png', 'sticker/payment/022-mastercard-2.png', 'sticker/payment/009-switch.png', 'sticker/payment/031-eventbrite.png', 'sticker/payment/043-bbb.png', 'sticker/payment/038-citi.png', 'sticker/payment/016-paypoint.png', 'sticker/payment/037-clickbank.png', 'sticker/payment/036-diners-club.png', 'sticker/payment/046-amazon.png', 'sticker/payment/033-e.png', 'sticker/payment/019-paypal.png', 'sticker/payment/018-paypal-1.png', 'sticker/payment/017-paypal-2.png', 'sticker/payment/013-sage.png', 'sticker/payment/028-google-wallet.png', 'sticker/payment/044-authorize.png', 'sticker/payment/001-worldpay.png', 'sticker/payment/020-o.png', 'sticker/payment/021-moneygram.png', 'sticker/payment/023-mastercard-1.png', 'sticker/payment/030-eway.png', 'sticker/payment/045-american-express.png', 'sticker/payment/012-shopify.png', 'sticker/payment/034-discover.png', 'sticker/payment/035-direct-debit.png', 'sticker/payment/024-mastercard.png', 'sticker/payment/010-standard-chartered.png', 'sticker/payment/004-western-union-1.png', 'sticker/payment/027-hsbc.png', 'sticker/payment/015-picknplay.png', 'sticker/payment/002-wirecard.png', 'sticker/payment/011-spotify.png', 'sticker/payment/026-ideal.png'];
      var recycleStickers = ['sticker/recycle/045-recycling-center-1.png', 'sticker/recycle/046-presentation.png', 'sticker/recycle/009-tag.png', 'sticker/recycle/019-light-bulb.png', 'sticker/recycle/021-can.png', 'sticker/recycle/043-recycling-center.png', 'sticker/recycle/033-gas-station.png', 'sticker/recycle/007-recycling-bin.png', 'sticker/recycle/044-bottle.png', 'sticker/recycle/037-water.png', 'sticker/recycle/030-tree.png', 'sticker/recycle/024-laptop.png', 'sticker/recycle/039-monitor.png', 'sticker/recycle/036-tag-1.png', 'sticker/recycle/008-battery.png', 'sticker/recycle/040-water-1.png', 'sticker/recycle/004-pin.png', 'sticker/recycle/050-faucet.png', 'sticker/recycle/015-heart.png', 'sticker/recycle/047-recycling-2.png', 'sticker/recycle/038-recycling-bin-1.png', 'sticker/recycle/028-sun.png', 'sticker/recycle/035-gasoline.png', 'sticker/recycle/022-certificate.png', 'sticker/recycle/012-battery-1.png', 'sticker/recycle/016-recycling-truck.png', 'sticker/recycle/013-file.png', 'sticker/recycle/025-smartphone.png', 'sticker/recycle/005-package.png', 'sticker/recycle/027-barrel.png', 'sticker/recycle/032-pills.png', 'sticker/recycle/029-shirt.png', 'sticker/recycle/002-glass-recycling.png', 'sticker/recycle/023-shopping-bag.png', 'sticker/recycle/049-money-bag.png', 'sticker/recycle/001-recycling.png', 'sticker/recycle/020-package-1.png', 'sticker/recycle/014-settings.png', 'sticker/recycle/003-recycling-1.png', 'sticker/recycle/006-factory.png', 'sticker/recycle/042-ecology.png', 'sticker/recycle/048-leaf.png', 'sticker/recycle/011-apple.png', 'sticker/recycle/017-shopping-cart.png', 'sticker/recycle/010-recycling-bag.png', 'sticker/recycle/026-package-2.png', 'sticker/recycle/034-trash.png', 'sticker/recycle/041-notebook.png', 'sticker/recycle/031-envelope.png', 'sticker/recycle/018-recycle.png'];
      var social_networkingStickers = ['sticker/social_networking/instagram.png', 'sticker/social_networking/soundcloud.png', 'sticker/social_networking/tumblr.png', 'sticker/social_networking/swarm.png', 'sticker/social_networking/flickr.png', 'sticker/social_networking/facebook.png', 'sticker/social_networking/dribbble.png', 'sticker/social_networking/pinterest.png', 'sticker/social_networking/vk.png', 'sticker/social_networking/twitter.png', 'sticker/social_networking/deviantart.png', 'sticker/social_networking/badoo.png', 'sticker/social_networking/google-plus.png', 'sticker/social_networking/linkedin.png', 'sticker/social_networking/behance.png', 'sticker/social_networking/lastfm.png'];
      if (App.theme == "Random")
        App.theme = themes[Math.floor(Math.random() * 6)];
      if (App.theme == "Avatar")
        stickers = avatarStickers.slice();
      else if (App.theme == "Cooking")
        stickers = cookingStickers.slice();
      else if (App.theme == "Payment")
        stickers = paymentStickers.slice();
      else if (App.theme == "Recycling")
        stickers = recycleStickers.slice();
      else if (App.theme == "Social Networking")
        stickers = social_networkingStickers.slice();
      else if (App.theme == "BB")
        stickers = BBStickers.slice();
      for (var step = 0; step < App.numStickers; step++)
      {
        var randomIndex = Math.floor(Math.random() * stickers.length)
        randomStickersURL.push(stickers[randomIndex])
      }

      reader.onload = (e) => {
        var uploadedPic = new Image();
        var finalPic = new Image();

        var c = document.getElementById("canvas")
        var ctx = c.getContext("2d");

        uploadedPic.onload = function() {
          c.width = 500;
          c.height = 350;
          ctx.drawImage(uploadedPic, 0, 0, c.width, c.height);
          ctx.globalAlpha = 1.0;  // Transparency

          for (var step = 0; step < App.numStickers; step++)
            createMyImage(step);

          function createMyImage(i)
          {
            var someSticker = new Image();
            someSticker.onload = function() {
              var stickerWidth = c.width/4.0;
              var stickerHeight = c.width/4.0;
              var randomStickerX = Math.random() * (c.width-stickerWidth);
              var randomStickerY = Math.random() * (c.height-stickerHeight);
              ctx.drawImage(someSticker, randomStickerX, randomStickerY, stickerWidth, stickerHeight);
              ctx.globalAlpha = 1.0;  // Transparency]
            }
            someSticker.src = randomStickersURL[i];
          }
            // ctx.drawImage(sticker1, 180, 100, stickerWidth, stickerHeight);
            /*
            ctx.font = "19px san-serif";
            ctx.fillStyle = "#ff0000";
            ctx.fillText("Get a premium account to get these cats out of your picture!", 20, 7*c.height/8.0);
            ctx.textBaseline = "middle";
            ctx.textAlign = "center";
            */
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
.file-upload{display:block;text-align:center;font-family: Helvetica, Arial, sans-serif;font-size: 12px;}
.file-upload .file-select{display:block;border: 2px solid #dce4ec;color: #34495e;cursor:pointer;height:40px;line-height:40px;text-align:left;background:#FFFFFF;overflow:hidden;position:relative;}
.file-upload .file-select .file-select-button{background:#dce4ec;padding:0 10px;display:inline-block;height:40px;line-height:40px;}
.file-upload .file-select .file-select-name{line-height:40px;display:inline-block;padding:0 10px;}
.file-upload .file-select:hover{border-color:#34495e;transition:all .2s ease-in-out;-moz-transition:all .2s ease-in-out;-webkit-transition:all .2s ease-in-out;-o-transition:all .2s ease-in-out;}
.file-upload .file-select:hover .file-select-button{background:#34495e;color:#FFFFFF;transition:all .2s ease-in-out;-moz-transition:all .2s ease-in-out;-webkit-transition:all .2s ease-in-out;-o-transition:all .2s ease-in-out;}
.file-upload.active .file-select{border-color:#3fa46a;transition:all .2s ease-in-out;-moz-transition:all .2s ease-in-out;-webkit-transition:all .2s ease-in-out;-o-transition:all .2s ease-in-out;}
.file-upload.active .file-select .file-select-button{background:#3fa46a;color:#FFFFFF;transition:all .2s ease-in-out;-moz-transition:all .2s ease-in-out;-webkit-transition:all .2s ease-in-out;-o-transition:all .2s ease-in-out;}
.file-upload .file-select input[type=file]{z-index:100;cursor:pointer;position:absolute;height:100%;width:100%;top:0;left:0;opacity:0;filter:alpha(opacity=0);}
.file-upload .file-select.file-select-disabled{opacity:0.65;}
.file-upload .file-select.file-select-disabled:hover{cursor:default;display:block;border: 2px solid #dce4ec;color: #34495e;cursor:pointer;height:40px;line-height:40px;margin-top:5px;text-align:left;background:#FFFFFF;overflow:hidden;position:relative;}
.file-upload .file-select.file-select-disabled:hover .file-select-button{background:#dce4ec;color:#666666;padding:0 10px;display:inline-block;height:40px;line-height:40px;}
.file-upload .file-select.file-select-disabled:hover .file-select-name{line-height:40px;display:inline-block;padding:0 10px;}

#displayedPic {
  height: 300px;
}
</style>