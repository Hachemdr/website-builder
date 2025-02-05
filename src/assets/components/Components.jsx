import React from "react";
import {
  Menu,
  ChevronDown,
  Mail,
  Phone,
  MapPin,
  Facebook,
  Twitter,
  Instagram,
  ArrowRight,
} from "lucide-react";

export const Navbar = {
  name: "Navbar",
  Component: ({ bgColor, textColor }) => (
    <nav
      style={{ backgroundColor: bgColor, color: textColor }}
      className="shadow-lg"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-6">
          <div className="flex items-center">
            <span className="text-white text-2xl font-extrabold tracking-tight">
              Brand
            </span>
          </div>
          <div className="hidden md:flex items-center space-x-10">
            <a className="text-white hover:text-gray-200 transition-colors font-medium">
              Home
            </a>
            <a className="text-white hover:text-gray-200 transition-colors font-medium">
              About
            </a>
            <a className="text-white hover:text-gray-200 transition-colors font-medium">
              Services
            </a>
            <a className="text-white hover:text-gray-200 transition-colors font-medium">
              Blog
            </a>
            <button className="bg-white text-blue-600 px-6 py-2 rounded-full font-semibold hover:bg-gray-100 transition-colors">
              Contact Us
            </button>
          </div>
          <div className="md:hidden">
            <Menu className="text-white h-6 w-6" />
          </div>
        </div>
      </div>
    </nav>
  ),
  defaultCode: `<nav className="shadow-lg bg-blue-400">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="flex justify-between items-center py-6">
      <div className="flex items-center">
        <span className="text-white text-2xl font-extrabold tracking-tight">Brand</span>
      </div>
      <div className="hidden md:flex items-center space-x-10">
        <a className="text-white hover:text-gray-200 transition-colors font-medium">Home</a>
        <a className="text-white hover:text-gray-200 transition-colors font-medium">About</a>
        <a className="text-white hover:text-gray-200 transition-colors font-medium">Services</a>
        <a className="text-white hover:text-gray-200 transition-colors font-medium">Blog</a>
        <button className="bg-white text-blue-600 px-6 py-2 rounded-full font-semibold hover:bg-gray-100 transition-colors">
          Contact Us
        </button>
      </div>
      <div className="md:hidden">
        <Menu className="text-white h-6 w-6" />
      </div>
    </div>
  </div>
</nav>`,
};

export const Hero = {
  name: "Hero",
  Component: ({ bgColor, textColor }) => (
    <div
      style={{ backgroundColor: bgColor, color: textColor }}
      className="relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative z-10 py-24 md:py-32">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
              Build Beautiful Websites with Our Components
            </h1>
            <p className="text-xl text-white/90 mb-10 leading-relaxed">
              Create stunning, responsive websites in minutes using our
              pre-built components. Perfect for developers and designers who
              want to move fast.
            </p>
            <div className="flex flex-wrap gap-4">
              <button className="bg-white text-blue-600 px-8 py-4 rounded-full font-semibold hover:bg-gray-100 transition-colors inline-flex items-center">
                Get Started <ArrowRight className="ml-2 h-5 w-5" />
              </button>
              <button className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold hover:bg-white/10 transition-colors">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute inset-0 bg-gradient-to-br from-black/20 to-transparent"></div>
    </div>
  ),
  defaultCode: `<div className="relative overflow-hidden bg-gradient-to-br from-blue-400 to-transparent">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="relative z-10 py-24 md:py-32">
      <div className="max-w-3xl">
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
          Build Beautiful Websites with Our Components
        </h1>
        <p className="text-xl text-white/90 mb-10 leading-relaxed">
          Create stunning, responsive websites in minutes using our pre-built components.
          Perfect for developers and designers who want to move fast.
        </p>
        <div className="flex flex-wrap gap-4">
          <button className="bg-white text-blue-600 px-8 py-4 rounded-full font-semibold hover:bg-gray-100 transition-colors inline-flex items-center">
            Get Started <ArrowRight className="ml-2 h-5 w-5" />
          </button>
          <button className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold hover:bg-white/10 transition-colors">
            Learn More
          </button>
        </div>
      </div>
    </div>
  </div>
  <div className="absolute inset-0 bg-gradient-to-br from-black/20 to-transparent"></div>
</div>`,
};

