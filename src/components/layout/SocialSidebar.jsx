import React from 'react';
import { Facebook, Linkedin, Mail, MessageCircle } from 'lucide-react';
import { SOCIAL_LINKS } from '../../utils/constants';

const iconComponents = {
  Facebook,
  Linkedin,
  Mail,
  MessageCircle,
};

export default function SocialSidebar() {
  return (
    <div className="fixed left-6 top-1/2 transform -translate-y-1/2 z-40 hidden lg:flex flex-col gap-6">
      <div className="w-px h-20 bg-white mx-auto"></div>
      
      {SOCIAL_LINKS.map((social, index) => {
        const Icon = iconComponents[social.icon];
        return (
          <a
            key={index}
            href={social.href}
            target="_blank"
            rel="noopener noreferrer"
            className={`hover:text-primary transition ${
              index === 0 ? 'text-primary' : 'text-red-800'
            }`}
          >
            <Icon size={20} />
          </a>
        );
      })}
      
      <div className="w-px h-20 bg-white mx-auto"></div>
    </div>
  );
}