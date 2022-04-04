import './ThirdPage.css';
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import TwitterIcon from '@material-ui/icons/Twitter';
import ArrowRightAltIcon from '@material-ui/icons/ArrowRightAlt'
function ThirdPage() {
  return (
    <div className='thirdPageContainer'>
        <div className='thirdPageContainerTop'>
            <div className='highLow'>
            <div className='high'>
                <div style={{fontWeight: '500' ,fontSize: '1.4rem' }}>
                OUR GLOBAL 
                </div>
                <div style={{fontWeight: '700' ,fontSize: '1.4rem' }}>
                 LOCATIONS
                </div>

</div>
<div className='low'>
<div className='lowH'>
    <div className='un'>
<div  style={{fontWeight:"600"  }} >UNITED STATES</div>
<div style={{width:"90%" , fontWeight:"500" , textAlign:"center" }} >2055 Limestone Road #200 C Wilmington, Delaware 19808 United States</div>
    </div>

    <div className='un'>
    <div  style={{fontWeight:"600"  }} >INDIA</div>
<div style={{width:"90%" , fontWeight:"500" , textAlign:"center" }} >Avanta Busienss Center
Saket City, New Delhi 110017
India
</div>
    </div>
    <div className='un'>
    <div  style={{fontWeight:"600"  }} >PHILIPPINES</div>
<div style={{width:"90%" , fontWeight:"500" , textAlign:"center" }} >Level 10-1 One Global Place
25th St, 5th Ave, Taguig 1634
Philippines
</div>
</div>
</div>
<div className='lowL'>
<div className='lowL1'>
    <div className='lowL11'>
    Insights, expertise, and big
ideas delivered to your inbox
    </div>

</div>
<div className='lowL2'>
    <div className='lowL22'>
    <div className='lowL12'>
Subscribe to our newsletter
<ArrowRightAltIcon />
    </div>
    </div>


</div>
</div>
</div>
            </div>

        </div>
        <div className='thirdPageContainerBottom'>
<div className='sectionOne'>
<div className='sectionOne1'>
    <FacebookIcon style={{color:'#fff' }} />
    <InstagramIcon style={{color:'#fff' }} />
    <LinkedInIcon style={{color:'#fff' }} />
    <TwitterIcon style={{color:'#fff' }}  />
    </div>
<div className='sectionOneLeft'>
<div className='sectionOneLefT' >
<div className='country'  >
UNITED STATES.
</div>
<div className='country'  >
India.
</div>
<div className='country' >
PHILIPPINES.
</div>
</div>
<div className='sectionOneLefB' >
LaQuest
</div>
</div>
<div className='sectionOneRight'>
    <div className='contact' >CONTACT US</div>
    <div  className='centre'>
        <div style={{color: "#fff" , fontWeight: "600"}}>
        Got a project?
        </div>
        <div>
        sales@laquest.net
        </div>
        <div>
        info@laquest.net
        </div>

    </div>
    <div className='last' >
<div style={{color: "#fff" , fontWeight: "600" }}>
Career Opportunities
</div>
<div  style={{color: "#fff" , fontWeight: "400"}}>career@laquest.net
</div>
    </div>
</div>
</div>
<div className='sectionBetween'></div>
<div className='sectionTwo'>
    <div className='bas'>
    © 2022 LaQuest
    </div>

</div>
</div>
    </div>
  );
}

export default ThirdPage;
