import React from "react";
import styled from "styled-components";
import tw from "twin.macro";
//eslint-disable-next-line
import { css } from "styled-components/macro";
import { SectionHeading } from "components/misc/Headings.js";

import defaultCardImage from "../../images/shield-icon.svg";

import { ReactComponent as SvgDecoratorBlob3 } from "../../images/svg-decorator-blob-3.svg";

import leak from "../../images/leak.svg";
import waterprof from "../../images/waterprof.png";
import watertank from "../../images/watertank.svg";
import bathtub from "../../images/bathtub.svg";
import toilet from "../../images/toilet.svg";
import pipeinstall from "../../images/pipeinstall.svg";
import SimpleIconImage from "../../images/bathroom.svg";
import motor from "../../images/motor.svg";
import geyser from "../../images/geyser.svg";
import rainwater from "../../images/rainwater.svg";
import sink from "../../images/sink.svg";
import emergency from "../../images/emergency.svg";



const Container = tw.div`relative`;

const ThreeColumnContainer = styled.div`
  ${tw`flex flex-col items-center md:items-stretch md:flex-row flex-wrap md:justify-center max-w-screen-xl mx-auto py-20 md:py-24`}
`;
const Heading = tw(SectionHeading)`w-full`;

const Column = styled.div`
  ${tw`md:w-1/2 lg:w-1/3 px-6 flex`}
`;

const Card = styled.div`
  ${tw`flex flex-col mx-auto max-w-xs items-center px-6 py-10 border-2 border-dashed border-primary-500 rounded-lg mt-12`}
  .imageContainer {
    ${tw`border-2 border-primary-500 text-center rounded-full p-6 flex-shrink-0 relative`}
    img {
      ${tw`w-20 h-20`}
    }
  }

  .textContainer {
    ${tw`mt-6 text-center`}
  }

  .title {
    ${tw`mt-2 font-bold text-xl leading-none text-primary-500`}
  }

  .description {
    ${tw`mt-3 font-semibold text-secondary-100 text-sm leading-loose`}
  }
`;

const DecoratorBlob = styled(SvgDecoratorBlob3)`
  ${tw`pointer-events-none absolute right-0 bottom-0 w-64 opacity-25 transform translate-x-32 translate-y-48 `}
`;

export default () => {
  /*
   * This componets has an array of object denoting the cards defined below. Each object in the cards array can have the key (Change it according to your need, you can also add more objects to have more cards in this feature component):
   *  1) imageSrc - the image shown at the top of the card
   *  2) title - the title of the card
   *  3) description - the description of the card
   *  If a key for a particular card is not provided, a default value is used
   */

  const cards = [
    {
      imageSrc: leak,
      title: "Leak Detection and Repair",
      description: ""
    },
    { imageSrc: pipeinstall, title: "Pipe Installation and Repair" ,description:""},
    { imageSrc: toilet, title: "Toilet Installation and Repair", description:""},
    { imageSrc: sink, title: "Faucet,Sink,Basin Repair and Installation",description:"" },
    { imageSrc: bathtub, title: "Tile,Shower,Bathtub Repair and Installation",description:"" },
    { imageSrc: watertank, title: "Tank Related Issue and installation",description:"" },
    { imageSrc: SimpleIconImage, title: "Bathroom Fitting and Installation",description:"" },
    { imageSrc: motor, title: "Water Motor Pump Services",description:"" },
    { imageSrc: emergency, title: "Emergency Plumbing Services",description:"" },
    { imageSrc: rainwater, title: "Rainwater Harvestion System Installation",description:"" },
    { imageSrc: waterprof, title: "Water Proffing Solution and repair",description:"" },
    { imageSrc: geyser, title: "Geyser Repair and Installation",description:"" },

  ];

  return (
    <Container>
      <ThreeColumnContainer>
        <Heading>Our Professional <span tw="text-primary-500">Services</span></Heading>
        {cards.map((card, i) => (
          <Column key={i}>
            <Card>
              <span className="imageContainer">
                <img src={card.imageSrc || defaultCardImage} alt="" />
              </span>
              <span className="textContainer">
                <span className="title">{card.title || "Fully Secure"}</span>
                <p className="description">
                  {card.description || ""}
                </p>
              </span>
            </Card>
          </Column>
        ))}
      </ThreeColumnContainer>
      <DecoratorBlob />
    </Container>
  );
};
