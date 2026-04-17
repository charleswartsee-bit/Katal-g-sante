/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Info, X, CheckCircle2 } from 'lucide-react';

interface Product {
  id: string;
  name: string;
  type: string;
  size: string;
  image: string;
  externalUrl: string;
  description: string;
  price: string;
}

const PRODUCTS: Product[] = [
  {
    id: 'alpha-energy',
    name: 'Alpha Energy Capsules',
    type: 'Supplement',
    size: '60 Capsules',
    image: 'https://supliful.com/_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Fg0smbdlu%2Fproduction%2F21369a6db2177d05ec076f4b35ca8b15407cd572-2048x2048.jpg&w=1280&q=85',
    externalUrl: 'https://supliful.com/catalog/alpha-energy-capsules',
    description: 'Boost your daily energy levels and mental clarity with our Alpha Energy blend.',
    price: '$24.99'
  },
  {
    id: 'mens-vitality',
    name: "Men's Vitality Tablets",
    type: 'Supplement',
    size: '60 Tablets',
    image: 'https://supliful.com/_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Fg0smbdlu%2Fproduction%2F0611b1d2e8ca3751411f84770451ba858734f6f1-2048x2048.jpg&w=1280&q=85',
    externalUrl: 'https://supliful.com/catalog/mens-vitality-tablets',
    description: "Support men's health and vitality with essential vitamins and minerals.",
    price: '$21.99'
  },
  {
    id: 'greens-superfood',
    name: 'Greens Superfood Powder',
    type: 'Powder',
    size: '250g',
    image: 'https://supliful.com/_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Fg0smbdlu%2Fproduction%2F6c441722b97ba4a2ea25ff0ab0919799db557bf5-2048x2048.jpg&w=1280&q=85',
    externalUrl: 'https://supliful.com/catalog/greens-superfood-powder',
    description: 'A nutrient-dense blend of organic greens to support overall wellness.',
    price: '$29.99'
  },
  {
    id: 'reds-superfood',
    name: 'Reds Superfood Powder',
    type: 'Powder',
    size: '250g',
    image: 'https://supliful.com/_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Fg0smbdlu%2Fproduction%2Faf5e103f21d1f6696363aa8346e4d2ef161fd339-2048x2048.jpg&w=1280&q=85',
    externalUrl: 'https://supliful.com/catalog/reds-superfood-powder',
    description: 'Antioxidant-rich red fruits and vegetables for heart and immune health.',
    price: '$29.99'
  },
  {
    id: 'horny-goat-weed',
    name: 'Horny Goat Weed Blend',
    type: 'Supplement',
    size: '60 Capsules',
    image: 'https://supliful.com/_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Fg0smbdlu%2Fproduction%2F5f806a88dae6778117e9cd369e7bd7f8069c3076-2048x2048.jpg&w=1280&q=85',
    externalUrl: 'https://supliful.com/catalog/horny-goat-weed-blend-capsules',
    description: 'Traditional herbal support for energy and performance.',
    price: '$19.99'
  },
  {
    id: 'vitamin-d3',
    name: 'Vitamin D3 2000IU',
    type: 'Softgel',
    size: '100 Softgels',
    image: 'https://supliful.com/_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Fg0smbdlu%2Fproduction%2Fe5688c27b5f8debb123e367a4e7371aaed966271-2048x2048.jpg&w=1280&q=85',
    externalUrl: 'https://supliful.com/catalog/vitamin-d3-2000iu-softgel-capsules',
    description: 'Support bone health and immune function with high-potency Vitamin D3.',
    price: '$14.99'
  },
  {
    id: 'ashwagandha-plus',
    name: 'Ashwagandha Plus',
    type: 'Supplement',
    size: '60 Capsules',
    image: 'https://supliful.com/_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Fg0smbdlu%2Fproduction%2F4a0e4b9dc478c85eedb1975985f151465392f9c4-2048x2048.jpg&w=1280&q=85',
    externalUrl: 'https://supliful.com/catalog/ashwagandha-plus-capsules',
    description: 'Adaptogenic support to help manage stress and promote relaxation.',
    price: '$22.99'
  },
  {
    id: 'platinum-turmeric',
    name: 'Platinum Turmeric',
    type: 'Supplement',
    size: '60 Capsules',
    image: 'https://supliful.com/_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Fg0smbdlu%2Fproduction%2F116b751ec705c3e2192e4f18358112ea3b809870-2048x2048.jpg&w=1280&q=85',
    externalUrl: 'https://supliful.com/catalog/platinum-turmeric-capsules',
    description: 'Premium turmeric complex for joint health and inflammation support.',
    price: '$23.99'
  },
  {
    id: 'sleep-support',
    name: 'Sleep Support',
    type: 'Supplement',
    size: '60 Capsules',
    image: 'https://supliful.com/_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Fg0smbdlu%2Fproduction%2F303e5322c8504d4856211fc4f279dc39e2f3dcd8-2048x2048.jpg&w=1280&q=85',
    externalUrl: 'https://supliful.com/catalog/sleep-support-capsules',
    description: 'Natural blend to promote restful sleep and healthy sleep cycles.',
    price: '$24.99'
  },
  {
    id: 'female-enhancement',
    name: 'Female Enhancement',
    type: 'Supplement',
    size: '60 Capsules',
    image: 'https://supliful.com/_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Fg0smbdlu%2Fproduction%2F73cfa433192e2f4fad19f17de9afe599086ce4cc-3200x3200.jpg&w=1280&q=85',
    externalUrl: 'https://supliful.com/catalog/female-enhancement-capsules',
    description: "Support women's vitality and hormonal balance naturally.",
    price: '$21.99'
  },
  {
    id: 'omega-3',
    name: 'Omega-3 EPA/DHA',
    type: 'Softgel',
    size: '60 Softgels',
    image: 'https://supliful.com/_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Fg0smbdlu%2Fproduction%2F2b4f5e3d6dff17dd4a5f30e386605a899be2a6ca-3200x3200.jpg&w=1280&q=85',
    externalUrl: 'https://supliful.com/catalog/omega-3-epa-dha-softgel-capsules',
    description: 'Essential fatty acids for heart, brain, and eye health.',
    price: '$18.99'
  },
  {
    id: 'beetroot-powder',
    name: 'Beetroot Powder',
    type: 'Powder',
    size: '250g',
    image: 'https://supliful.com/_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Fg0smbdlu%2Fproduction%2F9aaa89d6e41330c94f4eb5dcab4403f50a4167a8-2048x2048.jpg&w=1280&q=85',
    externalUrl: 'https://supliful.com/catalog/beetroot-powder',
    description: 'Natural source of nitrates to support blood flow and athletic performance.',
    price: '$26.99'
  },
  {
    id: 'sea-moss',
    name: 'Sea Moss Capsules',
    type: 'Supplement',
    size: '60 Capsules',
    image: 'https://supliful.com/_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Fg0smbdlu%2Fproduction%2F06117c309b88d264589f18eec70464a3ec42a8f1-2048x2048.jpg&w=1280&q=85',
    externalUrl: 'https://supliful.com/catalog/sea-moss-capsules',
    description: 'Mineral-rich sea moss for thyroid, immune, and digestive health.',
    price: '$24.99'
  },
  {
    id: 'magnesium-glycinate',
    name: 'Magnesium Glycinate',
    type: 'Supplement',
    size: '60 Capsules',
    image: 'https://supliful.com/_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Fg0smbdlu%2Fproduction%2F78844c31bf888f8a9f25356c516fac154650679b-2048x2048.jpg&w=1280&q=85',
    externalUrl: 'https://supliful.com/catalog/magnesium-glycinate-capsules',
    description: 'Highly absorbable magnesium for muscle relaxation and sleep support.',
    price: '$19.99'
  },
  {
    id: 'multivitamin',
    name: 'Complete Multivitamin',
    type: 'Supplement',
    size: '60 Capsules',
    image: 'https://supliful.com/_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Fg0smbdlu%2Fproduction%2Faec48dfdbfad1fcf91eb913bd6fc2bd2037e1d64-2048x2048.jpg&w=1280&q=85',
    externalUrl: 'https://supliful.com/catalog/complete-multivitamin-capsules',
    description: 'Comprehensive daily support with essential vitamins and minerals.',
    price: '$22.99'
  },
  {
    id: 'brain-focus',
    name: 'Brain Focus Formula',
    type: 'Supplement',
    size: '60 Capsules',
    image: 'https://supliful.com/_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Fg0smbdlu%2Fproduction%2Fbe85d87ec8b4db52b79a7f36abc248a663a1b466-2048x2048.jpg&w=1280&q=85',
    externalUrl: 'https://supliful.com/catalog/brain-focus-formula-capsules',
    description: 'Nootropic blend to support cognitive function, focus, and memory.',
    price: '$27.99'
  },
  {
    id: 'sleep-formula',
    name: 'Sleep Formula',
    type: 'Supplement',
    size: '60 Capsules',
    image: 'https://supliful.com/_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Fg0smbdlu%2Fproduction%2Fac01ff4221b0bd2c1081c974b906b1c7cddc0577-2048x2048.jpg&w=1280&q=85',
    externalUrl: 'https://supliful.com/catalog/sleep-formula-capsules',
    description: 'Advanced formula for deeper, more restorative sleep.',
    price: '$25.99'
  },
  {
    id: 'prostate-support',
    name: 'Prostate Support',
    type: 'Supplement',
    size: '60 Capsules',
    image: 'https://supliful.com/_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Fg0smbdlu%2Fproduction%2F9db973256295b96ea6b444b54b2eb437af792194-2048x2048.jpg&w=1280&q=85',
    externalUrl: 'https://supliful.com/catalog/prostate-support-capsules',
    description: "Targeted nutrients to support prostate health and urinary function.",
    price: '$23.99'
  },
  {
    id: 'beauty-collagen',
    name: 'Beauty Collagen Strips',
    type: 'Strips',
    size: '30 Strips',
    image: 'https://supliful.com/_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Fg0smbdlu%2Fproduction%2Fcc49855438c656b1bdcfb0f672084cb7f337672e-2048x2048.jpg&w=1280&q=85',
    externalUrl: 'https://supliful.com/catalog/beauty-collagen-strips',
    description: 'Convenient strips to support skin elasticity and hair health.',
    price: '$28.99'
  },
  {
    id: 'nitric-oxide',
    name: 'Nitric Oxide Capsules',
    type: 'Supplement',
    size: '60 Capsules',
    image: 'https://supliful.com/_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Fg0smbdlu%2Fproduction%2F286064d4dcf1858a05a7401cf51390dce33a3a2b-2048x2048.jpg&w=1280&q=85',
    externalUrl: 'https://supliful.com/catalog/nitric-oxide-capsules',
    description: 'Support healthy blood flow and muscle pumps during exercise.',
    price: '$21.99'
  },
  {
    id: 'blood-sugar-support',
    name: 'Blood Sugar Support',
    type: 'Supplement',
    size: '60 Capsules',
    image: 'https://supliful.com/_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Fg0smbdlu%2Fproduction%2F7be65f4a48a5ac726e58e33dbd521c7bc9e27a5e-2048x2048.jpg&w=1280&q=85',
    externalUrl: 'https://supliful.com/catalog/normal-blood-sugar-support-capsules',
    description: 'Natural support for maintaining healthy blood sugar levels.',
    price: '$24.99'
  },
  {
    id: 'hangover-strips',
    name: 'Hangover Strips',
    type: 'Strips',
    size: '30 Strips',
    image: 'https://supliful.com/_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Fg0smbdlu%2Fproduction%2F72188a9842b769d22af111980b6dc32099dfc9db-2048x2048.jpg&w=1280&q=85',
    externalUrl: 'https://supliful.com/catalog/hangover-strips',
    description: 'Fast-acting strips to help you recover after a night out.',
    price: '$19.99'
  },
  {
    id: 'nad-plus',
    name: 'NAD+ Capsules',
    type: 'Supplement',
    size: '60 Capsules',
    image: 'https://supliful.com/_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Fg0smbdlu%2Fproduction%2F3ec8b972d2b18556e5d2847ad273be483c1e6ac2-2048x2048.jpg&w=1280&q=85',
    externalUrl: 'https://supliful.com/catalog/nad-plus-capsules',
    description: 'Support cellular energy and healthy aging with NAD+.',
    price: '$34.99'
  },
  {
    id: 'cordyceps-gummies',
    name: 'Cordyceps Energy Gummies',
    type: 'Gummies',
    size: '60 Gummies',
    image: 'https://supliful.com/_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Fg0smbdlu%2Fproduction%2F7a0d2a41a12004764dc949fb0c3a36a7684cb95a-2048x2048.jpg&w=1280&q=85',
    externalUrl: 'https://supliful.com/catalog/cordyceps-energy-gummies',
    description: 'Delicious gummies for natural energy and endurance support.',
    price: '$26.99'
  },
  {
    id: 'berberine',
    name: 'Berberine Capsules',
    type: 'Supplement',
    size: '60 Capsules',
    image: 'https://supliful.com/_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Fg0smbdlu%2Fproduction%2Fef198dcf5dd24df911a4c1461c10019613859468-2048x2048.jpg&w=1280&q=85',
    externalUrl: 'https://supliful.com/catalog/berberine-capsules',
    description: 'Support metabolic health and healthy blood sugar levels.',
    price: '$25.99'
  },
  {
    id: 'reishi-gummies',
    name: 'Reishi Relax Gummies',
    type: 'Gummies',
    size: '60 Gummies',
    image: 'https://supliful.com/_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Fg0smbdlu%2Fproduction%2F5c6c20249ed10a7a00c3cabbfd889eab270068b0-2048x2048.jpg&w=1280&q=85',
    externalUrl: 'https://supliful.com/catalog/reishi-relax-gummies',
    description: 'Calming reishi mushroom gummies for stress relief and relaxation.',
    price: '$26.99'
  },
  {
    id: 'beetroot-capsules',
    name: 'Beetroot Capsules',
    type: 'Supplement',
    size: '60 Capsules',
    image: 'https://supliful.com/_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Fg0smbdlu%2Fproduction%2Fdd9691c9e8702d5eb9d56825fe4617e3a5825f61-2048x2048.jpg&w=1280&q=85',
    externalUrl: 'https://supliful.com/catalog/beetroot-capsules',
    description: 'Concentrated beetroot extract for cardiovascular support.',
    price: '$21.99'
  },
  {
    id: 'ox-bile',
    name: 'Ox Bile Complex',
    type: 'Supplement',
    size: '60 Capsules',
    image: 'https://supliful.com/_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Fg0smbdlu%2Fproduction%2Fdec7c3e062471bda3f758b3d2e47d025a3b0b89a-2048x2048.jpg&w=1280&q=85',
    externalUrl: 'https://supliful.com/catalog/ox-bile-complex-capsules',
    description: 'Digestive support for fat absorption and gallbladder health.',
    price: '$23.99'
  },
  {
    id: 'bone-support',
    name: 'Bone Support Strips',
    type: 'Strips',
    size: '30 Strips',
    image: 'https://supliful.com/_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Fg0smbdlu%2Fproduction%2Ffa56139b22fa04b99cd2cb02c90fb6b6c2f7f8b5-2048x2048.jpg&w=1280&q=85',
    externalUrl: 'https://supliful.com/catalog/bone-support-strips',
    description: 'Targeted nutrients for bone density and skeletal health.',
    price: '$19.99'
  },
  {
    id: 'blood-sugar-drops',
    name: 'Blood Sugar Drops',
    type: 'Drops',
    size: '30ml',
    image: 'https://supliful.com/_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Fg0smbdlu%2Fproduction%2Ffa60190a233c1be1db14964e42c6e3019a0ba759-2048x2048.jpg&w=1280&q=85',
    externalUrl: 'https://supliful.com/catalog/normal-blood-sugar-drops',
    description: 'Liquid support for healthy glucose metabolism.',
    price: '$24.99'
  },
  {
    id: 'ashwagandha-caps',
    name: 'Ashwagandha Capsules',
    type: 'Supplement',
    size: '60 Capsules',
    image: 'https://supliful.com/_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Fg0smbdlu%2Fproduction%2F6bba68fa3c23e149aa784b0ebca03309afe8e83d-2048x2048.jpg&w=1280&q=85',
    externalUrl: 'https://supliful.com/catalog/ashwagandha-capsules',
    description: 'Pure ashwagandha extract for stress and anxiety support.',
    price: '$19.99'
  },
  {
    id: 'liver-support',
    name: 'Liver Support Capsules',
    type: 'Supplement',
    size: '60 Capsules',
    image: 'https://supliful.com/_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Fg0smbdlu%2Fproduction%2Ff8a497daf30fa51f590cf978194f94fd5e9cb466-2048x2048.jpg&w=1280&q=85',
    externalUrl: 'https://supliful.com/catalog/liver-support-capsules',
    description: 'Detoxifying blend to support healthy liver function.',
    price: '$22.99'
  },
];

