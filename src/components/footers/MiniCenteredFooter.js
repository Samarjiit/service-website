import React from "react";
import tw from "twin.macro";
import styled from "styled-components";
import {Container as ContainerBase } from "components/misc/Layouts.js"

import { ReactComponent as FacebookIcon } from "../../images/facebook-icon.svg";
import { ReactComponent as TwitterIcon } from "../../images/twitter-icon.svg";
import { ReactComponent as Linkedin } from "../../images/linkedin-icon.svg";

import { ReactComponent as Instagram } from "../../images/instagram1.svg";



const Container = tw(ContainerBase)`bg-gray-900 text-gray-100 -mx-8 -mb-8`
const Content = tw.div`max-w-screen-xl mx-auto py-20 lg:py-24`;

const Row = tw.div`flex items-center justify-center flex-col px-8`

const LogoContainer = tw.div`flex items-center justify-center md:justify-start`;

const LogoText = tw.h5`ml-2 text-2xl font-black tracking-wider`;

const LinksContainer = tw.div`mt-8 font-medium flex flex-wrap justify-center items-center flex-col sm:flex-row`
const Link = tw.a`border-b-2 border-transparent hocus:text-gray-300 hocus:border-gray-300 pb-1 transition duration-300 mt-2 mx-4`;

const SocialLinksContainer = tw.div`mt-10`;
const SocialLink = styled.a`
  ${tw`cursor-pointer inline-block text-gray-100 hover:text-gray-500 transition duration-300 mx-4`}
  svg {
    ${tw`w-10 h-10`}
  }
`;

const CopyrightText = tw.p`text-center mt-10 font-medium tracking-wide text-sm text-gray-600`
export default () => {
  return (
    <Container>
      <Content>
        <Row>
          <LogoContainer>
            
            <LogoText>HPlumbers</LogoText>
          </LogoContainer>
          <LinksContainer>
            <Link href="#">Home</Link>
            <Link href="https://blog.hplumbers.com/about/">About</Link>
            <Link href="#">Contact Us</Link>
            <Link href="https://blog.hplumbers.com/">Blog</Link>
            <Link href="https://www.google.com/search?q=hplumbers.&oq=hplumbers.&aqs=chrome..69i57j0l3j69i60l4.2886j0j7&sourceid=chrome&ie=UTF-8#lrd=0x390d1fdd3a8bb24d:0xb39059accec2a5db,1,,,">Reviews</Link>
          </LinksContainer>
          <SocialLinksContainer>
            <SocialLink href="https://www.facebook.com/HPlumbers/">
              <FacebookIcon />
            </SocialLink>
            <SocialLink href="https://twitter.com/hplumbers1">
              <TwitterIcon />
            </SocialLink>
            <SocialLink href="https://www.instagram.com/hplumbers/">
              <Instagram />
            </SocialLink>
            <SocialLink href="https://www.linkedin.com/company/hplumbers">
              <Linkedin />
            </SocialLink>
          </SocialLinksContainer>
          <CopyrightText>
            &copy; Copyright 2020, HPlumbers. All Rights Reserved.
          </CopyrightText>
        </Row>
      </Content>
    </Container>
  );
};
