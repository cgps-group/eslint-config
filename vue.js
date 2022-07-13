/* requires eslint-plugin-vue^7.6.0 */
module.exports = {
  "extends": [
    // https://github.com/vuejs/eslint-plugin-vue#priority-a-essential-error-prevention
    // consider switching to `plugin:vue/strongly-recommended` or `plugin:vue/recommended` for stricter rules.
    "plugin:vue/strongly-recommended",
  ],
  "rules": {
    "vue/attributes-order": [ "error" ],
    "vue/order-in-components": [ "error" ],
    "vue/require-default-prop": 0,
    "vue/v-bind-style": [ "error", "longform" ],
    "vue/v-on-style": [ "error", "longform" ],
  },
};
