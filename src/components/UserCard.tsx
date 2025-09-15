import React from 'react';
import { Link } from 'react-router-dom';
import { User } from '../types/User';
import { Mail, Phone, Building2, MapPin, ArrowRight } from 'lucide-react';

interface UserCardProps {
  user: User;
}

const UserCard: React.FC<UserCardProps> = ({ user }) => {
  return (
    <div className="bg-white/90 backdrop-blur-sm rounded-xl shadow-sm border border-gray-100 hover:shadow-lg hover:bg-white transition-all duration-300 hover:-translate-y-1 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-transparent to-purple-500/5"></div>
      <div className="relative">
      <div className="p-6">
        <div className="flex items-start justify-between mb-4">
          <div>
            <h3 className="text-xl font-semibold text-gray-900 mb-1">{user.name}</h3>
            <p className="text-sm text-gray-500">@{user.username}</p>
          </div>
          <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-full flex items-center justify-center text-white font-semibold text-lg">
            {user.name.charAt(0)}
          </div>
        </div>
        
        <div className="space-y-3 mb-6">
          <div className="flex items-center text-gray-600">
            <Mail className="h-4 w-4 mr-3 text-blue-500" />
            <span className="text-sm truncate">{user.email}</span>
          </div>
          <div className="flex items-center text-gray-600">
            <Phone className="h-4 w-4 mr-3 text-emerald-500" />
            <span className="text-sm">{user.phone}</span>
          </div>
          <div className="flex items-center text-gray-600">
            <Building2 className="h-4 w-4 mr-3 text-purple-500" />
            <span className="text-sm truncate">{user.company.name}</span>
          </div>
          <div className="flex items-center text-gray-600">
            <MapPin className="h-4 w-4 mr-3 text-red-500" />
            <span className="text-sm">{user.address.city}</span>
          </div>
        </div>
        
        <Link
          to={`/user/${user.id}`}
          className="inline-flex items-center justify-center w-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white py-3 px-4 rounded-lg hover:from-blue-700 hover:to-indigo-700 transition-all duration-200 font-medium group"
        >
          <span>View Details</span>
          <ArrowRight className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform" />
        </Link>
      </div>
      </div>
    </div>
  );
};

export default UserCard;