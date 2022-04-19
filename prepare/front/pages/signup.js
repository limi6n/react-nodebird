import React, { useCallback, useState } from "react";
import Head from 'next/head';
import { Button, Checkbox, Form, Input } from 'antd';
import styled from "styled-components";

import AppLayout from '../components/AppLayout';
import useInput from "../hooks/useInput";

const ErrorMessage = styled.div`
  color: red;
`;

const Signup = () => {
  const [id, onChageId] = useInput('');
  const [nickname, onChageNickname] = useInput('');
  const [password, onChagePassword] = useInput('');

  const [passwordError, setPasswordError] = useState(false);
  const [passwordCheck, setPasswordCheck] = useState('');
  const onChagePasswordCheck = useCallback((e) => {
    setPasswordCheck(e.target.value);
    setPasswordError(e.target.value !== password); // 비밀번호 일치여부 확인 -> 커스텀훅 못씀
  });

  const [termError, setTermError] = useState(false);
  const [term, setTerm] = useState('');
  const onChageTerm = useCallback((e) => {
    setTerm(e.target.checked);
    setTermError(false); // 약관동의체크 확인 -> 커스텀훅 못씀
  });

  const onSubmit = useCallback(() => {
    if (password !== passwordCheck) {
      return setPasswordError(true);
    }
    if (!term) {
      return setTermError(true);
    }
    console.log(id, nickname, password);
  }, [password, passwordCheck, term]);
  
  return (
    <AppLayout>
      <Head>
          <title>회원가입 | NodeBird</title>
      </Head>
      <Form onFinish={onSubmit}>
        <div>
          <label htmlFor="user-id">아이디</label>
          <br />
          <Input name="user-id" value={id} required onChange={onChageId} />
        </div>
        <div>
          <label htmlFor="user-nickname">닉네임</label>
          <br />
          <Input name="user-nickname" value={nickname} required onChange={onChageNickname} />
        </div>
        <div>
          <label htmlFor="user-password">비밀번호</label>
          <br />
          <Input name="user-password" type="password" value={password} required onChange={onChagePassword} />
        </div>
        <div>
          <label htmlFor="user-password-check">비밀번호 체크</label>
          <br />
          <Input 
            name="user-password-chek" 
            type="password" 
            value={passwordCheck} 
            required 
            onChange={onChagePasswordCheck} />
            {passwordError && <ErrorMessage>비밀번호가 일치하지 않습니다.</ErrorMessage>}
        </div>
        <div>
          <Checkbox name="use-term" checked={term} onChange={onChageTerm}>약관에 동의합니다.</Checkbox>
          {termError && <ErrorMessage>약관에 동의하셔야 합니다.</ErrorMessage>}
        </div>
        <div style={{ marginTop: 10 }}>
          <Button type="primary" htmlType="submit">가입하기</Button>
        </div>
      </Form>
    </AppLayout>
  )
};

export default Signup;
