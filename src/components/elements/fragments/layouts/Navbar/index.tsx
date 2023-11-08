import { signIn, signOut, useSession }              from "next-auth/react";
import styles                                       from "./Navbar.module.css";

import Link                                         from 'next/link'
import { Menu }                                     from '@headlessui/react'




    
const Navbar = () => {
    const {data}: any = useSession();
    
    return (
        <div className={styles.navbar}>
            <div className = "big">Navbar</div>
            <div>
                <button type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Profile</button>
                <button type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Achievment</button>
                <button type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Experience</button>
            </div> 
           

            <div>
                {data && data.user.fullname} {" "}
                {data ? (
          <button  type="button" className="text-white bg-gradient-to-r from-purple-400 via-pink-500 to-pink-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-pink-300 dark:focus:ring-pink-800 font-medium rounded-lg text-sm px-4 py-2.5 text-center mr-1 mb-1"
            onClick={() => signOut()}>Sign out</button>
           ):(
            <button  type="button" className="text-white bg-gradient-to-r from-purple-400 via-pink-500 to-pink-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-pink-300 dark:focus:ring-pink-800 font-medium rounded-lg text-sm px-4 py-2.5 text-center mr-1 mb-1"
            onClick={() => signIn()}>Sign in</button>
           )}
        
            </div>
        </div>
    );
};

export default Navbar;