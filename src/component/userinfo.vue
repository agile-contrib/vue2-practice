<template>
    <div class='userinfo-view'>
        <div v-if='$store.getters.isLogin' class='login'>
            <span></span>
        </div>
        <div v-else class='unlogin'>
            <span @click='$store.state.openDialog("login")'>
                去登录
            </span>
        </div>
    </div>
</template>
<script>
    export default {
        name: "userinfo"
    };
</script>
<style lang="scss" scoped>
    .userinfo-view {
        float: right;
        margin-right: .5rem;
        position: relative;

        &>div {
            &>span {
                display: inline-block;
                vertical-align: top;
            }

            &.login {
                &>span {
                    width: 0.5rem;
                    height: 0.5rem;
                    background-image: url('../assets/girl-hai2007.png');
                    background-position: center;
                    background-repeat: no-repeat;
                    background-size: 90% auto;
                }
            }

            &.unlogin {
                &>span {
                    font-size: .14rem;
                    background-color: #41b783;
                    color: white;
                    height: 0.3rem;
                    line-height: .2rem;
                    padding: 0.05rem;
                    margin-top: .1rem;
                    cursor: pointer;
                    border-radius: 0.05rem;

                    &:hover {
                        background-color: #39cf8e;
                    }
                }
            }
        }
    }
</style>
