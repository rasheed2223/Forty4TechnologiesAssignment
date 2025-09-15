import React, { useEffect, useState } from 'react';
import { useParams, Navigate } from 'react-router-dom';
import { useUser } from '../context/UserContext';
import { User } from '../types/User';
import { 
  Mail, 
  Phone, 
  Globe, 
  Building2, 
  MapPin, 
  Navigation,
  User as UserIcon,
  Briefcase
} from 'lucide-react';

const UserDetails: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const { state } = useUser();
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    if (id && state.users.length > 0) {
      const foundUser = state.users.find(u => u.id === parseInt(id));
      setUser(foundUser || null);
    }
  }, [id, state.users]);

  if (!id || isNaN(parseInt(id))) {
    return <Navigate to="/" replace />;
  }

  if (state.loading) {
    return (
      <div className="flex items-center justify-center min-h-[400px]">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
          <p className="text-gray-600">Loading user details...</p>
        </div>
      </div>
    );
  }

  if (!user) {
    return (
      <div className="text-center py-16">
        <div className="bg-gray-100 rounded-full p-4 mx-auto w-16 h-16 flex items-center justify-center mb-4">
          <UserIcon className="h-8 w-8 text-gray-400" />
        </div>
        <h3 className="text-lg font-semibold text-gray-900 mb-2">User not found</h3>
        <p className="text-gray-600">
          The user you're looking for doesn't exist or has been removed.
        </p>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto">
      {/* User Header */}
      <div className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-lg border border-gray-100 mb-8 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-purple-500/10"></div>
        <div className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-t-2xl p-8 relative">
          <div className="flex items-center space-x-6">
            <div className="w-24 h-24 bg-white rounded-full flex items-center justify-center shadow-lg">
              <span className="text-3xl font-bold text-blue-600">
                {user.name.charAt(0)}
              </span>
            </div>
            <div className="text-white">
              <h1 className="text-3xl font-bold mb-2">{user.name}</h1>
              <p className="text-blue-100 text-lg">@{user.username}</p>
              <p className="text-blue-200 mt-1">{user.company.name}</p>
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Contact Information */}
        <div className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-lg border border-gray-100 p-8 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/5 to-blue-500/5"></div>
          <div className="relative">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
            <Mail className="h-6 w-6 text-blue-600 mr-3" />
            Contact Information
          </h2>
          
          <div className="space-y-6">
            <div className="flex items-center space-x-4 p-4 bg-gray-50 rounded-xl">
              <Mail className="h-5 w-5 text-blue-500" />
              <div>
                <p className="text-sm font-medium text-gray-500">Email</p>
                <a 
                  href={`mailto:${user.email}`}
                  className="text-gray-900 hover:text-blue-600 transition-colors"
                >
                  {user.email}
                </a>
              </div>
            </div>
            
            <div className="flex items-center space-x-4 p-4 bg-gray-50 rounded-xl">
              <Phone className="h-5 w-5 text-emerald-500" />
              <div>
                <p className="text-sm font-medium text-gray-500">Phone</p>
                <a 
                  href={`tel:${user.phone}`}
                  className="text-gray-900 hover:text-emerald-600 transition-colors"
                >
                  {user.phone}
                </a>
              </div>
            </div>
            
            <div className="flex items-center space-x-4 p-4 bg-gray-50 rounded-xl">
              <Globe className="h-5 w-5 text-purple-500" />
              <div>
                <p className="text-sm font-medium text-gray-500">Website</p>
                <a 
                  href={`http://${user.website}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-900 hover:text-purple-600 transition-colors"
                >
                  {user.website}
                </a>
              </div>
            </div>
          </div>
          </div>
        </div>

        {/* Address Information */}
        <div className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-lg border border-gray-100 p-8 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-red-500/5 to-orange-500/5"></div>
          <div className="relative">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
            <MapPin className="h-6 w-6 text-red-600 mr-3" />
            Address
          </h2>
          
          <div className="space-y-4">
            <div className="p-4 bg-gray-50 rounded-xl">
              <p className="text-sm font-medium text-gray-500 mb-2">Street Address</p>
              <p className="text-gray-900">{user.address.street}, {user.address.suite}</p>
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              <div className="p-4 bg-gray-50 rounded-xl">
                <p className="text-sm font-medium text-gray-500 mb-2">City</p>
                <p className="text-gray-900">{user.address.city}</p>
              </div>
              
              <div className="p-4 bg-gray-50 rounded-xl">
                <p className="text-sm font-medium text-gray-500 mb-2">Zip Code</p>
                <p className="text-gray-900">{user.address.zipcode}</p>
              </div>
            </div>
            
            <div className="p-4 bg-gradient-to-r from-red-50 to-orange-50 rounded-xl border border-red-100">
              <div className="flex items-center space-x-2 mb-2">
                <Navigation className="h-4 w-4 text-red-600" />
                <p className="text-sm font-medium text-red-700">Coordinates</p>
              </div>
              <p className="text-gray-700">
                Lat: {user.address.geo.lat}, Lng: {user.address.geo.lng}
              </p>
            </div>
          </div>
          </div>
        </div>

        {/* Company Information */}
        <div className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-lg border border-gray-100 p-8 lg:col-span-2 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-indigo-500/5"></div>
          <div className="relative">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
            <Briefcase className="h-6 w-6 text-indigo-600 mr-3" />
            Company Information
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 bg-gradient-to-br from-indigo-50 to-blue-50 rounded-xl border border-indigo-100">
              <Building2 className="h-8 w-8 text-indigo-600 mb-3" />
              <p className="text-sm font-medium text-indigo-700 mb-2">Company</p>
              <p className="text-xl font-semibold text-gray-900">{user.company.name}</p>
            </div>
            
            <div className="p-6 bg-gradient-to-br from-purple-50 to-indigo-50 rounded-xl border border-purple-100">
              <div className="w-8 h-8 bg-purple-600 rounded-lg flex items-center justify-center mb-3">
                <span className="text-white font-bold text-sm">CP</span>
              </div>
              <p className="text-sm font-medium text-purple-700 mb-2">Catchphrase</p>
              <p className="text-gray-900 font-medium">{user.company.catchPhrase}</p>
            </div>
            
            <div className="p-6 bg-gradient-to-br from-emerald-50 to-green-50 rounded-xl border border-emerald-100">
              <div className="w-8 h-8 bg-emerald-600 rounded-lg flex items-center justify-center mb-3">
                <span className="text-white font-bold text-sm">BS</span>
              </div>
              <p className="text-sm font-medium text-emerald-700 mb-2">Business</p>
              <p className="text-gray-900 font-medium">{user.company.bs}</p>
            </div>
          </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserDetails;