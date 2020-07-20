import React from "react";
//import tw from "twin.macro"; //eslint-disable-line
//import { css } from "styled-components/macro"; //eslint-disable-line
import AnimationRevealPage from "helpers/AnimationRevealPage.js";

import Hero from "components/hero/BackgroundAsImage.js";
import Features from "components/features/DashedBorderSixFeatures";
import MainFeature from "components/features/TwoColSingleFeatureWithStats2.js";
import MainFeature2 from "components/features/TwoColWithTwoFeaturesAndButtons.js";
//import Portfolio from "components/cards/PortfolioTwoCardsWithImage.js";
import Blog from "components/blogs/ThreeColSimpleWithImageAndDashedBorder.js";
import Testimonial from "components/testimonials/TwoColumnWithImageAndProfilePictureReview.js";
import FAQ from "components/faqs/SimpleWithSideImage.js";
import ContactUsForm from "components/forms/TwoColContactUsWithIllustrationFullForm.js";
import Footer from "components/footers/MiniCenteredFooter.js";
import customerSupportIllustrationSrc from "images/customer-support-illustration.svg";

export default () => (
  <AnimationRevealPage>
    <Hero />
    <MainFeature />
    <Features />
    <MainFeature2 />
    {/*<Portfolio />*/}
    <Testimonial
      subheading="Testimonials"
      heading={
        <>
          Our Customers <span tw="text-primary-500">Love .</span>
        </>
      }
      description="Here are what some of our amazing customers are saying about our services."
      testimonials={[
        {
          imageSrc:
            "https://images.unsplash.com/photo-1542013936693-884638332954?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2134&q=80",
          profileImageSrc:
            "https://postmediavancouversun2.files.wordpress.com/2019/12/253314053-navjotpal_-nav-_kaur_memorial_university-w.jpg?quality=100&strip=all&w=380",
          quote:
            "I've been using HPlumber‘s services for years - they've always been super responsive, and comparatively inexpensive. Currently my house has a plumbing issues of sink installation, the plumber comes and solve the issue in the lowest cost.",
          customerName: "Payal Singh",
          customerTitle: "HR",
        },
        {
          imageSrc:
            "https://images.pexels.com/photos/1909656/pexels-photo-1909656.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
          profileImageSrc:
            "https://www.iirs.gov.in/iirs/sites/default/files/dr_sp_agarwal.jpg",
          quote:
            "There is an issue regarding my shower head. HPlumbers resolve this issue. Very professional, friendly made me really  comfortable. I plan on using them again. I highly recommended HPlumbers.",
          customerName: "Bhavesh Verma",
          customerTitle: "Manager",
        },
        {
          imageSrc:
            "https://2vy9q736xwbl3dhmvk1tb0ot-wpengine.netdna-ssl.com/wp-content/uploads/2018/07/toilet-leak264.jpg",
          profileImageSrc:
            "https://economictimes.indiatimes.com/blogs/wp-content/uploads/2017/10/Rema-1.jpg",
          quote:
            "I would like you to know that HPlumbers  was a pleasure to work with. they are thorough, patient and honest. There was a leakage in the bathroom sink and he resolve this problem very efficiently. I will recommend him to all my friends and family.",
          customerName: "Kavita Sharma",
          customerTitle: "Teacher",
        },
        {
          imageSrc:
            "https://dr55kig202lxr.cloudfront.net/gallery/v1/water-heater-repair-service.jpg",
          profileImageSrc:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcT4tCwYZU1Z08mMs6ImrRpJUGTfwRAJlv7iQg&usqp=CAU",
          quote:
            "I've been a loyal customer for years. They have always been professional, friendly and knowledgeable. Few days ago there is a geyser problem , the plumber comes on time  and solve the  problem . Once they fix something, it stays fixed. Good plumbing services in vasant kunj.",
          customerName: "Abhinav Raut",
          customerTitle: "Software Engineer",
        },
      ]}
      textOnLeft={true}
    />
    <FAQ
      imageSrc={customerSupportIllustrationSrc}
      imageContain={true}
      imageShadow={false}
      subheading="FAQs"
      heading={
        <>
          Do you have <span tw="text-primary-500">Questions ?</span>
        </>
      }
    />
    <Blog />
    <ContactUsForm />
    <Footer />
  </AnimationRevealPage>
);
