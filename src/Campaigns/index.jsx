import React from 'react';
import Accordion from '../Accordion';
import TableManagement from '../TableManagement';
import './style.css';

const Campaigns = () => {
  const data = [
    {
      name: 'Sonam Sinha',
      deliverables: [
        {
          id: 'IGO0000001',
          deliverable: 'Instagram Reel',
          name: 'Sonam insta shampoo reel',
          creatorPrice: '₹ 50,000',
          brandPrice: '₹ 53,234',
          approved: true,
          goLiveDate: '2023-09-23',
          published: true,
          publishedDate: '2023-09-23',
          postLink: 'www.instagram.com/reel/xyz...',
          affiliateLink: 'www.instagram.com/aff/xyz...',
        },
        {
          id: 'IGO0000002',
          deliverable: 'Youtube Shorts',
          name: 'Sonam youtube shampoo video',
          creatorPrice: '₹ 50,000',
          brandPrice: '₹ 53,234',
          approved: true,
          goLiveDate: '2023-09-24',
          published: true,
          publishedDate: '2023-09-24',
          postLink: 'www.instagram.com/reel/abc...',
          affiliateLink: 'www.instagram.com/aff/abc...',
        },
      ],
    },
  ];

  return (
    <div className="management-container">
        <p>Campaigns / <span className='fs-6 fw-bold'>Biotique Cucumber Toner</span> </p>
      <div className='d-flex justify-content-between'>
      <nav className="management-nav">
        <a href="#" className="active">Campaign Details</a>
        <a href="#">Creator Mix</a>
        <a href="#">Shortlisted Creator List</a>
        <a href="#">Management</a>
      </nav>

      <div className="button-bar">
        <button className="add-creators-button me-2">Add More Creators</button>
        <button className="download-button">Download As Excel</button>
       
      </div>
      </div>

      <Accordion title="Sonam Sinha" >
        <TableManagement />
      </Accordion>

      <Accordion title="John Doe">
        <TableManagement />
      </Accordion>

      <Accordion title="Jane Smith">
        <TableManagement />
      </Accordion>
    </div>
  );
};

export default Campaigns;
