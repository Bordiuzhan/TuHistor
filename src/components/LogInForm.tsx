import { useState, ChangeEvent, FormEvent } from 'react';
import { Form, LoginBtn } from './LogInForm.styled';

// interface AppContextType {
//   signIn: (data: any) => void; // Замініть 'any' на відповідний тип
// }

const LogInForm = (): JSX.Element => {
  //   const { signIn } = useContext<AppContextType>(AppContext);
  const [login, setLogin] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  const [error, setError] = useState<string>('');

  const handleLoginChange = (e: ChangeEvent<HTMLInputElement>): void => {
    setLogin(e.target.value);
    setError('');
  };

  const handlePasswordChange = (e: ChangeEvent<HTMLInputElement>): void => {
    setPassword(e.target.value);
    setError('');
  };

  const handleSubmit = async (e: FormEvent): Promise<void> => {
    e.preventDefault();
    // axiosInst()
    //   .post('/auth/login', { login, password })
    //   .then((res) => {
    //     signIn(res.data);
    //   })
    //   .catch((e) => {
    //     console.log(e);
    //     setError(e?.response?.data?.message);
    //   });
  };

  return (
    <Form onSubmit={handleSubmit}>
      <h2>Увійти</h2>
      <label htmlFor="login">Логін</label>
      <input
        name="login"
        required
        type="text"
        value={login}
        onChange={handleLoginChange}
      />
      <label htmlFor="password">Пароль</label>
      <input
        name="password"
        required
        type="password"
        value={password}
        onChange={handlePasswordChange}
      />
      {error && <div>{error}</div>}
      <LoginBtn type="submit">Увійти</LoginBtn>
    </Form>
  );
};

export default LogInForm;
