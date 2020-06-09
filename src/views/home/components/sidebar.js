import React, { memo } from 'react';
import { SideBar, SideUl, SideLi, ProList, Proa, Proimg} from '../style';

const Sidebar = memo(() => {
  return(
    <SideBar>
      <SideUl>
        <SideLi>
          <span>手机 电话卡</span>
          <span className='iconfont'>&#xe63e;</span>
          <ProList className='prolist'>
            <Proa>
              <Proimg src='https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/9f26030d7d914b86daca51233a3ac5f9.jpg?thumb=1&w=40&h=40&f=webp&q=90'></Proimg>
              <span>小背包</span>
            </Proa>
            <Proa>
              <Proimg src='https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/9f26030d7d914b86daca51233a3ac5f9.jpg?thumb=1&w=40&h=40&f=webp&q=90'></Proimg>
              <span>小背包</span>
            </Proa>
            <Proa>
              <Proimg src='https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/9f26030d7d914b86daca51233a3ac5f9.jpg?thumb=1&w=40&h=40&f=webp&q=90'></Proimg>
              <span>小背包</span>
            </Proa>
            <Proa>
              <Proimg src='https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/9f26030d7d914b86daca51233a3ac5f9.jpg?thumb=1&w=40&h=40&f=webp&q=90'></Proimg>
              <span>小背包</span>
            </Proa>
            <Proa>
              <Proimg src='https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/9f26030d7d914b86daca51233a3ac5f9.jpg?thumb=1&w=40&h=40&f=webp&q=90'></Proimg>
              <span>小背包</span>
            </Proa>
            <Proa>
              <Proimg src='https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/9f26030d7d914b86daca51233a3ac5f9.jpg?thumb=1&w=40&h=40&f=webp&q=90'></Proimg>
              <span>小背包</span>
            </Proa>
            <Proa>
              <Proimg src='https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/9f26030d7d914b86daca51233a3ac5f9.jpg?thumb=1&w=40&h=40&f=webp&q=90'></Proimg>
              <span>小背包</span>
            </Proa>
          </ProList>
        </SideLi>
        <SideLi><span>电视 盒子</span><span className='iconfont'>&#xe63e;</span></SideLi>
        <SideLi><span>笔记本 显示器 平板</span><span className='iconfont'>&#xe63e;</span></SideLi>
        <SideLi><span>家电 插线板</span><span className='iconfont'>&#xe63e;</span></SideLi>
        <SideLi><span>出行 穿戴</span><span className='iconfont'>&#xe63e;</span></SideLi>
        <SideLi><span>智能 路由器</span><span className='iconfont'>&#xe63e;</span></SideLi>
        <SideLi><span>电源 配件</span><span className='iconfont'>&#xe63e;</span></SideLi>
        <SideLi><span>健康 儿童</span><span className='iconfont'>&#xe63e;</span></SideLi>
        <SideLi><span>耳机 音箱</span><span className='iconfont'>&#xe63e;</span></SideLi>
        <SideLi><span>生活 箱包</span><span className='iconfont'>&#xe63e;</span></SideLi>
      </SideUl>
    </SideBar>
  )
})

export default Sidebar;
