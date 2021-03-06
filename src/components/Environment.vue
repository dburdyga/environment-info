<template>
    <div class="cards">
      <p class="loading" v-if="loading"></p>
      <h1 class="title is-3" style="margin-bottom: 10px;">Environment info page</h1>
      <div class="tile"
      >
        <div class="tile is-ancestor" v-if="card">
          <div class="tile is-vertical is-8">
            <div class="tile">
              <div class="tile is-parent is-vertical">
                <article class="tile is-child notification is-light">
                  <p class="title is-4">{{ card.name }}</p>
                  <p class="subtitle is-6">Environment name</p>
                </article>
                <article
                  class="tile is-child notification has-background-grey-lighter"
                  v-if="card.versions">
                  <div class="content" style="margin-bottom: -20px;">
                    <p class="title is-4">{{ card.versions.versionStaxd }}</p>
                    <p class="title is-4">{{ card.versions.versionMCC }}</p>
                    <p class="title is-4">{{ card.versions.versionUI}}</p>
                  </div>
                  <p class="subtitle is-6">List of versions for main components</p>
                </article>
                <article
                  class="tile is-child notification is-light"
                  v-if="card.credentials">
                  <div class="content" style="margin-bottom: -20px;">
                    <p class="title is-4">Username: {{ card.credentials.username }}</p>
                    <p class="title is-4">Password: {{ card.credentials.password }}</p>
                  </div>
                  <p class="subtitle is-6">Credentials for read only account for Docker registry</p>
                </article>
                <article
                  class="tile is-child notification has-background-grey-lighter"
                  v-if="card.images">
                  <p class="title is-4" >{{ card.images.image1 }}</p>
                  <p class="title is-4">{{ card.images.image2 }}</p>
                  <p class="title is-4">{{ card.images.image3 }}</p>
                  <p class="subtitle is-6">List of images uploaded to Docker registry</p>
                </article>
              </div>
              <div class="tile is-parent">
                <article class="tile is-child notification has-background-grey-lighter">
                  <code class="subtitle is-7">{{ card.codeSnippets }}</code>
                  <br></br>
                  <code class="subtitle is-7">{{ card.codeSnippets }}</code>
                  <br></br>
                  <p class="subtitle is-6">Code snippets for distribution repository configuration</p>
                </article>
              </div>
            </div>
          </div>
          <div class="tile is-parent is-vertical">
            <article class="tile is-child notification is-light">
              <p class="title is-4">{{ card.addressDocker }}</p>
              <p class="subtitle is-6">Address of Docker registry</p>
            </article>
            <article class="tile is-child notification has-background-grey-lighter">
              <p class="title is-4">{{ card.addressBootnode }}</p>
              <p class="subtitle is-6">Address of bootnode</p>
            </article>
            <article class="tile is-child notification is-light">
              <p class="title is-4">{{ card.zipUrl }}</p>
              <p class="subtitle is-6">URL for Zip builds downloads (UI, Staxd)</p>
            </article>
            <article class="tile is-child notification has-background-grey-lighter">
              <p class="title is-4">{{ card.dashboardUrl }}</p>
              <p class="subtitle is-6">Logging dashboard URL</p>
            </article>
          </div>
        </div>
      </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import {FETCH_CARDS} from '@/store/cards/action-types';
import {CARDS} from '@/store/cards/getter-types';
import {ICard} from '@/shared/interfaces/ICard';

export default Vue.extend({
  data() {
    return {
      loading: false
    };
  },
  created() {
    this.loading = true;
    this.$store.dispatch(FETCH_CARDS)
      .then(() => this.loading = false)
      .catch(() => this.loading = false);
  },
  computed: {
    cards(): ICard[] {
      return this.$store.getters[CARDS];
    },
    card(): ICard {
      return this.cards[2];
    }
  }
});
</script>

<style scoped lang="scss">

.loading {
  display: inline-block;
  position: absolute;
  width: 50px;
  height: 50px;
  border: 3px solid white;
  border-radius: 50%;
  border-top-color: grey;
  margin-bottom: 20px;
  margin-left: 50%;
  animation: spin 1s ease-in-out infinite;
  -webkit-animation: spin 1s ease-in-out infinite;
}
@keyframes spin {
  to { -webkit-transform: rotate(360deg); }
}
@-webkit-keyframes spin {
  to { -webkit-transform: rotate(360deg); }
}
.cards {
  margin-bottom: 10px;
  margin-left: 20px;
  margin-right: 20px;
  margin-top: 10px;
}
.card {
  margin-left: 50px;
  margin-right: 50px;
  margin-top: 20px;
  text-align: left;
  box-shadow: none;
}
.title {
  font-weight: bold;
}
.content {
  display: flex;
  justify-content: space-between;
}
</style>
