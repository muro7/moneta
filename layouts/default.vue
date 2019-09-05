<template>
  <v-app>
    <v-app-bar app>
      <button onclick="history.back()">
        <v-icon>mdi-keyboard-backspace</v-icon>
      </button>
      <!--
      <v-btn @click=""><v-icon>mdi-keyboard-backspace</v-icon></v-btn>

      <v-app-bar-nav-icon>
        <nuxt-link to="/">
          <v-icon>mdi-keyboard-backspace</v-icon>
        </nuxt-link>
      </v-app-bar-nav-icon>
      -->
      <v-toolbar-items>
        <v-btn class="title" to="/" text>Top画面へ</v-btn>
      </v-toolbar-items>
      <v-toolbar-items>
        <v-btn class="title" nuxt to="login" text>ログアウト</v-btn>
      </v-toolbar-items>
      <v-spacer></v-spacer>
      <!--
      <v-app-bar-nav-icon>
        <nuxt-link to="/" tag="div">
          <v-icon>mdi-bank</v-icon>
        </nuxt-link>
      </v-app-bar-nav-icon>
      -->
      <v-toolbar-title>
        <p class="body-1 my-0">{{ bank | name }}</p>
        <p class="body-1 my-0">{{ branch | name }}</p>
      </v-toolbar-title>
      <!--
      <v-toolbar-items>
        <v-btn class="title" nuxt to="/" text>{{ account | name }}様</v-btn>
      </v-toolbar-items>
      -->
      <v-toolbar-title>
        <p class="body-3 my-10 ml-3">{{ account | name }}様</p>
        <!-- https://vuetifyjs.com/en/styles/spacing を参照-->
      </v-toolbar-title>


    </v-app-bar>
    <v-content>
      <v-container fluid>
        <v-layout align-start justify-center>
          <v-flex xs12 sm12 md8 xl8>
            <nuxt />
          </v-flex>
        </v-layout>
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  computed: {
    ...mapGetters("login", ["account", "branch", "bank"]),
  },
};
</script>
