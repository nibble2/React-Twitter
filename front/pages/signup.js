import React, { useState, useCallback } from 'react' ;
import { Form, Input, Checkbox, Button } from 'antd' ;

// momo를 이용한 지나친 최적화 (?)
// const TextInput = memo(({ value, onChange }) => {
//     return (
//         <Input name="user-id" value={id} requiered onChange={onChange} />
//     ) ;
// }) ;

const signup = () => {
    const [id, setId] = useState('') ;
    const [nick, setNick] = useState('') ;
    const [password, setPassword] = useState('') ;
    const [passwordCheck, setPasswordCheck] = useState('') ;
    const [term, setTerm] = useState(false) ;
    const [passwordError, setPasswordError] = useState(false) ;
    const [termError, setTermError] = useState(false) ;

    // 커스텀 훅스
    /* const useInput = (initValue = null) => {
        const [value, setter] = useState('') ;
        const handler = e => {
            setter(e.target.value) ;
        } ;
        return [value, handler] ;
    } ;

    const [id, onChangeId] = useInput('') ; 
    */
    
    const onSubmit = useCallback((e) => {
        e.preventDefault() ;
        if (password !== passwordCheck){
            return setPasswordError(true) ;
        }
        if (!term) {
            return setTermError(true) ;
        }
    }, [password, passwordCheck, term]) ;

    const onChangeId = useCallback((e) => {
        setId(e.target.value) ;
    }, []) ;

    const onChangeNick = useCallback((e) => {
        setNick(e.target.value) ;
    }, []) ;

    const onChangePassWord = useCallback((e) => {
        setPassword(e.target.value) ;
    }, []);

    const onChangePassWordCheck = useCallback((e) => {
        setPasswordError(e.target.value !== password) ;
        setPasswordCheck(e.target.value) ;
    }, [password] );

    const onChangeTerm = useCallback((e) => {
        setTermError(false) ;
        setTerm(e.target.checked)
    }, [] );

    return(
    <>
        <Form onSubmit={onSubmit} style={{ padding: 10 }}>
            <div>
                <label htmlFor="user-id">아이디</label>
                <br />
                <Input name="user-id" value={id} required onChange={onChangeId} />
            </div>
            <div>
                <label htmlFor="user-nick">닉네임</label>
                <br />
                <Input name="user-nick" value={nick} required onChange={onChangeNick} />
            </div>
            <div>
                <label htmlFor="user-password">비밀번호</label>
                <br />
                <Input name="user-password" type="password" value={password} required onChange={onChangePassWord} />
            </div>
            <div>
                <label htmlFor="user-password-check">비밀번호 체크</label>
                <br />
                <Input name="user-password-check" type="password" value={passwordCheck} required onChange={onChangePassWordCheck} />
                {passwordError && <div style={{ color: 'red' }}>비밀번호가 일치하지 않습니다. </div>}
            </div>
            <div>
                <Checkbox name="user-term" value="term" value={term} onChange={onChangeTerm}>1일 1컷일을 할 것을 동의합니다. </Checkbox>
                {termError && <div style={{ color: 'red' }}>약관에 동의하셔야 합니다.</div>}
            </div>
            <div style={{ marginTop: 10 }}>
                <Button type="primary" htmlType="submit">가입하기</Button>
            </div>
        </Form>
    </>
    ) ;
} ;

export default signup ;