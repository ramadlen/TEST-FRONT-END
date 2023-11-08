import styles from  "./Dua.module.scss"
import Link   from "next/link";

const LembarDuaPage= () => {
    return (
        <div className={styles.kotakbesar1}>
             <h2 className={styles.paragraf}>Adalah</h2>
            <h1 className={styles.title1}>About</h1>
           
            <div className={styles.lingkaran1}></div>
             
                 <div className={styles.kotak1}></div>
                
                <div className={styles.lingkaran2}></div>
               
                <button className={styles.tombol1}> <Link href={"/product"}>Next</Link> </button>
                <button className={styles.tombol2}> <Link href={"/lembar/satu"}> Back</Link> </button>
                
        </div>
        
    );
};

export default LembarDuaPage; 