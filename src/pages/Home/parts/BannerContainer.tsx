import styled from 'styled-components';

import homeBannerImage from '@@assets/images/home_banner1.png';
import Slider from '@@components/Slider';

const StyledSlider = styled(Slider)`
  width: 483px;
  height: 100%;
  overflow: hidden;
  border-radius: 24px;
  background-color: #fff;
`;

function BannerContainer() {
  const bannerItems = [<img src={homeBannerImage} alt='배너 이미지' />, <img src={homeBannerImage} alt='배너 이미지' />];

  return <StyledSlider className='banner_swiper' items={bannerItems} />;
}

export default BannerContainer;
