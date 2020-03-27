import Head from 'next/head'
import Link from 'next/link';


class Home extends React.Component {
  render(){
  return(
      <div>
        <Head>
          <title>
            Home Page
          </title>
          </Head>

        <p>
          Hello welcome.
        </p>

        <Link href="/name">
           <a>Name Page</a>
        </Link> <br/>
     <Link href="/id">
           <a>Id Page</a>
        </Link> <br/>
      <Link href="/type">
           <a>Type Page</a>
        </Link><br/>
        </div>
  
  );
 }
}
export default Home
