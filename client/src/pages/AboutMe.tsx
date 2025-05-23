import React from 'react';
import { motion } from 'framer-motion';
import { useMediaQuery } from 'react-responsive';

// Define color palette to match LandingPage.tsx
const colors = {
    cherry: '#DC143C',
    cherryDark: '#8B0000',
    offWhite: '#FAF9F6',
    offWhiteDark: '#E8E6E1',
    accent: '#FF4D6D',
};

// Achievements data
const achievements = [
    {
        title: "HackOut'24",
        description: "Our team 'Digital Dreamers' made it to the top 10 amongst 1200+ participants at HackOut'24, hosted by DA-IICT, Gandhinagar.",
    },
    {
        title: "DU-HACKS'23",
        description: "Certified by DU-HACKS'23 (Hackathon-2023)",
    },
    {
        title: "DU-HACKS'25",
        description: "Finished in TOP-15 in DU-HACKS'25 (Hackathon-2024)",
    },
];

const AboutMe: React.FC = () => {
    const isMobile = useMediaQuery({ maxWidth: 768 });

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className="relative z-10 min-h-screen flex items-center justify-center px-4 py-16 md:py-24 snap-start"
        >
            <div className="max-w-5xl w-full mx-auto">
                {/* Enhanced Heading with Gradient */}
                <h1 className="text-4xl md:text-5xl font-bold text-center mb-8 md:mb-12 bg-gradient-to-r from-[#FAF9F6] to-[#DC143C] text-transparent bg-clip-text">
                    About Me
                </h1>

                {/* Photo and Introduction - Improved Mobile Layout */}
                <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-12 mb-12 md:mb-16">
                    <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ duration: 0.5 }}
                        whileHover={{ scale: 1.05 }}
                        className="relative h-48 w-48 md:h-64 md:w-64 rounded-full overflow-hidden border-1 cursor-pointer"
                        style={{
                            borderColor: colors.cherry,
                            boxShadow: `0 0 20px ${colors.cherry}40`,
                        }}
                    >
                        <img
                            src="gotme.png"
                            alt="Danish Vahora"
                            className="w-full h-full object-cover"
                        />
                    </motion.div>
                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.2, duration: 0.5 }}
                        className="text-lg md:text-xl max-w-lg text-center md:text-left px-4 md:px-0"
                        style={{ color: colors.offWhiteDark }}
                    >
                        I am he, a craftsman of code, a Full Stack Developer of unyielding passion . <br /> My thirst for knowledge knows no bounds, and I roam the vast lands of technology like a maester seeking ancient truths. <br />

                        In the realm of logic and chaos, I find my strength. Be it the banners of Front-End or the deep dungeons of Back-End, I wield my tools with mastery.
<br />
                        With every challenge, I rise — forging solutions not only swift, but steadfast and true. <br />Mine is a mind that thrives on growth, stoked by the fires of creativity and honed in the crucible of problem-solving. <br />

                        I swear by the Old Gods and the New, my code shall endure, ever meeting the storms of change with elegance and might.💀⚔️                    </motion.p>
                </div>

                {/* Achievements Timeline - Mobile Optimized */}
                <div className="relative mb-12 md:mb-16 px-4 md:px-0">
                    <div
                        className="absolute top-0 bottom-0 left-4 md:left-1/2 w-0.5 transform md:-translate-x-1/2"
                        style={{ background: colors.cherry }}
                    />
                    {achievements.map((achievement, index) => (
                        <div
                            key={index}
                            className={`flex flex-col md:flex-row items-start md:items-center mb-8 ${isMobile ? 'ml-8' : index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                                }`}
                        >
                            <motion.div
                                initial={{ opacity: 0, x: isMobile ? -50 : (index % 2 === 0 ? -100 : 100) }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.5 }}
                                viewport={{ once: true }}
                                whileHover={{ y: -5, boxShadow: `0 10px 20px ${colors.cherry}20` }}
                                className="w-full md:w-5/12 p-4"
                            >
                                <div className="bg-white/10 p-4 md:p-6 rounded-lg shadow-lg backdrop-blur-sm">
                                    <h3 className="text-xl md:text-2xl font-semibold" style={{ color: colors.offWhite }}>
                                        {achievement.title}
                                    </h3>
                                    <p className="text-base md:text-lg mt-2" style={{ color: colors.offWhiteDark }}>
                                        {achievement.description}
                                    </p>
                                </div>
                            </motion.div>
                            {!isMobile && (
                                <>
                                    <div className="hidden md:flex w-2/12 justify-center">
                                        <div className="w-4 h-4 rounded-full" style={{ background: colors.cherry }} />
                                    </div>
                                    <div className="w-full md:w-5/12" />
                                </>
                            )}
                        </div>
                    ))}
                </div>

                {/* Education Section - Mobile Optimized */}
                <div className="mt-12 md:mt-16 px-4 md:px-0">
                    <h2 className="text-2xl md:text-3xl font-bold text-center mb-6 md:mb-8 bg-gradient-to-r from-[#FAF9F6] to-[#DC143C] text-transparent bg-clip-text">
                        Education
                    </h2>
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        viewport={{ once: true }}
                        className="bg-white/10 p-4 md:p-6 rounded-lg shadow-lg max-w-2xl mx-auto backdrop-blur-sm space-y-6 md:space-y-8"
                    >
                        {/* Education items with responsive spacing */}
                        {[
                            {
                                school: "Dharmsinh Desai University",
                                details: [
                                    "B.Tech Computer Engineering (2022-2026)",
                                    "Nadiad, India",
                                    "Current CPI: 8.31"
                                ]
                            },
                            {
                                school: "Knowledge High School",
                                details: [
                                    "H.S.C Board (2022)",
                                    "Anand, Gujarat",
                                    "Percentage: 84.76%"
                                ]
                            },
                            {
                                school: "Knowledge High School",
                                details: [
                                    "S.S.C Board (2020)",
                                    "Anand, Gujarat",
                                    "Percentage: 89.33%"
                                ]
                            }
                        ].map((edu, index) => (
                            <div
                                key={index}
                                className="border-l-4 pl-4"
                                style={{ borderColor: colors.cherry }}
                            >
                                <h3 className="text-lg md:text-xl font-semibold" style={{ color: colors.offWhite }}>
                                    {edu.school}
                                </h3>
                                <div className="text-base md:text-lg space-y-1" style={{ color: colors.offWhiteDark }}>
                                    {edu.details.map((detail, i) => (
                                        <p key={i}>{detail}</p>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </motion.div>
                </div>
            </div>
        </motion.div>
    );
};

export default AboutMe;