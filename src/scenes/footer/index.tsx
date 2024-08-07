import Logo from "@/assets/Logo.png";

const Footer = () => {
  return (
    <footer className="bg-primary-100 py-16">
      <div className="justify-content mx-auto w-5/6 gap-16 md:flex">
        <div className="mt-16 basis-1/2 md:mt-0">
          <img alt="logo" src={Logo} width={150} height={150}/>
          
          <p>© M3-M.A.J. All Rights Reserved.</p>
        </div>
        <div className="mt-16 basis-1/4 md:mt-0">
          <h4 className="font-bold">Izradio:</h4>
          <p className="my-5">Glumac A.</p>
          <p className="my-5">antunglumac00@gmail.com</p>
        </div>
        <div className="mt-16 basis-1/4 md:mt-0">
          <h4 className="font-bold">Kontakt</h4>
          <p className="my-5">i.m.knjigovodstvo@gmail.com</p>
          <p>(031)200-385</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
