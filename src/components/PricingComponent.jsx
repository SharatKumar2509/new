const PricingComponent = () => {
  return (
    <div className="grid sm:grid-cols-2 font-custom grid-cols-1 gap-4">
      <div
        className={`bg-[#3f2caa] flex flex-col justify-center items-center h-[20vh] py-2 px-2 rounded-lg shadow-md text-white  text-center`}
      >
        <h2 className="sm:text-2xl text-xl font-semibold">Ad Spend</h2>
        <p>$500 or 7% of your budget, whichever is greater</p>
      </div>

      <div
        className={`bg-[#cd0202] flex flex-col justify-center items-center h-[20vh] py-2 px-2 rounded-lg shadow-md text-white  text-center`}
      >
        <h2 className="sm:text-2xl text-xl font-semibold">Content Writing or Blog</h2>
        <p>$20 per 500 words</p>
      </div>

      <div
        className={`bg-[#013220] flex flex-col justify-center items-center h-[20vh] py-2 px-2 rounded-lg shadow-md text-white  text-center`}
      >
        <h2 className="sm:text-2xl text-xl font-semibold">SEO</h2>
        <p>$500 to $5,000 or more</p>
      </div>

      <div
        className={`bg-black flex flex-col justify-center items-center h-[20vh] py-2 px-2 rounded-lg shadow-md text-white  text-center`}
      >
        <h2 className="sm:text-2xl text-xl font-semibold">Per Hour</h2>
        <p>$20 per hour</p>
      </div>

      <div
        className={`flex flex-col justify-center items-center h-[20vh] py-2 px-2 rounded-lg shadow-md text-black  text-center`}
        style={{backgroundColor: 'orange'}}
      >
        <h2 className="sm:text-2xl text-xl font-semibold">PPC Ads Management</h2>
        <p>$500 per month</p>
      </div>

      <div
        className={`flex flex-col justify-center items-center h-[20vh] py-2 px-2 rounded-lg shadow-md text-black  text-center`}
        style={{backgroundColor: 'limegreen'}}
      >
        <h2 className="sm:text-2xl text-xl font-semibold">Social Media Management</h2>
        <p>$500 per month</p>
      </div>

    </div>
  );
};

export default PricingComponent;

