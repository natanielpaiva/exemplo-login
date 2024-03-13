import { useState } from 'react';
import { useRouter } from 'next/router';
import styles from '../styles/Login.module.css'; // Importando estilos CSS

const Login = () => {
  const [loggedIn, setLoggedIn] = useState(false);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const router = useRouter();

  const handleLogin = () => {
    // Verifica se os campos de usuário e senha não estão vazios
    if (username.trim() === '' || password.trim() === '') {
      alert('Por favor, preencha os campos de usuário e senha.');
      return;
    }

     // Verifica se o usuário e a senha correspondem aos valores esperados
     if (username.trim() === '@natanieltech' && password.trim() === 'mesiga') {
        // Simula um login bem-sucedido
        setLoggedIn(true);
        // Redireciona para a tela inicial
        router.push('/home');
      } else {
        alert('Usuário ou senha incorretos.');
      }
  };

  return (
    <div className={styles.container}>
      {!loggedIn ? (
        <div className={styles.formContainer}>
          <h1>Tela de Login</h1>
          <input
            type="text"
            placeholder="Usuário"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className={styles.input}
          />
          <input
            type="password"
            placeholder="Senha"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className={styles.input}
          />
          <button className={styles.loginButton} onClick={handleLogin}>Login</button>
        </div>
      ) : (
        <p>Redirecionando...</p>
      )}
    </div>
  );
};

export default Login;
