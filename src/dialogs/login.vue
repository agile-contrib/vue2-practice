<template>
    <form novalidate autocomplete="off" ref="loginForm">
        <div class='login-view'>

            <input type="text" placeholder="请输入用户名" name="用户名（username）" v-model="params.username"
                v-input-check="[params.username, 'required']">

            <input type="password" placeholder="请输入密码" name="密码（password）" v-model="params.password"
                v-input-check="[params.password, 'required']">

            <button @click.prevent='doLogin()'>登录</button>
        </div>
    </form>
</template>
<script>
    export default {
        data() {
            return {
                params: {
                    username: "",
                    password: ""
                }
            };
        },
        methods: {
            doLogin() {

                this.$validateCheck(this.$refs.loginForm, () => {

                    this.$store.commit('setUserinfo', {
                        username: this.params.username
                    });

                    this.$store.state.closeDialog();

                }, (error) => {

                    //   表单非法提示
                    this.alert(error.$error, "错误提示", () => {

                        // 然后在第一个方法的输入框聚焦
                        error.$el.focus();

                    });

                });

            }
        }
    };
</script>
<style lang="scss" scoped>
    .login-view {
        width: 3rem;
        background-color: #efefef70;
        text-align: center;
        margin: auto;
        margin-top: 2rem;
        padding: .3rem 0;

        &>input,
        &>button {
            width: 2.4rem;
            height: .4rem;
            margin: .2rem 0;
            outline: none;
        }

        &>input {
            padding: .1rem;

        }

        &>button {
            background: #2193b0;
            background: -webkit-linear-gradient(to top, #6dd5ed, #2193b0);
            background: linear-gradient(to top, #6dd5ed, #2193b0);
            color: white;
            cursor: pointer;

        }
    }
</style>
