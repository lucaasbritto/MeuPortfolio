export default {
  name: 'MenuComponent',
  
  props: {
    menuItems: {
      type: Array,
      required: true
    }
  },

  methods: {
    handleClick(item) {
      this.$emit('item-click', item);
    }
  }

};
