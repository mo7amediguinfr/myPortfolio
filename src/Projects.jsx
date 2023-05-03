import movieAppImg from './movieapp.jpg'
import shoCartImg from './shoppingcart-removebg-preview.png'
import { FaReact } from 'react-icons/fa';
function Projects () {
    return (  
        <div>
            <h2 id="projects"><span id='PR'>Projects</span></h2>
                <div id='p1'>
                    <div id='title1_img'>
                        <h2 id='title1'><span id='MVAUR'> Movie App using React </span></h2>
                        <img src={movieAppImg} alt="" id="movieimg" />
                    </div>
                    <div id='title2_img'>
                    <h2 id='title2'> <span id='SC'>Shopping Carte</span> </h2>
                    <img src={shoCartImg} alt="" id='shoCartImg' />
                    </div>
                    
                </div>
        </div>
    );
}

export default Projects;