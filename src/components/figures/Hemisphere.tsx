import './figures.scss'
import './figures.css'

const Hemisphere = ({ children }: any) => {
    return <div className="shape">
        <figure className='orbit'>
        </figure>
  
        <div className="orbit-container">
            
            <figure className="planet"></figure>

        </div>
        <figure className="sphere">
            <figure className="light"></figure>
            <figure className="shadow"></figure>
        </figure>
        { children }

    </div>
}

export default Hemisphere;