export const Features = {
  name: "Features",
  Component: ({ bgColor, textColor }) => (
    <div
      style={{ backgroundColor: bgColor, color: textColor }}
      className="py-24 sm:py-32"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl mb-4">
            Everything you need to build modern websites
          </h2>
          <p className="text-xl text-gray-600">
            Our components are designed to be flexible, responsive, and easy to
            customize.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-12">
          {[
            {
              title: "Responsive Design",
              description:
                "All components are fully responsive and work seamlessly across all devices and screen sizes.",
            },
            {
              title: "Modern Styling",
              description:
                "Built with modern design principles and the latest web technologies for a premium look and feel.",
            },
            {
              title: "Easy to Customize",
              description:
                "Highly customizable components that can be adapted to match your brand's unique style and needs.",
            },
          ].map((feature, i) => (
            <div
              key={i}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="w-14 h-14 bg-blue-600 rounded-xl flex items-center justify-center mb-6">
                <ChevronDown className="text-white h-8 w-8" />
              </div>
              <h3 className="text-xl font-semibold mb-4 text-gray-900">
                {feature.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  ),
  defaultCode: `<div className="py-24 sm:py-32 bg-blue-400 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl mb-4">
            Everything you need to build modern websites
          </h2>
          <p className="text-xl text-gray-600">
            Our components are designed to be flexible, responsive, and easy to customize.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-12">
          {[
            {
              title: "Responsive Design",
              description:
                "All components are fully responsive and work seamlessly across all devices and screen sizes.",
            },
            {
              title: "Modern Styling",
              description:
                "Built with modern design principles and the latest web technologies for a premium look and feel.",
            },
            {
              title: "Easy to Customize",
              description:
                "Highly customizable components that can be adapted to match your brand's unique style and needs.",
            },
          ].map((feature, i) => (
            <div
              key={i}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="w-14 h-14 bg-blue-600 rounded-xl flex items-center justify-center mb-6">
                <ChevronDown className="text-white h-8 w-8" />
              </div>
              <h3 className="text-xl font-semibold mb-4 text-gray-900">
                {feature.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>`,
};

export const Contact = {
  name: "Contact",
  Component: ({ bgColor, textColor }) => (
    <div
      style={{ backgroundColor: bgColor, color: textColor }}
      className="py-24 sm:py-32"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl mb-4">
            Get in touch
          </h2>
          <p className="text-xl text-gray-600">
            We'd love to hear from you. Drop us a line and we'll get back to you
            as soon as possible.
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-12 items-start">
          <div className="bg-white rounded-2xl p-8 shadow-lg">
            <form className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Name
                </label>
                <input
                  type="text"
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-colors"
                  placeholder="John Doe"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-colors"
                  placeholder="john@example.com"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Message
                </label>
                <textarea
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-colors h-32"
                  placeholder="Your message..."
                />
              </div>
              <button className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
                Send Message
              </button>
            </form>
          </div>
          <div className="bg-white rounded-2xl p-8 shadow-lg">
            <div className="space-y-8">
              <div>
                <h3 className="text-xl font-semibold mb-4 text-gray-900">
                  Contact Information
                </h3>
                <div className="space-y-4">
                  <div className="flex items-center space-x-4 text-gray-600">
                    <Mail className="h-6 w-6 text-blue-600" />
                    <span>contact@example.com</span>
                  </div>
                  <div className="flex items-center space-x-4 text-gray-600">
                    <Phone className="h-6 w-6 text-blue-600" />
                    <span>+1 (555) 123-4567</span>
                  </div>
                  <div className="flex items-center space-x-4 text-gray-600">
                    <MapPin className="h-6 w-6 text-blue-600" />
                    <span>123 Main St, City, Country</span>
                  </div>
                </div>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-4 text-gray-900">
                  Follow Us
                </h3>
                <div className="flex space-x-4">
                  <a className="text-gray-600 hover:text-blue-600 transition-colors">
                    <Facebook className="h-6 w-6" />
                  </a>
                  <a className="text-gray-600 hover:text-blue-600 transition-colors">
                    <Twitter className="h-6 w-6" />
                  </a>
                  <a className="text-gray-600 hover:text-blue-600 transition-colors">
                    <Instagram className="h-6 w-6" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  ),
  defaultCode: `<div style="background-color: {bgColor}" className="py-24 sm:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl mb-4">Get in touch</h2>
          <p className="text-xl text-gray-600">
            We'd love to hear from you. Drop us a line and we'll get back to you as soon as possible.
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-12 items-start">
          <div className="bg-white rounded-2xl p-8 shadow-lg">
            <form className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Name</label>
                <input
                  type="text"
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-colors"
                  placeholder="John Doe"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                <input
                  type="email"
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-colors"
                  placeholder="john@example.com"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Message</label>
                <textarea
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-colors h-32"
                  placeholder="Your message..."
                />
              </div>
              <button className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
                Send Message
              </button>
            </form>
          </div>
          <div className="bg-white rounded-2xl p-8 shadow-lg">
            <div className="space-y-8">
              <div>
                <h3 className="text-xl font-semibold mb-4 text-gray-900">Contact Information</h3>
                <div className="space-y-4">
                  <div className="flex items-center space-x-4 text-gray-600">
                    <Mail className="h-6 w-6 text-blue-600" />
                    <span>contact@example.com</span>
                  </div>
                  <div className="flex items-center space-x-4 text-gray-600">
                    <Phone className="h-6 w-6 text-blue-600" />
                    <span>+1 (555) 123-4567</span>
                  </div>
                  <div className="flex items-center space-x-4 text-gray-600">
                    <MapPin className="h-6 w-6 text-blue-600" />
                    <span>123 Main St, City, Country</span>
                  </div>
                </div>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-4 text-gray-900">Follow Us</h3>
                <div className="flex space-x-4">
                  <a className="text-gray-600 hover:text-blue-600 transition-colors">
                    <Facebook className="h-6 w-6" />
                  </a>
                  <a className="text-gray-600 hover:text-blue-600 transition-colors">
                    <Twitter className="h-6 w-6" />
                  </a>
                  <a className="text-gray-600 hover:text-blue-600 transition-colors">
                    <Instagram className="h-6 w-6" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
</div>`,
};

export const Footer = {
  name: "Footer",
  Component: ({ bgColor, textColor }) => (
    <footer
      style={{ backgroundColor: bgColor, color: textColor }}
      className="text-white"
    >
      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">About Us</h3>
            <p className="text-gray-100">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-gray-100">
              <li>Home</li>
              <li>About</li>
              <li>Services</li>
              <li>Contact</li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Contact</h3>
            <ul className="space-y-2 text-gray-100">
              <li>contact@example.com</li>
              <li>+1 (555) 123-4567</li>
              <li>123 Main St, City</li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <a className="text-gray-100 hover:text-white">Twitter</a>
              <a className="text-gray-100 hover:text-white">Facebook</a>
              <a className="text-gray-100 hover:text-white">Instagram</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  ),
  defaultCode: `<footer className="bg-blue-500 text-white">
  <div className="max-w-6xl mx-auto px-4 py-12">
    <div className="grid md:grid-cols-4 gap-8">
      <div>
        <h3 className="text-xl font-bold mb-4">About Us</h3>
        <p className="text-gray-100">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </p>
      </div>
      <div>
        <h3 className="text-xl font-bold mb-4">Quick Links</h3>
        <ul className="space-y-2 text-gray-100">
          <li>Home</li>
          <li>About</li>
          <li>Services</li>
          <li>Contact</li>
        </ul>
      </div>
      <div>
        <h3 className="text-xl font-bold mb-4">Contact</h3>
        <ul className="space-y-2 text-gray-100">
          <li>contact@example.com</li>
          <li>+1 (555) 123-4567</li>
          <li>123 Main St, City</li>
        </ul>
      </div>
      <div>
        <h3 className="text-xl font-bold mb-4">Follow Us</h3>
        <div className="flex space-x-4">
          <a className="text-gray-100 hover:text-white">Twitter</a>
          <a className="text-gray-100 hover:text-white">Facebook</a>
          <a className="text-gray-100 hover:text-white">Instagram</a>
        </div>
      </div>
    </div>
  </div>
</footer>`,
};

export const Testimonials = {
  name: "Testimonials",
  Component: ({ bgColor, textColor }) => (
    <div
      style={{ backgroundColor: bgColor, color: textColor }}
      className="py-24 sm:py-32"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl font-bold sm:text-4xl mb-4">
            What Our Clients Say
          </h2>
          <p className="text-xl">Hear from our happy customers.</p>
        </div>
        <div className="grid md:grid-cols-2 gap-12 text-black">
          {["John Doe", "Jane Smith"].map((name, i) => (
            <div key={i} className="bg-white rounded-2xl p-8 shadow-lg">
              <p className="text-lg italic text-black">
                "Amazing experience working with this team!"
              </p>
              <p className="mt-4 font-semibold">- {name}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  ),
  defaultCode: `<div style={{ backgroundColor: bgColor, color: textColor }} className="py-24 sm:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl font-bold sm:text-4xl mb-4">What Our Clients Say</h2>
          <p className="text-xl">Hear from our happy customers.</p>
        </div>
        <div className="grid md:grid-cols-2 gap-12">
          {["John Doe", "Jane Smith"].map((name, i) => (
            <div key={i} className="bg-white rounded-2xl p-8 shadow-lg">
              <p className="text-lg italic">"Amazing experience working with this team!"</p>
              <p className="mt-4 font-semibold">- {name}</p>
            </div>
          ))}
        </div>
      </div>
    </div>`,
};

export const CallToAction = {
  name: "CallToAction",
  Component: ({ bgColor, textColor }) => (
    <div
      style={{ backgroundColor: bgColor, color: textColor }}
      className="py-24 sm:py-32 text-center"
    >
      <h2 className="text-3xl font-bold sm:text-4xl mb-4">
        Get Started Today!
      </h2>
      <p className="text-xl mb-8">Join us and make a difference.</p>
      <button className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700">
        Sign Up Now
      </button>
    </div>
  ),
  defaultCode: `<div style={{ backgroundColor: bgColor, color: textColor }} className="py-24 sm:py-32 text-center">
      <h2 className="text-3xl font-bold sm:text-4xl mb-4">Get Started Today!</h2>
      <p className="text-xl mb-8">Join us and make a difference.</p>
      <button className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700">
        Sign Up Now
      </button>
    </div>`,
};

export const Buttons = {
  name: "Buttons",
  Component: ({ bgColor, textColor }) => (
    <div
      style={{ backgroundColor: bgColor, color: textColor }}
      className="p-8 text-center space-x-4"
    >
      <button
        className="px-6 py-3 rounded-lg font-semibold"
        style={{ backgroundColor: textColor, color: bgColor }}
      >
        Primary Button
      </button>
      <button
        className="px-6 py-3 rounded-lg border border-gray-300 font-semibold"
        style={{ color: textColor }}
      >
        Secondary Button
      </button>
      <button className="px-6 py-3 rounded-lg font-semibold bg-gray-800 text-white">
        Dark Button
      </button>
    </div>
  ),
  defaultCode: `<div className="bg-blue-500 text-white p-8 text-center space-x-4">
  <button className="px-6 py-3 rounded-lg font-semibold bg-white text-blue-500">
    Primary Button
  </button>
  <button className="px-6 py-3 rounded-lg border border-gray-300 font-semibold text-white">
    Secondary Button
  </button>
  <button className="px-6 py-3 rounded-lg font-semibold bg-gray-800 text-white">
    Dark Button
  </button>
</div>`,
};

export const Slider = {
  name: "Slider",
  Component: ({ bgColor, textColor }) => (
    <div style={{ backgroundColor: bgColor, color: textColor }} className="p-8">
      <input type="range" className="w-full cursor-pointer" />
    </div>
  ),
  defaultCode: `<div className="bg-green-500 text-white p-8">
  <input type="range" className="w-full cursor-pointer" />
</div>`,
};
export const Sidebar = {
  name: "Sidebar",
  Component: ({ bgColor, textColor }) => (
    <div
      style={{ backgroundColor: bgColor, color: textColor }}
      className="h-screen w-64 p-6"
    >
      <h2 className="text-lg font-semibold mb-4">Navigation</h2>
      <ul className="space-y-3">
        {["Home", "About", "Services", "Contact"].map((item, index) => (
          <li
            key={index}
            className="p-2 rounded-md hover:bg-gray-200 cursor-pointer"
          >
            {item}
          </li>
        ))}
      </ul>
    </div>
  ),
  defaultCode: `<div className="bg-blue-500 text-white h-screen w-64 p-6">
  <h2 className="text-lg font-semibold mb-4">Navigation</h2>
  <ul className="space-y-3">
    <li className="p-2 rounded-md hover:bg-gray-100 hover:text-black cursor-pointer">Home</li>
    <li className="p-2 rounded-md hover:bg-gray-100 hover:text-black cursor-pointer">About</li>
    <li className="p-2 rounded-md hover:bg-gray-100 hover:text-black cursor-pointer">Services</li>
    <li className="p-2 rounded-md hover:bg-gray-100 hover:text-black cursor-pointer">Contact</li>
  </ul>
</div>`,
};
export const Accordion = {
  name: "Accordion",
  Component: ({ bgColor, textColor }) => {
    const [open, setOpen] = React.useState(false);
    return (
      <div
        style={{ backgroundColor: bgColor, color: textColor }}
        className="p-6"
      >
        <div className="border rounded-lg overflow-hidden">
          <button
            onClick={() => setOpen(!open)}
            className="w-full text-left p-4 bg-gray-200 hover:bg-gray-300 font-semibold"
          >
            Click to Expand
          </button>
          {open && (
            <div className="p-4 bg-white text-black">This is the accordion content.</div>
          )}
        </div>
      </div>
    );
  },
  defaultCode: `
  // First u need to declare this 
  const [open, setOpen] = React.useState(false); 
    const toggleAccordion = () => {
      setOpen(!open);
    };
  <div className="bg-blue-400 text-black p-6">
      <div className="border rounded-lg overflow-hidden">
        <button
          className="w-full text-left p-4 bg-gray-300 hover:bg-gray-400 font-semibold"
          onClick={toggleAccordion}
        >
          Click to Expand
        </button>
        {open && (
          <div id="accordionContent" className="p-4 bg-gray-500">
            This is the accordion content.
          </div>
        )}
      </div>
    </div>`,
};
export const Modal = {
  name: "Modal",
  Component: () => {
    const [show, setShow] = React.useState(false);
    return (
      <div>
        <button
          onClick={() => setShow(true)}
          className="px-4 py-2 bg-blue-600 text-white rounded-md"
        >
          Open Modal
        </button>
        {show && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
            <div className="bg-white p-6 rounded-lg">
              <h2 className="text-xl font-semibold mb-4">Modal Title</h2>
              <p className="text-gray-700">This is a modal window.</p>
              <button
                onClick={() => setShow(false)}
                className="mt-4 px-4 py-2 bg-red-600 text-white rounded-md"
              >
                Close
              </button>
            </div>
          </div>
        )}
      </div>
    );
  },
  defaultCode: `At first declare this :
  const [show, setShow] = React.useState(false);
  <div>
  <button className="px-4 py-2 bg-blue-600 text-white rounded-md" onClick={() => setShow(true)}>
    Open Modal
  </button>
  {show &&
  <div id="modal" className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center ">
    <div className="bg-white p-6 rounded-lg">
      <h2 className="text-xl font-semibold mb-4">Modal Title</h2>
      <p className="text-gray-700">This is a modal window.</p>
      <button className="mt-4 px-4 py-2 bg-red-600 text-white rounded-md" onClick={() => setShow(false)}>
        Close
      </button>
  
    </div>
  </div>
}
</div>`,
};
export const Tabs = {
  name: "Tabs",
  Component: ({ bgColor, textColor }) => {
    const [active, setActive] = React.useState(0);
    const tabs = ["Tab 1", "Tab 2", "Tab 3"];
    return (
      <div
        style={{ backgroundColor: bgColor, color: textColor }}
        className="p-6"
      >
        <div className="flex space-x-4 border-b">
          {tabs.map((tab, i) => (
            <button
              key={i}
              onClick={() => setActive(i)}
              className={`p-3 ${
                i === active
                  ? "border-b-2 border-blue-500 font-semibold"
                  : "text-gray-500"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>
        <div className="p-4 mt-4 bg-white text-black">
          <p>Content for {tabs[active]}</p>
        </div>
      </div>
    );
  },
  // defaultCode: `First you need to declare this : 
  // const Tabs = () => {
  // const [activeTab, setActiveTab] = useState(1);
  
  // <div className="bg-blue-500 text-white p-6">
  //     <div className="flex space-x-4 border-b">
  //       <button
  //         className={`p-3 border-b-2 font-semibold ${activeTab === 1 ? 'border-blue-500 text-white' : 'border-transparent text-gray-500'}`}
  //         onClick={() => setActiveTab(1)}
  //       >
  //         Tab 1
  //       </button>
  //       <button
  //         className={`p-3 border-b-2 font-semibold ${activeTab === 2 ? 'border-b-2 border-blue-500 text-white' : 'border-transparent text-gray-500'}`}
  //         onClick={() => setActiveTab(2)}
  //       >
  //         Tab 2
  //       </button>
  //       <button
  //         className={`p-3 border-b-2 font-semibold ${activeTab === 3 ? 'border-b-2 border-blue-500 text-white' : 'border-transparent text-gray-500'}`}
  //         onClick={() => setActiveTab(3)}
  //       >
  //         Tab 3
  //       </button>
  //     </div>
  //     <div className="p-4 mt-4 bg-gray-500">
  //       {activeTab === 1 && <p>Content for Tab 1</p>}
  //       {activeTab === 2 && <p>Content for Tab 2</p>}
  //       {activeTab === 3 && <p>Content for Tab 3</p>}
  //     </div>
  //   </div>`,
};
export const Card = {
  name: "Card",
  Component: ({ bgColor, textColor }) => (
    <div style={{ backgroundColor: bgColor, color: textColor }} className="p-6">
      <div className="bg-white rounded-lg shadow-lg p-6">
        <h3 className="text-xl font-semibold mb-2 text-black">Card Title</h3>
        <p className="text-gray-600">
          This is a simple card component with customizable styles.
        </p>
        <button className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-md">
          Read More
        </button>
      </div>
    </div>
  ),
  defaultCode: `<div className="p-6">
  <div className="bg-white rounded-lg shadow-lg p-6">
    <h3 className="text-xl font-semibold mb-2">Card Title</h3>
    <p className="text-gray-600">This is a simple card component with customizable styles.</p>
    <button className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-md">Read More</button>
  </div>
</div>`,
};
export const ProgressIndicator = {
  name: "ProgressIndicator",
  Component: ({ progress = 70, color = "blue" }) => (
    <div className="w-full bg-gray-200 rounded-full h-4 overflow-hidden">
      <div
        className={`h-full bg-${color}-500 transition-all`}
        style={{ width: `${progress}%` }}
      ></div>
    </div>
  ),
  defaultCode: `
  <div className="w-full bg-gray-200 rounded-full h-4 overflow-hidden">
  <div className="h-full bg-{color}-500 transition-all" style="width: {progress}%"></div>
</div>
This code is wrong shortly we will provide you with the correct one!!!`,
};
export const SkeletonLoader = {
  name: "SkeletonLoader",
  Component: ({ width = "80%", height = "20px" }) => (
    <div
      className="bg-gray-300 animate-pulse rounded"
      style={{ width, height }}
    ></div>
  ),
  defaultCode: `<div className="bg-gray-300 animate-pulse rounded w-40 h-10 rounded-lg"></div>`,
};
export const Dropdown = {
  name: "Dropdown",
  Component: ({
    options = [
      { value: "option1", label: "Option 1" },
      { value: "option2", label: "Option 2" },
      { value: "option3", label: "Option 3" },
    ],
    label = "Select",
    onChange,
  }) => (
    <div className="relative">
      <select
        className="block w-full p-2 border rounded-md bg-white text-gray-700"
        onChange={(e) => onChange && onChange(e.target.value)}
      >
        <option disabled selected>
          {label}
        </option>
        {options.map((option, index) => (
          <option key={index} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  ),
  defaultCode: `<div className="relative">
  <select className="block w-full p-2 border rounded-md bg-white text-gray-700">
    <option disabled selected>Select</option>
    <option value="option1">Option 1</option>
    <option value="option2">Option 2</option>
    <option value="option3">Option 3</option>
  </select>
</div>`,
};
export const Form = {
  name: "Form",
  Component: () => (
    <form className="space-y-4">
      {/* Input Field */}
      <div>
        <label className="block text-gray-700">Name</label>
        <input
          type="text"
          className="w-full p-2 border rounded-md"
          placeholder="Enter your name"
        />
      </div>

      {/* Select Dropdown */}
      <div>
        <label className="block text-gray-700">Category</label>
        <select className="w-full p-2 border rounded-md">
          <option value="option1">Option 1</option>
          <option value="option2">Option 2</option>
        </select>
      </div>

      {/* Checkbox */}
      <div className="flex items-center">
        <input type="checkbox" className="mr-2" id="agree" />
        <label htmlFor="agree" className="text-gray-700">
          I agree to the terms
        </label>
      </div>

      {/* Submit Button */}
      <button className="w-full bg-blue-500 text-white p-2 rounded-md">
        Submit
      </button>
    </form>
  ),
  defaultCode: `<form className="space-y-4">
  <div>
    <label className="block text-gray-700">Name</label>
    <input type="text" className="w-full p-2 border rounded-md" placeholder="Enter your name" />
  </div>
  <div>
    <label className="block text-gray-700">Category</label>
    <select className="w-full p-2 border rounded-md">
      <option value="option1">Option 1</option>
      <option value="option2">Option 2</option>
    </select>
  </div>
  <div className="flex items-center">
    <input type="checkbox" className="mr-2" id="agree" />
    <label for="agree" className="text-gray-700">I agree to the terms</label>
  </div>
  <button className="w-full bg-blue-500 text-white p-2 rounded-md">Submit</button>
</form>`,
};
