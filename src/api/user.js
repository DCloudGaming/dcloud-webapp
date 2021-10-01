import axios from "../axios";

export const getOrCreateUser = async (wallet_address) => {
  const response = await axios({
    method: "post",
    url: `/users/getOrCreate`,
    data: {
      wallet_address: wallet_address, 
    }
  });
  return response.data;
}

export const authMetamask = async (wallet_address, signature) => {
  const response = await axios({
    method: "post",
    url: `/users/auth`,
    data: {
      wallet_address: wallet_address,
      signature: signature,
    },
    withCredentials: true
  });  
  return response.data;
}


export const getUser2 = async (wallet_address) => {
  const response = await axios({
    method: "get",
    url: `/users/profile?wallet_address=${wallet_address}`,
    withCredentials: true
  });  
  return response.data;
}

export const getUser = async (id) => {
  return {
    code: 200,
    message: "",
    error: null,
    data: {
      name: "Anh Huynh",
      location: "Singapore",
      createTime: 1632536814826 + Math.round(Math.random() * 100),
      streamer: sampleStreamer,
      wallet: sampleWallet,
    },
  };
};

export const transactionType = Object.freeze({
  TOP_UP: "Top up",
});

const generateSampleTransaction = () => {
  return {
    amount: Math.round(Math.random() * 100),
    createTime: 1632536814826 + Math.round(Math.random() * 100),
    type: transactionType.TOP_UP,
  };
};

const sampleWallet = {
  address: "3J98t1WpEZ73CNmQviecrnyiWrnqRhWNLy",
  balance: 530,
  currency: "DCLO.",
  transactions: [
    generateSampleTransaction(),
    generateSampleTransaction(),
    generateSampleTransaction(),
    generateSampleTransaction(),
    generateSampleTransaction(),
    generateSampleTransaction(),
    generateSampleTransaction(),
    generateSampleTransaction(),
    generateSampleTransaction(),
    generateSampleTransaction(),
  ],
};

const sampleHardware = {
  hardware: "MSI Aegis RS 11th Gen",
  avgConnection: "100km/h",
};

const sampleStreamer = {
  sessions: 134,
  hardware: sampleHardware,
};
