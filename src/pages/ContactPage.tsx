import ContactDetail from "../components/Contact/ContactDetail";
import ContactForm from "../components/Contact/ContactForm";

const ContactPage = () => {
  return (
    <div>
      <h1 className="text-3xl mt-1 mb-7 font-bold">Əlaqə</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        <ContactForm />
        <ContactDetail />
      </div>
      <div className="my-7">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3038.2144525906983!2d49.83224999625357!3d40.404099755057175!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40307d2c5c4ab56b%3A0x21e177852f5ff94c!2sTechnote!5e0!3m2!1sen!2saz!4v1735388498397!5m2!1sen!2saz"
          width="100%"
          height="500"
          style={{ border: 0 }}
          allowFullScreen={true}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
  );
};

export default ContactPage;
