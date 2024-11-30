import React, { useState, useMemo } from 'react';
import Footer from "../components/Footer";
import { Link } from 'react-router-dom';
import { FaQuestionCircle, FaTags, FaTrophy, FaUserAlt, FaThumbsUp, FaCommentDots, FaTimes } from 'react-icons/fa';
import { HiOutlinePlusCircle } from 'react-icons/hi';

const ForumPage = () => {
  const [threads, setThreads] = useState([
    {
      id: 1,
      author: "Amina",
      content: "My son suffers from intense lightening, how can I help him?",
      timestamp: "6 min ago",
      avatar: "Sensory scape/src/assets/Ava.png"
    },
    {
      id: 2,
      author: "Ala",
      content: "What is a difference between Hyper nad Hyposensitivity?",
      timestamp: "25 min ago",
      avatar: "./avatar2.png"
    },
    {
      id: 3,
      author: "Sameh",
      content: "What are the best centers to enroll my daughter in Grand Tunis?",
      timestamp: "3 days ago",
      avatar: "./avatar3.png"
    }
  ]);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [newThread, setNewThread] = useState({ content: '' });
  const [activeFilter, setActiveFilter] = useState('new');
  const [activeMenu, setActiveMenu] = useState('');

  // Use useMemo to memoize filtered threads
  const filteredThreads = useMemo(() => {
    let sorted = [...threads];
    
    switch(activeFilter) {
      case 'top':
        return sorted.sort((a, b) => b.id - a.id);
      case 'hot':
        return sorted.sort((a, b) => a.timestamp.localeCompare(b.timestamp));
      case 'closed':
        return sorted.filter(thread => thread.closed);
      default:
        return sorted.sort((a, b) => b.id - a.id);
    }
  }, [threads, activeFilter]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!newThread.content.trim()) return;

    const thread = {
      id: threads.length + 1,
      author: "Current User",
      content: newThread.content,
      timestamp: "Just now",
      avatar: "Sensory scape/src/assets/Ava.png"
    };

    setThreads(prevThreads => [thread, ...prevThreads]);
    setNewThread({ content: '' });
    setIsModalOpen(false);
  };

  const menuItems = [
    { 
      icon: FaQuestionCircle, 
      name: 'Questions', 
      key: 'questions' 
    },
    { 
      icon: FaTags, 
      name: 'Tags', 
      key: 'tags' 
    },
    { 
      icon: FaTrophy, 
      name: 'Ranking', 
      key: 'ranking' 
    },
    { 
      icon: FaUserAlt, 
      name: 'Your questions', 
      key: 'your-questions' 
    },
    { 
      icon: FaThumbsUp, 
      name: 'Your answers', 
      key: 'your-answers' 
    },
    { 
      icon: FaCommentDots, 
      name: 'Your likes & votes', 
      key: 'likes-votes' 
    }
  ];

  return (
    <div className="bg-gray-100 min-h-screen">
      <header className="bg-white shadow-md py-4">
        <div className="container mx-auto flex justify-between items-center px-4">
          <div className="flex items-center">
            <Link to="/">
              <img 
                src=".\src\assets\LOGO2.png" 
                alt="SensoryForums"  
                className="h-8 mr-4 cursor-pointer hover:opacity-75 transition-opacity"
              />
            </Link>
          </div>
          <button 
            onClick={() => setIsModalOpen(true)}
            className="bg-green-500 hover:bg-green-600 text-white font-medium py-2 px-4 rounded-lg flex items-center space-x-2"
          >
            <HiOutlinePlusCircle className="text-lg" />
            <span>Add a thread</span>
          </button>
        </div>
      </header>

      <main className="container mx-auto py-8 px-4">
        <div className="grid grid-cols-4 gap-8">
          {/* Sidebar Menu */}
          <div className="col-span-1 bg-white shadow-md rounded-lg p-6">
            <h3 className="font-bold text-gray-800 mb-4">MENU</h3>
            <ul className="space-y-2 text-gray-600">
              {menuItems.map((item) => (
                <li 
                  key={item.key}
                  onClick={() => setActiveMenu(item.key)}
                  className={`flex items-center space-x-2 hover:text-green-700 cursor-pointer ${
                    activeMenu === item.key ? 'text-green-700' : ''
                  }`}
                >
                  <item.icon className="text-xl" />
                  <span>{item.name}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Thread List - Only show when 'Questions' is selected */}
          {activeMenu === 'questions' && (
            <div className="col-span-3">
              <div className="bg-white shadow-md rounded-lg p-6 mb-6">
                <div className="flex justify-between items-center mb-4">
                  <h2 className="font-bold text-gray-800">Thread</h2>
                  <div className="flex space-x-4">
                    {['new', 'top', 'hot', 'closed'].map((filter) => (
                      <button
                        key={filter}
                        onClick={() => setActiveFilter(filter)}
                        className={`${
                          activeFilter === filter
                            ? 'text-blue-500'
                            : 'text-gray-500 hover:text-gray-600'
                        }`}
                      >
                        {filter.charAt(0).toUpperCase() + filter.slice(1)}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="space-y-6">
                  {filteredThreads.map((thread) => (
                    <div key={thread.id} className="bg-gray-50 rounded-lg p-4">
                      <div className="flex items-center justify-between mb-2">
                        <div className="flex items-center">
                          <img src={thread.avatar} alt={thread.author} className="rounded-full w-8 h-8 mr-2" />
                          <span className="font-medium text-gray-800">{thread.author}</span>
                        </div>
                        <div className="text-gray-500 text-sm">{thread.timestamp}</div>
                      </div>
                      <p className="text-gray-700">{thread.content}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>
      </main>

      {/* Add Thread Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-6 w-full max-w-lg">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-xl font-bold">Create New Thread</h3>
              <button
                onClick={() => setIsModalOpen(false)}
                className="text-gray-500 hover:text-gray-700"
              >
                <FaTimes />
              </button>
            </div>
            <form onSubmit={handleSubmit}>
              <textarea
                value={newThread.content}
                onChange={(e) => setNewThread({ content: e.target.value })}
                className="w-full border rounded-lg p-2 mb-4 h-32 resize-none"
                placeholder="What's on your mind?"
              />
              <div className="flex justify-end space-x-2">
                <button
                  type="button"
                  onClick={() => setIsModalOpen(false)}
                  className="px-4 py-2 text-gray-600 hover:text-gray-800"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600"
                >
                  Post Thread
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default ForumPage;