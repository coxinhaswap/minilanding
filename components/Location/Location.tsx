import React, { useEffect , useState} from 'react';
import styles from './styles.module.css';

type LocationProp = {
  main: string;
};

export const Location  = ({ main }: LocationProp) => {

  const [ official, setOfficial ] = useState<boolean>(false);

  useEffect(() => {
    document.location.href.includes(main) ? setOfficial(true)  : redirect();
  },[])

  let count = 5;

  const redirect = () => {
    setInterval(function(){
      count--;
      (window.document.getElementById('countDown') as HTMLElement).innerHTML = String(count);
      if (count == 0) {
        window.location.href = main; 
      }
  },1000);
  }

  return <div className={styles.stripe}>
    {official ?
    <p>
    Official website {main}
    </p>
    :
    <p>Redirect to {main} in <p style={{ display: 'inline'}} id="countDown">5</p> seconds.</p>
    }
    </div>;
}

