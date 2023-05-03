import { BsInstagram } from 'react-icons/bs';
import { GrLinkedin } from 'react-icons/gr';
import { DiGithubBadge } from 'react-icons/di';
function Contact() {
    return ( 
        <div>
            <h2 id="findMe"><span id='YCFMH'> You can find Me here </span></h2>
            <div id="socials">
                <div>
                    <a href='https://www.instagram.com/mohamediguinfr/'> <BsInstagram id='social1' /></a>
                </div>
                <div>
                 <a href="https://www.linkedin.com/in/mohamed-iguinfr-3ba64325b/"><GrLinkedin id='social2'/></a>   
                </div> <div>
                   <a href="https://github.com/mo7amediguinfr"><DiGithubBadge id='social3'/></a> 
                </div>
            </div>
        </div>
     );
}

export default Contact;