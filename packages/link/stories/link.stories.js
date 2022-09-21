import LgLink from '../src/link.vue';

export default {
  title: 'LgLink',
  component: LgLink
}

export const Link = _ => {
  return {
    components: {
      LgLink
    },
    render() {
      return <div>
        <lg-link></lg-link>
      </div>
    }
  }
}
