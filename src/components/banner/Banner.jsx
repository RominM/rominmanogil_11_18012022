import './banner.scss';
import bannerImg from './../../assets/images/background.png'

const Banner = () => {
  return (
    <div className="banner">
      <img src={bannerImg} alt="bannière" />
      <span className="gimmick">Chez Vous, partout et ailleurs</span>
    </div>
  );
};

export default Banner;
