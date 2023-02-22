import { Header } from './components/Header';
import {Post} from './components/Post';
import styles from  './App.module.css';

import './global.css'
import { Sidebar } from './components/Sidebar';

function App() {
  return (
    <div> 
      <Header/>
      <div className={styles.wrapper}>
       <Sidebar />
       <main>
        <Post   
        author="Diego Fernandes" 
        content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum impedit amet dolorem atque nulla dolorum consequuntur voluptates consectetur praesentium? Modi explicabo ducimus recusandae tempore excepturi accusantium odit dolor et vel!"
        />

        <Post   
        author="Gabriel Barbosa" 
        content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum impedit amet dolorem atque nulla dolorum consequuntur voluptates consectetur praesentium? Modi explicabo ducimus recusandae tempore excepturi accusantium odit dolor et vel!"
        />
       </main>

      </div>
     
    </div>
 
  )
}

export default App
