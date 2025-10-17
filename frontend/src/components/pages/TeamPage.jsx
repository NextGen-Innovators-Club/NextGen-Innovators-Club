import React, { useMemo } from "react";
import { motion, useInView } from "framer-motion";
import Navbar from "../Navbar";
import Footer from "../Footer";


// ===== Placeholder Image Imports for Every Team Member =====
// --- Leadership & Administration ---
import affanPathanImage from "../../assets/ProfileImages/AffanImage.jpg";
import pradnyaJadhavImage from "../../assets/ProfileImages/PradnyaImage.jpg";
import amrishaVashishthaImage from "../../assets/ProfileImages/AmrishaImage.jpg";
import niranjanMuleyImage from "../../assets/ProfileImages/NiranjanImage.jpg";
import vaishnaviRaoImage from "../../assets/ProfileImages/VaishnaviImage.jpg";
import abhishekKanadeImage from "../../assets/ProfileImages/AbhishekKImage.jpg";
import neeradaDathanImage from "../../assets/ProfileImages/NeeradaDathanImage.jpg";


// --- Technical Team ---
import ashrafPathanImage from "../../assets/ProfileImages/AshrafImage.jpg";
import ayushSinghImage from "../../assets/ProfileImages/AyushImage.jpg";
import anaghaChaudhariImage from "../../assets/ProfileImages/AnaghaImage.jpg";
import aryaPatangeImage from "../../assets/ProfileImages/AryaImage.jpg";
import varunSahuImage from "../../assets/ProfileImages/VarunImage.jpg";


// --- Event Coordinators ---
import divyanshGargundeImage from "../../assets/ProfileImages/DivyanshGargudeImage.jpg";
import tanishkaJagtapImage from "../../assets/ProfileImages/TanishqaImage.jpg";
import zikraJahagirdarImage from "../../assets/ProfileImages/ZikraImage.jpg";
import vishwamGorpadeImage from "../../assets/ProfileImages/VishwamImage.jpg";


// --- Managerial Team ---
import gauravVyasImage from "../../assets/ProfileImages/GauravVyasImage.jpg";
import swaraliKandImage from "../../assets/ProfileImages/SwaraliImage.jpg";
import neelakshiKantImage from "../../assets/ProfileImages/NeelakshiImage.jpg";


// --- Media & Publicity Team ---
import abhishekPattirImage from "../../assets/ProfileImages/AbhishekPImage.jpg";
import muditGuptaImage from "../../assets/ProfileImages/MuditImage.jpg";
import rushikeshPawarImage from "../../assets/ProfileImages/RushikeshImage.jpg";
import snehalJaybhayImage from "../../assets/ProfileImages/SnehalImage.jpg";
import manasiGopaleImage from "../../assets/ProfileImages/ManasiImage.jpg";


// --- Design Team ---
import sayaliKurheImage from "../../assets/ProfileImages/SayaliImage.jpg";
import pratikshaGhonsikarImage from "../../assets/ProfileImages/PratikshaImage.jpg";


// --- Documentation Team ---
import srikaraJoshiImage from "../../assets/ProfileImages/SrikaraImage.jpg";
import yogitaImage from "../../assets/ProfileImages/YogitaImage.jpg";


// --- Volunteers ---
import tejasShindeImage from "../../assets/ProfileImages/TejasImage.jpg";
import krishnaSinghImage from "../../assets/ProfileImages/KrishnaImage.jpg";
import prathameshJadhavImage from "../../assets/ProfileImages/AshrafImage.jpg";
import munazzaDeshmukhImage from "../../assets/ProfileImages/MunazzaImage.jpg";
import sakshiBodkeImage from "../../assets/ProfileImages/SakshiImage.jpg";
import gargiSheteImage from "../../assets/ProfileImages/gargiSheteImage.jpg";
import janhaviImage from "../../assets/ProfileImages/JanhaviImage.jpg";



const TRANSITION_CONFIG = {
  headerFadeIn: 1.2,
  titleSlide: 1.0,
  sectionFadeIn: 1.0,
  leaderCardAppear: 0.9,
  verticalLine: 0.8,
  horizontalLine: 0.8,
  memberCardStagger: 0.15,
  memberCardAppear: 0.7,
  cardHover: 0.4,
  avatarHover: 0.5,
};


