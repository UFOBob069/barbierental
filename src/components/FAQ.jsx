import { faqs, areaInfo } from '../data/faqs';

export const FAQ = ({ faqs, areaInfo }) => {
  return (
    <div className="bg-pink-50/50 py-12">
      <div className="container mx-auto px-4">
        {/* Area Information Section */}
        <div className="mb-12 bg-white rounded-3xl shadow-lg p-8 border-2 border-pink-200">
          <h2 className="text-3xl font-bold mb-4 text-pink-600">{areaInfo.title}</h2>
          <div 
            className="prose max-w-none text-gray-700"
            dangerouslySetInnerHTML={{ __html: areaInfo.content }}
          />
        </div>

        {/* FAQ Section */}
        <h2 className="text-3xl font-bold mb-8 text-pink-600 text-center">
          <span className="inline-block pb-2 border-b-4 border-pink-400">
            Frequently Asked Questions
          </span>
        </h2>
        <div className="space-y-6">
          {faqs.map((faq, index) => (
            <div 
              key={index} 
              className="bg-white rounded-2xl shadow-lg p-6 border-2 border-pink-200 hover:shadow-xl transition-shadow duration-300"
            >
              <h3 className="text-xl font-semibold mb-2 text-pink-600 flex items-center">
                <span className="text-pink-400 mr-2">★</span>
                {faq.question}
              </h3>
              <p className="text-gray-700 ml-6">{faq.answer}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};