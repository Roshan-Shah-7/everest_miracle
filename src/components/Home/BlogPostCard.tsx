import React from 'react';
import type { BlogPost } from '../../types';

const BlogPostCard: React.FC<{ post: BlogPost }> = ({ post }) => (
    <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300 group flex flex-col">
        <div className="relative h-64 overflow-hidden">
            <img src={post.imageUrl} alt={post.title} className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500" />
            <div className="absolute top-4 left-4 bg-[#1a2336] text-white text-xs font-bold px-3 py-1 rounded-full">{post.category}</div>
        </div>
        <div className="p-6 flex flex-col">
            <h3 className="text-xl font-bold text-[#1a2336] mb-2">{post.title}</h3>
            <p className="text-gray-600 mb-4 text-sm">{post.excerpt}</p>
            <button className="text-[#97cc52] font-bold self-start hover:underline transition-all">Read More &rarr;</button>
        </div>
    </div>
);

export default BlogPostCard;