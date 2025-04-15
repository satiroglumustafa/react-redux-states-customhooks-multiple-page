import './Footer.css'
const Footer = ()=>{

    const date = new Date().getFullYear()
    return(
        <>
        <footer className="footer">
            Copyright Mustafa Şatıroğlu {date}  Tüm Hakları Saklıdır
        </footer>
        </>
    )
}

export default Footer