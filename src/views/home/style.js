import Style from 'styled-components';

export const HomeContent = Style.div`
  position: relative;
  width: 1226px;
  margin-left: auto;
  margin-right: auto;
`;
export const SwiperContent = Style.div`
  background: skyblue;
  width: 1226px;
  height: 460px;
  .swiper-example{
    width: 1226px;
    height: 460px;
    img{
      width: 1226px;
      height: 460px;
    }
  }
`;
export const SideBar = Style.div`
  position: absolute;
  top: 0;
  left: 0px;
  width: 234px;
  height: 460px;
  background: rgba(105,101,101,.6);
  z-index: 10;
`;
export const SideUl = Style.ul`
  position: relative;
  padding: 20px 0;
  color: #fff;
`;
export const SideLi = Style.li`
  font-size: 14px;
  padding: 0 10px 0 30px;
  height: 42px;
  line-height: 42px;
  cursor: pointer;
  &:hover{
    background: #ff6700;
    div:last-child{
      display: block;
    }
  }
  .iconfont{
    display: inline-block;
    float: right;
  }
`;
export const ProList = Style.div`
  position: absolute;
  top: 0;
  left: 234px;
  width: 992px;
  height: 458px;
  background: #fff;
  border: 1px solid #e0e0e0;
  border-left: 0;
  box-shadow: 0 8px 16px rgba(0,0,0,.18);
  z-index: 2;
  background: #fff;
  display: none;
`;
export const Proa = Style.a`
  width: 248px;
  height: 76px;
  padding: 18px 20px;
  box-sizing: border-box;
  display: block;
  color: #333;
  float: left;
  span{
    display: inline-block;
    float: left;
  }
}`;
export const Proimg = Style.img`
  display: inline-block;
  width: 40px;
  height: 40px;
  margin-right: 12px;
  float: left;
`;
export const Banners = Style.div`
  margin: 14px 0 0 -10px;
  img{
    display: inline-block;
    width: 299px;
    height: 170px;
    margin-left: 10px;
  }
`;

export const AllGoods = Style.div`
  background: #f5f5f5;
`;
export const Bigbanner = Style.div`
  width: 1226px;
  margin: 20px auto;
  padding-top: 20px;
`;
export const GoodTitle = Style.div`
  width: 1226px;
  margin: 20px auto;
  font-size: 22px;
  font-weight: 200;
  line-height: 58px;
  color: #333;
`;
export const GoodShow = Style.div`
  width: 1226px;
  margin: 20px auto;
  display: flex;
  .banner{
    margin-bottom: 14px;
    transition: all .2s linear;
    img{
      width: 234px;
      height: 634px;
    }
    &:hover{
      box-shadow: 0 15px 30px rgba(0,0,0,.1);
      transform: translate3d(0,-2px,0);
    }
  }
  .goodtype{
    li{
      float: left;
      width: 234px;
      height: 310px;
      padding: 20px 0;
      margin-left: 14px;
      margin-bottom: 14px;
      background: #fff;
      transition: all .2s linear;
      text-align: center;
      color: #333;
      font-size: 14px;
      img{
        display: inline-block;
        width: 160px;
        height: 160px;
        margin: 0 auto 18px;
      }
      .name{
        margin: 0 10px 2px;
      }
      .dis{
        margin: 0 10px 10px;
        height: 18px;
        font-size: 12px;
        color: #b0b0b0;
      }
      .price{
        margin: 0 10px 14px;
        color: #ff6700;
      }
      &:hover{
        box-shadow: 0 15px 30px rgba(0,0,0,.1);
        transform: translate3d(0,-2px,0);
      }
    }
  }
`;
