import React from 'react';
import { LendContainer } from '../components/LendContainer';
import BackIcon from '../assets/icon/back-icon.png';

const AppPageTitle = ({ heading, subHeading }) => (
  <div className="h-20 w-full border-b border-t border-gray-600 flex items-center">
    <div className="w-11/12 xl:w-11/12 2xl:w-5/6 3xl:w-9/12 mx-auto flex-col text-white">
      <div className="font-semibold text-xl sm:text-lg mb-1 sm:mb-1">{heading}</div>
      <div className="text-gray-400 text-xs sm:text-sm">{subHeading}</div>
    </div>
  </div>
);

const LendPage = () => {
  const navigateToMarkets = () => {
    // Handle navigation to markets
  };

  return (
    <div className="default-background">
      <AppPageTitle heading="Lend Assets" subHeading="Deposit and Withdraw tokens." />
      <div className="w-11/12 xl:w-11/12 2xl:w-5/6 3xl:w-9/12 mx-auto">
        <button
          className="flex items-center mt-6 text-[#5DDEFA] text-xs font-semibold hover:opacity-80"
          onClick={navigateToMarkets}
        >
          <img src={BackIcon} className="w-2 mr-1.5" alt="Back Icon" />
          Back to Market
        </button>
      </div>
      <LendContainer />
    </div>
  );
};

export default LendPage;
