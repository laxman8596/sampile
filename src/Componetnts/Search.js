import React,{useEffect,useState} from 'react'

const Search = ({match}) => {
  const [data, setData] = useState([])

  useEffect(()=>{
    fetch(`https://pixabay.com/api/?key=25850788-198f1932e82eefef8db8d5b36&q=${match.params.imgname}&image_type=photo`).then(
      response => response.json()
    ).then((res)=>{
      console.log(res.hits);
      setData(res.hits)
    })
  },[])
  return (
    <div className='container'>
    <div className='row'>
       {
        data.map(item  =>
         
<div className='col-xs-12 col-sm-6 col-md-4'>

<div class="card" style={{width:'300px',height:'300px',margin:'10px'}}>
          <img src={item.largeImageURL} class="card-img-top" alt="..." width='300' height='300'/>
          <div class="card-body text-center">
            <h5 class="card-title">{item.tags}</h5>
          
          </div>
        </div> 
</div>

       
          )
       }
    </div>
    </div>
  )
}

export default Search