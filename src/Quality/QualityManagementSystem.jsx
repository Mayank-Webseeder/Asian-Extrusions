import React from 'react';

const QualityManagementSystem = () => {
  return (
    <section className="bg-gray-50 py-16 px-4">
      <div className="max-w-4xl mx-auto text-center">
        {/* Main Heading */}
        <h2 className="text-5xl font-bold text-blue-900 mb-8">
          Quality Management System
        </h2>

        {/* Description */}
        <p className="text-lg text-blue-900 leading-relaxed mb-12 max-w-3xl mx-auto">
          AEPL has implemented a total quality management system in all the interactive product realization processes.
          From incoming to outgoing, all the functions pass through the defined set of parameters to achieve the highest
          degree of accuracy to fulfill the implied customer's need. The company is ISO 9001-2015 QMS certified by UKAS
          Management System.
        </p>

        {/* Two Column Layout */}
        <div className="grid md:grid-cols-2 gap-12 items-center">

          {/* Alloy Selection Guide */}
          <div className="flex flex-col items-center space-y-6">
            {/* Icon */}
            <div className="w-48 h-48 flex items-center justify-center">
              <svg
                width="100"
                height="100"
                viewBox="20 20 160 160"
                className="text-blue-900"
              >
                <path
                  d="M20 20v160c44.183 0 80-35.817 80-80S64.183 20 20 20z"
                  fill="currentColor"
                  fillRule="evenodd"
                />
                <path
                  d="M100 100c0 44.183 35.817 80 80 80V20c-44.183 0-80 35.817-80 80z"
                  fill="currentColor"
                  fillRule="evenodd"
                />
              </svg>
            </div>

            {/* Title */}
            <div className="text-center">
              <p className="text-xl font-medium text-gray-800">Alloy Selection</p>
              <p className="text-xl font-medium text-gray-800">Guide</p>
            </div>

            {/* Download Button */}
            <a
              href="/Doc/Alloy_Selection_Guide.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-blue-900  text-white px-6 py-3 rounded-lg font-medium transition-colors duration-200"
            >
              Download Now!

            </a>
          </div>

          {/* Typical Mechanical Properties */}
          <div className="flex flex-col items-center space-y-6">
            {/* Icon */}
            <div className="w-48 h-48 flex items-center justify-center">
              <svg
                width="100"
                height="100"
                viewBox="38.5 20 123 160"
                className="text-blue-900"
              >
                <path
                  d="M102.887 20v117.469c32.371 0 58.613-26.296 58.613-58.734C161.5 46.296 135.258 20 102.887 20z"
                  fill="currentColor"
                  fillRule="evenodd"
                />
                <path
                  d="M38.5 121.266C38.5 153.704 64.742 180 97.113 180V62.532c-32.371 0-58.613 26.296-58.613 58.734z"
                  fill="currentColor"
                  fillRule="evenodd"
                />
              </svg>
            </div>

            {/* Title */}
            <div className="text-center">
              <p className="text-xl font-medium text-gray-800">Typical Mechanical Properties</p>
            </div>

            {/* Download Button */}
            <a
              href="/Doc/Typical_Mechanical_Properties.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-blue-900  text-white px-6 py-3 rounded-lg font-medium transition-colors duration-200"
            >
              Download Now!
            </a>
          </div>

        </div>
      </div>
    </section>
  );
};

export default QualityManagementSystem;