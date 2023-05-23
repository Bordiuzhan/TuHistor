import { useState, ChangeEvent, FormEvent } from 'react';
import { Form, RegisterBtn } from './RegisterForm.styled';

// interface AppContextType {
//   signIn: (data: any) => void; // Замініть 'any' на відповідний тип
// }

const RegisterForm = (): JSX.Element => {
  //   const { signIn } = useContext<AppContextType>(AppContext);
  const [register, setRegister] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [email, setEmail] = useState<string>('');

  const [error, setError] = useState<string>('');

  const handleEmailChange = (e: ChangeEvent<HTMLInputElement>): void => {
    setEmail(e.target.value);
    setError('');
  };

  const handleRegisterChange = (e: ChangeEvent<HTMLInputElement>): void => {
    setRegister(e.target.value);
    setError('');
  };

  const handlePasswordChange = (e: ChangeEvent<HTMLInputElement>): void => {
    setPassword(e.target.value);
    setError('');
  };

  const handleSubmit = async (e: FormEvent): Promise<void> => {
    e.preventDefault();
    // axiosInst()
    //   .post('/auth/register', { register, password })
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
      <h2>Зареєструватись</h2>
      <label htmlFor="email"> Email</label>
      <input
        name="email"
        required
        type="text"
        value={email}
        onChange={handleEmailChange}
      />
      <label htmlFor="register">Логін</label>
      <input
        name="register"
        required
        type="text"
        value={register}
        onChange={handleRegisterChange}
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
      <RegisterBtn type="submit">Увійти</RegisterBtn>
    </Form>
  );
};

export default RegisterForm;
