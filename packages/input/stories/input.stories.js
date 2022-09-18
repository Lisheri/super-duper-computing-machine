import LgInput from '..';

export default {
  title: 'LgInput',
  component: LgInput
}

export const Text = () => {
  return {
    components: { LgInput },
    data() {
      return {
        value: 'admin'
      }
    },
    render() {
      return <LgInput v-model={this.value} />
    }
  }
}

export const Password = () => {
  return {
    components: { LgInput },
    data() {
      return {
        value: 'admin'
      }
    },
    render() {
      return <LgInput v-model={this.value} type="password" />
    }
  }
}

