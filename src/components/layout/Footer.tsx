"use client";

import Container from "@/components/layout/Container";
import { useLanguage } from "@/context/LanguageContext";

export default function Footer() {
  const { language } = useLanguage();
  const isArabic = language === "ar";

  const students = [
    {
      ar: "نزار غسان أحمد",
      en: "Nezar Ghassan Ahmad",
      id: "nezar_195796",
    },
    {
      ar: "آدم قيس زاهر",
      en: "Adam Qais Zaher",
      id: "adam_192566",
    },
    {
      ar: "محمد فراس ياقتي",
      en: "Mohamad Firas Yaqti",
      id: "mohamad_187159",
    },
    {
      ar: "عدنان زعيرباني",
      en: "Adnan Zerbani",
      id: "adnan_202576",
    },
    {
      ar: "علي عهد الكردي",
      en: "Ali Ahed Alkurdi",
      id: "ali_215528",
    },
    {
      ar: "أمين إسماعيل مسعود",
      en: "Ameen Ismail Masoud",
      id: "ameen_162864",
    },
    {
      ar: "أحمد مسلم الخياط",
      en: "Ahmed Muslim Al-Khayat",
      id: "ahmad_157703",
    },
  ];

  return (
    <footer
      className="mt-20 border-t"
      style={{ borderColor: "var(--border)" }}
    >
      <Container className="py-10 sm:py-12">
        <div className="space-y-8">
          {/* top */}
          <div className="flex flex-col gap-6 border-b pb-6 sm:pb-8 lg:flex-row lg:items-start lg:justify-between" style={{ borderColor: "var(--border)" }}>
            <div className="space-y-2">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-cyan-400">
                GenMedia AI
              </p>
              <h2 className="text-xl font-bold">SVU S25 ITE BMM601</h2>
            </div>

            <div className="space-y-1 text-sm">
              <p className="opacity-60">
                {isArabic ? "المشرف" : "Supervisor"}
              </p>
              <p className="font-medium">
                {isArabic
                  ? "م. طلال محمد وليد أنطاكية"
                  : "Eng. Talal Mohammad Waleed Antakieh"}
              </p>
            </div>
          </div>

          {/* team */}
          <div className="space-y-4">
            <h3 className="text-sm font-semibold uppercase tracking-[0.18em] opacity-70">
              {isArabic ? "فريق العمل" : "Project Team"}
            </h3>

            <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 xl:grid-cols-3">
              {students.map((student, index) => (
                <div
                  key={index}
                  className="flex items-center justify-between gap-4 rounded-2xl border px-4 py-3"
                  style={{ borderColor: "var(--border)" }}
                >
                  <span className="text-sm font-medium">
                    {isArabic ? student.ar : student.en}
                  </span>

                  <span className="text-xs opacity-60">{student.id}</span>
                </div>
              ))}
            </div>
          </div>

          {/* bottom */}
          <div className="flex flex-col gap-2 border-t pt-5 text-xs opacity-60 sm:flex-row sm:items-center sm:justify-between" style={{ borderColor: "var(--border)" }}>
            <p>© {new Date().getFullYear()} GenMedia AI</p>
            <p>
              {isArabic
                ? "مشروع أكاديمي ضمن مقرر الوسائط المتعددة"
                : "Academic project for a multimedia course"}
            </p>
          </div>
        </div>
      </Container>
    </footer>
  );
}