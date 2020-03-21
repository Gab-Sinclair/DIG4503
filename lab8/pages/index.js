import Head from 'next/head';
import IdSearch from '../components/IdSearch';
import NameSearch from '../components/NameSearch';

class Home extends React.Component {
    render(){
    return(
        <>
        <IdSearch/>
        <NameSearch/>
        </>
    
    )
  }
}


export default Home
