import './../style/banner.scss'

const Banner = () => {
   return (
   <div className="banner">
      <img src={require("./../assets/background.png")} alt="bannière"></img>
      <span className="gimmick">Chez Vous, partout et ailleurs</span>
   </div>
   ) 
}

export default Banner