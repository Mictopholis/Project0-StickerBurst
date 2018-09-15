<template>
    <div>
        <v-form ref="form">
            <v-container grid-list-md>
                <v-layout row wrap>

                <v-text-field
                    v-model="username"
                    label="Username"
                    required
                ></v-text-field>

                <v-text-field
                    v-model="password"
                    label="Password"
                    required
                ></v-text-field>

                <v-btn
                    color="green"
                    :disabled="username=='' || password=='' "
                    v-on:click="clear"
                    >Submit
                </v-btn>

                </v-layout>
            </v-container>
        </v-form>
    </div>
</template>

<script>
export default {
    data: () => ({
      username: '',
      password: '',
      loop: 0,
      usernameCorrect: false,
      passwordCorrect: false,
      AcceptedUsernames: ["User1","User2","User3"],
      AcceptedPasswords: ["passypass","pusheen","MarioKart"],
    }),
    methods: {
        clear: function(){
            console.log("USERNAME: "+this.username)
            console.log("PASSWORD: "+this.password)
            for (this.loop = 0; this.loop<this.AcceptedUsernames.length; this.loop++) { 
                if(this.username==this.AcceptedUsernames[this.loop]){
                    this.usernameCorrect=true;
                    console.log(this.usernameCorrect)
                }
            }
            this.$refs.form.reset()
        }

    }

};
</script>

<style>

</style>
