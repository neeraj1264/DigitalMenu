import React, { useEffect, useState } from 'react';
import Burger from './components/Pages/Burger/Burger';
import Mojito from './components/Pages/Mojito/Mojito';
import Category from './components/categories/Category';
import Sandwich from './components/Pages/Sandwich';
import Shake from './components/Pages/Shake';
import Cakes from './components/Pages/cakes/Cakes';
import Juice from './components/Pages/Juice';
import Footer from './components/footer/Footer';
// import { HashLoader } from 'react-spinners';


const MenuLayout = () => {

  // const [Loading, SetLoading] = useState(true);

  // useEffect(()=>{
  //     setTimeout(() => {
  //     SetLoading(false)
  //   }, 500);
  // })

  return (
    <>
            {/* {Loading ? <HashLoader color="#d32e2e" style={{position: 'absolute', top: '50%', left: '50%'}}/> : (
<> */}
    <Category/>
    <Juice/>
   <Shake/>
   <Mojito/>
   <Burger/>
   <Sandwich/>
   <Cakes/>
   <Footer/>
   {/* </>
            )} */}
    </>
  );
};

export default MenuLayout;
