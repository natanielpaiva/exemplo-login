import { useRouter } from 'next/router';
import styles from '../styles/Home.module.css'; // Importando estilos CSS

const Home = () => {
  const router = useRouter();

  const handleLogout = () => {
    // Simula um logout
    // Redireciona para a tela de login
    router.push('/');
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Tela Inicial</h1>
      <p className={styles.message}>Bem-vindo! Você está logado.</p>
      <button className={styles.logoutButton} onClick={handleLogout}>Logout</button>
    </div>
  );
};

export default Home;
