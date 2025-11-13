import React from 'react';
import { useForm, ValidationError } from '@formspree/react';
import { Mail, Send, User, MessageSquare } from 'lucide-react';
export const ContactForm: React.FC = () => {
  const [state, handleSubmit] = useForm("mrbrzvjl");

  return (
    <div className="max-w-2xl mx-auto">
      <div className="bg-white rounded-2xl shadow-2xl p-8 border border-gray-100">
        <div className="text-center mb-8">
          <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-full flex items-center justify-center mx-auto mb-4">
            <MessageSquare className="w-8 h-8 text-white" />
          </div>
          <h3 className="text-2xl font-bold text-gray-900 mb-2">お気軽にお問い合わせください</h3>
          <p className="text-gray-600">プロジェクトのご相談やお仕事のご依頼をお待ちしています</p>
        </div>
        
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label htmlFor="name" className="block text-sm font-bold text-gray-900 mb-2">
                <User className="w-4 h-4 inline mr-2" />
                お名前
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                placeholder="田中太郎"
              />
              <ValidationError 
                prefix="Name" 
                field="name"
                errors={state.errors}
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-bold text-gray-900 mb-2">
                <Mail className="w-4 h-4 inline mr-2" />
                メールアドレス
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                placeholder="example@email.com"
              />
              <ValidationError 
                prefix="Email" 
                field="email"
                errors={state.errors}
              />
            </div>
          </div>

          <div>
            <label htmlFor="company" className="block text-sm font-bold text-gray-900 mb-2">
              企業名 / 団体名（任意）
            </label>
            <input
              type="text"
              id="company"
              name="company"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-transparent transition-all duration-300"
              placeholder="株式会社〇〇"
            />
          </div>

          <div>
            <label htmlFor="subject" className="block text-sm font-bold text-gray-900 mb-2">
              件名
            </label>
            <input
              type="text"
              id="subject"
              name="subject"
              required
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-transparent transition-all duration-300"
              placeholder="プロジェクトのご相談について"
            />
              <ValidationError 
                prefix="Subject" 
                field="subject"
                errors={state.errors}
              />
          </div>
          
          <div>
            <label htmlFor="message" className="block text-sm font-bold text-gray-900 mb-2">
              お問い合わせ内容
            </label>
            <textarea
              id="message"
              name="message"
              required
              rows={10}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-transparent duration-300"
              placeholder="ご相談内容、ご依頼の詳細など"
            />
            <ValidationError 
              prefix="Message" 
              field="message"
              errors={state.errors}
            />
          </div>
          
          <button
            type="submit"
            className="w-full bg-gradient-to-r from-blue-700 to-blue-900 text-white font-bold py-4 px-6 rounded-lg hover:from-blue-800 hover:to-blue-950 transition-all duration-300 flex items-center justify-center space-x-2 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            disabled={state.submitting}
          >
            <Send className="w-5 h-5" />
            <span>問い合わせを送信</span>
          </button>

          {state.succeeded && 
            <p>メールが送信されました。ありがとうございます！</p>
          }
        </form>
      </div>
    </div>
  );
}
