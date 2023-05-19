import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-orange-500 text-white mt-4 px-8 py-12">
      <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
        <div>
          <h4 className="font-bold mb-3">Company</h4>
          <ul className="list-none">
            <li className="mb-2">About Us</li>
            <li className="mb-2">Careers</li>
          </ul>
        </div>
        <div>
          <h4 className="font-bold mb-3">Support</h4>
          <ul className="list-none">
            <li className="mb-2">Contact Us</li>
            <li className="mb-2">Help & Support</li>
          </ul>
        </div>
        <div>
          <h4 className="font-bold mb-3">Services</h4>
          <ul className="list-none">
            <li className="mb-2">Features</li>
            <li className="mb-2">Pricing</li>
          </ul>
        </div>
        <div>
          <h4 className="font-bold mb-3">Contact</h4>
          <ul className="list-none">
            <li className="mb-2">Email: Instantrip75@gmail.com</li>
            <li className="mb-2">Phone: 1234567</li>
          </ul>
        </div>
      </div>
      <div className="mt-6 text-center text-white">
        <p>© 2023 Instantrip. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
