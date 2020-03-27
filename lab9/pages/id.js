import Head from 'next/head'
import Link from 'next/link';
import IdSearch from '../components/IdSearch'

class Id extends React.Component {
    render(){
    return(
        <div>
            <Head>
               <title>
                Id Page
               </title>
             </Head>
            
                <IdSearch/>
                  <br/>
             <div id ="reportingArea"></div>
        
                   <Link href="/">
                     <a>Home</a>
                   </Link>
      </div>
    );
  }
}
export default Id