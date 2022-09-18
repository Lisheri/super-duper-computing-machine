<template>
  <div>
    <button @click="handleClick"><slot /></button>
  </div>
</template>

<script>
export default {
  name: 'LgButton',
  data() {
    return {}
  },
  components: {},
  created() {},
  mounted() {},
  methods: {
    handleClick(e) {
      this.$emit('click', e);
      e.preventDefault();
    }
  }
}
</script>
<style lang="scss" scoped></style>
