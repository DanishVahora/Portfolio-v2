import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt, FaTimes, FaChevronRight } from 'react-icons/fa';

// Define colors object to match your existing theme
const colors = {
    cherry: '#DC143C',
    cherryDark: '#8B0000',
    offWhite: '#FAF9F6',
    offWhiteDark: '#E8E6E1',
    accent: '#FF4D6D'
};

// Enhanced projects data with more detailed information
const projectsData = [
    {
        id: 1,
        title: "AI/ML-Based Cryptographic Algorithm Identification",
        shortDescription: "Intelligent system leveraging AI/ML to automatically identify cryptographic algorithms and enhance cybersecurity.",
        fullDescription: "Developed as part of DU Hacks 4.0 at DDU Nadiad in 2025, this project automates the identification of cryptographic algorithms from complex datasets. By leveraging advanced machine learning techniques, it analyzes data patterns to detect algorithm weaknesses and improve security. The system integrates a Python-based Random Forest model for predictions, a robust Spring Boot backend with JWT and Spring Security for authentication, and a fast, responsive React-based frontend. This seamless integration of technologies enables real-time analysis and rapid response to evolving cyber threats.",
        image: "/CryptML/CryptML.png",
        mockupImages: [
            "/CryptML/CryptML(1).png",
            "/CryptML/CryptML(2).png",
            "/CryptML/CryptML(3).png"
        ],
        tags: ["AI", "ML", "Cryptography", "Security", "Java", "Python"],
        technologies: [
            "React",
            "Vite",
            "Tailwind CSS",
            "Python",
            "Spring Boot",
            "JWT",
            "PostgreSQL",
            "Random Forest",
            "Docker"
        ],
        githubUrl: "https://github.com/razasoneji/CryptML",
        liveUrl: "https://crypt-ml.vercel.app/",
        color: "black",
        year: "2025",
        category: "Cybersecurity"
    },
    {
        id: 2,
        title: "LeafCare AI",
        shortDescription: "Enterprise plant disease detection system using deep learning and computer vision for agricultural optimization.",
        fullDescription: "An AI-powered solution addressing annual 40% crop loss through automated plant disease detection. Combines deep convolutional neural networks (CNN) with transfer learning for 98.2% validation accuracy. Features real-time monitoring via IoT integration, predictive analytics for disease patterns, and seamless integration with farm management systems. The system processes 150,000+ images across 38 plant species and 87 disease classes using a robust pipeline with image normalization/augmentation. Built with TensorFlow and optimized with NVIDIA A100 GPUs, it offers scalable cloud deployment with continuous model updates through user feedback loops. Supports precision agriculture, crop insurance analytics, and academic research with comprehensive datasets.",
        image: "/LeafCare/LeafCare.png",
        mockupImages: [
            "/LeafCare/LeafCare(1).png",
            "/LeafCare/LeafCare(2).png",
            "/LeafCare/LeafCare(3).png"
        ],
        tags: ["AI/ML", "Agriculture", "Computer Vision", "Deep Learning", "IoT", "TensorFlow"],
        technologies: [
            "TensorFlow",
            "CNN Architecture",
            "Python",
            "React",
            "Node.js",
            "Docker",
            "AWS EC2",
            "MongoDB",
            "PostgreSQL",
            "NVIDIA CUDA",
            "Image Augmentation",
            "JWT Authentication"
        ],
        githubUrl: "https://github.com/DanishVahora/leafcare",
        liveUrl: "https://leafcare-production.up.railway.app/",
        color: "#2E8B57",
        year: "2023",
        category: "Machine Learning"
    },
    {
        id: 3,
        title: "Pawn Wars",
        shortDescription: "Modern chess platform featuring real-time multiplayer battles and AI integration with Stockfish engine.",
        fullDescription: "A dynamic chess application combining traditional gameplay with modern tech stack. Features real-time multiplayer matches with Socket.io synchronization, AI mode powered by Stockfish engine (difficulty levels from beginner to grandmaster), and interactive elements like move history/analysis and in-game chat. Includes dual control schemes (click/drag), responsive design for all devices, and secure room-based matchmaking. Built with React TypeScript frontend, Node.js/Express backend, and chess.js for game logic. Offers evaluation bar, undo functionality, and deployable chess engine insights for strategic improvement.",
        image: "/PawnWars/PawnWars.png",
        mockupImages: [
            "/PawnWars/PawnWars(1).png",
            "/PawnWars/PawnWars(2).png",
            "/PawnWars/PawnWars(3).png"
        ],
        tags: ["Chess", "Multiplayer", "AI", "Real-time", "TypeScript", "WebSocket"],
        technologies: [
            "React",
            "TypeScript",
            "Vite",
            "Node.js",
            "Express",
            "Socket.io",
            "chess.js",
            "Stockfish",
            "Tailwind CSS",
            "WebRTC",
            "JWT",
            "Vercel"],
        githubUrl: "https://github.com/DanishVahora/PawnWars.git",
        liveUrl: "https://pawn-wars.vercel.app/",
        color: "black",
        year: "2024",
        category: "Web Application"
    },
    {
        id: 4,
        title: "केB Karo",
        shortDescription: "Full-stack transportation solution with real-time tracking, built on ASP.NET Core MVC and SQL Server.",
        fullDescription: "A comprehensive cab management platform enabling users to book rides and drivers to accept/reject requests via interactive interfaces. Features dual authentication systems for users/drivers, real-time location tracking using Leaflet.js API, and booking status management (pending/completed/canceled). Built with ASP.NET Core MVC backend, Entity Framework Core ORM, and Razor Pages/Bootstrap frontend. Implements complex booking workflows with fare calculation based on distance, historical data tracking, and rejection logging. Database architecture includes SQL Server tables for users, drivers, cabs, bookings, and rejected bookings. Supports responsive design across devices with potential for future expansion including payment integration and driver rating systems.",
        image: "/CabKaro/image.png",
        mockupImages: [
            "/CabKaro/image(1).png",
            "/CabKaro/image(2).png",
            "/CabKaro/image(3).png"
        ],
        tags: ["ASP.NET", "MVC", "SQL", "Real-time", "Bootstrap", "Entity Framework"],
        technologies: [
            "ASP.NET Core",
            "Entity Framework Core",
            "SQL Server",
            "Razor Pages",
            "Leaflet.js",
            "Bootstrap",
            "JavaScript",
            "HTML5",
            "CSS3",
            "JWT",
            "REST API",
        ],
        githubUrl: "https://github.com/DanishVahora/CabBookingSystem.git",
        liveUrl: "https://CabBooking/",
        color: "black",
        year: "2024",
        category: "Web Application"
    },
    {
        id: 5,
        title: "EmotionAI",
        shortDescription: "Real-time facial emotion detection system using deep learning and computer vision.",
        fullDescription: "A CNN-based emotion recognition solution that analyzes facial expressions through webcam feeds or uploaded images. Features 7 emotion categories (Happy, Sad, Angry, Disgust, Fear, Surprise, Neutral) with live confidence scores and historical trend tracking. Built with a TensorFlow/Keras model trained on FER2013 dataset (63% validation accuracy), integrated with OpenCV for real-time face detection. The system processes 48x48 grayscale images through 4 convolutional layers with max pooling and dropout regularization. Includes a React frontend with Recharts visualization and Flask API backend. Supports both live camera analysis and image uploads with emotion history analytics.",
        image: "/EmotionAI/EmotionAI.png",
        mockupImages: [
            "EmotionAI/EmotionAI(1).png",
            "EmotionAI/EmotionAI(2).png",
            "EmotionAI/EmotionAI(3).png"
        ],
        tags: ["Machine Learning", "Computer Vision", "Real-time", "React", "Python", "CNN"],
        technologies: ["React",
            "TailwindCSS",
            "Recharts",
            "Python",
            "TensorFlow",
            "Keras",
            "OpenCV",
            "Flask",
            "FER2013 Dataset",
            "Convolutional Neural Networks",
            "Axios",
            "Uvicorn",
            "Face Detection",
            "Emotion Recognition"],
        githubUrl: "https://github.com/DanishVahora/CNN_Emotion_Recognition.git",
        liveUrl: "https://emotionai-demo.vercel.app/",
        color: "blue",
        year: "2023",
        category: "Machine Learning"
    },
    {
        id: 6,
        title: "FitnessTracking Application",
        shortDescription: "Mobile fitness tracking app with Flutter frontend and Node.js backend for activity monitoring and personalized workouts.",
        fullDescription: "A comprehensive mobile fitness tracking application designed to help users monitor physical activities, track workouts, and achieve fitness goals. Features include JWT-based user authentication, workout logging, calorie tracking, progress analytics with charts, and personalized workout generation. Built with Flutter and Dart for a cross-platform mobile experience, coupled with a Node.js/Express backend for API management. Includes secure authentication middleware and supports both MongoDB/MySQL databases. The responsive design ensures seamless experience across mobile devices.",
        image: "/FtnessTracker/FtnessTracker.jpg",
        mockupImages: [
            "/FtnessTracker/FtnessTracker(1).png",
            "/FtnessTracker/FtnessTracker(2).png",
            "/FtnessTracker/FtnessTracker(3).png"
        ],
        tags: ["Dart", "Flutter", "MongoDB", "Node.js", "Fitness", "Mobile App"],
        technologies: ["Dart", "Flutter", "MongoDB", "Node.js", "Express.js", "JWT", "Bcrypt", "REST API", "Charting", "Cross-Platform"],
        githubUrl: "https://github.com/DanishVahora/fitness_app_frontend-main.git",
        liveUrl: "https://health-tracker.demo",
        color: "black",
        year: "2024",
        category: "Mobile Application"
    },
    
];

