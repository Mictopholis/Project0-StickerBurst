<template>
  <div>
  <v-layout id="login" row wrap>
  <v-layout column wrap>
    <v-flex xs4>
      <v-text-field v-if="loggedIn == 0"
              v-model="input.username"
              label="Username"
              hint="At least 8 characters"
              clearable
              @click:append="show1 = !show1"
      ></v-text-field>
    </v-flex>

    <v-spacer/>

    <v-flex xs4>
        <v-text-field v-if="loggedIn == 0"
                v-model="input.password"
                :rules="[rules.required, rules.min]"
                :type="show1 ? 'text' : 'password'"
                position="relative"
                name="input-10-1"
                label="Password"
                hint="At least 8 characters"
                clearable
                @click:append="show1 = !show1"
        ></v-text-field>
    </v-flex>
    </v-layout>
    <v-flex xs3>
        <v-btn v-if="loggedIn == 0"
                color="success"
                v-on:click="login">Login
        </v-btn>
    </v-flex>
    <v-flex xs3>
        <v-btn v-if="loggedIn"
                color="error"
                v-on:click="logout">Logout
        </v-btn>
    </v-flex>

  </v-layout>
  </v-layout>
  </div>

</template>

<script>
import { EventBus } from '../main.js';

  export default {
    data () {
      return {
        show1: false,
        input: {
          username: "",
          password: ""
        },
        rules: {
          required: value => !!value || 'Required.',
          min: v => v.length >= 8 || 'Min 8 characters',
        },
        accounts: [
          "garrett4",
          "texasfight",
          "csrules4",
          "chicken4"
        ],
        passwords: [
          "odomodom",
          "longhorns",
          "aerorules",
          "biscuit4"
        ],
        access: [
          1,
          1,
          2,
          2
        ],
        loop: 0,
        loggedIn: 0,
        tierlevel: 0,
      }
    },
    methods: {
      login: function (event) {
        this.loggedIn = 0
        for (this.loop = 0; this.loop < this.accounts.length; this.loop++) {
          if(this.input.username == this.accounts[this.loop] && this.input.password == this.passwords[this.loop] && this.loggedIn == 0) {
            alert('Logged in as ' + this.input.username + '\nTier ' + this.access[this.loop] + ' Access')
            this.loggedIn = 1
            this.tierlevel = this.access[this.loop]
            EventBus.$emit('tierinfo',this.tierlevel);
          }
        }
        if (this.loggedIn == 0) {
          alert('Invalid Login Credentials. Please Try Again.')
        }
      },
      logout: function (event) {
        this.loggedIn = 0
        alert('Logged Out')
      }
    }
  }

</script>

<style>
#login {
  position: relative;
  top: 32px;
}
</style>
