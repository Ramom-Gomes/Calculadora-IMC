import { level } from "../ajudador/imc";
import styles from './GridItem.module.css';
import UpImage from '../imagens/up.png';
import DownImage from '../imagens/down.png';

type Props = {
    item: level;
}

export const GridItem = ({item}: Props) => {
    return(
        <div className={styles.main} style={{backgroundColor: item.color}}>
            <div className={styles.icon}>
                <img src={item.icon === 'up' ? UpImage : DownImage} alt="" width={30} />
            </div>
            <div className={styles.titulo}>{item.title}</div>
            {item.seuImc &&
                <div className={styles.seuimc}>Seu IMC é de {item.seuImc} kg/m²</div>
            }
            <div className={styles.info}>
                <>
                    IMC esta emtre <strong>{item.imc[0]}</strong> e <strong>{item.imc[1]}</strong>
                </>
            </div>
        </div>
    );
}