// Tag component for project technologies
const Tag = ({ name }: { name: string }) => (
    <span className="px-2 sm:px-3 py-0.5 sm:py-1 text-xs sm:text-sm font-medium rounded-full bg-white/10 text-white/90">
        {name}
    </span>
);

// Button component for consistent styling
const Button = ({
    children,
    onClick,
    variant = "primary",
    className = "",
}: {
    children: React.ReactNode,
    onClick?: () => void,
    variant?: "primary" | "secondary" | "outline" | "icon",
    className?: string,
    style?: React.CSSProperties
}) => {
    let baseStyles = "flex items-center gap-2 font-medium transition-all duration-300 rounded-full";
    let variantStyles = "";

    switch (variant) {
        case "primary":
            variantStyles = "px-5 py-2.5 bg-gradient-to-r from-cherry to-cherryDark text-white hover:shadow-lg hover:shadow-cherry/20";
            break;
        case "secondary":
            variantStyles = "px-5 py-2.5 bg-white/10 hover:bg-white/20 text-white";
            break;
        case "outline":
            variantStyles = "px-5 py-2.5 border-2 border-cherry text-white hover:bg-cherry/20";
            break;
        case "icon":
            variantStyles = "p-2 bg-black/30 hover:bg-black/50 text-white backdrop-blur-md rounded-full";
            break;
    }

    return (
        <motion.button
            className={`${baseStyles} ${variantStyles} ${className}`}
            onClick={onClick}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
        >
            {children}
        </motion.button>
    );
};

