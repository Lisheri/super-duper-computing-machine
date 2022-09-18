<template>
  <div>
    <label>{{ label }}</label>
    <div>
      <slot />
      <p v-if="errMsg">{{ errMsg }}</p>
    </div>
  </div>
</template>

<script>
import AsyncValidator from 'async-validator'
export default {
  name: 'LgFormItem',
  inject: ['form'],
  provide() {
    return {
      validate: this.validate
    }
  },
  props: {
    label: {
      type: String
    },
    prop: {
      type: String
    }
  },
  data() {
    return {
      errMsg: ''
    }
  },
  mounted() {
    // this.$on('validate', () => {
    //   this.validate();
    // })
  },
  methods: {
    validate() {
      if (!this.prop) {
        return
      }
      // 获取需要验证的数据
      const value = this.form.models?.[this.prop]
      // 获取验证数据的rule
      const rules = this.form.rules?.[this.prop]

      const descriptor = { [this.prop]: rules }
      const validator = new AsyncValidator(descriptor)

      return validator.validate({ [this.prop]: value }, (errors) => {
        if (errors) {
          this.errMsg = errors[0].message
        } else {
          this.errMsg = ''
        }
      })
    }
  }
}
</script>
<style lang="scss" scoped></style>
