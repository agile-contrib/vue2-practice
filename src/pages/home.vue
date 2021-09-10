<template>
  <form
    novalidate
    autocomplete="off"
    ref="myform"
    class='home-page'
  >
    <div>
      <label>姓名</label>
      <input
        name="姓名（username）"
        type="text"
        v-model="param.username"
        v-input-check="[param.username, 'required']"
      />
    </div>
    <div>
      <label>号码</label>
      <input
        name="号码（phone）"
        type="text"
        v-model="param.phone"
        v-input-check="[param.phone, 'yourvalidatename']"
      />
    </div>
    <div>
      <label>密码</label>
      <input
        name="密码（password）"
        type="password"
        v-model="param.password"
        v-input-check="[param.password, 'required']"
      />
    </div>

    <button @click.prevent="doSubmit">提交</button>
  </form>
</template>
<script>
export default {
  data() {
    return {
      param: {
        username: "",
        phone: "",
        password: "",
      },
    };
  },
  methods: {
    doSubmit() {
      this.$validateCheck(
        this.$refs.myform,
        () => {
          //   表单合法，跳转
          this.alert("表单合法了");
        },
        (error) => {
          //   表单非法提示
          this.alert(error.$error, "错误提示", () => {
            // 然后在第一个方法的输入框聚焦
            error.$el.focus();
          });
        }
      );
    },
  },
};
</script>
<style lang="scss" scoped>
/* 表单合法提示 */
form.v-invalid button {
  border: 1px solid red;
}

/* 非法提示 */
input.v-invalid {
  border: 1px solid red;
}

.home-page {
  text-align: center;
  & > div {
    width: 1rem;
    margin: auto;
    margin-top: 0.2rem;
    & > label {
      display: block;
      width: 2rem;
      text-align: left;
      padding-bottom: 0.1rem;
    }
    & > input {
      padding: 0.05rem;
      outline: none;
    }
  }
  & > button {
    margin: 0.3rem 0;
    padding: 0.05rem;
    width: 1rem;
    background-color: rgb(1, 127, 201);
    color: white;
    cursor: pointer;
  }
}
</style>
