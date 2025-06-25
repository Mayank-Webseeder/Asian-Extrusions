import React from 'react';
import Footer from '../components/Footer';
import ScrollToTopButton from '../components/ScrollToTopButton';
import Navbar from '../components/Navbar';
import MobileBottomNav from '../components/MobileBottomNav';

export default function TermsAndConditions() {
  return (
    <>
      <Navbar />
      <div className="w-full bg-[#0A4C91] py-16 px-4 mt-28">
        <div className="text-center">
          <h1 className="text-white text-5xl font-normal">
            Terms And Conditions
          </h1>
        </div>
      </div>
      <div className="min-h-screen  py-8 px-4">
        <div className="max-w-5xl mx-auto ">
          {/* Header */}
          <div className="mb-8">
            <p className="text-sm mb-4" style={{ color: '#05468D' }}>
              Last updated: July 05, 2023
            </p>

            <h1 className="text-3xl font-bold mb-6" style={{ color: '#05468D' }}>
              Welcome to Asian Extrusions!
            </h1>

            <p className="text-base mb-4" style={{ color: '#05468D' }}>
              These terms and conditions outline the rules and regulations for the use of Asian Extrusions's Website, located at{' '}
              <a
                href={`${import.meta.env.VITE_PUBLIC_URL}`}
                target="_blank"
                rel="noopener noreferrer"
                className="underline hover:no-underline"
                style={{ color: '#05468D' }}
              >
                {`${import.meta.env.VITE_PUBLIC_URL}`}
              </a>
            </p>

            <p className="text-base mb-4" style={{ color: '#05468D' }}>
              By accessing this website we assume you accept these terms and conditions. Do not continue to use Asian Extrusions if you do not agree to take all of the terms and conditions stated on this page.
            </p>

            <p className="text-base mb-6" style={{ color: '#05468D' }}>
              The following terminology applies to these Terms and Conditions, Privacy Statement and Disclaimer Notice and all Agreements: "Client", "You" and "Your" refers to you, the person log on this website and compliant to the Company's terms and conditions. "The Company", "Ourselves", "We", "Our" and "Us", refers to our Company. "Party", "Parties", or "Us", refers to both the Client and ourselves. All terms refer to the offer, acceptance and consideration of payment necessary to undertake the process of our assistance to the Client in the most appropriate manner for the express purpose of meeting the Client's needs in respect of provision of the Company's stated services, in accordance with and subject to, prevailing law of in. Any use of the above terminology or other words in the singular, plural, capitalization and/or he/she or they, are taken as interchangeable and therefore as referring to same.
            </p>
          </div>

          {/* Cookies Section */}
          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4" style={{ color: '#05468D' }}>
              Cookies
            </h2>
            <p className="text-base mb-4" style={{ color: '#05468D' }}>
              We employ the use of cookies. By accessing Asian Extrusions, you agreed to use cookies in agreement with the Asian Extrusions's Privacy Policy.
            </p>
            <p className="text-base" style={{ color: '#05468D' }}>
              Most interactive websites use cookies to let us retrieve the user's details for each visit. Cookies are used by our website to enable the functionality of certain areas to make it easier for people visiting our website. Some of our affiliate/advertising partners may also use cookies.
            </p>
          </section>

          {/* License Section */}
          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4" style={{ color: '#05468D' }}>
              License
            </h2>
            <p className="text-base mb-4" style={{ color: '#05468D' }}>
              Unless otherwise stated, Asian Extrusions and/or its licensors own the intellectual property rights for all material on Asian Extrusions. All intellectual property rights are reserved. You may access this from Asian Extrusions for your own personal use subjected to restrictions set in these terms and conditions.
            </p>

            <h3 className="text-xl font-semibold mb-4" style={{ color: '#05468D' }}>
              You must not:
            </h3>

            <ul className="list-disc pl-6 space-y-2 mb-4">
              <li style={{ color: '#05468D' }}>
                Republish material from Asian Extrusions
              </li>
              <li style={{ color: '#05468D' }}>
                Sell, rent or sub-license material from Asian Extrusions
              </li>
              <li style={{ color: '#05468D' }}>
                Reproduce, duplicate or copy material from Asian Extrusions
              </li>
              <li style={{ color: '#05468D' }}>
                Redistribute content from Asian Extrusions
              </li>
            </ul>
          </section>

          {/* Agreement Section */}
          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4" style={{ color: '#05468D' }}>
              This Agreement shall begin on the date hereof.
            </h2>
            <p className="text-base mb-4" style={{ color: '#05468D' }}>
              Parts of this website offer an opportunity for users to post and exchange opinions and information in certain areas of the website. Asian Extrusions does not filter, edit, publish or review Comments prior to their presence on the website. Comments do not reflect the views and opinions of Asian Extrusions,its agents and/or affiliates. Comments reflect the views and opinions of the person who post their views and opinions. To the extent permitted by applicable laws, Asian Extrusions shall not be liable for the Comments or for any liability, damages or expenses caused and/or suffered as a result of any use of and/or posting of and/or appearance of the Comments on this website.
            </p>

            <p className="text-base mb-4" style={{ color: '#05468D' }}>
              Asian Extrusions reserves the right to monitor all Comments and to remove any Comments which can be considered inappropriate, offensive or causes breach of these Terms and Conditions.
            </p>

            <h3 className="text-xl font-semibold mb-4" style={{ color: '#05468D' }}>
              You warrant and represent that:
            </h3>

            <ul className="list-disc pl-6 space-y-2 mb-4">
              <li style={{ color: '#05468D' }}>
                You are entitled to post the Comments on our website and have all necessary licenses and consents to do so;
              </li>
              <li style={{ color: '#05468D' }}>
                The Comments do not invade any intellectual property right, including without limitation copyright, patent or trademark of any third party;
              </li>
              <li style={{ color: '#05468D' }}>
                The Comments do not contain any defamatory, libelous, offensive, indecent or otherwise unlawful material which is an invasion of privacy
              </li>
              <li style={{ color: '#05468D' }}>
                The Comments will not be used to solicit or promote business or custom or present commercial activities or unlawful activity.
              </li>
              <li style={{ color: '#05468D' }}>
                You hereby grant Asian Extrusions a non-exclusive license to use, reproduce, edit and authorize others to use, reproduce and edit any of your Comments in any and all forms, formats or media.
              </li>
            </ul>
          </section>

          {/* Hyperlinking Section */}
          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4" style={{ color: '#05468D' }}>
              Hyperlinking to our Content
            </h2>
            <p className="text-base mb-4" style={{ color: '#05468D' }}>
              The following organizations may link to our Website without prior written approval:
            </p>

            <ul className="list-disc pl-6 space-y-2 mb-4">
              <li style={{ color: '#05468D' }}>Government agencies;</li>
              <li style={{ color: '#05468D' }}>Search engines;</li>
              <li style={{ color: '#05468D' }}>News organizations;</li>
              <li style={{ color: '#05468D' }}>
                Online directory distributors may link to our Website in the same manner as they hyperlink to the Websites of other listed businesses; and
              </li>
              <li style={{ color: '#05468D' }}>
                System wide Accredited Businesses except soliciting non-profit organizations, charity shopping malls, and charity fundraising groups which may not hyperlink to our Web site.
              </li>
            </ul>

            <p className="text-base mb-4" style={{ color: '#05468D' }}>
              These organizations may link to our home page, to publications or to other Website information so long as the link: (a) is not in any way deceptive; (b) does not falsely imply sponsorship, endorsement or approval of the linking party and its products and/or services; and (c) fits within the context of the linking party's site.
            </p>

            <p className="text-base mb-4" style={{ color: '#05468D' }}>
              We may consider and approve other link requests from the following types of organizations:
            </p>

            <ul className="list-disc pl-6 space-y-2 mb-4">
              <li style={{ color: '#05468D' }}>commonly-known consumer and/or business information sources;</li>
              <li style={{ color: '#05468D' }}>dot.com community sites;</li>
              <li style={{ color: '#05468D' }}>associations or other groups representing charities;</li>
              <li style={{ color: '#05468D' }}>online directory distributors;</li>
              <li style={{ color: '#05468D' }}>internet portals;</li>
              <li style={{ color: '#05468D' }}>accounting, law and consulting firms; and</li>
              <li style={{ color: '#05468D' }}>educational institutions and trade associations.</li>
            </ul>

            <p className="text-base mb-4" style={{ color: '#05468D' }}>
              We will approve link requests from these organizations if we decide that: (a) the link would not make us look unfavorably to ourselves or to our accredited businesses; (b) the organization does not have any negative records with us; (c) the benefit to us from the visibility of the hyperlink compensates the absence of Asian Extrusions; and (d) the link is in the context of general resource information.
            </p>

            <p className="text-base mb-4" style={{ color: '#05468D' }}>
              These organizations may link to our home page so long as the link: (a) is not in any way deceptive; (b) does not falsely imply sponsorship, endorsement or approval of the linking party and its products or services; and (c) fits within the context of the linking party's site.
            </p>

            <p className="text-base mb-4" style={{ color: '#05468D' }}>
              If you are one of the organizations listed in paragraph 2 above and are interested in linking to our website, you must inform us by sending an e-mail to Asian Extrusions. Please include your name, your organization name, contact information as well as the URL of your site, a list of any URLs from which you intend to link to our Website, and a list of the URLs on our site to which you would like to link. Wait 2-3 weeks for a response.
            </p>

            <p className="text-base mb-4" style={{ color: '#05468D' }}>
              Approved organizations may hyperlink to our Website as follows:
            </p>

            <ul className="list-disc pl-6 space-y-2 mb-4">
              <li style={{ color: '#05468D' }}>By use of our corporate name; or</li>
              <li style={{ color: '#05468D' }}>By use of the uniform resource locator being linked to; or</li>
              <li style={{ color: '#05468D' }}>
                By use of any other description of our Website being linked to that makes sense within the context and format of content on the linking party's site.
              </li>
            </ul>

            <p className="text-base" style={{ color: '#05468D' }}>
              No use of Asian Extrusions's logo or other artwork will be allowed for linking absent a trademark license agreement.
            </p>
          </section>

          {/* iFrames Section */}
          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4" style={{ color: '#05468D' }}>
              iFrames
            </h2>
            <p className="text-base" style={{ color: '#05468D' }}>
              Without prior approval and written permission, you may not create frames around our Webpages that alter in any way the visual presentation or appearance of our Website.
            </p>
          </section>

          {/* Content Liability Section */}
          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4" style={{ color: '#05468D' }}>
              Content Liability
            </h2>
            <p className="text-base" style={{ color: '#05468D' }}>
              We shall not be hold responsible for any content that appears on your Website. You agree to protect and defend us against all claims that is rising on your Website. No link(s) should appear on any Website that may be interpreted as libelous, obscene or criminal, or which infringes, otherwise violates, or advocates the infringement or other violation of, any third party rights.
            </p>
          </section>

          {/* Reservation of Rights Section */}
          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4" style={{ color: '#05468D' }}>
              Reservation of Rights
            </h2>
            <p className="text-base" style={{ color: '#05468D' }}>
              We reserve the right to request that you remove all links or any particular link to our Website. You approve to immediately remove all links to our Website upon request. We also reserve the right to amen these terms and conditions and it's linking policy at any time. By continuously linking to our Website, you agree to be bound to and follow these linking terms and conditions.
            </p>
          </section>

          {/* Removal of Links Section */}
          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4" style={{ color: '#05468D' }}>
              Removal of links from our website
            </h2>
            <p className="text-base mb-4" style={{ color: '#05468D' }}>
              If you find any link on our Website that is offensive for any reason, you are free to contact and inform us any moment. We will consider requests to remove links but we are not obligated to or so or to respond to you directly.
            </p>
            <p className="text-base" style={{ color: '#05468D' }}>
              We do not ensure that the information on this website is correct, we do not warrant its completeness or accuracy; nor do we promise to ensure that the website remains available or that the material on the website is kept up to date.
            </p>
          </section>

          {/* Disclaimer Section */}
          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4" style={{ color: '#05468D' }}>
              Disclaimer
            </h2>
            <p className="text-base mb-4" style={{ color: '#05468D' }}>
              To the maximum extent permitted by applicable law, we exclude all representations, warranties and conditions relating to our website and the use of this website. Nothing in this disclaimer will:
            </p>

            <ul className="list-disc pl-6 space-y-2 mb-4">
              <li style={{ color: '#05468D' }}>
                limit or exclude our or your liability for death or personal injury;
              </li>
              <li style={{ color: '#05468D' }}>
                limit or exclude our or your liability for fraud or fraudulent misrepresentation;
              </li>
              <li style={{ color: '#05468D' }}>
                limit any of our or your liabilities in any way that is not permitted under applicable law; or
              </li>
              <li style={{ color: '#05468D' }}>
                exclude any of our or your liabilities that may not be excluded under applicable law.
              </li>
            </ul>

            <p className="text-base mb-4" style={{ color: '#05468D' }}>
              The limitations and prohibitions of liability set in this Section and elsewhere in this disclaimer: (a) are subject to the preceding paragraph; and (b) govern all liabilities arising under the disclaimer, including liabilities arising in contract, in tort and for breach of statutory duty.
            </p>

            <p className="text-base" style={{ color: '#05468D' }}>
              As long as the website and the information and services on the website are provided free of charge, we will not be liable for any loss or damage of any nature.
            </p>
          </section>
        </div>
      </div>
      <Footer />
      <MobileBottomNav />
      <ScrollToTopButton />
    </>
  );
}