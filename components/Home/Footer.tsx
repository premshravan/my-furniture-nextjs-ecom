import React from "react";

const Footer = () => {
  return (
    <div className="pt-10 pb-12">
      <div className="w-4/5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4  pb-8 border-b-[2px] mx-auto gap-4 mt-2">
        <div className="space-y-2">
          <h1 className="font-bold uppercase text-black opacity-80 text-[20px]">
            Online Shoppeee
          </h1>
          <p className="text-sm opacity-85">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Enim sunt
            quo dolor, rerum iste libero!
          </p>
          <p className="opacity-85 text-black text-base">
            +58 6454 665 -info@newemail.com
          </p>
        </div>
        {/* secnd part */}
        <div className="lg:mx-auto space-y-2">
          <h1 className="footer">Information</h1>
          <p className="footer_link">About Us</p>
          <p className="footer_link">Privacy</p>
          <p className="footer_link">Return Policy</p>
          <p className="footer_link">Drop shipping</p>
          <p className="footer_link">Policies</p>
        </div>
        <div className="lg:mx-auto space-y-2">
          <h1 className="footer">Account</h1>
          <p className="footer_link">Dashboard</p>
          <p className="footer_link">My orders</p>
          <p className="footer_link">Account details</p>
          <p className="footer_link">Track orders</p>
        </div>
        <div className="lg:mx-auto space-y-2">
          <h1 className="footer">Shop</h1>
          <p className="footer_link">Affiliate</p>
          <p className="footer_link">Best Sellers</p>
          <p className="footer_link">Latest Products</p>
          <p className="footer_link">Sale Producst</p>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 w-4/5 justify-around mx-auto  mt-5">
        <p className="text-sm text-black opacity-70">@Copy rights </p>
        <img
          className="object-contain justify-self-end sm:col-span-2 lg:col-span-4 "
          src="/images/payments.png"
          alt="payment"
          width={230}
          height={230}
        />
      </div>
    </div>
  );
};

export default Footer;
