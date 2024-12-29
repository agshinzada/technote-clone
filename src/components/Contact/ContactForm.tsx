const ContactForm = () => {
  return (
    <div className="w-full">
      <form action="" className="flex flex-col gap-4">
        <input
          type="text"
          name="name"
          className="bg-white border border-black dark:bg-black dark:border-white rounded-lg w-full h-[40px] px-3 py-1 focus:outline-none text-sm"
          placeholder="Adınız Soyadınız"
          required
        />
        <input
          type="email"
          name="email"
          className="bg-white border border-black dark:bg-black dark:border-white rounded-lg w-full h-[40px] px-3 py-1 focus:outline-none text-sm"
          placeholder="Email adresiniz"
          required
        />

        <input
          type="text"
          name="subject"
          className="bg-white border border-black dark:bg-black dark:border-white rounded-lg w-full h-[40px] px-3 py-1 focus:outline-none text-sm"
          placeholder="Mövzu"
          required
        />
        <textarea
          name="message"
          rows={4}
          className="bg-white border border-black dark:bg-black dark:border-white rounded-lg w-full  px-3 py-1 focus:outline-none text-sm"
          placeholder="Mesajınız"
          required
        />
        <button
          className="bg-black  text-white hover:bg-[#2c0c0c] dark:bg-white dark:text-black dark:hover:bg-[#efefef] inline-flex items-center justify-center rounded-md text-xs font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-8 px-4 py-2 w-full"
          type="submit"
        >
          Göndər
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
