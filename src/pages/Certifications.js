import React from 'react';
import AssociateCloudEngLogo from '../assets/gcp_ace.png'; // Replace with the actual path to your logo image
import ProfessionalCloudArcLogo from '../assets/gcp_pca.png';
import AZ900 from '../assets/az-900.png';
import '../styles/Certifications.css'; // Import your CSS file for styling

function Certifications() {
    const certificationsList = [
        {
            name: 'Associate Cloud Engineer', authority: 'Google Cloud', date: 'October 2023',
            logo: AssociateCloudEngLogo,
            link: 'https://google.accredible.com/f886e57d-c667-409d-95ed-4fe5711a258c',
            desc: 'Associate Cloud Engineers deploy applications, monitor operations, and manage enterprise solutions. They use Google Cloud Console and the command-line interface to perform common platform-based tasks to maintain one or more deployed solutions that leverage Google-managed or self-managed services on Google Cloud.'
        },
        // {
        //     name: 'Professional Cloud Architect', authority: 'Google Cloud', date: 'January 2024',
        //     logo: ProfessionalCloudArcLogo,
        //     link: 'https://google.accredible.com/f886e57d-c667-409d-95ed-4fe5711a258c',
        //     desc: 'Professional Cloud Architects enable organizations to leverage Google Cloud technologies. With a thorough understanding of cloud architecture and Google Cloud, they design, develop, and manage robust, secure, scalable, highly available, and dynamic solutions to drive business objectives.'
        // },
        // {
        //     name: 'Azure Fundamentals (AZ-900)', authority: 'Microsoft', date: 'March 2024',
        //     logo: AZ900,
        //     link: 'https://google.accredible.com/f886e57d-c667-409d-95ed-4fe5711a258c',
        //     desc: 'As a candidate for this exam, you’re a technology professional who wants to demonstrate foundational knowledge of cloud concepts in general and Microsoft Azure in particular. This exam is a common starting point in a journey towards a career in Azure.'
        // },
        
        // Add more certifications as needed
    ];

    return (
        <div className="certifications-container">
          {certificationsList.map((certification, index) => (
            <div key={index} className="certification-card">
              <div className="logo-container">
                <a href={certification.link} target="_blank" rel="noopener noreferrer">
                  <img title='View Certification' src={certification.logo} alt="Cloud Logo" className="logo" />
                </a>
              </div>
              <div className="certification-info">
                <strong>{certification.name}</strong>
                <div>
                  <span className="authority">{certification.authority}</span> - {certification.date}
                </div>
                <div className="certification-description-container">
                  <p className="certification-description">{certification.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      );
}

export default Certifications;