// Project card component
const ProjectCard = ({
    project,
    index,
    onOpenModal
}: {
    project: typeof projectsData[0],
    index: number,
    onOpenModal: (projectId: number) => void
}) => {
    const [isDescExpanded] = useState(false);

    return (
        <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 * index }}
            viewport={{ once: true, amount: 0.3 }}
            className="group bg-white/10 backdrop-blur-sm rounded-xl overflow-hidden border border-white/10 hover:border-white/20 shadow-xl transition-all duration-300"
        >
            {/* Image container */}
            <div className="relative aspect-[16/9] overflow-hidden">
                <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover object-center transform group-hover:scale-110 transition-transform duration-700"
                />
                
                {/* Category and year tags - More mobile friendly */}
                <div className="absolute top-2 sm:top-4 left-2 sm:left-4 z-20">
                    <span className="px-2 sm:px-3 py-1 text-xs sm:text-sm rounded-full backdrop-blur-md bg-black/30 text-white/90 border border-white/10">
                        {project.category}
                    </span>
                </div>
                <div className="absolute top-2 sm:top-4 right-2 sm:right-4 z-20">
                    <span className="px-2 sm:px-3 py-1 text-xs sm:text-sm rounded-full backdrop-blur-md bg-black/30 text-white/90 border border-white/10">
                        {project.year}
                    </span>
                </div>
            </div>

            {/* Content section */}
            <div className="p-4 sm:p-6">
                <h3 className="text-xl sm:text-2xl font-bold mb-2 text-white group-hover:text-cherry transition-colors duration-300">
                    {project.title}
                </h3>

                {/* Description with mobile-friendly text size */}
                <motion.div
                    className="text-sm sm:text-base text-white/80 mb-4 overflow-hidden relative"
                    animate={{ height: isDescExpanded ? "auto" : "4.5rem" }}
                >
                    <p className={`leading-relaxed ${!isDescExpanded && "line-clamp-3"}`}>
                        {isDescExpanded ? project.fullDescription : project.shortDescription}
                    </p>
                </motion.div>

                {/* Tags with responsive layout */}
                <div className="flex flex-wrap gap-1.5 sm:gap-2 mb-4">
                    {project.tags.slice(0, 4).map((tag, i) => (
                        <Tag key={i} name={tag} />
                    ))}
                    {project.tags.length > 4 && (
                        <span className="text-xs sm:text-sm text-white/60">+{project.tags.length - 4} more</span>
                    )}
                </div>

                {/* Action buttons with responsive layout */}
                <div className="flex flex-wrap gap-2 sm:gap-3 mt-4">
                    <Button
                        variant="secondary"
                        onClick={() => window.open(project.githubUrl, "_blank")}
                        className="text-sm sm:text-base"
                    >
                        <FaGithub size={14} />
                        <span className="hidden sm:inline">Code</span>
                    </Button>

                    <Button
                        variant="primary"
                        onClick={() => window.open(project.liveUrl, "_blank")}
                        className="text-sm sm:text-base"
                    >
                        <FaExternalLinkAlt size={12} />
                        <span className="hidden sm:inline">Live Demo</span>
                    </Button>

                    <Button
                        variant="outline"
                        onClick={() => onOpenModal(project.id)}
                        className="ml-auto text-sm sm:text-base"
                    >
                        <span>Details</span>
                        <FaChevronRight size={10} />
                    </Button>
                </div>
            </div>
        </motion.div>
    );
};

