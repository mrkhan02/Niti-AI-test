
import './App.css';
import Carousel from './Compoents/Carousel';
import { getArticle } from "./Service/api";
import {useState, useEffect} from 'react';
function App() {

  const [page, setPage] = useState(1);
    const params = {
        page: page,
    };
    const [data1, setData] = useState([]);
    useEffect(() => {
        const fetchData = async () => {
            getArticle(params, (res) => {
                setData(res);
            });
        };
        fetchData();
    }, [page]);
    const data = data1.results;
  if(data){
    return (
      <div className="container">
        <div className="item">
        {!data1.count ? <h1>Coming soon</h1> : <></>}
        <div style={{ display :'flex'}}>
          <div style={{display:'flex',justifyContent:'center',textAlign:'center',flexDirection:'column'}}>
          {data1.previous ? (
                        <button className="button"onClick={() => {
                          setPage(page -1);
                         
                      }}>←</button>
                    ) : (
                      <button className="button">←</button>
        )}
          </div>
       
        <div><Carousel data={data} /></div>
        <div style={{display:'flex',justifyContent:'center',textAlign:'center',flexDirection:'column'}}>{data1.next ? (
                        <button className="button" onClick={() => {
                          setPage(page +1);
                         
                      }}>→</button>
                    ) : (
                      <button className="button" >→</button>
        )}</div>
                
                    
        
        </div>
        
        </div>
      </div>
    );
  }else{
    return (
      <div className="container">
        <div className="item">
         Loading....
        </div>
      </div>
    );
  }
  
}

export default App;
