import React from "react";

const Footer = () => {
  return (
    <footer className="flex flex-col items-center md:items-start gap-3">
      <p className="text-[12px] text-center md:text-left flex-1">
        By clicking "Get Started", you agree with Terms and Conditions, Privacy
        Policy,
        <br className="hidden lg:block" />
        <span className="inline-block">Subscription Terms</span>
      </p>
      <span className="text-[10px] flex-1">
        Fametonic 2025 ©All Rights Reserved.
      </span>
    </footer>
  );
};

export default Footer;
