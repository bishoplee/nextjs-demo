import Head from 'next/head';
import headerStyles from '../styles/Header.module.css'

const Header = () => {
  const x = 2
  return (
    <div>
      <h1 className='title'>
        <span>Website</span> Header
      </h1>
      <style jsx>
        {`
          .title {
            color: ${x > 3 ? 'red' : 'blue'};
            font-size: 1rem
          }        
        `}
      </style>
    </div>
  )
}

export default Header