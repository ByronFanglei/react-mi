import React, { memo, useEffect } from 'react';
import { Sotr, Logo, LogoA, Species } from './style';
import '../../assets/style/scss/single/title.scss';
import { useSelector, useDispatch } from 'react-redux';
import { actionCreators } from './store';
import { Link } from 'react-router-dom';

const Title = memo(() => {
  const Data = useSelector((state) => {
    return{
      data: state.getIn(['title', 'data']).toJS(),
    }
  })
  const xiaomi = Data.data.filter(item => {
    return item.categoryId === 6
  })
  const redmi = Data.data.filter(item => {
    return item.categoryId === 7
  })
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(actionCreators.product()) 
    dispatch(actionCreators.productname())
  }, [dispatch])
  return (
    <Sotr>
      <div className='conternt soteinner'>
        <Logo>
          <Link to='/'>
            <LogoA />
          </Link>
        </Logo>
        <ul className='allspecie'>
          <Species>
            <span>小米手机</span>
            <div className='item-product'>
              <ul className='conternt allitem'>
                {
                  xiaomi.map((item) => (
                    <li key={item.id}>
                      <div className='itemimg'>
                        <img src={item.mainImage} alt=""/>
                      </div>
                      <div className='itenname'>{item.name}</div>
                      <div className='itemprice'>{item.price}元起</div>
                    </li>
                  ))
                }
              </ul>
            </div>
          </Species>
          <Species>
          <span>Redmi手机</span>
            <div className='item-product'>
              <ul className='conternt allitem'>
              {
                redmi.map((item) => (
                  <li key={item.id}>
                    <div className='itemimg'>
                      <img src={item.mainImage} alt=""/>
                    </div>
                    <div className='itenname'>{item.name}</div>
                    <div className='itemprice'>{item.price}元起</div>
                  </li>
                ))
              }
              </ul>
            </div>
          </Species>
          <Species>电视</Species>
          <Species>笔记本</Species>
          <Species>家电</Species>
          <Species>路由器</Species>
          <Species>智能硬件</Species>
          <Species>服务</Species>
          <Species>社区</Species>
        </ul>
        <div className='inp'>
          <input type="text"/>
          <span className='iconfont'>&#xe604;</span>
        </div>
      </div>
    </Sotr>
  )
});

export default Title;