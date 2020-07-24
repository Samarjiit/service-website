import React from "react";
import tw from "twin.macro";
import styled from "styled-components";
import { css } from "styled-components/macro"; //eslint-disable-line
import {
  SectionHeading,
} from "components/misc/Headings.js";

import { ReactComponent as BriefcaseIcon } from "feather-icons/dist/icons/calendar.svg";
import { ReactComponent as MoneyIcon } from "feather-icons/dist/icons/phone-call.svg";
import { ReactComponent as Clock } from "feather-icons/dist/icons/clock.svg";
import { ReactComponent as Dollar } from "feather-icons/dist/icons/dollar-sign.svg";
import TeamIllustrationSrc from "images/plumber.jpg";
const Container = tw.div`relative`;
const TwoColumn = tw.div`flex flex-col md:flex-row justify-between max-w-screen-xl mx-auto py-20 md:py-24`;
const Column = tw.div`w-full max-w-md mx-auto md:max-w-none md:mx-0`;
const ImageColumn = tw(Column)`md:w-7/12 flex-shrink-0 h-80 md:h-auto`;
const TextColumn = styled(Column)((props) => [
  tw`md:w-3/6 mt-5 md:mt-0`,
  props.textOnLeft
    ? tw`md:mr-12 lg:mr-16 md:order-first`
    : tw`md:ml-12 lg:ml-16 md:order-last`,
]);

const Image = styled.div((props) => [
  `background-image: url("${props.imageSrc}");`,
  tw`rounded bg-contain bg-no-repeat bg-center h-full`,
]);
const TextContent = tw.div`lg:py-8 text-center md:text-left`;

const Heading = tw(
  SectionHeading
)`mt-4 font-black text-left text-3xl sm:text-4xl lg:text-5xl text-center md:text-left leading-tight`;
const Description = tw.p`mt-4 text-center md:text-left text-lg md:text-base lg:text-lg font-medium leading-relaxed text-secondary-100`;

const Features = tw.div`mt-8 max-w-sm mx-auto md:mx-0`;
const Feature = tw.div`mt-8 flex items-start flex-col md:flex-row`;

const FeatureIconContainer = styled.div`
  ${tw`mx-auto inline-block border border-primary-500 text-center rounded-full p-2 flex-shrink-0`}
  svg {
    ${tw`w-5 h-5 text-primary-500`}
  }
`;

const FeatureText = tw.div`mt-4 md:mt-0 md:ml-4 text-center md:text-left`;
const FeatureHeading = tw.div`font-bold text-xl text-primary-500`;
const FeatureDescription = tw.div`mt-1 text-base`;


export default ({
  
  heading = (
    <>
      HOW WE <span tw="text-primary-500">WORK</span>
    
    </>
  ),
  description = "",
 
  features = null,
  textOnLeft = true,
}) => {
  // The textOnLeft boolean prop can be used to display either the text on left or right side of the image.

  /*
   * Change the features variable as you like, add or delete objects
   * `icon` must be a React SVG component. See how BriefcaseIcon is imported above. For a full list of available icons, see Feather Icons.
   */
  const defaultFeatures = [
    {
      Icon: BriefcaseIcon,
      title: "Schedule Your Service",
      description:
        "Book a service by call or appointment form. We will respond you in no time to serve you better.",
    },
    {
      Icon: MoneyIcon,
      title: "Talk To Plumber",
      description:
        "Explain your service to our expert. So that he can give you real time solution by understanding the situation.",
    },
    {
      Icon: Clock,
      title: "Watch Your Work Done On Time",
      description:
        "We start according to your convenience and finish on time so that you can live happily.",
    },
    {
      Icon: Dollar,
      title: "Estimate Your Services",
      description:
        "We offer fair and transparent pricing and provide estimate according to your service best in the market.",
    },
  ];

  if (!features) features = defaultFeatures;

  return (
    <Container>
      <TwoColumn>
        <ImageColumn>
          <Image imageSrc={TeamIllustrationSrc} />
        </ImageColumn>
        <TextColumn textOnLeft={textOnLeft}>
          <TextContent>
            
            <Heading>{heading}</Heading>
            <Description>{description}</Description>
            <Features>
              {features.map((feature, index) => (
                <Feature key={index}>
                  <FeatureIconContainer>
                    {<feature.Icon />}
                  </FeatureIconContainer>
                  <FeatureText>
                    <FeatureHeading>{feature.title}</FeatureHeading>
                    <FeatureDescription>
                      {feature.description}
                    </FeatureDescription>
                  </FeatureText>
                </Feature>
              ))}
            </Features>
            
          </TextContent>
        </TextColumn>
      </TwoColumn>
    </Container>
  );
};
