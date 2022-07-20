<script setup lang='ts'>
</script>

<template>
  <footer class="lx-footer">
    <div class="lx-footer-serverImg">
      <img src="@/assets/images/footer/server.png" alt="" />
    </div>

    <div class="container lx-footer-server">
      <ul>
        <li>
          <a href="javascript:alert('功能未开发，敬请期待。。。')">购物指南</a>

          <a href="javascript:alert('功能未开发，敬请期待。。。')"
            >服务商信息</a
          >
          <a href="javascript:alert('功能未开发，敬请期待。。。')">购买流程</a>
          <a href="javascript:alert('功能未开发，敬请期待。。。')">注册登录</a>
          <a href="javascript:alert('功能未开发，敬请期待。。。')">商品评价</a>
        </li>
        <li>
          <a href="javascript:alert('功能未开发，敬请期待。。。')">配送方式</a>

          <a href="javascript:alert('功能未开发，敬请期待。。。')">配送方式</a>
          <a href="javascript:alert('功能未开发，敬请期待。。。')"
            >配送方式信息</a
          >
          <a href="javascript:alert('功能未开发，敬请期待。。。')">签收原则</a>
          <a href="javascript:alert('功能未开发，敬请期待。。。')">物流查询</a>
        </li>
        <li>
          <a href="javascript:alert('功能未开发，敬请期待。。。')">支付方式</a>

          <a href="javascript:alert('功能未开发，敬请期待。。。')">分期支付</a>
          <a href="javascript:alert('功能未开发，敬请期待。。。')">支付方式</a>
          <a href="javascript:alert('功能未开发，敬请期待。。。')">支付问题</a>
        </li>
        <li>
          <a href="javascript:alert('功能未开发，敬请期待。。。')">订单信息</a>

          <a href="javascript:alert('功能未开发，敬请期待。。。')">订单信息</a>
          <a href="javascript:alert('功能未开发，敬请期待。。。')">发票信息</a>
          <a href="javascript:alert('功能未开发，敬请期待。。。')"
            >手机激活查询</a
          >
        </li>
        <li>
          <a href="javascript:alert('功能未开发，敬请期待。。。')">售后服务</a>

          <a href="javascript:alert('功能未开发，敬请期待。。。')"
            >售后服务总则</a
          >
          <a href="javascript:alert('功能未开发，敬请期待。。。')"
            >24小时在线客服</a
          >
          <a href="javascript:alert('功能未开发，敬请期待。。。')"
            >联想服务入口</a
          >
          <a href="javascript:alert('功能未开发，敬请期待。。。')"
            >热门解决方案</a
          >
          <a href="javascript:alert('功能未开发，敬请期待。。。')"
            >Lenovo Quick Fix工具</a
          >
        </li>
        <li>
          <a href="javascript:alert('功能未开发，敬请期待。。。')">其他说明</a>

          <a href="javascript:alert('功能未开发，敬请期待。。。')">服务承诺</a>
          <a href="javascript:alert('功能未开发，敬请期待。。。')">账户安全</a>
          <a href="javascript:alert('功能未开发，敬请期待。。。')"
            >手机产品购买须知</a
          >
          <a href="javascript:alert('功能未开发，敬请期待。。。')">环境信息</a>
        </li>
        <li>
          <div class="lx-footer-service">
            <h3>400-166-6666</h3>
            <p>周一到周日 9:00-21:00</p>
            <a href="javascript:alert('功能未开发，敬请期待。。。')">
              在线咨询
            </a>
          </div>
        </li>
      </ul>
    </div>

    <div class="lx-footer-serial">
      <div class="container">
        <ul>
          <li>
            <a href="javascript:alert('功能未开发，敬请期待。。。')"
              >版权所有：1998-2022 联想集团</a
            >
          </li>
          <li>
            <a href="javascript:alert('功能未开发，敬请期待。。。')"
              >法律公告</a
            >
          </li>
          <li>
            <a href="javascript:alert('功能未开发，敬请期待。。。')"
              >隐私权政策</a
            >
          </li>
          <li>
            <a href="javascript:alert('功能未开发，敬请期待。。。')"
              >产品安全</a
            >
          </li>
        </ul>

        <ul>
          <li>
            <a href="javascript:alert('功能未开发，敬请期待。。。')"
              >京ICP备11035381-2</a
            >
          </li>
          <li>
            <a href="javascript:alert('功能未开发，敬请期待。。。')"
              >京ICP备11035381-2</a
            >
          </li>
          <li>
            <a href="javascript:alert('功能未开发，敬请期待。。。')"
              >营业执照:91110108700000458B</a
            >
          </li>
          <li>
            <a href="javascript:alert('功能未开发，敬请期待。。。')"
              >增值电信业务许可证 合字B2-20210143</a
            >
          </li>
        </ul>
      </div>
    </div>
  </footer>
</template>

<style scoped lang="less">
.lx-footer {
  .lx-footer-serverImg {
    background: #ffffff;
    img {
      display: block;
      margin: auto;
      width: 1200px;
      height: 200px;
    }
  }
  .lx-footer-server {
    ul {
      display: flex;
      padding: 70px 0 70px 76px;
      li {
        display: flex;
        width: 152px;
        flex-direction: column;
        .lx-footer-service {
          width: 100%;

          h3 {
            color: rgb(225, 20, 10);
            font-weight: 700;
            font-size: 20px;
          }
          p {
            font-size: 12px;
            color: rgb(117, 117, 117);
          }
          a {
            display: block;
            margin-top: 10px;
            border: 1px solid rgb(117, 117, 117);
            font-size: 18px;
            text-align: center;
            padding: 5px 15px;

            &:hover {
              color: rgb(225, 20, 10);
              border: 1px solid rgb(225, 20, 10);
            }
          }
        }

        &:last-child {
          margin-left: 5px;
          padding-left: 58px;
          border-left: 1px solid rgb(204, 204, 204);
        }

        a:first-child {
          color: rgb(66, 66, 66);
          font-size: 16px;
          font-weight: 600;
          margin-bottom: 18px;
        }
        a {
          font-size: 13px;
          color: rgb(117, 117, 117);
          margin-bottom: 12px;
        }
      }
    }
  }

  .lx-footer-serial {
    height: 47px;
    background: #272727;
    div {
      display: flex;
      justify-content: space-between;
      ul {
        display: flex;
        li {
          a {
            padding: 0 7px;
            border-right: 1px rgb(117, 117, 117) solid;
            line-height: 47px;
            font-size: 12px;
            color: rgb(117, 117, 117);
          }

          &:last-child {
            a {
              border: none;
            }
          }
        }
      }
    }
  }
}
</style>