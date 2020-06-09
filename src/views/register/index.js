import React,{ memo, useCallback, useRef } from 'react';
import { LoginAll, LoginFrom, LoginFooter } from '../login/style';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { actionCreators } from './store';
import { message } from 'antd';

const Login = memo(() => {
  const ruser = useRef(null)
  const rpass = useRef(null)
  const rtel = useRef(null)
  const rcode = useRef(null)
  const rsend = useRef(null)
  const dispatch = useDispatch()
  // 手机号验证
  const sendCode = useCallback(() => {
    if(/^1[3456789]\d{9}$/.test(rtel.current.value)){
      dispatch(actionCreators.SendCode(rtel.current.value))
      dispatch(actionCreators.changeIscode(!Data.isCode))
      var time = 60
      var timer = setInterval(() => {
        time--
        rsend.current.innerHTML = `请稍等${time}`
        if(time === 0){
          clearInterval(timer)
          rsend.current.innerHTML = `获取验证码`
          dispatch(actionCreators.changeIscode(Data.isCode))
        }
      }, 1000)
    }else{
      message.warning('手机号输入有误！！！')
    }
  }, [])
  // 注册
  const sendregister = useCallback(() => {
    if(rcode.current.value){
      dispatch(actionCreators.register(ruser.current.value, rpass.current.value, rtel.current.value, rcode.current.value))
    }else{
      message.warning('请输入验证码！！！')
    }
  }, [])
  const Data = useSelector((state) => {
    return{
      isCode: state.getIn(['register', 'isCode'])
    }
  })
  return(
    <LoginAll>
      <div>
        <Link to='/'>
          <img src={require('../../assets/static/images/login-logo.png')} alt=""/>
        </Link>
      </div>
      <LoginFrom>
        <div className='title'>
          <div>帐号注册</div>
        </div>
        <div className='userinp'>
          <input type="text" placeholder='请输入用户名' ref={ruser} />
          <input type="password" placeholder='请输入密码' ref={rpass} />
          <input type="tel" placeholder='请输入手机号' ref={rtel} />
        </div>
        <div className='userregister'>
          <input type="text" placeholder='请输入验证码' ref={rcode} />
          <div onClick={sendCode}  ref={rsend} className={Data.isCode ? 'noclick' : ''}>获取验证码</div>
        </div>
        <div className='btn' onClick={sendregister}>立即注册</div>
      </LoginFrom>
      <LoginFooter>
        永远相信美好的事情即将发生
      </LoginFooter>
    </LoginAll>
  )
});


export default Login;
