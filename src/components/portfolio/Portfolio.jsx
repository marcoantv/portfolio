import { useEffect, useState } from 'react';
import PortfolioList from '../portfolioList/PortfolioList';
import './portfolio.scss'
import { SamaguOnlinePortfolio,
HakuEcommercePortfolio,
PowerBIPortfolio,
HandyCraftAspNetPortfolio } from '../../data';

export default function Portfolio() {

  const [selected,setSelected] = useState("SamaguOnline");
  const [data,setData] = useState([]);
  const list = [
    {
      id: "SamaguOnline",
      title: "Samagu",
    },
    {
      id: "HakuEcommerce",
      title: "Haku",
    },
    {
      id: "PowerBI",
      title: "PowerBI",
    },
    {
      id: "HandyCraftAspNet",
      title: "HandyCraft",
    },
  ];

  useEffect(()=>{

    switch(selected){
      case "SamaguOnline":
          setData(SamaguOnlinePortfolio);
          break;
          case "HakuEcommerce":
          setData(HakuEcommercePortfolio);
          break;
          case "PowerBI":
          setData(PowerBIPortfolio);
          break;
          case "HandyCraftAspNet":
          setData(HandyCraftAspNetPortfolio);
          break;
        default:
          setData(SamaguOnlinePortfolio);
    }

  },[selected])
  return (
    <div className="portfolio" id="portfolio">
      <h1>Porfolio</h1>
      <ul>
        {list.map(item=>(
          <PortfolioList title={item.title} 
          active={selected === item.id} 
          setSelected={setSelected}
          id={item.id}
          />
          
        ))}
        
      </ul>

      <div className="container">
          {data.map(d=>(

          
        <div className="item">
          <img src={d.img}
          alt="" />
          <h3>{d.title}</h3>
        </div>
        ))}
        
      </div>
    </div>
  );
}
