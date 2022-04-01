let app = new Vue({
  el: "#app-root",
  data() {
    return {
      message: "Hello vue",
      numbers: [1, 2, 3, 4, 5, 6, 7, 8, 9, ],
      buttonIsVisible: true
    }
  },
  methods: {
    toggleButton() {
      console.log("toggling...");
      this.buttonIsVisible = !this.buttonIsVisible;
    }
  },
});
