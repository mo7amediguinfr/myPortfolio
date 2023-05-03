import { DiGithubBadge } from 'react-icons/di';
import { TbBrandVscode } from 'react-icons/tb';
import { SiFigma } from 'react-icons/si';

function Softwares() {
    return ( 
        <div >
            <h2 id="Softwares"><span id='TIU'> Tools I use</span></h2>
            <div id="SWS">
                <div >
                    <DiGithubBadge id="SW1"/>
                </div>
                <div >
                <TbBrandVscode id="SW2"/>
                </div>
                <div >
                <SiFigma id="SW3"/>
                </div>
            </div>
        </div>
     );
}

export default Softwares;