import React,{ memo } from 'react'
import { BotommBar, ServerChild, Links, Link, Contact, BotA, BotSpan, InfoA } from './style';
import '../../assets/style/scss/single/footer.scss';

const Footer = memo((props) => {
  return (
    <BotommBar>
      {/* 上半部分 */}
      <div>
        <div className='conternt topbar'>
          <ul className='server'>
            <ServerChild>
              <span className='iconfont'>&#xe659;</span>
              预约维修服务
            </ServerChild>
            <ServerChild>
              <span className='iconfont'>&#xe600;</span>
              7天无理由退货
            </ServerChild>
            <ServerChild>
              <span className='iconfont'>&#xe606;</span>
              15天免费换货
            </ServerChild>
            <ServerChild>
              <span className='iconfont'>&#xe619;</span>
              满99元包邮
            </ServerChild>
            <ServerChild>
              <span className='iconfont'>&#xe61b;</span>
              520余家售后网点
            </ServerChild>
          </ul>
          <Links>
            <Link>
              <dl>
                <dt>帮助中心</dt>
                <dd>账户管理</dd>
                <dd>购物指南</dd>
                <dd>订单操作</dd>
              </dl>
              <dl>
                <dt>服务支持</dt>
                <dd>售后政策</dd>
                <dd>自助服务</dd>
                <dd>相关下载</dd>
              </dl>
              <dl>
                <dt>线下门店</dt>
                <dd>小米之家</dd>
                <dd>服务网点</dd>
                <dd>授权体验店</dd>
              </dl>
              <dl>
                <dt>关于小米</dt>
                <dd>了解小米</dd>
                <dd>加入小米</dd>
                <dd>投资者关系</dd>
                <dd>企业社会责任</dd>
                <dd>廉洁举报</dd>
              </dl>
              <dl>
                <dt>关注我们</dt>
                <dd>新浪微博</dd>
                <dd>官方微信</dd>
                <dd>联系我们</dd>
                <dd>公益基金会</dd>
              </dl>
              <dl>
                <dt>特色服务</dt>
                <dd>F 码通道</dd>
                <dd>礼物码</dd>
                <dd>防伪查询</dd>
              </dl>
            </Link>
            <Contact>
              <div className='tel'>400-100-5678</div>
              <div className='time'>8:00-18:00（仅收市话费）</div>
              <div className='btn'>
                <span className='iconfont'>&#xe603;</span>
                人工客服
              </div>
              <div className='follow'>
                关注小米：
                <span className='iconfont'>&#xe62f;</span>
                <span className='iconfont'>&#xe632;</span>
              </div>
            </Contact>
          </Links>
        </div>
      </div>
      {/* 下半部分 */}
      <div>
        <div className='conternt'>
          <div className='sites'>
            <BotA>小米商城</BotA>
            <BotSpan>|</BotSpan>
            <BotA>MIUI</BotA>
            <BotSpan>|</BotSpan>
            <BotA>米家</BotA>
            <BotSpan>|</BotSpan>
            <BotA>多看</BotA>
            <BotSpan>|</BotSpan>
            <BotA>游戏</BotA>
            <BotSpan>|</BotSpan>
            <BotA>政企服务</BotA>
            <BotSpan>|</BotSpan>
            <BotA>小米天猫店</BotA>
            <BotSpan>|</BotSpan>
            <BotA>小米集团隐私政策 </BotA>
            <BotSpan>|</BotSpan>
            <BotA>小米公司儿童信息保护规则</BotA>
            <BotSpan>|</BotSpan>
            <BotA>小米商城隐私政策</BotA>
            <BotSpan>|</BotSpan>
            <BotA>小米商城用户协议 </BotA>
            <BotSpan>|</BotSpan>
            <BotA>问题反馈</BotA>
            <BotSpan>|</BotSpan>
            <BotA>Select Location</BotA>
          </div>
          <div className='botinfo'>
            <p>
              &copy;
              <InfoA>mi.com</InfoA>
              京ICP证110507号
              <InfoA>京ICP备10046444号</InfoA>
              <InfoA>京公网安备11010802020134号</InfoA>
              <InfoA>京网文[2020]0276-042号</InfoA>
            </p>
            <p>
              <InfoA>（京）网械平台备字（2018）第00005号</InfoA>
              <InfoA>互联网药品信息服务资格证 (京)-非经营性-2014-0090</InfoA>
              <InfoA>营业执照</InfoA>
              <InfoA>医疗器械质量公告</InfoA>
            </p>
            <p>
              <InfoA>增值电信业务许可证</InfoA>
              网络食品经营备案（京）【2018】WLSPJYBAHF-12
              <InfoA>食品经营许可证</InfoA>
            </p>
            <p>
              违法和不良信息举报电话：185-0130-1238
              <InfoA>知识产权侵权投诉</InfoA>
              本网站所列数据，除特殊说明，所有数据均出自我司实验室测试
            </p>
          </div>
          <div className='botimg'>
            <img src={require('../../assets/static/images/truste.png')} alt=""/>
            <img src={require('../../assets/static/images/v-logo-2.png')} alt=""/>
            <img src={require('../../assets/static/images/v-logo-1.png')} alt=""/>
            <img src={require('../../assets/static/images/v-log-3.png')} alt=""/>
          </div>
        </div>
      </div>
    </BotommBar>
  )
})

export default Footer;