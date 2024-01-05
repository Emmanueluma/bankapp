import './main.css'
import Searchlogo from '../asset/Search 2.png'
import notlogo from '../asset/Notification 3.png'
import profilepiclogo from '../asset/todd.jpg'
import c1 from '../asset/Ellipse 17.png'
import c2 from '../asset/Ellipse 19.png'
import c3 from '../asset/Ellipse 20.png'
import c4 from '../asset/Ellipse 21.png'
import c5 from '../asset/Ellipse 46.png'
import Statics from '../views/Statics'
import Profile from '../views/Profile'
import Settings from '../views/Settings'
import Geo from '../views/Geo'
import Logo from '../asset/Logo.png'



const Main = ({router, view}) => {
  const color1 ={
    backgroundColor: '#fd4e19'
  }
  const color2 ={
    backgroundColor: '#ffbf2a'
  }
  const color3 ={
    backgroundColor: '#6aff79'
  }
  const color4 ={
    backgroundColor: '#214c63'
  }
  const data = [
    {
      id: 1,
      color: color1,
      name: 'online shoping',
      price: '1,132.50'
    },
    {
      id: 2,
      color: color2,
      name: 'Entertainments',
      price: '2,302.00'
    },
    {
      id: 1,
      color: color3,
      name: 'Car services',
      price: '1,090.70'
    },
    {
      id: 1,
      color: color4,
      name: 'Households',
      price: '2,007.30'
    },
  ]
  let theview;
  
  if(router == "#home"){
    theview = <Statics />
  }else if(router == "#profile"){
    theview = <Profile />
  }else if(router == "#settings"){
    theview = <Settings />
  }else{
    theview = <Geo />
  }
  return (
    <section className="main">
      <div className="input">
        <div className="logoimg items">
          <img src={Logo} alt="" />
        </div>
        <div className='input-contain items'>
          <img src={Searchlogo} alt="" />
          <input type="text" name="text" placeholder='Statics Search disable!!' disabled/>
        </div>
        <div className='not items'>
          <img src={notlogo} alt="" />
          <div>
            <div className="pics--con">
              <img className='profile' src={profilepiclogo} alt="" />
            </div>
          </div>
        </div>
      </div>
      <div className="flex">
        <div className="info">
          <img className='cir one' src={c4} alt="" />
          <article >
            <img src={c5} alt="" />
            <p>$ 303,150</p>
            <small>total</small>
          </article>
          <img className='cir two' src={c3} alt="" />
          <img className='cir three' src={c2} alt="" />
          <img className='cir four' src={c1} alt="" />
        </div>
        <div className="grid">
          {
            data.map(item => {
              return(
                <article id={item.id}>
                  <div className='dot' style={item.color}></div>
                  <div>
                    <p>{item.name}</p>
                    <small>$ {item.price}</small>
                  </div>
                </article>
              )
            })
          }
          
        </div>
      </div>
      {theview}
      
    </section>
  )
}

export default Main