const MAX_SELECTION = 4;
const MIN_SELECTION = 3;

export default function App() {
  const [selectedIds, setSelectedIds] = useState<string[]>([]);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    brandName: '',
    notes: '',
  });

  const handleSubmit = async () => {
    if (selectedIds.length < MIN_SELECTION || isSubmitting) return;

    setIsSubmitting(true);
    
    const payload = {
      ...formData,
      selectedProducts: selectedProducts.map(p => ({
        name: p.name,
        type: p.type,
        size: p.size,
        price: p.price
      })),
      timestamp: new Date().toISOString()
    };

    try {
      // Using fetch with no-cors to avoid Google Apps Script CORS issues
      // Data will be sent but we won't be able to read the response body in some cases
      await fetch('https://script.google.com/macros/s/AKfycbx7mhCc_1KkI1Z2D5GrYPRcmKeGHNHPDMT4mCPR6kO6OAIIaxeJiq31NYyhNUZY_9Fw/exec', {
        method: 'POST',
        mode: 'no-cors',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload)
      });
      
      setIsSuccess(true);
      setSelectedIds([]);
      setFormData({
        fullName: '',
        email: '',
        phone: '',
        brandName: '',
        notes: '',
      });
    } catch (error) {
      console.error('Error submitting form:', error);
      alert('Gen yon pwoblèm ki rive lè n ap voye enfòmasyon yo. Tanpri reye ankò.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const toggleProduct = (id: string) => {
    setSelectedIds((prev) => {
      if (prev.includes(id)) {
        return prev.filter((i) => i !== id);
      }
      if (prev.length < MAX_SELECTION) {
        return [...prev, id];
      }
      return prev;
    });
  };

  const selectedProducts = PRODUCTS.filter((p) => selectedIds.includes(p.id));
  const isMaxReached = selectedIds.length >= MAX_SELECTION;

  return (
    <div className="min-h-screen bg-[#0A0514] text-white font-sans selection:bg-violet/30 text-base">
      <AnimatePresence mode="wait">
        {isSuccess ? (
          <motion.div 
            key="success-page"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 1.05 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#0A0514]"
          >
            <div className="max-w-2xl w-full bg-white/5 border border-white/10 rounded-[48px] p-8 md:p-16 text-center backdrop-blur-xl ring-1 ring-white/20">
              <motion.div 
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ type: "spring", damping: 12, stiffness: 200, delay: 0.2 }}
                className="w-24 h-24 bg-green-500/20 text-green-400 rounded-full flex items-center justify-center mx-auto mb-8 shadow-[0_0_50px_rgba(34,197,94,0.2)]"
              >
                <CheckCircle2 size={48} />
              </motion.div>
              
              <h2 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">Mèsi anpil!</h2>
              <div className="space-y-4 mb-12">
                <p className="text-xl text-text-dim">Nou resevwa enfòmasyon ou yo kòrèkteman.</p>
                <p className="text-2xl font-medium text-[#B388FF]">Nou ap trete demand ou an.</p>
                <p className="text-text-dim">N ap kontakte ou byento pa email oswa telefòn pou n kòmanse travay sou mak pèsonèl ou a.</p>
              </div>

              <button 
                onClick={() => setIsSuccess(false)}
                className="group relative px-12 py-5 bg-[#B388FF] text-[#0A0514] rounded-2xl font-bold text-lg transition-all hover:scale-105 active:scale-95 shadow-[0_0_30px_rgba(179,136,255,0.4)]"
              >
                Fè yon lòt seleksyon
              </button>
            </div>
          </motion.div>
        ) : (
          <motion.div 
            key="main-content"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            {/* Header Section */}
            <header className="pt-16 pb-12 px-4 flex flex-col items-center text-center max-w-5xl mx-auto">
              <div className="mb-8">
                <div className="w-24 h-24 mb-2 mx-auto overflow-hidden rounded-full bg-white/5">
                   <img 
                     src="https://res.cloudinary.com/dd1gxvgji/image/upload/v1775770152/Ajouter_un_titre_19_2_shvdvh.png" 
                     alt="100% ECOM Logo" 
                     className="w-full h-full object-cover rounded-full"
                     referrerPolicy="no-referrer"
                   />
                </div>
                <p className="text-xs font-bold tracking-[0.2em] uppercase opacity-80">100% ECOM</p>
              </div>
              
              <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight leading-tight">
                Chwazi Pwodui <span className="text-[#B388FF]">Sante</span> pou Mak ou a
              </h1>
              
              <p className="text-lg text-text-dim max-w-2xl mx-auto">
                Chwazi ant 3 oswa 4 pwodui pou kapab kòmanse mak pèsonèl ou a.
              </p>

              {/* Selection Status Bar */}
              <div className="mt-12 w-full max-w-2xl bg-white/5 border border-white/10 rounded-full py-4 px-8 flex items-center justify-between backdrop-blur-md">
                <div className="flex gap-2">
                  {[...Array(MAX_SELECTION)].map((_, i) => (
                    <div
                      key={i}
                      className={`w-3 h-3 rounded-full border border-white/20 transition-all duration-300 ${
                        i < selectedIds.length ? 'bg-[#B388FF] border-[#B388FF] shadow-[0_0_12px_rgba(179,136,255,0.6)]' : ''
                      }`}
                    />
                  ))}
                </div>
                <div className="text-sm font-medium">
                  {selectedIds.length} / {MAX_SELECTION} chwazi
                </div>
                <div className="text-sm text-text-dim">
                  {selectedIds.length < MIN_SELECTION 
                    ? `Chwazi omwen ${MIN_SELECTION - selectedIds.length} ankò` 
                    : selectedIds.length < MAX_SELECTION 
                      ? "Ou ka chwazi 1 anplis oswa kontinye" 
                      : "Seleksyon konplè"}
                </div>
              </div>
            </header>

            {/* Product Grid */}
            <section className="max-w-7xl mx-auto px-4 pb-24">
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
                {PRODUCTS.map((product) => {
                  const isSelected = selectedIds.includes(product.id);
                  const isDisabled = !isSelected && isMaxReached;

                  return (
                    <motion.div
                      key={product.id}
                      layout
                      className={`group relative rounded-[40px] overflow-hidden border-2 transition-all duration-300 flex flex-col bg-white/5 ${
                        isSelected ? 'border-[#B388FF]' : 'border-transparent'
                      } ${isDisabled ? 'opacity-40 grayscale' : ''}`}
                      whileHover={!isDisabled ? { y: -8 } : {}}
                      onClick={() => !isDisabled && toggleProduct(product.id)}
                    >
                      <div className="aspect-[3/4] relative overflow-hidden">
                        <img 
                          src={product.image} 
                          alt={product.name}
                          className="w-full h-full object-cover"
                          referrerPolicy="no-referrer"
                        />
                        
                        {/* Info Icon Overlay */}
                        <div className="absolute top-4 md:top-6 left-4 md:left-6 w-8 h-8 md:w-10 md:h-10 bg-black/20 backdrop-blur-md rounded-full flex items-center justify-center border border-white/10 text-white/60">
                          <Info size={16} className="md:w-5 md:h-5" />
                        </div>

                        {/* Price Tag */}
                        <div className="absolute top-4 md:top-6 right-4 md:right-6 bg-[#B388FF] text-[#0A0514] px-3 md:px-4 py-1 md:py-1.5 rounded-full text-[10px] md:text-sm font-bold shadow-lg">
                          {product.price}
                        </div>

                        {/* Selection Overlay */}
                        {isSelected && (
                          <div className="absolute inset-0 bg-[#B388FF]/10 pointer-events-none" />
                        )}
                      </div>

                      {/* Product Details */}
                      <div className="p-4 md:p-8 flex flex-col flex-1">
                        <h3 className="text-base md:text-xl font-bold mb-2">{product.name}</h3>
                        <p className="text-xs md:text-sm text-text-dim mb-4 line-clamp-2">{product.description}</p>
                        <p className="text-[10px] md:text-xs text-[#B388FF] font-bold uppercase tracking-widest mb-4 md:mb-6">
                          {product.type} · {product.size}
                        </p>

                        <div className="mt-auto flex flex-col sm:flex-row gap-2 md:gap-3">
                          <a 
                            href={product.externalUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex-1 py-3 bg-white/10 hover:bg-white/20 rounded-2xl text-center text-sm font-bold transition-colors"
                          >
                            Voir plus
                          </a>
                          <button 
                            onClick={(e) => {
                              e.stopPropagation();
                              !isDisabled && toggleProduct(product.id);
                            }}
                            className={`flex-1 py-3 rounded-2xl text-sm font-bold transition-all ${
                              isSelected 
                                ? 'bg-red-500/20 text-red-400 border border-red-500/30' 
                                : 'bg-[#B388FF] text-[#0A0514]'
                            } ${isDisabled ? 'cursor-not-allowed opacity-50' : ''}`}
                          >
                            {isSelected ? 'Retirer' : 'Ajouter'}
                          </button>
                        </div>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </section>

            {/* Submission Section */}
            <AnimatePresence>
              {selectedIds.length >= MIN_SELECTION && (
                <motion.section 
                  initial={{ opacity: 0, y: 100 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 100 }}
                  className="max-w-4xl mx-auto px-4 pb-32"
                >
                  <div className="bg-white/5 border border-white/10 rounded-[48px] p-8 md:p-16 backdrop-blur-xl">
                    <div className="text-center mb-12">
                      <h2 className="text-4xl font-bold mb-4">Soumèt Pwodui ou Chwazi yo</h2>
                      <p className="text-text-dim">Ranpli detay ou yo epi n ap prepare pakè mak pèsonèl ou a.</p>
                    </div>

                    {/* Selected Products List */}
                    <div className="mb-12">
                      <h3 className="text-xs font-bold tracking-widest text-[#B388FF] uppercase mb-6">Pwodui ou Chwazi yo</h3>
                      <div className="space-y-3">
                        {selectedProducts.map((product, index) => (
                          <motion.div 
                            key={product.id}
                            layout
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            className="bg-white/5 border border-white/10 rounded-3xl p-4 flex items-center justify-between"
                          >
                            <div className="flex items-center gap-4">
                              <div className="w-8 h-8 bg-[#B388FF] rounded-full flex items-center justify-center text-[#0A0514] font-bold text-sm">
                                {index + 1}
                              </div>
                              <div>
                                <p className="font-semibold">{product.name}</p>
                                <p className="text-xs text-text-dim">{product.type} · {product.size} · <span className="text-[#B388FF]">{product.price}</span></p>
                              </div>
                            </div>
                            <button 
                              onClick={(e) => {
                                e.stopPropagation();
                                toggleProduct(product.id);
                              }}
                              className="p-2 hover:bg-white/10 rounded-full transition-colors text-text-dim"
                            >
                              <X size={20} />
                            </button>
                          </motion.div>
                        ))}
                      </div>
                    </div>

                    {/* Form */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="flex flex-col gap-2">
                        <label className="text-[10px] font-bold uppercase tracking-widest text-text-dim">Non konplè *</label>
                        <input
                          type="text"
                          placeholder="John Doe"
                          className="bg-black/40 border border-white/10 rounded-2xl px-6 py-4 outline-none focus:border-[#B388FF] transition-colors"
                          value={formData.fullName}
                          onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                          disabled={isSubmitting}
                        />
                      </div>
                      <div className="flex flex-col gap-2">
                        <label className="text-[10px] font-bold uppercase tracking-widest text-text-dim">Adrès Email *</label>
                        <input
                          type="email"
                          placeholder="john@example.com"
                          className="bg-black/40 border border-white/10 rounded-2xl px-6 py-4 outline-none focus:border-[#B388FF] transition-colors"
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          disabled={isSubmitting}
                        />
                      </div>
                      <div className="flex flex-col gap-2">
                        <label className="text-[10px] font-bold uppercase tracking-widest text-text-dim">Nimewo Telefòn</label>
                        <input
                          type="tel"
                          placeholder="+1 (555) 000-0000"
                          className="bg-black/40 border border-white/10 rounded-2xl px-6 py-4 outline-none focus:border-[#B388FF] transition-colors"
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          disabled={isSubmitting}
                        />
                      </div>
                      <div className="flex flex-col gap-2">
                        <label className="text-[10px] font-bold uppercase tracking-widest text-text-dim">Non Mak ou vle a</label>
                        <input
                          type="text"
                          placeholder="Luxe Glow"
                          className="bg-black/40 border border-white/10 rounded-2xl px-6 py-4 outline-none focus:border-[#B388FF] transition-colors"
                          value={formData.brandName}
                          onChange={(e) => setFormData({ ...formData, brandName: e.target.value })}
                          disabled={isSubmitting}
                        />
                      </div>
                      <div className="flex flex-col gap-2 md:col-span-2">
                        <label className="text-[10px] font-bold uppercase tracking-widest text-text-dim">Nòt anplis (Opsyonèl)</label>
                        <textarea
                          placeholder="Di nou plis sou vizyon ou..."
                          rows={4}
                          className="bg-black/40 border border-white/10 rounded-3xl px-6 py-4 outline-none focus:border-[#B388FF] transition-colors resize-none"
                          value={formData.notes}
                          onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                          disabled={isSubmitting}
                        />
                      </div>
                    </div>

                    <button 
                      onClick={handleSubmit}
                      className={`w-full mt-12 py-6 rounded-3xl font-bold text-lg transition-all duration-300 flex items-center justify-center gap-3 ${
                        selectedIds.length >= MIN_SELECTION && !isSubmitting
                          ? 'bg-[#B388FF] text-[#0A0514] shadow-[0_0_30px_rgba(179,136,255,0.3)]' 
                          : 'bg-white/10 text-white/40 cursor-not-allowed'
                      }`}
                      disabled={selectedIds.length < MIN_SELECTION || isSubmitting}
                    >
                      {isSubmitting ? (
                        <div className="w-6 h-6 border-2 border-[#0A0514]/30 border-t-[#0A0514] rounded-full animate-spin" />
                      ) : null}
                      {isSubmitting ? 'Voye enfòmasyon...' : selectedIds.length >= MIN_SELECTION ? 'Soumèt Chwa yo' : `Chwazi omwen ${MIN_SELECTION} pwodui pou kontinye`}
                    </button>
                  </div>
                </motion.section>
              )}
            </AnimatePresence>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
