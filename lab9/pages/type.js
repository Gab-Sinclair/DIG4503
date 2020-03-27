import Head from 'next/head'
import Link from 'next/link';
import TypeSearch from '../components/TypeSearch'

class Type extends React.Component {
    render(){
    return(
        <div>
            <Head>
              <title>
                Type Page
                </title>
             </Head>

                <TypeSearch/>
                 <br/>
                  <div id ="reportingArea"></div>

                    <Link href="/">
                      <a>index.js</a>
                    </Link>
        </div>
    
    );
  }
}
export default Type