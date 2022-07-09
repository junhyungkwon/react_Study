import logo from './logo.svg';
import './App.css';

function Header(){
  return <header>
    <h1> <a href='/'>React</a></h1>
  </header>
}
function Nav () { 
return <nav>
<ol>
          <li><a href='/'>html</a></li>
          <li><a href='/'>css</a></li>
          <li><a href='/'>javascript</a></li>
        </ol>
        </nav>
}

function Article () {
  return <article>
  <h2>Welcome</h2>
  Hello, web
</article>

}
function App() {
  return (
    <div>
      <Header/>
      <Header/>
      <Header/>
      

     
      < Nav/>
      <Article/>
      
      
    </div>
  );
}

export default App;
