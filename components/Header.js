import Head from 'next/head';
import headerStyles from '../styles/Header.module.css'

const Header = () => {
  return (
    <div>
      <h1 className='title'>
        <span>Website</span> Header
      </h1>
      <style jsx>
        {`
          .title {
            color: red;
            font-size: 1rem
          }        
        `}
      </style>
    </div>
  )
}

export default Header