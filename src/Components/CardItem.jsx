import Card from 'react-bootstrap/Card'
import CaruselCards from './CaruselCards'
import card01 from '../img/caruselcard/card01.png'
import card02 from '../img/caruselcard/card02.png'
import card03 from '../img/caruselcard/card03.png'
import card04 from '../img/caruselcard/card04.png'
import { Link } from 'react-router-dom'

export default function CardItem(props) {
  const fotos = {
    cardsPhoto: [card01, card02, card03, card04],
  }

  return (
      <Card className='relative border-0 z-[999] transition ease-in-out delay-150 hover:translate-y-1 hover:scale-105'>
        <Card.Body className='flex justify-between align-center p-2'>
          <span className='bg-purple-900 text-white leading-none p-1'>
            Новинка
          </span>
          <div className='pl-2 pr-1 flex justify-end align-center'>
            <span className='text-gray-300 pr-2'>
              <i className='fa-solid fa-chart-simple'></i>
            </span>
            <span>
              <i className='text-gray-300 align-middle fa-regular fa-heart'></i>
            </span>
          </div>
        </Card.Body>

        <CaruselCards fotos={fotos} />

        <Card.Body className='p-2'>
          <Link to='/about-card/' className='no-underline text-black text-sm mb-1'>
            Эмаль Condor ПФ-115 жёлтая 1,8 кг
          </Link>
          <div className='w-4/5'>
            <div className='flex justify-start align-center flex-wrap'>
              <span className='text-xl font-semibold pr-1'>500 ₽</span>
              <span className='text-base line-through text-gray-300 pr-6'>
                720 ₽
              </span>
              <span className='text-xs md:text-sm text text-green-700'>
                <i className='fa-solid fa-check'></i> в наличии
              </span>
              <div className='absolute bottom-0 right-0 border-2 border-orange-700 rounded-br-md flex justify-center align-center p-1 lg:p-2 text-xs'>
                <i className='text-base lg:text-xl leading-none fa-solid fa-cart-shopping'></i>
              </div>
            </div>
          </div>
        </Card.Body>
      </Card>
  )
}
