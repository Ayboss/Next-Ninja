import React from 'react';
import Link from 'next/link';
import styles from '../../styles/ninja.module.css';

export const getStaticProps = async ()=>{
  try{
   const response = await fetch('https://jsonplaceholder.typicode.com/users');
   const data = await response.json();
   return {
     props:{ninjas : data}
   }
  }catch(err){
    console.log(err.response);
  }
}

function index({ninjas}) {
  console.log(ninjas)
    return (
        <div>
        <h1>All Ninjas</h1>
        {ninjas.map(ninja=>(
          <Link href={`/ninjas/${ninja.id}`} key={ninja.id}>
            <a className={styles.single}>
              <h3>{ninja.name}</h3>
            </a>
          </Link>
        ))}
      </div>
    )
}

export default index
