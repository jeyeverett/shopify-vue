// Put your application javascript here
const store = Vue.reactive({
  state: {
    cart: {
      items: [],
      hidden: true,
    },
    products: {},
    menu: {
      hidden: true,
    },
  },

  async getCart() {
    try {
      const response = await fetch("/cart.js");
      const cartData = await response.json();
      this.state.cart.items = cartData;
    } catch (err) {
      console.log(err);
    }
  },

  async addToCart(data) {
    try {
      const response = await fetch("/cart/add.js", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        // throw error
      }

      //refresh the cart (store.getCart() is defined in application.js) then open it
      await this.getCart();
      this.toggleCart();
    } catch (err) {
      console.log(err);
    }
  },

  async getProductData(productHandle) {
    try {
      const response = await fetch(`/products/${productHandle}.js`);
      return await response.json();
    } catch (err) {
      console.log(err);
    }
  },

  toggleCart() {
    this.state.cart.hidden = !this.state.cart.hidden;
    this.state.menu.hidden = true;
  },

  toggleMenu() {
    this.state.menu.hidden = !this.state.menu.hidden;
    this.state.cart.hidden = true;
  },

  closeAll() {
    this.state.cart.hidden = true;
    this.state.menu.hidden = true;
  },
});
