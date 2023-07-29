import { Form } from "../components/form/Index";
import { useState } from 'react';
import Header from "../components/header/Index";
import Article from "../components/article/Index";

function Home() {
  const [showHeaderInfo, setShowHeaderInfo] = useState(true);

  const showHeader = () => {
    alert('clicado');
    setShowHeaderInfo(false);
  }

  return (
    <>
      {showHeaderInfo
        ? <Header showHeader={showHeader} />
        : <></>
      }
      {localStorage.setItem('firstname', 'Adam')}
      {localStorage.setItem('lastname', 'silver')}
      {localStorage.clear()}
      {console.log(localStorage.length)}
      <div id="home-main">
        <Article />
        <Form />
      </div>
    </>

  )
}

export default Home;