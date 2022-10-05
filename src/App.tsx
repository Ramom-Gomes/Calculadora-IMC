import { useState } from 'react';
import styles from './App.module.css'
import powered from './imagens/powered.png';
import VoltarImage from './imagens/leftarrow.png';
import {ContadorImc, level, Levels} from './ajudador/imc';
import {GridItem} from './components/GridItem';

const App = () => {
  const [Altura, SetAltura] = useState<number>(0);
  const [Peso, SetPeso] = useState<number>(0);
  const [Show, SetShow] = useState<level | null>(null);
  
  const Calcular = () => {
    if(Altura && Peso) {
      SetShow(ContadorImc(Altura, Peso));
    } else {
      alert('Preencha todos os campos')
    }
  }

  const VoltarFunction = () => {
    SetShow(null);
    SetAltura(0);
    SetPeso(0);
  }

  return(
    <div className={styles.main}>
      <header>
        <div className={styles.HeaderContainer}>
          <img src={powered} alt="" width={150}/>
        </div>
      </header>
      <div className={styles.Container}>
        <div className={styles.LadoEsquerdo}>
          <h1>Calcule o seu IMC.</h1>
          <p>IMC é a sigla para Índice de Massa Corpórea, parâmetro adotado pela Organização Mundial de Saúde para calcular o peso ideal de cada pessoa.</p>
          <input type="number" 
          placeholder='Digite a sua altura. Ex: 1.5 (em metros)'
          value={Altura > 0 ? Altura : ''}
          onChange={e => SetAltura(parseFloat(e.target.value))}
          disabled={Show ? true : false}
          />
          <input type="number" 
          placeholder='Digite o seu Peso. Ex: 75.5 (em KG)'
          value={Peso > 0 ? Peso : ''}
          onChange={e => SetPeso(parseFloat(e.target.value))}
          disabled={Show ? true : false}
          />
          <button onClick={Calcular} disabled={Show ? true : false}>Calcular</button>
        </div>
        <div className={styles.LadoDireito}>
          {!Show &&
            <div className={styles.grid}>
              {Levels.map((item, key) => (
                <GridItem key={key} item={item}/>
              ))}
            </div>
          }
          {Show &&
            <div className={styles.DireitoGrande}>
              <div className={styles.Voltar} onClick={VoltarFunction}>
                <img src={VoltarImage} alt="" width={25} />
              </div>
              <GridItem item={Show}/>
            </div>
          }
        </div>
      </div>
    </div>
  );
}

export default App;
