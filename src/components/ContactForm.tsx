import { useState } from 'react';
import { Send } from 'lucide-react';
import emailjs from 'emailjs-com';

// Reusable Input Component
interface InputFieldProps {
  type: string;
  id: string;
  label: string;
  placeholder: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  required?: boolean;
}

const InputField: React.FC<InputFieldProps> = ({ 
  type, 
  id, 
  label, 
  placeholder, 
  value, 
  onChange, 
  required = true 
}) => {
  return (
    <div>
      <label htmlFor={id} className="block mb-2">{label}</label>
      <input
        type={type}
        id={id}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className="w-full p-3 rounded-md bg-gray-800 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-cyan-500 text-white"
        required={required}
      />
    </div>
  );
};

// Reusable Textarea Component
interface TextareaFieldProps {
  id: string;
  label: string;
  placeholder: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  required?: boolean;
}

const TextareaField: React.FC<TextareaFieldProps> = ({ 
  id, 
  label, 
  placeholder, 
  value, 
  onChange, 
  required = true 
}) => {
  return (
    <div>
      <label htmlFor={id} className="block mb-2">{label}</label>
      <textarea
        id={id}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className="w-full p-3 rounded-md bg-gray-800 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-cyan-500 text-white"
        rows={4}
        required={required}
      />
    </div>
  );
};

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [loading, setLoading] = useState(false);
  const [responseMsg, setResponseMsg] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setResponseMsg('');

    const serviceId = 'service_ui43wnq';
    const userId = 'L3LkWq2RrEa8f6Had';

    try {
      const result = await emailjs.send(
        serviceId,
        'template_xhd9dhw',
        {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
          to_email: 'caman1744@gmail.com'
        },
        userId
      );

      console.log(result.text);
      setResponseMsg('Message sent successfully!');
      setFormData({ name: '', email: '', message: '' });
    } catch (error: any) {
      console.error(error);
      setResponseMsg('Failed to send message. Please try again later.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="min-h-screen py-16 flex items-center justify-center px-4">
      <div className="max-w-6xl w-full mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold mb-8 text-gradient text-center">
          Get In Touch
        </h2>
          <form onSubmit={handleSubmit} className="space-y-6">
            <InputField
              type="text"
              id="name"
              label="Name"
              placeholder="Your Name"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            />
            <InputField
              type="email"
              id="email"
              label="Email"
              placeholder="Your Email"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            />
            <TextareaField
              id="message"
              label="Message"
              placeholder="Your Message"
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
            />
            <button
              type="submit"
              disabled={loading}
              className="w-full py-3 bg-cyan-500 text-gradient font-semibold rounded-md border border-white/20 hover:bg-cyan-600 transition-colors flex items-center justify-center gap-2"
            >
              {loading ? 'Sending...' : (
                <>
                  Send Message <Send className="h-5 w-5" />
                </>
              )}
            </button>
            {responseMsg && (
              <p className="text-center mt-4 text-sm text-green-500">
                {responseMsg}
              </p>
            )}
          </form>
      </div>
    </section>
  );
};

export default Contact;

