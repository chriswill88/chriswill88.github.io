import { useEffect, useRef, useState } from "react";
import Clock from 'react-clock';

export default function Widget() {
    const [cardInd, setCardInd] = useState(0);
    const [today, setDate] = useState(new Date())
    const secondsRef = useRef(0);
    

    const locale = 'en';

    useEffect(() => {
        const timer = setInterval(() => { 
            setDate(new Date());
            if (!(secondsRef.current % 5)) {
                setCardInd(cardInd ? 0 : 1)
                secondsRef.current = 0;
            }
            secondsRef.current += 1;
        }, 1000);
        
        return () => {
            clearInterval(timer); // Return a funtion to clear the timer so that it will stop being called on unmount
        }
    })

    const day = today.toLocaleDateString(locale, { weekday: 'long' });
    const date = `Today is ${day}, ${today.getDate()} ${today.toLocaleDateString(locale, { month: 'long' })}\n\n`;

    const hour = today.getHours();
    const wish = `Good ${(hour < 12 && 'Morning') || (hour < 17 && 'Afternoon') || 'Evening'} from the east coast! `;

    const time = today.toLocaleTimeString(locale, { hour: 'numeric', hour12: true, minute: 'numeric', second: "2-digit"});
    

    return <div className="side-contents">
        {
            cardInd == 0 && <div className="card day">
                <p>{wish}</p>
                <p>{date}</p>
            </div>
        }
        {
            cardInd == 1 && <div className="card">
                <Clock value={today}/>
                <p>{time}</p>


            </div>
        }
        {/* {
            cardInd == 2 && <div className="card">
                weather
            </div>
        } */}

        <div className="nav">
            <div className="navi-ball" onMouseEnter={() => setCardInd(0)}></div>
            <div className="navi-ball" onMouseEnter={() => setCardInd(1)}></div>
            {/* <div className="navi-ball" onMouseEnter={() => setCardInd(2)}></div> */}
        </div>
    </div>
}