import LgForm from '../';
import LgFormItem from '../../formItem';
import LgInput from '../../input';
import LgButton from '../../button';

export default {
  title: 'LgForm',
  component: LgForm
};

export const Login = () => {
  return {
    components: {
      LgForm,
      LgFormItem,
      LgInput,
      LgButton
    },
    data() {
      return {
        rules: {
          username: [
            {
              required: true,
              message: '请输入用户名'
            }
          ],
          password: [
            {
              required: true,
              message: '请输入密码'
            },
            {
              min: 6,
              max: 12
            }
          ]
        },
        user: {
          username: '',
          password: ''
        }
      }
    },
    methods: {
      login() {
        this.$refs.form.validate(valid => {
          if (valid) {
            alert('ok');
          } else {
            alert('error');
            return false;
          }
        });
      }
    },
    render(h) {
      return <lg-form class="form" ref="form" models={this.user} rules={this.rules}>
        <lg-form-item label="用户名" prop="username">
          <lg-input v-model={this.user.username} placeholder="请输入用户名" />
        </lg-form-item>
        <lg-form-item label="密码" prop="password">
          <lg-input type="password" v-model={this.user.password} placeholder="请输入密码" />
        </lg-form-item>
        <lg-form-item>
          <lg-button type="primary" onClick={this.login}>登 录</lg-button>
        </lg-form-item>
      </lg-form>;
    },
  };
};
