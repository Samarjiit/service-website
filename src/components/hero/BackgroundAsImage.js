import React from "react";
import tw from "twin.macro";
import styled from "styled-components";
import { PrimaryButton as PrimaryButtonBase } from "components/misc/Buttons.js";
import { css } from "styled-components/macro"; //eslint-disable-line

import Header, {
  NavLink,
  NavLinks,
  PrimaryLink,
  LogoLink,
  NavToggle,
  DesktopNavLinks,
} from "../headers/light.js";
import ResponsiveVideoEmbed from "../../helpers/ResponsiveVideoEmbed.js";

const StyledHeader = styled(Header)`
  ${tw`pt-8 max-w-none`}
  ${DesktopNavLinks} ${NavLink}, ${LogoLink} {
    ${tw`text-gray-100 hover:border-gray-300 hover:text-gray-300`}
  }
  ${NavToggle}.closed {
    ${tw`text-gray-100 hover:text-primary-500`}
  }
`;
const Container = styled.div`
  ${tw`relative -mx-8 -mt-8 bg-center bg-cover`}
  background-image: url("http://modernplumbers.com/wp-content/uploads/2016/05/bathroom-kitchen-background-image.jpg");
`;

const OpacityOverlay = tw.div`z-10 absolute inset-0 bg-black opacity-50`;

const HeroContainer = tw.div`z-20 relative px-4 sm:px-8 max-w-screen-xl mx-auto`;
const TwoColumn = tw.div`pt-24 pb-32 px-4 flex justify-between items-center flex-col lg:flex-row`;
const LeftColumn = tw.div`flex flex-col items-center lg:block`;
const RightColumn = tw.div`w-full sm:w-5/6 lg:w-1/2 mt-16 lg:mt-0 lg:pl-8`;

const Heading = styled.h1`
  ${tw`text-3xl text-center lg:text-left sm:text-4xl lg:text-5xl xl:text-6xl font-black text-gray-100 leading-none`}
  span {
    ${tw`inline-block mt-2`}
  }
`;

const SlantedBackground = styled.span`
  ${tw`relative text-primary-500 px-4 -mx-4 py-2`}
  &::before {
    content: "";
    ${tw`absolute inset-0 bg-gray-100 transform -skew-x-12 -z-10`}
  }
`;

const Notification = tw.span`inline-block my-4 pl-3 py-1 text-gray-100 border-l-4 border-blue-500 font-medium text-sm`;

const Link = styled(PrimaryButtonBase).attrs({ as: "a" })`
  ${tw`inline-block mt-4 text-lg font-bold`}
`;

const StyledResponsiveVideoEmbed = styled(ResponsiveVideoEmbed)`
  padding-bottom: 56.25% !important;
  padding-top: 0px !important;
  ${tw`rounded`}
  iframe {
    ${tw`rounded bg-black shadow-xl`}
  }
`;

export default () => {
  const navLinks = [
    <NavLinks key={1}>
      <NavLink href="https://blog.hplumbers.com/about/">About</NavLink>
      <NavLink href="">Services</NavLink>
      <NavLink href="https://blog.hplumbers.com/">Blogs</NavLink>
      <NavLink href="https://docs.google.com/forms/d/e/1FAIpQLSffIpwwqNuKNl5OV_OcCBIVOIvyzd2hmO8m-GREPLwahXVAEg/viewform?usp=sf_link ">Appointment</NavLink>

    </NavLinks>,
    <NavLinks key={2}>
      <PrimaryLink href="https://docs.google.com/forms/d/e/1FAIpQLSffIpwwqNuKNl5OV_OcCBIVOIvyzd2hmO8m-GREPLwahXVAEg/viewform?usp=sf_link  ">Call 9811524982 </PrimaryLink>&nbsp;
      <PrimaryLink href="https://docs.google.com/forms/d/e/1FAIpQLSffIpwwqNuKNl5OV_OcCBIVOIvyzd2hmO8m-GREPLwahXVAEg/viewform?usp=sf_link  ">  For A Free Quote</PrimaryLink>
    </NavLinks>,
  ];

  return (
    <Container>
      <OpacityOverlay />
      <HeroContainer>
        <StyledHeader links={navLinks} />
        <TwoColumn>
          <LeftColumn>
            {/* <Notification>We have now launched operations in delhi.</Notification>   */}
            <Heading>
              <br />
              <span>Hire the best</span>
              <br />
              <SlantedBackground>Plumbing Team</SlantedBackground>
            </Heading>
            <Link href="https://www.google.com/search?q=hplumbers&oq=hplumbers&aqs=chrome.0.69i59j0l4j69i60l3.3751j0j7&sourceid=chrome&ie=UTF-8#lrd=0x390d1fdd3a8bb24d:0xb39059accec2a5db,1,,,">
              Read Customer Reviews
            </Link>
          </LeftColumn>
          <RightColumn>
            {/*}  <StyledResponsiveVideoEmbed
              url="//player.vimeo.com/video/374265101?title=0&portrait=0&byline=0&autoplay=0&responsive=1"
              background="transparent"
  />*/}
          </RightColumn>
        </TwoColumn>
        <br />
        <br />
        <br />
        <br />
        <br />
      </HeroContainer>
    </Container>
  );
};
