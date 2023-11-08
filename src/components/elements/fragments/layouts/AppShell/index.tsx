import { useRouter } from "next/router";
import Navbar        from "../Navbar";
import Footer        from "../Footer";
import Card          from "../Card";



type AppShellProps = {
    children: React.ReactNode;
}
const disableNavbar = ["/auth/login", "/auth/register", "/404"];
const disableFooter = ["/auth/login", "/auth/register", "/404"];
const disableCard = ["/auth/login", "/auth/register", "/404"];
const AppShell = (props: AppShellProps) => {
   const { children } = props;
   const {pathname} = useRouter ();
   
    return (
        <main>
           {!disableNavbar.includes (pathname) && <Navbar/>}
          
            {children}
        
             {!disableFooter.includes (pathname) && <Footer/>}
           
    
        </main>
    );
};

export default AppShell; 