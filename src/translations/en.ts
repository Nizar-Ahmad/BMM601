import { Translation } from "@/types/translation";

const en: Translation = {
    nav: {
        home: "Home",
        about: "Generative AI",
        howItWorks: "How It Works",
        images: "Images",
        audio: "Audio",
        video: "Video",
        challenges: "Challenges",
        gallery: "Gallery",
        project: "About Project",
    },
    common: {
        language: "Language",
        theme: "Theme",
        light: "Light",
        dark: "Dark",
        readMore: "Read more",
        learnMore: "Learn more",
        explore: "Explore",
    },
    home: {
        badge: "A multimedia-rich educational website",
        heroTitle: "GenMedia AI",
        heroSubtitle:
            "A modern educational platform that explains generative AI and its applications in creating images, audio, and video within multimedia systems through a clear academic style and a rich visual experience.",
        heroPrimaryBtn: "Start Exploring",
        heroSecondaryBtn: "View Gallery",

        introTitle: "Introduction to Generative AI",
        introText:
            "Generative AI refers to systems capable of producing new content based on the data they were trained on, such as text, images, audio, and videos. It has become one of the most influential areas of artificial intelligence in building modern multimedia experiences.",

        contentTypesTitle: "Types of Generatable Content",
        contentTypesText:
            "Generative models can support the production of multiple kinds of digital content, making them useful in design, education, marketing, and multimedia creation.",

        imageCardTitle: "Images",
        imageCardText:
            "Generate new visuals from text prompts, enhance digital images, and apply different artistic or visual styles.",

        audioCardTitle: "Audio",
        audioCardText:
            "Produce digital voice-over, music composition, and sound effects that enrich interactive experiences.",

        videoCardTitle: "Video",
        videoCardText:
            "Create short videos, animate scenes, and produce educational or promotional visual content faster.",

        multimediaCardTitle: "Multimedia",
        multimediaCardText:
            "Combine text, image, audio, and video into one integrated experience that communicates ideas more effectively.",

        workflowTitle: "How Does Generative AI Work?",
        workflowText:
            "Generative models are trained on large amounts of data, then use user input to produce new content that follows the patterns learned during training.",

        workflowStep1Title: "User Prompt",
        workflowStep1Text:
            "The process begins when the user writes a prompt describing the requested idea or expected output.",

        workflowStep2Title: "Analysis and Processing",
        workflowStep2Text:
            "The model analyzes the input words or data and connects them with patterns learned previously.",

        workflowStep3Title: "Output Generation",
        workflowStep3Text:
            "A new image, audio clip, video, or text output is generated based on the request and learned knowledge.",

        workflowStep4Title: "Refinement and Iteration",
        workflowStep4Text:
            "The user can refine the prompt or improve the result several times to achieve a more accurate and higher-quality output.",

        quickGalleryTitle: "Quick Output Gallery",
        quickGalleryText:
            "This section presents initial examples of output types that generative AI technologies can produce in multimedia contexts.",

        sectionsTitle: "Explore the Website Sections",
        sectionsText:
            "The website provides several focused pages explaining generative AI applications in images, audio, and video, along with challenges, gallery items, and references.",
        quickGalleryCard1Label: "AI Generated Image",
        quickGalleryCard1Title: "Future Scene",
        quickGalleryCard1Description:
            "An example of a digital visual generated from a text prompt using generative AI tools.",

        quickGalleryCard2Label: "Synthetic Audio",
        quickGalleryCard2Title: "Educational Voice-over",
        quickGalleryCard2Description:
            "An example of using generative models to create voice-over for educational and media content.",

        quickGalleryCard3Label: "Short Video",
        quickGalleryCard3Title: "Visual Explainer Clip",
        quickGalleryCard3Description:
            "An initial example of producing a short video or enhancing a visual scene for multimedia experiences.",
    },
    about: {
        heroTitle: "What is Generative AI?",
        heroText:
            "Generative AI is a branch of artificial intelligence that focuses on producing new content rather than only analyzing or classifying data. These systems can generate text, images, audio, and video based on patterns learned during training.",
        definitionTitle: "A Simple Definition",
        definitionText:
            "Generative AI relies on advanced models trained on massive amounts of data, then uses that knowledge to produce new content that resembles what it learned without being an exact copy. For this reason, it is considered one of the most important modern technologies in digital creativity and multimedia.",
        differenceTitle: "How It Differs from Traditional AI",
        differenceText:
            "Traditional AI focuses on classification, prediction, and decision-making, such as image recognition or spam detection. Generative AI, on the other hand, focuses on creating new content such as writing an article, generating an image, or producing audio and video.",
        examplesTitle: "Examples of Its Use",
        examplesText:
            "Applications of generative AI have expanded across many fields and are now present in daily life as well as in creative industries.",
        examplesCard1Title: "Visual Design",
        examplesCard1Text:
            "It is used to generate images, design posters, create backgrounds, and enhance graphical elements quickly.",
        examplesCard2Title: "Audio Production",
        examplesCard2Text:
            "It supports voice-over generation, music creation, and sound effects production used in digital projects.",
        examplesCard3Title: "Visual Content",
        examplesCard3Text:
            "It is used to produce short videos, animate scenes, and improve the quality of visual materials in educational and media applications.",
        importanceTitle: "Its Importance in Multimedia",
        importanceText:
            "Generative AI is important because it accelerates content creation, supports creativity, reduces initial production costs, and provides new possibilities for designers, creators, and students building integrated visual and audio projects.",
    },
    howItWorksPage: {
        heroTitle: "How Does Generative AI Work?",
        heroText:
            "The production of generative content goes through several stages, starting with model training on data, then receiving the user request, analyzing the input, and finally generating the required output based on learned patterns.",
        trainingTitle: "The Training Stage",
        trainingText:
            "At first, the model is trained on large amounts of text, images, audio clips, or videos. During this phase, it learns relationships, structures, and patterns within the data, which later enables it to produce new content.",
        processTitle: "Output Creation Stages",
        processText:
            "When the user writes a request, the model analyzes the words or inputs, connects them to what it learned during training, and then generates a new output that can be refined and adjusted.",
        step1Title: "Data and Training",
        step1Text:
            "The model learns from many diverse examples to understand patterns in language, images, or audio.",
        step2Title: "User Input",
        step2Text:
            "The user writes a prompt or text instruction describing the idea or required content type.",
        step3Title: "Generation",
        step3Text:
            "The model creates a new output based on learned patterns and the details of the current request.",
        step4Title: "Review and Refinement",
        step4Text:
            "The user can modify the request or retry several times to obtain a more accurate and suitable result.",
        infographicTitle: "A Simplified Visual Summary",
        infographicText:
            "The process can be summarized in four main stages: model training, prompt reception, output generation, and iterative refinement until the desired result is reached.",
    },

    imagesPage: {
        heroTitle: "Applications of Generative AI in Images",
        heroText:
            "Generative AI contributes to creating, enhancing, and transforming digital images in multiple ways, making it a powerful tool in design, advertising, and visual production.",
        generatedTitle: "Generated Images",
        generatedText:
            "Generative tools make it possible to create new visuals from text descriptions, with control over artistic style, scene composition, lighting, and required visual elements.",
        generatedCard1Title: "Imaginary Scenes",
        generatedCard1Text:
            "Future-oriented, artistic, or educational scenes can be created quickly without capturing them physically.",
        generatedCard2Title: "Creative Designs",
        generatedCard2Text:
            "These technologies are used in posters, covers, backgrounds, and illustrative assets for websites and applications.",
        beforeAfterTitle: "Before / After Examples",
        beforeAfterText:
            "AI tools can also improve original images through upscaling, color correction, object removal, and visual detail enhancement.",
        enhancementTitle: "AI in Image Enhancement",
        enhancementText:
            "Its role is not limited to generation only; it can also support designers in refining and reprocessing visuals for digital publishing.",
    },

    audioPage: {
        heroTitle: "Applications of Generative AI in Audio",
        heroText:
            "Generative AI can now produce digital voices, voice-over, music, and sound effects that support educational, media, and interactive applications.",
        useCasesTitle: "Main Audio Use Cases",
        useCasesText:
            "Generative audio applications span multiple fields, from narration and voice-over to music and sound design.",
        card1Title: "Voice-over",
        card1Text:
            "Clear digital voice-over can be created for educational videos, presentations, and explanatory content.",
        card2Title: "Generative Music",
        card2Text:
            "Generative models can help produce short music pieces that support videos, websites, and creative projects.",
        card3Title: "Sound Effects",
        card3Text:
            "Ambient sounds and audio effects can be created to add value to visual and interactive experiences.",
        sampleTitle: "Experimental Audio Sample",
        sampleText:
            "A short audio clip can be displayed inside the website to represent the idea of generated or enhanced audio in multimedia environments.",
    },

    videoPage: {
        heroTitle: "Applications of Generative AI in Video",
        heroText:
            "Generative AI offers advanced capabilities for creating short videos, animating elements, improving scenes, and supporting editing and visual production workflows.",
        usesTitle: "Uses in Video Production",
        usesText:
            "Generative video applications range across educational, marketing, and creative content, with strong emphasis on speed and stylistic variation.",
        card1Title: "Short Educational Videos",
        card1Text:
            "Short visual scenes can be created to explain an idea or concept quickly and clearly.",
        card2Title: "Scene Enhancement",
        card2Text:
            "Lighting, quality, and transitions can be improved in video content using AI-assisted workflows.",
        card3Title: "Editing and Production",
        card3Text:
            "Modern tools help accelerate parts of editing, composition, and the addition of explanatory visual elements.",
        sampleTitle: "Experimental Video Example",
        sampleText:
            "A short video with synchronized explanatory text can be embedded to highlight the educational goal of the project.",
    },

    mediaLabels: {
        generated: "AI Generated",
        assisted: "AI Assisted",
        enhanced: "Digitally Enhanced",
        before: "Before",
        after: "After",
        sampleAudio: "Audio Sample",
        sampleVideo: "Video Sample",
    },

    challengesPage: {
        heroTitle: "Pros, Cons, and Challenges",
        heroText:
            "Although generative AI provides major benefits in supporting creativity and accelerating production, its use is accompanied by technical, ethical, and professional challenges that should be understood in a balanced way.",
        prosTitle: "Advantages",
        prosText:
            "Generative AI helps improve workflow efficiency and expand creative possibilities in digital projects.",
        pro1Title: "Faster Production",
        pro1Text:
            "It reduces the time needed to produce initial images, texts, audio clips, and video materials.",
        pro2Title: "Creative Support",
        pro2Text:
            "It provides diverse ideas and visual or audio suggestions that can be refined and developed further.",
        pro3Title: "Lower Initial Costs",
        pro3Text:
            "It gives students, beginners, and creators faster and lower-cost ways to produce early prototypes.",
        consTitle: "Disadvantages",
        consText:
            "These technologies also come with limitations and risks that should be considered during use and publication.",
        con1Title: "Possible Inaccuracy",
        con1Text:
            "Models may sometimes produce inaccurate output or include visual, linguistic, or logical errors.",
        con2Title: "Rights and Ownership Issues",
        con2Text:
            "Some tools raise questions related to intellectual property and the origin of training data.",
        con3Title: "Overdependence",
        con3Text:
            "Excessive reliance may reduce the role of human skill and personal creativity if not used carefully.",
        ethicsTitle: "Ethics and Future Challenges",
        ethicsText:
            "Ethical challenges include deepfakes, credibility, misinformation, and the possibility of using generated content irresponsibly. These technologies should therefore be approached with transparency, review, and awareness.",
    },

    galleryPage: {
        heroTitle: "Gallery of Models and Outputs",
        heroText:
            "This gallery gathers various examples of images, audio, and video to demonstrate how generative AI can be used in multimedia projects.",
        imagesTitle: "Image Samples",
        imagesText:
            "This section includes examples of generated, enhanced, or AI-assisted visuals.",
        audioTitle: "Audio Samples",
        audioText:
            "This section includes examples of voice-over and audio clips that can be used in educational or media content.",
        videoTitle: "Video Samples",
        videoText:
            "This section contains illustrative examples of short videos that can be created or improved using modern tools.",
        item1Title: "Future Poster",
        item1Text:
            "An example of a visual design created using image generation tools with some additional design refinement.",
        item2Title: "Enhanced Image",
        item2Text:
            "An example of an original image whose colors and clarity were improved for web presentation.",
        item3Title: "Voice-over Sample",
        item3Text:
            "An example of an audio sample that can be used to explain a concept or present educational content.",
        item4Title: "Sound Effect",
        item4Text:
            "An example of a short audio element that adds value to an interactive or visual scene.",
        item5Title: "Short Educational Video",
        item5Text:
            "An example of a short video explaining a specific idea with synchronized explanatory text.",
        item6Title: "Enhanced Scene",
        item6Text:
            "An example of a video or visual scene that has been digitally enhanced using editing or intelligent support tools.",
    },

    projectPage: {
        heroTitle: "About the Project and References",
        heroText:
            "This page presents an overview of the project goals, the tools used in building it, the content generated or enhanced with AI, and a short list of references.",
        goalsTitle: "Project Goals",
        goalsText:
            "The project aims to introduce visitors to generative AI and its applications in multimedia through a static website rich in images, audio, and video, with a modern and user-friendly interface.",
        toolsTitle: "Tools Used",
        toolsText:
            "The project relied on a set of programming and design tools to build the website, organize its content, and present it visually in a web-appropriate format.",
        toolsCard1Title: "Next.js and React",
        toolsCard1Text:
            "They were used to build the website pages, organize the interface, and apply a modern and fast structure.",
        toolsCard2Title: "Tailwind CSS",
        toolsCard2Text:
            "It was used to style the site and create a responsive interface that supports both dark and light modes.",
        toolsCard3Title: "AI Tools",
        toolsCard3Text:
            "AI tools were used to generate or suggest part of the visual content, text, or early creative ideas.",
        aiContentTitle: "AI-Generated or AI-Enhanced Content",
        aiContentText:
            "The report should clearly indicate which elements were generated or enhanced using AI tools, such as some visuals, early prototypes, or suggested text that was later reviewed and edited.",
        referencesTitle: "References",
        referencesText:
            "Scientific, technical, or educational references used to understand the concepts and shape the site content can be listed on this page and in the final report.",
    },

    extra: {
        references: "Suggested References",
        source: "Source",
        note: "Note",
    },
};

export default en;