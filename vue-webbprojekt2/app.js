let app = Vue.createApp({
  data() {
    return {
      showHeader: true,
      isBouncing: false,
      isHidden: true,
      cartAmount: 0,
      cartCounter: 1,
      totalPrice: 0,
      priceNumber: 0,
      hideNav: true,
      crumbs: {
        type: Array,
        required: true,
      },
      products: {
        ["Product 1"]: {
          name: "Product 1",
          label: "KONGSFJORD",
          category: "Kategori: Sängar",
          measure: "Mått: 180x200 cm",
          imgURL: 'https://www.ikea.com/se/sv/images/products/kongsfjord-kontinentalsaeng-vagstranda-medium-fast-tustna-djuparp-moerkgra__0891293_pe782260_s5.jpg?',
          price: '4699 kr',
          total: "Antal: ",
        },
        ["Product 2"]: {
          name: "Product 2",
          label: "LOMMEDALEN",
          category: "Kategori: Sängar",
          measure: "Mått: 160x200 cm",
          imgURL: 'https://www.ikea.com/se/sv/images/products/dunvik-kontinentalsaeng-vagstranda-medium-fast-tuddal-moerkgra__0860050_pe574693_s5.jpg?',
          price: '7300 kr',
          total: "Antal: ",
        },
        ["Product 3"]: {
          name: "Product 3",
          label: "DUNVIK",
          category: "Kategori: Sängar",
          measure: "Mått: 160x200 cm",
          imgURL: 'https://www.ikea.com/se/sv/images/products/dunvik-kontinentalsaeng-valevag-medium-fast-tuddal-gunnared-beige__0945616_pe797752_s5.jpg?',
          price: '5999 kr',
          total: "Antal: ",
        },
        ["Product 4"]: {
          name: "Product 4",
          label: "KALLAX",
          category: "Kategori: Bokhyllor",
          measure: "Mått: 40x28x202 cm",
          imgURL: 'https://www.ikea.com/se/sv/images/products/billy-bokhylla-vit__0625599_pe692385_s5.jpg?',
          price: '999 kr',
          total: "Antal: ",
        },
        ["Product 5"]: {
          name: "Product 5",
          label: "GERSBY",
          category: "Kategori: Bokhyllor",
          measure: "Mått: 60x180 cm",
          imgURL: 'https://www.ikea.com/se/sv/images/products/billy-oxberg-bokhylla-med-doerrar-vit__0667847_pe714123_s5.jpg?',
          price: '1300 kr',
          total: "Antal: ",
        },
        ["Product 6"]: {
          name: "Product 6",
          label: "Billy",
          category: "Kategori: Bokhyllor",
          measure: "Mått: 40x28x106 cm",
          imgURL: 'https://www.ikea.com/se/sv/images/products/billy-bokhylla-vit__0451902_pe600832_s5.jpg?',
          price: '3599 kr',
          total: "Antal: ",
        },
        ["Product 7"]: {
          name: "Product 7",
          label: "SYVDE",
          category: "Kategori: Garderob",
          measure: "Mått: 150x66x236 cm",
          imgURL: 'https://www.ikea.com/se/sv/images/products/pax-tjoerhom-garderobskombination-vit__1080727_pe858169_s5.jpg?',
          price: '4300 kr',
          total: "Antal: ",
        },
        ["Product 8"]: {
          name: "Product 8",
          label: "PAX / MEHAMN",
          category: "Kategori: Garderob",
          measure: "Mått: 150x66x201 cm",
          imgURL: 'https://www.ikea.com/se/sv/images/products/pax-garderob-vit-faervik-vitt-glas__0383261_pe557304_s5.jpg?',
          price: '5 900kr',
          total: "Antal: ",
        },
        ["Product 9"]: {
          name: "Product 9",
          label: "PAX / HOKKSUND",
          category: "Kategori: Garderob",
          measure: "Mått: 150x66x236 cm",
          imgURL: 'https://www.ikea.com/se/sv/images/products/pax-hokksund-garderob-vit-hoegglans-ljusgra__1103777_pe867381_s5.jpg?',
          price: '7 900kr',
          total: "Antal: ",
        },
      },

      cart: {},
    }
  },
  methods: {
    isLast(index) {
      return index === this.crumbs.length - 1;
    },
    selected(crumb) {
      this.$emit('selected', crumb);
    },
    addToCart(product) {

      this.isHidden = false;
      this.isBouncing = true;
      setTimeout(() => this.isBouncing = false, 200);
      if (this.cart[product.name]) {
        this.cart[product.name].total += 1;
        this.cartAmount = this.cartCounter;

      }
      else {
        this.cart[product.name] = { total: 1 };
        this.cartAmount = this.cartCounter;
      }

      let priceString = this.products[product.name].price.replace('kr', '').replaceAll(' ', '');
      this.priceNumber = parseInt(priceString);
      this.totalPrice += this.priceNumber;
      console.log(this.priceNumber, this.totalPrice);
      this.saveStorage();
    },

    removeItem(key) {
      this.cart[key].total -= 1;
      this.cartCounter -= 1;
      this.cartAmount -= 1;
      this.totalPrice -= this.priceNumber;
      if (this.cart[key].total === 0) {
        delete this.cart[key];
      }
      console.log(this.priceNumber, this.totalPrice);
    },
    openStorage() {
      return JSON.parse(localStorage.getItem('cart')) || [];
    },
    saveStorage() {
      localStorage.setItem('cart', JSON.stringify(this.cartAmount));
    },
    beforeMount() {
      openStorage();
      const storedCart = this.openStorage();
      if (storedCart) {
        this.cartAmount = {
          ...this.cartAmount,
          ...storedCart
        };
        console.log(storedCart);
      }
    },
  },
})
app.mount("#app-root");