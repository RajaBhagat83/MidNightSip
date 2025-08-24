import React from "react";
import Juices from "../../parts/Juices";
import Text from "../../parts/Text";
import coldCoffee from "../../assets/coldCoffee.png"
import hotCoffee from "../../assets/hotCoffee.png"
import blackCoffee from "../../assets/balckcoffee.png"

function Botttom() {
  return (
    <div className="h-[600px] w-full">
      {/* Text section */}
      <Text />
      {/* Juices images section */}
      <div className="flex justify-center mt-12 gap-72">
        <Juices img={coldCoffee}  text="Cold Coffee" quotes="This is a wonderful drink when in a bad mood" />
        <Juices  img={hotCoffee} text="Hot Coffee" quotes="Rainy day craving or stress of work?" />
        <Juices img={blackCoffee}   text="Black Coffee" quotes="Late night work or fulfilling dreams?" />
      </div>
    </div>
  );
}

export default Botttom;