const AnimatedStars = () => {
  const stars = useMemo(() => {
    return Array.from({ length: 70 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 4 + 1.5,
      duration: Math.random() * 2 + 1.5,
      delay: Math.random() * 1.5,
    }));
  }, []);


  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {stars.map((star) => (
        <motion.div
          key={star.id}
          className="absolute rounded-full bg-blue-400/60 dark:bg-blue-300/80"
          style={{
            left: `${star.x}%`,
            top: `${star.y}%`,
            width: star.size,
            height: star.size,
          }}
          animate={{
            opacity: [0.3, 1, 0.3],
            scale: [1, 1.8, 1],
          }}
          transition={{
            duration: star.duration,
            delay: star.delay,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
};


const FloatingParticles = () => {
  const particles = useMemo(() => {
    return Array.from({ length: 20 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 20 + 15,
      duration: Math.random() * 9 + 5,
      delay: Math.random() * 2,
    }));
  }, []);


  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          className="absolute rounded-full bg-gradient-to-br from-purple-400/30 to-pink-400/30 dark:from-purple-400/40 dark:to-pink-400/40 blur-sm"
          style={{
            left: `${particle.x}%`,
            top: `${particle.y}%`,
            width: particle.size,
            height: particle.size,
          }}
          animate={{
            y: [0, -40, 0],
            x: [0, 20, 0],
            opacity: [0.4, 0.7, 0.4],
          }}
          transition={{
            duration: particle.duration,
            delay: particle.delay,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
};


const TeamPage = () => {
  const headerRef = React.useRef(null);
  const headerInView = useInView(headerRef, { once: true, margin: "-10%" });


  const teams = [
    {
      name: "Leadership & Administration",
      color: "from-blue-600 to-indigo-600",
      leader: { name: "Affan Pathan", role: "President", imageUrl: affanPathanImage },
      members: [
        { name: "Pradnya Jadhav", role: "Vice President", imageUrl: pradnyaJadhavImage },
        { name: "Amrisha Vashishtha", role: "Vice President", imageUrl: amrishaVashishthaImage },
        { name: "Niranjan Muley", role: "Secretary", imageUrl: niranjanMuleyImage },
        { name: "Vaishnavi Rao", role: "Treasurer", imageUrl: vaishnaviRaoImage },
        { name: "Abhishek Kanade", role: "Treasurer", imageUrl: abhishekKanadeImage },
        { name: "Neerada Dathan", role: "Treasurer", imageUrl: neeradaDathanImage },
      ],
    },
    {
      name: "Technical Team",
      color: "from-purple-600 to-violet-600",
      leader: {
        name: "Ashraf Pathan",
        role: "Technical Head",
        imageUrl: ashrafPathanImage,
      },
      members: [
        { name: "Ayush Singh", role: "Technical Team", imageUrl: ayushSinghImage },
        { name: "Anagha Chaudhari", role: "Technical Team", imageUrl: anaghaChaudhariImage },
        { name: "Arya Patange", role: "Technical Team", imageUrl: aryaPatangeImage },
        { name: "Varun Sahu", role: "Technical Team", imageUrl: varunSahuImage },
      ],
    },
    {
      name: "Event Coordinators",
      color: "from-emerald-600 to-teal-600",
      leader: { name: "Divyansh Gargunde", role: "Event Coordinator Lead", imageUrl: divyanshGargundeImage },
      members: [
        { name: "Tanishka Jagtap", role: "Event Coordinator", imageUrl: tanishkaJagtapImage },
        { name: "Zikra Jahagirdar", role: "Event Coordinator", imageUrl: zikraJahagirdarImage },
        { name: "Vishwam Gorpade", role: "Event Coordinator", imageUrl: vishwamGorpadeImage },
      ],
    },
    {
      name: "Managerial Team",
      color: "from-orange-600 to-red-600",
      leader: { name: "Gaurav Vyas", role: "Managerial Team Lead", imageUrl: gauravVyasImage },
      members: [
        { name: "Swarali Kand", role: "Managerial Team", imageUrl: swaraliKandImage },
        { name: "Neelakshi Kutwal", role: "Managerial Team", imageUrl: neelakshiKantImage },
      ],
    },
    {
      name: "Media & Publicity Team",
      color: "from-pink-600 to-rose-600",
      leader: { name: "Abhishek Pattir", role: "Media & Publicity Head", imageUrl: abhishekPattirImage },
      members: [
        { name: "Mudit Gupta", role: "Media & Publicity Team", imageUrl: muditGuptaImage },
        { name: "Rushikesh Uttawar", role: "Media & Publicity Team", imageUrl: rushikeshPawarImage },
        { name: "Snehal Jaybhay", role: "Media & Publicity Team", imageUrl: snehalJaybhayImage },
        { name: "Manasi Gopale", role: "Media & Publicity Team", imageUrl: manasiGopaleImage },
      ],
    },
    {
      name: "Design Team",
      color: "from-cyan-600 to-blue-600",
      leader: { name: "Sayali Kurhe", role: "Design Team Lead", imageUrl: sayaliKurheImage },
      members: [{ name: "Pratiksha Ghonsikar", role: "Design Team", imageUrl: pratikshaGhonsikarImage }],
    },
    {
      name: "Documentation Team",
      color: "from-indigo-600 to-purple-600",
      leader: { name: "Srikara Joshi", role: "Documentation Lead", imageUrl: srikaraJoshiImage },
      members: [{ name: "Yogita", role: "Documentation", imageUrl: yogitaImage }],
    },
    {
      name: "Volunteers",
      color: "from-teal-600 to-green-600",
      leader: { name: "Tejas Shinde", role: "Volunteer Coordinator", imageUrl: tejasShindeImage },
      members: [
        { name: "Krishna Singh", role: "Volunteer", imageUrl: krishnaSinghImage },
        { name: "Priyanshu Ravat", role: "Volunteer", imageUrl: PriyanshuImage },
        { name: "Munazza Deshmukh", role: "Volunteer", imageUrl: munazzaDeshmukhImage },
        { name: "Sakshi Bodke", role: "Volunteer", imageUrl: sakshiBodkeImage },
        { name: "Gargi Shete", role: "Volunteer", imageUrl: gargiSheteImage },
        { name: "Janhavi", role: "Volunteer", imageUrl: janhaviImage },
      ],
    },
  ];


  return (
    <>
      <Navbar />
      <div className="min-h-screen relative overflow-hidden
        bg-gradient-to-br from-white via-blue-50/30 to-indigo-50/40
        dark:bg-gradient-to-br dark:from-gray-950 dark:via-blue-950/30 dark:to-indigo-950/20
        transition-colors duration-700">
        
        <AnimatedStars />
        <FloatingParticles />


        {/* Decorative Gradient Orbs */}
        <div className="absolute inset-0 pointer-events-none">
          <motion.div
            animate={{ 
              scale: [1, 1.08, 1], 
              opacity: [0.12, 0.18, 0.12],
              x: [0, 30, 0],
              y: [0, -20, 0]
            }}
            transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-20 left-20 w-96 h-96 bg-gradient-to-br from-blue-400/30 to-indigo-400/30 dark:from-blue-500/25 dark:to-indigo-500/25 rounded-full blur-3xl"
          />
          <motion.div
            animate={{ 
              scale: [1.08, 1, 1.08], 
              opacity: [0.10, 0.16, 0.10],
              x: [0, -40, 0],
              y: [0, 30, 0]
            }}
            transition={{ duration: 25, repeat: Infinity, ease: "easeInOut" }}
            className="absolute bottom-20 right-20 w-[32rem] h-[32rem] bg-gradient-to-tl from-purple-400/30 to-pink-400/30 dark:from-purple-500/25 dark:to-pink-500/25 rounded-full blur-3xl"
          />
          <motion.div
            animate={{ 
              scale: [1, 1.05, 1], 
              opacity: [0.08, 0.14, 0.08],
              rotate: [0, 180, 360]
            }}
            transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[40rem] h-[40rem] bg-gradient-to-r from-cyan-400/20 to-blue-400/20 dark:from-cyan-500/20 dark:to-blue-500/20 rounded-full blur-3xl"
          />
        </div>


        {/* Header Section */}
        <motion.div
          ref={headerRef}
          initial={{ opacity: 0 }}
          animate={headerInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: TRANSITION_CONFIG.headerFadeIn }}
          className="relative z-10 pt-28 pb-16 px-6"
        >
          <div className="max-w-5xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={headerInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="inline-block mb-6"
            >
              <span className="px-5 py-2.5 bg-white/80 dark:bg-blue-900/40 text-blue-700 dark:text-blue-300 rounded-full text-sm font-semibold border border-blue-200/60 dark:border-blue-700/50 backdrop-blur-xl shadow-lg">
                Meet Our Team
              </span>
            </motion.div>


            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
              <motion.span
                initial={{ opacity: 0, x: -50 }}
                animate={headerInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
                transition={{ delay: 0.4, duration: TRANSITION_CONFIG.titleSlide, type: "spring", stiffness: 60 }}
                className="inline-block text-gray-900 dark:text-white mr-4"
              >
                The People Behind
              </motion.span>
              <motion.span
                initial={{ opacity: 0, x: 50 }}
                animate={headerInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
                transition={{ delay: 0.6, duration: TRANSITION_CONFIG.titleSlide, type: "spring", stiffness: 60 }}
                className="inline-block bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent"
              >
                Innovation
              </motion.span>
            </h1>


            <motion.div
              initial={{ width: 0, opacity: 0 }}
              animate={headerInView ? { width: 140, opacity: 1 } : { width: 0, opacity: 0 }}
              transition={{ duration: 1.2, delay: 0.9 }}
              className="h-1.5 bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 mx-auto rounded-full mb-8 shadow-lg shadow-blue-500/30"
            />


            <motion.p
              initial={{ opacity: 0, y: 25 }}
              animate={headerInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 25 }}
              transition={{ delay: 1.1, duration: 0.9 }}
              className="text-xl md:text-2xl text-gray-700 dark:text-gray-300 max-w-3xl mx-auto font-light leading-relaxed"
            >
              Dedicated individuals working together to drive excellence and innovation
            </motion.p>
          </div>
        </motion.div>


        {/* Teams Section */}
        <div className="relative z-10 max-w-7xl mx-auto px-6 pb-24">
          {teams.map((team, teamIndex) => (
            <TeamSection key={teamIndex} team={team} teamIndex={teamIndex} />
          ))}
        </div>
      </div>


      <Footer />
    </>
  );
};


// Team Section with FIXED Grid Layout
const TeamSection = ({ team, teamIndex }) => {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-15%" });


  const getGridClass = (memberCount) => {
    switch(memberCount) {
      case 1:
        return "grid-cols-1 max-w-sm";
      case 2:
        return "grid-cols-1 md:grid-cols-2 max-w-2xl";
      case 3:
        return "grid-cols-1 md:grid-cols-3 max-w-4xl";
      case 4:
        return "grid-cols-1 md:grid-cols-2 lg:grid-cols-4";
      case 5:
      case 6:
        return "grid-cols-1 md:grid-cols-2 lg:grid-cols-3";
      default:
        return "grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4";
    }
  };


  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 80 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 80 }}
      transition={{ 
        duration: TRANSITION_CONFIG.sectionFadeIn, 
        delay: teamIndex * 0.2,
        type: "spring",
        stiffness: 50
      }}
      className="mb-32"
    >
      <div className="text-center mb-16">
        <motion.h2 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-4"
        >
          {team.name}
        </motion.h2>
        <motion.div
          initial={{ scaleX: 0, opacity: 0 }}
          animate={isInView ? { scaleX: 1, opacity: 1 } : { scaleX: 0, opacity: 0 }}
          transition={{ delay: 0.4, duration: 0.9 }}
          className={`h-1.5 w-32 bg-gradient-to-r ${team.color} mx-auto rounded-full shadow-lg`}
        />
      </div>


      <div className="relative flex flex-col items-center">
        <LeaderCard leader={team.leader} color={team.color} isInView={isInView} />


        {team.members.length > 0 && (
          <div className="w-full mt-0">
            <motion.div
              initial={{ scaleY: 0, opacity: 0 }}
              animate={isInView ? { scaleY: 1, opacity: 1 } : { scaleY: 0, opacity: 0 }}
              transition={{ delay: 0.8, duration: TRANSITION_CONFIG.verticalLine, ease: "easeOut" }}
              className="w-0.5 h-16 mx-auto origin-top"
              style={{ background: `linear-gradient(to bottom, ${getGradientColors(team.color)})` }}
            />


            <div className="relative h-0.5 max-w-6xl mx-auto">
              <motion.div
                initial={{ scaleX: 0, opacity: 0 }}
                animate={isInView ? { scaleX: 1, opacity: 1 } : { scaleX: 0, opacity: 0 }}
                transition={{ delay: 1.0, duration: TRANSITION_CONFIG.horizontalLine, ease: "easeOut" }}
                className="absolute inset-0 origin-center"
                style={{ background: `linear-gradient(to right, transparent, ${getGradientColors(team.color)}, transparent)` }}
              />
            </div>


            <div className={`grid gap-8 mt-0 max-w-5xl mx-auto ${getGridClass(team.members.length)}`}>
              {team.members.map((member, idx) => (
                <div key={idx} className="relative flex flex-col items-center">
                  <motion.div
                    initial={{ scaleY: 0, opacity: 0 }}
                    animate={isInView ? { scaleY: 1, opacity: 1 } : { scaleY: 0, opacity: 0 }}
                    transition={{ delay: 1.2 + idx * 0.35, duration: 0.9, ease: "easeOut" }}
                    className="w-0.5 h-16 origin-top"
                    style={{ background: `linear-gradient(to bottom, ${getGradientColors(team.color)})` }}
                  />
                  <MemberCard member={member} color={team.color} delay={1.4 + idx * 0.35} isInView={isInView} />
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </motion.div>
  );
};


const getGradientColors = (colorClass) => {
  const colorMap = {
    "from-blue-600 to-indigo-600": "rgba(37, 99, 235, 0.7), rgba(79, 70, 229, 0.7)",
    "from-purple-600 to-violet-600": "rgba(147, 51, 234, 0.7), rgba(124, 58, 237, 0.7)",
    "from-emerald-600 to-teal-600": "rgba(5, 150, 105, 0.7), rgba(13, 148, 136, 0.7)",
    "from-orange-600 to-red-600": "rgba(234, 88, 12, 0.7), rgba(220, 38, 38, 0.7)",
    "from-pink-600 to-rose-600": "rgba(219, 39, 119, 0.7), rgba(225, 29, 72, 0.7)",
    "from-cyan-600 to-blue-600": "rgba(8, 145, 178, 0.7), rgba(37, 99, 235, 0.7)",
    "from-indigo-600 to-purple-600": "rgba(79, 70, 229, 0.7), rgba(147, 51, 234, 0.7)",
    "from-teal-600 to-green-600": "rgba(13, 148, 136, 0.7), rgba(22, 163, 74, 0.7)",
  };
  return colorMap[colorClass] || "rgba(100, 116, 139, 0.7)";
};


const LeaderCard = ({ leader, color, isInView }) => (
  <motion.div
    initial={{ opacity: 0, scale: 0.75, y: 40 }}
    animate={isInView ? { opacity: 1, scale: 1, y: 0 } : { opacity: 0, scale: 0.75, y: 40 }}
    transition={{ duration: TRANSITION_CONFIG.leaderCardAppear, delay: 0.3, type: "spring", stiffness: 80 }}
    className="w-full max-w-md"
  >
    <motion.div
      whileHover={{ y: -12, scale: 1.02 }}
      transition={{ duration: TRANSITION_CONFIG.cardHover, type: "spring", stiffness: 300 }}
      className="group relative"
    >
      <motion.div
        animate={{ opacity: [0.3, 0.5, 0.3], scale: [1, 1.02, 1] }}
        transition={{ duration: 4, repeat: Infinity }}
        className={`absolute -inset-1 bg-gradient-to-r ${color} rounded-3xl blur-lg opacity-0 group-hover:opacity-40 transition duration-700`}
      />
      <div className="relative bg-white/95 dark:bg-gray-800/95 rounded-3xl p-10 shadow-2xl border-2 border-gray-100/80 dark:border-gray-700/80 backdrop-blur-2xl">
        <div className="flex flex-col items-center text-center">
          <motion.div
            whileHover={{ rotate: [0, -5, 5, 0], scale: 1.1 }}
            transition={{ duration: TRANSITION_CONFIG.avatarHover }}
            className="relative mb-8"
          >
            <div className={`absolute -inset-2 bg-gradient-to-r ${color} rounded-3xl blur opacity-50`} />
            <div className={`relative w-28 h-28 bg-gradient-to-br ${color} rounded-3xl flex items-center justify-center shadow-2xl ring-4 ring-white/50 dark:ring-gray-800/50 overflow-hidden`}>
              {leader.imageUrl ? (
                <img src={leader.imageUrl} alt={leader.name} className="w-full h-full object-cover" />
              ) : (
                <span className="text-white text-3xl font-bold tracking-tight">
                  {leader.name.split(" ").map((n) => n[0]).join("")}
                </span>
              )}
            </div>
          </motion.div>
          <h3 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-4 tracking-tight">
            {leader.name}
          </h3>
          <div className={`relative inline-flex items-center px-6 py-2.5 bg-gradient-to-r ${color} rounded-full shadow-lg`}>
            <span className="text-white font-semibold text-sm tracking-wide">{leader.role}</span>
          </div>
        </div>
      </div>
    </motion.div>
  </motion.div>
);


const MemberCard = ({ member, color, delay, isInView }) => (
  <motion.div
    initial={{ opacity: 0, y: 50, scale: 0.8 }}
    animate={isInView ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 50, scale: 0.8 }}
    transition={{ duration: TRANSITION_CONFIG.memberCardAppear, delay, type: "spring", stiffness: 80 }}
    whileHover={{ y: -10, scale: 1.03 }}
    className="group relative w-full"
  >
    <motion.div
      animate={{ opacity: [0.2, 0.4, 0.2] }}
      transition={{ duration: 4, repeat: Infinity, delay }}
      className={`absolute -inset-0.5 bg-gradient-to-br ${color} rounded-2xl blur opacity-0 group-hover:opacity-50 transition duration-500`}
    />
    <div className="relative bg-white/95 dark:bg-gray-800/95 rounded-2xl p-7 shadow-xl border border-gray-100/80 dark:border-gray-700/80 backdrop-blur-2xl h-full min-h-[240px]">
      <div className="flex flex-col items-center justify-between text-center h-full">
        <motion.div
          whileHover={{ rotate: [0, -8, 8, 0], scale: 1.15 }}
          transition={{ duration: TRANSITION_CONFIG.avatarHover }}
          className="relative mb-5"
        >
          <div className={`absolute -inset-1 bg-gradient-to-r ${color} rounded-2xl blur opacity-40`} />
          <div className={`relative w-20 h-20 bg-gradient-to-br ${color} rounded-2xl flex items-center justify-center shadow-lg ring-2 ring-white/50 dark:ring-gray-800/50 overflow-hidden`}>
            {member.imageUrl ? (
              <img src={member.imageUrl} alt={member.name} className="w-full h-full object-cover" />
            ) : (
              <span className="text-white text-xl font-bold">
                {member.name.split(" ").map((n) => n[0]).join("")}
              </span>
            )}
          </div>
        </motion.div>
        
        <div className="flex-1 flex flex-col items-center justify-center">
          <h4 className="text-lg md:text-xl font-bold text-gray-900 dark:text-white mb-3 tracking-tight leading-tight">
            {member.name}
          </h4>
          <div className="px-4 py-1.5 bg-gray-100 dark:bg-gray-700/70 rounded-full border border-gray-200 dark:border-gray-600">
            <p className="text-sm font-medium text-gray-700 dark:text-gray-300">{member.role}</p>
          </div>
        </div>
      </div>
    </div>
  </motion.div>
);


export default TeamPage;