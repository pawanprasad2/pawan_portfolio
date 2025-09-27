import React from "react";
import { ArrowRight, MapPin, Calendar, Coffee } from "lucide-react";

function Aboutpage() {
  return (
    <div className="min-h-screen  bg-[#1b1f24] border-t border-gray-700 text-white">
      {/* Header */}
      <div className=" mx-auto mt-15 lg:ml-30 ">
        <h1 className="text-6xl sm:text-7xl  lg:text-8xl font-extrabold tracking-tight mb-4">
          ABOUT ME
        </h1>
        <div className=" h-1 w-[50%] border border-yellow-500 sm:w-[19%] md:mx-0 bg-gradient-to-r from-yellow-500 to-yellow-400 md:w-[25%] rounded-full" />
      </div>
      <div className="max-w-4xl mx-auto px-6 pt-20 pb-16">
        <div className="mb-12">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
            <span className="text-sm text-green-400 font-medium">
              Available for work
            </span>
          </div>
          <h1 className="text-6xl md:text-7xl font-bold mb-6 tracking-tight">
            Pawan Prasad
          </h1>
          <p className="text-2xl text-gray-300 font-light mb-2">
            MERN Stack Developer
          </p>
          <p className="text-lg text-gray-400">
            Turning ideas into digital experiences
          </p>
        </div>

        <div className="w-full h-px bg-gray-700 mb-20"></div>

        {/* Main Story */}
        <div className="mb-20">
          <div className="max-w-3xl">
            <p className="text-xl text-gray-200 leading-relaxed mb-8">
              Hey there! I'm a recent BCA graduate with a genuine passion for
              web development. My coding journey started with curiosity and has
              grown into something I truly love doing. I've spent countless
              hours building projects, learning the MERN stack, and figuring out
              how to create applications that people actually want to use.
            </p>

            <p className="text-xl text-gray-200 leading-relaxed mb-8">
              What excites me most about development is{" "}
              <span className="text-white font-medium">
                solving problems through code
              </span>
              . Whether it's building a smooth user interface or architecting a
              solid backend, I enjoy the process of turning ideas into working
              applications. I believe in writing clean code that makes sense not
              just today, but months from now when someone else (or future me)
              has to work with it.
            </p>

            <p className="text-xl text-gray-200 leading-relaxed mb-8">
              I'm looking forward to joining a team where I can contribute,
              learn from experienced developers, and continue growing my skills.
              Every project is an opportunity to get better, and I'm
              <span className="text-white font-medium">
                {" "}
                excited about what we could build together
              </span>
              .
            </p>

            <div className="border-l-4 border-gray-600 pl-6 mt-10">
              <p className="italic text-gray-300 text-lg">
                "Code is like poetry - it should be beautiful, meaningful, and
                make others feel something."
              </p>
            </div>
          </div>
        </div>

        {/* Education Timeline */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold mb-12">My Journey</h2>
          <div className="relative">
            <div className="absolute left-6 top-0 bottom-0 w-px bg-gray-700"></div>

            <div className="space-y-10">
              <div className="flex items-start space-x-6 relative">
                <div className="w-4 h-4 bg-white rounded-full mt-3 flex-shrink-0 relative z-10 border-4 border-[#1b1f24]"></div>
                <div className="flex-1 pt-1">
                  <div className="bg-gray-800/50 rounded-xl p-6 border border-gray-700/50 hover:border-gray-600 transition-colors duration-200">
                    <div className="flex justify-between items-start mb-3">
                      <h3 className="text-xl font-bold">
                        Bachelor of Computer Applications
                      </h3>
                      <span className="bg-green-500/20 text-green-400 px-2 py-1 rounded text-xs">
                        Recent
                      </span>
                    </div>
                    <p className="text-gray-300 mb-2">
                      GS University, Shikohabad
                    </p>
                    <p className="text-sm text-gray-400 mb-3">2021-2024</p>
                    <p className="text-gray-300 text-sm">
                      Built a strong foundation in programming, data structures,
                      and web technologies
                    </p>
                  </div>
                </div>
              </div>

              <div className="flex items-start space-x-6 relative">
                <div className="w-4 h-4 bg-gray-400 rounded-full mt-3 flex-shrink-0 relative z-10 border-4 border-[#1b1f24]"></div>
                <div className="flex-1 pt-1">
                  <div className="bg-gray-800/30 rounded-xl p-6">
                    <h3 className="text-xl font-semibold mb-2">
                      Higher Secondary Education
                    </h3>
                    <p className="text-gray-400 mb-1">Assam</p>
                    <p className="text-sm text-gray-500">Science Stream</p>
                  </div>
                </div>
              </div>

              <div className="flex items-start space-x-6 relative">
                <div className="w-4 h-4 bg-gray-400 rounded-full mt-3 flex-shrink-0 relative z-10 border-4 border-[#1b1f24]"></div>
                <div className="flex-1 pt-1">
                  <div className="bg-gray-800/30 rounded-xl p-6">
                    <h3 className="text-xl font-semibold mb-2">
                      Secondary Education
                    </h3>
                    <p className="text-gray-400 mb-1">Arunachal Pradesh</p>
                    <p className="text-sm text-gray-500">Foundation</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Currently Section */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold mb-12">Right Now</h2>
          <div className="grid md:grid-cols-2 gap-10">
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="bg-gray-800 p-3 rounded-lg">
                  <Coffee className="text-gray-300" size={20} />
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-1">
                    Building & Learning
                  </h3>
                  <p className="text-gray-400">
                    Working on personal projects to strengthen my MERN stack
                    skills
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-gray-800 p-3 rounded-lg">
                  <Calendar className="text-gray-300" size={20} />
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-1">Job Ready</h3>
                  <p className="text-gray-400">
                    Available immediately for full-time opportunities
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-gray-800 p-3 rounded-lg">
                  <MapPin className="text-gray-300" size={20} />
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-1">
                    Location Flexible
                  </h3>
                  <p className="text-gray-400">
                    Open to remote work and relocation
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-gray-800/40 rounded-xl p-8">
              <h3 className="text-xl font-bold mb-6">What I'm Focused On</h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-gray-200">Full-stack Development</span>
                  <span className="text-xs bg-gray-700 px-2 py-1 rounded text-gray-300">
                    Learning
                  </span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-200">React Applications</span>
                  <span className="text-xs bg-gray-700 px-2 py-1 rounded text-gray-300">
                    Building
                  </span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-200">Node.js APIs</span>
                  <span className="text-xs bg-gray-700 px-2 py-1 rounded text-gray-300">
                    Practicing
                  </span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-200">Database Design</span>
                  <span className="text-xs bg-gray-700 px-2 py-1 rounded text-gray-300">
                    Exploring
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Aboutpage;
