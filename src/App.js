import './App.css';
import Certifications from './Certifications';
import Contact from './Contact';
import Projects from './Projects';
import Softwares from './Softwares';
import myImg from './mohamedimg-removebg-preview.png'

function App() {
  return (
    <div className="main">
      <div id='navBar'>
        <ul>
          <h1 id='logo'>medDiv</h1>
          <li className='navColor'>Home</li>
          <li ><a href="#cards" id='certifications_link'><span id='test'>Certifications</span> </a></li>
          <li><a href="#projects" id='Projects_link' > Projects</a></li>
          <li><a href="#Softwares" id='tools_link'> Tools</a></li>
          <li><a href="#findMe" id='contact_link'> Contact </a></li>
        </ul>
      </div>
      <div id='imgAndPara'>
      <img src={myImg} alt="" id='myImg' />
      <h3 className='intro'>Hi there, My name is Mohamed Iguinfr</h3>
      <h3 className='intro1'>Im a UX/UI Designer and a Full-Stack Developer</h3>
      <a href='#cards' id='certif'><span id='certifSpan'>See Certificates</span> </a>
      </div>
      {/* <button id='scroolTO' onClick={upTo}>Certificates</button>   */}
      <Certifications/>
      <Projects/>
      <Softwares/>
      <Contact/>
    </div>
  );
}

export default App;
