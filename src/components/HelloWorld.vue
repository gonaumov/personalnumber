<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <p>
      Това е малко приложение, с чиято помощ може да изчислите личното си число.
    </p>
    <h3>Просто изберете вашата дата на раждане по-долу.</h3>
    <div>
      <ul>
    <li><datepicker
      :upper-limit="new Date()"
      v-model="selectedDate"/></li>
      </ul>
    </div>
    <div v-show="personalNumber">
       Вашето лично число е: {{personalNumber}}
      <div class="description-holder">
        <hr/>
        {{description}}
        <hr/>
      </div>
    </div>
    <ul>
      <li><a href="https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-babel" target="_blank" rel="noopener">babel</a></li>
      <li><a href="https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-pwa" target="_blank" rel="noopener">pwa</a></li>
      <li><a href="https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-router" target="_blank" rel="noopener">router</a></li>
      <li><a href="https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-vuex" target="_blank" rel="noopener">vuex</a></li>
      <li><a href="https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-eslint" target="_blank" rel="noopener">eslint</a></li>
      <li><a href="https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-unit-jest" target="_blank" rel="noopener">unit-jest</a></li>
      <li><a href="https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-e2e-webdriverio" target="_blank" rel="noopener">e2e-webdriverio</a></li>
      <li><a href="https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-typescript" target="_blank" rel="noopener">typescript</a></li>
    </ul>
    <h3>Essential Links</h3>
    <ul>
      <li><a href="https://vuejs.org" target="_blank" rel="noopener">Core Docs</a></li>
      <li><a href="https://forum.vuejs.org" target="_blank" rel="noopener">Forum</a></li>
      <li><a href="https://chat.vuejs.org" target="_blank" rel="noopener">Community Chat</a></li>
      <li><a href="https://twitter.com/vuejs" target="_blank" rel="noopener">Twitter</a></li>
      <li><a href="https://news.vuejs.org" target="_blank" rel="noopener">News</a></li>
    </ul>
    <h3>Ecosystem</h3>
    <ul>
      <li><a href="https://router.vuejs.org" target="_blank" rel="noopener">vue-router</a></li>
      <li><a href="https://vuex.vuejs.org" target="_blank" rel="noopener">vuex</a></li>
      <li><a href="https://github.com/vuejs/vue-devtools#vue-devtools" target="_blank" rel="noopener">vue-devtools</a></li>
      <li><a href="https://vue-loader.vuejs.org" target="_blank" rel="noopener">vue-loader</a></li>
      <li><a href="https://github.com/vuejs/awesome-vue" target="_blank" rel="noopener">awesome-vue</a></li>
    </ul>
  </div>
</template>
<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import datepicker from 'vue3-datepicker';

@Options({
  props: {
    msg: String,
  },
  components: {
    datepicker,
  },
})
export default class HelloWorld extends Vue {
  msg!: string;

  get selectedDate(): Date {
    const { selectedDate } = this.$store.state;
    if (!selectedDate) {
      return new Date();
    }
    return selectedDate;
  }

  set selectedDate(selectedDate: Date) {
    this.$store.commit('updateDate', {
      selectedDate,
    });
  }

  get personalNumber(): string {
    return this.$store.getters.personalNumber;
  }

  get description(): string {
    return this.$store.getters.getDescription;
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
.description-holder {
  padding-left: 5%;
  padding-right: 5%;
}
</style>
