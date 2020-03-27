import Head from 'next/head'
import Link from 'next/link';
import NameSearch from '../components/NameSearch'

class Name extends React.Component {
    render(){
    return(
        <div>
            <Head>
              <title>
               Name Page
              </title>
            </Head>

                <NameSearch/>
                  <br/>
                <div id ="reportingArea"></div>

                    <Link href="/">
                      <a>Home</a>
                    </Link>
    </div>
    );
  }
}
export default Name