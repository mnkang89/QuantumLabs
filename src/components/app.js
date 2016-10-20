import React, { Component } from 'react';
import Scroll from 'react-scroll';
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
    return (
      <App googleAnalyticsKey="UA-42490151-3">
        <Page>
        <Navbar brand={brandImage}>
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

        <Hero backgroundImage="../../public/img/background/background.png"
          className="text-xs-center background-mainpage">
          <img className='mainpage-img' src='../../public/img/logo/qlab_3.png' width='372' height= '175' />
          <h1 className="display-4 mainpage-h1"> Neurotechnology for students</h1>
          <p>
          <a href="https://github.com/dennybritz/neal-react" target="_blank" className="btn btn-white mainpage">
            Buy NeuroBoost
          </a>
          </p>
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
        <Hero backgroundImage="../../public/img/product/product.jpeg"
          className="text-xs-center background-product">
        </Hero>

        <div id='science'></div>
        <div className="science">
          <div className="row">
            <div className="col-md-6" style={styles.science2}>
            </div>
            <div className="col-md-6">
              <p className="lead">tES</p>
              <p>Neal is based on <a href="http://v4-alpha.getbootstrap.com/" target="_blank">Bootstrap 4</a> and ships with navbar, hero, footer, sections, horizontal split, pricing tables, customer quotes and other components you need for a landing page. No more repetitive coding! Oh, and it's easy to extend.</p>
            </div>
          </div>
        </div>
        <div className="science">
          <div className="row">
            <div className="col-md-6">
              <p className="lead">fMRI</p>
              <p>Because you are relying on react.js and third-party integration you don't need a server to host your landing page. Simply upload it to an Amazon S3 bucket, enable website hosting, and it's ready to go!</p>
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
            <h5 className="display-4 team-h5">QuantumLabs Team</h5>
            <h5>We are a passionate team of researchers, engineers ,designers and marketing experts with headquarters in Seoul.</h5>
          </div>
          <br></br>
          <br></br>
          <div className="teamContainer">
            <Team>
              <TeamMember name="Jin Hyuk Han" title="CEO" imageUrl="../../public/img/people/dkLee.png" content="Yonsei Univ."></TeamMember>
              <TeamMember name="Min Seong Kang" title="CTO" imageUrl="../../public/img/people/dkLee.png" content="Yonsei Univ." ></TeamMember>
              <TeamMember name="Do kyung Lee" title="CDO / Design" imageUrl="../../public/img/people/dkLee.png" content="Hanyang Univ."></TeamMember>
              <TeamMember name="Jong Wook Jeong" title="CSO / Sales&Marketing " imageUrl="../../public/img/people/dkLee.png" content="Duke Univ."></TeamMember>
            </Team>
            <Team>
              <TeamMember name="Sang Hoon Han" title="CRO / Ph.D Neuroscience / R&D " imageUrl="../../public/img/people/dkLee.png" content="Duke Univ."></TeamMember>
              <TeamMember name="Jee Sung Ahn" title="Senior Researcher" imageUrl="../../public/img/people/dkLee.png" content="Yonesi Univ" ></TeamMember>
              <TeamMember name="Suhn Young Jun" title="Senior Researcher" imageUrl="../../public/img/people/dkLee.png" content="Yonesi Univ"></TeamMember>
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
  }
};
