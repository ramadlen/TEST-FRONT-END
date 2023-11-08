import Link          from "next/link";
import styles        from "@/styles/Register.module.scss";
import { useState }  from "react";
import { useRouter } from "next/router";

const RegisterViews = () => {
    const[isLoading, setIsLoading] = useState(false); 
    const [error, setError] = useState("");
    const {push} =useRouter();
    const handleSubmit = async (event: any) => {
        event.preventDefault();
        setError("");
        setIsLoading(true);
        const data = {
            email: event.target.email.value,
            fullname: event.target.fullname.value,
            password: event.target.password.value,
        };
        const result =  await fetch("/api/register/", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
        });

        if (result.status === 200) {
            event.target.reset();
            setIsLoading (false);
            push("/auth/login");
        } else {
            setIsLoading(false);
            setError(result.status === 400 ? "Email already exists" : "");
        }
    };
    return (
        <div className = {styles.register}>
        <div>
        <h1 className={styles.judulregister}>Register</h1>
            {error && <p className={styles.error1}>{error}</p>}
            <form className={styles.pregister} onSubmit={handleSubmit}>
            <label htmlFor="name">Name</label>
            <input className={styles.kotakregister}
            id="name"
            name="name"
            required
            type="text"
            />
            <label htmlFor="password">Password </label>
            <input className={styles.kotakregister} id="password" name="password" required type="text" />
            <label htmlFor="fullname">fullname</label>
            <input className={styles.kotakregister} id="fullname" name="fullname" required type="text" />
            <label htmlFor="email">Email</label>
            <input className={styles.kotakregister} id="email" name="email" required type="text" />
            
            
            <button type="submit" 
                className="bg-transparent hover:bg-purple-500 text-white-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded" 
                disabled={isLoading}
            >
                {isLoading ? "Loading" : "Register"}
            </button>
            
        </form>
        <p className={styles.tombolregister}>
           <Link href={"/auth/login"}>~Sudah Punya Akun? Silahkan Login~</Link> 
            </p>
       
        </div>
    </div>
    );
};

export default RegisterViews; 
