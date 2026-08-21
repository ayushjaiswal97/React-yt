import style from '../header/Header.module.css'  

const Header = () => {
  return (
    <div className={style.header}>
     <h1>Sheryians</h1>
     <button className={style.btn}>Login</button>
    </div>
  )
}

export default Header