import Image from "next/image";

const aiTools = [
  {
    name: "ChatGPT / GPT-4o",
    useCase: "توليد نصوص وسيناريوهات للمحتوى التفاعلي والمواقع التعليمية.",
  },
  {
    name: "Midjourney / DALL·E",
    useCase: "إنتاج صور مفاهيمية وأعمال فنية سريعة لمشاهد الوسائط المتعددة.",
  },
  {
    name: "Runway / Pika",
    useCase: "إنشاء مقاطع فيديو قصيرة من نصوص أو صور مع مؤثرات بصرية.",
  },
  {
    name: "Suno / ElevenLabs",
    useCase: "إنتاج تعليق صوتي أو موسيقى خلفية لمقاطع الفيديو التعليمية.",
  },
];

const generatedExamples = [
  {
    title: "تصميم شخصية تعليمية",
    description:
      "صورة تم توليدها بأداة ذكاء صنعي لشرح مفهوم التعلم التفاعلي في بيئات الوسائط المتعددة.",
    image:
      "https://images.unsplash.com/photo-1677442135136-760c813a6f57?auto=format&fit=crop&w=1200&q=80&fm=webp",
  },
  {
    title: "لوحة مستقبلية للمدينة الذكية",
    description:
      "نموذج بصري يوضح دمج الذكاء الصنعي مع الشاشات التفاعلية والواقع المعزز.",
    image:
      "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?auto=format&fit=crop&w=1200&q=80&fm=webp",
  },
  {
    title: "استوديو إنتاج فيديو بالذكاء الصنعي",
    description:
      "مشهد توضيحي لسير عمل من كتابة الفكرة إلى إنتاج فيديو ونشره على الويب.",
    image:
      "https://images.unsplash.com/photo-1674027444485-cec3da58eef4?auto=format&fit=crop&w=1200&q=80&fm=webp",
  },
];

export default function Home() {
  return (
    <main className="page" dir="rtl">
      <header className="hero card">
        <div className="logoWrap">
          <div className="logo">AI Media Lab</div>
          <p className="tag">مختبر الوسائط المتعددة التوليدية</p>
        </div>
        <div>
          <h1>تقنيات الذكاء الصنعي التوليدي في بناء نظم الوسائط المتعددة</h1>
          <p>
            موقع تعليمي ثابت يعرّف الزائرين بمفهوم الذكاء الصنعي التوليدي، آلية عمله،
            تطبيقاته الواقعية، وأهم إيجابياته وسلبياته في مجال إنشاء الصور والصوت والفيديو.
          </p>
        </div>
      </header>

      <section className="card">
        <h2>ما هو الذكاء الصنعي التوليدي؟</h2>
        <p>
          الذكاء الصنعي التوليدي هو نوع من النماذج القادرة على إنشاء محتوى جديد (نص،
          صورة، صوت، أو فيديو) بالاعتماد على تعلم الأنماط من بيانات ضخمة. في مجال
          الوسائط المتعددة، يسرّع هذا النهج مراحل الإنتاج ويوسّع خيارات الإبداع.
        </p>
      </section>

      <section className="card">
        <h2>كيف تعمل الأدوات التوليدية؟</h2>
        <ol>
          <li>جمع بيانات تدريب متنوعة (صور، نصوص، أصوات، فيديو).</li>
          <li>تدريب نموذج عميق لاكتشاف الأنماط والعلاقات بين العناصر.</li>
          <li>استقبال موجّه المستخدم (Prompt) كنقطة بداية.</li>
          <li>توليد مخرجات جديدة قابلة للتعديل والتحسين.</li>
          <li>مراجعة بشرية لضبط الجودة والدقة والسياق الأخلاقي.</li>
        </ol>
      </section>

      <section className="card">
        <h2>أدوات شائعة وتطبيقات عملية</h2>
        <div className="grid two">
          {aiTools.map((tool) => (
            <article className="miniCard" key={tool.name}>
              <h3>{tool.name}</h3>
              <p>{tool.useCase}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="card">
        <h2>نماذج صور مولدة ومحسنة (WEBP)</h2>
        <p className="note">
          ملاحظة: هذه الصور أمثلة تعليمية بصيغة WEBP لعرض فكرة المخرجات البصرية.
        </p>
        <div className="grid three">
          {generatedExamples.map((item) => (
            <figure className="figure" key={item.title}>
              <Image
                src={item.image}
                alt={item.title}
                width={1200}
                height={800}
                className="cover"
              />
              <figcaption>
                <strong>{item.title}</strong>
                <span>{item.description}</span>
              </figcaption>
            </figure>
          ))}
        </div>
      </section>

      <section className="card mediaSection">
        <h2>فيديو تعليمي + صوت (مثال تطبيقي)</h2>
        <p>
          يمكنك استبدال المثال التالي بفيديو من إعدادك باستخدام أدوات المونتاج الرقمي،
          مع تعليق صوتي مولد أو مسجل منك.
        </p>
        <div className="videoWrap">
          <iframe
            src="https://www.youtube.com/embed/aA5A2dP3x40"
            title="Generative AI in Multimedia"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          />
        </div>
        <audio controls className="audio">
          <source
            src="https://cdn.pixabay.com/download/audio/2023/06/01/audio_4fa18f9f56.mp3?filename=technology-logo-153518.mp3"
            type="audio/mpeg"
          />
          متصفحك لا يدعم تشغيل الصوت.
        </audio>
      </section>

      <section className="card">
        <h2>الإيجابيات والسلبيات</h2>
        <div className="grid two">
          <article className="miniCard">
            <h3>الإيجابيات</h3>
            <ul>
              <li>تسريع إنتاج المحتوى وتقليل التكلفة الزمنية.</li>
              <li>إتاحة تجريب أفكار متعددة بسرعة.</li>
              <li>تمكين الطلاب والمبتدئين من إنتاج نماذج أولية احترافية.</li>
            </ul>
          </article>
          <article className="miniCard">
            <h3>السلبيات والتحديات</h3>
            <ul>
              <li>احتمالية أخطاء أو معلومات غير دقيقة.</li>
              <li>قضايا حقوق الملكية والخصوصية للبيانات.</li>
              <li>الحاجة إلى إشراف بشري لتقييم الجودة والأخلاقيات.</li>
            </ul>
          </article>
        </div>
      </section>

      <section className="card">
        <h2>توثيق المحتوى المولد بالذكاء الصنعي</h2>
        <p>
          في تقرير الوظيفة، أشر بوضوح إلى الأجزاء التي تم توليدها أو تحسينها باستخدام
          أدوات الذكاء الصنعي (مثل الصور، النصوص، الصوت، أو الفيديو)، مع توضيح اسم
          الأداة ونوع التعديل الذي تم.
        </p>
      </section>
    </main>
  );
}
