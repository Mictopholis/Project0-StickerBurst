<template>
  
  <div>
  <v-layout row wrap>
    <v-flex xs4>
      <v-text-field
              v-model="input.username"
              label="Username"
              hint="At least 8 characters"
              counter
              @click:append="show1 = !show1"
      ></v-text-field>
    </v-flex>

    <v-spacer/>

    <v-flex xs4>
        <v-text-field
                v-model="input.password"
                :rules="[rules.required, rules.min]"
                :type="show1 ? 'text' : 'password'"
                position="relative"
                name="input-10-1"
                label="Password"
                hint="At least 8 characters"
                counter
                @click:append="show1 = !show1"
        ></v-text-field>
    </v-flex>

    <v-flex xs3>
        <v-btn 
                color="success"
                v-on:click="login">Login
        </v-btn>
    </v-flex>

  </v-layout>
  </div>

</template>

<script>

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
        accounts: {
          username: "garrett4",
          password: "odomodom"
        }
      }
    },
    methods: {
      login: function (event) {
        if(this.input.username == this.accounts.username && this.input.password == this.accounts.password) {
          alert('***Direct to higher access area***')
        } else {
          alert('Invalid Login Credentials. Please Try Again.')
        }
      }
    }
  }



</script>

<style>

</style>
