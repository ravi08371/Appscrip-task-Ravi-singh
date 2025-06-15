"use client";
import React, { useState } from "react";
import Head from "next/head";
import "@/styles/layout.css";
import { image } from "@/utils/image";
import Image from "next/image";

const Layout = ({ children }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <header className="header">
        <div className="top-header">
          <div
            className="mobile-menu-icon"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            ☰
          </div>
          <div className="logo">LOGO</div>
          <div className="header-icons">
            <span>
              <Image
                src={image.searchIcon}
                alt="search"
                width={20}
                height={20}
              />
            </span>
            <span>
              <Image
                src={image.wishlistIcon}
                alt="wishlist"
                width={20}
                height={20}
              />
            </span>
            <span>
              <Image src={image.cartIcon} alt="cart" width={20} height={20} />
            </span>
            <span>
              <Image
                src={image.profileIcon}
                alt="userProfile"
                width={20}
                height={20}
              />
            </span>
          </div>
        </div>

        <nav className={`nav-bar ${menuOpen ? "show" : ""}`}>
          <a href="#">SHOP</a>
          <a href="#">SKILLS</a>
          <a href="#">STORIES</a>
          <a href="#">ABOUT</a>
          <a href="#">CONTACT US</a>
        </nav>
      </header>

      <main className="main">{children}</main>
      <footer className="footer">
        <div className="footer-top">
          <div className="newsletter">
            <h4>BE THE FIRST TO KNOW</h4>
            <p>Sign up for updates from mettā muse.</p>
            <div className="newsletter-input">
              <input type="email" placeholder="Enter your e-mail..." />
              <button>SUBSCRIBE</button>
            </div>
          </div>

          <div className="contact-currency">
            <div className="contact">
              <h4>CONTACT US</h4>
              <p>+44 221 133 5360</p>
              <p>customercare@mettamuse.com</p>
            </div>
            <div className="currency">
              <h4>CURRENCY</h4>
              <p>
                <Image
                  src={image.USAFlag}
                  alt="USAFlag"
                  width={20}
                  height={20}
                />{" "}
                USD
              </p>
              <small>
                Transactions will be completed in Euros and a currency reference
                is available on hover.
              </small>
            </div>
          </div>
        </div>

        <hr />

        <div className="footer-links">
          <div className="footer-section">
            <h4>mettā muse</h4>
            <ul>
              <li>About Us</li>
              <li>Stories</li>
              <li>Artisans</li>
              <li>Boutiques</li>
              <li>Contact Us</li>
              <li>EU Compliances Docs</li>
            </ul>
          </div>

          <div className="footer-section">
            <h4>QUICK LINKS</h4>
            <ul>
              <li>Orders & Shipping</li>
              <li>Join/Login as a Seller</li>
              <li>Payment & Pricing</li>
              <li>Return & Refunds</li>
              <li>FAQs</li>
              <li>Privacy Policy</li>
              <li>Terms & Conditions</li>
            </ul>
          </div>

          <div className="footer-section">
            <h4>FOLLOW US</h4>
            <div className="social-icons">
              <span>
                <Image
                  src={image.instaIcon}
                  alt="instagram"
                  width={30}
                  height={30}
                />
              </span>
              <span>
                <Image
                  src={image.linkedinIcon}
                  alt="linkedin"
                  width={30}
                  height={30}
                />
              </span>
            </div>
            <div className="payment-label">mettā muse ACCEPTS</div>
            <div className="payments">
              <Image src={image.gpayImage} alt="gpay" width={70} height={35} />
              <Image
                src={image.masterCardImage}
                alt="master"
                width={70}
                height={35}
              />
              <Image
                src={image.paypalImage}
                alt="paypal"
                width={70}
                height={35}
              />
              <Image src={image.AmexImage} alt="amex" width={70} height={35} />
              <Image
                src={image.applePayImage}
                alt="apple"
                width={70}
                height={35}
              />
              <Image
                src={image.purplepayImage}
                alt="purplepay"
                width={70}
                height={35}
              />
            </div>
          </div>
        </div>

        <div className="copyright">
          Copyright © 2023 mettamuse. All rights reserved.
        </div>
      </footer>
    </>
  );
};

export default Layout;
