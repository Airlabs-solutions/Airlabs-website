import { contactDetails } from "@/data/contact";
import { business } from "@/data/seo";
import type { PrivacySection } from "@/data/privacy";

export const termsUpdated = "12 October 2026";
export const termsUpdatedAr = "١٢ أكتوبر ٢٠٢٦";

export const termsIntro =
  "The rules for using www.airlabss.com. A signed project agreement prevails if it conflicts with these terms.";

const email = contactDetails.email;
const phone = contactDetails.phone;
const address = `${business.streetAddress}, ${business.addressLocality} ${business.postalCode}, Kingdom of Saudi Arabia`;
const addressAr =
  "٤٧٩٠ طريق الملك فهد بن عبدالعزيز، مبنى بنك الرياض، حي العقربية ٧٥٩٨، الخبر ٣٤٤٤١، المملكة العربية السعودية";

export const termsEn: PrivacySection[] = [
  {
    title: "1. About us",
    blocks: [
      {
        kind: "p",
        text: 'These Terms & Conditions ("Terms") govern your use of www.airlabss.com (the "Website"), operated by AirLabs Solutions ("AirLabs", "we", "us"). By using the Website, you agree to these Terms. If you do not agree, please do not use the Website.',
      },
      {
        kind: "ul",
        items: [
          `Legal name: ${business.legalName}`,
          `Commercial Registration (CR) No.: ${business.crNumber}`,
          `Address: ${address}`,
          `Email: ${email}`,
          `Phone: ${phone}`,
        ],
      },
    ],
  },
  {
    title: "2. Our services",
    blocks: [
      {
        kind: "p",
        text: "AirLabs provides web development, software development, mobile app development, automation and AI solutions, digital marketing, and IT infrastructure and hardware solutions.",
      },
      {
        kind: "p",
        text: "The Website is for information and for contacting us. Any project we carry out for you will be governed by a separate written agreement, proposal, or statement of work signed by both parties. If that agreement conflicts with these Terms, the agreement prevails.",
      },
    ],
  },
  {
    title: "3. Quotes and inquiries",
    blocks: [
      {
        kind: "ul",
        items: [
          "Quotes, estimates, and proposals are for guidance only and are not binding until confirmed in a signed agreement.",
          "Unless stated otherwise, quotes are valid for 30 days from the date issued.",
          "Prices shown or quoted exclude VAT unless clearly stated, and VAT will be added at the applicable rate in Saudi Arabia.",
          "Submitting an inquiry form does not create a contract between you and AirLabs.",
        ],
      },
    ],
  },
  {
    title: "4. Acceptable use",
    blocks: [
      {
        kind: "p",
        text: "When using the Website, you agree not to:",
      },
      {
        kind: "ul",
        items: [
          "Break any law of the Kingdom of Saudi Arabia, including the Anti-Cyber Crime Law.",
          "Attempt to gain unauthorised access to the Website, its servers, or any connected systems.",
          "Upload or send viruses, malware, or any harmful code.",
          "Send spam, false information, or content that is offensive, defamatory, or contrary to public order or Islamic values.",
          "Copy, scrape, or harvest content or data from the Website by automated means without our written permission.",
          "Impersonate any person or misrepresent your connection with any company.",
        ],
      },
      {
        kind: "p",
        text: "We may block access to the Website for anyone who breaks these rules.",
      },
    ],
  },
  {
    title: "5. Intellectual property",
    blocks: [
      {
        kind: "p",
        text: "All content on the Website, including text, graphics, logos, designs, images, code, and the AirLabs name and logo, belongs to AirLabs or its licensors. It is protected by Saudi and international intellectual property laws.",
      },
      {
        kind: "p",
        text: "You may view and share pages for personal or internal business purposes. You may not copy, modify, republish, or use our content commercially without our prior written consent.",
      },
      {
        kind: "p",
        text: "Ownership of work we create for clients is set out in each client's own agreement.",
      },
    ],
  },
  {
    title: "6. Portfolio and case studies",
    blocks: [
      {
        kind: "p",
        text: "Projects, client names, and results shown on the Website are examples of past work. They do not guarantee similar results for your project. Client names and logos are shown with permission.",
      },
    ],
  },
  {
    title: "7. Third-party links",
    blocks: [
      {
        kind: "p",
        text: "The Website may link to third-party websites or services, such as social media pages. We do not control them and are not responsible for their content, availability, or privacy practices. Using them is at your own risk.",
      },
    ],
  },
  {
    title: "8. Disclaimer",
    blocks: [
      {
        kind: "p",
        text: 'The Website and its content are provided "as is" and "as available". We try to keep information accurate and up to date, but we do not guarantee that it is complete, error-free, or that the Website will always be available or free of viruses.',
      },
      {
        kind: "p",
        text: "Content on the Website is general information, not professional advice for your specific situation.",
      },
    ],
  },
  {
    title: "9. Limitation of liability",
    blocks: [
      {
        kind: "p",
        text: "To the extent permitted by Saudi law, AirLabs is not liable for any indirect, incidental, or consequential loss, or for loss of profits, data, or business, arising from your use of, or inability to use, the Website.",
      },
      {
        kind: "p",
        text: "Nothing in these Terms limits liability that cannot be limited under the laws of the Kingdom of Saudi Arabia.",
      },
    ],
  },
  {
    title: "10. Indemnity",
    blocks: [
      {
        kind: "p",
        text: "You agree to compensate AirLabs for any claims, losses, or costs arising from your breach of these Terms or your misuse of the Website.",
      },
    ],
  },
  {
    title: "11. Privacy",
    blocks: [
      {
        kind: "p",
        text: "Our use of your personal data is explained in our Privacy Policy, which forms part of these Terms.",
      },
    ],
  },
  {
    title: "12. Changes to these Terms",
    blocks: [
      {
        kind: "p",
        text: "We may update these Terms at any time by posting a new version on this page with an updated date. Your continued use of the Website after changes means you accept the updated Terms.",
      },
    ],
  },
  {
    title: "13. Governing law and disputes",
    blocks: [
      {
        kind: "p",
        text: "These Terms are governed by the laws of the Kingdom of Saudi Arabia. We will first try to resolve any dispute amicably. If that fails, the dispute will be referred to the competent courts in Al Khobar, Kingdom of Saudi Arabia.",
      },
    ],
  },
  {
    title: "14. Language",
    blocks: [
      {
        kind: "p",
        text: "These Terms are available in Arabic and English. If there is any conflict between the two versions, the Arabic version prevails.",
      },
    ],
  },
  {
    title: "15. Contact us",
    blocks: [
      {
        kind: "p",
        text: `${business.legalName} (AirLabs Solutions), ${address}. Email: ${email}. Phone: ${phone}.`,
      },
    ],
  },
];

