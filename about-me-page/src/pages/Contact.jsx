import { ContactBar } from "../components/ContactBar";
import FootBar from "../components/FootBar";
import NavegationBar from "../components/NavegationBar";
import { PageDescription } from "../components/PageDescription";
import { PageHeader } from "../components/PageHeader";

import linkedinIcon from "../assets/Linkedin.png";
import githubIcon from "../assets/Github.png";
import gmailIcon from "../assets/Gmail.png";
import pdfIcon from "../assets/Pdf.png";

import cv from "/files/CV.pdf";


export default function Contact() {
return (
  <>
    <NavegationBar/>
    <PageHeader children={"Get in touch."}/>
    <PageDescription>
    For business inquiries, research and collaborations please contact me
    below. I am looking forward to hearing from you!
    </PageDescription>
    <ContactBar sourceImage={gmailIcon} link='mailto:angmogollon@gmail.com'>Send me an Email</ContactBar>
    <ContactBar sourceImage={linkedinIcon} link='https://www.linkedin.com/in/angelo-coronado-m/'>Professional Network</ContactBar>
    <ContactBar sourceImage={githubIcon} link='https://github.com/Angelinis'>Developer Portfolio</ContactBar>
    <ContactBar sourceImage={pdfIcon} link={cv}>Curriculum</ContactBar>

    <FootBar/>
  </>
)
}