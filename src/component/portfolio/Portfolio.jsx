import './portfolio.scss'
import PortfolioList from '../portfolioList/PortfolioList'
import { useEffect, useState } from 'react'
import {featuredPortfolio,webPortfolio,mobilePortfolio, designPortfolio, contentPortfolio} from '../../data'

export default function Portfolio() {
    const [selected, setSelected] = useState("featured")
    const [data, setData] = useState([])

    const list = [
       
        {
            id: "web",
            title: "Web App",
        },
        {
            id: "mobile",
            title: "Mobile App",
        },
       
    ]

    useEffect(()=>{
        switch(selected){
            case "web":
                setData(webPortfolio)
                break
            case "mobile":
                setData(mobilePortfolio)
                break
            default:
                setData(webPortfolio)
        }

    },[selected])


    return (
        <div className="portfolio" id="portfolio">
            <h1>Portfolio</h1>
            <ul>
                {list.map((item) => (
                    <PortfolioList 
                    title={item.title} 
                    active={selected === item.id} 
                    setSelected={setSelected}
                    id={item.id}                    
                    />
                ))}
            </ul>
            <div className="container">
                {data.map(d=>(
                    <div className="item">
                    <a href={d.link} target="_blank">
                        <img src={d.img} alt="" width='300px' />
                        <h3>{d.title}</h3>
                    </a>
                </div>
                ))}
            </div>
        </div>
    )
}
