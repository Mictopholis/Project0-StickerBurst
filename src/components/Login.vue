<template>
    <div>
        <v-form>
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
                    v-on:click="logg"
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
      AcceptedUsernames: ["User1","User2","User3"],
      AcceptedPasswords: ["passypass","pusheen","MarioKart"],
    }),
    methods: {
        logg: function() {
            console.log("USERNAME: "+this.username)
            console.log("PASSWORD: "+this.password)
        },

    }

};
</script>

<style>

</style>
