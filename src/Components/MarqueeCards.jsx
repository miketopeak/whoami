/*
   Copyright (C), 2023-2024, Mikael Laine (mikael)
   Author: Mikael Laine
   FileName: MarqueeCards.jsx
   Version: I
   Creation: 02/06/2023
   Last modification: 03/06/2023
*/

import Marquee from "react-fast-marquee";

const MarqueeCards = ({children, direction}) => {

  return (
    <Marquee
      direction={direction}
      gradient={false}
      speed={100}
      pauseOnHover={true}
    >
      {children}
    </Marquee>
  );
};

export default MarqueeCards;
