import React, { memo, useEffect } from 'react';
import { Sotr, Logo, LogoA, Species } from './style';
import '../../assets/style/scss/single/title.scss';
import { useSelector, useDispatch } from 'react-redux';
import { actionCreators } from './store';
import { Link } from 'react-router-dom';

const Title = memo(() => {
  const Data = useSelector((state) => {
    return{
      // 获取种类名称
      data: state.getIn(['title', 'data']).toJS()
    }
  })

  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(actionCreators.product()) 
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
          {
            Data.data.map(item => {
              return(
                <Species key={item.id}>
                  <span>{item.name}</span>
                  <div className='item-product'>
                    <ul className='conternt allitem'>
                      {
                        item.productList.map(data  => {
                          return(
                            <li key={data.id}>
                              <div className='itemimg'>
                                <img src={data.mainImage} alt=""/>
                              </div>
                              <div className='itenname'>{data.name}</div>
                              <div className='itemprice'>{data.price}元</div>
                            </li>
                          )
                        })
                      }
                    </ul>
                  </div>
                </Species>
              )
            })
          }
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