let app = Vue.createApp(
  {
    el: '#app-root',
    data() {
      return {
        albums: [
          {
            title: "Album 1",
            artist: "Artist 1",
            genre: "Hip Hop"
          },
          {
            title: "Album 2",
            artist: "Artist 2",
            genre: "Pop"
          },
          {
            title: "Album 3",
            artist: "Artist 3",
            genre: "Rock"
          },
        ],
        genres: [
          "Hip Hop",
          "Pop",
          "Rock"
        ]
        // message: "Hello Vue",
        // firstName: "",
        // lastName: "",
        // showBtn: true
      }
    },
    methods: {
      addAlbum() {
        this.albums.push({ title: "Album", artist: "Artist" });
      },
      removeAlbum(album) {
        this.albums.splice(this.albums.indexOf(album), 1);
      },
      // reverse() {
      //   let tempName = this.firstName;
      //   this.firstName = this.lastName;
      //   this.lastName = tempName;

      // }
    },
  });
app.mount("#app-root");