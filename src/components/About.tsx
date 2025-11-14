import React from 'react';
import { TextLink } from './shared/TextLink';

export const About: React.FC = () => {
  return (
    <section id="about" className="py-20 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-gray-50 to-gray-100"></div>
      <div className="max-w-6xl mx-auto px-6">
        <div className="relative z-10">
          <h2 className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent mb-12 text-center">About</h2>
          <div className="text-xl text-gray-700 leading-relaxed text-left">
            <p>Rails メインの4年目Webエンジニア、Tea です。紅茶が好きです☕️</p>
            <p>Web受託を3年→自社開発1年。Rails をずっと触っており、React, Vue もある程度書けます。3年目に Nuxt + Rails の案件に入りフロントを触り始め、現在は React + Rails + GraphQL の案件で研鑽を積んでいます。</p>
            <p>自分が作ったサービスで生活できたら良いなと思い、全領域1人で実装できる技術力をつけるため、日々の業務や勉強に取り組んでいます。</p>
          </div>
          <div className="text-xl text-gray-700 leading-relaxed text-left pl-8">
            <ul className='list-disc'>
              <li>Github: <TextLink to="https://github.com/tea-19-dev" /></li>
              <li>Zenn: <TextLink to="https://zenn.dev/tea_19" /></li>
              <li>X(Twitter): <TextLink to="https://github.com/tea-19-dev" /></li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};
