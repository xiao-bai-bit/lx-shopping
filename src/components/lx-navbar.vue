<script setup lang='ts'>
import { ref } from "@vue/reactivity";

const buy = ref<HTMLElement>();
const subMenu = () => {
  // buy.value!.style.display = 'block'
  buy.value?.children[1].setAttribute("src", "src/assets/images/navbar/sup.png");
  buy.value?.children[2].setAttribute("style", "display:block");
};

const supMenu = () => {
  buy.value?.children[1].setAttribute("src", "src/assets/images/navbar/sub.png");
  buy.value?.children[2].setAttribute("style", "display:none");
};
</script>

<template>
  <div class="lx-navbar">
    <div class="container">
      <div class="lx-navbar-left">
        <ul>
          <li>
            <a href="javascript:alert('功能未开发，敬请期待。。。')"
              >联想首页</a
            >
          </li>
          <li>
            <a href="javascript:alert('功能未开发，敬请期待。。。')">商城</a>
          </li>
          <li>
            <a href="javascript:alert('功能未开发，敬请期待。。。')">企业购</a>
          </li>
          <li>
            <a href="javascript:alert('功能未开发，敬请期待。。。')"
              >政教及大企业</a
            >
          </li>
          <li>
            <a href="javascript:alert('功能未开发，敬请期待。。。')">服务</a>
          </li>
          <li>
            <a href="javascript:alert('功能未开发，敬请期待。。。')">品牌</a>
          </li>
          <li>
            <a href="javascript:;">下载app</a>
            <img src="@/assets/images/navbar/下载-app.jpg" alt="" />
          </li>
        </ul>
      </div>

      <div class="lx-navbar-right">
        <div class="lx-navbar-right-nav">
          <ul>
            <li>
              <a href="javascript:alert('功能未开发，敬请期待。。。')">会员</a>
            </li>
            <li>
              <a href="javascript:alert('功能未开发，敬请期待。。。')">社区</a>
            </li>
            <li ref="buy" @mouseover="subMenu()" @mouseout="supMenu()">
              <a href="javascript:alert('功能未开发，敬请期待。。。')">购买</a>
              <img src="@/assets/images/navbar/sub.png" alt="" />
              <ul>
                <li>
                  <a href="javascript:alert('功能未开发，敬请期待。。。')"
                    >商城</a
                  >
                </li>
                <li>
                  <a href="javascript:alert('功能未开发，敬请期待。。。')"
                    >企业购</a
                  >
                </li>
                <li>
                  <a href="javascript:alert('功能未开发，敬请期待。。。')"
                    >门店</a
                  >
                </li>
              </ul>
            </li>
          </ul>
        </div>

        <div class="lx-navbar-loginRegister">
          <a href="javascript:alert('功能未开发，敬请期待。。。')">注册</a>
          <i></i>
          <a href="javascript:alert('功能未开发，敬请期待。。。')">登录</a>
          <div class="lx-navbar-phone">
            <img src="@/assets/images/navbar/icon-phone.png" alt="" />
            <div>
              <img src="@/assets/images/navbar/appCode.jpg" alt="" />
              <div>
                <p>联想智选App</p>
                <p>新人专享0元购</p>
                <p>领999元优惠券</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="less">
.lx-navbar {
  height: 40px;
  background: #41444c;

  .container {
    display: flex;
    justify-content: space-between;

    .lx-navbar-left {
      ul > li {
        position: relative;
        &:hover {
          > img {
            display: block;
          }
        }
        > img {
          display: none;
          position: absolute;
          top: 40px;
          left: -40px;
          width: 232px;
          height: 124px;
        }
      }
    }
    .lx-navbar-right {
      display: flex;
      justify-content: space-between;
      align-items: center;

      .lx-navbar-right-nav {
        position: relative;
        > ul > li > ul {
          position: absolute;
          top: 40px;
          left: 60px;
          min-width: 100px;
          padding: 0 10px;
          display: none;
          background-color: #41444c;

          li {
            width: 100%;
            text-align: center;
            a {
              font-size: 13px;
            }
          }
        }
      }

      .lx-navbar-loginRegister {
        display: flex;
        align-items: center;
        margin-left: 35px;
        a {
          font-size: 12px;
          margin: 0 5px;
          color: #b5b5b5;

          &:hover {
            color: #ffffff;
          }
        }

        i {
          border-left: 1px solid #b8b8b8;
          height: 11px;
          display: inline-block;
          margin: auto 2px;
        }

        .lx-navbar-phone {
          position: relative;
          &:hover {
            > div {
              display: flex;
            }
          }
          > img {
            margin-left: 10px;
            width: 22px;
            height: 22px;
          }
          > div {
            display: none;
            position: absolute;
            left: -75px;

            height: 92px;
            margin: 12px 0 0 12px;
            > img {
              width: 80px;
              height: 80px;
            }
            p {
              display: inline-block;
              width: 90px;
              margin: 0 5px;
              font-size: 12px;
              color: #f10315;
            }
            p:first-child {
              margin: 7px 5px;
              color: #000000;
              font-size: 13px;
            }
          }
        }
      }
    }

    ul {
      display: flex;
      li {
        margin-right: 22px;
        line-height: 40px;
        img {
          margin-left: 3px;
          width: 12px;
          height: 7.2px;
        }
        a {
          font-size: 12px;
          color: #b5b5b5;

          &:hover {
            color: #ffffff;
          }
        }
      }
    }
  }
}
</style>