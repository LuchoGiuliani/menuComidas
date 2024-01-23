import { useState } from 'react';
import { useNavigate } from 'react-router-dom';  // Reemplaza useHistory con useNavigate
import styles from './login.module.css';

const Login = () => {
  const navigate = useNavigate();  // Cambia useHistory por useNavigate
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    if (username === 'Luciano' && password === '123') {
      navigate('/comidastotal'); 
    } else {
      setError('Usuario o contraseña incorrectos');
    }
  };

  return (
    <section className={styles.login_section}>
      <div className={styles.login_form}>
        <form onSubmit={handleSubmit}>
          <label htmlFor="username">Nombre de usuario</label>
          <input
            type="text"
            id="username"
            placeholder="Nombre de usuario"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />

          <label htmlFor="password">Contraseña</label>
          <input
            type="password"
            id="password"
            placeholder="Contraseña"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <button type="submit">Entrar</button>
        </form>

        {error && <p className={styles.error}>{error}</p>}
      </div>
    </section>
  );
};

export default Login;


