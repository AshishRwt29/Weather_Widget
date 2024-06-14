import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import "./InfoBox.css";
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import AcUnitIcon from '@mui/icons-material/AcUnit';

export default function InfoBox({info}) {

    const HOT_URL = 
    "https://media.istockphoto.com/id/1257369288/photo/orange-sky-with-bright-sun-and-clouds.jpg?s=612x612&w=0&k=20&c=FutwmLkj19hWIpcCmaBX6H4L3BV01aw3XvpIFXAFig0=";
    const COLD_URL=
    "https://media.istockphoto.com/id/615101030/photo/winter-scene-frosted-pine-branches-winter-in-the-woods.jpg?s=612x612&w=0&k=20&c=KMaN-WhHTVHtRfueoxN7oFE99T3kC67NtDoISV36PqM=";
    const RAIN_URL=
    "https://media.istockphoto.com/id/1257951336/photo/transparent-umbrella-under-rain-against-water-drops-splash-background-rainy-weather-concept.jpg?s=612x612&w=0&k=20&c=lNvbIw1wReb-owe7_rMgW8lZz1zElqs5BOY1AZhyRXs=";



    return(
        <div className='InfoBox'>
            <div className="cardContainer">
            <Card sx={{ maxWidth: 345 }}> 
                <CardMedia
                sx={{ height: 140 }}
                image={
                    info.humidity > 80 
                    ? RAIN_URL 
                    : info.temp > 15 
                    ? HOT_URL 
                    : COLD_URL
                }
                title="green iguana"
                />
                <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    {info.city}{
                    info.humidity > 80 
                    ? <ThunderstormIcon/> 
                    : info.temp > 15 
                    ? <WbSunnyIcon/> 
                    : <AcUnitIcon/>
                    }
                </Typography>
                <Typography variant="body2" color="text.secondary" component={"span"}>
                    <p>Temperature = {info.temp}&deg;C</p>
                    <p>Humidity = {info.humidity}</p>
                    <p>Min Temp = {info.tempMin}&deg;C</p>
                    <p>Max Temp = {info.tempMax}&deg;C</p>
                    <p>The weather can be described as <b>{info.weather}</b> and feels like {info.feelslike}&deg;C</p>
                </Typography>
                </CardContent>
                </Card>
            </div>
        </div>
    )
}
