import { contactDetails } from "@/data/contact";
import { business } from "@/data/seo";

export const privacyUpdated = "12 October 2026";
export const privacyUpdatedAr = "١٢ أكتوبر ٢٠٢٦";

export const privacyIntro =
  "How AirLabs Solutions collects, uses, shares, and protects personal data on this website, in line with the Saudi Personal Data Protection Law.";

const email = contactDetails.email;
const phone = contactDetails.phone;
const address = `${business.streetAddress}, ${business.addressLocality} ${business.postalCode}, Kingdom of Saudi Arabia`;
const addressAr =
  "٤٧٩٠ طريق الملك فهد بن عبدالعزيز، مبنى بنك الرياض، العقربية ٧٥٩٨، الخبر ٣٤٤٤١، المملكة العربية السعودية";

export type PrivacyBlock =
  | { kind: "p"; text: string }
  | { kind: "ul"; items: string[] }
  | { kind: "ol"; items: string[] }
  | { kind: "table"; headers: string[]; rows: string[][] };

export type PrivacySection = {
  title: string;
  blocks: PrivacyBlock[];
};

export const privacyEn: PrivacySection[] = [
  {
    title: "1. Who we are",
    blocks: [
      {
        kind: "p",
        text: 'AirLabs Solutions ("AirLabs", "we", "us") is the controller of personal data collected through www.airlabss.com (the "Website").',
      },
      {
        kind: "ul",
        items: [
          `Legal name: ${business.legalName}`,
          `Commercial Registration (CR) No.: ${business.crNumber}`,
          "Trading name: AirLabs Solutions",
          `Address: ${address}`,
          `Email for privacy requests: ${email}`,
          `Phone: ${phone}`,
        ],
      },
    ],
  },
  {
    title: "2. Personal data we collect",
    blocks: [
      {
        kind: "p",
        text: "Data you give us through the contact form:",
      },
      {
        kind: "ul",
        items: [
          "Full name",
          "Email address",
          "Phone number, if you provide it",
          "Company name, if you provide it",
          "The service you select",
          "Details of your project or inquiry",
        ],
      },
      {
        kind: "p",
        text: "The form does not ask for a job title or file attachments. Data collected automatically when you browse the Website, and only for analytics after you accept analytics cookies:",
      },
      {
        kind: "ul",
        items: [
          "IP address and approximate location (city and country)",
          "Browser type, device type, and operating system",
          "Pages visited, time spent, referring website, and clicks",
          "Cookie identifiers (see section 7)",
        ],
      },
      {
        kind: "p",
        text: "If you switch light or dark mode, that choice is stored in this browser under the name theme. It stays on your device and is not sent to us.",
      },
      {
        kind: "p",
        text: "We do not knowingly collect sensitive data (such as health, religious, or financial data) through the Website. Please do not include it in your messages.",
      },
    ],
  },
  {
    title: "3. How and why we use your data",
    blocks: [
      {
        kind: "table",
        headers: ["Purpose", "Data used", "Legal basis under the PDPL"],
        rows: [
          [
            "Replying to your inquiry and preparing quotes or proposals",
            "Form data",
            "Your consent, and steps you request before entering a contract",
          ],
          [
            "Delivering services you sign up for",
            "Form data and project details",
            "Performance of a contract with you",
          ],
          [
            "Measuring and improving Website performance",
            "Analytics and cookie data",
            "Your consent, given through the cookie banner",
          ],
          [
            "Keeping the Website secure and preventing misuse",
            "IP address and technical data",
            "Our legitimate interest",
          ],
          [
            "Meeting legal and regulatory obligations",
            "Any relevant data",
            "Legal obligation",
          ],
        ],
      },
      {
        kind: "p",
        text: "We will not use your data for direct marketing without your separate, explicit consent. You can withdraw that consent at any time.",
      },
    ],
  },
  {
    title: "4. Who we share your data with",
    blocks: [
      {
        kind: "p",
        text: "We do not sell your personal data. We share it only with:",
      },
      {
        kind: "ul",
        items: [
          "Service providers (processors) who help us run the Website, under agreements that require them to protect your data:",
          "Website hosting: Vercel, in the United States.",
          `Form handling and email: Resend. Inquiry messages are emailed to ${email}.`,
          "Analytics: Google Analytics, only after you accept analytics cookies.",
          "Government or judicial authorities when required by Saudi law.",
          "A successor entity if AirLabs is merged or acquired, subject to the same protections.",
        ],
      },
    ],
  },
  {
    title: "5. Transfers outside Saudi Arabia",
    blocks: [
      {
        kind: "p",
        text: "The Website and some service providers are hosted outside the Kingdom, including in the United States (hosting and analytics) and Japan (email delivery). As a result, your personal data may be transferred and processed outside Saudi Arabia.",
      },
      {
        kind: "p",
        text: "We only make such transfers in accordance with the PDPL and SDAIA's Regulation on Personal Data Transfer outside the Kingdom. This includes using appropriate safeguards and transferring only the minimum data needed.",
      },
    ],
  },
  {
    title: "6. How long we keep your data",
    blocks: [
      {
        kind: "ul",
        items: [
          "Inquiry and quote data: up to 24 months after our last contact, unless you become a client.",
          "Client data: for the duration of our contract and as required by Saudi law afterwards.",
          "Analytics data: up to 14 months, per our analytics settings.",
        ],
      },
      {
        kind: "p",
        text: "When data is no longer needed, we securely delete or anonymise it.",
      },
    ],
  },
  {
    title: "7. Cookies and analytics",
    blocks: [
      {
        kind: "p",
        text: "We use cookies and similar technologies to make the Website work and to understand how visitors use it.",
      },
      {
        kind: "ul",
        items: [
          "Essential storage: needed for the Website to function, including the theme choice saved in this browser. This does not require consent.",
          "Analytics cookies: help us measure traffic and improve content (Google Analytics). These are only set after you accept them in the cookie banner.",
        ],
      },
      {
        kind: "p",
        text: 'You can change your choice at any time through the "Cookie settings" link in the footer, or by clearing cookies in your browser. The business-card page does not load analytics.',
      },
    ],
  },
  {
    title: "8. Your rights",
    blocks: [
      {
        kind: "p",
        text: "Under the PDPL, you have the right to:",
      },
      {
        kind: "ol",
        items: [
          "Be informed about how your data is collected and used (this policy).",
          "Access your personal data held by us.",
          "Obtain a copy of your data in a clear, readable format.",
          "Correct inaccurate, incomplete, or outdated data.",
          "Request destruction of your data when it is no longer needed.",
          "Withdraw your consent at any time, without affecting processing done before withdrawal.",
        ],
      },
      {
        kind: "p",
        text: `To use any of these rights, email ${email}. We may ask you to verify your identity. We will respond within 30 days, as required by the PDPL Implementing Regulations.`,
      },
      {
        kind: "p",
        text: "If you are not satisfied with our response, you may file a complaint with the Saudi Data & AI Authority (SDAIA) through its official channels at sdaia.gov.sa.",
      },
    ],
  },
  {
    title: "9. How we protect your data",
    blocks: [
      {
        kind: "p",
        text: "We use reasonable technical and organisational measures to protect your data. These include encrypted connections (HTTPS), access restricted to authorised staff, and trusted service providers.",
      },
      {
        kind: "p",
        text: "If a data breach occurs that may harm you, we will notify SDAIA and, where required, you, within the timeframes set by the PDPL.",
      },
    ],
  },
  {
    title: "10. Children",
    blocks: [
      {
        kind: "p",
        text: "The Website is intended for businesses and adults. We do not knowingly collect personal data from anyone under 18. If you believe a child has sent us data, contact us and we will delete it.",
      },
    ],
  },
  {
    title: "11. Links to other websites",
    blocks: [
      {
        kind: "p",
        text: "The Website may link to third-party sites, such as our social media pages. We are not responsible for their privacy practices. Please review their policies.",
      },
    ],
  },
  {
    title: "12. Changes to this policy",
    blocks: [
      {
        kind: "p",
        text: "We may update this policy from time to time. We will post the new version on this page with an updated date. Significant changes will be highlighted on the Website.",
      },
    ],
  },
  {
    title: "13. Contact us",
    blocks: [
      {
        kind: "p",
        text: `For any questions about this policy or your personal data: AirLabs Solutions, ${address}. Email: ${email}. Phone: ${phone}.`,
      },
      {
        kind: "p",
        text: "You can also use the contact page.",
      },
      {
        kind: "p",
        text: "This policy is available in Arabic and English. If there is any conflict between the two versions, the Arabic version prevails.",
      },
    ],
  },
];

