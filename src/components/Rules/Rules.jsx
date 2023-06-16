import './Rules.css';
import read from './RulesImage/read.png'
import scroll from './RulesImage/scroll.png'
import buy from './RulesImage/buy.png'
import sale from './RulesImage/sale.png'
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
const Rules = () => {
    useEffect(() => {
        AOS.init({ duration: 1500 });
    }, [])
    return (
        <div className="Rules">
            <div className="RulesCard" data-aos='fade-up' >
                <h4>Rules</h4>
                <div className="RulesCardCont" data-aos='fade-right'>
                    <img src={scroll} alt="" className='RulesImage' />
                    <p className='RulesCardText'>1. Scroll Slowly </p>



                </div>
                <div className="RulesCardCont" data-aos='fade-left'>
                    <img src={read} alt="" className='RulesImage' />
                    <p className='RulesCardText'> 2. Read every parametr of product</p>




                </div>
                <div className="RulesCardCont" data-aos='fade-right'>
                    <img src={buy} alt="" className='RulesImage' />

                    <p className='RulesCardText'> 3. if click buy</p>





                </div>
                <div className="RulesCardCont" data-aos='fade-left' >
                    <img src={sale} alt="" className='RulesImage' />

                    <p className='RulesCardText'> 4. Buy every with sale</p>





                </div>





            </div>
        </div>
    )
}
export default Rules;