import Link          from "next/link";
import styles        from "@/styles/Login.module.scss";
import { useState }  from "react";
import { useRouter } from "next/router";
import { signIn }    from "next-auth/react";


const LoginViews = () => {
    const[isLoading, setIsLoading] = useState(false); 
    const [error, setError] = useState("");
    const {push, query} =useRouter();

    const callbackUrl: any = query.callbackUrl || "/";
    const handleSubmit = async (event: any) => {
        event.preventDefault();
        setError("");
        setIsLoading(true);
        try {
            const res = await signIn("credentials", {
                redirect: false, 
                email: event.target.email.value,
                password: event.target.password.value,
                callbackUrl
            });
            if (!res?.error){
                setIsLoading(false);
                push(callbackUrl);
            } else {
                setIsLoading(false);
                setError("Email or password is incorrect");
            }
        } catch (error : any) {
          setIsLoading(false);
          setError("Email or password is incorrect");
        }
    };
    return (
        <div className = {styles.login}>
        <div>
        <h1 className={styles.judul}>Login</h1>
            {error && <p className={styles.error1}>{error}</p>}
            <form className={styles.p} onSubmit={handleSubmit}>
            <label htmlFor="password">Password </label>
            <input className={styles.kotak} id="password" name="password" required type="text" />
            <label htmlFor="email">Email</label>
            <input className={styles.kotak} id="email" name="email" required type="text" />
            
            
            <button type="submit" 
                className="bg-transparent hover:bg-purple-500 text-white-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded" 
                disabled={isLoading}
            >
                {isLoading ? "Loading" : "Login"}
            </button>
            
        </form>
        <p className={styles.tombol}>
           <Link href={"/auth/login"}>~Belum Punya Akun? registrasi disini~</Link> 
            </p>
            </div>
        </div>
    );
};

export default LoginViews; 