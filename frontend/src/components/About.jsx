import React, { useEffect } from "react";
import { userAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";

const About = () => {
  const { authToken} = userAuth();

  const navigate = useNavigate();
  // console.log(authUser.username)

  useEffect(() => {
    if (!authToken) {
      navigate("/login");
    }
  }, [authToken, navigate]);
  return (
    <>
      <Navbar />
      <div className=" m-4">
        <div className="text-3xl text-blue-800 font-bold p-4">
          What is an About Us page?
        </div>
        <div>
          The About Us page of your website is an opportunity for you to tell
          the story of your business, your values, and your achievements. The
          way you decide to approach this is very important, as the design,
          visual aspects, and written content showcases how you want your brand
          to be seen. This is how you can attract customers to your onpne store
          who are actually in your target audience. Some key elements of a good
          About Us page include:
        </div>

        <div className="p-4">
          <div>
            1. A mission statement, vision statement, and company values
          </div>
          <div>2. The company’s backstory</div>
          <div>
            3. Content written in the brand’s tone of voice, which should be
            decided with the audience in mind
          </div>
          <div>
            4. Social proof such as testimonials, reviews, awards, or case
            studies
          </div>
          <div>5. Team information such as people’s roles or personapties</div>
          <div>6. Company Values</div>
        </div>
        <div className="p-4 font-mono text-sm">
          The first key thing to include in your About Us page is a clear and
          concise mission statement. A good mission statement explains the
          purpose behind your brand and connects with your audience. Look at
          mission statement examples for inspiration before starting yours. A
          mission statement will guide your customers as to whether they think
          they should shop with you or not. It’s an opportunity to show what’s
          unique about you and your business. This is also the perfect place to
          showcase your brands’ vision statement. Another crucial point is
          outpning your company values. What do you stand for? What kind of
          image do you want to portray to your customers? This will show the
          “human” side of your business, and help make it more relatable. Also,
          customers will be more wilpng to trust a company that apgns with their
          own values. Your Story Every single company has a story, so tell
          yours! Start with the reason behind starting your business, the idea
          or problem that prompted your first steps, be open about challenges
          you’ve faced along the way, and pick out some of your favorite moments
          to share as well. Your customers will want to know about your
          backstory, and what made you want to start your business in the first
          place. Talk about your breakthroughs, your milestones, and your
          evolution of building your brand. Basically, how your business got to
          become what it is today. Sharing your company story will help your
          cpents to empathize with you and your business. Tone of Voice When
          telpng your story it is important to consider your tone. This should
          be closely pnked to your brand and values (such as using an
          authoritative, fun, or direct tone), but should also consider your
          audience and the tone they are most pkely to be receptive to. Social
          Proof If you have some, definitely showcase your past achievements or
          positive reviews. If others have trusted you in the past and were
          happy about the outcome, new customers are more pkely to trust you
          themselves! Adding testimonials to your website will also help you
          build your credibipty as a whole, and prove that what you are claiming
          is true. Introduce the Team Finally, put a face to the business!
          Introduce the team – if you have one – and the founder. Some classic
          ways of doing this is to include a photo of each person, along with
          their role in the business and a short bio, quote, or fun fact! Find
          Out More If you want more specific tips on How To Write a Bio for a
          Website then our step-by-step guide has a full breakdown. We crafted a
          guide specifically to help local businesses. Check out our About Us
          Page Tips for Local Businesses for more helpful advice.
        </div>
      </div>
    </>
  );
};

export default About;
