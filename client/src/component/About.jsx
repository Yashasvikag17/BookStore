import React from 'react';

const About = () => {
 return (
    <div className="container mx-auto px-4 py-16">
      <h2 className="text-4xl font-bold mb-4 text-center">About Us</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="mb-4">
          <h3 className="text-xl font-semibold mb-2">Our History</h3>
          <p className="text-gray-700">
            The Book Store was established in 2010 with the mission of providing a
            welcoming space for readers of all ages and backgrounds. Over the years,
            we have expanded our offerings to include not only a wide selection of
            books but also an array of other educational materials.
          </p>
        </div>
        <div className="mb-4">
          <h3 className="text-xl font-semibold mb-2">Our Mission</h3>
          <p className="text-gray-700">
            Our mission is to promote a love of reading and learning through our
            exceptional selection of books and educational materials. We are
            committed to fostering a culture of inclusivity and understanding,
            encouraging readers of all ages and backgrounds to find their voices and
            connect with one another through the transformative power of storytelling.
          </p>
        </div>
        <div className="mb-4">
          <h3 className="text-xl font-semibold mb-2">Our Values</h3>
          <ul className="list-disc list-inside text-gray-700">
            <li>Support for independent bookstores</li>
            <li>Encouragement of lifelong learning</li>
            <li>Celebration of diversity and inclusion</li>
            <li>Commitment to sustainable and ethical practices</li>
          </ul>
        </div>
      </div>
    </div>
 );
};

export default About;