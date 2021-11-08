// Put your application javascript here
const store = Vue.reactive({
  state: {
    cart: {
      items: [],
      hidden: true,
    },
    menu: {
      hidden: true,
    },
  },

  async getCart() {
    try {
      const response = await fetch("/cart.js");
      const cartData = await response.json();
      this.state.cart.items.unshift(cartData);
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
