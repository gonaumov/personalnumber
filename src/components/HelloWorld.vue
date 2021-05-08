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
  watch: {
    selectedDate: {
      handler: 'handleDateChange',
    },
  },
})
export default class HelloWorld extends Vue {
  msg!: string;

  selectedDate: Date = new Date();

  personalNumber: string | false = false;

  handleDateChange(newDate: Date): void {
    const day = newDate.getDate();
    const month = newDate.getMonth() + 1;
    const year = newDate.getFullYear();
    const numbers = [
      ...day.toString().split('').map((num) => parseInt(num, 10)),
      ...month.toString().split('').map((num) => parseInt(num, 10)),
      ...year.toString().split('').map((num) => parseInt(num, 10)),
    ];

    const calculateSum = (input: number[]): string => input.reduce((acc, current) => {
      const sum = acc + current;
      return sum;
    }, 0).toString(10);

    let result = calculateSum(numbers);

    while (result.length !== 1) {
      result = calculateSum(result.split('').map((num) => parseInt(num, 10)));
    }

    this.personalNumber = result;
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
</style>
