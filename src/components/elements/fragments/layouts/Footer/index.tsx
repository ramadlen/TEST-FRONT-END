import Link   from "next/link";

import styles from "./Footer.module.scss";
const Footer= () => {
    return (
        <div className={styles.footer}>
        
           <>© 2023 Iqbal Ramadlani. All Rights Reserved</>
           
           <div className={styles.p}> Logo</div>
           
        </div>
    );
};

export default Footer; 