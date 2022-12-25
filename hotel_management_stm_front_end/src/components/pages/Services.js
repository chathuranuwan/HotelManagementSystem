import React from "react";
import "./Service.css";
import Navbar from "../../Navbar";
import CardItem from "../CardItem";
import Footer from "../Footer";

export default function Services() {
  return (
    <>
      <Navbar />
      <div className="cards">
        <h1 className="h1">Welcome to Hotel Grand</h1>
        <div
          clasose
          a
          Room
          that
          Suits
          for
          Your
          Needs
          className="cards__container"
        >
          <div className="cards__wrapper">
            <ul className="cards__items">
              <CardItem
                src="https://th.bing.com/th/id/R.f0c77d9e16673a3a1b8a236cc3a0b6cf?rik=6%2f4O74Yx%2fB9n5w&riu=http%3a%2f%2fi2.cdn.turner.com%2fcnnnext%2fdam%2fassets%2f150414120716-best-hotel-bars--o2-lounge-super-169.jpg&ehk=Re3xOEncYRCXdtvMmex7D8UgtIFqrTtiOWEkcvY8JU0%3d&risl=&pid=ImgRaw&r=0"
                text="BAR"
                path="/services"
                para="A bar is one of the key revenue-generating areas of the food and beverage service department in the hotel industry. The main function of the bar is to serve the alcoholic drinks in the appropriate glassware according to the customer's preferences."
              />
              <CardItem
                src="https://th.bing.com/th/id/R.94b5ddef424c012e2e44a4adf6d87efc?rik=KdO7R3kuSgNxVQ&pid=ImgRaw&r=0"
                text="FITNESS CENTER"
                path="/vehicles"
                para=" We appreciate the commitment our guests make to their daily fitness routines and regimes. As such our Fitness Center and extended programming is tailored towards the most health-conscious of clientele. Featuring French balconies that open to fresh air and panoramic views, our Fitness Center offers the latest equipment from premium brands as well as a variety of personalized experiences off and on-site."
              />
            </ul>
            <ul className="cards__items">
              <CardItem
                src="https://th.bing.com/th/id/R.c8a9f4f8b3f7b5c9c3236b73fbba0a7f?rik=sPLxuPoJe2vKQw&pid=ImgRaw&r=0"
                text="POOL"
                path="/vehicles"
                para="The main swimming pool has a size of about 385 sqm (27.5 x 14.5 m). There is also a slightly smaller swimming pool with two water slides and a separate children's pool next to it (5.0 x 5.5 m and 0.30 cm deep). The children's pool has a sun protection.
              "
              />
              <CardItem
                src="https://th.bing.com/th/id/R.2559017325c1e0a24d93464972c4d325?rik=KUY3Ith3lc%2fzkQ&pid=ImgRaw&r=0&sres=1&sresct=1"
                text="SPA"
                path="/vehicles"
                para="Our holistic Spa is a destination for respite, dedicated to the utmost in rejuvenation and relaxation. Guests can indulge in bespoke wellness services such as botanical-based facial and body treatments, signature Ayurvedic massage, or aromatherapy that fades the day away."
              />
            </ul>
            <ul className="cards__items">
              <CardItem
                src="https://th.bing.com/th/id/R.ba93fdacc262b6f99c48a3fb6b8f91d9?rik=0%2fWxbeTBA%2b%2bZVQ&pid=ImgRaw&r=0"
                text="SUIT"
                path="/vehicles"
                para="Our 116 suites preserve the residential elegance of the hotel’s original design while providing guests with a range of spacious layouts and modern appointments. Inside, guests will find luxurious walk-through dressing rooms with ample wardrobe space, full-length triptych mirrors with warm adjustable lighting, and generous vanities that evoke a sense of old Hollywood glamour."
              />
              <CardItem
                src="https://th.bing.com/th/id/R.a2b87bbff2801262913b5f6a1b4deef2?rik=aEK4uPRAEf1uvw&riu=http%3a%2f%2fwww.meridiangrand.co.uk%2fimages%2fhome-slides%2f4._Ballroom___Sangeet_.jpg&ehk=xK3LJ6Le9%2fJsITOOmezXQzWsTZsZJnLf4FzrMklQrJA%3d&risl=&pid=ImgRaw&r=0images/wedding.png"
                text="RECEPTION HALLS"
                path="/vehicles"
                para="It is fully air conditioned, well carpeted and given a separate entrance. It can accommodate 350 to 400 guests at a time for any sort of event. i.e. weddings, parties and business conferences. We also have a smaller hall for events that have fewer guests. For further information please contact our Marketing team to discuss your requirements, facilities and banquet packages."
              />
            </ul>
          </div>
        </div>
      </div>

      <Footer></Footer>
    </>
  );
}
