<template>
  <div>
    <input :type="type" :value="value" @input="handleInput" v-bind="$attrs" />
  </div>
</template>

<script>
export default {
  name: 'LgInput',
  inject: ['validate'],
  // 禁止将继承属性添加到最外层节点上
  inheritAttrs: false,
  props: {
    value: {
      type: String
    },
    type: {
      type: String,
      default: 'text'
    }
  },
  data() {
    return {}
  },
  components: {},
  created() {},
  mounted() {},
  methods: {
    handleInput(e) {
      this.$emit('input', e.target.value)
      // const findParent = parent => {
      //   while(parent) {
      //     if (parent.$options.name === 'LgFormItem') {
      //       break
      //     } else {
      //       parent = parent.$parent;
      //     }
      //   }
      //   return parent;
      // }
      // const parent = findParent(this.$parent);
      // 通知父组件
      // parent && parent.$emit('validate');
      this.validate && this.validate();
    }
  }
}
</script>
<style lang="scss" scoped></style>
