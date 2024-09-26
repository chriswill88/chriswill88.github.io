import pdf from '../../assets/online-resume.pdf'

const Footer = () => {
    return <div className='footer'>
        <p className='statement'>Designed & Developed by Christian Williams 🤙 2024</p>
        
        <div className="links">
            <a href="mailto::christian.willams77@outlook.com"><p>Email</p></a>
            <a href="https://www.linkedin.com/in/christian--williams/"><p>LinkedIn</p></a>
            {/* <a href="https://x.com/ChrisWill79"><p>X</p></a> */}
            <a href="https://github.com/chriswill88"><p>Github</p></a>
            <a href={pdf} target="_blank"><p>Resume</p></a>
        </div>
    </div>
}

export default Footer;