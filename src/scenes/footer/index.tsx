import Logo from "@/assets/Logo.png";

function Footer() {
  return (
    <footer className="bg-primary-100 py-16">
      <div className="justify-content mx-auto w-5/6 gap-16 md:flex">
        <div className="mt-16 basis-1/2 md:mt-0">
          <img src={Logo} alt="logo" />
          <p className="my-5">
            Ignite your potential with exceptional fitness classes and
            world-class studios. Transform your body and make your dreams a
            reality today!
          </p>
          <p>© Evogym All Rights Reserved</p>
        </div>
        <div className="mt-16 basis-1/4 md:mt-0">
          <h4 className="font-bold">Links</h4>
          <p className="my-5 cursor-no-drop">Instagram</p>
          <p className="my-5 cursor-no-drop">TikTok</p>
          <p className="my-5 cursor-no-drop">Facebook</p>
        </div>
        <div className="">
          <h4 className="font-bold">Contact Us</h4>
          <p className="my-5 ">567 Oak Avenue, Elmwood Park, CA 90210</p>
          <p className="my-5 ">(333)425-6835</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
