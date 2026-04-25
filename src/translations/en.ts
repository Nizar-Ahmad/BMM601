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
        badge: "Educational multimedia website",
        heroTitle: "GenMedia AI",
        heroSubtitle:
            "GenMedia AI is a static educational website that presents generative artificial intelligence and its role in producing images, audio, and video for modern multimedia systems. The website combines academic explanation, visual examples, and interactive media elements in a clear and accessible structure.",
        heroPrimaryBtn: "Start Exploring",
        heroSecondaryBtn: "View Gallery",

        introTitle: "Generative AI in Multimedia",
        introText:
            "Generative artificial intelligence has become an important part of digital media production. Instead of only analyzing information, generative systems can create new outputs such as illustrations, voice narration, background music, video scenes, and visual design elements. This makes them useful in education, advertising, content creation, web design, and interactive applications.",

        contentTypesTitle: "Types of Content Produced by Generative AI",
        contentTypesText:
            "Generative AI tools can support several forms of digital production. In multimedia projects, this means combining generated or enhanced images, synthesized audio, edited video, and explanatory text into one coherent communication experience.",

        imageCardTitle: "Images",
        imageCardText:
            "Generative AI can create illustrations, concept art, posters, digital backgrounds, and enhanced image versions based on written descriptions or existing visual references.",

        audioCardTitle: "Audio",
        audioCardText:
            "Audio generation tools can produce voice-over narration, background music, sound effects, and spoken educational content that supports multimedia presentations.",

        videoCardTitle: "Video",
        videoCardText:
            "Video-oriented AI tools assist in creating short clips, improving scenes, generating motion, adding captions, and supporting editing workflows.",

        multimediaCardTitle: "Integrated Multimedia",
        multimediaCardText:
            "The strongest value appears when text, image, sound, and video are combined into a unified learning experience that communicates information clearly and visually.",

        workflowTitle: "From Prompt to Multimedia Output",
        workflowText:
            "Most generative AI workflows begin with a prompt or input material. The model interprets the request, connects it with learned patterns, produces an initial output, and allows the user to refine the result through additional instructions or editing.",

        workflowStep1Title: "Input Description",
        workflowStep1Text:
            "The process begins with a written prompt, image reference, audio idea, or video concept that describes the intended result.",

        workflowStep2Title: "Model Interpretation",
        workflowStep2Text:
            "The model analyzes the input and identifies relevant patterns such as style, subject, tone, structure, and expected media format.",

        workflowStep3Title: "Content Generation",
        workflowStep3Text:
            "A new output is produced, such as an image, voice clip, music segment, short video, or combined multimedia element.",

        workflowStep4Title: "Review and Refinement",
        workflowStep4Text:
            "The result is reviewed, improved, compressed, and prepared for use on the web through suitable formats and optimized file sizes.",

        quickGalleryTitle: "Quick Output Preview",
        quickGalleryText:
            "This section provides a quick look at the main media categories covered by the website: generated visuals, synthetic or edited audio, and short explanatory video content.",

        sectionsTitle: "Explore the Main Sections",
        sectionsText:
            "The website is organized into specialized pages that explain the concept of generative AI, its working mechanism, its applications in images, audio, and video, and the challenges related to its use.",

        quickGalleryCard1Label: "AI Generated Image",
        quickGalleryCard1Title: "Futuristic Visual Scene",
        quickGalleryCard1Description:
            "A visual example representing how text prompts can be transformed into digital scenes suitable for educational and creative media projects.",

        quickGalleryCard2Label: "Synthetic Audio",
        quickGalleryCard2Title: "Educational Voice-over",
        quickGalleryCard2Description:
            "An audio example representing how narration can be generated or processed to support explanations, presentations, and video content.",

        quickGalleryCard3Label: "Short Video",
        quickGalleryCard3Title: "Visual Explainer Clip",
        quickGalleryCard3Description:
            "A short video example showing how motion, visual design, and captions can be combined to explain a technical concept.",
    },

    about: {
        heroTitle: "Introduction to Generative Artificial Intelligence",
        heroText:
            "Generative Artificial Intelligence is a branch of artificial intelligence focused on producing new content rather than only classifying or analyzing existing data. It can generate text, images, audio, and video by learning patterns from large collections of examples and applying those patterns to new user requests.",

        definitionTitle: "Concept and Definition",
        definitionText:
            "Generative AI relies on machine learning models trained on extensive datasets. During training, these models learn relationships between words, shapes, colors, sounds, motion, and meaning. After training, they can create new outputs that resemble the learned patterns while still being newly produced. This ability makes generative AI especially important in digital creativity and multimedia systems.",

        differenceTitle: "How It Differs from Traditional AI",
        differenceText:
            "Traditional AI is usually designed to recognize, classify, recommend, or predict. For example, it may detect objects in an image or classify a message as spam. Generative AI goes further by producing new material. It can write a paragraph, generate an illustration, create a voice narration, or assist in producing a video scene. This makes it closer to creative production than simple data analysis.",

        examplesTitle: "Practical Applications",
        examplesText:
            "Generative AI appears in many areas of multimedia work. It helps designers create visual drafts, educators prepare explanatory materials, content creators produce narration and visuals, and developers build richer user experiences for websites and applications.",

        examplesCard1Title: "Image and Visual Design",
        examplesCard1Text:
            "It supports the creation of illustrations, posters, web banners, concept art, and visual assets. It can also enhance existing images by improving clarity, lighting, colors, and composition.",

        examplesCard2Title: "Audio Generation and Processing",
        examplesCard2Text:
            "It can create voice-over narration, generate simple music pieces, clean recorded audio, and produce sound effects that improve the quality of multimedia presentations.",

        examplesCard3Title: "Video and Motion Content",
        examplesCard3Text:
            "It supports short video production, scene enhancement, animated visual explanations, caption creation, and faster preparation of educational or promotional video content.",

        importanceTitle: "Importance in Multimedia Systems",
        importanceText:
            "In multimedia systems, generative AI reduces the time needed to prepare initial content, increases the number of possible creative directions, and helps transform ideas into presentable prototypes. It does not replace human review and design judgment, but it gives creators a powerful starting point for producing richer digital experiences.",
    },

    howItWorksPage: {
        heroTitle: "How Does Generative AI Work?",
        heroText:
            "Generative AI works through a sequence of technical and creative stages. A model is first trained on large datasets, then it receives a user input, analyzes the requested task, generates an output, and allows the result to be improved through refinement.",

        trainingTitle: "Training on Large Datasets",
        trainingText:
            "Training is the stage in which the model learns from many examples. For text models, the data may include articles, books, and web content. For image models, the data may include visual examples with descriptions. For audio and video models, the data may include recordings, speech, music, movement, frames, and timing patterns. The goal is not to memorize one item, but to learn relationships and structures that can later be used to generate new content.",

        processTitle: "Main Generation Process",
        processText:
            "After training, the model can respond to a prompt or input. The quality of the result depends on the clarity of the request, the type of model, the training data, and the refinement steps applied after generation.",

        step1Title: "Data and Training",
        step1Text:
            "The model learns patterns from large and diverse data sources, including language, visual structures, audio signals, and video sequences.",

        step2Title: "User Input",
        step2Text:
            "The user provides a prompt, image reference, audio instruction, or video idea that describes the required output.",

        step3Title: "Generation",
        step3Text:
            "The model produces a new output based on the request and the patterns it learned during training.",

        step4Title: "Refinement",
        step4Text:
            "The output is reviewed, adjusted, regenerated, or edited until it becomes suitable for the intended use.",

        infographicTitle: "Simplified Workflow",
        infographicText:
            "The workflow can be understood as a cycle: training builds the model’s knowledge, the prompt guides the direction, generation creates the first result, and refinement improves the final output. This cycle is common in image creation, voice generation, video editing, and other multimedia production tasks.",
    },

    imagesPage: {
        heroTitle: "Applications of Generative AI in Images",
        heroText:
            "Images are among the most visible applications of generative AI. Modern tools can create visuals from text, transform existing images, improve quality, modify style, and prepare visual assets for websites, presentations, advertising, and educational content.",

        generatedTitle: "Generated Images",
        generatedText:
            "Image generation tools can produce new visuals from a written description. The prompt may define the subject, style, lighting, colors, camera angle, background, and visual mood. This makes the technology useful for concept design, educational illustrations, posters, and quick visual prototyping.",

        generatedCard1Title: "Futuristic and Conceptual Scenes",
        generatedCard1Text:
            "Generative AI can produce scenes that are difficult or expensive to photograph in real life, such as futuristic environments, abstract technology concepts, scientific visualizations, and imaginative educational visuals.",

        generatedCard2Title: "Creative Design Assets",
        generatedCard2Text:
            "Generated visuals can be used as starting points for posters, web sections, hero images, backgrounds, icons, presentation graphics, and visual storytelling elements.",

        beforeAfterTitle: "Before and After Enhancement",
        beforeAfterText:
            "AI-assisted editing can improve existing images by adjusting contrast, sharpness, color balance, noise, resolution, lighting, and composition. This is useful when original images need to be prepared for web publication or visual presentation.",

        enhancementTitle: "Image Enhancement in Web Projects",
        enhancementText:
            "For web use, images must be visually clear and technically optimized. After generation or editing, images can be compressed and exported in WEBP or AVIF format to reduce file size while preserving acceptable quality. This improves loading speed and creates a smoother user experience.",
    },

    audioPage: {
        heroTitle: "Applications of Generative AI in Audio",
        heroText:
            "Generative AI is increasingly used in audio production, especially for narration, music creation, sound design, and audio enhancement. These capabilities support educational videos, interactive websites, podcasts, presentations, and multimedia learning materials.",

        useCasesTitle: "Audio Production Use Cases",
        useCasesText:
            "Audio is essential in multimedia because it adds explanation, rhythm, atmosphere, and emotional tone. AI tools can help produce or improve audio elements when recording resources are limited or when fast prototyping is required.",

        card1Title: "Voice-over Narration",
        card1Text:
            "Text-to-speech tools can convert written scripts into clear narration. This is useful for explaining technical concepts, adding accessibility support, and creating voice tracks for short videos or presentations.",

        card2Title: "Music and Background Atmosphere",
        card2Text:
            "AI-generated music can provide short background tracks for videos, website sections, or educational content. The tone can be calm, futuristic, dramatic, or energetic depending on the purpose of the project.",

        card3Title: "Sound Effects and Audio Enhancement",
        card3Text:
            "Sound effects can support animations, transitions, and interactive elements. Audio enhancement tools can also reduce noise, improve clarity, and make recorded speech easier to understand.",

        sampleTitle: "Audio Sample",
        sampleText:
            "The audio sample represents the role of sound in multimedia communication. A short narration or background sound can make the website experience more engaging and help visitors understand the subject faster.",
    },

    videoPage: {
        heroTitle: "Applications of Generative AI in Video",
        heroText:
            "Video combines image, motion, sound, timing, and text. Generative AI can support video production by creating short clips, assisting with editing, generating visual scenes, enhancing footage, and adding captions or explanatory elements.",

        usesTitle: "Video Production Use Cases",
        usesText:
            "In multimedia projects, video is effective because it presents information through movement and sequence. AI-assisted video tools can help transform ideas into short visual explanations even when production time and resources are limited.",

        card1Title: "Short Educational Videos",
        card1Text:
            "AI-assisted video can be used to create short clips that explain a concept, introduce a technology, or summarize a process in a clear and visually engaging way.",

        card2Title: "Scene Enhancement",
        card2Text:
            "Existing video material can be improved through color correction, lighting adjustment, stabilization, captioning, and visual cleanup to make it more suitable for web presentation.",

        card3Title: "Editing and Production Support",
        card3Text:
            "AI tools can support editing by generating captions, suggesting cuts, creating visual transitions, producing background scenes, and preparing draft versions that can later be refined manually.",

        sampleTitle: "Video Sample",
        sampleText:
            "The video sample demonstrates how motion, visuals, narration, and synchronized text can work together to explain generative AI in a more engaging form than static text alone.",
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
        heroTitle: "Advantages, Limitations, and Challenges",
        heroText:
            "Generative AI provides valuable opportunities for multimedia production, but it also introduces technical, ethical, and social challenges. Understanding both sides is essential for using these tools responsibly.",

        prosTitle: "Advantages",
        prosText:
            "When used carefully, generative AI can improve productivity, support creativity, and help students and creators produce high-quality prototypes in less time.",

        pro1Title: "Faster Production",
        pro1Text:
            "It reduces the time required to prepare drafts, visual concepts, audio samples, and early video prototypes, allowing more time for review and improvement.",

        pro2Title: "Creative Exploration",
        pro2Text:
            "It allows creators to test multiple styles, ideas, and directions quickly before choosing the most suitable final approach.",

        pro3Title: "Accessible Production Tools",
        pro3Text:
            "It gives students and small teams access to tools that were previously limited to specialized studios, such as image generation, voice creation, and advanced editing support.",

        consTitle: "Limitations",
        consText:
            "Despite its usefulness, generative AI output is not automatically reliable or complete. Human review remains necessary to ensure accuracy, quality, and suitability.",

        con1Title: "Accuracy and Quality Issues",
        con1Text:
            "Generated content may include visual errors, incorrect details, unnatural audio, weak motion, or information that sounds correct but is inaccurate.",

        con2Title: "Intellectual Property Concerns",
        con2Text:
            "Questions may arise regarding the training data, ownership of generated outputs, similarity to existing works, and the legal use of generated media in public projects.",

        con3Title: "Overreliance on Automation",
        con3Text:
            "Depending too heavily on AI tools can weaken original thinking, design judgment, and technical skill if the user accepts results without analysis or editing.",

        ethicsTitle: "Ethical Use",
        ethicsText:
            "Responsible use requires transparency, source awareness, respect for rights, and careful review before publication. Generated media can be powerful, but it may also be misused for misinformation, fake identities, manipulated images, or misleading video content. For this reason, AI-generated outputs should be clearly reviewed and used within an ethical framework.",
    },

    galleryPage: {
        heroTitle: "Gallery of Multimedia Outputs",
        heroText:
            "The gallery presents a collection of visual, audio, and video examples that demonstrate how generative AI can support multimedia projects. Each item is categorized according to its production method, such as generated, assisted, or digitally enhanced.",

        imagesTitle: "Image Outputs",
        imagesText:
            "This section includes generated and enhanced visuals prepared for web presentation. The examples demonstrate how AI can support concept art, poster design, visual explanation, and image improvement.",

        audioTitle: "Audio Outputs",
        audioText:
            "This section presents audio examples such as narration, sound effects, or background sound elements that can strengthen the educational value of multimedia content.",

        videoTitle: "Video Outputs",
        videoText:
            "This section includes short visual examples that combine motion, captions, and media design to explain ideas more dynamically.",

        item1Title: "Futuristic AI Poster",
        item1Text:
            "A poster-style visual representing the relationship between artificial intelligence, digital media, and futuristic interface design.",

        item2Title: "Enhanced Web Image",
        item2Text:
            "An image prepared for online display through improvements in clarity, color balance, contrast, and overall visual quality.",

        item3Title: "Narration Track",
        item3Text:
            "A short voice-over sample designed to support an educational explanation and improve accessibility for visitors.",

        item4Title: "Digital Sound Effect",
        item4Text:
            "A compact audio element that can be used to support transitions, interface actions, or multimedia scenes.",

        item5Title: "Educational Video Clip",
        item5Text:
            "A short video concept that presents a technical idea using motion, visual composition, and explanatory text.",

        item6Title: "Enhanced Visual Scene",
        item6Text:
            "A video or image-based scene improved through editing, color adjustment, composition enhancement, or AI-assisted processing.",
    },

    projectPage: {
        heroTitle: "About the Project",
        heroText:
            "GenMedia AI is a university web project designed to introduce generative artificial intelligence through a static multimedia website. The project focuses on explaining the concept, showing practical applications, presenting media examples, and discussing the opportunities and risks related to AI-generated content.",

        goalsTitle: "Project Goals",
        goalsText:
            "The project aims to build a clear educational experience that helps visitors understand generative AI and its role in multimedia systems. It presents the topic through structured pages, bilingual content, dark and light display modes, responsive layouts, and optimized media elements prepared for web use.",

        toolsTitle: "Development and Production Tools",
        toolsText:
            "The website was built using modern front-end tools and organized into reusable components. The development process focused on structure, readability, visual consistency, responsive behavior, and efficient media presentation.",

        toolsCard1Title: "Next.js and React",
        toolsCard1Text:
            "Next.js and React were used to build the static website structure, manage page routing, create reusable interface components, and organize the project into maintainable sections.",

        toolsCard2Title: "Tailwind CSS",
        toolsCard2Text:
            "Tailwind CSS was used to design the layout, spacing, colors, cards, responsive grids, navigation elements, and dark/light visual styles across the website.",

        toolsCard3Title: "Generative AI Tools",
        toolsCard3Text:
            "AI tools were used as part of the creative production workflow for generating visual ideas, preparing media concepts, and supporting the creation of image, audio, and video examples.",

        aiContentTitle: "AI-Supported Media Production",
        aiContentText:
            "Several media elements in the project were prepared with the support of generative AI tools, then reviewed, selected, optimized, and integrated into the website. This workflow reflects a practical use of AI as an assistant in content production rather than a replacement for human organization, editing, and evaluation.",

        referencesTitle: "References and Learning Sources",
        referencesText:
            "The project content was prepared based on general academic and technical knowledge about artificial intelligence, generative models, multimedia systems, web design principles, and responsible digital media production.",
    },

    extra: {
        references: "References",
        source: "Source",
        note: "Note",
    },
};

export default en;