import CardItem from './CardItem'

export default function CardsSection(props) {
  return (
    <div className='mt-5'>
      <div className='flex justify-start align-center flex-wrap gap-x-4 pb-4'>
        <p className='mb-0 text-lg md:text-2xl  lg:text-3xl pt-0'>
          {props.sectionTitleObj}
        </p>
        <div className='flex justify-center align-center gap-3'>
          <span className='span_icon text-gray-300 hover:text-black'>
            <i
              style={{ paddingTop: '4px', paddingBottom: '4px' }}
              className='bg-white rounded-full px-2 fa-solid fa-angle-left'
            ></i>
          </span>
          <span className='span_icon text-gray-300 hover:text-black'>
            <i
              style={{ paddingTop: '4px', paddingBottom: '4px' }}
              className='bg-white rounded-full px-2 fa-solid fa-angle-right'
            ></i>
          </span>
        </div>
      </div>
      <div className='grid grid-cols-2 gap-3'>
        <CardItem />
        <CardItem />
      </div>
    </div>
  )
}
