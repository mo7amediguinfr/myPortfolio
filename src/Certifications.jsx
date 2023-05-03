import orangeImg from './orange.png'
import gomycodeImg from './gomycode.png'
import googleImg from './google1.png'
function Certifications(){
    return(
        <div id="cards">
            <div id="card1">
                <img src={orangeImg} alt="" className="Img" />
                <h3 id='uxui'>UX/UI Design</h3>
            </div>
            <div id="card2">
                <img src={gomycodeImg} alt="" className="Img" />
                <h3 id='FSD'>Full-Stack Developer</h3>
            </div>
            <div id="card3">
                <img src={googleImg} alt="" id="gImg" />
                <h3 id='uxD'>UX Design</h3>
            </div>
        </div>
        
    )
}
export default Certifications;