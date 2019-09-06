import {text} from "@storybook/addon-knobs";

const log = () => console.log('Welcome to storybook!');

export default {
  name: 'error-message',

  props: {
    title: {
      default: text('Text', 'Error message')
    },
    showApp: {
      type: Function,
      default: log,
    },
  },

  data() {
    return {
      section: {
        width: '480px',
        padding: '18px 24px',
        marginBottom: 18,
        borderRadius: 4,
        backgroundColor: '#FDF2F2',
        border: '1px solid #D90000',
      }
    }},


  template: `
  <section :style="section" hasTextLeft centered>
    <span title is4 isRegular>{{ title }}</span>
      <slot/>
  </section>
  `,

  methods: {
    onClick(event) {
      event.preventDefault();
      this.showApp();
    },
  },
}
