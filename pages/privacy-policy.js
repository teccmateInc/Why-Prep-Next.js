import React, { Component } from 'react';
import Navbar from '../components/Layouts/Navbar';
import PageBannerContent from '../components/Common/PageBannerContent';
import Footer from '../components/Layouts/Footer';

class PrivacyPolicy extends Component {
    render() {
        return (
            <React.Fragment>
                <Navbar />
                <PageBannerContent pageTitle="Privacy Policy" />

                <div className="ptb-70">
                    <div className="container">
                        <div className="main-text-content">

                            <p><strong>Effective Date: August 25, 2021</strong><br />
                                <strong>Posted Date: August 25, 2021</strong></p>

                            <p class="legal-callout legal-info">We’ve included annotations in the gray boxes below to emphasize certain portions of our notice and help guide you as you read them. The annotations aren’t summaries, so please take the time to read everything!</p>

                            <p>This Privacy Notice describes how Prep, Inc. and our affiliates (collectively, “Prep,” “we,” and “us”) collect, use, disclose, transfer, store, retain or otherwise process your information when you (whether you are a person acting as a sole proprietor or on behalf of another business entity) apply or sign up for a Prep Seller account and other services (including, but not limited to, Prep Capital) through Prep’s website or applications (collectively, “Services”).</p>

                            <p>This Privacy Notice applies to information collected in connection with your access to and use of our Services. Please read this Privacy Notice carefully. By continuing to interact with our Services, you are consenting to the practices described in this Privacy Notice.</p>

                            <p>Our Privacy Notice explains:</p>

                            <ul>
                                <li><a href="#what">INFORMATION WE COLLECT ABOUT YOU</a></li>
                                <li><a href="#customers">INFORMATION WE MAY COLLECT ABOUT YOUR CUSTOMERS</a></li>
                                <li><a href="#sources">SOURCES OF INFORMATION WE COLLECT ABOUT YOU</a></li>
                                <li><a href="#how">HOW WE USE YOUR INFORMATION</a></li>
                                <li><a href="#when">WHEN AND WITH WHOM WE SHARE YOUR INFORMATION</a>
                                    <ul>
                                        <li><a href="#cookies">Cookies and Other Similar Automated Technologies</a></li>
                                        <li><a href="#third">Third-Party Analytics Services</a></li>
                                        <li><a href="#iba">Online Tracking and Interest-Based Advertising</a></li>
                                    </ul>
                                </li>
                                <li><a href="#long">HOW LONG WE KEEP YOUR INFORMATION</a></li>
                                <li><a href="#choices">YOUR CHOICES</a>
                                    <ul>
                                        <li><a href="#online-behavioral">Online Behavioral or Interest-Based Advertising </a></li>
                                    </ul>
                                </li>
                                <li><a href="#childrens-information">CHILDREN’S PERSONAL INFORMATION</a></li>
                                <li><a href="#security">HOW WE SECURE INFORMATION</a></li>
                                <li><a href="#storage">STORAGE AND PROCESSING</a></li>
                                <li><a href="#changes">CHANGES TO THIS PRIVACY NOTICE</a></li>
                                <li><a href="#contact">HOW TO CONTACT US</a></li>
                            </ul>

                            <h3 id="what">INFORMATION WE COLLECT ABOUT YOU</h3>

                            <p class="legal-callout">We use your data to make Prep’s products and services work better for you and for others. This describes what data we get about you (which can vary depending on where you live).</p>

                            <h5 id="information-you-provide">Information You Provide</h5>

                            <p class="legal-callout">We use data you put into our systems when you open and use an account or other systems, like financial or tax information, information that identifies who you are, transaction information, and any other data you give us.</p>

                            <p>We collect information you provide when you:</p>
                            <ul>
                                <li>Make a request to receive information about Prep or our products;</li>
                                <li>Apply or sign up for a Prep account or other Services;</li>
                                <li>Go through our identity or account verification process, authenticate into your account, communicate with us, answer our surveys, upload content, or otherwise interact with the Services.</li>
                            </ul>

                            <p>We call this information <strong>Seller Account Data</strong>.</p>

                            <p>Specifically, we collect (and/or have collected during at least the 12-month period preceding the effective date of this Privacy Notice) the following categories of information:</p>
                            <ul>
                                <li><strong>Financial information</strong>, such as bank account information and payment card numbers;</li>
                                <li><strong>Identification Information</strong>, such as:
                                    <ul>
                                        <li>Name, email address, postal address, signature, and phone number;</li>
                                        <li>Passport number, driver’s license number, Social Security number, Taxpayer Identification number, or other government-issued identification number;</li>
                                    </ul>
                                </li>
                                <li><strong>Tax information</strong>, such as withholding allowances and tax filing status.</li>
                                <li><strong>Transaction Information</strong>, such as information about when and where payment transactions occur, the names of the transacting parties, a description of the transactions, the payment or transfer amounts, billing and shipping information, and the devices and payment methods used to complete the transactions.</li>
                                <li><strong>Other Information You Provide</strong>, such as information that you voluntarily provide to us, including your survey responses; participation in contests, promotions, or other prospective seller marketing forms or devices; suggestions for improvements; referrals; or any other actions you perform on the Services.</li>
                            </ul>

                            <h5 id="information-we-collect-from-your-use-of-the-services">Information We Collect From Your Use of the Services</h5>

                            <p class="legal-callout">We also get data from the devices you use when you interact with our systems, like your location or information about the device you’re using. <a href="#">We need this data to do things like</a> help protect your account from hackers, combat fraud, check if payments are being made or received legally and by you, and making our products and services better for you and others.</p>

                            <ul>
                                <li><strong>Commercial information</strong>, such as information about the products and services you sell (e.g., inventory, pricing and other data) and information about your payment transactions (e.g., when and where the transactions occur, a description of the transactions, the payment or transfer amounts, billing and shipping information, and payment methods used to complete the transactions);</li>
                                <li><strong>Electronic information</strong>, such as web browser and device characteristics;</li>
                                <li><strong>Geolocation data</strong>, which includes the location of your device. For more information and to learn how to disable collection of location information from your mobile device, please <a href="#location">see below</a>;</li>
                                <li><strong>Internet or other electronic network activity information</strong>, which includes information about how you use and interact with our Services, including your access time, “log-in” and “log-out” information, browser type and language, the domain name of your internet service provider, other attributes about your browser, any specific page you visit on our platform, content you view, features you use, the date and time of your use of the Services, your search terms, and the website you visited before you visited or used the Services;</li>
                                <li><strong>Online identifiers</strong> (e.g., information you use to log in to your account), Internet Protocol (“IP”) address, and unique personal identifiers (including device identifier; cookies, beacons, pixel tags, mobile ad identifiers and similar technology; customer number; unique alias, and other identifiers);</li>
                                <li><strong>Professional or employment-related information</strong>, such as information you provide about your business (e.g., appointments, staffing availability, and contact data) and your employees (e.g., job titles, payroll information, and hours worked and other timecard data); and</li>
                                <li><strong>Inferences</strong> drawn from any of the information above to create a profile about you that may reflect, for example, your preferences, characteristics, and behavior, including for account security purposes or to enhance our Services to you.</li>
                            </ul>

                            <h5 id="information-we-collect-from-other-sources">Information We Collect From Other Sources</h5>

                            <p class="legal-callout">We also need to check that you are using our services legally, that you are eligible for the services you want to use, and we protect your data and our services from fraudsters who may put you and your money at risk. To do this, we may collect data about you from companies that help us verify your identity, do a credit check, prevent fraud or assess risk.</p>

                            <ul>
                                <li><strong>Background check information</strong>, including credit report information, identity verification information, and information about any person or corporation with whom you have had, currently have, or may have a financial relationship;</li>
                                <li><strong>Credit, Compliance and Fraud</strong>. Information about you from third parties for any credit investigation, credit eligibility, identity or account verification process, fraud detection process, or collection procedure, or as may otherwise be required by applicable law. This includes, without limitation, the receipt and exchange of account or credit-related information with any credit reporting agency or credit bureau, where lawful, and any person or corporation with whom you have had, currently have, or may have a financial relationship, including without limitation past, present, and future places of employment, financial institutions, and personal reporting agencies.</li>
                            </ul>

                            <h3 id="customers">INFORMATION WE MAY COLLECT ABOUT YOUR CUSTOMERS</h3>

                            <p>We also obtain information about your customers on your behalf when they transact with you. We call this information <strong>Your Customers’ Data</strong>. We collect Your Customers’ Data when they transact with you through your use of Prep’s products, for instance when they make a payment at your establishment, or schedule an appointment, or receive an invoice from you. The particular Customer Data we collect will vary depending on how you use our products and services and which products and services you use. Your Customers’ Data may include:</p>
                            <ul>
                                <li><strong>Device Information</strong>. Information about Your Customer’s device, including hardware model, operating system and version, device name, unique device identifier, mobile network information, and information about the device’s interaction with our Services.</li>
                                <li><strong>Financial Information</strong>. Bank account and payment card numbers.</li>
                                <li><strong>Identification Information</strong>. Your Customers’ name; email address; mailing address; phone number; government-issued identification; or other historical, contact, and demographic information, and signature.</li>
                                <li><strong>Location Information</strong>. The location of Your Customer’s device if they pay with Apple or Android Pay.</li>
                                <li><strong>Transaction Information</strong>. When Your Customers use Prep to make or record payments to you, we collect information about when and where the transactions occur, the names of the transacting parties, a description of the transactions which may include item-level data, the payment or transfer amounts, billing and shipping information, and the devices and payment methods used to complete the transactions.</li>
                                <li><strong>Use Information</strong>. Information about how Your Customers transact with you using our Services, including access time, “log-in” and “log-out” information, browser type and language, country and language setting on your device, IP address, the domain name of Your Customer’s Internet service provider, other attributes about Your Customer’s browser, mobile device and operating system, features Your Customer uses, and the date and time of use of the Services.</li>
                                <li><strong>Other Information You or Your Customers Provide</strong>. Information that Your Customers voluntarily provide you, or that you input into Prep’s systems about your Customers.  For example, survey responses; participation in contests, promotions, or other prospective seller marketing forms or devices; suggestions for improvements; notes you take about your customers, or any other actions performed when they transact with you using Prep.</li>
                            </ul>

                            <h5 id="information-your-customers-may-provide">Information Your Customers May Provide Prep</h5>

                            <ul>
                                <li><strong>Identification information</strong>. Your customers’ name, email address, or telephone number, which we link to a tokenized version of their payment card number.</li>
                            </ul>

                            <h3 id="sources">SOURCES OF INFORMATION WE COLLECT ABOUT YOU</h3>

                            <p class="legal-callout">We collect your information from you and the other sources listed below.</p>

                            <p>We collect (and/or have collected during at least the 12-month period preceding the effective date of this Privacy Notice) information about you from the following categories of sources:</p>
                            <ul>
                                <li>You directly, when you submit information to us or allow us to access information about you;</li>
                                <li>Your devices and applications when you interact with our website or use our Services;</li>
                                <li>Our group companies and affiliates;</li>
                                <li>Other sources, including:
                                    <ul>
                                        <li>Social media networks;</li>
                                        <li>Online advertising companies;</li>
                                        <li>Service providers who help us with third-party identity verification, credit confirmation and fraud detection;</li>
                                        <li>Credit bureaus and financial institutions;</li>
                                        <li>Mailing list providers; and</li>
                                        <li>Publicly available sources (such as public records of criminal convictions and arrest records).</li>
                                    </ul>
                                </li>
                            </ul>

                            <h3 id="how">HOW WE USE YOUR INFORMATION</h3>

                            <p class="legal-callout">We use your data to do things like make sure the products you are using work, help you log in to your account, verify who you are, secure your data, fight fraud, follow the law, enforce our agreements, figure out what new products we can build, and market products to you that we think could make it easier for you to run your business.</p>

                            <p>We may collect, use and share (or have collected, used or shared during at least the 12-month period preceding the effective date of this Privacy Notice), information about you for the following reasons:</p>

                            <h5 id="performing-improving-and-developing-our-services">Performing, Improving and Developing our Services</h5>

                            <ul>
                                <li>Delivering the information and support you request, including technical notices, security alerts, and support and administrative messages such as to resolve disputes, collect fees, and provide assistance for problems with our Services or your Prep account;</li>
                                <li>Determining whether the Services are available in your country;</li>
                                <li>Developing new products and services;</li>
                                <li>Displaying your historical transaction or appointment information;</li>
                                <li>Improving, personalizing, and facilitating your use of our Services;</li>
                                <li>Processing or recording payment transactions or money transfers;</li>
                                <li>Providing, maintaining and improving our Services, including our website;</li>
                                <li>Doing internal research, measuring, tracking, and analyzing trends and usage; and</li>
                                <li>Otherwise providing you with the Prep products and features you choose to use.</li>
                            </ul>

                            <h5 id="communicating-with-you-about-our-services">Communicating with You About our Services</h5>

                            <ul>
                                <li>Sending you surveys and getting your feedback about our Services;</li>
                                <li>Providing information about and promoting our Services to you; and</li>
                                <li>Sending you information we think you may find useful or which you have requested from us about our products and services.</li>
                            </ul>

                            <h5 id="protecting-our-services-and-maintaining-a-trusted-environment">Protecting our Services and Maintaining a Trusted Environment</h5>

                            <ul>
                                <li>Conducting investigations, complying with and enforcing applicable laws, regulations, legal requirements and industry standards, and responding to lawful requests for information from the government or to valid legal process;</li>
                                <li>Contacting you to resolve disputes, collect fees, and help you with our Services;</li>
                                <li>Debugging to identify and fix errors that impair how our Services function;</li>
                                <li>Making sure you follow our <a href="https://prepth.com/term-condition">Terms of Service</a> or other applicable agreements or policies;</li>
                                <li>Investigating, detecting, preventing, recovering from or reporting fraud, misrepresentations, security breaches or incidents, other potentially prohibited, malicious, or illegal activities, or to otherwise help protect your account, including to dispute chargebacks on your behalf;</li>
                                <li>Protecting your, our, our customers’, or your customers’ rights or property, or the security or integrity of our Services;</li>
                                <li>Verifying or maintaining the quality and safety of our Services; and</li>
                                <li>Verifying your identity (e.g., through government-issued identification numbers).</li>
                            </ul>

                            <h5 id="advertising-and-marketing">Advertising and Marketing</h5>

                            <ul>
                                <li>Marketing our Services to you; and</li>
                                <li>Communicating with you about opportunities, products, services, contests, promotions, discounts, incentives, surveys, and rewards offered by us and select partners.</li>
                            </ul>

                            <p>If we send you marketing emails, each email will have instructions on  how you can “opt out” of getting future marketing from us.</p>

                            <p>To learn about what choices you have about interest-based advertising and cross-device tracking, please <a href="#cookies">see below</a>.</p>

                            <h5 id="other-uses">Other Uses</h5>

                            <ul>
                                <li>For any other reason we may tell you about from time to time.</li>
                            </ul>

                            <h3 id="when">WHEN AND WITH WHOM WE SHARE YOUR INFORMATION</h3>

                            <p class="legal-callout">We share your information with others in the circumstances described in this section.  For example, with other people with whom you interact when you use our services; within our family of companies, who may offer services that we think could be useful to you; with service providers who help us run our services; with ad platforms that help us market and advertise our services to you; or if we need to share your information to comply with the law.</p>

                            <p>We may share the personal information described in the <a href="#what">“Information We Collect About You”</a> section with the following categories of service providers and third parties:</p>

                            <h5 id="with-other-users-of-our-services-with-whom-you-interact">With other Users of our Services with Whom You Interact</h5>

                            <ul>
                                <li>With other users of our Services with whom you interact through your own use of our Services. For example, we may share information with your customers when you make or accept a payment, appointment, or money transfer using our Services.</li>
                            </ul>

                            <h5 id="with-our-affiliates">With our Affiliates and Group Companies</h5>

                            <ul>
                                <li>With our group companies and corporate affiliates, for the reasons outlined above. For example, we may share your information internally to understand how you engage with Prep company products to help make our Services better for you and for everyone, and to help us build Services tailored to your preferences.</li>
                            </ul>

                            <h5 id="with-our-service-providers">With our Service Providers</h5>

                            <ul>
                                <li>With service providers who help us provide, maintain, and improve our Services (e.g., vendors who help us with fraud prevention, identity verification, and fee collection services), as well as financial institutions, payment networks, payment card associations, credit bureaus, partners and other entities that help us provide the Services;</li>
                                <li>With service providers that help us run our advertising campaigns, contests, special offers, or other events or activities.</li>
                            </ul>

                            <h5 id="business-transfers-and-corporate-changes">Business Transfers and Corporate Changes</h5>

                            <ul>
                                <li>To a subsequent owner, co-owner, or operator of one or more of the Services; or</li>
                                <li>If we do or try to do a corporate merger, consolidation, or restructuring (including during due diligence and negotiation of these); the sale of substantially all of our stock and/or assets; the financing, acquisition, divestiture, or dissolution of all or a portion of our business; or other corporate change.</li>
                            </ul>

                            <h5 id="safety-and-compliance-with-law">Safety and Compliance with Law</h5>

                            <ul>
                                <li>If we believe that disclosure is reasonably necessary (i) to comply with any applicable law, regulation, legal process or governmental request (e.g., from creditors, tax authorities, law enforcement agencies, in response to a garnishment, levy, or lien notice, etc.); (ii) to establish, exercise or defend our legal rights; (iii) to enforce or comply with our <a href="https://prepth.com/term-condition">General Terms</a> or other applicable agreements or policies; (iv) to protect our or our customers’ rights or property, or the security or integrity of our Services; (v) for an investigation of suspected or actual illegal activity; or (vi) to protect us, users of our Services or the public from harm, fraud, or potentially prohibited or illegal activities.</li>
                            </ul>

                            <h5 id="with-your-consent">With Your Consent</h5>

                            <ul>
                                <li>With your consent. For example:
                                    <ul>
                                        <li>At your direction or as described at the time you agree to share; or</li>
                                        <li>When you authorize a third party application or website to access your information.</li>
                                    </ul>
                                </li>
                            </ul>

                            <h5 id="with-others">With Others</h5>

                            <ul>
                                <li>With other companies who deliver services on our behalf, including via the use of <a href="#cookies">cookies</a> and similar automated technologies, <a href="#third">third party analytics</a>, and <a href="#iba">online tracking and interest-based advertising</a>.</li>
                            </ul>

                            <h5 id="aggregated-and-anonymized-information">Aggregated and Anonymized Information</h5>

                            <ul>
                                <li>We also may share (within our group of companies or affiliates, or with service providers or other third parties) aggregated and anonymized information that does not specifically identify you or any individual user of our Services.</li>
                            </ul>

                            <h4 id="cookies">COOKIES AND OTHER SIMILAR TECHNOLOGIES</h4>

                            <p class="legal-callout">Digital cookies and similar technologies help us make our services better to use by doing things like recognizing when you’ve signed in, analyzing how you use our services so we can make them more useful to you, giving you a more personalized experience, and making our ads to you work better.</p>

                            <p>When you interact with our online services, or open emails we send you, we obtain certain information using automated technologies, such as cookies, web server logs, web beacons and other technologies.  A “cookie” is a text file that websites send to a visitor’s computer or other internet-connected device to uniquely identify the visitor’s browser or to store information or settings in the browser.  A “web beacon,” also known as an internet tag, pixel tag, or clear GIF, is a tiny graphic image that may be used in our websites or emails.</p>

                            <p>We use these automated technologies to collect your device information, internet activity information, and inferences as described above.  These technologies help us to:</p>
                            <ul>
                                <li>Remember your information so you do not have to re-enter it;</li>
                                <li>Track and understand how you use and interact with our online services and emails;</li>
                                <li>Tailor our online services to your preferences;</li>
                                <li>Measure how useful and effective our services and communications are to you; and</li>
                                <li>Otherwise manage and enhance our products and services.</li>
                            </ul>

                            <p>We set some of these automated technologies ourselves, but others are set by third parties who deliver services on our behalf.  For example, we may use other companies’ web analytics services (described in the <a href="#third">“Third-Party Analytics Services”</a> section), which use automated technologies to help us evaluate how customers use our websites.</p>

                            <p>Your browser can alert you when cookies are placed on your device, and how you can stop or disable them via your browser settings. Please note, however, that without cookies all of the features of our online services may not work properly. If you use a mobile device, you can manage how your device and browser share certain device data by changing the privacy and security settings on your mobile device. You can learn more about cookies and how to manage your preferences by visiting <a href="http://www.allaboutcookies.org">http://www.allaboutcookies.org</a>.</p>

                            <h4 id="third">THIRD-PARTY ANALYTICS SERVICES</h4>

                            <p class="legal-callout">We use other companies as service providers to help us analyze our site, track metrics, and advertise to you. These service providers generally promised us under contract to keep data private but have their own privacy policies that you should be aware of.</p>

                            <p>We may use third-party analytics service providers to help us with our online services, such as Google Analytics, Facebook, BugSnag and Crashlytics. The analytics providers that administer these services use technologies such as cookies, web beacons, and web server logs to help us analyze how you use our online services. We may disclose your <a href="#information-we-collect-from-your-use-of-the-services">site-use information</a> (including IP address) to these analytics providers, and other service providers who use the information to help us figure out how you and others use our online services.</p>
                            <ul>
                                <li>To learn more about Google Analytics and how to opt out, please visit <a href="https://marketingplatform.google.com/about/">https://marketingplatform.google.com/about/</a> or <a href="https://support.google.com/analytics/answer/181881?hl=en">https://support.google.com/analytics/answer/181881?hl=en</a>.</li>
                                <li>To learn more about how Facebook uses your data please visit <a href="https://www.facebook.com/help/325807937506242/">https://www.facebook.com/help/325807937506242/</a> or log on to your Facebook account and access your settings. To understand more about Facebook advertising please see here https://www.facebook.com/about/ads.</li>
                                <li>To learn more about BugSnag, please visit <a href="https://docs.bugsnag.com/legal/privacy-policy/">https://docs.bugsnag.com/legal/privacy-policy/</a>.</li>
                                <li>To learn more about Crashlytics, please visit <a href="https://fabric.io/terms">https://fabric.io/terms</a>.</li>
                            </ul>

                            <h4 id="iba">ONLINE TRACKING AND INTEREST-BASED ADVERTISING</h4>

                            <p>We and the service providers we use to advertise to you may collect information about your activities on Prep.  We use this information to advertise to you and to tailor our products and services to your interests.  You may see certain ads on other websites because we use third-party services to advertise our services to you. We use these services to target our ads to you and others based on your demographics, interests, and context. These third party ad services track your online activities over time and across multiple websites by collecting your information through automated technologies, including third-party cookies, web server logs, and web beacons. The ad services use this information to show you Prep ads that may be tailored to your individual interests. The information our ad services may collect on our behalf includes data about your visits to websites that serve Prep ads, such as the pages or ads you view and the actions you take on those websites. This data collection takes place both on our online services, and on third-party websites that serve our ads to you. This process also helps us figure out if our ads to you are effective.</p>

                            <p>To learn about how to opt out of interest-based advertising in the U.S., click <a href="#online-behavioral">here</a>.</p>

                            <p>Certain web browsers allow you to instruct your browser to respond to Do Not Track (“DNT”) signals to website you visit, informing those sites that you do not want your online activities to be tracked.  At this time, our websites are not designed to respond to DNT signals or similar mechanisms from browsers.</p>

                            <h3 id="long">HOW LONG WE KEEP YOUR INFORMATION</h3>

                            <p class="legal-callout">We keep your information as long as you keep using our products and services. After that, we keep it for as long as we need it to do things like fight fraud, collect fees you owe, resolve disputes with (or involving) you, follow the law, enforce our agreements and defend our rights in court.</p>

                            <p>We generally keep your information as long as reasonably necessary to provide you the Services or to comply with applicable law. However, even after you deactivate your account, we can retain copies of information about you and any transactions or Services in which you may have participated for a period of time that is consistent with applicable law, applicable statute of limitations or as we believe is reasonably necessary to comply with applicable law, regulation, legal process, or governmental request, to detect or prevent fraud, to collect fees owed, to resolve disputes, to address problems with our Services, to assist with investigations, to enforce our <a href="https://prepth.com/term-condition">General Terms</a> or other applicable agreements or policies, or to take any other actions consistent with applicable law.</p>

                            {/* <h3 id="choices">YOUR CHOICES</h3>

                            <p class="legal-callout">You can <a href="https://squareup.com/us/en/legal/general/privacy?preview=true#personal-information">see, change or fix</a> information you gave us, ask us to <a href="https://squareup.com/us/en/legal/general/privacy?preview=true#deactivating-your-account">deactivate</a> your account, control your <a href="https://squareup.com/us/en/legal/general/privacy?preview=true#location">location information</a>, or <a href="https://squareup.com/us/en/legal/general/privacy?preview=true#promotional-communications">tell us to stop marketing to you by opting out</a>.</p> */}

                            <h5 id="personal-information">Personal Information</h5>

                            <p>You may access, change, or correct information that you have provided by logging into your Prep account at any time or by making a request to us using the <a href="#contact">contact details below</a>. We will need to verify your identity before granting access or otherwise changing or correcting your information.</p>

                            <h5 id="deactivating-your-account">Deactivating Your Account</h5>

                            <p>If you wish to deactivate your account, you can do so by logging into your Prep account or by emailing us using the contact details <a href="#contact">provided below</a>.</p>

                            <h5 id="location">Location Information</h5>

                            <p>In order to provide certain Services, we may request access to location information, including precise geolocation information collected from your device. If you do not consent to the collection of this information, certain Services will not function properly and you will not be able to use those Services. You can stop our collection of location information at any time by changing the preferences on your mobile device. If you do so, some of our mobile applications will no longer function. You also may stop our collection of location information via mobile application by following the standard uninstall process to remove all Prep mobile applications from your device.</p>

                            <h5 id="promotional-communications">Promotional Communications</h5>

                            <p>You can opt out of receiving promotional messages from Prep by following the instructions in those messages, by informing the caller that you would not like to receive future promotional calls, or by changing your notification settings by logging into your Prep account. You may only opt out of text messages from Prep by replying STOP. Opting out of receiving communications may impact your use of the Services. If you decide to opt out, we may still send you non-promotional communications, such as digital receipts and messages about your account or our ongoing business relations.</p>

                            <h4 id="online-behavioral">ONLINE BEHAVIORAL OR INTEREST-BASED ADVERTISING</h4>

                            <h5 id="third-party-online-behavioral-or-interest-based-advertising-services-on-websites-including-mobile-websites">Third-Party Online Behavioral or Interest-Based Advertising Services on Websites (including Mobile Websites)</h5>

                            <p>Some of the advertising platforms that we use to collect information from or about you in order to provide more relevant advertising to you on websites participate in the DAA Self-Regulatory Program for Online Behavioral Advertising. This program offers a centralized location where users can make choices about the use of their information for online behavioral advertising. To make choices about the use of your information for online behavioral advertising on websites, please visit the <a href="http://optout.aboutads.info/?c=2&amp;lang=EN">Digital Advertising Alliance Webchoices tool</a>. If you opt out of online behavioral advertising using this method, this opt-out will only apply to the specific browser or device from which you opt out.</p>

                            <p>Some of the advertisers, advertising technology companies, and service providers that perform advertising-related services for us may be members of the Network Advertising Initiative (NAI), a cooperative of online marketing companies that offers a centralized tool for opting out of interest-based advertising delivered to each of its member companies. If you would like to opt out of the NAI’s members’ use of information from or about you on websites, please visit the <a href="http://optout.networkadvertising.org/?c=1">NAI’s opt-out of interest-based advertising page</a>. If you opt out of interest-based advertising using this method, this opt-out will only apply to the specific browser or device from which you opt out.</p>

                            <h5 id="third-party-online-behavioral-or-interest-based-advertising-services-within-mobile-applications">Third-Party Online Behavioral or Interest-Based Advertising Services Within Mobile Applications</h5>

                            <p>Some of the advertising platforms that we use to collect information from or about you in order to provide our advertising to you within mobile applications participate in the DAA Self-Regulatory Program for Online Behavioral Advertising. This program offers a mobile application called the “AppChoices,” which provides a centralized location where you can make choices about the use of your information for online behavioral advertising within the mobile environment. The AppChoices application can be downloaded from your mobile device at <a href="https://youradchoices.com/appchoices">www.aboutads.info/appchoices</a> or from your device’s app store. If you opt out of online behavioral advertising using this method, this opt-out will only apply to the specific browser or device from which you opt out.</p>

                            <p>On your mobile device, you may also go to your device settings and select “Limit Ad Tracking” (for iOS devices), or “Opt out of Interest-Based Ads” (for Android devices), which will allow you to limit our use of information collected from or about your mobile device (such as precise location data) for the purposes of serving online behavioral advertising to you.</p>

                            <h4 id="childrens-information">Children’s Personal Information</h4>

                            <p class="legal-callout">If you are a kid under 13, please don’t use our services. If we collect your data and later learn you are a kid under 13, we will delete it.</p>

                            <p>Our Services are general audience services not directed at children under the age of 13. If we learn that any information we collect has been provided by a child under the age of 13, we will promptly delete that information.</p>

                            <h3 id="security">SECURITY</h3>

                            <p class="legal-callout">We do a lot to keep your data safe. While we think we have strong defenses in place, no one can ever guarantee that hackers won’t be able to break into our sites or steal your data while it is stored or flowing from you to us or vice versa.</p>

                            <p>We take reasonable measures, including administrative, technical, and physical safeguards, to protect your information from loss, theft, and misuse, and unauthorized access, disclosure, alteration, and destruction. Nevertheless, the internet is not a 100% secure environment, and we cannot guarantee absolute security of the transmission or storage of your information. We hold information about you both at our own premises and with the assistance of third-party service providers.</p>


                            <h3 id="storage">STORAGE AND PROCESSING</h3>

                            <p class="legal-callout">We operate in many countries, and we (or our service providers) may move your data and process it outside the country where you live.</p>

                            <p>We may, and we may use third-party service providers to, process and store your information in the United States, Canada, Japan, the European Union, and other countries.</p>

                            <h3 id="changes">CHANGES TO THIS PRIVACY NOTICE</h3>

                            <p class="legal-callout">We can change this privacy notice. When the changes impact your rights or how we use your data in important ways, we’ll tell you first by email (if you’ve given us your email address).</p>

                            <p>We may amend this Privacy Notice from time to time by posting a revised version and updating the “Effective Date” above. The revised version will be effective on the “Effective Date” listed. We will provide you with reasonable prior notice of material changes in how we use your information, including by email if you have provided one. If you disagree with these changes, you may cancel your account at any time. If you keep using our Services, you consent to any amendment of this Privacy Notice.</p>

                            <h3 id="contact">CONTACT</h3>

                            <p>You can contact our privacy team with any questions or concerns at the address below.</p>

                            <p>Please contact our privacy team with any questions or concerns regarding this Privacy Notice:</p>

                        </div>
                    </div>
                </div>

                <Footer />
            </React.Fragment>
        );
    }
}

export default PrivacyPolicy;