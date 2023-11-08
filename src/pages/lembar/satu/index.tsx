import styles                                 from  "./Satu.module.scss"
import Link                                   from "next/link";



const LembarSatuPage= () => {
    return (
        <div className={styles.kotakbesar}>
            <h1 className={styles.title}>M. Iqbal Ramadlani</h1>
            <div className={styles.lingkaran}></div>
             
                 <div className={styles.kotak}></div>
                <div className={styles.kotak}></div>
                <div className={styles.lingkaran1}></div>
                <button className={styles.tombol}>  <Link href={"/lembar/dua"}>Learn More</Link> 
                </button>
        </div>
    );
};
export default LembarSatuPage;

