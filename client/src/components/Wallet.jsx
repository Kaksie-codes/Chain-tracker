const Wallet = () => {
    // Function to format the wallet address
    const address = `0x32Be343B94f860124dC4fEe278FDCBD38C102D88`;
    const balance = `0.1234SOL`;
  
    // Function to format the wallet address
    const formatAddress = (addr) => {
      if (!addr) return "";
      return `${addr.slice(0, 5)}...${addr.slice(-6)}`;
    };
  
    // Function to generate a random hex color code
    const generateRandomColor = () => {
      return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
    };
  
    // Generate a random color
    const randomColor = generateRandomColor();
  
    return (
      <div className="border border-[#835C7A] flex gap-3 p-2 rounded-xl w-fit">
        {/* Apply random color to the background of the div */}
        <div className="rounded-[50%] h-[40px] w-[40px]" style={{ backgroundColor: randomColor }}></div>
        <div className="flex flex-col gap-0 leading-3">
          {/* Display the formatted address */}
          <span className="text-[#B8B8B8] text-sm">{formatAddress(address)}</span>
          {/* Display the balance */}
          <span className="text-white text-lg font-bold -mt-1">{balance}</span>
        </div>
      </div>
    );
  };
  
  export default Wallet;
  