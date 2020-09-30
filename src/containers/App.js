import React,{ useEffect, useState } from 'react';
import AllCounters from '../components/Allcounters';
import Header from '../components/header';
import Footer from '../components/footer';
import '../css/_base.scss';
import '../css/_footer.scss';


function App(){
  
  const [data,setData] = useState({})
  const [loading,setLoading] = useState(true)
  const [district,setDistrict] = useState('Durg')
  const [ddData, setDdData] = useState([])

  useEffect(() => {
      fetch('https://api.covid19india.org/state_district_wise.json')
      .then(response => response.json())
      .then(coronaData => {
              const cData = coronaData.Chhattisgarh.districtData
              setLoading(false)
              const dropdownData = Object.keys(cData)
              
              setDdData(dropdownData)
              var temporaryData
              if( cData.hasOwnProperty(district) )
               {
                  temporaryData = cData[district];
                  setData(temporaryData);  
                } 
                })
                },[district]) 
  
  function handleChange(e){
      const {value} = e.target
      setDistrict(value)
  }
  
return(
  <div className="">
    <Header districtName={ddData} handleChange={handleChange} />
    <AllCounters confirmed={data.confirmed} active={data.active} recovered={data.recovered} deceased={data.deceased} />
    <Footer />
  </div>
  
)}

export default App;
//return( loading? <h1>loading...</h1>:(
  //<h1>{data.confirmed}</h1>))