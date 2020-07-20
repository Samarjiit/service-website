import React from "react";
import tw from "twin.macro";
import styled from "styled-components";
import {css} from "styled-components/macro"; //eslint-disable-line
import { SectionHeading as HeadingTitle, Subheading } from "components/misc/Headings.js";
import { PrimaryButton as PrimaryButtonBase } from "components/misc/Buttons.js";
import { ReactComponent as UserIcon } from "feather-icons/dist/icons/user.svg";
import { ReactComponent as TagIcon } from "feather-icons/dist/icons/tag.svg";
import { ReactComponent as SvgDecoratorBlob1 } from "../../images/svg-decorator-blob-1.svg";
import { ReactComponent as SvgDecoratorBlob2 } from "../../images/svg-decorator-blob-3.svg";

const Container = tw.div`relative`;
const Content = tw.div`max-w-screen-xl mx-auto py-20 lg:py-24`;
const ThreeColumn = tw.div`flex flex-col items-center lg:items-stretch lg:flex-row flex-wrap`;
const Column = tw.div`mt-24 lg:w-1/3`;

const HeadingInfoContainer = tw.div`flex flex-col items-center`;
const HeadingDescription = tw.p`mt-4 font-medium text-gray-600 text-center max-w-sm`;

const Card = tw.div`lg:mx-4 xl:mx-8 max-w-sm flex flex-col h-full`;
const Image = styled.div(props => [
  `background-image: url("${props.imageSrc}");`,
  tw`bg-cover bg-center h-80 lg:h-64 rounded rounded-b-none`
]);

const Details = tw.div`p-6 rounded border-2 border-t-0 rounded-t-none border-dashed border-primary-100 flex-1 flex flex-col items-center text-center lg:block lg:text-left`;
const MetaContainer = tw.div`flex items-center`;
const Meta = styled.div`
  ${tw`text-secondary-100 font-medium text-sm flex items-center leading-none mr-6 last:mr-0`}
  svg {
    ${tw`w-4 h-4 mr-1`}
  }
`;

const Title = tw.h5`mt-4 leading-snug font-bold text-lg`;
const Description = tw.p`mt-2 text-sm text-secondary-100`;
const Link = styled(PrimaryButtonBase).attrs({as: "a"})`
  ${tw`inline-block mt-4 text-sm font-semibold`}
`

const DecoratorBlob1 = tw(
  SvgDecoratorBlob1
)`-z-10 absolute bottom-0 right-0 w-48 h-48 transform translate-x-40 -translate-y-8 opacity-25`;
const DecoratorBlob2 = tw(
  SvgDecoratorBlob2
)`-z-10 absolute top-0 left-0 w-48 h-48 transform -translate-x-32 translate-y-full opacity-25`;

export default ({
  subheading = "Blog",
  heading = <>Latest <span tw="text-primary-500">Posts</span></>,
  description = "Some amazing blog posts",

}) => {
  const blogPosts = [
    {
      imageSrc:
        "https://images.pexels.com/photos/3940696/pexels-photo-3940696.jpeg?cs=srgb&dl=woman-in-white-robe-standing-in-front-of-glass-door-3940696.jpg&fm=jpg",
      author: "Yamini Sharma",
      category: "Bathroom",
      title: "7 Essential Bathroom Hacks that Makes your life easier",
      description: "Our bathroom is one of the most important places in our home. It is where we take a shower every day and get ready to start our day.It goes without saying that our bathrooms need to be organized and efficient.",
      url: "https://blog.hplumbers.com/7-essential-bathroom-hacks-that-makes-your-life-easier/"
    },
    {
      imageSrc:
        "https://agrsaihvac.com/wp-content/uploads/2017/02/ventilation-system.jpg",
      author: "Ansh Rastogi",
      category: "Accessories",
      title: "Why do you need proper ventilation at home?",
      description: "A house without proper ventilation is a cake without icing or facing the pandemic without a mask. Proper ventilation not only makes sure a healthy household but also expands the life of your house.",
      url: "https://blog.hplumbers.com/why-do-you-need-proper-ventilation-at-home/"
    },
    {
      imageSrc:
        "https://images.pexels.com/photos/615326/water-tap-black-and-white-macro-615326.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
      author: "Gitanjali Parida ",
      category: "Services",
      title: "5 common bathroom issues you face in day to day life",
      description: "As the bathroom is one of the basic things which we use in our day to day life. However, with regular use, it comes to tear and wear, which needed to be maintained on every month.",
      url: "https://blog.hplumbers.com/5-common-bathroom-issues-you-face-in-day-to-day-life/"
    },
      
  ];
  return (
    <Container>
      <Content>
        <HeadingInfoContainer>
          {subheading && <Subheading>{subheading}</Subheading>}
          <HeadingTitle>{heading}</HeadingTitle>
          <HeadingDescription>{description}</HeadingDescription>
        </HeadingInfoContainer>
        <ThreeColumn>
          {blogPosts.map((post, index) => (
            <Column key={index}>
              <Card>
                <Image imageSrc={post.imageSrc} />
                <Details>
                  <MetaContainer>
                    <Meta>
                      <UserIcon />
                      <div>{post.author}</div>
                    </Meta>
                    <Meta>
                      <TagIcon />
                      <div>{post.category}</div>
                    </Meta>
                  </MetaContainer>
                  <Title>{post.title}</Title>
                  <Description>{post.description}</Description>
                  <Link href={post.url}>Read Post</Link>
                </Details>
              </Card>
            </Column>
          ))}
        </ThreeColumn>
      </Content>
      <DecoratorBlob1 />
      <DecoratorBlob2 />
    </Container>
  );
};
