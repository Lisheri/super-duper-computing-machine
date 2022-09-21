import Input from '../src/input.vue';
import { mount } from '@vue/test-utils';

// lg-input 这一组测试的名字
describe('lg-input', () => {
  // 在test中添加描述, 这里测试生成的文本框
  test('input-text', () => {
    // 调用expect之前需要在内存中挂载组件, mount方法返回一个包裹器
    const wrapper = mount(Input);
    // 判断组件生成的包裹器中是否包含type为text
    // 将expect生成的值与匹配器进行比较, 这里使用包含匹配器, 满足包含则通过测试
    expect(wrapper.html()).toContain('input type="text"');
  })

  // 测试密码框
  test('input-password', () => {
    const wrapper = mount(Input, {
      // 设置组件的props属性
      propsData: { type: 'password' }
    })
    expect(wrapper.html()).toContain('input type="password"');
  })

  // 测试value值
  test('input-value', () => {
    const wrapper = mount(Input, {
      // 设置组件的props属性
      propsData: { type: 'password', value: 'admin' }
    })
    // wrapper.props('value)获取props中的value值
    expect(wrapper.props('value')).toBe('admin')
  })

  // 测试snapshot
  test('input-snapshot', () => {
    const wrapper = mount(Input, {
      // 设置组件的props属性
      propsData: { type: 'password', value: 'admin' }
    })
    // 调用快照API, 首次调用时, 将快照存储到一个特定文件中, 也就是快照文件
    // 当第二次执行测试时, 会将当前结果和快照结果进行对比, 如果一致则成功, 否则失败
    // 如果需要生成新的快照, 则使用 yarn jest -u
    expect(wrapper.vm.$el).toMatchSnapshot()
  })
})
