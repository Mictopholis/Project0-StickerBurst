<template>
    <div>
        <v-form ref="form">
            <v-container grid-list-md>
                <v-layout row wrap>

                <!--username input-->
                <v-text-field
                    v-model="username"
                    label="Username"
                    required
                ></v-text-field>

                <!--password input-->
                <v-text-field
                    v-model="password"
                    label="Password"
                    required
                ></v-text-field>

                <!--submit button (disabled until inputs have text, and calls "clear" function when clicked)-->
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
    //"data" is just here to initialize all the variables we're using
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
        //the "clear" function is the one that runs when "submit" is pressed (called in <template>)
        clear: function(){
            console.log("USERNAME: "+this.username)
            console.log("PASSWORD: "+this.password)

            //iterating through our initialized array of usernames and passwords to check for matches
            for (this.loop = 0; this.loop<this.AcceptedUsernames.length; this.loop++) { 
                if(this.username==this.AcceptedUsernames[this.loop]){
                    this.usernameCorrect=true;
                }
                if(this.password==this.AcceptedPasswords[this.loop]){
                    this.passwordCorrect=true;
                }
            }

            console.log("IS USERNAME CORRECT? "+this.usernameCorrect)
            console.log("IS PASSWORD CORRECT? "+this.passwordCorrect)

            //this resets the form and clears the inputs
            this.$refs.form.reset()
            this.username=''
            this.password=''
        }

    }

};
</script>

<style>

</style>