export const termsAr: PrivacySection[] = [
  {
    title: "١. من نحن",
    blocks: [
      {
        kind: "p",
        text: 'تنظّم هذه الشروط والأحكام ("الشروط") استخدامك للموقع www.airlabss.com ("الموقع") الذي تديره شركة إيرلابس سوليوشنز ("إيرلابس" أو "نحن"). باستخدامك للموقع فإنك توافق على هذه الشروط، وإذا كنت لا توافق عليها يُرجى عدم استخدام الموقع.',
      },
      {
        kind: "ul",
        items: [
          `الاسم النظامي: ${business.legalNameAr}`,
          `رقم السجل التجاري: ${business.crNumber}`,
          `العنوان: ${addressAr}`,
          `البريد الإلكتروني: ${email}`,
          `الهاتف: ${phone}`,
        ],
      },
    ],
  },
  {
    title: "٢. خدماتنا",
    blocks: [
      {
        kind: "p",
        text: "تقدّم إيرلابس خدمات تطوير المواقع الإلكترونية، وتطوير البرمجيات، وتطوير تطبيقات الجوال، وحلول الأتمتة والذكاء الاصطناعي، والتسويق الرقمي، وحلول البنية التحتية وأجهزة تقنية المعلومات.",
      },
      {
        kind: "p",
        text: "الموقع مخصص للتعريف بخدماتنا والتواصل معنا. ويخضع أي مشروع ننفذه لك لاتفاقية أو عرض فني ومالي أو نطاق عمل مكتوب وموقّع من الطرفين. وفي حال تعارض تلك الاتفاقية مع هذه الشروط، تُقدَّم الاتفاقية.",
      },
    ],
  },
  {
    title: "٣. عروض الأسعار والاستفسارات",
    blocks: [
      {
        kind: "ul",
        items: [
          "عروض الأسعار والتقديرات والعروض الفنية استرشادية فقط، ولا تكون ملزمة إلا بعد تأكيدها في اتفاقية موقّعة.",
          "ما لم يُذكر خلاف ذلك، تسري عروض الأسعار لمدة ٣٠ يوماً من تاريخ إصدارها.",
          "الأسعار المعروضة أو المقدّمة لا تشمل ضريبة القيمة المضافة ما لم يُنص على ذلك صراحةً، وتُضاف الضريبة وفق النسبة المعمول بها في المملكة.",
          "إرسال نموذج الاستفسار لا يُنشئ عقداً بينك وبين إيرلابس.",
        ],
      },
    ],
  },
  {
    title: "٤. الاستخدام المقبول",
    blocks: [
      {
        kind: "p",
        text: "عند استخدامك للموقع، فإنك توافق على عدم:",
      },
      {
        kind: "ul",
        items: [
          "مخالفة أي نظام معمول به في المملكة العربية السعودية، بما في ذلك نظام مكافحة الجرائم المعلوماتية.",
          "محاولة الوصول غير المصرح به إلى الموقع أو خوادمه أو أي أنظمة مرتبطة به.",
          "رفع أو إرسال فيروسات أو برمجيات خبيثة أو أي شيفرة ضارة.",
          "إرسال رسائل مزعجة أو معلومات مضللة أو محتوى مسيء أو تشهيري أو مخالف للنظام العام أو القيم الإسلامية.",
          "نسخ محتوى الموقع أو بياناته أو استخراجها بوسائل آلية دون إذن كتابي منا.",
          "انتحال شخصية أي شخص أو تقديم معلومات غير صحيحة عن علاقتك بأي جهة.",
        ],
      },
      {
        kind: "p",
        text: "يحق لنا منع أي شخص يخالف هذه القواعد من الوصول إلى الموقع.",
      },
    ],
  },
  {
    title: "٥. الملكية الفكرية",
    blocks: [
      {
        kind: "p",
        text: "جميع محتويات الموقع، بما في ذلك النصوص والرسومات والشعارات والتصاميم والصور والشيفرات البرمجية واسم إيرلابس وشعارها، مملوكة لإيرلابس أو للجهات المرخِّصة لها، ومحمية بموجب أنظمة الملكية الفكرية السعودية والدولية.",
      },
      {
        kind: "p",
        text: "يجوز لك تصفح الصفحات ومشاركتها لأغراض شخصية أو لأغراض عمل داخلية، ولا يجوز نسخ المحتوى أو تعديله أو إعادة نشره أو استخدامه تجارياً دون موافقة كتابية مسبقة منا.",
      },
      {
        kind: "p",
        text: "تُحدَّد ملكية الأعمال التي ننفذها للعملاء في الاتفاقية الخاصة بكل عميل.",
      },
    ],
  },
  {
    title: "٦. الأعمال السابقة ودراسات الحالة",
    blocks: [
      {
        kind: "p",
        text: "المشاريع وأسماء العملاء والنتائج المعروضة على الموقع أمثلة على أعمال سابقة، ولا تضمن تحقيق نتائج مماثلة لمشروعك. وتُعرض أسماء العملاء وشعاراتهم بإذنهم.",
      },
    ],
  },
  {
    title: "٧. روابط الأطراف الثالثة",
    blocks: [
      {
        kind: "p",
        text: "قد يحتوي الموقع على روابط لمواقع أو خدمات تابعة لأطراف ثالثة، مثل حسابات التواصل الاجتماعي. ونحن لا نتحكم فيها ولسنا مسؤولين عن محتواها أو توفرها أو ممارسات الخصوصية لديها، ويكون استخدامك لها على مسؤوليتك.",
      },
    ],
  },
  {
    title: "٨. إخلاء المسؤولية",
    blocks: [
      {
        kind: "p",
        text: 'يُقدَّم الموقع ومحتواه "كما هو" و"حسب توفره". ونسعى إلى أن تكون المعلومات دقيقة ومحدّثة، لكننا لا نضمن اكتمالها أو خلوها من الأخطاء، أو أن يكون الموقع متاحاً دائماً أو خالياً من الفيروسات.',
      },
      {
        kind: "p",
        text: "المحتوى المنشور على الموقع معلومات عامة، وليس استشارة مهنية تخص حالتك.",
      },
    ],
  },
  {
    title: "٩. تحديد المسؤولية",
    blocks: [
      {
        kind: "p",
        text: "في الحدود التي يسمح بها النظام السعودي، لا تتحمل إيرلابس المسؤولية عن أي خسائر غير مباشرة أو عرضية أو تبعية، أو عن خسارة الأرباح أو البيانات أو الأعمال، الناتجة عن استخدامك للموقع أو عدم قدرتك على استخدامه.",
      },
      {
        kind: "p",
        text: "لا يحدّ أي بند في هذه الشروط من المسؤولية التي لا يجوز تحديدها بموجب أنظمة المملكة العربية السعودية.",
      },
    ],
  },
  {
    title: "١٠. التعويض",
    blocks: [
      {
        kind: "p",
        text: "توافق على تعويض إيرلابس عن أي مطالبات أو خسائر أو تكاليف تنشأ عن مخالفتك لهذه الشروط أو إساءة استخدامك للموقع.",
      },
    ],
  },
  {
    title: "١١. الخصوصية",
    blocks: [
      {
        kind: "p",
        text: "يتم توضيح كيفية استخدامنا لبياناتك الشخصية في سياسة الخصوصية، والتي تُعد جزءاً من هذه الشروط.",
      },
    ],
  },
  {
    title: "١٢. تعديل الشروط",
    blocks: [
      {
        kind: "p",
        text: "يحق لنا تحديث هذه الشروط في أي وقت بنشر النسخة الجديدة في هذه الصفحة مع تاريخ التحديث. ويُعد استمرارك في استخدام الموقع بعد التعديل قبولاً للشروط المحدّثة.",
      },
    ],
  },
  {
    title: "١٣. النظام الواجب التطبيق وتسوية النزاعات",
    blocks: [
      {
        kind: "p",
        text: "تخضع هذه الشروط لأنظمة المملكة العربية السعودية. ونسعى أولاً لتسوية أي نزاع ودياً، وفي حال تعذّر ذلك يُحال النزاع إلى المحاكم المختصة في مدينة الخبر، المملكة العربية السعودية.",
      },
    ],
  },
  {
    title: "١٤. اللغة",
    blocks: [
      {
        kind: "p",
        text: "هذه الشروط متاحة باللغتين العربية والإنجليزية، وفي حال وجود أي تعارض بينهما يُعتمد النص العربي.",
      },
    ],
  },
  {
    title: "١٥. تواصل معنا",
    blocks: [
      {
        kind: "p",
        text: `${business.legalNameAr} (إيرلابس سوليوشنز)، ${addressAr}. البريد الإلكتروني: ${email}. الهاتف: ${phone}.`,
      },
    ],
  },
];
