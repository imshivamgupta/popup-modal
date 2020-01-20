Vue.component("notification", {
  props: ["step", "brand"],
  template: "#notification"
});
Vue.component("multi-tab", {
  template: "#multi-tab"
});
Vue.component("calling-card", {
  props: {
    clientname: String,
    heading: String,
    loader: Boolean,
    incoming: Boolean,
    calling: Boolean,
    connecting: Boolean,
    connectingError: String
  },
  template: "#calling-card"
});
Vue.component("permission-card", {
  props: {
    heading: String,
    type: String,
    icon: Boolean,
    loader: Boolean,
    permission: Boolean,
    connected: Boolean
  },
  template: "#permission-card"
});
new Vue({
  el: "#app"
});
