import React, { useEffect, useState } from 'react';
import { useUser } from '../context/UserContext';
import { User } from '../types/User';
import UserCard from '../components/UserCard';
import SearchBar from '../components/SearchBar';
import UserForm from '../components/UserForm';
import { Plus, Users, Loader } from 'lucide-react';

const Dashboard: React.FC = () => {
  const { state, dispatch } = useUser();
  const [searchTerm, setSearchTerm] = useState('');
  const [showForm, setShowForm] = useState(false);

  useEffect(() => {
    const fetchUsers = async () => {
      dispatch({ type: 'SET_LOADING', payload: true });
      try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users');
        const users: User[] = await response.json();
        dispatch({ type: 'SET_USERS', payload: users });
      } catch (error) {
        dispatch({ type: 'SET_ERROR', payload: 'Failed to fetch users' });
      }
    };

    if (state.users.length === 0) {
      fetchUsers();
    }
  }, [dispatch, state.users.length]);

  const filteredUsers = state.users.filter(user =>
    user.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  if (state.loading) {
    return (
      <div className="flex items-center justify-center min-h-[400px]">
        <div className="text-center">
          <Loader className="h-8 w-8 animate-spin text-blue-600 mx-auto mb-4" />
          <p className="text-gray-600">Loading users...</p>
        </div>
      </div>
    );
  }

  if (state.error) {
    return (
      <div className="flex items-center justify-center min-h-[400px]">
        <div className="text-center">
          <div className="bg-red-100 rounded-full p-4 mx-auto w-16 h-16 flex items-center justify-center mb-4">
            <Users className="h-8 w-8 text-red-600" />
          </div>
          <h3 className="text-lg font-semibold text-gray-900 mb-2">Error Loading Users</h3>
          <p className="text-red-600 mb-4">{state.error}</p>
          <button
            onClick={() => window.location.reload()}
            className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors"
          >
            Try Again
          </button>
        </div>
      </div>
    );
  }

  return (
    <div>
      <div className="text-center mb-8 relative">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-3xl blur-3xl"></div>
        <div className="relative bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg border border-white/20">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">
          Welcome to Your Dashboard
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Manage and explore user profiles with ease. Search through users, view detailed information,
          and create new user profiles.
        </p>
        </div>
      </div>

      <SearchBar searchTerm={searchTerm} onSearchChange={setSearchTerm} />

      <div className="flex justify-between items-center mb-8">
        <div className="flex items-center space-x-2">
          <Users className="h-5 w-5 text-gray-600" />
          <span className="text-lg font-semibold text-gray-900">
            {filteredUsers.length} {filteredUsers.length === 1 ? 'User' : 'Users'}
            {searchTerm && ` found for "${searchTerm}"`}
          </span>
        </div>
        
        <button
          onClick={() => setShowForm(true)}
          className="flex items-center space-x-2 bg-gradient-to-r from-emerald-600 to-green-600 text-white px-4 py-2 rounded-lg hover:from-emerald-700 hover:to-green-700 transition-all duration-200 shadow-lg hover:shadow-xl"
        >
          <Plus className="h-5 w-5" />
          <span>Create User</span>
        </button>
      </div>

      {filteredUsers.length === 0 && searchTerm ? (
        <div className="text-center py-16">
          <div className="bg-gray-100 rounded-full p-4 mx-auto w-16 h-16 flex items-center justify-center mb-4">
            <Users className="h-8 w-8 text-gray-400" />
          </div>
          <h3 className="text-lg font-semibold text-gray-900 mb-2">No users found</h3>
          <p className="text-gray-600">
            Try adjusting your search terms or create a new user.
          </p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredUsers.map((user) => (
            <UserCard key={user.id} user={user} />
          ))}
        </div>
      )}

      {showForm && <UserForm onClose={() => setShowForm(false)} />}
    </div>
  );
};

export default Dashboard;