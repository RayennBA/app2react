import './Buttons.css'


function Boutton({value,bgColor,bord,col}){
    return(
        <Boutton style={{backgroundColor:bgColor,border:bord,color:col}}>{value}</Boutton>
        )};

export default Boutton