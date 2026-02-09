import React from 'react';
import { NextStudio } from 'next-sanity/studio';
import config from '../sanity.config';

const AdminPage: React.FC = () => {
  return (
    <div className="h-screen w-full fixed inset-0 z-[100] bg-white">
      <NextStudio config={config} />
    </div>
  );
};

export default AdminPage;