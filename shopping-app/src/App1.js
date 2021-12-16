
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import './stats.css';

function DashBoard(){

    const statistics = [
        {
            title: "EARNINGS (MONTHLY)",
            value: "$40,000"
        },
        {
            title: "EARNINGS (ANNUAL)",
            value: "$215,000"
        },
        {
            title: "TASKS",
            value: "50%"
        },
        {
            title: "PENDING REQUESTS",
            value: "18"
        }

    ];



    return <div>
        <h4 style={{ padding: '37px' }} >Dash Board</h4>
        <div className='stats-cards'> 
        {statistics.map((stat,index) =>  <Stats title= {stat.title} value= {stat.value} key={index} />)}
         </div>
         <div>
             <CardsStats allStats={statistics}/> 
         </div>
         </div>

}

function CardsStats({allStats}){                     //All cards data obtained from DashBoard component to CardsStats component

return <div>
        <h4 style={{ padding: '37px' }} >Cards</h4>
        <div className='stats-cards'>
            {allStats.map((stat,index) =>  <Stats title= {stat.title} value= {stat.value} key={index} />)}
        </div>   
    </div>
    
}


function Stats({title,value}){


    return <Card sx={{ width: '300px' }}>
    <CardContent>
      
    <Typography variant="body2">
      {title}
      </Typography>
    
  
      <Typography variant="h5" component="div">
      {value}
       
      </Typography>
    </CardContent>
   
  </Card>


}



export default DashBoard;

