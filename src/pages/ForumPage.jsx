import React from 'react';
import Footer from "../components/Footer";
import { FaQuestionCircle, FaTags, FaTrophy, FaUserAlt, FaThumbsUp, FaCommentDots } from 'react-icons/fa';
import { HiOutlinePlusCircle } from 'react-icons/hi';

const ForumPage = () => {
  return (
    <div className="bg-gray-100 min-h-screen">
      <header className="bg-white shadow-md py-4">
        <div className="container mx-auto flex justify-between items-center px-4">
          <div className="flex items-center">
            <img src="./logo.png" alt="SensoryForums" className="h-8 mr-4" />
            <span className="font-bold text-gray-800 text-lg">SensoryForums</span>
          </div>
          <button className="bg-green-500 hover:bg-green-600 text-white font-medium py-2 px-4 rounded-lg flex items-center space-x-2">
            <HiOutlinePlusCircle className="text-lg" />
            <span>Add a thread</span>
          </button>
        </div>
      </header>

      <main className="container mx-auto py-8 px-4">
        <div className="grid grid-cols-4 gap-8">
          <div className="col-span-1 bg-white shadow-md rounded-lg p-6">
            <h3 className="font-bold text-gray-800 mb-4">MENU</h3>
            <ul className="space-y-2 text-gray-600">
              <li className="flex items-center space-x-2 hover:text-blue-600 cursor-pointer">
                <FaQuestionCircle className="text-xl" />
                <span>Questions</span>
              </li>
              <li className="flex items-center space-x-2 hover:text-blue-600 cursor-pointer">
                <FaTags className="text-xl" />
                <span>Tags</span>
              </li>
              <li className="flex items-center space-x-2 hover:text-blue-600 cursor-pointer">
                <FaTrophy className="text-xl" />
                <span>Ranking</span>
              </li>
              <li className="flex items-center space-x-2 hover:text-blue-600 cursor-pointer">
                <FaUserAlt className="text-xl" />
                <span>Your questions</span>
              </li>
              <li className="flex items-center space-x-2 hover:text-blue-600 cursor-pointer">
                <FaThumbsUp className="text-xl" />
                <span>Your answers</span>
              </li>
              <li className="flex items-center space-x-2 hover:text-blue-600 cursor-pointer">
                <FaCommentDots className="text-xl" />
                <span>Your likes & votes</span>
              </li>
            </ul>
          </div>

          <div className="col-span-3">
            <div className="bg-white shadow-md rounded-lg p-6 mb-6">
              <div className="flex justify-between items-center mb-4">
                <h2 className="font-bold text-gray-800">Thread</h2>
                <div className="flex space-x-4">
                  <button className="text-blue-500 hover:text-blue-600">New</button>
                  <button className="text-gray-500 hover:text-gray-600">Top</button>
                  <button className="text-gray-500 hover:text-gray-600">Hot</button>
                  <button className="text-gray-500 hover:text-gray-600">Closed</button>
                </div>
              </div>

              <div className="space-y-6">
                <div className="bg-gray-50 rounded-lg p-4">
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center">
                      <img src="./avatar1.png" alt="Golanginya" className="rounded-full w-8 h-8 mr-2" />
                      <span className="font-medium text-gray-800">Golanginya</span>
                    </div>
                    <div className="text-gray-500 text-sm">6 min ago</div>
                  </div>
                  <p className="text-gray-700">
                    My son suffers from intense lightening, how can I help him?
                  </p>
                  <div className="flex items-center space-x-2 mt-2 text-gray-500 text-sm">
                    <span>gelang</span>
                    <span>issue</span>
                    <span>overflow</span>
                    <span>125</span>
                    <span>15</span>
                    <span>155</span>
                  </div>
                </div>

                <div className="bg-gray-50 rounded-lg p-4">
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center">
                      <img src="./avatar2.png" alt="Linuxoid" className="rounded-full w-8 h-8 mr-2" />
                      <span className="font-medium text-gray-800">Linuxoid</span>
                    </div>
                    <div className="text-gray-500 text-sm">25 min ago</div>
                  </div>
                  <p className="text-gray-700">
                    What is a difference between Hyper nad Hyposensitivity?
                  </p>
                  <div className="flex items-center space-x-2 mt-2 text-gray-500 text-sm">
                    <span>java</span>
                    <span>javascript</span>
                    <span>wifi</span>
                    <span>125</span>
                    <span>15</span>
                    <span>155</span>
                  </div>
                </div>

                <div className="bg-gray-50 rounded-lg p-4">
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center">
                      <img src="./avatar3.png" alt="AizhanMaratovna" className="rounded-full w-8 h-8 mr-2" />
                      <span className="font-medium text-gray-800">AizhanMaratovna</span>
                    </div>
                    <div className="text-gray-500 text-sm">3 days ago</div>
                  </div>
                  <p className="text-gray-700">
                    What are the best centers to enroll my daughter in Grand Tunis?
                  </p>
                  <div className="flex items-center space-x-2 mt-2 text-gray-500 text-sm">
                    <span>svelte</span>
                    <span>javascript</span>
                    <span>recommendations</span>
                    <span>125</span>
                    <span>15</span>
                    <span>155</span>
                  </div>
                </div>

                <div className="bg-gray-50 rounded-lg p-4">
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center">
                      <img src="./avatar4.png" alt="Lola" className="rounded-full w-8 h-8 mr-2" />
                      <span className="font-medium text-gray-800">Lola</span>
                    </div>
                    <div className="text-gray-500 text-sm">2 days ago</div>
                  </div>
                  <p className="text-gray-700">
                    What are the best centers to enroll my daughter in Grand Tunis?
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      <footer className="bg-gray-800 text-white py-6">
      <Footer />

      </footer>
    </div>
  );
};

export default ForumPage;
