import React from 'react'
import './history.css'
import card from '../asset/Group 46.png'
import List1 from '../asset/list1.png'
import List2 from '../asset/list2.png'
import List3 from '../asset/list3.png'
import List4 from '../asset/list4.png'
import List5 from '../asset/list5.png'

const History = () => {
  const data = [
    {
      id: 1,
      image: List1,
      name: 'Netflix Standard Plan',
      date: '25 oct at 09:30 am',
      price: 10
    },
    {
      id: 2,
      image: List2,
      name: 'Ps5 Game',
      date: '25 oct at 08:12 am',
      price: 1000
    },
    {
      id: 3,
      image: List3,
      name: 'Online Shopping',
      date: '27 oct at 14:36 pm',
      price: 700
    },
    {
      id: 4,
      image: List4,
      name: 'Theater Ticket',
      date: '29 nov at 18:40 pm',
      price: 200
    },
    {
      id: 5,
      image: List5,
      name: 'Photography',
      date: '3 Dec at 15:28 pm',
      price: 90
    },
    {
      id: 2,
      image: List2,
      name: 'speaker',
      date: '8 dec at 11:05 am',
      price: 400
    },
    {
      id: 3,
      image: List3,
      name: 'gift card',
      date: '24 dec at 14:10 pm',
      price: 500
    },
    {
      id: 4,
      image: List4,
      name: 'carl jeo',
      date: '25 dec at 14:28 pm',
      price: 100
    },
    {
      id: 5,
      image: List5,
      name: 'Photography',
      date: '31 dec at 23:23 pm',
      price: 280
    },
  ]

  return (
    <section className='history'>
      <div className="twincard">
        <img src={card} alt="twin card" />
      </div>
      <div className="list">
        <div className='ju'>
          <h3>recent activities</h3>
          <p>see all</p>
        </div>
        <div className="list--item">
          {
            data.map(item => {
              return(
                <article>
                  <div className="contain">
                <img src={item.image} alt="" />
                <div>
                  <h5>{item.name}</h5>
                  <small>{item.date}</small>
                </div>
                  </div>
                <p>-$ {item.price}</p>
              </article>
              )
            })
          }
        </div>
      </div>
    </section>
  )
}

export default History
