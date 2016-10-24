import React, { Component } from 'react';
import Scroll from 'react-scroll';
import Slider from 'react-slick';
import {
  App,
  Code,
  CustomerQuote, CustomerQuotes,
  DropdownMenu, DropdownToggle,
  Footer, FooterAddress,
  Hero,
  HorizontalSplit,
  ImageList, ImageListItem,
  Navbar, NavItem,
  Page,
  PricingPlan, PricingTable,
  Section,
  SignupInline, SignupModal,
  Stripe
} from "neal-react";
import {
   TeamMember,
   Team
 } from './common';
import Contact from './common/Contact';
import Googlemap from './common/Googlemap';
import ScienceText from './common/ScienceText';
import Modal from './common/modal';

const Link = Scroll.Link;
const Element = Scroll.Element;

const brandName = "QuantumLabs";
const brand = <span>{brandName}</span>;
const brandImage= <img src="../../public/img/logo/qlab_5.png" width="210" height="43" />
const businessAddress = (
  <address>
    <strong>{brandName}</strong><br/>
    1337 Market Street, Suite 1337<br/>
    San Francisco, CA 94103<br/>
    +1 (123) 456-7890
  </address>
);

export default class app extends Component {
  render() {
    const settings = {
      dots: true,
      speed: 1000,
      slidesToShow: 1,
      infinite: true,
      autoplay: true,
      autoplaySpeed: 5000,
      dotsClass: 'slick-dots slick-thumb'
    }

    return (
      <App googleAnalyticsKey="UA-42490151-3">
        <Page>
        <Navbar brand={brandImage} >
          <NavItem>
            <Link
              to="product"
              spy={true}
              smooth={true}
              offset={50}
              duration={500}>
              <a href="#" className="nav-link">Product</a>
            </Link>
          </NavItem>
          <NavItem>
            <Link
              to="science"
              spy={true}
              smooth={true}
              offset={50}
              duration={500}>
              <a href="#" className="nav-link">Science</a>
            </Link>
          </NavItem>
          <NavItem>
            <Link
              to="usage"
              spy={true}
              smooth={true}
              offset={50}
              duration={500}>
              <a href="#" className="nav-link">Usage</a>
            </Link>
          </NavItem>
          <NavItem>
            <Link
              to="team"
              spy={true}
              smooth={true}
              offset={50}
              duration={500}>
              <a href="#" className="nav-link">Team</a>
            </Link>
          </NavItem>
          <NavItem>
            <Link
              to="contact"
              spy={true}
              smooth={true}
              offset={50}
              duration={500}>
              <a href="#" className="nav-link">Contact</a>
            </Link>
          </NavItem>
          <NavItem>
            <a href="http://neuroboost.blog.me" className="nav-link" target="_blank">Blog</a>
          </NavItem>
        </Navbar>

        <Hero backgroundImage="../../public/img/product/NB1.png"
          className="text-xs-center home">
          <img className='mainpage-img' src='../../public/img/logo/qlab_3.png' width='372' height= '175' />
          <h1 className="display-4 mainpage-h1"> Neurotechnology for students</h1>
          <p>
          <Link
            to="buy"
            spy={true}
            smooth={true}
            offset={50}
            duration={500}>
            <a href="#" className="btn btn-white mainpage">Buy NeuroBoost</a>
          </Link>
          </p>
          <Modal>
            <h1>12312314221421</h1>
            <h1>nakdaasadsksa</h1>
          </Modal>
        </Hero>

        <Section className="subhero background-subhero">
          <ImageList centered>
            <ImageListItem src="../../public/img/press/cnn-logo.png" url="http://www.cnn.com"/>
            <ImageListItem src="../../public/img/press/forbes-logo.png" url="http://forbes.com/"/>
            <ImageListItem src="../../public/img/press/theverge-logo.png" url="http://www.theverge.com/"/>
            <ImageListItem src="../../public/img/press/techcrunch-logo.jpg" url="http://techcrunch.com/"/>
          </ImageList>
        </Section>

        <div id='product'></div>
        <Slider {...settings}>
          <div>
            <Hero backgroundImage="../../public/img/product/NB1.png"
              className="text-xs-center product1"></Hero>
          </div>
          <div>
            <Hero backgroundImage="../../public/img/product/NB1.png"
              className="text-xs-center product1"></Hero>
          </div>
        </Slider>

        <div id='buy'></div>

        <div id='science'></div>
        <div className="science">
          <div className="row">
            <div className="col-md-6" style={styles.science2}>
            </div>
            <div className="col-md-6">
              <ScienceText />
            </div>
          </div>
        </div>
        <div className="science">
          <div className="row">
            <div className="col-md-6">
              <ScienceText />
            </div>
            <div className="col-md-6" style={styles.science1}>
            </div>
          </div>
        </div>
        <div id='usage'></div>
        <Hero backgroundImage="../../public/img/usage/usage3.png" className="text-xs-center background-usage">
          <h1 className="display-3 usage-h1">A wearable device for students</h1>
          <p className="lead usage-p">Use it for 30 minutes a day and keep yourself focused!</p>
        </Hero>

        <div id='team'></div>
        <Section className="TeamSection">
          <div className="teamText">
            <h5 className="display-4 team-h5">퀀텀랩스 팀</h5>
            <h5>We are a passionate team of researchers, engineers ,designers and marketing experts with headquarters in Seoul.</h5>
          </div>
          <br></br>
          <br></br>
          <div className="teamContainer">
            <Team>
              <TeamMember name="한진혁" title="CEO" imageUrl="../../public/img/people/dkLee.png" content="Yonsei Univ."></TeamMember>
              <TeamMember name="강민성" title="CTO" imageUrl="../../public/img/people/dkLee.png" content="Yonsei Univ." ></TeamMember>
              <TeamMember name="이도경" title="CDO / Design" imageUrl="../../public/img/people/dkLee.png" content="Hanyang Univ."></TeamMember>
              <TeamMember name="정종욱" title="CSO / Sales&Marketing " imageUrl="../../public/img/people/dkLee.png" content="Duke Univ."></TeamMember>
            </Team>
            <Team>
              <TeamMember name="한상훈" title="CRO / Ph.D Neuroscience / R&D " imageUrl="../../public/img/people/dkLee.png" content="Duke Univ."></TeamMember>
              <TeamMember name="안지성" title="Senior Researcher" imageUrl="../../public/img/people/dkLee.png" content="Yonesi Univ" ></TeamMember>
              <TeamMember name="전선영" title="Senior Researcher" imageUrl="../../public/img/people/dkLee.png" content="Yonesi Univ"></TeamMember>
            </Team>
          </div>
        </Section>

        <div id='contact'></div>
        <Section className="contactSection">
          <div>
            <h5 className="display-4 team-h5">Contact us</h5>
          </div>
          <br></br>
          <div className="row">
            <div className="col-md-6">
              <Googlemap />
              <br></br>
              <div className="contactInfo">
                <h5 className="display-5 team-h5">Contact Info</h5>
                <br></br>
                <div className="row">
                  <div className="col-md-1">
                    <img src="../../public/img/kinoticon/mailbox.png" width='30' height='30' />
                  </div>
                  <div className="col-md-11">
                    <p className="contact-category">Inquiry</p>
                    <p>neurocare91@gmail.com</p>
                  </div>
                </div>
                <br></br>
                <div className="row">
                  <div className="col-md-1">
                    <img src="../../public/img/kinoticon/office.png" width='30' height='30' />
                  </div>
                  <div className="col-md-11">
                    <p className="contact-category">Office</p>
                    <p>대한민국 서울특별시 서대문구 신촌동 135</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <Contact />
            </div>
          </div>
        </Section>

        <Footer
          brandName={brandName}
          facebookUrl="http://www.facebook.com"
          twitterUrl="http://www.twitter.com/dennybritz"
          githubUrl="https://github.com/dennybritz/neal-react"
          address={businessAddress}>
        </Footer>
      </Page>
    </App>
    );
  }
}


const styles = {
  science1: {
    backgroundImage:'url(../../public/img/science/fMRI2.jpeg)',
    backgroundSize: 'cover',
    backgroundPosition: 'center'

  },
  science2: {
    backgroundImage: 'url(../../public/img/science/neuroscience.jpg)',
    backgroundSize: 'cover',
    backgroundPosition: 'center'
  },
  product1: {
    backgroundImage:'url(../../public/img/product/NB1.png)',
    backgroundSize: 'cover',
    backgroundPosition: 'center'
  },
  product2: {
    backgroundImage: 'url(../../public/img/product/NB1.png)',
    backgroundSize: 'cover',
    backgroundPosition: 'center'
  }
};