export const privacyAr: PrivacySection[] = [
  {
    title: "١. من نحن",
    blocks: [
      {
        kind: "p",
        text: 'تُعد شركة إيرلابس سوليوشنز ("إيرلابس" أو "نحن") جهة التحكم في البيانات الشخصية التي تُجمع عبر الموقع www.airlabss.com ("الموقع").',
      },
      {
        kind: "ul",
        items: [
          `الاسم النظامي: ${business.legalNameAr}`,
          `رقم السجل التجاري: ${business.crNumber}`,
          "الاسم التجاري: إيرلابس سوليوشنز",
          `العنوان: ${addressAr}`,
          `البريد الإلكتروني لطلبات الخصوصية: ${email}`,
          `الهاتف: ${phone}`,
        ],
      },
    ],
  },
  {
    title: "٢. البيانات الشخصية التي نجمعها",
    blocks: [
      {
        kind: "p",
        text: "بيانات تقدمها لنا عبر نموذج التواصل:",
      },
      {
        kind: "ul",
        items: [
          "الاسم الكامل",
          "البريد الإلكتروني",
          "رقم الجوال، إن قدّمته",
          "اسم الشركة، إن قدّمته",
          "الخدمة التي تختارها",
          "تفاصيل مشروعك أو استفسارك",
        ],
      },
      {
        kind: "p",
        text: "لا يطلب النموذج المسمى الوظيفي ولا مرفقات الملفات. وبيانات تُجمع تلقائياً عند تصفحك للموقع، ولا تُفعّل بيانات التحليلات إلا بعد موافقتك على ملفات تعريف الارتباط الخاصة بها:",
      },
      {
        kind: "ul",
        items: [
          "عنوان IP والموقع التقريبي (المدينة والدولة)",
          "نوع المتصفح ونوع الجهاز ونظام التشغيل",
          "الصفحات التي زرتها ومدة التصفح والموقع الذي أحالك إلينا والنقرات",
          "معرّفات ملفات تعريف الارتباط (انظر البند ٧)",
        ],
      },
      {
        kind: "p",
        text: "إذا بدّلت بين الوضع الفاتح والداكن، يُحفظ اختيارك في هذا المتصفح تحت الاسم theme. يبقى على جهازك ولا يصل إلينا.",
      },
      {
        kind: "p",
        text: "لا نجمع عن قصد أي بيانات حساسة (مثل البيانات الصحية أو الدينية أو المالية) عبر الموقع، ونرجو عدم تضمينها في رسائلك.",
      },
    ],
  },
  {
    title: "٣. كيف ولماذا نستخدم بياناتك",
    blocks: [
      {
        kind: "table",
        headers: ["الغرض", "البيانات المستخدمة", "الأساس النظامي"],
        rows: [
          [
            "الرد على استفسارك وإعداد عروض الأسعار",
            "بيانات النموذج",
            "موافقتك، والخطوات التي تطلبها قبل إبرام العقد",
          ],
          [
            "تقديم الخدمات التي تتعاقد عليها",
            "بيانات النموذج وتفاصيل المشروع",
            "تنفيذ عقد معك",
          ],
          [
            "قياس أداء الموقع وتحسينه",
            "بيانات التحليلات وملفات تعريف الارتباط",
            "موافقتك عبر شريط ملفات تعريف الارتباط",
          ],
          [
            "حماية الموقع ومنع إساءة استخدامه",
            "عنوان IP والبيانات التقنية",
            "مصلحتنا المشروعة",
          ],
          [
            "الالتزام بالمتطلبات النظامية",
            "أي بيانات ذات صلة",
            "التزام نظامي",
          ],
        ],
      },
      {
        kind: "p",
        text: "لن نستخدم بياناتك لأغراض التسويق المباشر دون الحصول على موافقتك الصريحة والمستقلة، ويحق لك سحب هذه الموافقة في أي وقت.",
      },
    ],
  },
  {
    title: "٤. مع من نشارك بياناتك",
    blocks: [
      {
        kind: "p",
        text: "لا نبيع بياناتك الشخصية. ونشاركها فقط مع:",
      },
      {
        kind: "ul",
        items: [
          "مقدمي الخدمات (جهات المعالجة) الذين يساعدوننا في تشغيل الموقع، بموجب اتفاقيات تُلزمهم بحماية بياناتك:",
          "استضافة الموقع: Vercel في الولايات المتحدة.",
          `معالجة النماذج والبريد الإلكتروني: Resend، وتُرسل رسائل الاستفسار إلى ${email}.`,
          "التحليلات: Google Analytics، بعد موافقتك على ملفات تعريف الارتباط الخاصة بالتحليلات فقط.",
          "الجهات الحكومية أو القضائية عندما يقتضي النظام السعودي ذلك.",
          "أي جهة خلف في حال اندماج إيرلابس أو الاستحواذ عليها، مع الالتزام بنفس مستوى الحماية.",
        ],
      },
    ],
  },
  {
    title: "٥. نقل البيانات خارج المملكة",
    blocks: [
      {
        kind: "p",
        text: "يُستضاف موقعنا وبعض مقدمي الخدمات خارج المملكة، بما في ذلك في الولايات المتحدة (الاستضافة والتحليلات) واليابان (إرسال البريد). وعليه قد تُنقل بياناتك الشخصية وتُعالج خارج المملكة العربية السعودية.",
      },
      {
        kind: "p",
        text: "نُجري هذا النقل وفقاً لنظام حماية البيانات الشخصية ولائحة نقل البيانات الشخصية خارج المملكة الصادرة عن سدايا، بما في ذلك استخدام ضمانات مناسبة ونقل الحد الأدنى من البيانات اللازمة فقط.",
      },
    ],
  },
  {
    title: "٦. مدة الاحتفاظ بالبيانات",
    blocks: [
      {
        kind: "ul",
        items: [
          "بيانات الاستفسارات وعروض الأسعار: حتى ٢٤ شهراً من آخر تواصل، ما لم تصبح عميلاً لدينا.",
          "بيانات العملاء: طوال مدة العقد، وبعدها وفق ما يقتضيه النظام السعودي.",
          "بيانات التحليلات: حتى ١٤ شهراً وفق إعدادات أداة التحليلات.",
        ],
      },
      {
        kind: "p",
        text: "عند انتهاء الحاجة إلى البيانات، نقوم بإتلافها أو إخفاء هويتها بشكل آمن.",
      },
    ],
  },
  {
    title: "٧. ملفات تعريف الارتباط والتحليلات",
    blocks: [
      {
        kind: "p",
        text: "نستخدم ملفات تعريف الارتباط (الكوكيز) والتقنيات المشابهة لتشغيل الموقع وفهم طريقة استخدام الزوار له.",
      },
      {
        kind: "ul",
        items: [
          "تخزين ضروري: لازم لعمل الموقع، ومنه حفظ اختيار الوضع الفاتح أو الداكن في هذا المتصفح. لا يتطلب موافقة.",
          "ملفات التحليلات: تساعدنا على قياس حركة الزيارات وتحسين المحتوى (Google Analytics)، ولا يتم تفعيلها إلا بعد موافقتك عبر شريط ملفات تعريف الارتباط.",
        ],
      },
      {
        kind: "p",
        text: "يمكنك تغيير اختيارك في أي وقت عبر رابط «إعدادات ملفات تعريف الارتباط» أسفل الصفحة، أو بحذف ملفات تعريف الارتباط من متصفحك. ولا تُحمَّل التحليلات في صفحة بطاقة العمل.",
      },
    ],
  },
  {
    title: "٨. حقوقك",
    blocks: [
      {
        kind: "p",
        text: "يكفل لك نظام حماية البيانات الشخصية الحقوق التالية:",
      },
      {
        kind: "ol",
        items: [
          "الحق في العلم بكيفية جمع بياناتك واستخدامها (هذه السياسة).",
          "الحق في الوصول إلى بياناتك الشخصية المتوفرة لدينا.",
          "الحق في الحصول على نسخة من بياناتك بصيغة واضحة ومقروءة.",
          "الحق في التصحيح للبيانات غير الدقيقة أو غير المكتملة أو غير المحدّثة.",
          "الحق في طلب الإتلاف لبياناتك عند انتفاء الحاجة إليها.",
          "الحق في سحب الموافقة في أي وقت، دون أن يؤثر ذلك على المعالجة التي تمت قبل السحب.",
        ],
      },
      {
        kind: "p",
        text: `لممارسة أي من هذه الحقوق، راسلنا على ${email}. قد نطلب منك التحقق من هويتك، وسنرد على طلبك خلال ٣٠ يوماً وفقاً لما تقتضيه اللائحة التنفيذية للنظام.`,
      },
      {
        kind: "p",
        text: "إذا لم تكن راضياً عن ردنا، يحق لك تقديم شكوى إلى الهيئة السعودية للبيانات والذكاء الاصطناعي (سدايا) عبر قنواتها الرسمية على sdaia.gov.sa.",
      },
    ],
  },
  {
    title: "٩. كيف نحمي بياناتك",
    blocks: [
      {
        kind: "p",
        text: "نطبّق تدابير تقنية وتنظيمية مناسبة لحماية بياناتك، منها الاتصال المشفّر (HTTPS)، وقصر الوصول على الموظفين المخوّلين، والتعامل مع مقدمي خدمات موثوقين.",
      },
      {
        kind: "p",
        text: "في حال وقوع تسرّب للبيانات قد يُلحق بك ضرراً، سنُبلغ سدايا، ونبلغك عند الاقتضاء، خلال المدد المحددة في النظام.",
      },
    ],
  },
  {
    title: "١٠. الأطفال",
    blocks: [
      {
        kind: "p",
        text: "الموقع موجّه للشركات والبالغين، ولا نجمع عن قصد بيانات شخصية من أي شخص دون سن ١٨ عاماً. إذا كنت تعتقد أن طفلاً قد أرسل إلينا بياناته، يُرجى التواصل معنا وسنقوم بحذفها.",
      },
    ],
  },
  {
    title: "١١. روابط المواقع الأخرى",
    blocks: [
      {
        kind: "p",
        text: "قد يحتوي الموقع على روابط لمواقع أطراف ثالثة، مثل حساباتنا على وسائل التواصل الاجتماعي. لسنا مسؤولين عن ممارسات الخصوصية لديها، ونوصي بمراجعة سياساتها.",
      },
    ],
  },
  {
    title: "١٢. التعديلات على هذه السياسة",
    blocks: [
      {
        kind: "p",
        text: "قد نُحدّث هذه السياسة من وقت لآخر، وسننشر النسخة المحدّثة في هذه الصفحة مع تاريخ التحديث. وسيتم الإشارة إلى التغييرات الجوهرية بشكل واضح على الموقع.",
      },
    ],
  },
  {
    title: "١٣. تواصل معنا",
    blocks: [
      {
        kind: "p",
        text: `لأي استفسار حول هذه السياسة أو بياناتك الشخصية: إيرلابس سوليوشنز، ${addressAr}. البريد الإلكتروني: ${email}. الهاتف: ${phone}.`,
      },
      {
        kind: "p",
        text: "يمكنك أيضاً استخدام صفحة التواصل.",
      },
      {
        kind: "p",
        text: "هذه السياسة متاحة باللغتين العربية والإنجليزية، وفي حال وجود أي تعارض بينهما، يُعتمد النص العربي.",
      },
    ],
  },
];
