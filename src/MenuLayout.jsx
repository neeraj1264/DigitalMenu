import React, { useEffect, useState } from 'react';
import Burger from './components/Pages/Burger/Burger';
import Pasta from './components/Pages/Pasta/Pasta';
import Category from './components/categories/Category';
import Sandwich from './components/Pages/Sandwich';
import Shake from './components/Pages/Shake';
import GarlicBread from './components/Pages/GarlicBread';
import Chinese from './components/Pages/Chinese';
import Wrap from './components/Pages/Wrap';
import Snacks from './components/Pages/Snacks';
import Momos from './components/Pages/Momos';
import Chaap from './components/Pages/Chaap';
import Dinner from './components/Pages/Dinner';
import Pizza from './components/Pages/Pizza/Pizza';
import Cakes from './components/Pages/cakes/Cakes';
import Naan from './components/Pages/Naan';
import Fruit from './components/Pages/Fruit';
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
   <Burger/>
   <Sandwich/>
   <Pizza/>
   <Pasta/>
   {/* <Fruit/> */}
   <Juice/>
   <Shake/>
   <Cakes/>
   <GarlicBread/>
   <Chinese/>
   <Wrap/>
   <Snacks/>
   <Momos/>
   <Chaap/>
   <Dinner/>
   <Naan/>
   <Footer/>
   {/* </>
            )} */}
    </>
  );
};

export default MenuLayout;