// Project detail modal component
const ProjectModal = ({
    project,
    isOpen,
    onClose
}: {
    project: typeof projectsData[0] | null,
    isOpen: boolean,
    onClose: () => void
}) => {
    // Early return if no project
    if (!project) return null;

    // Current image state for the gallery
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    // Scroll to top when modal opens
    React.useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'auto';
        }

        return () => {
            document.body.style.overflow = 'auto';
        };
    }, [isOpen]);

    return (
        <AnimatePresence>
            {isOpen && (
                <motion.div
                    className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm overflow-y-auto"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onClick={onClose}
                >
                    <motion.div
                        className="relative w-full max-w-4xl max-h-[90vh] bg-gradient-to-b from-gray-900 to-black rounded-2xl overflow-y-auto overflow-x-hidden"
                        style={{ boxShadow: `0 25px 50px -12px ${project.color}40` }}
                        initial={{ opacity: 0, y: 50, scale: 0.9 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 50, scale: 0.9 }}
                        transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                        onClick={(e) => e.stopPropagation()}
                    >
                        {/* Close button */}
                        <Button
                            variant="icon"
                            onClick={onClose}
                            className="absolute top-4 right-4 z-20"
                        >
                            <FaTimes size={18} />
                        </Button>

                        {/* Project header with main image */}
                        <div className="relative aspect-video w-full overflow-hidden bg-gray-800">
                            <img
                                src={project.mockupImages[currentImageIndex] || project.image}
                                alt={project.title}
                                className="w-full h-full object-cover"
                                onError={(e) => {
                                    const target = e.target as HTMLImageElement;
                                    target.src = "/api/placeholder/1200/675";
                                }}
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent"></div>

                            {/* Image navigation if multiple images */}
                            {project.mockupImages && project.mockupImages.length > 1 && (
                                <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2">
                                    {project.mockupImages.map((_, idx) => (
                                        <button
                                            key={idx}
                                            onClick={() => setCurrentImageIndex(idx)}
                                            className={`w-3 h-3 rounded-full transition-all ${currentImageIndex === idx
                                                ? 'bg-white scale-110'
                                                : 'bg-white/30 hover:bg-white/50'
                                                }`}
                                            aria-label={`View image ${idx + 1}`}
                                        />
                                    ))}
                                </div>
                            )}
                        </div>

                        {/* Content */}
                        <div className="p-8">
                            <h2 className="text-4xl font-bold mb-2" style={{ color: colors.offWhite }}>
                                {project.title}
                            </h2>

                            <div className="flex flex-wrap gap-2 mb-6">
                                <div className="px-3 py-1 rounded-full text-sm font-medium bg-cherry/80 text-white">
                                    {project.category}
                                </div>
                                <div className="px-3 py-1 rounded-full text-sm font-medium bg-white/10 text-white/90">
                                    {project.year}
                                </div>
                            </div>

                            {/* Full description with proper formatting */}
                            <div className="mb-8">
                                <h3 className="text-xl font-semibold mb-4" style={{ color: colors.offWhite }}>Overview</h3>
                                <div className="text-white/80 space-y-4">
                                    {project.fullDescription.split('\n\n').map((paragraph, idx) => (
                                        <p key={idx} className="leading-relaxed">{paragraph}</p>
                                    ))}
                                </div>
                            </div>

                            {/* Technologies used */}
                            <div className="mb-8">
                                <h3 className="text-xl font-semibold mb-4" style={{ color: colors.offWhite }}>Technologies Used</h3>
                                <div className="flex flex-wrap gap-2">
                                    {project.technologies.map((tech, idx) => (
                                        <Tag key={idx} name={tech} />
                                    ))}
                                </div>
                            </div>

                            {/* Actions */}
                            <div className="flex flex-wrap gap-4 mt-8">
                                <Button
                                    variant="secondary"
                                    onClick={() => window.open(project.githubUrl, "_blank")}
                                >
                                    <FaGithub size={18} />
                                    <span>View Source Code</span>
                                </Button>

                                <Button
                                    variant="primary"
                                    onClick={() => window.open(project.liveUrl, "_blank")}
                                    className="bg-gradient-to-r"
                                    style={{ backgroundImage: `linear-gradient(135deg, ${project.color}, #8B0000)` }}
                                >
                                    <FaExternalLinkAlt size={16} />
                                    <span>View Live Demo</span>
                                </Button>
                            </div>
                        </div>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};


// Main Projects component
const Projects: React.FC = () => {
    const [filter, setFilter] = useState("All");
    const [selectedProject, setSelectedProject] = useState<typeof projectsData[0] | null>(null);
    const [isModalOpen, setIsModalOpen] = useState(false);

    // Get all categories
    const allCategories = ["All", ...Array.from(new Set(projectsData.map(project => project.category)))];

    // Filter projects based on selected category
    const filteredProjects = filter === "All"
        ? projectsData
        : projectsData.filter(project => project.category === filter);

    // Open modal with selected project
    const openProjectModal = (projectId: number) => {
        const project = projectsData.find(p => p.id === projectId) || null;
        setSelectedProject(project);
        setIsModalOpen(true);
    };

    return (
        <div className="relative z-10 min-h-screen px-4 py-12 sm:py-20">
            <div className="max-w-7xl mx-auto">
                {/* Responsive header */}
                <motion.div className="text-center mb-8 sm:mb-16">
                    <h2 className="text-4xl sm:text-6xl font-bold mb-4 sm:mb-6 bg-gradient-to-r from-[#FAF9F6] to-[#DC143C] text-transparent bg-clip-text">
                        Projects
                    </h2>
                    <br />
                    <p className="text-base sm:text-xl max-w-2xl mx-auto px-4" style={{ color: colors.offWhiteDark }}>
                        A showcase of my recent projects spanning full-stack development,
                        machine learning, and interactive experiences.
                    </p>
                </motion.div>

                {/* Responsive category filter */}
                <div className="overflow-x-auto pb-4 mb-8 -mx-4 px-4">
                    <div className="flex flex-nowrap sm:flex-wrap justify-start sm:justify-center gap-2 sm:gap-3">
                        {allCategories.map((category) => (
                            <motion.button
                                key={category}
                                onClick={() => setFilter(category)}
                                className={`whitespace-nowrap px-3 sm:px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                                    filter === category
                                        ? 'bg-gradient-to-r from-cherry to-cherryDark text-white'
                                        : 'bg-white/5 text-white/70 hover:bg-white/10'
                                }`}
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                {category}
                            </motion.button>
                        ))}
                    </div>
                </div>

                {/* Responsive grid layout */}
                <motion.div
                    className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-8"
                    layout
                >
                    {filteredProjects.map((project, index) => (
                        <ProjectCard
                            key={project.id}
                            project={project}
                            index={index}
                            onOpenModal={openProjectModal}
                        />
                    ))}
                </motion.div>

                {/* Show message if no projects match filter */}
                {filteredProjects.length === 0 && (
                    <motion.div
                        className="text-center py-20"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.5 }}
                    >
                        <p className="text-xl text-white/70">No projects found in this category.</p>
                        <Button
                            variant="outline"
                            onClick={() => setFilter('All')}
                            className="mt-4 mx-auto"
                        >
                            Show All Projects
                        </Button>
                    </motion.div>
                )}

                {/* View more projects button */}
                {filteredProjects.length > 0 && (
                    <motion.div
                        className="flex justify-center mt-16"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.4 }}
                        viewport={{ once: true }}
                    >
                        <motion.a
                            href="https://github.com/DanishVahora"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="px-8 py-4 rounded-full text-lg font-medium text-white border-2 border-cherry hover:bg-cherry/20 transition-all duration-300 flex items-center gap-3"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            <FaGithub size={20} />
                            <span>View More Projects</span>
                        </motion.a>
                    </motion.div>
                )}

                {/* Project detail modal */}
                <ProjectModal
                    project={selectedProject}
                    isOpen={isModalOpen}
                    onClose={() => setIsModalOpen(false)}
                />
            </div>
        </div>
    );
};

export default Projects;